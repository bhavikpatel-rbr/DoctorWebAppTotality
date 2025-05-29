// CaseRecordinit.js
import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { ChevronRight, ChevronLeft, Search as SearchIcon } from "react-feather";
import { Tabs, Tab, Nav } from "react-bootstrap";
import { MdArrowDropDown, MdClose } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

//=========================================================
// Configuration Helper Function (Define BEFORE component)
//=========================================================

const customTabStyles = `
  /* Style for the container holding all tab rows */
  .tabs-container-styled {
    padding: 0.5rem; /* Add padding around the tab area */
    background-color: #f8f9fa; /* Example: Light background for the whole area */
  }

  /* Style for each row (Nav component) */
  .tab-row {
    margin-bottom: 0.25rem; /* Add space between rows of tabs */
  }

   /* Style for individual tab links */
  .custom-tab-link {
    /* Define base properties and transitions */
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    border-radius: 0.3rem 0.3rem 0 0 !important; /* Rounded top corners */
    margin-right: 2px; /* Optional: tiny space between tabs */
    border: 1px solid transparent; /* Start with transparent border */
    border-bottom: 1px solid #dee2e6; /* Default bottom border */
    padding: 0.5rem 1rem; /* Ensure consistent padding (Bootstrap default) */
  }

  /* ---- NEW: Default style for INACTIVE tabs (not hovered) ---- */
  .custom-tab-link:not(.active) {
    
     color: white !important; /* WHITE TEXT for default inactive */
  }
  /* ---- End NEW ---- */


  /* Hover effect for INACTIVE tabs - Overrides the default inactive style */
  .custom-tab-link:not(.active):hover {
    background-color: #e9ecef; /* Slightly darker background on hover */
    border-color: #dee2e6 #dee2e6 #dee2e6 !important; /* Match default border color */
    color: #0d6efd !important; /* Blue text on hover - OVERRIDES white */
  }

  /* Enhanced style for the ACTIVE tab - Overrides the default inactive style */
  .custom-tab-link.active {
    font-weight: 600; /* Make active tab text bolder */
    background-color: #ffffff !important; /* Ensure white background */
    color: #0d6efd !important; /* Bootstrap primary blue text color for active */
    border-color: #dee2e6 #dee2e6 #ffffff !important; /* Standard border except bottom matches background */
  }
  .comment-input {
    transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out;
    font-weight: normal; /* Default: normal weight */
    font-style: normal;  /* Default: normal style */
    text-transform: none; /* Default: no text transformation */
  }

  /* Priority 1 Style */
  .comment-input.priority-1 {
     border-color: #6ea8fe;
     font-weight: normal;     /* Ensure normal weight */
     font-style: normal;      /* Ensure normal style */
     text-transform: none;      /* Ensure no transformation */
     /* background-color: rgba(13, 110, 253, 0.03); */
  }

  /* Priority 2 Style (Warning, Italic, Capitalize) */
  .comment-input.priority-2 {
     border-color: #ffda6a;
     background-color: rgba(255, 193, 7, 0.05);
     font-weight: normal;     /* Ensure normal weight */
     font-style: italic;      /* <<< Make input text italic */
     text-transform: capitalize; /* <<< Make first letter capital (per word) */
  }

  /* Priority 3 Style (Danger/High, Bold, Uppercase) */
  .comment-input.priority-3 {
     border-color: #f1737f;
     background-color: rgba(220, 53, 69, 0.05);
     font-weight: bold;       /* <<< Make input text bold */
     font-style: normal;      /* Ensure normal style */
     text-transform: uppercase; /* <<< Make ALL letters uppercase */
  }

  /* Focus style - does not override font-weight, font-style, or text-transform */
  .comment-input:focus {
    border-color: #0d6efd !important;
    background-color: #fff !important;
    box-shadow: 0 0 5px rgba(13, 110, 253, 0.25);
  }
  /* ---- End Priority Effect Styles ---- */
`;
// Initialize the base structure
const baseTabSectionOptions = {
  PHYSICAL_CHARACTERISTICS: [],
  DIGESTION: [],
  ELIMINATIONS: [],
  MENSTRUAL_FUNCTION: [],
  SEXUAL_FUNCTION: [],
  PATIENTS_MOTHERS_OBSTETRIC_HISTORY: [],
  DEVELOPMENTAL_LANDMARKS_PROBLEMS: [], // Note: Potential typo, maybe "DEVELOPMENTAL"?
  REACTION_PHYSICAL_FACTORS: [],
  FERVER_TOTALITY: [],
  // Add more tabs here if needed initially
};

/**
 * Helper function to add a section/subsection definition.
 * Modifies the baseTabSectionOptions object directly.
 * @param {string} tabKey - The key of the tab (e.g., 'PHYSICAL_CHARACTERISTICS').
 * @param {string | null} parentKey - The key of the parent section, or null/undefined for top-level.
 * @param {string} newKey - The unique key for the new section.
 * @param {string} newTitle - The display title for the new section.
 */
const addSectionDefinition = (tabKey, parentKey, newKey, newTitle) => {
  if (!baseTabSectionOptions[tabKey]) {
    console.warn(
      `addSectionDefinition: Tab key "${tabKey}" not found. Adding new tab.`
    );
    baseTabSectionOptions[tabKey] = []; // Create the tab if it doesn't exist
  }

  const newSection = { key: newKey, title: newTitle };
  let targetArray = baseTabSectionOptions[tabKey]; // Default to top-level of the tab

  // If a parentKey is specified, find the parent object recursively
  if (parentKey) {
    let parentFound = false;
    const findAndAdd = (options) => {
      if (parentFound || !options) return;
      for (let i = 0; i < options.length; i++) {
        const item = options[i];
        if (item.key === parentKey) {
          // Found the parent
          if (!item.subOptions) {
            item.subOptions = []; // Create subOptions array if it doesn't exist
          }
          // Check if key already exists in subOptions to prevent duplicates
          if (!item.subOptions.some((sub) => sub.key === newKey)) {
            item.subOptions.push(newSection);
          } else {
            console.warn(
              `addSectionDefinition: Key "${newKey}" already exists under parent "${parentKey}" in tab "${tabKey}". Skipping.`
            );
          }
          parentFound = true;
          return;
        }
        // Recurse into subOptions
        if (item.subOptions) {
          findAndAdd(item.subOptions);
        }
      }
    };

    findAndAdd(baseTabSectionOptions[tabKey]);

    if (!parentFound) {
      console.error(
        `addSectionDefinition: Parent key "${parentKey}" not found in tab "${tabKey}" for new key "${newKey}". Cannot add.`
      );
      return; // Stop if parent wasn't found
    }
    // If parent was found and item added, we're done with this call
    return;
  }

  // If no parentKey, add to the top level of the tab (if not already present)
  if (!targetArray.some((item) => item.key === newKey)) {
    targetArray.push(newSection);
  } else {
    console.warn(
      `addSectionDefinition: Key "${newKey}" already exists at the top level of tab "${tabKey}". Skipping.`
    );
  }
};

//=========================================================
// DEVELOPER: Add your keywords here using addSectionDefinition
//=========================================================

// --- PHYSICAL_CHARACTERISTICS Tab ---
addSectionDefinition(
  "PHYSICAL_CHARACTERISTICS",
  null,
  "PHYSICAL_DESC",
  "PHYSICAL DESCRIPTION"
);
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "PHYSICAL_DESC", "LEAN", "LEAN");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "PHYSICAL_DESC", "STOCKY", "STOCKY");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "PHYSICAL_DESC", "OBESE", "OBESE");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "PHYSICAL_DESC", "PARTIAL", "PARTIAL");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "PHYSICAL_DESC", "GENERAL", "GENERAL");
addSectionDefinition(
  "PHYSICAL_CHARACTERISTICS",
  "PHYSICAL_DESC",
  "WATER_LOGGING",
  "WATER-LOGGING"
);
addSectionDefinition(
  "PHYSICAL_CHARACTERISTICS",
  "PHYSICAL_DESC",
  "UMBILICUS-ABOVE",
  "UMBILICUS-ABOVE"
);
addSectionDefinition(
  "PHYSICAL_CHARACTERISTICS",
  "PHYSICAL_DESC",
  "UMBILICUS-BELOW",
  "UMBILICUS-BELOW"
);
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "PHYSICAL_DESC", "EMACIATION", "EMACIATION");

addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "WEIGHT", "WEIGHT");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "WEIGHT", "WEIGHT_GAIN", "Gain");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "WEIGHT", "WEIGHT_LOSS", "Loss");

addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "PERIOD", "PERIOD");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "SHORT", "SHORT");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "TALL", "TALL");
addSectionDefinition(
  "PHYSICAL_CHARACTERISTICS",
  null,
  "FACIAL_CONFIG_EXPR",
  "FACIAL CONFIGURATATION & EXPRESSION"
);
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "CHIN", "CHIN");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "JAW", "JAW");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "NOSE", "NOSE");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "MOUTH_LIPS", "MOUTH & LIPS");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "OUTLINE_LINES", "OUTLINE & LINES");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "HAND", "HAND");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "HAND", "FINGER", "FINGER");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "HAND", "PALMS", "PALMS");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "HAND", "LINES", "LINES");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "CARRIAGE_GAIT", "CARRIAGE & GAIT");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "DEFORMITIES", "DEFORMITIES");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "SKIN", "SKIN");
addSectionDefinition(
  "PHYSICAL_CHARACTERISTICS",
  "SKIN",
  "COMPLEXION_TEXTURE",
  "COMPLEXION & TEXTURE"
);
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "SKIN", "DISCOLOURATION", "DISCOLOURATION");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "SKIN", "ERUPTIONS", "ERUPTIONS");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "SKIN", "GROWTHS", "GROWTHS");
addSectionDefinition(
  "PHYSICAL_CHARACTERISTICS",
  "COMPLEXION_TEXTURE",
  "CALLOSITIES",
  "CALLOSITIES"
);
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "COMPLEXION_TEXTURE", "CLEAN", "CLEAN");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "COMPLEXION_TEXTURE", "CLEAR", "CLEAR");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "COMPLEXION_TEXTURE", "COARSE", "COARSE");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "COMPLEXION_TEXTURE", "CRACKS", "CRACKS");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "COMPLEXION_TEXTURE", "DARK", "DARK");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "COMPLEXION_TEXTURE", "DIRTY", "DIRTY");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "COMPLEXION_TEXTURE", "DRY", "DRY");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "COMPLEXION_TEXTURE", "FAIR", "FAIR");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "COMPLEXION_TEXTURE", "FINE", "FINE");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "COMPLEXION_TEXTURE", "GREASY", "GREASY");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "COMPLEXION_TEXTURE", "ROUGH", "ROUGH");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "COMPLEXION_TEXTURE", "RUDDY", "RUDDY");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "COMPLEXION_TEXTURE", "SCARS", "SCARS");
addSectionDefinition(
  "PHYSICAL_CHARACTERISTICS",
  "COMPLEXION_TEXTURE",
  "SHRIVELLED",
  "SHRIVELLED"
);
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "COMPLEXION_TEXTURE", "THICK", "THICK");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "COMPLEXION_TEXTURE", "THIN", "THIN");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "COMPLEXION_TEXTURE", "TOUGH", "TOUGH");
addSectionDefinition(
  "PHYSICAL_CHARACTERISTICS",
  "COMPLEXION_TEXTURE",
  "UNWASHED",
  "UNWASHED"
);
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "COMPLEXION_TEXTURE", "WHEATY", "WHEATY");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "COMPLEXION_TEXTURE", "WOUNDS", "WOUNDS");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "DISCOLOURATION", "GENERAL", "GENERAL");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "DISCOLOURATION", "PARTIAL", "PARTIAL");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "DISCOLOURATION", "SPOTS", "SPOTS");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "DISCOLOURATION", "BLACK", "BLACK");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "DISCOLOURATION", "BROWN", "BROWN");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "DISCOLOURATION", "COPPERY", "COPPERY");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "DISCOLOURATION", "GREENISH", "GREENISH");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "DISCOLOURATION", "RED", "RED");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "DISCOLOURATION", "WHITE", "WHITE");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "DISCOLOURATION", "YELLOW", "YELLOW");
addSectionDefinition(
  "PHYSICAL_CHARACTERISTICS",
  "DISCOLOURATION",
  "ECCHYMOSIS",
  "ECCHYMOSIS"
);
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "DISCOLOURATION", "MOLES", "MOLES");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "DISCOLOURATION", "NAEVI", "NAEVI");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "DISCOLOURATION", "PETECHIAE", "PETECHIAE");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "DISCOLOURATION", "STRIAK", "STRIAK");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "ANNULAL", "ANNULAL");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "OVEL", "OVEL");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "FIGURATE", "FIGURATE");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "ACNE", "ACNE");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "BOILS", "BOILS");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "BULLAE", "BULLAE");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "BUNIONS", "BUNIONS");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "CHAPS", "CHAPS");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "CANDYLOMATA", "CANDYLOMATA");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "CORNS", "CORNS");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "CYSTS", "CYSTS");
addSectionDefinition(
  "PHYSICAL_CHARACTERISTICS",
  "ERUPTIONS",
  "DERMOGRAPHISM",
  "DERMOGRAPHISM"
);
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "DERMOID", "DERMOID");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "ECZEMA", "ECZEMA");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "EXCORIATION", "EXCORIATION");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "EXCRESCENCES", "EXCRESCENCES");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "FOLDS", "FOLDS");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "FURUNCLES", "FURUNCLES");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "GOOSE-FLESH", "GOOSE-FLESH");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "INTERTRIGO", "INTERTRIGO");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "IRRITATION", "IRRITATION");
addSectionDefinition(
  "PHYSICAL_CHARACTERISTICS",
  "ERUPTIONS",
  "LICHENIFICATION",
  "LICHENIFICATION"
);
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "MACULE", "MACULE");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "PAPULE", "PAPULE");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "PLAQUE", "PLAQUE");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "PUSTULES", "PUSTULES");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "SCALY", "SCALY");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "VESICLE", "VESICLE");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "SUPPURATIONS", "SUPPURATIONS");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "ULCERATIONS", "ULCERATIONS");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "ERUPTIONS", "URTICARIA", "URTICARIA");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "GROWTHS", "BURSAE", "BURSAE");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "GROWTHS", "GANGLION", "GANGLION");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "GROWTHS", "KELOIDS", "KELOIDS");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "GROWTHS", "NODULES", "NODULES");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "GROWTHS", "TOPHI", "TOPHI");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "GROWTHS", "TUMORS", "TUMORS");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "GROWTHS", "WARTS", "WARTS");

addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "HAIR", "HAIR");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "HAIR", "ABNORMAL", "ABNORMAL");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "HAIR", "GROWTH", "GROWTH");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "HAIR", "BROKEN", "BROKEN");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "HAIR", "BRITTLE", "BRITTLE");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "HAIR", "DANDRUFF", "DANDRUFF");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "HAIR", "DRY", "DRY");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "HAIR", "GROWTH LOSS", "GROWTH LOSS");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "HAIR", "LUSTRE", "LUSTRE");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "HAIR", "OILY", "OILY");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "HAIR", "ROUGH", "ROUGH");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "HAIR", "TANGLED", "TANGLED");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "HAIR", "TEXTURE", "TEXTURE");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "HAIR", "COLOUR", "COLOUR");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "COLOUR", "BLACK", "BLACK");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "COLOUR", "BROWN", "BROWN");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "COLOUR", "GOLDEN", "GOLDEN");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "COLOUR", "GRAY", "GRAY");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "COLOUR", "RED", "RED");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "NAILS", "NAILS");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "NAILS", "BITTEN", "BITTEN");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "NAILS", "BRITTLE", "BRITTLE");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "NAILS", "BROKEN", "BROKEN");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "NAILS", "CLUBBING", "CLUBBING");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "NAILS", "COLOR", "COLOR");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "NAILS", "CRUMBLING", "CRUMBLING");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "NAILS", "DEFORMED", "DEFORMED");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "NAILS", "DISCOLOURED", "DISCOLOURED");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "NAILS", "EXFOLLATIONG", "EXFOLLATIONG");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "NAILS", "FALLING", "FALLING");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "NAILS", "FUNGUS", "FUNGUS");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "NAILS", "HAND-NAILS", "HAND-NAILS");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "NAILS", "HEMORRHAGES", "HEMORRHAGES");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "NAILS", "INGROWN", "INGROWN");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "NAILS", "MOONS", "MOONS");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "NAILS", "PARONYCHIA", "PARONYCHIA");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "NAILS", "RIBBED", "RIBBED");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "NAILS", "RIDGED", "RIDGED");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "NAILS", "ROUGH", "ROUGH");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "NAILS", "SENSITIVE", "SENSITIVE");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "NAILS", "SERRATED", "SERRATED");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "NAILS", "SPLITTING", "SPLITTING");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "NAILS", "SPOON", "SPOON");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "NAILS", "SPOTS", "SPOTS");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "NAILS", "SUPPURATION", "SUPPURATION");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "NAILS", "THICK", "THICK");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "NAILS", "THIN", "THIN");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "NAILS", "UNCLERATED", "UNCLERATED");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "FACE", "FACE");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "EYES", "EYES");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "VISION", "VISION");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "EARS", "EARS");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "HEARING", "HEARING");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "MOUTH", "MOUTH");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "LIPS", "LIPS");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "TONGUE", "TONGUE");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "TEETH", "TEETH");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "TEETH", "No", "No");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "TEETH", "CARIES", "CARIES");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "TEETH", "DISCOLOURATION", "DISCOLOURATION");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "TEETH", "GUMS", "GUMS");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "COLDNESS", "COLDNESS");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "COLDNESS", "GENERAL", "GENERAL");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "COLDNESS", "PARTIAL", "PARTIAL");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "HEAT", "HEAT");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "HEAT", "GENERAL", "GENERAL");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "HEAT", "PARTIAL", "PARTIAL");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "WARMTH", "WARMTH");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "WARMTH", "GENERAL", "GENERAL");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "WARMTH", "PARTIAL", "PARTIAL");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "ANAEMIA", "ANAEMIA");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "OEDEMA", "OEDEMA");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "OEDEMA", "GENERAL", "GENERAL");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "OEDEMA", "PARTIAL", "PARTIAL");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "PERSPRIRATION", "PERSPRIRATION");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "PERSPRIRATION", "GENERAL", "GENERAL");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "PERSPRIRATION", "PARTIAL", "PARTIAL");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "ABSENT", "ABSENT");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "ACRID", "ACRID");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "BLOODY", "BLOODY");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "BURNING", "BURNING");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "CLAMMY", "CLAMMY");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "COLD", "COLD");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "DIMMISHED", "DIMMISHED");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "EXCESSIVE", "EXCESSIVE");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "ODORS", "ODORS");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "OILY", "OILY");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "STAINING", "STAINING");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", "STAINING", "COLOUR", "COLOUR");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "FAST", "FAST");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "STICKY", "STICKY");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "SUPPESSED", "SUPPESSED");
addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "WARM", "WARM");
// addSectionDefinition("PHYSICAL_CHARACTERISTICS", null, "WARM", "WARM"); // Duplicate found & removed
addSectionDefinition(
  "PHYSICAL_CHARACTERISTICS",
  null,
  "GENERAL_IMPRESSION_TYPE", // Changed key to be more standard
  "GENERAL IMPRESSION & TYPE"
);

