import React, { useState } from "react";
// import axios from "axios"; // Not used in the provided snippet
import { MdArrowDropDown } from "react-icons/md"; // MdMic removed as not used
import { BiPlus } from "react-icons/bi";
import { BsExclamationTriangleFill } from "react-icons/bs";
// FaUser, FaBirthdayCake, FaVenusMars, FaUserCheck removed as not used
import { BsMicFill, BsMicMute, BsPlus, BsTrash } from "react-icons/bs"; // BsMicFill, BsMicMute not used
// import { Link, useNavigate } from "react-router-dom"; // Not used
// import { faL } from "@fortawesome/free-solid-svg-icons"; // Not used
// import Avatar from "../../../img/doctor-03.jpg"; // Not used
// import Accordion from "react-bootstrap/Accordion"; // Not used
// import Col from "react-bootstrap/Col"; // Not used
// import Nav from "react-bootstrap/Nav"; // Not used
// import Row from "react-bootstrap/Row"; // Not used
// import Tab from "react-bootstrap/Tab"; // Not used

const Chiefcomplaintstart = ({ patient }) => {
  const [rows, setRows] = useState([
    {
      location: "",
      locationValue: "",
      locationChecked: false, // This state is not used in UI, consider removing if not planned
      sensation: "",
      sensationValue: "",
      sensationChecked: false, // Not used
      modalities: "",
      modalitiesValue: "",
      modalitiesChecked: false, // Not used
      concomitant: "",
      concomitantValue: "",
      concomitantChecked: false, // Not used
      selectedOptions: [], // For the modal, seems okay
    },
  ]);

  const locationSuggestions = [
    { id: 0, name: "Onset" },
    { id: 0, name: "Duration" },
    { id: 0, name: "Frequency" },
    { id: 0, name: "Progress" },
    { id: 0, name: "Tissues" },
    { id: 0, name: "Organs" },
    { id: 0, name: "System" },
    { id: 0, name: "Extension" },
    { id: 0, name: "Spread" },
    { id: 1, name: "Nervous System" },
    { id: 1, name: "CNS" },
    { id: 1, name: "PNS" },
    { id: 1, name: "ANS" },
    { id: 1, name: "Tissue" },
    { id: 2, name: "Gastrointestinal Tract" },
    { id: 2, name: "Mouth" },
    { id: 2, name: "Pharynx" },
    { id: 2, name: "Larynx" },
    { id: 2, name: "Esophagus" },
    { id: 2, name: "Stomach" },
    { id: 2, name: "Duodenum" },
    { id: 2, name: "Pancreas" },
    { id: 2, name: "Small Intestine" },
    { id: 2, name: "Large Intestine" },
    { id: 2, name: "Anus" },
    { id: 2, name: "Rectum" },
    { id: 3, name: "Cardiovascular System" },
    { id: 3, name: "Tissues" },
    { id: 3, name: "Organs" },
    { id: 3, name: "System" },
    { id: 3, name: "Extension" },
    { id: 3, name: "Spread" },
    { id: 4, name: "Respiratory System" },
    { id: 4, name: "URT" }, // Upper Respiratory Tract
    { id: 4, name: "LRT" }, // Lower Respiratory Tract
    { id: 5, name: "Endocrine System" },
    { id: 6, name: "Skin" },
    { id: 7, name: "Muscular System" },
    { id: 7, name: "Muscles" },
    { id: 8, name: "Skeletal System" },
    { id: 8, name: "Bone" },
    // Urinary System (ID 9) - ADDED
    { id: 9, name: "Urinary System" },
    { id: 9, name: "Kidney" },
    { id: 9, name: "Pelvis" },
    { id: 9, name: "Ureter" },
    { id: 9, name: "Bladder" },
    { id: 9, name: "Urethra" },
    // Reproductive System (ID 10) - ADDED (combining Male & Female)
    { id: 10, name: "Female Reproductive System (FRS)" },
    { id: 10, name: "Uterus" },
    { id: 10, name: "Ovary" },
    { id: 10, name: "Fallopian tube" },
    { id: 10, name: "Cervix" },
    { id: 10, name: "Vagina" },
    { id: 10, name: "Male reproductive system" },
    { id: 10, name: "Testis" },
    { id: 10, name: "Penis" },
    // Immune System (ID 11) - ADDED
    { id: 11, name: "Immune System" },
    // Blood / RES (ID 12) - ADDED
    { id: 12, name: "Blood" },
    { id: 12, name: "Reticuloendothelial System (RES)" },
  ];


   const sensationAndPathology = {
    1: [
      "Cognitive symptoms",
      "Confusion",
      "Disorientation",
      "Memory loss",
      "Concentration Difficulty and attention",
      "Motor symptoms",
      "Weakness",
      "Paralysis",
      "Tremors",
      "Seizures",
      "Difficulty with coordination and balance",
      "Sensory symptoms",
      "Numbness",
      "Tingling pain",
      "Burning sensations",
      "Difficulty with sensation and perception",
      "Emotional and behavioral symptoms",
      "Mood changes",
      "Anxiety",
      "Depression",
      "Personality changes",
      "Difficulty with emotional regulation",
      "Sleep disturbances",
      "Insomnia",
      "Sleep apnea",
      "Restless leg syndrome",
      "Narcolepsy",
      "Autonomic symptoms",
      "Regulation difficulty",
      "Neurodegenerative disorders",
      "Alzheimer's disease",
      "Parkinson's disease",
      "Huntington's disease",
      "Stroke and cerebrovascular disorders",
      "Ischemic stroke",
      "Hemorrhagic stroke",
      "Transient ischemic attack",
      "Infections",
      "Meningitis",
      "Encephalitis",
      "Brain abscess",
      "Inflammatory disorders",
      "Multiple sclerosis",
      "Guillain-Barré syndrome",
      "Chronic inflammatory demyelinating polyneuropathy",
      "Neoplasms",
      "Brain tumors",
      "Spinal cord tumors",
      "Peripheral nerve tumors",
      "Trauma",
      "Head trauma",
      "Spinal cord injury",
      "Peripheral nerve injury",
      "Toxic and metabolic disorders",
      "Encephalopathy",
      "Metabolic encephalopathy",
      "Electrolyte imbalance",
      "Epilepsy",
    ],
    2: [
      "Upper GI symptoms",
      "Abdominal pain or discomfort",
      "Nausea and vomiting",
      "Heartburn",
      "Regurgitation",
      "Swallowing difficulty",
      "Bloating",
      "Gas",
      "Lower GI symptoms",
      "Abdominal pain",
      "Cramping",
      "Diarrhea",
      "Constipation",
      "Bloody stools",
      "Black tarry stools",
      "Urgency or incontinence",
      "Rectal pain or discomfort",
      "General symptoms",
      "Weight loss",
      "Weight gain",
      "Fatigue",
      "Lethargy",
      "Loss of appetite",
      "Fever",
      "Chills",
      "Nausea",
      "Vomiting",
      "Physical examination",
      "Abdominal tenderness",
      "Guarding",
      "Rebound tenderness",
      "Laboratory tests",
      "Complete Blood Count (CBC)",
      "Electrolyte panel",
      "Electrolyte imbalances",
      "Liver function tests (LFTs)",
      "Pancreatic enzymes",
      "Pancreatitis",
      "Stool tests",
      "Infections",
      "Inflammatory conditions",
      "Imaging studies",
      "Barium swallow",
      "Barium enema",
      "Endoscopy",
      "Colonoscopy",
      "CT scan",
      "MRI scans",
      "Endoscopic procedures",
      "Biopsy",
      "Gastroesophageal reflux disease (GERD)",
      "Peptic ulcer disease",
      "Inflammatory bowel disease (IBD)",
      "Irritable bowel syndrome (IBS)",
      "Laboratory test CBC",
      "Electrolyte panel",
      "Gastrointestinal bleeding",
      "Peptic ulcer disease (PUD)",
      "Cancer",
      "Abdominal pain",
      "Gastroenteritis",
      "Diarrhea",
      "Gastroenteritis",
      "Malabsorption syndromes",
      "Constipation",
      "Hypothyroidism",
      "Diabetes",
      "Neurological disorders",
    ],
    3: [
      "Cardiac Symptoms",
      "Chest pain or discomfort",
      "Angina",
      "Shortness of breath (dyspnea)",
      "Fatigue",
      "Weakness",
      "Palpitations",
      "Irregular heartbeat",
      "Dizziness or lightheadedness",
      "Vascular Symptoms",
      "Leg pain",
      "Cramping",
      "Claudication",
      "Weakness",
      "Numbness",
      "Coldness",
      "Discoloration of the skin",
      "Ulcers",
      "Wounds that won't heal",
      "General Symptoms",
      "Weight gain",
      "Weight loss",
      "Swelling",
      "Coughing",
      "Wheezing",
      "Pale skin",
      "Blue-tinged skin",
      "Physical Examination",
      "Blood pressure",
      "Heart rate",
      "Cardiovascular sounds",
      "Electrocardiogram (ECG)",
      "Echocardiogram",
      "Stress Test",
      "Imaging Studies",
      "Chest X-ray",
      "CT scan",
      "MRI",
      "Blood Tests",
      "CBC",
      "Blood chemistry tests",
      "Lipid profile",
      "Cholesterol",
      "Triglyceride",
      "Coronary Artery Disease (CAD)",
      "Coronary angiogram",
      "Heart Failure",
      "Urine tests",
      "Atrial Fibrillation",
      "Heart attack (myocardial infarction)",
      "Pulmonary embolism",
      "Pneumonia",
      "GERD",
      "COPD",
      "Atrial fibrillation",
      "Supraventricular tachycardia (SVT)",
      "Ventricular tachycardia (VT)",
      "Heart valve problems",
      "Anxiety",
    ],
    4: [
      // Corresponds to Location ID 4 (Respiratory System, etc.)
      "Upper Respiratory Tract Symptoms",
      "Nasal congestion or discharge",
      "Sore throat",
      "Coughing", // Appears in both URT and LRT
      "Sneezing",
      "Runny nose",
      "Lower Respiratory Tract Symptoms",
      "Coughing (productive or non-productive)",
      "Sputum production",
      "Chest tightness or pain",
      "Shortness of breath (dyspnea)",
      "Wheezing", // Lowercase w as provided
      "stridor", // Lowercase s as provided
      "General Symptoms",
      "Fatigue",
      "lethargy.", // Lowercase l and period as provided
      "Weight loss",
      "Weight gain",
      "Fever",
      "chills", // Lowercase c as provided
      "Night sweats",
      "Loss of appetite",
      "Physical Examination",
      "lung sounds", // Lowercase l as provided
      "respiratory rate", // Lowercase r as provided
      "oxygen saturation", // Lowercase o as provided
      "Pulmonary Function Tests (PFTs)",
      "Spirometry",
      "Imaging Studies",
      "Chest X-ray",
      "CT scan",
      "MRI scan", // Added scan as provided
      "Laboratory Tests",
      "CBC",
      "Bronchoscopy",
      "Asthma",
      "COPD",
      "Pneumonia",
      "Lung Cancer",
      "Pulmonary embolism",
      "URTI", // Upper Respiratory Tract Infection
      "Tonsillitis",
      "Pharyngitis",
      "laryngitis", // Lowercase l as provided
      "Bronchitis",
      "Tuberculosis",
    ],
    5: [
      // Corresponds to Location ID 5 (Endocrine System)
      "Hypothyroidism",
      "Fatigue or lethargy", // Duplicate (also in Diabetes), keeping both
      "Weight gain", // Duplicate (also in GH Deficiency), keeping both
      "Cold intolerance",
      "Dry skin",
      "Hair loss",
      "Hyperthyroidism",
      "Weight loss", // Duplicate (also in Adrenal), keeping both
      "Increased appetite",
      "Heat intolerance",
      "Sweating",
      "Rapid heartbeat",
      "Diabetes Mellitus",
      "Increased thirst",
      "increased urination", // Lowercase i as provided
      "Fatigue", // Duplicate (also in Hypothyroidism), keeping both
      "lethargy", // Lowercase l as provided, Duplicate (also in Hypothyroidism)
      "Blurred vision",
      "Slow healing of cuts and wounds",
      "Tingling",
      "numbness", // Lowercase n as provided
      "Adrenal Insufficiency", // Also listed as a condition below
      "Weight loss", // Duplicate (also in Hyperthyroidism), keeping both
      "Low blood pressure",
      "Nausea",
      "vomiting", // Lowercase v as provided
      "Abdominal pain",
      "Growth Hormone Deficiency",
      "Short stature",
      "Delayed puberty",
      "Weight gain", // Duplicate (also in Hypothyroidism), keeping both
      "Decreased muscle mass",
      "Physical Examination",
      "thyroid nodules", // Lowercase t as provided
      "adrenal tumors", // Lowercase a as provided
      "Laboratory Tests",
      "Blood tests",
      "hormone levels,", // Comma as provided
      "thyroid-stimulating hormone (TSH)",
      "free thyroxine (FT4)",
      "free triiodothyronine (FT3)",
      "Urine tests", // Duplicate (also in Cardio), keeping both
      "cortisol", // Lowercase c as provided
      "catecholamines", // Lowercase c as provided
      "MRI", // Duplicate (also in Cardio), keeping both
      "USG",
      "Glucose tolerance test",
      "Insulin tolerance test",
      "Thyroid function tests",
      "Fasting plasma glucose",
      "Oral glucose tolerance test",
      "HbA1c",
      "Adrenal Insufficiency", // Listed as symptom and condition
      "Cortisol test",
      "ACTH",
      "CT", // Duplicate (also in Cardio), keeping both
      "MRI", // Duplicate (also in Cardio), keeping both
      "Thyroid cancer",
      "Benign thyroid nodules",
      "Adrenal tumor", // Listed as exam finding and condition
      "Adrenal insufficiency", // Lowercase i, duplicate
      "Cushing's syndrome",
      "Pheochromocytoma",
      "Benign adrenal tumors",
      "Type 1 diabetes",
      "Type 2 diabetes",
      "Gestational diabetes",
      "Maturity-onset diabetes of the young (MODY)",
    ],
    6: [
      // Corresponds to Location ID 6 (Skin)
      "Acne",
      "Pimples or comedones",
      "Redness and inflammation", // Duplicate (also in Eczema), keeping both
      "Scarring",
      "Blackheads",
      "whiteheads", // Lowercase w as provided
      "Psoriasis",
      "Red", // Duplicate (also in Eczema), keeping both
      "scaly patches on the skin",
      "Silvery scales",
      "Itching", // Duplicate (also in Fungal), keeping both
      "burning", // Lowercase b as provided
      "Joint pain",
      "stiffness", // Lowercase s as provided
      "Eczema",
      "Atopic Dermatitis",
      "Dry",
      "itchy", // Lowercase i as provided, Duplicate (also in Fungal)
      "Redness", // Duplicate (also in Acne, Eczema)
      "swelling", // Lowercase s as provided
      "Small",
      "raised bumps", // Duplicate (also in Fungal), keeping both
      "blisters", // Duplicate (also in Herpes), keeping both
      "Crusting", // Duplicate (also in Fungal), keeping both
      "oozing", // Lowercase o as provided, Duplicate (also in Skin Cancer)
      "Skin Cancer",
      "moles", // Lowercase m as provided
      "Sores", // Duplicate (also in Herpes), keeping both
      "healing delayed", // Lowercase h as provided
      "Bleeding",
      "oozing", // Lowercase o as provided, Duplicate (also in Eczema)
      "Fungal Infections",
      "Ringworm",
      "Circular",
      "itchy", // Lowercase i as provided, Duplicate (also in Eczema)
      "patches", // Lowercase p as provided
      "crusting", // Lowercase c as provided, Duplicate (also in Eczema)
      "Hair loss", // Duplicate (also in Endocrine), keeping both
      "Viral Infections",
      "Herpes Simplex",
      "Painful blisters", // Duplicate (also in Eczema)
      "sores", // Lowercase s as provided, Duplicate (also in Skin Cancer)
      "Fever", // Duplicate (also in GI, Resp), keeping both
      "swollen lymph nodes", // Lowercase s as provided
      "Diagnosis",
      "Physical Examination", // Duplicate (also in GI, Cardio, Resp, Endo), keeping both
      "size", // Lowercase s as provided
      "shape", // Lowercase s as provided
      "color", // Lowercase c as provided
      "texture", // Lowercase t as provided
      "Dermoscopy",
      "Biopsy", // Duplicate (also in GI), keeping both
      "Laboratory Tests", // Duplicate (also in Endo), keeping both
      "X-rays",
      "CT scan", // Duplicate (also in GI, Cardio, Resp, Endo), keeping both
      "Hormone level", // Corrected from Hormone level -> Hormone levels? Assuming level is intended.
      "psoriatic arthritis", // Lowercase p as provided
      "Skin prick test",
      "Skin scraping",
      "Fungal culture",
      "Rosacea",
      "Folliculitis",
      "Keratosis pilaris",
      "Seborrheic dermatitis",
      "Contact dermatitis",
      "Scabies",
      "Urticaria (hives)",
    ],
    7: [
      // Corresponds to Location ID 7 (Muscular System)
      "Muscle Weakness", // Also listed as symptom category below
      "Difficulty walking",
      "climbing stairs", // Lowercase c as provided
      "Drooping eyelids",
      "facial weakness", // Lowercase f as provided
      "Weakness", // Duplicate, also under Atrophy
      "Fatigue", // Duplicate (also in GI, Cardio, Resp, Endo), keeping
      "muscle exhaustion", // Lowercase m as provided
      "Muscle Pain", // Also listed as condition below
      "Muscle cramps", // Also listed as symptom category and condition below
      "spasms", // Also listed as symptom category below
      "Muscle tenderness",
      "soreness", // Lowercase s as provided
      "Painful movements",
      "stiffness", // Lowercase s as provided, also listed as symptom category below
      "Muscle Cramps", // Symptom category, also listed as symptom and condition
      "Sudden severe muscle contractions",
      "Painful muscle spasms", // Also listed under Spasms below
      "Muscle stiffness", // Also listed as symptom above
      "weakness", // Lowercase w, also listed as symptom above and under Atrophy
      "Muscle Atrophy",
      "Muscle wasting",
      "shrinkage", // Lowercase s as provided
      "Weakness", // Duplicate, also under Muscle Weakness above
      "paralysis", // Lowercase p as provided
      "Decreased muscle mass", // Duplicate (also in Endo), keeping
      "Muscle Spasms", // Symptom category, also listed as symptom above
      "involuntary muscle contractions", // Lowercase i as provided
      "Painful muscle spasms", // Duplicate (also under Cramps above)
      "Physical Examination", // Duplicate (also in GI, Cardio, Resp, Endo, Skin)
      "muscle strength", // Lowercase m as provided
      "tone", // Lowercase t as provided
      "reflexes", // Lowercase r as provided
      "Laboratory Tests", // Duplicate (also in Endo, Skin)
      "Blood tests", // Duplicate (also in Endo)
      "muscle enzyme", // Lowercase m as provided
      "creatine kinase (CK)",
      "Electromyography (EMG)", // Also listed under Muscular Dystrophy below
      "Nerve conduction studies (NCS)", // Also listed under Muscular Dystrophy below
      "X-rays", // Duplicate (also in Skin), keeping
      "CT scan", // Duplicate (also in GI, Cardio, Resp, Endo, Skin)
      "MRI scans", // Duplicate (also in GI)
      "Muscle Biopsy",
      "Muscular Dystrophy", // Listed as condition below
      "Genetic testing",
      "genetic mutation", // Lowercase g as provided
      "EMG", // Duplicate (also under Lab Tests above)
      "NCS", // Duplicate (also under Lab Tests above)
      "Myasthenia Gravis", // Listed as condition below
      "acetylcholine receptor antibodies", // Lowercase a as provided
      "Edrophonium test",
      "Polymyositis", // Listed as condition below (multiple times)
      "Tendinitis", // Listed as condition below
      "Muscular dystrophy", // Lowercase d, listed as condition above
      "Myasthenia gravis", // Lowercase m, listed as condition above
      "Polymyositis", // Duplicate (also under Lab Tests and conditions)
      "Muscle pain", // Lowercase m, listed as symptom above
      "Musculoskeletal disorders",
      "tendinitis", // Lowercase t, listed as condition above
      "bursitis", // Lowercase b as provided
      "Fibromyalgia",
      "Polymyositis", // Duplicate
      "radiculopathy", // Lowercase r as provided
      "Muscle cramps", // Lowercase m, listed as symptom and symptom category above
      "Electrolyte imbalances", // Duplicate (also in GI, Neuro)
      "hypokalemia", // Lowercase h as provided
      "hypocalcemia", // Lowercase h as provided
      "Dehydration",
      "Medication side effects",
      "peripheral neuropathy", // Lowercase p as provided
    ],
    8: [
      // Corresponds to Location ID 8 (Skeletal System / Bone)
      "Bone Pain",
      "Pain", // Duplicate (also in Joint Problems)
      "tenderness", // Lowercase t as provided
      "Pain that worsens with movement or activity",
      "Pain that improves with rest",
      "Bone Deformities",
      "Abnormal shape",
      "curvature of the bones", // Lowercase c as provided
      "Bowing",
      "bending of the bones", // Lowercase b as provided
      "Shortening",
      "lengthening of the bones", // Lowercase l as provided
      "Joint Problems", // Also listed as condition below
      "Pain", // Duplicate (also in Bone Pain)
      "stiffness in the joints", // Lowercase s as provided
      "Swelling", // Duplicate (also in Cardio)
      "inflammation", // Lowercase i as provided
      "Limited range of motion in the joints",
      "Muscle Weakness", // Duplicate (also in Muscular), keeping both
      "Weakness or fatigue", // Duplicate (also in Muscular), keeping both
      "Difficulty walking", // Duplicate (also in Muscular), keeping both
      "Difficulty  in moving", // Extra space as provided
      "Decreased muscle mass", // Duplicate (also in Muscular, Endo), keeping both
      "Neurological Symptoms",
      "Numbness", // Duplicate (also in Neuro, Muscular), keeping both
      "tingling", // Lowercase t as provided, Duplicate (also in Endo)
      "Weakness", // Duplicate (also in Muscular, Cardio)
      "paralysis", // Lowercase p as provided, Duplicate (also in Muscular)
      "Loss of power",
      "Physical Examination", // Duplicate (also in GI, Cardio, Resp, Endo, Skin, Muscular)
      "muscle strength", // Lowercase m as provided, Duplicate (also in Muscular)
      "Muscle tone", // Duplicate (also in Muscular)
      "neurological function.", // Lowercase n and period as provided
      "X-rays", // Duplicate (also in Skin, Muscular)
      "CT scans", // Duplicate (also in GI, Muscular)
      "MRI scans", // Duplicate (also in GI, Muscular)
      "Bone Density Tests",
      "bone density tests", // Lowercase b as provided
      "dual-energy X-ray absorptiometry (DXA)",
      "bone mineral density", // Lowercase b as provided
      "Blood Tests", // Duplicate (also in Cardio, Muscular)
      "calcium", // Lowercase c as provided
      "phosphorus", // Lowercase p as provided
      "Osteoporosis", // Listed as condition below
      "Rheumatoid Arthritis", // Listed as condition below
      "MRI scans", // Duplicate (also under Imaging above)
      "inflammatory marker", // Lowercase i as provided
      "Joint aspiration",
      "Osteogenesis Imperfecta",
      "Genetic testing", // Duplicate (also in Muscular)
      "genetic mutations", // Lowercase g as provided, Duplicate (also in Muscular)
      "Blood tests", // Lowercase b as provided, Duplicate (also under Lab Tests above)
      "Scoliosis",
      "spinal alignment", // Lowercase s as provided
      "curvature", // Lowercase c as provided
      "Osteoporosis", // Duplicate (also under Lab Tests above)
      "Bone cancer",
      "Osteomalacia",
      "Rheumatoid arthritis", // Lowercase r as provided, Duplicate (also under Lab Tests above)
      "Joint problems", // Lowercase j as provided, Duplicate (also under Symptoms above)
      "Gout",
      "Pseudogout",
      "Muscular dystrophy", // Duplicate (also in Muscular)
      "Myasthenia gravis", // Duplicate (also in Muscular)
      "Polymyositis", // Duplicate (also in Muscular)
      "Neurological disorders", // Duplicate (also in GI)
      "peripheral neuropathy", // Duplicate (also in Muscular)
    ],
    // ADDED: Urinary System list
    9: [
      // Corresponds to Location ID 9 (Urinary System)
      "Painful Urination",
      "Burning sensation while urinating",
      "Discomfort",
      "pain in the genital area", // Lowercase p as provided
      "Frequent Urination",
      "Urinary Incontinence", // Corrected typo from Incontinenc
      "Leaking urine",
      "losing control of the bladder", // Lowercase l as provided
      "Urinating unintentionally",
      "Blood in the Urine",
      "Passing blood clots",
      "Urinary Tract Infections UTIs",
      "Fever", // Duplicate
      "chills", // Lowercase c as provided, Duplicate
      "Pain", // Duplicate
      "Cloudy",
      "strong-smelling urine", // Lowercase s as provided
      "Physical Examination", // Duplicate
      "Urinalysis",
      "blood", // Lowercase b as provided
      "protein", // Lowercase p as provided
      "bacteria", // Lowercase b as provided
      "USG", // Duplicate
      "CT scan", // Duplicate
      "MRI scan", // Duplicate
      "Cystoscopy",
      "Urine culture",
      "Kidney Stones",
      "Bladder Cancer", // Listed as condition below
      "Prostate Enlargement",
      "Digital rectal examination (DRE)", // Also listed below
      "MRI scans, to evaluate the prostate gland", // Comma as provided
      "psa", // Lowercase p as provided, also listed below
      "Interstitial cystitis",
      "Diabetes", // Duplicate
      "Overactive bladder", // Typo bladde corrected
      "Bladder cancer", // Lowercase b as provided
      "Prostate cancer", // Also listed below
      "Nephrotic syndrome",
      "Nephritis",
      "Nephropathy",
    ],
    // ADDED: Reproductive System list
    10: [
      // Corresponds to Location ID 10 (Reproductive Systems)
      "Abnormal Menstrual Bleeding",
      "Heavy Menstrual bleeding",
      "prolonged menstrual bleeding", // Lowercase p as provided
      "Irregular peorids", // Typo peorids kept as provided
      "infrequent menstrual periods", // Lowercase i as provided
      "Spotting",
      "bleeding between periods", // Lowercase b as provided
      "Pelvic Pain",
      "Pain during intercourse",
      "pain during menstruation", // Lowercase p as provided
      "Infertility", // Also listed as condition below
      "Difficulty getting pregnant",
      "miscarriage", // Lowercase m as provided
      "Vaginal Discharge",
      "Abnormal vaginal disharge", // Typo disharge kept as provided
      "Itching", // Duplicate
      "burning", // Lowercase b as provided, Duplicate
      "redness", // Lowercase r as provided, Duplicate
      "Physical Examination", // Duplicate
      "USG", // Duplicate
      "CT scan", // Duplicate
      "MRI", // Duplicate
      "Laboratory Tests", // Duplicate
      "Blood tests", // Duplicate
      "estrogen", // Lowercase e as provided
      "progesterone", // Lowercase p as provided
      "Urine tests", // Duplicate
      "Pap smear",
      "cervical cancer", // Lowercase c as provided
      "Male Reproductive System", // Category Header
      "Erectile Dysfunction",
      "Difficulty achieving or maintaining an erection",
      "Reduced libido or sex drive",
      "Low sperm count", // Listed as Male Factor Infertility below
      "abnormal sperm", // Lowercase a as provided
      "Pain", // Duplicate
      "Swelling", // Duplicate
      "inflammation", // Lowercase i as provided, Duplicate
      "Abnormal Ejaculation",
      "Premature ejaculation",
      "Delayed ejaculation",
      "Painful ejaculation",
      "testosterone", // Lowercase t as provided
      "Urine tests", // Duplicate
      "Semen analysis",
      "sperm count", // Lowercase s as provided
      "motility", // Lowercase m as provided
      "morphology", // Lowercase m as provided
      "Polycystic Ovary Syndrome (PCOS)",
      "Glucose tolerance", // Test, listed separately above
      "Prostate Cancer", // Listed as condition above
      "Digital rectal examination (DRE)", // Duplicate (also in Urinary)
      "Prostate-specific antigen -PSA", // Hyphen as provided
      "Endometriosis",
      "Laparoscopy",
      "Uterine fibroids",
      "Vasculogenic erectile dysfunction",
      "Neurogenic erectile dysfunction",
      "Hormonal imbalances",
      "Psychological factors",
      "Male factor infertility",
      "Female factor infertility",
      "Unexplained infertility",
      "Lifestyle factors",
    ],
    // ADDED: Immune System list
    11: [
      // Corresponds to Location ID 11 (Immune System)
      "Recurring Infections",
      "Frequent",
      "Difficulty recovering from infections",
      "Autoimmune Disorders",
      "Joint pain", // Duplicate
      "inflammation", // Lowercase i as provided, Duplicate
      "Skin rashes",
      "lesions", // Lowercase l as provided
      "Digestive problems",
      "Allergic Reactions",
      "Hives", // Also listed as Urticaria in Skin
      "itchy skin", // Lowercase i as provided
      "Swelling", // Duplicate
      "Difficulty breathing",
      "anaphylaxis", // Lowercase a as provided
      "Immune deficiency", // Listed as condition below
      "Slow healing of wounds", // Duplicate
      "Physical Examination", // Duplicate
      "Laboratory Tests", // Duplicate
      "Blood tests", // Duplicate
      "CBC", // Duplicate
      "IgE antibody",
      "Urine test", // Missing s, corrected to tests if plural intended, kept as test
      "Skin tests",
      "X-rays", // Duplicate
      "CT scan", // Duplicate
      "MRI", // Duplicate
      "HIV/AIDS",
      "HIV antibody test",
      "CD4 cell count",
      "Viral load test",
      "Rheumatoid factor",
      "Antinuclear antibody (ANA) test",
      "Skin biopsy", // Biopsy also listed elsewhere
      "Immuno deficiency", // Spacing and case as provided
      "Genetic testing", // Duplicate
      "Rheumatoid arthritis", // Duplicate
      "Lupus",
      "Hashimoto's thyroiditis",
      "Type 1 diabetes", // Duplicate
      "Asthma", // Duplicate
      "Eczema", // Duplicate
      "Food allergies",
      "Insect sting allergies",
    ],
    // ADDED: Blood / RES list
    12: [
      // Corresponds to Location ID 12 (Blood / RES)
      "Anemia",
      "Fatigue or weakness", // Duplicate
      "Shortness of breath", // Duplicate
      "Pale skin", // Duplicate
      "Headaches or dizziness", // Duplicate
      "Leukemia", // Listed as condition below
      "Weight loss", // Duplicate
      "Fever", // Duplicate
      "chills", // Lowercase c as provided, Duplicate
      "Swollen lymph nodes", // Duplicate
      "spleen", // Lowercase s as provided
      "Lymphoma", // Listed as condition below
      "Multiple Myeloma",
      "Bone pain", // Duplicate
      "fractures", // Lowercase f as provided
      "Frequent infections", // Duplicate (also in Immune)
      "RES Disorders", // Listed as condition below
      "Splenomegaly",
      "Hepatomegaly",
      "Lymphadenopathy",
      "CBC", // Duplicate
      "hemoglobin", // Lowercase h as provided
      "platelet count.", // Lowercase p and period as provided
      "Blood Smear",
      "Bone Marrow Biopsy",
      "X-rays", // Duplicate
      "CT scan", // Duplicate
      "MRI scans", // Duplicate
      "tumors", // Lowercase t as provided, Duplicate
      "Lymph node biopsy",
      "Iron deficiency test",
      "Vitamin B12",
      "Folate",
      "Hemoglobin", // Duplicate of hemoglobin above
      "electrophoresis", // Lowercase e as provided
      "Leukemia", // Duplicate (listed as symptom above)
      "Bone marrow biopsy", // Duplicate (listed under tests above)
      "Lymphoma", // Duplicate (listed as symptom above)
      "lymphocytes", // Lowercase l as provided
      "plasma cells", // Lowercase p as provided
      "Splenectomy",
      "Liver function tests", // Duplicate
      "Iron deficiency anemia",
      "Anemia of Vitamins deficiency", // Capital V as provided
      "Anemia of Chronic Disease",
      "Pernicious Anemia",
      "Sickle cell anemia",
      "Thalassemia",
      "Aplastic Anemia",
      "Hemolytic Anemia",
      "Normocytic Anemia",
      "Macrocytic Anemia",
      "Leukemia", // Duplicate
      "Acute myeloid leukemia (AML)",
      "Acute lymphoblastic leukemia (ALL)",
      "Chronic myeloid leukemia (CML)",
      "Chronic lymphocytic leukemia (CLL)",
      "Hodgkin lymphoma",
      "Non-Hodgkin lymphoma",
      "Follicular lymphoma",
      "Diffuse large B-cell lymphoma",
      "Smoldering multiple myeloma",
      "Active multiple myeloma",
      "Relapsed multiple myeloma",
      "Refractory multiple myeloma",
      "RES Disorders", // Duplicate (listed as symptom above)
      "histiocytosis", // Lowercase h as provided
    ],
  };
  // (Keep the full sensationAndPathology data as you have it)


  const modalitiesSuggestions = [
    "Causation (A/F)", "Emotional stress", "anxiety", "grief", "anger", "fear",
    "Physical Causation", "Injury", "trauma", "surgery", "infection",
    "Environmental", "Exposure to toxins", "pollution", "Weather change",
    "Genetic", "Inherited traits", "family history",
    "Nutritional", "Poor diet", "malnutrition", "food allergies",
    "Time Modalities", "Worse in the morning", "Worse at night", "Worse in evening",
    "Worse during the full moon", "Better during the day",
    "Environmental Modalities", "Worse", "cold weather", "hot weather",
    "Better", "open air", "enclosed spaces",
    "Physical Modalities", "movement", "Better with rest", "pressure", "Better with elevation",
    "Emotional Modalities", "Worse with stress", "Better with relaxation",
    "Worse with anxiety", "Better with calmness",
    "cold", "heat", "warmth", "sleep", "<", ">"
  ];

    const concomitantSuggestions = [
    // General Physical Symptoms
    "Fever", "Chills", "Sweating", "Fatigue", "Weakness", "Malaise", "Lethargy", "Lack of motivation",
    "Headaches", "accompanying symptoms (headache)", "sensitivity to light (headache)", // Grouped headache related
    "Dizziness", "Pain in other areas", "Swelling",
    // GI & Appetite
    "Nausea", "Vomiting", "Diarrhea", "Constipation", "Loss of appetite", "Appetite (changes)",
    "Weight loss", "Weight gain", "Digestive issues", "Bloating", "Gas",
    "Thirst", "Cravings", "Aversion", "Tongue (changes)",
    // Skin
    "Rash", "Itching", "Skin changes",
    // Neurological / Sensory
    "Numbness", "Tingling",
    // Emotional / Mental
    "Anxiety", "Restlessness", "Fear", "Apprehension",
    "Depression", "Sadness", "Hopelessness", "Loss of interest",
    "Irritability", "Mood swings", "Anger", "Frustration", "Emotional instability",
    "Weeping", "Euphoria",
    "Confusion", "Disorientation", "Forgetfulness", "Lack of focus", "Difficulty concentrating", "Distraction",
    "Memory loss", "Mood changes",
    // Sleep
    "Sleep disturbances", "Insomnia", "Difficulty falling asleep", "Sleepiness",
    "Nightmares", "Sleepwalking", "Restless leg syndrome",
    // Respiratory / Cardiovascular
    "Cough", "Shortness of breath", "Palpitations",
    // Other systems
    "Urination (changes)", "Bowel changes",
    // Temporal relationships
    "Followed by", "Before", "Alternating with",
    // Appearance
    "Appearance (changes)",
    // Categories (can be used as prefixes or standalone)
    "Physical Concomitant", "Mental Concomitant", "Emotional Concomitants"
  ];


  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [language, setLanguage] = useState("en"); // Not used for speech in this version
  const [isRecording, setIsRecording] = useState(false); // For Add Row button styling
  const [selectedoptionvalue, setselectedoptionvalue] = useState(""); // For modal context
  const [selectedtype, setselectedtype] = useState(""); // For modal context
  const [modalContent, setModalContent] = useState(""); // For modal display
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]); // For options inside modal
  const itemsPerPage = 4;
  // const [showOptions, setShowOptions] = useState(true); // Seems related to modal, not input suggestions
  const [focusedIndex, setFocusedIndex] = useState(null); // For modal context
  
  const [showSuggestions, setShowSuggestions] = useState({}); // e.g. { 0: {location: true, sensation: false}, 1: ... }
  const [filteredSuggestions, setFilteredSuggestions] = useState({}); // e.g. { 0: {location: [...], sensation: [...]}, 1: ... }


  const allOptions = Array.from({ length: 36 }, (_, i) => `Option ${i + 1}`);
  const currentOptions = allOptions.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleOptionSelect = (option) => {
    setSelectedOptions((prevOptions) => {
      const newOptions = prevOptions.includes(option)
        ? prevOptions.filter((o) => o !== option)
        : [...prevOptions, option];
      return newOptions;
    });
    // Logic for automatically moving to next page in modal
    if (!selectedOptions.includes(option)) {
      const nextPage = Math.min(
        currentPage + 1,
        Math.ceil(allOptions.length / itemsPerPage) - 1
      );
      setCurrentPage(nextPage);
    }
  };

  // handleNext and handlePrevious are for the modal pagination (not used in UI currently, but kept)
  // const handleNext = () => { ... };
  // const handlePrevious = () => { ... };

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

  const confirmDeleteRow = () => {
    if (rowToDelete !== null) {
      setRows(rows.filter((_, index) => index !== rowToDelete));
    }
    setIsDeleteModalVisible(false);
    setRowToDelete(null);
  };

  const formatText = (value) => {
    if (value === "1") return { textTransform: "lowercase", fontStyle: "normal", fontWeight: "normal" };
    if (value === "2") return { textTransform: "capitalize", fontStyle: "italic", fontWeight: "normal" };
    if (value === "3") return { fontStyle: "normal", fontWeight: "bold" };
    return {};
  };

  const addRow = () => {
    setRows([
      ...rows,
      {
        location: "", sensation: "", modalities: "", concomitant: "",
        locationValue: "1", sensationValue: "1", modalitiesValue: "1", concomitantValue: "1",
        locationChecked: false, sensationChecked: false, modalitiesChecked: false, concomitantChecked: false,
        selectedOptions: [],
      },
    ]);
  };

  // startListening function removed as mic button is not in UI, can be added back if needed

  // handleCheckboxChange function removed as checkboxes are not in UI

  // const navigate = useNavigate(); // Not used

  const toggleRecording = () => { // This function name is misleading, it's for the "Add Row" button style
    setIsRecording(!isRecording); // Toggles style for Add Row, but doesn't actually record
  };

  const handleKeyPressModalOpen = (index) => { // Renamed to be more specific
    setSelectedOptions([]); // Clear options for the modal
    setFocusedIndex(index);
    setModalContent(
      `Location: ${rows[index].location}, Sensation: ${rows[index].sensation}, Modalities: ${rows[index].modalities}, Concomitant: ${rows[index].concomitant}`
    );
    // setShowOptions(true); // This state seems for the modal itself, not input suggestions
    setIsModalVisible(true);
  };

  const handleInputChange = (e, index, fieldKey) => {
    const value = e.target.value;
    const updatedRows = [...rows];
    updatedRows[index][fieldKey] = value;
    setRows(updatedRows);

    const currentRowSuggestions = filteredSuggestions[index] || {};
    const currentRowShowSuggestions = showSuggestions[index] || {};

    // Reset suggestions for the current field before re-evaluating
    currentRowSuggestions[fieldKey] = [];
    currentRowShowSuggestions[fieldKey] = false;

    if (value.length >= 1) { // Show suggestions if 1 or more characters
        if (fieldKey === "location") {
            const filtered = locationSuggestions.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
            );
            currentRowSuggestions.location = filtered;
            currentRowShowSuggestions.location = true;
        } else if (fieldKey === "sensation") {
            const selectedLocation = locationSuggestions.find(
            (item) => item.name === updatedRows[index].location
            );
            const selectedId = selectedLocation ? selectedLocation.id : null;
            const allSensationsForLocation = selectedId
            ? sensationAndPathology[selectedId] || []
            : [];
            const matchedSensations = allSensationsForLocation.filter((sensation) =>
            sensation.toLowerCase().includes(value.toLowerCase())
            );
            currentRowSuggestions.sensation = matchedSensations.map((name) => ({ name }));
            currentRowShowSuggestions.sensation = true;
        } else if (fieldKey === "modalities") {
            const filtered = modalitiesSuggestions.filter((item) =>
            item.toLowerCase().includes(value.toLowerCase())
            );
            currentRowSuggestions.modalities = filtered.map(name => ({ name })); // Keep structure {name: ...}
            currentRowShowSuggestions.modalities = true;
        } else if (fieldKey === "concomitant") { // Added this block
            const filtered = concomitantSuggestions.filter((item) =>
            item.toLowerCase().includes(value.toLowerCase())
            );
            currentRowSuggestions.concomitant = filtered.map(name => ({ name }));
            currentRowShowSuggestions.concomitant = true;
        }
    }

    setFilteredSuggestions(prev => ({ ...prev, [index]: currentRowSuggestions }));
    setShowSuggestions(prev => ({ ...prev, [index]: currentRowShowSuggestions }));
  };

  const selectSuggestion = (index, suggestion, field) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = suggestion.name;
    setRows(updatedRows);

    // Hide all suggestions for that row's specific field after selection
    setShowSuggestions(prev => ({
        ...prev,
        [index]: { ...prev[index], [field]: false }
    }));
  };

  const renderInput = (row, index, field, dropdownField, placeholder) => {
    const isLocationField = field === "location";
    const isSensationField = field === "sensation";
    const isModalitiesField = field === "modalities";
    const isConcomitantField = field === "concomitant"; // Added this flag

    return (
      <div
        className={`d-flex p-1 align-items-center ${
          row[field] ? "bg-highlight" : "bg-default" // This class logic needs CSS
        }`}
      >
        <div className="flex-grow-1 position-relative">
          <input
            type="text"
            className="form-control"
            value={row[field]}
            style={formatText(row[dropdownField])}
            onChange={(e) => handleInputChange(e, index, field)}
            onFocus={(e) => handleInputChange(e, index, field)} // Show suggestions on focus if text exists
            onBlur={() => {
                setTimeout(() => { // Timeout to allow click on suggestion
                    if (showSuggestions[index]) {
                        setShowSuggestions(prev => ({
                            ...prev,
                            [index]: { ...prev[index], [field]: false }
                        }));
                    }
                }, 150);
            }}
            onKeyDown={(e) => {
                let currentFieldSuggestionsVisible = false;
                if (showSuggestions[index]) {
                    if (isLocationField && showSuggestions[index].location) currentFieldSuggestionsVisible = true;
                    if (isSensationField && showSuggestions[index].sensation) currentFieldSuggestionsVisible = true;
                    if (isModalitiesField && showSuggestions[index].modalities) currentFieldSuggestionsVisible = true;
                    if (isConcomitantField && showSuggestions[index].concomitant) currentFieldSuggestionsVisible = true; // Added this check
                }

                if (e.key === "Enter" && !currentFieldSuggestionsVisible) {
                    handleKeyPressModalOpen(index);
                    setCurrentPage(0); // Reset modal page
                    setselectedoptionvalue(row[field]); // For modal context
                    setselectedtype(field); // For modal context
                } else if (e.key === "Escape") {
                     if (showSuggestions[index]) {
                        setShowSuggestions(prev => ({
                            ...prev,
                            [index]: { ...prev[index], [field]: false }
                        }));
                    }
                }
            }}
            placeholder={placeholder}
          />

          {/* Suggestions Lists */}
          {(isLocationField && showSuggestions[index]?.location && filteredSuggestions[index]?.location?.length > 0) && (
            <ul className="list-group position-absolute w-100 mt-1 shadow bg-white" style={{ zIndex: 1000, maxHeight: '200px', overflowY: 'auto' }}>
              {filteredSuggestions[index].location.map((suggestion, suggIdx) => (
                <li key={`loc-${index}-${suggIdx}`} className="list-group-item list-group-item-action"
                    onMouseDown={() => selectSuggestion(index, suggestion, "location")} style={{ cursor: "pointer" }}>
                  {suggestion.name}
                </li>
              ))}
            </ul>
          )}
          {(isSensationField && showSuggestions[index]?.sensation && filteredSuggestions[index]?.sensation?.length > 0) && (
            <ul className="list-group position-absolute w-100 mt-1 shadow bg-white" style={{ zIndex: 1000, maxHeight: '200px', overflowY: 'auto' }}>
              {filteredSuggestions[index].sensation.map((suggestion, suggIdx) => (
                <li key={`sen-${index}-${suggIdx}`} className="list-group-item list-group-item-action"
                    onMouseDown={() => selectSuggestion(index, suggestion, "sensation")} style={{ cursor: "pointer" }}>
                  {suggestion.name}
                </li>
              ))}
            </ul>
          )}
          {(isModalitiesField && showSuggestions[index]?.modalities && filteredSuggestions[index]?.modalities?.length > 0) && (
            <ul className="list-group position-absolute w-100 mt-1 shadow bg-white" style={{ zIndex: 1000, maxHeight: '200px', overflowY: 'auto' }}>
              {filteredSuggestions[index].modalities.map((suggestion, suggIdx) => (
                <li key={`mod-${index}-${suggIdx}`} className="list-group-item list-group-item-action"
                    onMouseDown={() => selectSuggestion(index, suggestion, "modalities")} style={{ cursor: "pointer" }}>
                  {suggestion.name}
                </li>
              ))}
            </ul>
          )}
          {/* Added Suggestions for Concomitant */}
          {(isConcomitantField && showSuggestions[index]?.concomitant && filteredSuggestions[index]?.concomitant?.length > 0) && (
            <ul className="list-group position-absolute w-100 mt-1 shadow bg-white" style={{ zIndex: 1000, maxHeight: '200px', overflowY: 'auto' }}>
              {filteredSuggestions[index].concomitant.map((suggestion, suggIdx) => (
                <li key={`con-${index}-${suggIdx}`} className="list-group-item list-group-item-action"
                    onMouseDown={() => selectSuggestion(index, suggestion, "concomitant")} style={{ cursor: "pointer" }}>
                  {suggestion.name}
                </li>
              ))}
            </ul>
          )}


          {/* Dropdown Button */}
          <button
            type="button"
            className="btn position-absolute top-50 me-3 end-0 translate-middle-y p-0 border-0"
            onClick={() => toggleDropdown(index, dropdownField)}
            aria-label="Format Dropdown"
          >
            {row[dropdownField] || <MdArrowDropDown size={24} />}
          </button>
          {dropdownOpen[index] === dropdownField && (
            <div className="custom-dropdown-menu position-absolute end-0 mt-2 p-1 bg-white border rounded shadow-sm" style={{zIndex: 1001}}>
              {["1", "2", "3"].map(val => (
                 <button key={val} className="btn btn-sm btn-light d-block w-100 text-start mb-1"
                         onClick={() => handleDropdownSelect(index, dropdownField, val)}>
                    {val}
                 </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="row"> {/* Added mb-3 for spacing */}
        <div className="col-sm-7 col-6">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              {/* Link component can be used if react-router-dom is active */}
              <a href="#!">Chief Complaint</a>
            </li>
            <li className="breadcrumb-item">
              <i className="feather-chevron-right"></i> {/* This class might need feather icons library */}
            </li>
            <li className="breadcrumb-item active">Input</li>
          </ul>
        </div>
          <div className="col-sm-5 col-6 text-end m-b-30">
          <a
            className={`btn btn-${
              isRecording ? "danger" : "primary-StartRecording" // This class "primary-StartRecording" seems custom
            }`}
            onClick={addRow}
            href="#!" // Added href for <a> tag or change to <button>
          >
            <BsPlus size={30} style={{ marginHorizontal: 10 }} /> {/* marginHorizontal is not a valid CSS property for React style object, use marginRight/marginLeft or padding */}
            Add Row
          </a>
        </div>
      </div>
      <div className="card card-table show-entire"> {/* These classes might be custom */}
       
            <table className="table mt-2 mb-5">
            <thead>
                <tr>
                <th>Location</th>
                <th>Sensation & Pathology</th>
                <th>Modalities AF</th>
                <th>Concomitant</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody> {/* Added tbody */}
                {rows.map((row, index) => (
                <tr key={index}>
                    <td>{renderInput(row,index,"location","locationValue","Enter Location")}</td>
                    <td>{renderInput(row,index,"sensation","sensationValue","Enter Sensation")}</td>
                    <td>{renderInput(row,index,"modalities","modalitiesValue","Enter Modalities AF")}</td>
                    <td>{renderInput(row,index,"concomitant","concomitantValue","Enter Concomitant")}</td>
                    <td>
                    <button
                        className="btn btn-sm btn-danger"
                        onClick={() => { setRowToDelete(index); setIsDeleteModalVisible(true); }}
                    >
                        <BsTrash />
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
       

        {isModalVisible && (
          <div className="modal fade show" style={{ display: "block" }} tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered"> {/* Added modal-dialog-centered */}
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Select Option for: {selectedtype} - "{selectedoptionvalue}"</h5>
                  <button type="button" className="btn-close" onClick={() => setIsModalVisible(false)}></button>
                </div>
                <div className="modal-body">
                  <p>Selected: {selectedOptions.join(", ")}</p> {/* Show selected options */}
                  <ul className="list-group">
                    {currentOptions.map((option) => (
                      <li key={option}
                          className={`list-group-item list-group-item-action ${selectedOptions.includes(option) ? "active" : ""}`}
                          onClick={() => handleOptionSelect(option)} style={{cursor: "pointer"}}>
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setIsModalVisible(false)}>Close</button>
                  <button type="button" className="btn btn-primary" onClick={() => {
                      // Here you would typically save the selectedOptions to the row
                      const updatedRows = rows.map((r, i) => 
                        i === focusedIndex ? { ...r, selectedOptions: [...selectedOptions] } : r
                      );
                      setRows(updatedRows);
                      console.log("Saving options for row:", focusedIndex, selectedOptions);
                      setIsModalVisible(false);
                  }}>Save Selections</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {isDeleteModalVisible && (
          <div className="modal fade show" style={{display: "block", backgroundColor: "rgba(0,0,0,0.5)"}} tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                 <div className="modal-header">
                     <h5 className="modal-title">Confirm Deletion</h5>
                      <button type="button" className="btn-close" onClick={() => setIsDeleteModalVisible(false)}></button>
                 </div>
                 <div className="modal-body text-center">
                    <BsExclamationTriangleFill size={50} className="text-danger mb-3" />
                    <p>Are you sure you want to delete this row?</p>
                 </div>
                 <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setIsDeleteModalVisible(false)}>Cancel</button>
                    <button type="button" className="btn btn-danger" onClick={confirmDeleteRow}>Delete</button>
                 </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chiefcomplaintstart;