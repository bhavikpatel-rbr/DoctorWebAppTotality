import React, { useState } from "react";
import { MdArrowDropDown, MdClose, MdArrowForward } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa"; // Import the new icon
const PatientSection = ({
  title,
  section,
  setSection,
  dropdownOpen,
  toggleDropdown,
  handleDropdownSelect,
  handleAddItem,
  handleRemoveItem,
  toggleCommentsVisibility,
  isShowIcon,
  ishideshowbutton,
  setShowWeightSections,
  showWeightSections,
  subheadingsEnabled = false, // Default to false
}) => {
  const [subheadings, setSubheadings] = useState([]);
  const [subheadingsEnabled1, setsubheadingsEnabled1] = useState(false);
  const [subheadingsEnabled2, setsubheadingsEnabled2] = useState(false);

  const addSubheading = () => {
    setSubheadings([...subheadings, { inputValue: "", locationValue: null }]);
  };

  const removeSubheading = (index) => {
    setSubheadings(subheadings.filter((_, i) => i !== index));
  };

  const handleSubheadingChange = (index, field, value) => {
    const updatedSubheadings = [...subheadings];
    updatedSubheadings[index][field] = value;
    setSubheadings(updatedSubheadings);
  };

  const handleShowWeightSections = () => {
    setShowWeightSections(!showWeightSections);
  };

  return (
    <>
      <div className="Patient_Person_Add">
        <div
          className="Patient_Problem_Nem"
          onClick={() => toggleCommentsVisibility(section, setSection)}
        >
          <h3 className="weight-loss-header">
            {isShowIcon && (
              <span className="icon-left">
                <FaArrowRight />
              </span>
            )}
            <span>{title}</span>
          </h3>
        </div>
        <div className="Patient_Textinput-main">
          <div className="Patient_Textinput w-50">
            <div className="p-1">
              <div className="d-flex">
                <div className="flex-grow-1 position-relative">
                  <input
                    type="text"
                    className="form-control"
                    value={section.inputValue}
                    onChange={(e) =>
                      setSection({ ...section, inputValue: e.target.value })
                    }
                    placeholder="Enter Comment"
                  />
                  <button
                    type="button"
                    className="btn position-absolute top-50 me-3 end-0 translate-middle-y p-0 border-0"
                    onClick={() => toggleDropdown(title)}
                    aria-label="Dropdown"
                  >
                    {section.locationValue || <MdArrowDropDown size={24} />}
                  </button>
                  {dropdownOpen === title && (
                    <div className="custom-dropdown-menu position-absolute end-0 mt-2">
                      <button
                        className="custom-dropdown-item"
                        onClick={() =>
                          handleDropdownSelect(
                            section,
                            setSection,
                            "locationValue",
                            "1"
                          )
                        }
                      >
                        1
                      </button>
                      <button
                        className="custom-dropdown-item"
                        onClick={() =>
                          handleDropdownSelect(
                            section,
                            setSection,
                            "locationValue",
                            "2"
                          )
                        }
                      >
                        2
                      </button>
                      <button
                        className="custom-dropdown-item"
                        onClick={() =>
                          handleDropdownSelect(
                            section,
                            setSection,
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
                <div>
                  <button
                    className="remove-button"
                    style={{ marginLeft: "10px" }}
                    onClick={() => handleAddItem(section, setSection)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
                type="button"
                className="btn btn-light border-0"
                onClick={() => toggleCommentsVisibility(section, setSection)}
                style={{marginLeft:"240px"}}
                aria-label="Dropdown"
              >
                <MdArrowDropDown size={24} />
              </button>
          {ishideshowbutton && (
            <button
              className="btn btn-primary-StartRecording btn-rounded Add-btn-new"
              onClick={handleShowWeightSections}
            >
              {showWeightSections ? "Hide" : "Show"}
            </button>
          )}
        </div>
      </div>

      {/* Show the list of added comments */}
      {section.showComments && (
        <>
          <table className="table table-striped">
            <tbody>
              {section.rows.map((row, index) => (
                <tr key={index}>
                  <td style={{ textAlign: "left" ,  }}>
                    <input type="checkbox" /> {row.location}
                  </td>
                  <td className="priority-btn">
                    <button
                      className="btn_prority"
                      onClick={() =>
                        handleRemoveItem(section, setSection, index)
                      }
                    >
                      {row.locationValue}
                    </button>
                    &nbsp;
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() =>
                        handleRemoveItem(section, setSection, index)
                      }
                    >
                      <MdClose size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default PatientSection;