// --- DIGESTION Tab ---
addSectionDefinition("DIGESTION", null, "ACIDITY", "ACIDITY");
addSectionDefinition("DIGESTION", null, "APPETITE", "APPETITE");
addSectionDefinition("DIGESTION", null, "BILIOUSNESS", "BILIOUSNESS");
addSectionDefinition("DIGESTION", null, "COLICS", "COLICS");
addSectionDefinition("DIGESTION", null, "DRYNESS", "DRYNESS");
addSectionDefinition("DIGESTION", null, "ERUCTATIONS", "ERUCTATIONS");
addSectionDefinition("DIGESTION", null, "FLATULENCE", "FLATULENCE");
addSectionDefinition("DIGESTION", null, "HUNGER", "HUNGER");
addSectionDefinition("DIGESTION", null, "NAUSEA", "NAUSEA");
addSectionDefinition("DIGESTION", null, "SALIVATION", "SALIVATION");
addSectionDefinition(
  "DIGESTION",
  null,
  "SORE_MOUTH_THROAT", // Changed key
  "SORE MOUTH & THROAT"
);
addSectionDefinition("DIGESTION", null, "TASTE", "TASTE");
addSectionDefinition("DIGESTION", null, "THIRST", "THIRST");
addSectionDefinition("DIGESTION", null, "VOMITING", "VOMITING"); // Corrected spelling
addSectionDefinition(
  "DIGESTION",
  null,
  "AVERSIONS_CRAVINGS", // Changed key
  "AVERSIONS (A) & CRAVINGS (C)"
);
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "ACIDS", "ACIDS");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "ALCOHOL", "ALCOHOL");
addSectionDefinition(
  "DIGESTION",
  "ALCOHOL", // Parent should be ALCOHOL if specifying type
  "ALCOHOL_SPECIFY",
  "SPECIFY"
);
addSectionDefinition(
  "DIGESTION",
  "ALCOHOL", // Parent should be ALCOHOL
  "ALCOHOL_BEER",
  "BEER"
);
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "ALMONDS", "ALMONDS");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "APPLES", "APPLES");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "BACON", "BACON");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "BANANAS", "BANANAS");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "BEEF", "BEEF");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "BISCUITS", "BISCUITS");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "BITTER", "BITTER");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "BREAD", "BREAD");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "BUTTER", "BUTTER");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "CEREALS", "CEREALS");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "CHEESE", "CHEESE");
addSectionDefinition(
  "DIGESTION",
  "AVERSIONS_CRAVINGS",
  "CHERRIES", // Corrected spelling
  "CHERRIES"
);
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "CHICKEN", "CHICKEN");
addSectionDefinition(
  "DIGESTION",
  "AVERSIONS_CRAVINGS",
  "CHOCOLATE", // Corrected spelling
  "CHOCOLATE"
);
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "COFFEE", "COFFEE");
addSectionDefinition(
  "DIGESTION",
  "AVERSIONS_CRAVINGS",
  "COLD_TEMP", // Differentiate from COLD illness
  "COLD"
);
addSectionDefinition("DIGESTION", "COLD_TEMP", "COLD_DRINK", "DRINK");
addSectionDefinition("DIGESTION", "COLD_TEMP", "COLD_FOOD", "FOOD");
addSectionDefinition(
  "DIGESTION",
  "AVERSIONS_CRAVINGS",
  "CUCUMBERS",
  "CUCUMBERS"
);
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "CURD", "CURD");
addSectionDefinition(
  "DIGESTION",
  "AVERSIONS_CRAVINGS",
  "DELICACIES", // Corrected spelling
  "DELICACIES"
);
addSectionDefinition(
  "DIGESTION",
  "AVERSIONS_CRAVINGS",
  "DRY_FOOD", // Changed key
  "DRY FOOD"
);
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "EGG", "EGG");
addSectionDefinition(
  "DIGESTION",
  "AVERSIONS_CRAVINGS",
  "FARINACEOUS",
  "FARINACEOUS"
);
addSectionDefinition(
  "DIGESTION",
  "AVERSIONS_CRAVINGS",
  "FAT_RICH_FOODS", // Changed key
  "FAT & RICH FOODS"
);
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "FISH", "FISH");
addSectionDefinition(
  "DIGESTION",
  "AVERSIONS_CRAVINGS",
  "FLOUR", // Corrected spelling
  "FLOUR"
);
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "FRIED", "FRIED");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "FRUIT", "FRUIT");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "GARLIC", "GARLIC");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "GRUEL", "GRUEL");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "HAM", "HAM");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "HERRING", "HERRING");
addSectionDefinition(
  "DIGESTION",
  "AVERSIONS_CRAVINGS",
  "HIGHLY_SEASONED", // Consolidated key
  "HIGHLY SEASONED"
);
// Removed redundant SEASONED
addSectionDefinition(
  "DIGESTION",
  "AVERSIONS_CRAVINGS",
  "HONEY", // Simplified key
  "HONEY"
);
addSectionDefinition(
  "DIGESTION",
  "AVERSIONS_CRAVINGS",
  "HOT_TEMP", // Differentiate from spicy
  "HOT"
);
addSectionDefinition("DIGESTION", "HOT_TEMP", "HOT_DRINK", "HOT :DRINK");
addSectionDefinition("DIGESTION", "HOT_TEMP", "HOT_FOOD", "HOT :FOOD");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "ICE", "ICE");
addSectionDefinition(
  "DIGESTION",
  "AVERSIONS_CRAVINGS",
  "ICE_CREAM",
  "ICE CREAM"
);
addSectionDefinition(
  "DIGESTION",
  "AVERSIONS_CRAVINGS",
  "INDIGESTIBLE_THINGS", // Consolidated key
  "INDIGESTIBLE THINGS"
);
// Removed redundant THINGS
addSectionDefinition(
  "DIGESTION",
  "AVERSIONS_CRAVINGS",
  "INDISTINCT",
  "INDISTINCT"
);
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "JUICY", "JUICY");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "LEMON", "LEMON");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "LEMONADE", "LEMONADE");
addSectionDefinition(
  "DIGESTION",
  "AVERSIONS_CRAVINGS",
  "LIQUID_SOFT", // Changed key
  "LIQUID(SOFT)"
);
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "MEAT", "MEAT");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "MILK", "MILK");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "NUTS", "NUTS");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "ONIONS", "ONIONS");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "ORANGE", "ORANGE");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "OYSTERS", "OYSTERS");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "PASTRY", "PASTRY");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "PEPPER", "PEPPER");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "PICA", "PICA");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "PICKLES", "PICKLES");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "PLUMS", "PLUMS");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "PORK", "PORK");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "POTATOES", "POTATOES");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "PUDDING", "PUDDING");
addSectionDefinition(
  "DIGESTION",
  "AVERSIONS_CRAVINGS",
  "PUNGENT_SPICY", // Changed key
  "PUNGENT(SPICY)"
);
addSectionDefinition(
  "DIGESTION",
  "AVERSIONS_CRAVINGS",
  "RAW_FOODS",
  "RAW FOODS"
);
addSectionDefinition(
  "DIGESTION",
  "AVERSIONS_CRAVINGS",
  "REFRESHING",
  "REFRESHING"
);
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "RICE", "RICE");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "SALAD", "SALAD");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "SALT", "SALT");
addSectionDefinition(
  "DIGESTION",
  "AVERSIONS_CRAVINGS",
  "SALTY_THINGS", // Consolidated key
  "SALTY THINGS"
);
// Removed redundant THINGS
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "SARDINES", "SARDINES");
addSectionDefinition(
  "DIGESTION",
  "AVERSIONS_CRAVINGS",
  "SHELLFISH",
  "SHELLFISH"
);
addSectionDefinition(
  "DIGESTION",
  "AVERSIONS_CRAVINGS",
  "SMOKED_THINGS",
  "SMOKED THINGS"
);
addSectionDefinition(
  "DIGESTION",
  "AVERSIONS_CRAVINGS",
  "SOLID_FOODS",
  "SOLID FOODS"
);
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "SOUR", "SOUR");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "STARCH", "STARCH");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "STRANGE", "STRANGE");
addSectionDefinition(
  "DIGESTION",
  "AVERSIONS_CRAVINGS",
  "SUGAR", // Corrected spelling
  "SUGAR"
);
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "SWEETS", "SWEETS");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "TEA", "TEA");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "TOBACCO", "TOBACCO");
addSectionDefinition("DIGESTION", "TOBACCO", "TOBACCO_SMOKING", "SMOKING");
addSectionDefinition("DIGESTION", "TOBACCO", "TOBACCO_CHEWING", "CHEWING"); // Corrected spelling
addSectionDefinition("DIGESTION", "TOBACCO", "TOBACCO_SNUFF", "SNUFF");
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "TOMATOES", "TOMATOES");
addSectionDefinition(
  "DIGESTION",
  "AVERSIONS_CRAVINGS",
  "VEGETABLES",
  "VEGETABLES"
);
addSectionDefinition("DIGESTION", "AVERSIONS_CRAVINGS", "VINEGAR", "VINEGAR");
addSectionDefinition(
  "DIGESTION",
  "AVERSIONS_CRAVINGS",
  "WARM_TEMP", // Differentiate
  "WARM"
);
addSectionDefinition("DIGESTION", "WARM_TEMP", "WARM_DRINK", "DRINK");
addSectionDefinition("DIGESTION", "WARM_TEMP", "WARM_FOOD", "FOOD");

// --- ELIMINATIONS Tab ---
addSectionDefinition("ELIMINATIONS", null, "STOOL", "STOOL");
addSectionDefinition("ELIMINATIONS", "STOOL", "STOOL_COLOUR", "COLOUR");
addSectionDefinition(
  "ELIMINATIONS",
  "STOOL",
  "STOOL_CONSISTENCY",
  "CONSISTENCY"
);
addSectionDefinition("ELIMINATIONS", "STOOL", "STOOL_ODOUR", "ODOUR");
addSectionDefinition("ELIMINATIONS", "STOOL", "STOOL_FREQUENCY", "FREQUENCY");
addSectionDefinition("ELIMINATIONS", "STOOL", "STOOL_ACRIDITY", "ACRIDITY");
addSectionDefinition("ELIMINATIONS", "STOOL", "STOOL_URGING", "URGING");
addSectionDefinition(
  "ELIMINATIONS",
  "STOOL",
  "STOOL_SATISFACTION",
  "SATISFACTION"
);
addSectionDefinition("ELIMINATIONS", null, "URINE", "URINE");
addSectionDefinition("ELIMINATIONS", "URINE", "URINE_FREQUENCY", "FREQUENCY");
addSectionDefinition("ELIMINATIONS", "URINE", "URINE_DAY_NIGHT", "D/N");
// Corrected URGNIG/DIFFICULTY/CONTROL/COLOUR/PAIN which were incorrectly nested under FREQUENCY
addSectionDefinition("ELIMINATIONS", "URINE", "URINE_URGING", "URGING");
addSectionDefinition("ELIMINATIONS", "URINE", "URINE_DIFFICULTY", "DIFFICULTY");
addSectionDefinition("ELIMINATIONS", "URINE", "URINE_CONTROL", "CONTROL");
addSectionDefinition("ELIMINATIONS", "URINE", "URINE_COLOUR", "COLOUR");
addSectionDefinition("ELIMINATIONS", "URINE", "URINE_PAIN", "PAIN");
addSectionDefinition(
  "ELIMINATIONS",
  null,
  "DISCHARGES_ABNORMAL", // Changed key
  "DISCHARGES(ABNORMAL)"
);

// --- MENSTRUAL_FUNCTION Tab --- // Note: Potential typo, maybe "MENSTRUAL"?
addSectionDefinition("MENSTRUAL_FUNCTION", null, "FMP", "F.M.P.");
addSectionDefinition("MENSTRUAL_FUNCTION", null, "LMP", "L.M.P.");
addSectionDefinition("MENSTRUAL_FUNCTION", null, "MENARCHE", "MENARCHE");
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "MENARCHE",
  "MENARCHE_EARLY",
  "EARLY"
);
addSectionDefinition("MENSTRUAL_FUNCTION", "MENARCHE", "MENARCHE_LATE", "LATE");
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "MENARCHE",
  "AMENORRHOEA_PRIMARY", // Changed key
  "AMENORRHOEA - PRIMARY"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "MENARCHE",
  "AMENORRHOEA_SECONDARY", // Changed key
  "AMENORRHOEA - SECONDARY"
);
addSectionDefinition("MENSTRUAL_FUNCTION", null, "MENOPAUSE", "MENOPAUSE");
addSectionDefinition("MENSTRUAL_FUNCTION", null, "MANSES", "MANSES"); // Assuming MENSES?
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "MANSES",
  "MANSES_REGULAR",
  "REGULAR"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "MANSES",
  "MANSES_IRREGULAR",
  "IRREGULAR"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "MANSES",
  "MANSES_CONTINUOUS",
  "CONTINUOUS"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "MANSES",
  "MANSES_INTERMITTENT",
  "INTERMITTENT"
);
addSectionDefinition("MENSTRUAL_FUNCTION", "MANSES", "MANSES_CYCLE", "CYCLE");
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "MANSES",
  "MANSES_DURATION",
  "DURATION"
);
addSectionDefinition("MENSTRUAL_FUNCTION", "MANSES", "MANSES_FLOW", "FLOW");
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "MANSES",
  "MANSES_QUANTITY",
  "QUANTITY"
);
addSectionDefinition("MENSTRUAL_FUNCTION", "MANSES", "MANSES_COLOUR", "COLOUR");
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "MANSES_COLOUR",
  "COLOUR_BLACK",
  "BLACK"
); // Make color options sub-options
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "MANSES_COLOUR",
  "COLOUR_BROWN",
  "BROWN"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "MANSES_COLOUR",
  "COLOUR_DARK_RED",
  "DARK RED"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "MANSES_COLOUR",
  "COLOUR_PALE",
  "PALE"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "MANSES_COLOUR",
  "COLOUR_PINK",
  "PINK"
);
addSectionDefinition("MENSTRUAL_FUNCTION", "MANSES", "MANSES_CLOTS", "CLOTS");
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "MANSES",
  "MANSES_CONSISTENCY",
  "CONSISTENCY"
);
addSectionDefinition("MENSTRUAL_FUNCTION", "MANSES", "MANSES_ODOUR", "ODOUR");
addSectionDefinition("MENSTRUAL_FUNCTION", "MANSES", "MANSES_STAINS", "STAINS");
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "MANSES_STAINS",
  "STAINS_COLOUR",
  "COLOUR"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "MANSES_STAINS",
  "STAINS_FAST",
  "FAST"
);
addSectionDefinition("MENSTRUAL_FUNCTION", "MANSES", "MANSES_BEFORE", "BEFORE");
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "MANSES",
  "MANSES_BEGINNING",
  "BEGINNING"
);
addSectionDefinition("MENSTRUAL_FUNCTION", "MANSES", "MANSES_DURING", "DURING");
addSectionDefinition("MENSTRUAL_FUNCTION", "MANSES", "MANSES_AFTER", "AFTER");
// Duplicate AFTER removed
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  null,
  "CHANGES_IN_MENSTRUAL_FUNCTION", // Changed key
  "CHANGES IN MENSTRUAL FUNCTION"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "CHANGES_IN_MENSTRUAL_FUNCTION",
  "CHANGES_MARRIAGE_BEFORE",
  "MARRIAGE BEFORE"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "CHANGES_IN_MENSTRUAL_FUNCTION",
  "CHANGES_MARRIAGE_AFTER",
  "MARRIAGE AFTER"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "CHANGES_IN_MENSTRUAL_FUNCTION",
  "CHANGES_PREGNANCY_AFTER",
  "PREGNANCY(IES) AFTER"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "CHANGES_IN_MENSTRUAL_FUNCTION",
  "CHANGES_RECENT",
  "RECENT"
);
addSectionDefinition("MENSTRUAL_FUNCTION", null, "CLIMACTERIC", "CLIMACTERIC");
addSectionDefinition("MENSTRUAL_FUNCTION", null, "LEUCORRHOEA", "LEUCORRHOEA");
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "LEUCORRHOEA",
  "LEUCORRHOEA_ONSET",
  "ONSET"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "LEUCORRHOEA",
  "LEUCORRHOEA_DURATION",
  "DURATION"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "LEUCORRHOEA",
  "LEUCORRHOEA_CHARACTER",
  "CHARACTER"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "LEUCORRHOEA_CHARACTER",
  "CHARACTER_ACRID",
  "ACRID"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "LEUCORRHOEA_CHARACTER",
  "CHARACTER_BLOODY",
  "BLOODY"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "LEUCORRHOEA_CHARACTER",
  "CHARACTER_COLOUR",
  "COLOUR"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "LEUCORRHOEA",
  "LEUCORRHOEA_OCCURRENCE",
  "OCCURRENCE"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "LEUCORRHOEA_OCCURRENCE",
  "OCCURRENCE_COITION_A",
  "COITION A."
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "LEUCORRHOEA_OCCURRENCE",
  "OCCURRENCE_MENSES_B",
  "MENSES B."
);
// Duplicate MENSES B. removed
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "LEUCORRHOEA_OCCURRENCE",
  "OCCURRENCE_DURING", // Renamed D. for clarity
  "D."
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "LEUCORRHOEA_OCCURRENCE",
  "OCCURRENCE_AFTER", // Renamed A. for clarity
  "A."
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "LEUCORRHOEA_OCCURRENCE",
  "OCCURRENCE_DEBILITY",
  "DEBILITY"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "LEUCORRHOEA_OCCURRENCE",
  "OCCURRENCE_EXERTION",
  "EXERTION"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "LEUCORRHOEA_OCCURRENCE",
  "OCCURRENCE_MASTURBATION",
  "MASTURBATION"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "LEUCORRHOEA_OCCURRENCE",
  "OCCURRENCE_SEX_DESIRE",
  "SEX DESIRE"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "LEUCORRHOEA_OCCURRENCE",
  "OCCURRENCE_WORMS",
  "WORMS"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "LEUCORRHOEA",
  "LEUCORRHOEA_EFFECTS",
  "EFFECTS"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "LEUCORRHOEA_EFFECTS",
  "EFFECTS_SORENESS",
  "SORENESS"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "LEUCORRHOEA_EFFECTS",
  "EFFECTS_ITCHING",
  "ITCHING"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "LEUCORRHOEA_EFFECTS",
  "EFFECTS_BURNING",
  "BURNING"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "LEUCORRHOEA",
  "LEUCORRHOEA_PAIN",
  "PAIN"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "LEUCORRHOEA_PAIN",
  "PAIN_BACK",
  "BACK"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "LEUCORRHOEA_PAIN",
  "PAIN_ABDOMEN",
  "ABDOMEN"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "LEUCORRHOEA_PAIN",
  "PAIN_RADIATING",
  "RADIATING"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "LEUCORRHOEA_PAIN",
  "PAIN_EXTREMITIES",
  "EXTREMITIES"
);
addSectionDefinition(
  "MENSTRUAL_FUNCTION",
  "LEUCORRHOEA_PAIN",
  "PAIN_URINARY",
  "URINARY"
);

