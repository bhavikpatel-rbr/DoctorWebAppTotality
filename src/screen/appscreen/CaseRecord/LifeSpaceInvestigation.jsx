import React, { useState, useEffect, useRef, useCallback } from "react";
import { BsMicFill, BsMicMute } from "react-icons/bs";
import Select from "react-select"; // Using react-select for a nicer dropdown

// Check for SpeechRecognition API availability once
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const isSpeechRecognitionSupported = !!SpeechRecognition;

// --- Constants ---
const RESTART_DELAY_MS = 300; // Slightly adjusted delay
const DEBUG = true; // Enable console logging

const log = (...args) => {
  if (DEBUG) console.log("[SpeechRecognition]", ...args);
};

// --- Language Options ---
const languageOptions = [
  { value: "en-US", label: "English (US)" },
  { value: "hi-IN", label: "हिन्दी (Hindi)" },
  { value: "gu-IN", label: "ગુજરાતી (Gujarati)" },
];

// --- Placeholder Translation Function ---
// !! IMPORTANT: Replace this with a real translation implementation !!
// This might involve calling your backend, which then uses Google Translate API, Azure, etc.
// --- Placeholder Translation Function ---
// !! IMPORTANT: Replace this with a real translation implementation !!

async function translateToEnglish(text, sourceLang) {
  log(`TRANSLATE (Calling Backend): "${text}" from ${sourceLang} to en`);
  if (!text || sourceLang.startsWith("en")) {
    // Don't translate empty or already English text
    return text || "";
  }

  // --- Make API call to YOUR backend endpoint ---
  try {
    const response = await fetch("/api/translate", {
      // YOUR backend route
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any necessary authentication headers if your backend requires them
      },
      body: JSON.stringify({
        text: text,
        sourceLang: sourceLang, // e.g., 'hi-IN'
        targetLang: "en",
      }),
    });

    if (!response.ok) {
      // Handle errors from your backend (e.g., rate limits, API key issues)
      const errorData = await response.json().catch(() => ({})); // Try to get error details
      throw new Error(
        `Translation backend failed: ${response.status} ${
          response.statusText
        } - ${errorData.message || "No details"}`
      );
    }

    const data = await response.json(); // Expect { translatedText: "..." } from your backend

    if (!data.translatedText) {
      throw new Error("Backend returned empty translation.");
    }

    log(`TRANSLATED (from Backend): "${data.translatedText}"`);
    return data.translatedText; // Return the actual English text
  } catch (error) {
    console.error("Translation API Call Error:", error);
    // Fallback: Return original text with an error indicator
    return `${text} [Translation Error]`;
  }
}

