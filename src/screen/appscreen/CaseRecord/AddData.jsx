import React, { useState } from "react";
import { MdArrowDropDown, MdMic } from "react-icons/md";
import { BiPlus } from "react-icons/bi";
import {
  FaUser,
  FaBirthdayCake,
  FaVenusMars,
  FaUserCheck,
} from "react-icons/fa";
import { BsMicFill, BsMicMute, BsPlus } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { faL } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../../../img/doctor-03.jpg";

import Accordion from "react-bootstrap/Accordion";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

const AddData = ({ patient }) => {
  const [rows, setRows] = useState([
    {
      location: "",
      locationValue: "1",
      locationChecked: false,
      sensation: "",
      sensationValue: "",
      sensationChecked: false,
      modalities: "",
      modalitiesValue: "",
      modalitiesChecked: false,
      concomitant: "",
      concomitantValue: "",
      concomitantChecked: false,
      selectedOptions: [],
    },
  ]);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const [language, setLanguage] = useState("en");
  const [isRecording, setIsRecording] = useState(false);
  const [selectedoptionvalue, setselectedoptionvalue] = useState(false);
  const [selectedtype, setselectedtype] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]); // Keep track of selected options *per row*
  const itemsPerPage = 20;
  const [showOptions, setShowOptions] = useState(true);
  const [focusedIndex, setFocusedIndex] = useState(null);

  // Hierarchical Options Data Structure (CRUCIAL)
  const allOptions = {
    level1: [
      { id: "L1O1", name: "History" },
      { id: "L1O2", name: "Attributes" },
      { id: "L1O3", name: "Expression" },
      { id: "L1O4", name: "Key Event" },
    ],
    level2: {
      L1O1: [
        // Options for Level 1 Option 1 (History)
        { id: "L2O1-1", name: "Past History" },
        { id: "L2O1-2", name: "Family History" },
      ],
      L1O2: [
        // Options for Level 1 Option 2 (Attributes)
        { id: "L2O2-1", name: "Mental" },
        { id: "L2O2-2", name: "Physical" },
      ],
      L1O3: [
        // Options for Level 1 Option 3 (Expression) -  Keep consistent structure
        { id: "L2O3-1", name: "Location" },
        { id: "L2O3-2", name: "Sensation" },
        { id: "L2O3-3", name: "Pathology" },
        { id: "L2O3-4", name: "Sign" },
        { id: "L2O3-5", name: "Modality" },
      ],
      L1O4: [
        // Options for Level 1 Option 4 (Key Event) - Keep consistent
        { id: "L2O4-1", name: "No" },
        { id: "L2O4-2", name: "Keyword" },
      ],
    },
    level3: {
      "L2O1-1": [
        // Past History
        { id: "L3O1-1-1", name: "Psora" },
        { id: "L3O1-1-2", name: "Sycotic" },
        { id: "L3O1-1-3", name: "Tubercular" },
        { id: "L3O1-1-4", name: "Syphilis" },
        { id: "L3O1-1-5", name: "None" },
      ],
      "L2O1-2": [
        // Family History
        { id: "L3O1-2-1", name: "Psora" },
        { id: "L3O1-2-2", name: "Sycotic" },
        { id: "L3O1-2-3", name: "Tubercular" },
        { id: "L3O1-2-4", name: "Syphilis" },
        { id: "L3O1-2-5", name: "None" },
      ],
      "L2O2-1": [
        // Mental
        { id: "L3O2-1-1", name: "Emotional" },
        { id: "L3O2-1-2", name: "Intellectual" },
        { id: "L3O2-1-3", name: "Action Behavior" },
        { id: "L3O2-1-4", name: "Subconscious" },
      ],
      "L2O2-2": [
        // Physical
        { id: "L3O2-2-1", name: "Cravings" },
        { id: "L3O2-2-2", name: "Aversion" },
        { id: "L3O2-2-3", name: "Constitution" },
        { id: "L3O2-2-4", name: "Sexual General" },
        { id: "L3O2-2-5", name: "Sleep" },
        { id: "L3O2-2-6", name: "Discharges" },
        { id: "L3O2-2-7", name: "Thermal Reaction" },
        { id: "L3O2-2-8", name: "None" },
      ],
      "L2O3-1": [
        // Level 3 for L2O3-1 (Location)
        { id: "L3O3-1-1", name: "Mental" },
        { id: "L3O3-1-2", name: "Physical" },
      ],
      "L2O3-2": [
        // Level 3 for L2O3-2 (Sensation)
        { id: "L3O3-2-1", name: "Mental" },
        { id: "L3O3-2-2", name: "Physical" },
      ],
      "L2O3-3": [
        // Level 3 for L2O3-3 (Pathology)
        { id: "L3O3-3-1", name: "Mental" },
        { id: "L3O3-3-2", name: "Physical" },
      ],
      "L2O3-4": [
        // Level 3 for L2O3-4 (Sign)
        { id: "L3O3-4-1", name: "Mental" },
        { id: "L3O3-4-2", name: "Physical" },
      ],
      "L2O3-5": [
        // Level 3 for L2O3-5 (Modality)
        { id: "L3O3-5-1", name: "Cause" },
        { id: "L3O3-5-2", name: "Aggravation" },
        { id: "L3O3-5-3", name: "Amelioration" },
      ],
      "L2O4-1": [
        // Level 3 for L2O4-1 (no)
        { id: "L3O4-1-1", name: "Save" },
      ],
      "L2O4-2": [
        // Level 3 for L2O4-2 (keyword)
        { id: "L3O4-2-1", name: "Save" },
      ],
    },
    level4: {
      // ONLY for Expression items
      "L3O2-1-1": [
        // Mental (under Emotional)
        { id: "L4O2-1-2-1", name: "Key Note" },
        { id: "L4O2-1-2-2", name: "Qualitiect Mental" },
        { id: "L4O2-1-2-3", name: "Eleminating" },
        { id: "L4O2-1-2-4", name: "Complate" },
        { id: "L4O2-1-2-5", name: "None" },
      ],
      "L3O2-1-2": [
        // Mental (under Intellectual)
        { id: "L4O2-1-2-1", name: "Key Note" },
        { id: "L4O2-1-2-2", name: "Qualitiect Mental" },
        { id: "L4O2-1-2-3", name: "Eleminating" },
        { id: "L4O2-1-2-4", name: "Complate" },
        { id: "L4O2-1-2-5", name: "None" },
      ],
      "L3O2-1-3": [
        // Mental (under Action Behavior)
        { id: "L4O2-1-2-1", name: "Key Note" },
        { id: "L4O2-1-2-2", name: "Qualitiect Mental" },
        { id: "L4O2-1-2-3", name: "Eleminating" },
        { id: "L4O2-1-2-4", name: "Complate" },
        { id: "L4O2-1-2-5", name: "None" },
      ],
      "L3O2-1-4": [
        // Mental (under Subconscious)
        { id: "L4O2-1-2-1", name: "Key Note" },
        { id: "L4O2-1-2-2", name: "Qualitiect Mental" },
        { id: "L4O2-1-2-3", name: "Eleminating" },
        { id: "L4O2-1-2-4", name: "Complate" },
        { id: "L4O2-1-2-5", name: "None" },
      ],
      "L3O2-2-1": [
        // Mental (under Crewing)
        { id: "L4O2-1-2-1", name: "Key Note" },
        { id: "L4O2-1-2-2", name: "Qualitiect Mental" },
        { id: "L4O2-1-2-3", name: "Eleminating" },
        { id: "L4O2-1-2-4", name: "Complate" },
        { id: "L4O2-1-2-5", name: "None" },
      ],
      "L3O2-2-2": [
        // Mental (under Crewing)
        { id: "L4O2-1-2-1", name: "Key Note" },
        { id: "L4O2-1-2-2", name: "Qualitiect Mental" },
        { id: "L4O2-1-2-3", name: "Eleminating" },
        { id: "L4O2-1-2-4", name: "Complate" },
        { id: "L4O2-1-2-5", name: "None" },
      ],
      "L3O2-2-3": [
        // Mental (under Crewing)
        { id: "L4O2-1-2-1", name: "Key Note" },
        { id: "L4O2-1-2-2", name: "Qualitiect Mental" },
        { id: "L4O2-1-2-3", name: "Eleminating" },
        { id: "L4O2-1-2-4", name: "Complate" },
        { id: "L4O2-1-2-5", name: "None" },
      ],
      "L3O2-2-4": [
        // Mental (under Crewing)
        { id: "L4O2-1-2-1", name: "Key Note" },
        { id: "L4O2-1-2-2", name: "Qualitiect Mental" },
        { id: "L4O2-1-2-3", name: "Eleminating" },
        { id: "L4O2-1-2-4", name: "Complate" },
        { id: "L4O2-1-2-5", name: "None" },
      ],
      "L3O2-2-5": [
        // Mental (under Crewing)
        { id: "L4O2-1-2-1", name: "Key Note" },
        { id: "L4O2-1-2-2", name: "Qualitiect Mental" },
        { id: "L4O2-1-2-3", name: "Eleminating" },
        { id: "L4O2-1-2-4", name: "Complate" },
        { id: "L4O2-1-2-5", name: "None" },
      ],
      "L3O2-2-6": [
        // Mental (under Crewing)
        { id: "L4O2-1-2-1", name: "Key Note" },
        { id: "L4O2-1-2-2", name: "Qualitiect Mental" },
        { id: "L4O2-1-2-3", name: "Eleminating" },
        { id: "L4O2-1-2-4", name: "Complate" },
        { id: "L4O2-1-2-5", name: "None" },
      ],
      "L3O2-2-7": [
        // Mental (under Crewing)
        { id: "L4O2-1-2-1", name: "Key Note" },
        { id: "L4O2-1-2-2", name: "Qualitiect Mental" },
        { id: "L4O2-1-2-3", name: "Eleminating" },
        { id: "L4O2-1-2-4", name: "Complate" },
        { id: "L4O2-1-2-5", name: "None" },
      ],
      "L3O3-1-1": [
        // Mental (under Location)
        { id: "L4O3-1-1-1", name: "Emotional" },
        { id: "L4O3-1-1-2", name: "Iulelleclual" },
        { id: "L4O3-1-1-3", name: "Action/Beheviour" },
        { id: "L4O3-1-1-4", name: "Subcovscious" },
      ],
      "L3O3-1-2": [
        // Physical (under Location)
        { id: "L4O3-1-2-1", name: "General" },
        { id: "L4O3-1-2-2", name: "Perticalur" },
      ],
      "L3O3-2-1": [
        // Mental (under Sensation)
        { id: "L4O3-2-1-1", name: "Emotional" },
        { id: "L4O3-2-1-2", name: "Iulelleclual" },
        { id: "L4O3-2-1-3", name: "Action/Beheviour" },
        { id: "L4O3-2-1-4", name: "Subcovscious" },
      ],
      "L3O3-2-2": [
        // Physical (under Sensation)
        { id: "L4O3-2-2-1", name: "General" },
        { id: "L4O3-2-2-2", name: "Perticalur" },
      ],
      "L3O3-3-1": [
        // Mental (under Pathology)
        { id: "L4O3-3-1-1", name: "Emotional" },
        { id: "L4O3-3-1-2", name: "Iulelleclual" },
        { id: "L4O3-3-1-3", name: "Action/Beheviour" },
        { id: "L4O3-3-1-4", name: "Subcovscious" },
      ],
      "L3O3-3-2": [
        // Physical (under Pathology)
        { id: "L4O3-3-2-1", name: "General" },
        { id: "L4O3-3-2-2", name: "Perticalur" },
      ],
      "L3O3-4-1": [
        // Mental (under Sign)
        { id: "L4O3-4-1-1", name: "Emotional" },
        { id: "L4O3-4-1-2", name: "Iulelleclual" },
        { id: "L4O3-4-1-3", name: "Action/Beheviour" },
        { id: "L4O3-4-1-4", name: "Subcovscious" },
      ],
      "L3O3-4-2": [
        // Physical (under Sign)
        { id: "L4O3-4-2-1", name: "General" },
        { id: "L4O3-4-2-2", name: "Perticalur" },
      ],
      "L3O3-5-1": [
        // Cause (under Modality)
        { id: "L4O3-5-1-1", name: "Mantal" },
        { id: "L4O3-5-1-2", name: "Physical" },
      ],
      "L3O3-5-2": [
        // Aggravation (under Modality)
        { id: "L4O3-5-2-1", name: "Mantal" },
        { id: "L4O3-5-2-2", name: "Physical" },
      ],
      "L3O3-5-3": [
        // Amelioration (under Modality)
        { id: "L4O3-5-3-1", name: "Mantal" },
        { id: "L4O3-5-3-2", name: "Physical" },
      ],
    },
    level5: {
      "L4O2-1-2-1": [
        { id: "L5O3-1-1-1-1", name: "Psora" },
        { id: "L5O3-1-1-1-2", name: "Sycotic" },
        { id: "L5O3-1-1-1-3", name: "Tubercular" },
        { id: "L5O3-1-1-1-4", name: "Syphilis" },
        { id: "L5O3-1-1-1-5", name: "None" },
      ],
      "L4O2-1-2-2": [
        { id: "L5O3-1-1-1-1", name: "Psora" },
        { id: "L5O3-1-1-1-2", name: "Sycotic" },
        { id: "L5O3-1-1-1-3", name: "Tubercular" },
        { id: "L5O3-1-1-1-4", name: "Syphilis" },
        { id: "L5O3-1-1-1-5", name: "None" },
      ],
      "L4O2-1-2-3": [
        { id: "L5O3-1-1-1-1", name: "Psora" },
        { id: "L5O3-1-1-1-2", name: "Sycotic" },
        { id: "L5O3-1-1-1-3", name: "Tubercular" },
        { id: "L5O3-1-1-1-4", name: "Syphilis" },
        { id: "L5O3-1-1-1-5", name: "None" },
      ],
      "L4O2-1-2-4": [
        { id: "L5O3-1-1-1-1", name: "Psora" },
        { id: "L5O3-1-1-1-2", name: "Sycotic" },
        { id: "L5O3-1-1-1-3", name: "Tubercular" },
        { id: "L5O3-1-1-1-4", name: "Syphilis" },
        { id: "L5O3-1-1-1-5", name: "None" },
      ],
      "L4O2-1-2-5": [
        { id: "L5O3-1-1-1-1", name: "Psora" },
        { id: "L5O3-1-1-1-2", name: "Sycotic" },
        { id: "L5O3-1-1-1-3", name: "Tubercular" },
        { id: "L5O3-1-1-1-4", name: "Syphilis" },
        { id: "L5O3-1-1-1-5", name: "None" },
      ],

      "L4O3-1-1-1": [
        { id: "L5O3-1-1-1-1", name: "Common" },
        { id: "L5O3-1-1-1-2", name: "Cherecteristics" },
      ],
      "L4O3-1-2-1": [
        { id: "L5O3-1-2-1-1", name: "Common" },
        { id: "L5O3-1-2-1-2", name: "Cherecteristics" },
      ],
      "L4O3-2-1-1": [
        { id: "L5O3-2-1-1-1", name: "Common" },
        { id: "L5O3-2-1-1-2", name: "Cherecteristics" },
      ],
      "L4O3-2-2-1": [
        { id: "L5O3-2-2-1-1", name: "Common" },
        { id: "L5O3-2-2-1-2", name: "Cherecteristics" },
      ],
      "L4O3-3-1-1": [
        { id: "L5O3-3-1-1-1", name: "Common" },
        { id: "L5O3-3-1-1-2", name: "Cherecteristics" },
      ],
      "L4O3-3-2-1": [
        { id: "L5O3-3-2-1-1", name: "Common" },
        { id: "L5O3-3-2-1-2", name: "Cherecteristics" },
      ],
      "L4O3-4-1-1": [
        { id: "L5O3-4-1-1-1", name: "Common" },
        { id: "L5O3-4-1-1-2", name: "Cherecteristics" },
      ],
      "L4O3-4-2-1": [
        { id: "L5O3-4-2-1-1", name: "Common" },
        { id: "L5O3-4-2-1-2", name: "Cherecteristics" },
      ],
      "L4O3-5-1-1": [
        { id: "L5O3-5-1-1-1", name: "Common" },
        { id: "L5O3-5-1-1-2", name: "Cherecteristics" },
      ],
      "L4O3-5-2-1": [
        { id: "L5O3-5-2-1-1", name: "Common" },
        { id: "L5O3-5-2-1-2", name: "Cherecteristics" },
      ],
      "L4O3-5-3-1": [
        { id: "L5O3-5-3-1-1", name: "Common" },
        { id: "L5O3-5-3-1-2", name: "Cherecteristics" },
      ],
      "L4O3-5-1-2": [
        { id: "L5O3-1-1-1-1", name: "Common" },
        { id: "L5O3-1-1-1-2", name: "Cherecteristics" },
      ],
      "L4O3-5-2-2": [
        { id: "L5O3-1-1-1-1", name: "Common" },
        { id: "L5O3-1-1-1-2", name: "Cherecteristics" },
      ],
      "L4O3-5-3-2": [
        { id: "L5O3-1-1-1-1", name: "Common" },
        { id: "L5O3-1-1-1-2", name: "Cherecteristics" },
      ],
    },
    level6: {
      "L5O3-1-1-1-1": [
        { id: "L6O3-1-1-1-1-1", name: "Diagnostic" },
        { id: "L6O3-1-1-1-1-2", name: "Non - Diagnostic" },
      ],
      "L5O3-1-1-1-2": [
        { id: "L6O3-1-1-1-1-1", name: "Diagnostic" },
        { id: "L6O3-1-1-1-1-2", name: "Non - Diagnostic" },
      ],
      "L5O3-1-2-1-1": [
        { id: "L6O3-1-2-1-1-1", name: "Option L6-Physical-Loc" },
      ],
      "L5O3-2-1-1-1": [{ id: "L6O3-2-1-1-1-1", name: "Option L6-Mental-Sen" }],
      "L5O3-2-2-1-1": [
        { id: "L6O3-2-2-1-1-1", name: "Option L6-Physical-Sen" },
      ],
      "L5O3-3-1-1-1": [{ id: "L6O3-3-1-1-1-1", name: "Option L6-Mental-Path" }],
      "L5O3-3-2-1-1": [
        { id: "L6O3-3-2-1-1-1", name: "Option L6-Physical-Path" },
      ],
      "L5O3-4-1-1-1": [{ id: "L6O3-4-1-1-1-1", name: "Option L6-Mental-Sign" }],
      "L5O3-4-2-1-1": [
        { id: "L6O3-4-2-1-1-1", name: "Option L6-Physical-Sign" },
      ],
      "L5O3-5-1-1-1": [{ id: "L6O3-5-1-1-1-1", name: "Option L6-Cause-mod" }],
      "L5O3-5-2-1-1": [
        { id: "L6O3-5-2-1-1-1", name: "Option L6-Aggravation-Mod" },
      ],
      "L5O3-5-3-1-1": [
        { id: "L6O3-5-3-1-1-1", name: "Option L6-Amelioration-Mod" },
      ],
    },
  };

  const [currentLevel, setCurrentLevel] = useState("level1"); // Track current level
  const [parentOptionId, setParentOptionId] = useState(null); // Track parent option

  const getCurrentOptions = () => {
    if (currentLevel === "level1") {
      return allOptions.level1.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      );
    } else if (currentLevel === "level2" && parentOptionId) {
      return allOptions.level2[parentOptionId].slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      );
    } else if (currentLevel === "level3" && parentOptionId) {
      if (allOptions.level3.hasOwnProperty(parentOptionId)) {
        return allOptions.level3[parentOptionId].slice(
          currentPage * itemsPerPage,
          (currentPage + 1) * itemsPerPage
        );
      } else {
        console.error("Invalid parentOptionId for level3:", parentOptionId);
        return [];
      }
    } else if (currentLevel === "level4" && parentOptionId) {
      // Add level 4
      if (allOptions.level4.hasOwnProperty(parentOptionId)) {
        return allOptions.level4[parentOptionId].slice(
          currentPage * itemsPerPage,
          (currentPage + 1) * itemsPerPage
        );
      } else {
        console.error("Invalid parentOptionId for level4:", parentOptionId);
        return [];
      }
    } else if (currentLevel === "level5" && parentOptionId) {
      // Add level 5
      if (allOptions.level5.hasOwnProperty(parentOptionId)) {
        return allOptions.level5[parentOptionId].slice(
          currentPage * itemsPerPage,
          (currentPage + 1) * itemsPerPage
        );
      } else {
        console.error("Invalid parentOptionId for level5:", parentOptionId);
        return [];
      }
    } else if (currentLevel === "level6" && parentOptionId) {
      // Add level 6
      if (allOptions.level6.hasOwnProperty(parentOptionId)) {
        return allOptions.level6[parentOptionId].slice(
          currentPage * itemsPerPage,
          (currentPage + 1) * itemsPerPage
        );
      } else {
        console.error("Invalid parentOptionId for level6:", parentOptionId);
        return [];
      }
    }
    return [];
  };

  const handleOptionSelect = (option, rowIndex) => {
    setSelectedOptions((prev) => {
      const newOptions = [...prev];
      if (!newOptions[rowIndex]) {
        newOptions[rowIndex] = [];
      }
      if (newOptions[rowIndex].includes(option.name)) {
        newOptions[rowIndex] = newOptions[rowIndex].filter(
          (o) => o !== option.name
        );
      } else {
        newOptions[rowIndex].push(option.name);
      }
      return newOptions;
    });

    if (currentLevel === "level1") {
      setCurrentLevel("level2");
      setParentOptionId(option.id);
      setCurrentPage(0);
    } else if (currentLevel === "level2") {
      setCurrentLevel("level3");
      setParentOptionId(option.id);
      setCurrentPage(0);
    } else if (currentLevel === "level3") {
      setCurrentLevel("level4"); // Go to level 4
      setParentOptionId(option.id);
      setCurrentPage(0);
    } else if (currentLevel === "level4") {
      setCurrentLevel("level5"); // Go to level 5
      setParentOptionId(option.id);
      setCurrentPage(0);
    } else if (currentLevel === "level5") {
      setCurrentLevel("level6"); // Go to level 6
      setParentOptionId(option.id);
      setCurrentPage(0);
    } else if (currentLevel === "level6") {
      setIsModalVisible(false); // Close on level 6
    }
  };

  const handleBack = () => {
    if (currentLevel === "level6") {
      // Add level 6
      setCurrentLevel("level5");
      setCurrentPage(0);
    } else if (currentLevel === "level5") {
      // Add level 5
      setCurrentLevel("level4");
      setCurrentPage(0);
    } else if (currentLevel === "level4") {
      // Add level 4
      setCurrentLevel("level3");
      setCurrentPage(0);
    } else if (currentLevel === "level3") {
      setCurrentLevel("level2");
      setCurrentPage(0);
    } else if (currentLevel === "level2") {
      setCurrentLevel("level1");
      setParentOptionId(null);
      setCurrentPage(0);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleDropdown = (index, section) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [index]: prevState[index] === section ? null : section,
    }));
  };
  const handleDropdownSelect = (index, key, value) => {
    setRows(
      rows.map((row, i) => (i === index ? { ...row, [key]: value } : row))
    );
    setDropdownOpen((prevState) => ({ ...prevState, [index]: null }));
  };

  const addRow = () => {
    setRows([
      ...rows,
      {
        location: "",
        sensation: "",
        modalities: "",
        concomitant: "",
        locationValue: "",
        sensationValue: "",
        modalitiesValue: "",
        concomitantValue: "",
        locationChecked: false,
        sensationChecked: false,
        modalitiesChecked: false,
        concomitantChecked: false,
        selectedOptions: [],
      },
    ]);
    setSelectedOptions((prev) => [...prev, []]); // Initialize for new row
  };

  const startListening = (inputField, index) => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = language;
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setRows(
          rows.map((row, i) =>
            i === index ? { ...row, [inputField]: transcript } : row
          )
        );
      };

      recognition.start();
    } else {
      alert("Speech Recognition API is not supported in this browser.");
    }
  };

  const handleCheckboxChange = (index, key) => {
    setRows(
      rows.map((row, i) => (i === index ? { ...row, [key]: !row[key] } : row))
    );
  };

  const navigate = useNavigate();

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const handleKeyPress = (event, index) => {
    if (event.key === "Enter") {
      setFocusedIndex(index);
      setModalContent(
        `Location: ${rows[index].location}, Sensation: ${rows[index].sensation}, Modalities: ${rows[index].modalities}, Concomitant: ${rows[index].concomitant}`
      );
      setShowOptions(true);
      setIsModalVisible(true);

      // Reset hierarchical state when opening the modal
      setCurrentLevel("level1");
      setParentOptionId(null);
      setCurrentPage(0);
    }
  };

  return (
    <div>
      <div class="row">
        <div class="col-sm-7 col-6">
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <div href="chief_complaint.html">Add Data </div>
            </li>
            <li class="breadcrumb-item">
              <i class="feather-chevron-right"></i>
            </li>
            <li class="breadcrumb-item active">Add Data</li>
          </ul>
        </div>
        <div class="col-sm-5 col-6 text-end m-b-30">
          <div
            className={`btn btn-${
              isRecording ? "danger" : "primary-StartRecording"
            } `}
            onClick={addRow}
          >
            <BsPlus size={30} style={{ marginHorizontal: 10 }} />
            Add Row
          </div>
        </div>
      </div>

      <div className=" mt-2  mb-5">
        {rows.map((row, index) => (
          <form key={index} className="form-group card p-3 mb-3">
            <div className="row">
              {/* Location Section */}
              <div className="col-md-12">
                <div className="d-flex align-items-center mb-2">
                  <div className="flex-grow-1 position-relative">
                    <input
                      type="text"
                      className="form-control"
                      value={row.location}
                      onChange={(e) =>
                        setRows(
                          rows.map((r, i) =>
                            i === index ? { ...r, location: e.target.value } : r
                          )
                        )
                      }
                      onKeyDown={(e) => {
                        handleKeyPress(e, index);
                        setCurrentPage(0);
                        setselectedoptionvalue(row.location);
                        setselectedtype("location");
                      }}
                      placeholder="Enter Location"
                    />
                    <button
                      type="button"
                      className="btn position-absolute top-50 me-3 end-0 translate-middle-y p-0 border-0"
                      onClick={() => toggleDropdown(index, "location")}
                      aria-label="Dropdown"
                    >
                      {row.locationValue || <MdArrowDropDown size={24} />}
                    </button>
                    {dropdownOpen[index] === "location" && (
                      <div className="custom-dropdown-menu position-absolute end-0 mt-2">
                        <button
                          className="custom-dropdown-item"
                          onClick={() =>
                            handleDropdownSelect(index, "locationValue", "High")
                          }
                        >
                          High
                        </button>
                        <button
                          className="custom-dropdown-item"
                          onClick={() =>
                            handleDropdownSelect(
                              index,
                              "locationValue",
                              "Medium"
                            )
                          }
                        >
                          Medium
                        </button>
                        <button
                          className="custom-dropdown-item"
                          onClick={() =>
                            handleDropdownSelect(index, "locationValue", "Low")
                          }
                        >
                          Low
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Sensation Section */}
              <div className="col-md-6 d-none">
                <div className="d-flex align-items-center mb-2">
                  <div className="form-check me-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={row.sensationChecked}
                      onChange={() =>
                        handleCheckboxChange(index, "sensationChecked")
                      }
                      id={`sensation-check-${index}`}
                    />
                  </div>
                  <div className="flex-grow-1 position-relative">
                    <input
                      type="text"
                      className="form-control"
                      value={row.sensation}
                      onChange={(e) =>
                        setRows(
                          rows.map((r, i) =>
                            i === index
                              ? { ...r, sensation: e.target.value }
                              : r
                          )
                        )
                      }
                      onKeyDown={(e) => {
                        handleKeyPress(e, index);

                        setCurrentPage(0);
                        setselectedoptionvalue(row.sensation);
                        setselectedtype("Sensation & Pathology");
                      }}
                      placeholder="Enter Sensation & Pathology"
                    />
                    <button
                      type="button"
                      className="btn position-absolute top-50 me-3 end-0 translate-middle-y p-0 border-0"
                      onClick={() => toggleDropdown(index, "sensation")}
                      aria-label="Dropdown"
                    >
                      {row.sensationValue || <MdArrowDropDown size={24} />}
                    </button>
                    {dropdownOpen[index] === "sensation" && (
                      <div className="custom-dropdown-menu position-absolute end-0 mt-2">
                        <button
                          className="custom-dropdown-item"
                          onClick={() =>
                            handleDropdownSelect(index, "locationValue", "High")
                          }
                        >
                          High
                        </button>
                        <button
                          className="custom-dropdown-item"
                          onClick={() =>
                            handleDropdownSelect(
                              index,
                              "locationValue",
                              "Medium"
                            )
                          }
                        >
                          Medium
                        </button>
                        <button
                          className="custom-dropdown-item"
                          onClick={() =>
                            handleDropdownSelect(index, "locationValue", "Low")
                          }
                        >
                          Low
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Modalities Section */}
              <div className="col-md-6 d-none">
                <div className="d-flex align-items-center mb-2">
                  <div className="form-check me-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={row.modalitiesChecked}
                      onChange={() =>
                        handleCheckboxChange(index, "modalitiesChecked")
                      }
                      id={`modalities-check-${index}`}
                    />
                  </div>
                  <div className="flex-grow-1 position-relative">
                    <input
                      type="text"
                      className="form-control"
                      value={row.modalities}
                      onChange={(e) =>
                        setRows(
                          rows.map((r, i) =>
                            i === index
                              ? { ...r, modalities: e.target.value }
                              : r
                          )
                        )
                      }
                      onKeyDown={(e) => {
                        handleKeyPress(e, index);
                        setCurrentPage(0);
                        setselectedoptionvalue(row.modalities);
                        setselectedtype("Modalities AF");
                      }}
                      placeholder="Enter Modalities AF"
                    />
                    <button
                      type="button"
                      className="btn position-absolute top-50 me-3 end-0 translate-middle-y p-0 border-0"
                      onClick={() => toggleDropdown(index, "modalities")}
                      aria-label="Dropdown"
                    >
                      {row.modalitiesValue || <MdArrowDropDown size={24} />}
                    </button>
                    {dropdownOpen[index] === "modalities" && (
                      <div className="custom-dropdown-menu position-absolute end-0 mt-2">
                        <button
                          className="custom-dropdown-item"
                          onClick={() =>
                            handleDropdownSelect(index, "locationValue", "High")
                          }
                        >
                          High
                        </button>
                        <button
                          className="custom-dropdown-item"
                          onClick={() =>
                            handleDropdownSelect(
                              index,
                              "locationValue",
                              "Medium"
                            )
                          }
                        >
                          Medium
                        </button>
                        <button
                          className="custom-dropdown-item"
                          onClick={() =>
                            handleDropdownSelect(index, "locationValue", "Low")
                          }
                        >
                          Low
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* Concomitant Section */}
              <div className="col-md-6 d-none">
                <div className="d-flex align-items-center mb-2">
                  <div className="form-check me-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={row.concomitantChecked}
                      onChange={() =>
                        handleCheckboxChange(index, "concomitantChecked")
                      }
                      id={`concomitant-check-${index}`}
                    />
                  </div>
                  <div className="flex-grow-1 position-relative">
                    <input
                      type="text"
                      className="form-control"
                      value={row.concomitant}
                      onChange={(e) =>
                        setRows(
                          rows.map((r, i) =>
                            i === index
                              ? { ...r, concomitant: e.target.value }
                              : r
                          )
                        )
                      }
                      onKeyDown={(e) => {
                        handleKeyPress(e, index);
                        setCurrentPage(0);
                        setselectedoptionvalue(row.concomitant);
                        setselectedtype("Concomitant");
                      }}
                      placeholder="Enter Concomitant"
                    />
                    <button
                      type="button"
                      className="btn position-absolute top-50 me-3 end-0 translate-middle-y p-0 border-0"
                      onClick={() => toggleDropdown(index, "concomitant")}
                      aria-label="Dropdown"
                    >
                      {row.concomitantValue || <MdArrowDropDown size={24} />}
                    </button>
                    {dropdownOpen[index] === "concomitant" && (
                      <div className="custom-dropdown-menu position-absolute end-0 mt-2">
                        <button
                          className="custom-dropdown-item"
                          onClick={() =>
                            handleDropdownSelect(index, "locationValue", "High")
                          }
                        >
                          High
                        </button>
                        <button
                          className="custom-dropdown-item"
                          onClick={() =>
                            handleDropdownSelect(
                              index,
                              "locationValue",
                              "Medium"
                            )
                          }
                        >
                          Medium
                        </button>
                        <button
                          className="custom-dropdown-item"
                          onClick={() =>
                            handleDropdownSelect(index, "locationValue", "Low")
                          }
                        >
                          Low
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Display Selected Options */}
          </form>
        ))}
      </div>

      {isModalVisible && (
        <div
          className="modal-backdrop modal fade show align-items-center justify-content-center"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-scrollable" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title Modal_main__Title">
                  {selectedtype} - {selectedoptionvalue}
                </h5>
                {/* <button
                      type="button"
                      className="close"
                      onClick={() => setIsModalVisible(false)}
                    >
                      <span>×</span>
                    </button> */}

                <button
                  type="button"
                  class="btn-close"
                  onClick={() => setIsModalVisible(false)}
                  style={{ backgroundColor: "white" }}
                ></button>
              </div>
              <div className="modal-body ">
                {selectedOptions[focusedIndex] &&
                  selectedOptions[focusedIndex].length > 0 && (
                    <div>
                      <p
                        style={{
                          padding: "5px",
                          color: "black",
                          fontWeight: "bold",
                          textAlign: "center",
                          borderRadius: "10px",
                        }}
                      >
                        Selected Options
                      </p>
                      <ul className="Optionitemlist">
                        {selectedOptions[focusedIndex].map((option, idx) => (
                          <li className="selectedOptionsList" key={idx}>
                            {option}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                <ul className="list-group custom-list ">
                  {getCurrentOptions().map((option, index) => (
                    <li
                      key={option.id} // Use option.id as key
                      className="list-group-item d-flex align-items-center justify-content-between"
                      onClick={() => handleOptionSelect(option, focusedIndex)} // Pass focusedIndex
                      style={{ cursor: "pointer" }}
                    >
                      <p className="mb-0">{option.name}</p>{" "}
                      {/*Display option.name*/}
                      <input
                        type="checkbox"
                        checked={selectedOptions[focusedIndex]?.includes(
                          option.name
                        )} // Check against option.name
                        onChange={() =>
                          handleOptionSelect(option, focusedIndex)
                        }
                        onClick={(e) => e.stopPropagation()}
                        className="form-check-input me-2"
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer">
                {currentLevel !== "level1" && (
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                )}
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handlePrevious}
                  disabled={currentPage === 0}
                >
                  Previous
                </button>

                {currentLevel === "level3" ? (
                  <button
                    type="button"
                    onClick={() => setIsModalVisible(false)}
                    style={{
                      backgroundColor: "#009efb",
                      padding: "10px",
                      borderRadius: "10px",
                      color: "white",
                      fontWeight: "normal",
                      borderColor: "#009efb",
                    }}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary"
                    // onClick={handleNext}
                    disabled={
                      (currentPage + 1) * itemsPerPage >=
                      getCurrentOptions().length
                    }
                  >
                    Next
                  </button>
                )}
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsModalVisible(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddData;