// --- SEXUAL_FUNCTION Tab ---
addSectionDefinition("SEXUAL_FUNCTION", null, "DESIRE", "DESIRE");
addSectionDefinition("SEXUAL_FUNCTION", "DESIRE", "DESIRE_HOMO", "HOMO");
addSectionDefinition(
  "SEXUAL_FUNCTION",
  "DESIRE",
  "DESIRE_HETERO", // Changed key
  "HETERO-SEXUAL"
);
addSectionDefinition(
  "SEXUAL_FUNCTION",
  "DESIRE",
  "DESIRE_OTHER", // Changed key
  "OTHER"
);
addSectionDefinition("SEXUAL_FUNCTION", "DESIRE_OTHER", "DESIRE_OTHER_N", "N"); // Nested under OTHER
addSectionDefinition(
  "SEXUAL_FUNCTION",
  "DESIRE_OTHER",
  "DESIRE_OTHER_SUPPRESSED", // Nested under OTHER, corrected spelling
  "SUPPRESSED"
);
addSectionDefinition(
  "SEXUAL_FUNCTION",
  "DESIRE_OTHER",
  "DESIRE_OTHER_ABSENT", // Nested under OTHER
  "ABSENT"
);
addSectionDefinition("SEXUAL_FUNCTION", null, "MASTURBATION", "MASTURBATION");
addSectionDefinition(
  "SEXUAL_FUNCTION",
  "MASTURBATION",
  "MASTURBATION_FREQUENCY",
  "FREQUENCY"
);
addSectionDefinition(
  "SEXUAL_FUNCTION",
  "MASTURBATION",
  "MASTURBATION_NOCTURNAL_EMISSION",
  "NOCTURNAL EMISSION"
);
addSectionDefinition(
  "SEXUAL_FUNCTION",
  "MASTURBATION",
  "MASTURBATION_PROSTATORRHOEA",
  "PROSTATORRHOEA"
);
addSectionDefinition("SEXUAL_FUNCTION", null, "SEX_HISTORY", "SEX"); // Renamed key for clarity
addSectionDefinition(
  "SEXUAL_FUNCTION",
  "SEX_HISTORY",
  "SEX_MARITAL",
  "MARITAL"
);
addSectionDefinition(
  "SEXUAL_FUNCTION",
  "SEX_HISTORY",
  "SEX_PRE_MARITAL",
  "PRE - MARITAL"
);
addSectionDefinition(
  "SEXUAL_FUNCTION",
  "SEX_HISTORY",
  "SEX_EXTRA_MARITAL",
  "EXTRA - MARITAL"
);
addSectionDefinition("SEXUAL_FUNCTION", "SEX_HISTORY", "SEX_OTHERS", "OTHERS");
addSectionDefinition("SEXUAL_FUNCTION", null, "CONTINENCE", "CONTINENCE"); // Renamed key for clarity
addSectionDefinition("SEXUAL_FUNCTION", null, "CONTRACEPTION", "CONTRACEPTION"); // Renamed key for clarity
addSectionDefinition("SEXUAL_FUNCTION", null, "COITION", "COITION");
addSectionDefinition(
  "SEXUAL_FUNCTION",
  "COITION",
  "COITION_FREQUENCY", // Corrected spelling
  "FREQUENCY"
);
addSectionDefinition(
  "SEXUAL_FUNCTION",
  "COITION",
  "COITION_FOREPLAY",
  "FOREPLAY"
); // Corrected spelling
addSectionDefinition(
  "SEXUAL_FUNCTION",
  "COITION",
  "COITION_POSITIONS",
  "POSITION / S"
);
addSectionDefinition("SEXUAL_FUNCTION", null, "EXCITEMENT", "EXCITEMENT");
addSectionDefinition("SEXUAL_FUNCTION", "EXCITEMENT", "EXCITEMENT_N", "N");
addSectionDefinition(
  "SEXUAL_FUNCTION",
  "EXCITEMENT",
  "EXCITEMENT_EARLY",
  "EARLY"
);
addSectionDefinition(
  "SEXUAL_FUNCTION",
  "EXCITEMENT",
  "EXCITEMENT_FANTASY",
  "FANTASY"
);
addSectionDefinition("SEXUAL_FUNCTION", null, "ERECTION", "ERECTION");
addSectionDefinition("SEXUAL_FUNCTION", "ERECTION", "ERECTION_N", "N");
addSectionDefinition(
  "SEXUAL_FUNCTION",
  "ERECTION",
  "ERECTION_INCOMPLETE",
  "INCOMPLETE"
);
addSectionDefinition(
  "SEXUAL_FUNCTION",
  "ERECTION",
  "ERECTION_ABSENT",
  "ABSENT"
);
addSectionDefinition(
  "SEXUAL_FUNCTION",
  "ERECTION",
  "ERECTION_PAINFUL",
  "PAINFUL"
);
addSectionDefinition("SEXUAL_FUNCTION", null, "INSERTION", "INSERTION");
addSectionDefinition("SEXUAL_FUNCTION", null, "EJACULATION", "EJACULATION");
addSectionDefinition("SEXUAL_FUNCTION", "EJACULATION", "EJACULATION_N", "N");
addSectionDefinition(
  "SEXUAL_FUNCTION",
  "EJACULATION",
  "EJACULATION_PREMATURE", // Corrected spelling
  "PREMATURE"
);
addSectionDefinition(
  "SEXUAL_FUNCTION",
  "EJACULATION",
  "EJACULATION_INVOLUNTARY",
  "INVOLUNTARY"
);
addSectionDefinition(
  "SEXUAL_FUNCTION",
  "EJACULATION",
  "EJACULATION_ABSENT",
  "ABSENT"
);
addSectionDefinition(
  "SEXUAL_FUNCTION",
  "EJACULATION",
  "EJACULATION_RETARDED",
  "RETARDED"
);
addSectionDefinition(
  "SEXUAL_FUNCTION",
  "EJACULATION",
  "EJACULATION_PAINFUL", // Corrected spelling
  "PAINFUL"
);
addSectionDefinition("SEXUAL_FUNCTION", null, "ORGASM", "ORGASM");
addSectionDefinition("SEXUAL_FUNCTION", "ORGASM", "ORGASM_N", "N");
addSectionDefinition("SEXUAL_FUNCTION", "ORGASM", "ORGASM_ABSENT", "ABSENT");
addSectionDefinition("SEXUAL_FUNCTION", null, "PREPUCE", "PREPUCE");
addSectionDefinition("SEXUAL_FUNCTION", "PREPUCE", "PREPUCE_CRACKS", "CRACKS");
addSectionDefinition(
  "SEXUAL_FUNCTION",
  "PREPUCE",
  "PREPUCE_INFECTION",
  "INFECTION"
);
addSectionDefinition(
  "SEXUAL_FUNCTION",
  "PREPUCE",
  "PREPUCE_RETRACTION_DIFFICULT",
  "RETRACTION DIFFICULT"
);
addSectionDefinition("SEXUAL_FUNCTION", null, "VAGINA", "VAGINA");
addSectionDefinition("SEXUAL_FUNCTION", "VAGINA", "VAGINA_N", "N");
addSectionDefinition("SEXUAL_FUNCTION", "VAGINA", "VAGINA_DRYNESS", "DRYNESS");
addSectionDefinition("SEXUAL_FUNCTION", "VAGINA", "VAGINA_SPASM", "SPASM");
addSectionDefinition(
  "SEXUAL_FUNCTION",
  "VAGINA",
  "VAGINA_NUMBNESS",
  "NUMBNESS"
);
addSectionDefinition("SEXUAL_FUNCTION", "VAGINA", "VAGINA_CRACKS", "CRACKS");
addSectionDefinition("SEXUAL_FUNCTION", null, "CONCOMITANTS", "CONCOMITANTS");
addSectionDefinition("SEXUAL_FUNCTION", "CONCOMITANTS", "COITION D.", "COITION D.");
addSectionDefinition("SEXUAL_FUNCTION", "CONCOMITANTS", "COITION A.", "COITION A.");
addSectionDefinition("SEXUAL_FUNCTION", null, "MARITAL_ADJUSTMENT", "MARITAL_ADJUSTMENT");
// --- PATIENTS_MOTHERS_OBSTETRIC_HISTORY Tab --- // Note: Potential typo, maybe "OBSTETRIC"?
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  null,
  "PREGNANCIES",
  "PREGNANCIES"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "PREGNANCIES",
  "PREG_GRAVIDA",
  "GRAVIDA"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "PREGNANCIES",
  "PREG_PARA",
  "PARA"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  null,
  "ABORTIONS",
  "ABORTIONS"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "ABORTIONS",
  "ABORTION_NATURAL",
  "NATURAL"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "ABORTIONS",
  "ABORTION_INDUCED",
  "INDUCED"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "ABORTIONS",
  "ABORTION_HABITUAL",
  "HABITUAL"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "ABORTIONS",
  "ABORTION_THREATENED",
  "THREATENED"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  null,
  "ANTENATAL_PERIOD",
  "ANTENATAL PERIOD"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "ANTENATAL_PERIOD",
  "ANTENATAL_AGE_CONCEPTION",
  "AGE AT THE TIME OF CONCEPTION"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "ANTENATAL_PERIOD",
  "ANTENATAL_PLANNED_PREGNANCY",
  "PLANNED PREGNANCY"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "ANTENATAL_PERIOD",
  "ANTENATAL_UNPLANNED_PREGNANCY",
  "UNPLANNED PREGNANCY"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "ANTENATAL_PERIOD",
  "ANTENATAL_DESIRE_MF_CHILD",
  "DESIRE FOR M/F CHILD"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  null,
  "ANTENATAL_HISTORY",
  "ANTENATAL HISTORY"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "ANTENATAL_HISTORY",
  "ANTENATAL_WEIGHT_GAIN",
  "WEIGHT GAIN"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "ANTENATAL_HISTORY",
  "ANTENATAL_MORNING_SICKNESS",
  "MORNING SICKNESS"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "ANTENATAL_HISTORY",
  "ANTENATAL_PYROSIS", // Corrected spelling
  "PYROSIS"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "ANTENATAL_HISTORY",
  "ANTENATAL_PICA",
  "PICA"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "ANTENATAL_HISTORY",
  "ANTENATAL_BACKACHE",
  "BACKACHE"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "ANTENATAL_HISTORY",
  "ANTENATAL_FOETAL_MOVEMENTS",
  "FOETAL MOVEMENTS"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "ANTENATAL_HISTORY",
  "ANTENATAL_OEDEMA",
  "OEDEMA"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "ANTENATAL_HISTORY",
  "ANTENATAL_PROTEINURIA",
  "PROTEINURIA"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "ANTENATAL_HISTORY",
  "ANTENATAL_BP",
  "B.P."
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "ANTENATAL_HISTORY",
  "ANTENATAL_CONVULSIONS",
  "CONVULSIONS"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "ANTENATAL_HISTORY",
  "ANTENATAL_SKIN_PIGM",
  "SKIN PIGM"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "ANTENATAL_HISTORY",
  "ANTENATAL_PILES_VEINS", // Assuming PILES?
  "PILES VEINS"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "ANTENATAL_HISTORY",
  "ANTENATAL_VARICOSE_VEINS",
  "VARICOSE VEINS"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "ANTENATAL_HISTORY",
  "ANTENATAL_BLEEDING_VOMIT", // VOMITING?
  "BLEEDING VOMIT"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "ANTENATAL_HISTORY",
  "ANTENATAL_APH", // Antepartum haemorrhage?
  "A.P.H"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "ANTENATAL_HISTORY",
  "ANTENATAL_INFECTIONS",
  "INFECTIONS"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "ANTENATAL_HISTORY",
  "ANTENATAL_TORCH",
  "TORCH"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "ANTENATAL_HISTORY",
  "ANTENATAL_DRUGS",
  "DRUGS"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "ANTENATAL_HISTORY",
  "ANTENATAL_MENTAL_STATE", // Corrected spelling, consolidated key
  "MENTAL STATE PREGNANCY DURING"
);
addSectionDefinition("PATIENTS_MOTHERS_OBSTETRIC_HISTORY", null, "LABOUR", "LABOUR");
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "LABOUR",
  "LABOUR_UTERINE_INERTIA",
  "UTERINE INTERTIA"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "LABOUR",
  "LABOUR_RIGID_OS",
  "RIGID OS"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "LABOUR",
  "LABOUR_PPH", // Postpartum haemorrhage?
  "P.P.H"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "LABOUR",
  "LABOUR_PLACENTA",
  "PLACENTA"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  null,
  "DELIVERY",
  "DELIVERY"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "DELIVERY",
  "DELIVERY_FTND", // Full term normal delivery?
  "F.T.N.D."
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "DELIVERY",
  "DELIVERY_FORCEPS",
  "FORCEPS"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "DELIVERY",
  "DELIVERY_VACUUM_SUCTION", // Corrected spelling
  "VACUUM SUCTION"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "DELIVERY",
  "DELIVERY_CAESAR", // Corrected spelling
  "CAESAR"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "DELIVERY",
  "DELIVERY_VERSION", // Corrected spelling
  "VERSION"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "DELIVERY",
  "DELIVERY_INDUCED",
  "INDUCED"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "DELIVERY",
  "DELIVERY_PREMATURE",
  "PREMATURE"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "DELIVERY",
  "DELIVERY_POST_MATURE",
  "POST MATURE"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  null,
  "BIRTH_WEIGHT",
  "BIRTH WEIGHT"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  null,
  "NEONATAL",
  "NEONATAL"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "NEONATAL",
  "NEONATAL_PROBLEMS",
  "PROBLEMS"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "NEONATAL",
  "NEONATAL_ASPHYXIA",
  "ASPHYXIA"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "NEONATAL",
  "NEONATAL_JAUNDICE",
  "JAUNDICE"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "NEONATAL",
  "NEONATAL_SEPSIS", // Corrected spelling
  "SEPSIS"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "NEONATAL",
  "NEONATAL_CORD_INFECTION",
  "CORD INFECTION"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "NEONATAL",
  "NEONATAL_CORD_BLEEDING",
  "CORD BLEEDING"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  null,
  "POST_PARTUM",
  "POST PARTUM"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "POST_PARTUM",
  "POSTPARTUM_LOCHIA",
  "LOCHIA"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "POST_PARTUM",
  "POSTPARTUM_SEPSIS",
  "SEPSIS"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "POST_PARTUM",
  "POSTPARTUM_LACTATION", // Corrected spelling
  "LACTATION"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "POST_PARTUM",
  "POSTPARTUM_MENTAL_STATE", // Corrected spelling, consolidated key
  "MENTAL STATE POST PARTUM"
);
// Removed redundant STATE, POST, PARTUM
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  null,
  "MOTHER_FOETUS_BOND",
  "MOTHER FOETUS BOND"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "MOTHER_FOETUS_BOND",
  "BOND_ATTACHMENT",
  "ATTACHMENT"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "MOTHER_FOETUS_BOND",
  "BOND_AMBIVALENT",
  "AMBIVALENT"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "MOTHER_FOETUS_BOND",
  "BOND_REJECTION",
  "REJECTION"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "MOTHER_FOETUS_BOND",
  "BOND_DELAY_ISOLATION", // Corrected spelling
  "DELAY(ISOLATION)"
);
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  null,
  "RH_INCOMPATIBILITIES", // Corrected spelling
  "RH INCOMPATIBILITIES"
);
addSectionDefinition("PATIENTS_MOTHERS_OBSTETRIC_HISTORY", null, "ADOPTED", "ADOPTED");
addSectionDefinition(
  "PATIENTS_MOTHERS_OBSTETRIC_HISTORY",
  "ADOPTED",
  "ADOPTED_AGE_AT_TIME",
  "AGE AT THE TIME OF ADOPTION"
);

