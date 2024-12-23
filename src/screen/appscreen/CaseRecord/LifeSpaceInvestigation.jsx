
import React, { useState, useEffect, useRef } from "react";
import { BsMicFill, BsMicMute } from "react-icons/bs";

const LifeSpaceInvestigation = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedText, setRecordedText] = useState([]);
  const [manualText, setManualText] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedText, setEditedText] = useState("");
  const textareaRef = useRef(null);

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = "en"; // Set your desired language
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setManualText((prevText) => prevText + " " + transcript);
      };

      recognition.start();
      recognition.onend = () => {
        if (isRecording) recognition.start(); // Restart recognition if still recording
      };

      return recognition;
    } else {
      alert("Speech Recognition API is not supported in this browser.");
    }
  };

  const toggleRecording = () => {
    setIsRecording((prevState) => {
      if (!prevState) {
        const recognition = startListening();
        return recognition ? true : false;
      } else {
        return false;
      }
    });
  };

  const handleAddManualText = () => {
    if (manualText.trim()) {
      setRecordedText((prevText) => [manualText, ...prevText]);
      setManualText("");
      adjustTextareaHeight(); // Reset textarea height after adding text
    }
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditedText(recordedText[index]);
  };

  const saveEdit = (index) => {
    const updatedText = [...recordedText];
    updatedText[index] = editedText;
    setRecordedText(updatedText);
    setEditingIndex(null);
    setEditedText("");
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditedText("");
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };

  useEffect(() => {
    adjustTextareaHeight(); // Adjust height on component mount
  }, [manualText]);

  return (
    <div  style={{ padding: "20px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <div className="row">
        <div className="col-sm-7 col-6">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <div href="chief_complaint.html">Chief Complaint</div>
            </li>
            <li className="breadcrumb-item">
              <i className="feather-chevron-right"></i>
            </li>
            <li className="breadcrumb-item active">Life - Space Investigation</li>
          </ul>
        </div>
        <div className="col-sm-5 col-6 text-end m-b-30">
          <button
            className={`btn btn-${isRecording ? "danger" : "primary-StartRecording"} `}
            onClick={toggleRecording}
            style={{ marginBottom: "10px" }}
          >
            {isRecording ? (
              <BsMicMute size={20} />
            ) : (
              <BsMicFill size={20} />
            )}
            {isRecording ? "Stop Recording" : "Start Recording"}
          </button>
        </div>
      </div>
      <div className="manual-input" style={{ marginTop: "20px" }}>
        <textarea
          ref={textareaRef}
          value={manualText}
          onChange={(e) => {
            setManualText(e.target.value);
            adjustTextareaHeight();
          }}
          placeholder="Enter text manually or via voice input"
          className="lined-textarea"
          style={{
            padding: "10px",
            width: "100%",
            height: "auto",
            minHeight: "500px",
            marginRight: "10px",
            borderRadius: "4px",
            border: "1px solid #ced4da",
            overflow: "hidden",
          }}
          
        />
        </div>
    
    </div>
  );
};

export default LifeSpaceInvestigation;