// --- Component ---
const LifeSpaceInvestigation = () => {
  // State
  const [isRecording, setIsRecording] = useState(false); // User's intent via button
  const [isListening, setIsListening] = useState(false); // API actually active?
  const [finalTranscriptOriginal, setFinalTranscriptOriginal] = useState(""); // Recognized text (original lang) - for potential display/debug
  const [finalTranscriptEnglish, setFinalTranscriptEnglish] = useState(""); // Translated text (English) - PRIMARY DISPLAY
  const [interimTranscriptOriginal, setInterimTranscriptOriginal] =
    useState(""); // Interim text (original lang)
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]); // Default to English
  const [isTranslating, setIsTranslating] = useState(false); // Loading state for translation

  // Refs
  const recognitionRef = useRef(null);
  const userStoppedRef = useRef(false);
  const restartTimerRef = useRef(null);
  const textareaRef = useRef(null);
  const lastProcessedFinalTextRef = useRef(""); // Avoid re-translating same text on restarts

  // --- Translation Handler ---
  const translateAndAppend = useCallback(
    async (textToTranslate, sourceLang) => {
      if (
        !textToTranslate ||
        textToTranslate === lastProcessedFinalTextRef.current
      ) {
        log(
          "Skipping translation for empty or already processed text:",
          textToTranslate
        );
        return;
      }
      setIsTranslating(true);
      lastProcessedFinalTextRef.current = textToTranslate; // Mark as processed
      try {
        const translated = await translateToEnglish(
          textToTranslate,
          sourceLang
        );
        setFinalTranscriptEnglish(
          (prev) => (prev ? prev.trim() + " " : "") + translated.trim()
        );
        // Optionally clear the original final transcript accumulation if needed
        // setFinalTranscriptOriginal("");
      } catch (error) {
        console.error("Translation process error:", error);
        // Append original text if translation fails?
        setFinalTranscriptEnglish(
          (prev) =>
            (prev ? prev.trim() + " " : "") +
            textToTranslate.trim() +
            " [Translation Failed]"
        );
      } finally {
        setIsTranslating(false);
      }
    },
    []
  ); // Depends only on the translation function itself

  // --- Speech Recognition Handlers (Stable References using useCallback) ---

  const handleResult = useCallback(
    (event) => {
      log("handleResult triggered");
      let interim = "";
      let finalOriginal = "";

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const transcriptPart = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalOriginal += transcriptPart + " ";
        } else {
          interim += transcriptPart;
        }
      }

      // Update interim transcript (original language) for immediate feedback
      setInterimTranscriptOriginal(interim.trim());

      // If a final part arrived, translate it and append to English transcript
      if (finalOriginal.trim()) {
        log("Final Part (Original):", finalOriginal.trim());
        setFinalTranscriptOriginal(
          // Keep track of original if needed
          (prev) => (prev ? prev.trim() + " " : "") + finalOriginal.trim()
        );
        // Trigger translation for the new final part
        translateAndAppend(finalOriginal.trim(), selectedLanguage.value);
        setInterimTranscriptOriginal(""); // Clear interim once final arrives for the utterance
      }
    },
    [selectedLanguage, translateAndAppend]
  ); // Depends on selected language & translation function

  const handleEnd = useCallback(() => {
    log("handleEnd triggered");
    setIsListening(false); // API stopped listening

    if (userStoppedRef.current) {
      log("Stopped by user flag.");
      recognitionRef.current = null;
      userStoppedRef.current = false; // Reset flag
      setIsRecording(false); // Update main button state
      setInterimTranscriptOriginal("");
      if (restartTimerRef.current) clearTimeout(restartTimerRef.current);
      return; // Don't restart
    }

    // --- Automatic Restart Logic ---
    if (isRecording) {
      // Check if user *still intends* to record
      log("Unexpected end. Scheduling restart...");
      recognitionRef.current = null; // Clear ref
      setInterimTranscriptOriginal(""); // Clear interim

      if (restartTimerRef.current) clearTimeout(restartTimerRef.current);
      restartTimerRef.current = setTimeout(() => {
        if (isRecording && !userStoppedRef.current) {
          // Double check state before restarting
          log("Restarting recognition...");
          startListening(true); // Pass restart flag
        } else {
          log(
            "Restart aborted (isRecording false or user stopped during delay)"
          );
          setIsRecording(false); // Ensure consistency
        }
      }, RESTART_DELAY_MS);
    } else {
      log("Ended while not recording. No restart needed.");
      recognitionRef.current = null; // Ensure ref is clear
    }
  }, [isRecording]); // Depends on isRecording state

  const handleError = useCallback((event) => {
    log("handleError triggered:", event.error, event.message);
    setIsListening(false); // API stopped

    // Handle fatal errors first
    if (
      event.error === "not-allowed" ||
      event.error === "service-not-allowed"
    ) {
      alert(`Error: ${event.error}. Please grant microphone permissions.`);
      userStoppedRef.current = true; // Prevent restart attempts
      setIsRecording(false); // Stop user intent
      if (recognitionRef.current) {
        recognitionRef.current.onend = null; // Detach handlers before abort
        recognitionRef.current.onerror = null;
        recognitionRef.current.abort();
        recognitionRef.current = null;
      }
      setInterimTranscriptOriginal("");
      if (restartTimerRef.current) clearTimeout(restartTimerRef.current);
      return;
    }

    // Handle no-speech gracefully
    if (event.error === "no-speech") {
      log("No speech detected for a period.");
      // Let handleEnd take care of restarting if the service stopped
      return;
    }

    // For other errors (network, audio-capture), log them. handleEnd will likely trigger.
    log(`Non-fatal error: ${event.error}. Allowing restart mechanism.`);
    alert(
      `Recognition Error: ${event.error} - Check connection/mic. System may try to restart.`
    );

    // Don't necessarily set isRecording=false here, let handleEnd try to recover
    if (recognitionRef.current) {
      // We might still want to try stopping the current instance cleanly
      // recognitionRef.current.stop(); // Let onend handle cleanup/restart
    }
  }, []); // No external state dependencies needed here

  // --- Control Functions ---

  const startListening = useCallback(
    (isRestart = false) => {
      if (!isSpeechRecognitionSupported) {
        if (!isRestart) alert("Speech Recognition API is not supported.");
        return;
      }
      if (isListening || recognitionRef.current) {
        log("Start called while already listening or ref exists.");
        return;
      }

      log(
        `Starting listening. Language: ${selectedLanguage.value}. Restart: ${isRestart}`
      );
      userStoppedRef.current = false; // Reset stop flag

      if (!isRestart) {
        // Reset transcripts for a fresh start
        setFinalTranscriptOriginal("");
        setFinalTranscriptEnglish("");
        setInterimTranscriptOriginal("");
        lastProcessedFinalTextRef.current = ""; // Reset processed text tracker
        setIsRecording(true); // Set user intent (button state)
      }

      // --- Create and configure instance ---
      try {
        const recognition = new SpeechRecognition();
        recognitionRef.current = recognition;

        recognition.lang = selectedLanguage.value; // Set selected language
        recognition.interimResults = true;
        recognition.continuous = true;
        recognition.maxAlternatives = 1;

        // Assign stable handlers
        recognition.onresult = handleResult;
        recognition.onend = handleEnd;
        recognition.onerror = handleError;

        // --- Start ---
        recognition.start();
        setIsListening(true); // Mark API as active
        log("recognition.start() called successfully.");
      } catch (error) {
        console.error("Error creating/starting recognition:", error);
        recognitionRef.current = null; // Clear failed ref
        setIsListening(false);
        if (!isRestart) {
          setIsRecording(false); // Turn off button state if initial start fails
          alert(`Could not start recognition: ${error.message}`);
        } else {
          // If restart fails, handleEnd might be triggered or already handled
          log("Restart failed during start attempt.");
          setIsRecording(false); // Assume failure, turn off button
        }
      }
    },
    [selectedLanguage, isListening, handleResult, handleEnd, handleError]
  ); // Dependencies

  const stopListening = useCallback(() => {
    log("stopListening called by user.");
    userStoppedRef.current = true; // Signal intent to stop FIRST
    setIsRecording(false); // Update button state immediately
    setInterimTranscriptOriginal(""); // Clear interim display

    if (restartTimerRef.current) {
      // Clear pending restarts
      clearTimeout(restartTimerRef.current);
      restartTimerRef.current = null;
      log("Cleared pending restart timer.");
    }

    if (recognitionRef.current) {
      log("Calling recognition.stop()");
      recognitionRef.current.stop(); // Request stop gracefully
      // Let handleEnd perform the final cleanup based on userStoppedRef.current
    } else {
      log("Stop called, but no active recognition instance found.");
      userStoppedRef.current = false; // Reset flag if nothing was running
    }
  }, []); // No dependencies

  // --- UI Handlers ---

  const handleLanguageChange = (selectedOption) => {
    log("Language changed to:", selectedOption);
    // Stop current recognition if running, as language change requires restart
    if (isListening || recognitionRef.current) {
      log("Stopping recognition due to language change.");
      stopListening(); // Stop cleanly
    }
    setSelectedLanguage(selectedOption);
    // Clear previous text when language changes? Optional, maybe confusing.
    // setFinalTranscriptEnglish("");
    // setFinalTranscriptOriginal("");
    // setInterimTranscriptOriginal("");
  };

  const handleToggleRecording = () => {
    if (isRecording) {
      // Check button state reflecting user intent
      stopListening();
    } else {
      startListening(); // Start fresh
    }
  };

  // --- Textarea Height ---
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [finalTranscriptEnglish, interimTranscriptOriginal]); // Adjust when displayed text changes

  // --- Cleanup on Unmount ---
  useEffect(() => {
    return () => {
      log("Component unmounting. Stopping recognition.");
      userStoppedRef.current = true; // Ensure marked as stopped
      if (restartTimerRef.current) clearTimeout(restartTimerRef.current);
      if (recognitionRef.current) {
        recognitionRef.current.onend = null; // Detach handlers
        recognitionRef.current.onerror = null;
        recognitionRef.current.onresult = null;
        recognitionRef.current.abort(); // Force stop
        recognitionRef.current = null;
      }
    };
  }, []); // Empty array means run only on mount and unmount

  // Combine final English text and current interim original text for display
  const displayedText =
    finalTranscriptEnglish +
    (interimTranscriptOriginal
      ? (finalTranscriptEnglish ? " " : "") + `(${interimTranscriptOriginal})`
      : ""); // Show interim in brackets

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      {/* Control Row */}
      <div className="row mb-4 align-items-center">
        <div className="col-sm-4 col-md-3 mb-2 mb-sm-0">
          <Select
            options={languageOptions}
            value={selectedLanguage}
            onChange={handleLanguageChange}
            isDisabled={isRecording || isListening} // Disable while recording
            styles={{ container: (base) => ({ ...base, zIndex: 10 }) }} // Ensure dropdown is on top
            aria-label="Select Speech Language"
          />
        </div>
        <div className="col-sm-8 col-md-9 text-sm-end">
          {isTranslating && (
            <span
              style={{
                marginRight: "10px",
                fontStyle: "italic",
                color: "orange",
              }}
            >
              Translating...
            </span>
          )}
          <button
            className={`btn btn-${isRecording ? "danger" : "primary"} btn-lg`}
            onClick={handleToggleRecording}
            disabled={!isSpeechRecognitionSupported || isTranslating} // Disable button if not supported or busy translating
            title={
              !isSpeechRecognitionSupported
                ? "Speech Recognition not supported"
                : isRecording
                ? "Stop Recording"
                : "Start Recording"
            }
          >
            {isRecording ? (
              <BsMicMute size={20} style={{ marginRight: "5px" }} />
            ) : (
              <BsMicFill size={20} style={{ marginRight: "5px" }} />
            )}
            {isRecording
              ? isListening
                ? "Listening..."
                : "Starting..."
              : "Start Recording"}
          </button>
          {/* Optional: More detailed status indicator */}
          {/* {isRecording && !isListening && !userStoppedRef.current && <span style={{marginLeft: '10px', color: 'gray'}}>Connecting...</span>} */}
        </div>
      </div>

      {/* Breadcrumbs Row */}
      <div className="row mb-3">
        <div className="col-12">
          <ul className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="#/">Chief Complaint</a>
            </li>
            <li className="breadcrumb-item">
              <i className="feather-chevron-right"></i>{" "}
              {/* Replace with actual icon if using Feather */}
            </li>
            <li className="breadcrumb-item active">
              Life - Space Investigation
            </li>
          </ul>
        </div>
      </div>

      {/* Input Area */}
      <div className="manual-input">
        <textarea
          ref={textareaRef}
          value={displayedText} // Show final English + interim original
          onChange={(e) => {
            // Only allow manual edits if not recording
            if (!isRecording) {
              setFinalTranscriptEnglish(e.target.value); // Edit the English text directly
              setInterimTranscriptOriginal("");
              setFinalTranscriptOriginal(""); // Clear original if manually editing English
            }
          }}
          placeholder={
            isSpeechRecognitionSupported
              ? isRecording
                ? `Listening in ${selectedLanguage.label}... Speak now.`
                : `Select language, then click 'Start Recording'. Output will be in English.`
              : "Type your text here (Speech Recognition not supported)."
          }
          className="form-control"
          style={{
            padding: "10px",
            width: "100%",
            minHeight: "400px",
            height: "auto",
            resize: "vertical",
            overflowY: "hidden",
            lineHeight: "1.6",
            fontSize: "1rem",
          }}
          rows={15}
          readOnly={isRecording} // Prevent typing while listening
        />
        {/* Optional: Display original full transcript for debugging */}
        {/* {DEBUG && <p style={{marginTop: '10px', fontSize: '0.8em', color: 'grey'}}>Original: {finalTranscriptOriginal}</p>} */}
      </div>
    </div>
  );
};

export default LifeSpaceInvestigation;

// Remember to install react-select: npm install react-select or yarn add react-select