// --- DEVELOPMENTAL_LANDMARKS_PROBLEMS Tab --- // Note: Potential typo in tab key "BEVELOPMENTAL"? Keeping as is unless asked to change.
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  null,
  "PROBLEMS",
  "PROBLEMS"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "PROBLEMS",
  "DEV_PHYSICAL",
  "PHYSICAL DEVELOPMENT"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "PROBLEMS",
  "DEV_MENTAL", // Corrected spelling
  "MENTAL DEVELOPMENT"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  null, // Should this be under PROBLEMS or top-level? Assuming top-level based on structure.
  "GROWTH_INCREASE",
  "INCREASE"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "GROWTH_INCREASE",
  "INCREASE_WEIGHT",
  "WEIGHT"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "GROWTH_INCREASE",
  "INCREASE_HEIGHT",
  "HEIGHT"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  null, // Assuming top-level
  "RECOGNITION",
  "RECOGNITION"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "RECOGNITION",
  "RECOG_OBJECT",
  "OBJECT"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "RECOGNITION",
  "RECOG_PERSON", // Corrected spelling
  "PERSON"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "RECOGNITION",
  "RECOG_SOCIAL_SMILE",
  "SOCIAL SMILE"
);
// The following seem like milestones, maybe group under "MILESTONES"?
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  null,
  "MILESTONES_GROSS_MOTOR",
  "Gross Motor"
); // Example grouping
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "MILESTONES_GROSS_MOTOR",
  "HEAD_CIRCUMFERENCE", // Example - was HEAD
  "HEAD CIRCUMFERENCE"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "MILESTONES_GROSS_MOTOR",
  "ABDOMEN_CIRCUMFERENCE", // Example - was ABDOMEN
  "ABDOMEN CIRCUMFERENCE"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "MILESTONES_GROSS_MOTOR",
  "FONTANELLAE_CLOSURE",
  "FONTANELLAE (CLOSURE)"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "MILESTONES_GROSS_MOTOR",
  "DENTITION",
  "DENTITION"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "MILESTONES_GROSS_MOTOR",
  "HEAD_HOLDING",
  "HEAD HOLDING"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "MILESTONES_GROSS_MOTOR",
  "TURNING_PRONE",
  "TURNING PRONE"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "MILESTONES_GROSS_MOTOR",
  "SITTING",
  "SITTING"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "MILESTONES_GROSS_MOTOR",
  "CRAWLING",
  "CRAWLING"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "MILESTONES_GROSS_MOTOR",
  "STANDING",
  "STANDING"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "MILESTONES_GROSS_MOTOR",
  "WALKING",
  "WALKING"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  null,
  "MILESTONES_FINE_MOTOR",
  "Fine Motor / Self Help"
); // Example grouping
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "MILESTONES_FINE_MOTOR",
  "OBJECT_GRASP",
  "OBJECT GRASP"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "MILESTONES_FINE_MOTOR",
  "HAND_TO_HAND_TRANSFER",
  "HAND TO HAND TRANSFER"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "MILESTONES_FINE_MOTOR",
  "PINCER_MOVEMENT", // Corrected spelling
  "PINCER MOVEMENT"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "MILESTONES_FINE_MOTOR",
  "REMOVE_CLOTHES", // Corrected spelling
  "REMOVE CLOTHES"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "MILESTONES_FINE_MOTOR",
  "REMOVE_SHOES", // Corrected spelling
  "REMOVE SHOES"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "MILESTONES_FINE_MOTOR",
  "PUTS_ON_CLOTHES", // Corrected spelling
  "PUTS ON CLOTHES"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "MILESTONES_FINE_MOTOR",
  "PUTS_ON_SHOES", // Corrected spelling
  "PUTS ON SHOES"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  null, // Assuming top-level
  "SPEECH",
  "SPEECH"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "SPEECH",
  "SPEECH_BABBLING",
  "BABBLING"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "SPEECH",
  "SPEECH_WORDS",
  "WORDS"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "SPEECH",
  "SPEECH_SENTENCES", // Corrected spelling
  "SENTENCES"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "SPEECH",
  "SPEECH_RETARDED", // Corrected spelling
  "RETARDED"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "SPEECH",
  "SPEECH_LISPING",
  "LISPING"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "SPEECH",
  "SPEECH_STAMMERING",
  "STAMMERING"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  null, // Assuming top-level
  "SOCIALIZATION", // Corrected spelling
  "SOCIALIZATION"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  null, // Assuming top-level
  "TOILET_CONTROL", // Renamed for clarity
  "CONTROL"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "TOILET_CONTROL",
  "CONTROL_BLADDER_D",
  "BLADDER D"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "TOILET_CONTROL",
  "CONTROL_BLADDER_N",
  "BLADDER N"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "TOILET_CONTROL",
  "CONTROL_BOWEL", // Corrected spelling
  "BOWEL"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  null, // Assuming top-level
  "FEEDING_HISTORY", // Renamed for clarity
  "FEEDING"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "FEEDING_HISTORY",
  "FEEDING_BREAST",
  "BREAST"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "FEEDING_HISTORY",
  "FEEDING_TOP_DILUTION",
  "TOP:DILUTION"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "FEEDING_HISTORY",
  "FEEDING_BOTTLE", // Corrected spelling
  "BOTTLE"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "FEEDING_HISTORY",
  "FEEDING_SOLIDS",
  "SOLIDS"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  null, // Assuming top-level
  "FEEDING_PROBLEMS",
  "FEEDING PROBLEMS"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "FEEDING_PROBLEMS",
  "FEEDING_PROB_COLIC",
  "COLIC"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "FEEDING_PROBLEMS",
  "FEEDING_PROB_UNDER",
  "UNDER FEEDING"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "FEEDING_PROBLEMS",
  "FEEDING_PROB_OVER",
  "OVER FEEDING"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "FEEDING_PROBLEMS",
  "FEEDING_PROB_REGURGITATION_VOMITING", // Corrected spelling
  "REGURGITATION & VOMITING"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "FEEDING_PROBLEMS",
  "FEEDING_PROB_LOOSE_STOOLS",
  "LOOSE STOOLS"
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "FEEDING_PROBLEMS",
  "FEEDING_PROB_CONSTIPATION",
  "CONSTIPATION"
);
// --- DEVELOPMENTAL_LANDMARKS_PROBLEMS Tab ---

// (Assuming your existing addSectionDefinition calls for other parts of
//  DEVELOPMENTAL_LANDMARKS_PROBLEMS are already present or will be added separately)

// --- BEHAVIOUR AND BEHAVIOURAL PROBLEMS ---
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  null,
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEHAVIOUR AND BEHAVIOURAL PROBLEMS" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_ADDICTIONS",
  "ADDICTIONS" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_AGGRESSIVE",
  "AGGRESSIVE" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_BEATING",
  "BEATING" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_BITING",
  "BITING" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_FIGHTING",
  "FIGHTING" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_THROWING_OBJECTS",
  "THROWING OBJECTS" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_ALT_BREATH_HOLD",
  "ALTERNATING BREATH HOLDING" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_CHANGEABLE",
  "CHANGEABLE" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_CHEATING",
  "CHEATING" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_CLINGING",
  "CLINGING" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_CONTRARY",
  "CONTRARY" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_CRUEL",
  "CRUEL" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_DANCING",
  "DANCING" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_DEPENDENT",
  "DEPENDENT" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_DESTRUCTIVE",
  "DESTRUCTIVE" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_DIRTY",
  "DIRTY" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_DISOBEDIENCE",
  "DISOBEDIENCE (UNMANAGEABLE)" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_ERRATIC",
  "ERRATIC" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_EXTRAVAGANT",
  "EXTRAVAGANT" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_FANCIES",
  "FANCIES" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_FASTIDIOUS",
  "FASTIDIOUS" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_FAECES_SOILING",
  "FAECES SOILING" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_FIRESETTING",
  "FIRESETTING" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_FEARSOME",
  "FEARSOME" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_FRIGHTENED",
  "FRIGHTENED" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_GRIMACING",
  "GRIMACING" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_HAIR_PLUCKING",
  "HAIR PLUCKING" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_HEAD_BANGING",
  "HEAD BANGING" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_HOMESICK",
  "HOMESICK" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_HURRY",
  "HURRY" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_HYPERACTIVE",
  "HYPERACTIVE" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_IMPATIENT",
  "IMPATIENT" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_IMPETUOUS",
  "IMPETUOUS" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_INACTIVE",
  "INACTIVE" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_INCONSISTENT",
  "INCONSISTENT" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_JESTING",
  "JESTING" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_LAUGHING",
  "LAUGHING" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_LAZY",
  "LAZY" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_LEWD",
  "LEWD" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_NAIL_BITING",
  "NAIL BITING" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_NERVOUS",
  "NERVOUS" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_OBSTINATE",
  "OBSTINATE" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_PERFECTIONIST",
  "PERFECTIONIST" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_POOR_MIXING",
  "POOR MIXING" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_QUARRELSOME",
  "QUARRELSOME" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_RESERVED",
  "RESERVED" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_SCHOOL_PHOBIA_ETC",
  "SCHOOL PHOBIA / POOR CONCENTRATION / REFUSAL TO STUDY" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_SHY",
  "SHY" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_SLOW",
  "SLOW" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_SLY",
  "SLY" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_STEALING",
  "STEALING" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_SULKING",
  "SULKING" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_TANTRUMS",
  "TANTRUMS" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_THUMBSUCKING",
  "THUMBSUCKING" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_TICS",
  "TICS" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_TIMID",
  "TIMID" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_TRUANT",
  "TRUANT" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_VIOLENT",
  "VIOLENT" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_VIVACIOUS",
  "VIVACIOUS" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_WANDERING",
  "WANDERING" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "BEHAVIOUR_PROBLEMS_MAIN",
  "BEH_WEEPY",
  "WEEPY" // Uppercase
);

// --- PARENTAL ATTITUDES ---
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  null,
  "PARENTAL_ATTITUDES_MAIN",
  "PARENTAL ATTITUDES" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "PARENTAL_ATTITUDES_MAIN",
  "PARENT_ATT_ABUSIVE",
  "ABUSIVE" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "PARENTAL_ATTITUDES_MAIN",
  "PARENT_ATT_AFFECTIONATE",
  "AFFECTIONATE" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "PARENTAL_ATTITUDES_MAIN",
  "PARENT_ATT_AMBITIOUS",
  "AMBITIOUS" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "PARENTAL_ATTITUDES_MAIN",
  "PARENT_ATT_ANXIOUS_UNSURE",
  "ANXIOUS / UNSURE" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "PARENTAL_ATTITUDES_MAIN",
  "PARENT_ATT_CONTRADICTORY",
  "CONTRADICTORY" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "PARENTAL_ATTITUDES_MAIN",
  "PARENT_ATT_CRITICAL",
  "CRITICAL" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "PARENTAL_ATTITUDES_MAIN",
  "PARENT_ATT_DICTATORIAL",
  "DICTATORIAL" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "PARENTAL_ATTITUDES_MAIN",
  "PARENT_ATT_DISCIPLINARIAN",
  "DISCIPLINARIAN" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "PARENTAL_ATTITUDES_MAIN",
  "PARENT_ATT_FAVOURITISM",
  "FAVOURITISM" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "PARENTAL_ATTITUDES_MAIN",
  "PARENT_ATT_INDULGENT",
  "INDULGENT" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "PARENTAL_ATTITUDES_MAIN",
  "PARENT_ATT_OVERPROTECTIVE",
  "OVERPROTECTIVE" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "PARENTAL_ATTITUDES_MAIN",
  "PARENT_ATT_OVERPERMISSIVE",
  "OVERPERMISSIVE" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "PARENTAL_ATTITUDES_MAIN",
  "PARENT_ATT_PERFECTIONIST",
  "PERFECTIONIST" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "PARENTAL_ATTITUDES_MAIN",
  "PARENT_ATT_PUSHY",
  "PUSHY" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "PARENTAL_ATTITUDES_MAIN",
  "PARENT_ATT_REJECTION",
  "REJECTION" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "PARENTAL_ATTITUDES_MAIN",
  "PARENT_ATT_RIGID",
  "RIGID" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "PARENTAL_ATTITUDES_MAIN",
  "PARENT_ATT_SUPPORTIVE",
  "SUPPORTIVE" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "PARENTAL_ATTITUDES_MAIN",
  "PARENT_ATT_TOLERANT",
  "TOLERANT" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "PARENTAL_ATTITUDES_MAIN",
  "PARENT_ATT_UNDEMONSTRATIVE",
  "UNDEMONSTRATIVE" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "PARENTAL_ATTITUDES_MAIN",
  "PARENT_ATT_UNDERSTANDING",
  "UNDERSTANDING" // Uppercase
);
addSectionDefinition(
  "DEVELOPMENTAL_LANDMARKS_PROBLEMS",
  "PARENTAL_ATTITUDES_MAIN",
  "PARENT_ATT_VIOLENT",
  "VIOLENT" // Uppercase
);
// --- REACTION_PHYSICAL_FACTORS Tab ---
// (No sections defined yet in the original code)
// --- Existing Definitions ---
addSectionDefinition("REACTION_PHYSICAL_FACTORS", null, "TIME", "TIME");
addSectionDefinition("REACTION_PHYSICAL_FACTORS", "TIME", "MORNING", "MORNING");
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "TIME",
  "FORE-NOON",
  "FORE-NOON"
); // Note: Using "FORE_NOON" as ID might be safer if hyphens cause issues
addSectionDefinition("REACTION_PHYSICAL_FACTORS", "TIME", "NOON", "NOON");

// --- New Time Definitions ---
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "TIME",
  "AFTERNOON",
  "AFTERNOON"
);
addSectionDefinition("REACTION_PHYSICAL_FACTORS", "TIME", "EVENING", "EVENING");
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "TIME",
  "TWILIGHT",
  "TWILIGHT"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "TIME",
  "FOUR_PM_TO_EIGHT_PM",
  "4PM-8PM"
); // Using underscores for ID consistency
addSectionDefinition("REACTION_PHYSICAL_FACTORS", "TIME", "NIGHT", "NIGHT");
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "TIME",
  "MID_NIGHT",
  "MID-NIGHT"
); // Using underscore for ID
addSectionDefinition("REACTION_PHYSICAL_FACTORS", "TIME", "BEFORE", "BEFORE"); // General time modifier
addSectionDefinition("REACTION_PHYSICAL_FACTORS", "TIME", "AFTER", "AFTER"); // General time modifier
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "TIME",
  "ONE_TO_TWO_AM",
  "1-2 AM"
); // Using underscores for ID
addSectionDefinition("REACTION_PHYSICAL_FACTORS", "TIME", "THREE_AM", "3AM");
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "TIME",
  "FOUR_TO_FIVE_AM",
  "4-5AM"
); // Using underscores for ID

addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  null,
  "PERIODICITY",
  "PERIODICITY"
);

addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "PERIODICITY", // Parent is PERIODICITY
  "DAILY",
  "DAILY"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "PERIODICITY",
  "SAME_HOUR", // ID using underscore
  "SAME HOUR"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "PERIODICITY",
  "ALTERNATE_DAY_MENSES", // ID using underscores
  "ALTERNATE DAY/MENSES"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "PERIODICITY",
  "WEEKLY",
  "WEEKLY"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "PERIODICITY",
  "MONTHLY",
  "MONTHLY"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "PERIODICITY",
  "SEASONAL",
  "SEASONAL"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "PERIODICITY",
  "YEARLY",
  "YEARLY"
);

// --- Define MOON PHASES as a sub-category under PERIODICITY ---
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "PERIODICITY", // Parent is PERIODICITY
  "MOON_PHASES", // ID for the sub-category
  "MOON PHASES"
);

// --- Define items under MOON PHASES ---
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "MOON_PHASES", // Parent is MOON_PHASES
  "WAXING",
  "WAXING"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "MOON_PHASES",
  "FULL",
  "FULL"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "MOON_PHASES",
  "WANING",
  "WANING"
);
addSectionDefinition("REACTION_PHYSICAL_FACTORS", "MOON_PHASES", "NEW", "NEW");

// --- Define the main container for MOTION & POSITION ---
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  null, // No parent for this container within the section
  "MOTION_AND_POSITION",
  "MOTION & POSITION"
);

// --- Define the MOTION sub-category ---
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "MOTION_AND_POSITION", // Parent is MOTION & POSITION container
  "MOTION",
  "MOTION"
);

// --- Items under MOTION ---
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "MOTION",
  "MOTION_BEGINNING",
  "BEGINNING"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "MOTION",
  "MOTION_DURING",
  "DURING"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "MOTION",
  "MOTION_AFTER",
  "AFTER"
);

addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "MOTION",
  "MOTION_CONTINUED",
  "CONTINUED"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "MOTION",
  "MOTION_SLOW",
  "SLOW"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "MOTION",
  "MOTION_FAST",
  "FAST"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "MOTION",
  "MOTION_CARRIED",
  "CARRIED"
);

addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "MOTION",
  "MOTION_DANCING",
  "DANCING"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "MOTION",
  "MOTION_JERKS",
  "JERKS"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "MOTION",
  "MOTION_ROCKING",
  "ROCKING"
);

addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "MOTION",
  "MOTION_WALKING",
  "WALKING"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "MOTION",
  "MOTION_HEAD_NODDING",
  "HEAD-NODDING"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "MOTION",
  "MOTION_SWAYING_SICKNESS",
  "SWAYING (MOTION SICKNESS)"
);

addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "MOTION",
  "MOTION_AIR",
  "AIR"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "MOTION",
  "MOTION_BOAT",
  "BOAT"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "MOTION",
  "MOTION_BUS",
  "BUS"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "MOTION",
  "MOTION_CAR",
  "CAR"
);

addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "MOTION",
  "MOTION_SWING",
  "SWING"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "MOTION",
  "MOTION_EXERTION",
  "EXERTION"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "MOTION",
  "MOTION_REST",
  "REST"
);

// --- Define the POSITION sub-category ---
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "MOTION_AND_POSITION", // Parent is MOTION & POSITION container
  "POSITION",
  "POSITION"
);

// --- Items under POSITION (following visual layout) ---
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "POSITION",
  "POSITION_LYING",
  "LYING"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "POSITION",
  "POSITION_LYING_ABDOMEN",
  "ABDOMEN"
); // Related to lying
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "POSITION",
  "POSITION_LYING_ARMS_APART",
  "ARMS APART"
); // Modifier, possibly for lying

addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "POSITION",
  "POSITION_BACK",
  "BACK"
); // Related to lying
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "POSITION",
  "POSITION_BUTTOCKS_RAISED",
  "BUTTOCKS RAISED"
); // Modifier
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "POSITION",
  "POSITION_HEAD_HIGH_LOW",
  "HEAD : HIGH / LOW"
); // Modifier

addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "POSITION",
  "POSITION_KNEE_CHEST",
  "KNEE-CHEST"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "POSITION",
  "POSITION_SIDE",
  "SIDE"
); // Sub-category for side
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "POSITION_SIDE",
  "POSITION_SIDE_RIGHT",
  "RIGHT"
); // Under SIDE
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "POSITION_SIDE",
  "POSITION_SIDE_LEFT",
  "LEFT"
); // Under SIDE

addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "POSITION",
  "POSITION_PAINFUL",
  "PAINFUL"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "POSITION",
  "POSITION_PAINLESS",
  "PAINLESS"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "POSITION",
  "POSITION_SITTING",
  "SITTING"
); // Sub-category for sitting
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "POSITION_SITTING",
  "POSITION_SITTING_BENT_BACKWARD",
  "BENT BACKWARD"
); // Under SITTING

addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "POSITION",
  "POSITION_FORWARD",
  "FORWARD"
); // Modifier, maybe related to sitting/stooping
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "POSITION",
  "POSITION_HEAD_HIGH_LOW_2",
  "HEAD:HIGH / LOW"
); // Duplicate from image, added _2 to ID
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "POSITION",
  "POSITION_LEGS_HANGING",
  "LEGS HANGING"
); // Modifier, likely related to sitting

addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "POSITION",
  "POSITION_STOOPING",
  "STOOPING"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "POSITION",
  "POSITION_STRAIGHT",
  "STRAIGHT"
); // Modifier, relates to posture
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "POSITION",
  "POSITION_STANDING",
  "STANDING"
);
// --- Define the main container for METEOROLOGICAL ---
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  null, // No parent for this container within the section
  "METEOROLOGICAL",
  "METEOROLOGICAL"
);

// --- Define the TEMPERATURE sub-category ---
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "METEOROLOGICAL", // Parent is METEOROLOGICAL container
  "TEMPERATURE",
  "TEMPERATURE"
);

// Items under TEMPERATURE
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "TEMPERATURE",
  "TEMP_HOT",
  "HOT"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "TEMPERATURE",
  "TEMP_SUN",
  "SUN"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "TEMPERATURE",
  "TEMP_HOT_DAYS_COLD_NIGHTS",
  "HOT DAYS, COLD NIGHTS"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "TEMPERATURE",
  "TEMP_COLD",
  "COLD"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "TEMPERATURE",
  "TEMP_MEDIUM",
  "MEDIUM"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "TEMPERATURE",
  "TEMP_HEAT_AND_COLD",
  "HEAT & COLD"
);

// --- Define the WEATHER sub-category ---
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "METEOROLOGICAL",
  "WEATHER",
  "WEATHER"
);

// Items under WEATHER
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "WEATHER",
  "WEATHER_CLEAR",
  "CLEAR"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "WEATHER",
  "WEATHER_DRY",
  "DRY"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "WEATHER",
  "WEATHER_FOGGY",
  "FOGGY"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "WEATHER",
  "WEATHER_CLOUDY",
  "CLOUDY"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "WEATHER",
  "WEATHER_HUMID_DAMP_COLD_WARM",
  "HUMID / DAMP:COLD / WARM"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "WEATHER",
  "WEATHER_STORMS_B",
  "STORMS: B."
); // Assuming 'B.' is significant
addSectionDefinition("REACTION_PHYSICAL_FACTORS", "WEATHER", "WEATHER_D", "D."); // As shown on the line
addSectionDefinition("REACTION_PHYSICAL_FACTORS", "WEATHER", "WEATHER_A", "A."); // As shown on the line
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "WEATHER",
  "WEATHER_SEA_SIDE",
  "SEA-SIDE"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "WEATHER",
  "WEATHER_HILLS",
  "HILLS"
);

// --- Define the SEASONS sub-category ---
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "METEOROLOGICAL",
  "SEASONS",
  "SEASONS"
);

// Items under SEASONS
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SEASONS",
  "SEASON_SUMMER",
  "SUMMER"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SEASONS",
  "SEASON_SPRING",
  "SPRING"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SEASONS",
  "SEASON_MONSOONS",
  "MONSOONS"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SEASONS",
  "SEASON_WINTER",
  "WINTER"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SEASONS",
  "SEASON_AUTUMN",
  "AUTUMN"
);

// --- Define the CHANGE sub-category ---
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "METEOROLOGICAL",
  "CHANGE_WEATHER_TEMP_SEASON",
  "CHANGE : WEATHER / TEMPERATURE / SEASONS"
);

// Items under CHANGE (with nested GENERAL/LOCAL where applicable)
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "CHANGE_WEATHER_TEMP_SEASON",
  "CHANGE_COLD_TO_HOT",
  "COLD --> HOT (HEATED)"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "CHANGE_COLD_TO_HOT",
  "CHANGE_COLD_TO_HOT_GENERAL",
  "GENERAL"
); // Nested under COLD --> HOT

addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "CHANGE_WEATHER_TEMP_SEASON",
  "CHANGE_HOT_TO_COLD",
  "HOT --> COLD (CHILLED)"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "CHANGE_HOT_TO_COLD",
  "CHANGE_HOT_TO_COLD_LOCAL",
  "LOCAL"
); // Nested under HOT --> COLD

// --- Define the AIR sub-category ---
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "METEOROLOGICAL",
  "AIR",
  "AIR"
);

// Items under AIR
addSectionDefinition("REACTION_PHYSICAL_FACTORS", "AIR", "AIR_WIND", "WIND");
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "AIR",
  "AIR_BREEZE",
  "BREEZE"
);
addSectionDefinition("REACTION_PHYSICAL_FACTORS", "AIR", "AIR_FAN", "FAN");
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "AIR",
  "AIR_OPEN",
  "AIR, OPEN"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "AIR",
  "AIR_ROOM_CLOSED",
  "ROOM, CLOSED"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "AIR",
  "AIR_CONDITIONING",
  "AIR-CONDITIONING"
);

// --- Define the WET, GETTING sub-category ---
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "METEOROLOGICAL",
  "WET_GETTING",
  "WET, GETTING"
);

// Items under WET, GETTING
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "WET_GETTING",
  "WET_GETTING_GENERAL",
  "GENERAL"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "WET_GETTING",
  "WET_GETTING_LOCAL",
  "LOCAL"
);

// --- Define the INCLINATION MODIFIERS category ---
// Note: The visual layout suggests this is separate, but related to reactions.
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "METEOROLOGICAL", // Placing under METEOROLOGICAL based on proximity
  "INCLINATION_MODIFIERS",
  "( INCLINATION, < , > )" // Using the literal text as item name
);

// Items under INCLINATION MODIFIERS
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "INCLINATION_MODIFIERS",
  "INCLINATION_GENERAL",
  "GENERAL"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "INCLINATION_MODIFIERS",
  "INCLINATION_LOCAL",
  "LOCAL"
);

// --- Define the COVERING / UNCOVERING sub-category ---
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "METEOROLOGICAL",
  "COVERING_UNCOVERING",
  "COVERING / UNCOVERING"
);

// Items under COVERING / UNCOVERING
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "COVERING_UNCOVERING",
  "COVERING_GENERAL",
  "GENERAL"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "COVERING_UNCOVERING",
  "COVERING_LOCAL",
  "LOCAL"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "METEOROLOGICAL", // Assuming it fits best here, or use null for a new top-level sibling
  "CLOTHS",
  "CLOTHS"
);

// Items under CLOTHS
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "CLOTHS",
  "CLOTHS_HEAVY",
  "HEAVY"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "CLOTHS",
  "CLOTHS_LIGHT",
  "LIGHT"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "CLOTHS",
  "CLOTHS_TIGHT",
  "TIGHT"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "CLOTHS",
  "CLOTHS_LOOSE",
  "LOOSE"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "CLOTHS",
  "CLOTHS_WOOLEN",
  "WOOLEN"
);

// --- Define WARMTH sub-category ---
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "METEOROLOGICAL", // Assuming it fits best here
  "WARMTH",
  "WARMTH"
);

// Items under WARMTH
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "WARMTH",
  "WARMTH_GENERAL",
  "GENERAL"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "WARMTH",
  "WARMTH_LOCAL",
  "LOCAL"
);

// --- Define COLD (Sensitivity/Reaction) sub-category ---
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "METEOROLOGICAL", // Assuming it fits best here
  "COLD_REACTION", // Renamed ID to avoid conflict with TEMP_COLD
  "COLD" // Label as shown
);

// Items under COLD_REACTION
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "COLD_REACTION",
  "COLD_REACTION_GENERAL",
  "GENERAL"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "COLD_REACTION",
  "COLD_REACTION_LOCAL",
  "LOCAL"
);

// --- Define BATH sub-category ---
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "METEOROLOGICAL", // Assuming it fits best here
  "BATH",
  "BATH"
);

// Items under BATH
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "BATH",
  "BATH_DESIRE_AVERSION",
  "DESIRE / AVERSION / < / >"
); // Using literal text
addSectionDefinition("REACTION_PHYSICAL_FACTORS", "BATH", "BATH_COLD", "COLD");
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "BATH",
  "BATH_TEPID",
  "TEPID"
);
addSectionDefinition("REACTION_PHYSICAL_FACTORS", "BATH", "BATH_HOT", "HOT");

// --- Define SEASONAL (Reaction) sub-category ---
// This seems like a specific reaction type, potentially different from the SEASONS list itself
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "METEOROLOGICAL", // Assuming it fits best here
  "SEASONAL_REACTION",
  "SEASONAL" // Label as shown
);

// Items under SEASONAL_REACTION
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SEASONAL_REACTION",
  "SEASONAL_HOT_EQ_COLD",
  "HOT == COLD"
); // Using == as in image
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SEASONAL_REACTION",
  "SEASONAL_SEA",
  "SEA"
);

// --- Define PATIENT Thermal State category ---
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "METEOROLOGICAL", // Assuming it fits best here
  "PATIENT_THERMAL_STATE",
  "PATIENT : HOT / COLD / AMBITHERMAL (STATE DEGREE & DISCREPANCY BETWEEN GENERAL & LOCAL REACTIONS)" // Full label
);
// Note: This might be considered a top-level characteristic rather than a sub-item,
// depending on the data model. If so, change parentId to null.
// Also, the HOT/COLD/AMBITHERMAL part could be broken into specific selectable items if needed.

// --- Define the new SENSORY INPUTS Section ---
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  null, // New top-level category within the section
  "SENSORY_INPUTS",
  "SENSORY INPUTS"
);

// Items under SENSORY INPUTS (grouping based on visual proximity)

// Row 1
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SENSORY_INPUTS",
  "SENSORY_CINEMA_TV",
  "CINEMA / T.V."
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SENSORY_INPUTS",
  "SENSORY_COLOUR",
  "COLOUR"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SENSORY_INPUTS",
  "SENSORY_DARK",
  "DARK"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SENSORY_INPUTS",
  "SENSORY_HEARING",
  "HEARING"
); // Could be a sub-category?
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SENSORY_INPUTS",
  "SENSORY_HEARING_JARRING",
  "JARRING"
); // Assumed related to hearing

// Row 2
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SENSORY_INPUTS",
  "SENSORY_LIGHT",
  "LIGHT"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SENSORY_INPUTS",
  "SENSORY_LIGHTNING",
  "LIGHTNING"
); // Note: Different 'LIGHT' items
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SENSORY_INPUTS",
  "SENSORY_MOONLIGHT",
  "MOONLIGHT"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SENSORY_INPUTS",
  "SENSORY_MUSIC",
  "MUSIC"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SENSORY_INPUTS",
  "SENSORY_NOISE",
  "NOISE"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SENSORY_INPUTS",
  "SENSORY_ODOURS",
  "ODOURS"
);

// Row 3
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SENSORY_INPUTS",
  "SENSORY_PAIN",
  "PAIN"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SENSORY_INPUTS",
  "SENSORY_PRESSURE",
  "PRESSURE"
); // Could be a sub-category?
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SENSORY_PRESSURE",
  "SENSORY_PRESSURE_LIGHT",
  "LIGHT"
); // Under PRESSURE
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SENSORY_PRESSURE",
  "SENSORY_PRESSURE_HARD",
  "HARD"
); // Under PRESSURE
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SENSORY_PRESSURE",
  "SENSORY_PRESSURE_BINDING",
  "BINDING"
); // Under PRESSURE
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SENSORY_INPUTS",
  "SENSORY_READING",
  "READING"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SENSORY_INPUTS",
  "SENSORY_STORMS",
  "STORMS"
); // Related to weather/sensory?

// Row 4
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SENSORY_INPUTS",
  "SENSORY_TASTE",
  "TASTE"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SENSORY_INPUTS",
  "SENSORY_THUNDER",
  "THUNDER"
);
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SENSORY_INPUTS",
  "SENSORY_TOUCH",
  "TOUCH"
); // Could be a sub-category?
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SENSORY_TOUCH",
  "SENSORY_TOUCH_FIRM",
  "FIRM"
); // Under TOUCH
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SENSORY_TOUCH",
  "SENSORY_TOUCH_HEAVY",
  "HEAVY"
); // Under TOUCH
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SENSORY_TOUCH",
  "SENSORY_TOUCH_LIGHT",
  "LIGHT"
); // Under TOUCH
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SENSORY_INPUTS",
  "SENSORY_RUBBING",
  "RUBBING"
); // Related to touch?

// Row 5
addSectionDefinition(
  "REACTION_PHYSICAL_FACTORS",
  "SENSORY_INPUTS",
  "SENSORY_VISION",
  "VISION"
);

// ======================================================
// Section ID for all these items
const mainSectionId = "REACTION_PHYSICAL_FACTORS";
// ======================================================

// --- PHYSIOLOGICAL FUNCTIONS (Nested under REACTION_PHYSICAL_FACTORS) ---
addSectionDefinition(
  mainSectionId,
  null,
  "PHYSIOLOGICAL_FUNCTIONS",
  "PHYSIOLOGICAL FUNCTIONS"
);

// --- DIGESTION (Nested under PHYSIOLOGICAL_FUNCTIONS) ---
addSectionDefinition(
  mainSectionId,
  "PHYSIOLOGICAL_FUNCTIONS",
  "DIGESTION",
  "DIGESTION"
);
addSectionDefinition(mainSectionId, "DIGESTION", "DIGESTION_EATING", "EATING");
addSectionDefinition(
  mainSectionId,
  "DIGESTION_EATING",
  "EATING_BEFORE",
  "BEFORE"
);
addSectionDefinition(
  mainSectionId,
  "DIGESTION_EATING",
  "EATING_DURING",
  "DURING"
);
addSectionDefinition(
  mainSectionId,
  "DIGESTION_EATING",
  "EATING_AFTER",
  "AFTER"
);
addSectionDefinition(
  mainSectionId,
  "DIGESTION",
  "DIGESTION_A_LITTLE",
  "A LITTLE"
);
addSectionDefinition(
  mainSectionId,
  "DIGESTION",
  "DIGESTION_TO_SATIETY",
  "TO SATIETY"
);
addSectionDefinition(
  mainSectionId,
  "DIGESTION",
  "DIGESTION_OVEREATING",
  "OVEREATING"
);
addSectionDefinition(
  mainSectionId,
  "DIGESTION",
  "DIGESTION_FASTING",
  "FASTING"
);
addSectionDefinition(
  mainSectionId,
  "DIGESTION",
  "DIGESTION_FOOD_SIGHT",
  "FOOD : SIGHT"
);
addSectionDefinition(mainSectionId, "DIGESTION", "DIGESTION_SMELL", "SMELL");
addSectionDefinition(
  mainSectionId,
  "DIGESTION",
  "DIGESTION_THOUGHT",
  "THOUGHT"
);
addSectionDefinition(
  mainSectionId,
  "DIGESTION",
  "DIGESTION_FLATULENCE",
  "FLATULENCE"
);
addSectionDefinition(
  mainSectionId,
  "DIGESTION_FLATULENCE",
  "FLATULENCE_GASTRIC",
  "GASTRIC"
);
addSectionDefinition(
  mainSectionId,
  "DIGESTION_FLATULENCE",
  "FLATULENCE_INTESTINAL",
  "INTESTINAL"
);
addSectionDefinition(
  mainSectionId,
  "DIGESTION",
  "DIGESTION_SWALLOWING",
  "SWALLOWING"
);
addSectionDefinition(
  mainSectionId,
  "DIGESTION_SWALLOWING",
  "SWALLOWING_EMPTY",
  "EMPTY"
);
addSectionDefinition(
  mainSectionId,
  "DIGESTION_SWALLOWING",
  "SWALLOWING_LIQUIDS",
  "LIQUIDS"
);
addSectionDefinition(
  mainSectionId,
  "DIGESTION_SWALLOWING",
  "SWALLOWING_SOLIDS",
  "SOLIDS"
);

// --- FOOD + DRINKS (Nested under PHYSIOLOGICAL_FUNCTIONS) ---
addSectionDefinition(
  mainSectionId,
  "PHYSIOLOGICAL_FUNCTIONS",
  "FOOD_PLUS_DRINKS",
  "FOOD + DRINKS"
);
// Page 51 Items
addSectionDefinition(
  mainSectionId,
  "FOOD_PLUS_DRINKS",
  "FD_ALCOHOL",
  "ALCOHOL (SPECIFY)"
);
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_ATA", "ATA");
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_BACON", "BACON");
addSectionDefinition(
  mainSectionId,
  "FOOD_PLUS_DRINKS",
  "FD_BEANS_PEAS",
  "BEANS + PEAS"
);
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_BEER", "BEER");
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_BREAD", "BREAD");
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_BUTTER", "BUTTER");
addSectionDefinition(
  mainSectionId,
  "FOOD_PLUS_DRINKS",
  "FD_CABBAGE",
  "CABBAGE"
);
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_CARROT", "CARROT");
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_CHEESE", "CHEESE");
addSectionDefinition(
  mainSectionId,
  "FOOD_PLUS_DRINKS",
  "FD_CHICKEN",
  "CHICKEN"
);
addSectionDefinition(
  mainSectionId,
  "FOOD_PLUS_DRINKS",
  "FD_CHILLIES",
  "CHILLIES"
);
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_COFFEE", "COFFEE");
addSectionDefinition(
  mainSectionId,
  "FOOD_PLUS_DRINKS",
  "FD_COLD_DRINKS",
  "COLD : DRINKS"
);
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_CORN", "CORN");
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_DRY_FOOD", "DRY");
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_EGGS", "EGGS");
addSectionDefinition(
  mainSectionId,
  "FOOD_PLUS_DRINKS",
  "FD_FARINACEOUS",
  "FARINACEOUS (STARCH, RICE, POTATOES)"
);
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_FAT", "FAT");
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_FISH", "FISH");
addSectionDefinition(mainSectionId, "FD_FISH", "FD_FISH_DRIED", "DRIED");
addSectionDefinition(
  mainSectionId,
  "FOOD_PLUS_DRINKS",
  "FD_FLATULENT_FOOD",
  "FLATULENT"
);
addSectionDefinition(
  mainSectionId,
  "FOOD_PLUS_DRINKS",
  "FD_LARGE_MEAL",
  "LARGE"
);
addSectionDefinition(
  mainSectionId,
  "FOOD_PLUS_DRINKS",
  "FD_SHELLFISH",
  "SHELL"
);
addSectionDefinition(
  mainSectionId,
  "FOOD_PLUS_DRINKS",
  "FD_SMALL_MEAL",
  "SMALL"
);
// Page 52 Items
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_FRIED", "FRIED");
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_FROZEN", "FROZEN");
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_FRUITS", "FRUITS");
addSectionDefinition(mainSectionId, "FD_FRUITS", "FD_FRUITS_APPLE", "APPLE");
addSectionDefinition(mainSectionId, "FD_FRUITS", "FD_FRUITS_BANANA", "BANANA");
addSectionDefinition(
  mainSectionId,
  "FD_FRUITS",
  "FD_FRUITS_BERRIES",
  "BERRIES"
);
addSectionDefinition(mainSectionId, "FD_FRUITS", "FD_FRUITS_CHIKKU", "CHIKKU");
addSectionDefinition(mainSectionId, "FD_FRUITS", "FD_FRUITS_CITRUS", "CITRUS");
addSectionDefinition(mainSectionId, "FD_FRUITS", "FD_FRUITS_GRAPES", "GRAPES");
addSectionDefinition(mainSectionId, "FD_FRUITS", "FD_FRUITS_MANGO", "MANGO");
addSectionDefinition(mainSectionId, "FD_FRUITS", "FD_FRUITS_PEACH", "PEACH");
addSectionDefinition(mainSectionId, "FD_FRUITS", "FD_FRUITS_PEAR", "PEAR");
addSectionDefinition(mainSectionId, "FD_FRUITS", "FD_FRUITS_PERU", "PERU");
addSectionDefinition(
  mainSectionId,
  "FD_FRUITS",
  "FD_FRUITS_STRAWBERRIES",
  "STRAWBERRIES"
);
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_GARLIC", "GARLIC");
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_GINGER", "GINGER");
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_HONEY", "HONEY");
addSectionDefinition(
  mainSectionId,
  "FOOD_PLUS_DRINKS",
  "FD_HOT_FOOD_DRINK",
  "HOT"
);
addSectionDefinition(
  mainSectionId,
  "FOOD_PLUS_DRINKS",
  "FD_LEMONADE",
  "LEMONADE"
);
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_MEAT", "MEAT");
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_MILK", "MILK");
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_NUTS", "NUTS");
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_ONIONS", "ONIONS");
addSectionDefinition(
  mainSectionId,
  "FOOD_PLUS_DRINKS",
  "FD_OYSTERS",
  "OYSTERS"
);
addSectionDefinition(
  mainSectionId,
  "FOOD_PLUS_DRINKS",
  "FD_PANCAKES",
  "PANCAKES"
);
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_PASTRY", "PASTRY");
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_PEPPER", "PEPPER");
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_PORK", "PORK");
addSectionDefinition(
  mainSectionId,
  "FOOD_PLUS_DRINKS",
  "FD_POTATOES",
  "POTATOES"
);
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_RAW_FOOD", "RAW");
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_RICH_FOOD", "RICH");
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_SALAD", "SALAD");
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_SALT", "SALT");
addSectionDefinition(
  mainSectionId,
  "FOOD_PLUS_DRINKS",
  "FD_SAUERKRAUT",
  "SAUR KRAUT"
);
addSectionDefinition(
  mainSectionId,
  "FOOD_PLUS_DRINKS",
  "FD_SAUSAGES",
  "SAUSAGES"
);
addSectionDefinition(
  mainSectionId,
  "FOOD_PLUS_DRINKS",
  "FD_SMOKED_FOOD",
  "SMOKED"
);
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_SOUR", "SOUR");
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_SPICES", "SPICES");
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_SWEETS", "SWEETS");
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_TEA", "TEA");
addSectionDefinition(
  mainSectionId,
  "FOOD_PLUS_DRINKS",
  "FD_TOMATOES",
  "TOMATOES"
);
addSectionDefinition(
  mainSectionId,
  "FOOD_PLUS_DRINKS",
  "FD_TURNIPS",
  "TURNIPS"
);
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_VEAL", "VEAL");
addSectionDefinition(
  mainSectionId,
  "FOOD_PLUS_DRINKS",
  "FD_VEGETABLES",
  "VEGETABLES"
);
addSectionDefinition(
  mainSectionId,
  "FOOD_PLUS_DRINKS",
  "FD_VINEGAR",
  "VINEGAR"
);
addSectionDefinition(
  mainSectionId,
  "FOOD_PLUS_DRINKS",
  "FD_WARM_DRINKS",
  "WARM : DRINKS"
);
addSectionDefinition(
  mainSectionId,
  "FOOD_PLUS_DRINKS",
  "FD_FOOD_GENERAL",
  "FOOD"
);
addSectionDefinition(mainSectionId, "FOOD_PLUS_DRINKS", "FD_WHEAT", "WHEAT");

// --- ELIMINATIONS (Nested under PHYSIOLOGICAL_FUNCTIONS, Page 53) ---
addSectionDefinition(
  mainSectionId,
  "PHYSIOLOGICAL_FUNCTIONS",
  "ELIMINATIONS",
  "ELIMINATIONS"
);
// Stools
addSectionDefinition(mainSectionId, "ELIMINATIONS", "ELIM_STOOLS", "STOOLS");
addSectionDefinition(mainSectionId, "ELIM_STOOLS", "ELIM_STOOLS_B", "B.");
addSectionDefinition(mainSectionId, "ELIM_STOOLS", "ELIM_STOOLS_D", "D.");
addSectionDefinition(mainSectionId, "ELIM_STOOLS", "ELIM_STOOLS_A", "A.");
// Urine
addSectionDefinition(mainSectionId, "ELIMINATIONS", "ELIM_URINE", "URINE");
addSectionDefinition(mainSectionId, "ELIM_URINE", "ELIM_URINE_B", "B.");
addSectionDefinition(mainSectionId, "ELIM_URINE", "ELIM_URINE_D", "D.");
addSectionDefinition(mainSectionId, "ELIM_URINE", "ELIM_URINE_A", "A.");
// Perspiration
addSectionDefinition(
  mainSectionId,
  "ELIMINATIONS",
  "ELIM_PERSPIRATION",
  "PERSPIRATION"
); // Primary location
addSectionDefinition(
  mainSectionId,
  "ELIM_PERSPIRATION",
  "ELIM_PERSPIRATION_D",
  "D."
);
addSectionDefinition(
  mainSectionId,
  "ELIM_PERSPIRATION",
  "ELIM_PERSPIRATION_A",
  "A."
);
addSectionDefinition(
  mainSectionId,
  "ELIM_PERSPIRATION",
  "ELIM_PERSPIRATION_CHILLED",
  "CHILLED"
);
// Menses
addSectionDefinition(mainSectionId, "ELIMINATIONS", "ELIM_MENSES", "MENSES"); // Primary location
addSectionDefinition(mainSectionId, "ELIM_MENSES", "ELIM_MENSES_B", "B.");
addSectionDefinition(mainSectionId, "ELIM_MENSES", "ELIM_MENSES_BEG", "BEG.");
addSectionDefinition(mainSectionId, "ELIM_MENSES", "ELIM_MENSES_D", "D.");
addSectionDefinition(mainSectionId, "ELIM_MENSES", "ELIM_MENSES_A", "A.");
// Leucorrhoea
addSectionDefinition(
  mainSectionId,
  "ELIMINATIONS",
  "ELIM_LEUCORRHOEA",
  "LEUCORRHOEA"
); // Primary location
addSectionDefinition(
  mainSectionId,
  "ELIM_LEUCORRHOEA",
  "ELIM_LEUCORRHOEA_B",
  "B."
);
addSectionDefinition(
  mainSectionId,
  "ELIM_LEUCORRHOEA",
  "ELIM_LEUCORRHOEA_D",
  "D."
);
addSectionDefinition(
  mainSectionId,
  "ELIM_LEUCORRHOEA",
  "ELIM_LEUCORRHOEA_A",
  "A."
);

// --- BREATHING (Nested under PHYSIOLOGICAL_FUNCTIONS, Page 53) ---
addSectionDefinition(
  mainSectionId,
  "PHYSIOLOGICAL_FUNCTIONS",
  "BREATHING",
  "BREATHING"
);
addSectionDefinition(mainSectionId, "BREATHING", "BREATHING_D", "D.");
addSectionDefinition(mainSectionId, "BREATHING", "BREATHING_INSP", "INSP");
addSectionDefinition(mainSectionId, "BREATHING", "BREATHING_EXP", "EXP");

// --- SLEEP (Nested under PHYSIOLOGICAL_FUNCTIONS, Page 53) ---
addSectionDefinition(
  mainSectionId,
  "PHYSIOLOGICAL_FUNCTIONS",
  "SLEEP",
  "SLEEP"
);
addSectionDefinition(
  mainSectionId,
  "SLEEP",
  "SLEEP_BEFORE_FALLING",
  "BEFORE FALLING TO"
);
addSectionDefinition(mainSectionId, "SLEEP", "SLEEP_SHORT", "SHORT");
addSectionDefinition(mainSectionId, "SLEEP", "SLEEP_LONG", "LONG");
addSectionDefinition(mainSectionId, "SLEEP", "SLEEP_DURING", "DURING");
addSectionDefinition(mainSectionId, "SLEEP", "SLEEP_AFTER", "AFTER");
addSectionDefinition(mainSectionId, "SLEEP", "SLEEP_AWAKENING", "AWAKENING");
addSectionDefinition(
  mainSectionId,
  "SLEEP_AWAKENING",
  "SLEEP_AWAKENING_MORNING",
  "MORNING"
);
addSectionDefinition(
  mainSectionId,
  "SLEEP_AWAKENING",
  "SLEEP_AWAKENING_AFTERNOON",
  "AFTER-NOON"
);
addSectionDefinition(mainSectionId, "SLEEP", "SLEEP_LOSS_OF", "LOSS OF");
addSectionDefinition(mainSectionId, "SLEEP", "SLEEP_DREAMS", "DREAMS");

// --- SEX (Nested under PHYSIOLOGICAL_FUNCTIONS, Page 53) ---
addSectionDefinition(mainSectionId, "PHYSIOLOGICAL_FUNCTIONS", "SEX", "SEX");
addSectionDefinition(mainSectionId, "SEX", "SEX_MASTURBATION", "MASTURBATION");
addSectionDefinition(mainSectionId, "SEX", "SEX_EMISSION", "EMISSION");
addSectionDefinition(mainSectionId, "SEX_EMISSION", "SEX_EMISSION_D", "D.");
addSectionDefinition(mainSectionId, "SEX_EMISSION", "SEX_EMISSION_A", "A.");
addSectionDefinition(mainSectionId, "SEX", "SEX_COITION", "COITION");
addSectionDefinition(mainSectionId, "SEX_COITION", "SEX_COITION_D", "D.");
addSectionDefinition(mainSectionId, "SEX_COITION", "SEX_COITION_A", "A.");
addSectionDefinition(mainSectionId, "SEX", "SEX_EJACULATION", "EJACULATION");
addSectionDefinition(
  mainSectionId,
  "SEX_EJACULATION",
  "SEX_EJACULATION_D",
  "D."
);
addSectionDefinition(
  mainSectionId,
  "SEX_EJACULATION",
  "SEX_EJACULATION_A",
  "A."
);
addSectionDefinition(mainSectionId, "SEX", "SEX_SUPPRESSION", "SUPPRESSION");
addSectionDefinition(mainSectionId, "SEX", "SEX_INDULGENCE", "INDULGENCE");

// --- DISCHARGES & ERUPTIONS (Nested under PHYSIOLOGICAL_FUNCTIONS, Page 53) ---
addSectionDefinition(
  mainSectionId,
  "PHYSIOLOGICAL_FUNCTIONS",
  "DISCHARGES_AND_ERUPTIONS",
  "DISCHARGES & ERUPTIONS"
);
addSectionDefinition(
  mainSectionId,
  "DISCHARGES_AND_ERUPTIONS",
  "DISCHARGE_NOSE",
  "NOSE"
);

// --- Top of Page 54 Items (Nested under PHYSIOLOGICAL_FUNCTIONS) ---
addSectionDefinition(
  mainSectionId,
  "PHYSIOLOGICAL_FUNCTIONS",
  "EARS_SECTION",
  "EARS"
);
addSectionDefinition(
  mainSectionId,
  "PHYSIOLOGICAL_FUNCTIONS",
  "SKIN_SECTION",
  "SKIN"
);
addSectionDefinition(
  mainSectionId,
  "SKIN_SECTION",
  "SKIN_PERSPIRATION",
  "PERSPIRATION"
); // Consider linking/relating to ELIM_PERSPIRATION
addSectionDefinition(
  mainSectionId,
  "SKIN_SECTION",
  "SKIN_EXANTHEMATA",
  "EXANTHEMATA"
);
addSectionDefinition(
  mainSectionId,
  "PHYSIOLOGICAL_FUNCTIONS",
  "UTERINE_SECTION",
  "UTERINE"
);
addSectionDefinition(
  mainSectionId,
  "UTERINE_SECTION",
  "UTERINE_MENSES",
  "MENSES"
); // Consider linking/relating to ELIM_MENSES
addSectionDefinition(
  mainSectionId,
  "UTERINE_SECTION",
  "EXTRA_LEUCORRHOEA",
  "LEUCORRHOEA"
); // Consider linking/relating to ELIM_LEUCORRHOEA

// --- EPOCHS (Nested under REACTION_PHYSICAL_FACTORS, Page 54) ---
addSectionDefinition(mainSectionId, null, "EPOCHS", "EPOCHS");
addSectionDefinition(mainSectionId, "EPOCHS", "EPOCH_SCHOOLING", "SCHOOLING");
addSectionDefinition(
  mainSectionId,
  "EPOCHS",
  "EPOCH_ADOLESCENCE",
  "ADOLESCENCE"
);
addSectionDefinition(mainSectionId, "EPOCHS", "EPOCH_MENARCHE", "MENARCHE");
addSectionDefinition(mainSectionId, "EPOCHS", "EPOCH_MARRIAGE", "MARRIAGE");
addSectionDefinition(mainSectionId, "EPOCHS", "EPOCH_OCCUPATION", "OCCUPATION");
addSectionDefinition(mainSectionId, "EPOCHS", "EPOCH_PREGNANCY", "PREGNANCY");
addSectionDefinition(
  mainSectionId,
  "EPOCH_PREGNANCY",
  "EPOCH_PREGNANCY_LABOUR",
  "LABOUR"
);
addSectionDefinition(
  mainSectionId,
  "EPOCH_PREGNANCY",
  "EPOCH_PUERPERIUM",
  "PUERPERIUM"
);
addSectionDefinition(
  mainSectionId,
  "EPOCH_PREGNANCY",
  "EPOCH_LACTATION",
  "LACTATION"
);
addSectionDefinition(
  mainSectionId,
  "EPOCHS",
  "EPOCH_CLIMACTERIC_INVOLUTION",
  "CLIMACTERIC & INVOLUTION"
);
addSectionDefinition(mainSectionId, "EPOCHS", "EPOCH_SENESCENCE", "SENESCENCE");

// --- ADAPTATION - STRESS (Nested under REACTION_PHYSICAL_FACTORS, Page 54) ---
addSectionDefinition(
  mainSectionId,
  null,
  "ADAPTATION_STRESS",
  "ADAPTATION - STRESS"
);
// No sub-items listed for this category in the image

addSectionDefinition("FERVER_TOTALITY", null, "ONSET", "ONSET");
addSectionDefinition("FERVER_TOTALITY", "ONSET", "SUDDEN", "SUDDEN");
addSectionDefinition("FERVER_TOTALITY", "ONSET", "INSIDIOUS", "INSIDIOUS");
addSectionDefinition("FERVER_TOTALITY", null, "TYPE", "TYPE");
addSectionDefinition("FERVER_TOTALITY", "TYPE", "CONTINUES", "CONTINUES");
addSectionDefinition("FERVER_TOTALITY", "TYPE", "INTERMITTENT", "INTERMITTENT");
addSectionDefinition("FERVER_TOTALITY", "TYPE", "LADDER", "LADDER");
addSectionDefinition("FERVER_TOTALITY", "TYPE", "REMITTENT", "REMITTENT");
addSectionDefinition("FERVER_TOTALITY", "TYPE", "SWINGING", "SWINGING");
addSectionDefinition("FERVER_TOTALITY", "TYPE", "SIMPLE", "SIMPLE");
addSectionDefinition("FERVER_TOTALITY", "TYPE", "COMPOUND", "COMPOUND");
addSectionDefinition("FERVER_TOTALITY", null, "COURSE", "COURSE");
addSectionDefinition("FERVER_TOTALITY", "COURSE", "ACUTE", "ACUTE");
addSectionDefinition("FERVER_TOTALITY", "COURSE", "SUB-ACUTE", "SUB-ACUTE");
addSectionDefinition("FERVER_TOTALITY", "COURSE", "CHRONIC", "CHRONIC");
addSectionDefinition("FERVER_TOTALITY", "COURSE", "PERIODIC", "PERIODIC");
addSectionDefinition("FERVER_TOTALITY", "COURSE", "FULMINANT", "FULMINANT");
addSectionDefinition(
  "FERVER_TOTALITY",
  null,
  "CHILL&COLDNESS",
  "CHILL & COLDNESS"
);
addSectionDefinition(
  "FERVER_TOTALITY",
  "CHILL&COLDNESS",
  "CHARACTER",
  "CHARACTER"
);
addSectionDefinition("FERVER_TOTALITY", "CHILL&COLDNESS", "TIME", "TIME");
addSectionDefinition(
  "FERVER_TOTALITY",
  "CHILL&COLDNESS",
  "CONCOMITANTS",
  "CONCOMITANTS"
);
addSectionDefinition("FERVER_TOTALITY", null, "FEVER&HEAT", "FEVER & HEAT");
addSectionDefinition("FERVER_TOTALITY", "FEVER&HEAT", "CHARACTER", "CHARACTER");
addSectionDefinition("FERVER_TOTALITY", "CHILL&HEAT", "TIME", "TIME");
addSectionDefinition(
  "FERVER_TOTALITY",
  "CHILL&HEAT",
  "CONCOMITANTS",
  "CONCOMITANTS"
);
addSectionDefinition("FERVER_TOTALITY", null, "PERSPIRATION", "PERSPIRATION");
addSectionDefinition(
  "FERVER_TOTALITY",
  "PERSPIRATION",
  "CHARACTER",
  "CHARACTER"
);
addSectionDefinition("FERVER_TOTALITY", "PERSPIRATION", "TIME", "TIME");
addSectionDefinition(
  "FERVER_TOTALITY",
  "PERSPIRATION",
  "CONCOMITANTS",
  "CONCOMITANTS"
);
addSectionDefinition(
  "FERVER_TOTALITY",
  null,
  "COMPOUND FEVERS",
  "COMPOUND FEVERS"
);
addSectionDefinition(
  "FERVER_TOTALITY",
  null,
  "INTERVAL APYREXIA",
  "INTERVAL APYREXIA"
);

//=========================================================
// PatientSection Component (Memoized for Performance)
//=========================================================
const PatientSection = React.memo(
  ({
    sectionKey,
    sectionData,
    level = 1,
    dropdownOpen,
    toggleDropdown,
    handlers,
  }) => {
    //   console.log(`Rendering PatientSection: ${sectionKey}`); // Optional: Debug render

    // --- Inline Style Calculations ---
    const getIndentStyle = (lvl) => {
      const baseStyle = {};
      if (lvl === 2) baseStyle.marginLeft = "1.5rem";
      else if (lvl === 3) baseStyle.marginLeft = "2.5rem";
      // Add more levels if needed
      return baseStyle;
    };
    const indentStyle = useMemo(() => getIndentStyle(level), [level]);

    const getHeadingStyle = (lvl) => ({ fontWeight: "bold" });
    const headingStyle = useMemo(() => getHeadingStyle(level), [level]);

    // --- Helper functions for Comment Text ---
    const transformCommentText = (text, priority) => {
      if (!text) return "";
      if (priority === "2") {
        return text.charAt(0).toUpperCase() + text.slice(1);
      }
      return text;
    };

    const getPriorityInputClass = (priorityValue) => {
      if (!priorityValue) return ""; // No priority set yet
      return `priority-${priorityValue}`; // Returns 'priority-1', 'priority-2', or 'priority-3'
    };
    const priorityClass = useMemo(
      () => getPriorityInputClass(sectionData.locationValue),
      [sectionData.locationValue]
    );
    const getCommentStyle = (priority) => {
      const style = {
        textAlign: "left",
        // Optional: Set base font size or style for priority 1 if needed
        // fontSize: priority === '1' ? '0.9em' : 'inherit', // Example: slightly smaller for priority 1
      };
      if (priority === "2") {
        style.fontStyle = "italic";
        // Capitalization is handled by transformCommentText
      } else if (priority === "3") {
        style.fontWeight = "bold"; // Add bold
        style.fontStyle = "italic"; // Keep italic
      }
      // Priority '1' gets default styles (or specific styles if added above)
      return style;
    };

    // Destructure handlers
    const {
      handleInputChange,
      handleDropdownSelect,
      handleAddItem,
      handleRemoveItem,
      toggleCommentsVisibility,
    } = handlers;

    return (
      <>
        <div className={`Patient_Person_Add`}>
          {/* Section Header */}
          <div
            className="d-flex justify-content-between align-items-center mb-2"
            style={indentStyle}
          >
            <h3 className={`h6 mb-0`} style={headingStyle}>
              <span>{sectionData.title}</span>
            </h3>
            <button
              type="button"
              className="btn btn-sm btn-link text-secondary p-0"
              onClick={() => toggleCommentsVisibility(sectionKey)}
              aria-label="Toggle comments visibility"
            >
              <MdArrowDropDown
                size={20}
                style={{
                  transform: sectionData.showComments
                    ? "rotate(0deg)"
                    : "rotate(-90deg)",
                  transition: "transform 0.2s ease-in-out",
                }}
              />
            </button>
          </div>

          {/* Input Row */}
          <div
            className="Patient_Textinput-main d-flex align-items-center"
            style={indentStyle}
          >
            <div className="Patient_Textinput flex-grow-1">
              <div className="p-1">
                <div className="d-flex">
                  <div className="flex-grow-1 position-relative">
                    <input
                      type="text"
                      className={`form-control form-control-sm comment-input ${priorityClass}`}
                      value={sectionData.inputValue}
                      onChange={(e) =>
                        handleInputChange(sectionKey, e.target.value)
                      }
                      placeholder="Enter Comment / Observation"
                    />
                    <button
                      type="button"
                      className="btn position-absolute top-50 end-0 translate-middle-y p-0 border-0 me-2 text-secondary"
                      onClick={() => toggleDropdown(sectionKey)}
                      aria-label="Set Priority"
                    >
                      {sectionData.locationValue ? (
                        <span
                          className={`badge bg-${
                            sectionData.locationValue === "3"
                              ? "danger"
                              : sectionData.locationValue === "2"
                              ? "warning text-dark"
                              : "secondary"
                          }`}
                        >
                          {sectionData.locationValue}
                        </span>
                      ) : (
                        <MdArrowDropDown size={24} />
                      )}
                    </button>
                    {dropdownOpen && (
                      <div
                        className="dropdown-menu show position-absolute end-0 mt-1 shadow-sm"
                        style={{ zIndex: 1060, minWidth: "50px" }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          className="dropdown-item small text-center p-1"
                          onClick={() =>
                            handleDropdownSelect(
                              sectionKey,
                              "locationValue",
                              "1"
                            )
                          }
                        >
                          1
                        </button>
                        <button
                          className="dropdown-item small text-center p-1"
                          onClick={() =>
                            handleDropdownSelect(
                              sectionKey,
                              "locationValue",
                              "2"
                            )
                          }
                        >
                          2
                        </button>
                        <button
                          className="dropdown-item small text-center p-1"
                          onClick={() =>
                            handleDropdownSelect(
                              sectionKey,
                              "locationValue",
                              "3"
                            )
                          }
                        >
                          3
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="ms-2">
                    <button
                      className="btn btn-primary btn-sm submit-form" // Added btn-sm
                      onClick={() => handleAddItem(sectionKey)}
                      aria-label="Add item"
                      disabled={!sectionData.inputValue.trim()}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comments List Table */}
        {sectionData.showComments && (
          <div className={`comments-list mt-2 mb-3`} style={indentStyle}>
            {sectionData.rows.length > 0 ? (
              <table className={`table table-sm table-hover small border-top`}>
                <tbody>
                  {sectionData.rows.map((row, index) => {
                    const commentStyle = getCommentStyle(row.locationValue);
                    const transformedText = transformCommentText(
                      row.location,
                      row.locationValue
                    );
                    return (
                      <tr key={`${sectionKey}-row-${index}`}>
                        {" "}
                        {/* More specific key */}
                        <td style={commentStyle} className="ps-2 align-middle">
                          {transformedText}
                        </td>
                        <td
                          className="text-end pe-2 align-middle"
                          style={{ width: "80px" }}
                        >
                          <span
                            className={`badge me-2 text-white bg-${
                              row.locationValue === "3"
                                ? "danger"
                                : row.locationValue === "2"
                                ? "warning text-dark"
                                : "secondary"
                            }`}
                            style={{ minWidth: "20px" }}
                          >
                            {row.locationValue}
                          </span>
                          <button
                            className="btn btn-xs btn-outline-danger border-0 p-0"
                            onClick={() => handleRemoveItem(sectionKey, index)}
                            aria-label="Remove item"
                          >
                            <MdClose size={18} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <div className="text-muted ps-2 small fst-italic">
                No comments added yet.
              </div>
            )}
          </div>
        )}
        {/* Separator Line */}
        {level === 1 && sectionData.showComments && (
          <hr className="my-2 border-light" />
        )}
      </>
    );
  }
);
PatientSection.displayName = "PatientSection"; // For React DevTools

//=========================================================
// CaseRecordinit Component (Main component - Optimized State)
//=========================================================
const CaseRecordinit = () => {
  // --- Use the populated configuration object ---

  const tabSectionOptions = useMemo(() => baseTabSectionOptions, []);

  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };
  const tabKeys = useMemo(
    () => Object.keys(tabSectionOptions),
    [tabSectionOptions]
  );
  const chunkSize = 5;
  const chunkedTabKeys = useMemo(
    () => chunkArray(tabKeys, chunkSize),
    [tabKeys, chunkSize]
  );

  // --- Helper to generate initial state AND calculate levels ---
  const generateInitialState = useCallback(() => {
    const initialState = {};
    // Recursive function to process options
    const processOptions = (options, level, parentTitle = null) => {
      // Takes parentTitle
      if (!options || options.length === 0) return;
      options.forEach((item) => {
        if (item.key) {
          // *** Calculate the full title including the parent path ***
          const fullTitle = parentTitle
            ? `${parentTitle} - ${item.title}` // Prepend parent if it exists
            : item.title; // Otherwise, use item's title

          if (!initialState[item.key]) {
            initialState[item.key] = {
              key: item.key,
              title: fullTitle, // *** STORE THE FULL TITLE HERE ***
              inputValue: "",
              locationValue: "",
              rows: [],
              showComments: true,
              level: level,
            };
          } else {
            console.warn(
              `Duplicate key definition found: ${item.key}. Using first encountered title/level.`
            );
          }
        } else {
          console.warn(
            `Item found without a key, only a title: "${item.title}". This item cannot be added as a section.`
          );
        }

        // Recurse for subOptions, passing the *current item's original title*
        if (item.subOptions && item.subOptions.length > 0) {
          // Pass item.title (segment title), not fullTitle
          processOptions(item.subOptions, level + 1, item.title);
        }
      });
    };

    // Initial call for each tab
    Object.values(tabSectionOptions).forEach((tabOptionsArray) => {
      processOptions(tabOptionsArray, 1); // Start level 1, no parent title
    });
    return initialState;
  }, [tabSectionOptions]);

  // --- Consolidated State ---
  const [sectionsData, setSectionsData] = useState(generateInitialState);

  // --- UI State ---
  const [activeTab, setActiveTab] = useState("PHYSICAL_CHARACTERISTICS"); // Default to first tab
  const tabRefs = useRef({});
  const tabContainerRef = useRef(null);
  const [visibleSectionsByTab, setVisibleSectionsByTab] = useState({});
  const [openTabDropdownKey, setOpenTabDropdownKey] = useState(null);
  const [expandedPath, setExpandedPath] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [openInnerDropdownKey, setOpenInnerDropdownKey] = useState(null);

  // --- Effects ---
  // Effect to set initial active tab based on available tabs
  useEffect(() => {
    const firstTabKey = Object.keys(tabSectionOptions)[0];
    if (firstTabKey) {
      setActiveTab(firstTabKey);
    }
  }, [tabSectionOptions]); // Run only when tab options change

  // Effect to scroll active tab into view
  useEffect(() => {
    const activeTabElement = tabRefs.current[activeTab];
    if (activeTabElement && tabContainerRef.current) {
      const tabRect = activeTabElement.getBoundingClientRect();
      const containerRect = tabContainerRef.current.getBoundingClientRect();
      if (
        tabRect.left < containerRect.left ||
        tabRect.right > containerRect.right
      ) {
        activeTabElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeTab]);

  // --- Generic State Update Handler ---
  const updateSectionState = useCallback((sectionKey, updatedData) => {
    setSectionsData((prev) => {
      if (!prev[sectionKey]) {
        console.warn(`Attempted to update non-existent section: ${sectionKey}`);
        return prev;
      }
      return { ...prev, [sectionKey]: updatedData };
    });
  }, []);

  // --- Specific Handlers (Memoized) ---
  const handleInputChange = useCallback(
    (sectionKey, value) => {
      const section = sectionsData[sectionKey];
      if (section) {
        let newLocationValue = section.locationValue; // Keep current value by default

        // --- NEW LOGIC ---
        // If user starts typing (value is not empty) AND no priority is currently set
        if (value.trim() !== "" && !section.locationValue) {
          newLocationValue = "1"; // Default to priority '1'
        }
        // --- END NEW LOGIC ---

        // Update state with new input value and potentially defaulted locationValue
        updateSectionState(sectionKey, {
          ...section,
          inputValue: value,
          locationValue: newLocationValue, // Use the calculated newLocationValue
        });
      }
    },
    [sectionsData, updateSectionState] // Dependencies remain the same
  );

  const handleInnerDropdownSelect = useCallback(
    (sectionKey, fieldKey, value) => {
      const section = sectionsData[sectionKey];
      if (section && fieldKey === "locationValue") {
        updateSectionState(sectionKey, { ...section, locationValue: value });
      }
      setOpenInnerDropdownKey(null);
    },
    [sectionsData, updateSectionState] // sectionsData needed
  );

  const toggleInnerDropdown = useCallback((sectionKey) => {
    setOpenInnerDropdownKey((prev) =>
      prev === sectionKey ? null : sectionKey
    );
  }, []);

  const toggleCommentsVisibility = useCallback(
    (sectionKey) => {
      const section = sectionsData[sectionKey];
      if (section) {
        updateSectionState(sectionKey, {
          ...section,
          showComments: !section.showComments,
        });
      }
    },
    [sectionsData, updateSectionState] // sectionsData needed
  );

  const handleAddItem = useCallback(
    (sectionKey) => {
      const section = sectionsData[sectionKey];
      if (section && section.inputValue.trim()) {
        const priorityValue = section.locationValue || "1";
        const newItem = {
          location: section.inputValue,
          locationValue: priorityValue,
        };
        updateSectionState(sectionKey, {
          ...section,
          rows: [...section.rows, newItem],
          inputValue: "",
          locationValue: "",
        });
        setOpenInnerDropdownKey(null);
      }
    },
    [sectionsData, updateSectionState] // sectionsData needed
  );

  const handleRemoveItem = useCallback(
    (sectionKey, indexToRemove) => {
      const section = sectionsData[sectionKey];
      if (section) {
        const newRows = section.rows.filter((_, i) => i !== indexToRemove);
        updateSectionState(sectionKey, { ...section, rows: newRows });
      }
    },
    [sectionsData, updateSectionState] // sectionsData needed
  );

  // --- Handlers for Tabs and "Add Section" Dropdown ---
  const handleTabSelect = (key) => {
    setActiveTab(key);
    setOpenTabDropdownKey(null);
    setExpandedPath([]);
    setSearchTerm("");
  };

  const toggleTabDropdown = (tabKey) => {
    setOpenTabDropdownKey((prev) => {
      const isOpening = prev !== tabKey;
      setExpandedPath([]);
      if (!isOpening) setSearchTerm("");
      return isOpening ? tabKey : null;
    });
  };

  // Helper to check if a key is defined in the configuration structure
  const isKeyDefinedInOptions = useCallback((options, keyToFind) => {
    if (!options) return false;
    for (const item of options) {
      if (item.key === keyToFind) return true;
      if (
        item.subOptions &&
        isKeyDefinedInOptions(item.subOptions, keyToFind)
      ) {
        return true;
      }
    }
    return false;
  }, []); // No dependency, pure function based on args

  const addSelectedSection = useCallback(
    (tabKey, sectionKeyToAdd) => {
      // Check if the key actually exists in the defined structure
      let isValidKey = false;
      const currentTabOptions = tabSectionOptions[tabKey] || [];
      if (isKeyDefinedInOptions(currentTabOptions, sectionKeyToAdd)) {
        isValidKey = true;
      }

      if (!isValidKey) {
        console.warn(
          `Section key ${sectionKeyToAdd} is not defined for tab ${tabKey}. Cannot add.`
        );
        setOpenTabDropdownKey(null);
        setExpandedPath([]);
        setSearchTerm("");
        return;
      }

      setVisibleSectionsByTab((prev) => {
        const currentVisible = prev[tabKey] || [];
        return !currentVisible.includes(sectionKeyToAdd)
          ? { ...prev, [tabKey]: [...currentVisible, sectionKeyToAdd] }
          : prev;
      });
      setOpenTabDropdownKey(null);
      setExpandedPath([]);
      setSearchTerm("");
    },
    [tabSectionOptions, isKeyDefinedInOptions] // Dependencies
  );

  const handleTitleClick = useCallback(
    (tabKey, item) => {
      const isActualSection = !!item.key; // Defined in options means it's a section
      const isVisible = (visibleSectionsByTab[tabKey] || []).includes(item.key);
      if (isActualSection && !isVisible) {
        addSelectedSection(tabKey, item.key);
      }
    },
    [visibleSectionsByTab, addSelectedSection] // Dependencies
  );

  // Helper to get all descendant keys that are actual sections
  const getAllSelectableKeysRecursive = useCallback((items) => {
    let keys = [];
    if (!items) return keys;
    items.forEach((item) => {
      if (item.key) keys.push(item.key); // If it has a key, it's selectable
      if (item.subOptions)
        keys = keys.concat(getAllSelectableKeysRecursive(item.subOptions));
    });
    return [...new Set(keys)];
  }, []);

  const handleArrowClick = useCallback(
    (e, tabKey, item) => {
      e.stopPropagation();
      const hasSubOptions = item.subOptions && item.subOptions.length > 0;
      const visibleKeysForThisTab = visibleSectionsByTab[tabKey] || [];
      const descendantKeys = getAllSelectableKeysRecursive(item.subOptions);
      const hasAvailableDescendants = descendantKeys.some(
        (key) => !visibleKeysForThisTab.includes(key)
      );

      if (hasSubOptions && hasAvailableDescendants) {
        setExpandedPath((prevPath) => [...prevPath, item.key]);
        setSearchTerm("");
      }
    },
    [visibleSectionsByTab, getAllSelectableKeysRecursive] // Dependencies
  );

  const handleDropdownBack = () => {
    setExpandedPath((prevPath) => prevPath.slice(0, -1));
    setSearchTerm("");
  };

  const removeVisibleSection = useCallback((tabKey, sectionKeyToRemove) => {
    setVisibleSectionsByTab((prev) => {
      const currentVisible = prev[tabKey] || [];
      return {
        ...prev,
        [tabKey]: currentVisible.filter((key) => key !== sectionKeyToRemove),
      };
    });
  }, []);

  // --- Memoize Handlers Object for PatientSection ---
  const memoizedHandlers = useMemo(
    () => ({
      handleInputChange, // Pass the modified handler down
      handleDropdownSelect: handleInnerDropdownSelect,
      handleAddItem,
      handleRemoveItem,
      toggleCommentsVisibility,
    }),
    [
      handleInputChange, // Add modified handler to dependency array
      handleInnerDropdownSelect,
      handleAddItem,
      handleRemoveItem,
      toggleCommentsVisibility,
    ]
  );

  // --- Render Functions ---

  // Render a single PatientSection component
  const renderPatientSection = useCallback(
    (tabKey, sectionKey) => {
      const sectionData = sectionsData[sectionKey];
      if (!sectionData) {
        console.error(
          `Data missing for section: ${sectionKey} in tab ${tabKey}`
        );
        return (
          <div
            key={`${tabKey}-${sectionKey}-error`}
            className="alert alert-danger small p-2 m-2"
          >
            Error: Data missing.
          </div>
        );
      }
      const sectionLevel = sectionData.level ?? 1;

      return (
        <div
          key={`${tabKey}-${sectionKey}`}
          className="Patient_Person_Add_main mb-2"
        >
          <div className="Patient_Person_main_1 position-relative border rounded p-2 pt-3 bg-white shadow-sm">
            <button
              onClick={() => removeVisibleSection(tabKey, sectionKey)}
              className="btn btn-xs btn-outline-danger position-absolute top-0 end-0 mt-1 me-1 border-0 p-0"
              style={{ zIndex: 5, lineHeight: 1 }}
              aria-label={`Remove ${sectionData.title}`}
              title={`Remove ${sectionData.title}`}
            >
              <MdClose size={18} />
            </button>
            <PatientSection
              sectionKey={sectionKey}
              sectionData={sectionData}
              level={sectionLevel}
              dropdownOpen={openInnerDropdownKey === sectionKey}
              toggleDropdown={toggleInnerDropdown} // Pass memoized toggle
              handlers={memoizedHandlers} // Pass memoized handlers object
            />
          </div>
        </div>
      );
    },
    [
      sectionsData,
      openInnerDropdownKey, // State
      removeVisibleSection,
      toggleInnerDropdown,
      memoizedHandlers, // Handlers/Memoized Objects
    ]
  );

  // Render the content area for the active tab
  const renderTabContent = useCallback(
    (tabKey) => {
      const optionsForThisTab = tabSectionOptions[tabKey] || [];
      const visibleKeysForThisTab = visibleSectionsByTab[tabKey] || [];

      // --- Navigation Logic ---
      let currentLevelOptions = optionsForThisTab;
      let currentParentItem = null;
      try {
        expandedPath.forEach((pathKey) => {
          const parent = currentLevelOptions.find(
            (item) => item.key === pathKey
          );
          if (!parent || !parent.subOptions) throw new Error("Invalid path");
          currentParentItem = parent;
          currentLevelOptions = parent.subOptions;
        });
      } catch (error) {
        console.error("Error navigating dropdown path:", expandedPath, error);
        setExpandedPath([]);
        currentLevelOptions = optionsForThisTab;
        currentParentItem = null;
      }

      // --- Filtering & Button State ---
      const allPossibleSelectableKeys =
        getAllSelectableKeysRecursive(optionsForThisTab);
      const allSectionsAdded =
        allPossibleSelectableKeys.length > 0 && // Only true if there ARE sections to add
        allPossibleSelectableKeys.every((key) =>
          visibleKeysForThisTab.includes(key)
        );
      const disableAddButton = allSectionsAdded;

      const getAvailableItemsAtCurrentLevel = (options) => {
        if (!options) return [];
        return options.filter((item) => {
          const isActualSection = !!item.key;
          const isVisible = visibleKeysForThisTab.includes(item.key);
          const hasSubOptions = item.subOptions && item.subOptions.length > 0;
          const descendantKeys = hasSubOptions
            ? getAllSelectableKeysRecursive(item.subOptions)
            : [];
          const hasAvailableDescendants = descendantKeys.some(
            (key) => !visibleKeysForThisTab.includes(key)
          );
          // Item is available if it's a section not yet visible OR it's a category with available descendants
          return (
            (isActualSection && !isVisible) ||
            (hasSubOptions && hasAvailableDescendants)
          );
        });
      };
      const availableItems =
        getAvailableItemsAtCurrentLevel(currentLevelOptions);
      const lowerSearchTerm = searchTerm.toLowerCase();
      const filteredAvailableItems = availableItems.filter(
        (item) =>
          !lowerSearchTerm || item.title.toLowerCase().includes(lowerSearchTerm)
      );
      const noSearchResults = searchTerm && filteredAvailableItems.length === 0;
      const currentLevelTitle = currentParentItem
        ? `- ${currentParentItem.title}`
        : "";

      return (
        <>
          {/* "Add Section" Dropdown Area */}
          {/* Only show Add Section if there are *any* configurable options for this tab */}
          {optionsForThisTab.length > 0 && (
            <div className="add-section-dropdown-container p-2 mb-3 border-bottom position-relative bg-light">
              <button
                className="btn btn-outline-primary btn-sm dropdown-toggle"
                type="button"
                onClick={() => toggleTabDropdown(tabKey)}
                disabled={disableAddButton}
                aria-haspopup="true"
                aria-expanded={openTabDropdownKey === tabKey}
                title={disableAddButton ? "All sections added" : "Add section"}
              >
                <FaPlus className="me-1" /> Add Details {currentLevelTitle}
              </button>

              {openTabDropdownKey === tabKey && (
                <div
                  className="dropdown-menu show position-absolute shadow-sm mt-1"
                  style={{
                    zIndex: 1050,
                    minWidth: "300px",
                    maxHeight: "60vh",
                    overflowY: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Search Input */}
                  <div className="p-2 border-bottom mb-1">
                    <div className="input-group input-group-sm">
                      <span className="input-group-text bg-light border-0">
                        <SearchIcon size={14} />
                      </span>
                      <input
                        type="search"
                        className="form-control form-control-sm border-0"
                        placeholder="Search sections..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        autoFocus
                      />
                    </div>
                  </div>
                  {/* Scrollable Item List */}
                  <div style={{ overflowY: "auto", flexGrow: 1 }}>
                    {expandedPath.length > 0 && (
                      <>
                        <button
                          className="dropdown-item small d-flex align-items-center fw-semibold text-primary"
                          onClick={handleDropdownBack}
                        >
                          <ChevronLeft size={16} className="me-1" /> Back
                        </button>
                        <div className="dropdown-divider my-1"></div>
                      </>
                    )}
                   {filteredAvailableItems.map((item) => {
                      const isActualSection = !!item.key;
                      const isVisible = visibleKeysForThisTab.includes(
                        item.key
                      );
                      const hasSubOptions =
                        item.subOptions && item.subOptions.length > 0;
                      const descendantKeys = hasSubOptions
                        ? getAllSelectableKeysRecursive(item.subOptions)
                        : [];
                      const hasAvailableDescendants = descendantKeys.some(
                        (key) => !visibleKeysForThisTab.includes(key)
                      );
                      const showArrow =
                        hasSubOptions && hasAvailableDescendants;
                      const isTitleClickable = isActualSection && !isVisible;

                      // --- MODIFICATION START ---
                      const titleStyle = {
                        flexGrow: 1,
                        padding: "0.25rem 0",
                        fontWeight: showArrow ? 'bold' : 'normal', // Bold if it has an arrow (expandable category)
                        cursor: "default", // Start with default cursor
                        color: undefined, // Start with default color (inherit)
                      };

                      if (isTitleClickable) {
                        titleStyle.cursor = "pointer"; // Make title itself clickable to add
                      } else if (!showArrow) {
                        // If not clickable AND not an expandable category (e.g., section already added, or a category with no available children)
                        titleStyle.color = "#6c757d"; // Gray out
                      }
                      // If it's showArrow but not isTitleClickable (i.e., a pure category title),
                      // fontWeight is bold, cursor is default, color is default. This is correct.
                      // --- MODIFICATION END ---

                      const arrowStyle = {
                        cursor: "pointer",
                        padding: "0.25rem 0.5rem",
                        marginLeft: "auto", // Push arrow to the right
                        flexShrink: 0, // Prevent arrow from shrinking
                      };

                      return (
                        <div
                          key={item.key || `cat-${item.title}`} // Use title as fallback key for categories without key
                          className="dropdown-item small d-flex justify-content-between align-items-center"
                          style={{ cursor: "default" }} // Prevent default dropdown item hover
                          title={
                            isActualSection && isVisible
                              ? `${item.title} (Added)`
                              : isTitleClickable
                              ? `Add ${item.title}`
                              : showArrow
                              ? `Explore ${item.title}`
                              : item.title // Default title for categories without actions
                          }
                        >
                          <span
                            onClick={
                              isTitleClickable
                                ? () => handleTitleClick(tabKey, item)
                                : undefined
                            }
                            style={titleStyle}
                          >
                            {item.title}
                          </span>
                          {showArrow && (
                            <span
                              onClick={(e) => handleArrowClick(e, tabKey, item)}
                              style={arrowStyle}
                              title={`Explore ${item.title}`}
                              className="text-muted" // Use muted color for arrow
                            >
                              <ChevronRight size={16} />
                            </span>
                          )}
                        </div>
                      );
                    })}

                    {/* Empty State Messages */}
                    {noSearchResults && (
                      <span className="dropdown-item-text small text-muted fst-italic px-3 py-2">
                        No matching sections found.
                      </span>
                    )}
                    {!noSearchResults &&
                      filteredAvailableItems.length === 0 &&
                      !disableAddButton &&
                      expandedPath.length > 0 && (
                        <span className="dropdown-item-text small text-muted fst-italic px-3 py-2">
                          No more sections here. Go 'Back'.
                        </span>
                      )}
                    {/* Message when no items left to add at top level or current sub-level */}
                    {!noSearchResults &&
                      filteredAvailableItems.length === 0 &&
                      !disableAddButton && (
                        <span className="dropdown-item-text small text-muted fst-italic px-3 py-2">
                          No available sections to add here.
                          {expandedPath.length > 0 ? " Go 'Back'." : ""}
                        </span>
                      )}
                    {disableAddButton && (
                      <span className="dropdown-item-text small text-muted fst-italic px-3 py-2">
                        All sections for this tab have been added.
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Container for Visible Sections */}
          <div className="visible-sections-container mt-2 px-2 pb-2">
            {visibleKeysForThisTab.length > 0
              ? visibleKeysForThisTab.map((sectionKey) =>
                  renderPatientSection(tabKey, sectionKey)
                )
              : optionsForThisTab.length > 0 && ( // Only show "No sections added yet" if options *exist*
                  <div className="p-4 text-muted text-center small fst-italic">
                    No sections added yet for '{tabKey.replace(/_/g, " ")}'.
                    <br /> Use "Add Section" above.
                  </div>
                )}
            {optionsForThisTab.length === 0 && ( // Show this if the tab is truly empty in config
              <div className="p-4 text-muted text-center small">
                No sections configured for '{tabKey.replace(/_/g, " ")}'.
              </div>
            )}
          </div>
        </>
      );
    },
    [
      tabSectionOptions,
      visibleSectionsByTab,
      expandedPath,
      searchTerm,
      openTabDropdownKey, // State
      getAllSelectableKeysRecursive, // Helpers
      toggleTabDropdown,
      handleTitleClick,
      handleArrowClick,
      handleDropdownBack,
      renderPatientSection, // Render func
      addSelectedSection, // Handler used by handleTitleClick
    ]
  );

  // --- Function to Generate Data Output ---
  const [outputData, setOutputData] = useState(null);
  const generateOutputData = () => {
    const result = Object.entries(sectionsData)
      .map(([key, sectionObject]) => {
        if (sectionObject.rows && sectionObject.rows.length > 0) {
          return {
            key: key,
            value: sectionObject.rows.map((row) => ({
              comment: row.location,
              priority: row.locationValue,
            })),
          };
        }
        return null;
      })
      .filter((item) => item !== null);
    setOutputData(result);
    console.log("Generated Output:", JSON.stringify(result, null, 2));
  };

  // --- Main Return Statement ---
  return (
    <div className="case-record-init container-fluid p-3 bg-light">
      <style>{customTabStyles}</style>
      {/* Breadcrumb */}
      <div className="row ">
        <div className="col-sm-12">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-white p-2 px-3 rounded shadow-sm border">
              <li className="breadcrumb-item">
                <a href="#!" className="text-decoration-none text-primary">
                  Case Record
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {/* Handle case where activeTab might be briefly null/undefined */}
                {activeTab ? activeTab.replace(/_/g, " ") : "Loading..."}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className=" shadow-sm border-0 mb-2">
        {/* Tab Headers - MODIFIED SECTION */}
        <div className="card-header p-0 border-bottom-0">
          {/* Apply styles to the container */}
          <div
            className="tabs-container-styled" // Use the new class for container styling
            ref={tabContainerRef}
          >
            {chunkedTabKeys.map((rowKeys, rowIndex) => (
              <Nav
                key={`tab-row-${rowIndex}`}
                variant="tabs"
                activeKey={activeTab}
                onSelect={handleTabSelect}
                // Apply styles to the row, remove Bootstrap border if needed via CSS
                className="custom-tabs nav-tabs-bordered tab-row px-3 justify-content-between"
              >
                {rowKeys.map((tabKey) => (
                  <Nav.Item key={tabKey}>
                    <Nav.Link
                      eventKey={tabKey}
                      // Apply custom class for hover/active effects & keep text-nowrap
                      className="text-nowrap py-2 px-3 custom-tab-link" // REMOVED the ${...} block
                      bsPrefix="nav-link" // Keep default prefix
                    >
                      {tabKey.replace(/_/g, " ")}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            ))}
          </div>
        </div>
      </div>

      <div className="p-0">
        {/* Render only the active tab's content for performance */}
        {/* THIS IS THE KEY CHECK: */}
        {activeTab && tabSectionOptions[activeTab] !== undefined && (
          <div key={`${activeTab}-content`} className="tab-pane-content">
            {/* IT ONLY CALLS renderTabContent WITH the activeTab value */}
            {renderTabContent(activeTab)}
          </div>
        )}
        {/* Optional: Placeholder for when activeTab is not yet set or invalid */}
        {!activeTab ||
          (tabSectionOptions[activeTab] === undefined && (
            <div className="p-4 text-center text-muted">
              Loading tab content...
            </div>
          ))}
      </div>

      {/* Output Data Section */}
      <div className="row mt-4">
        <div className="col-12">
          <button className="btn btn-success me-3" onClick={generateOutputData}>
            Generate Data Output
          </button>
          {outputData && (
            <div className="mt-3 p-3 bg-white border rounded shadow-sm">
              <h5>Generated Data (JSON):</h5>
              <pre
                style={{
                  maxHeight: "300px",
                  overflowY: "auto",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-all",
                  fontSize: "0.85rem", // Slightly smaller font for pre
                }}
              >
                <code>{JSON.stringify(outputData, null, 2)}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseRecordinit;
