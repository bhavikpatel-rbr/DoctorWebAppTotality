import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { ChevronRight, ArrowDownLeft } from "react-feather";

const LstTable = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    onset: "",
    duration: "",
    family: { keyword: "", description: "" },
    society: { keyword: "", description: "" },
    work: { keyword: "", description: "" },
    interpretation: { keyword: "", description: "" },
  });

  const [showDescription, setShowDescription] = useState({
    family: false,
    society: false,
    work: false,
    interpretation: false,
  });

  const [events, setEvents] = useState([
    {
      id: 1,
      eventName: "Default Event",
      onset: "2024-09-25",
      duration: "1 hour",
      family: { keyword: "default", description: "" },
      society: { keyword: "default", description: "" },
      work: { keyword: "default", description: "" },
      interpretation: { keyword: "default", description: "" },
    },
  ]);

  const lightColors = ["#fff", "#d4ffe6", "#b8cdff", "#edd4ff", "#f8ffd1"];

  const FormContainer = styled(Box)(({ theme, bgcolor }) => ({
    padding: theme.spacing(4),
    backgroundColor: bgcolor || theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [key, field] = name.split(".");
    setFormData((prevData) => ({
      ...prevData,
      [key]: { ...prevData[key], [field]: value },
    }));
  };

  const toggleDescription = (key) => {
    setShowDescription((prevShow) => ({
      ...prevShow,
      [key]: !prevShow[key],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (events.length === 1 && events[0].eventName === "Default Event") {
      // Update the first event if it's the default one
      setEvents([
        {
          ...formData,
          id: 1,
        },
      ]);
    } else {
      setEvents((prevEvents) => {
        const updatedEvents = [...prevEvents];
        updatedEvents[0] = { ...formData, id: updatedEvents[0].id };
        return updatedEvents;
      });
    }
  };

  const handleAddEvent = () => {
    if (events.length < 5) {
      const newEvent = {
        id: events.length + 1,
        eventName: formData.eventName,
        onset: formData.onset,
        duration: formData.duration,
        family: formData.family,
        society: formData.society,
        work: formData.work,
        interpretation: formData.interpretation,
      };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
      // Reset form data after adding event
      setFormData({
        eventName: "",
        onset: "",
        duration: "",
        family: { keyword: "", description: "" },
        society: { keyword: "", description: "" },
        work: { keyword: "", description: "" },
        interpretation: { keyword: "", description: "" },
      });
    } else {
      alert("You can only add a maximum of 5 events.");
    }
  };

  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/mentalstate">LstTable</Link>
              </li>
              <li className="breadcrumb-item">
                <ChevronRight
                  size={16}
                  style={{ color: "blue", fontSize: "20px", margin: "0 8px" }}
                />
              </li>
              <li className="breadcrumb-item active">LstTable</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          {/* Display Event Names */}
          <Typography variant="h5" gutterBottom>
            Events List
          </Typography>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "10px",
            }}
          >
            {events.map((event, index) => (
              <div
                key={event.id}
                style={{
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  backgroundColor: lightColors[index % lightColors.length], // Assign color
                }}
              >
                {event.eventName}
              </div>
            ))}
          </div>

          {/* Assign a background color based on the number of events */}
          <FormContainer
            bgcolor={
              events.length
                ? lightColors[(events.length - 1) % lightColors.length]
                : undefined
            }
          >
            <form
              onSubmit={handleSubmit}
              style={{
                backgroundColor: "white",
                padding: "10px 5px",
                margin:"0px -10px",
                borderRadius: "5px",
              }}
            >
              <h3 className="mb-5">Event Details</h3>

              <div className="row">
                
                <div className="col-1">
                    <div className="input-block local-forms">
                      <label>Sr No</label>
                      <input
                        type="text"
                        className="form-control"
                        name="eventName"
                        value={formData.eventName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            eventName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="input-block local-forms">
                      <label>Event Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="eventName"
                        value={formData.eventName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            eventName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="col-3">
                    <div className="input-block local-forms">
                      <label>Onset</label>
                      <input
                        type="text"
                        className="form-control"
                        name="onset"
                        value={formData.onset}
                        onChange={(e) =>
                          setFormData({ ...formData, onset: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="col-4 ">
                    <div className="input-block local-forms">
                      <label>Duration</label>
                      <input
                        type="text"
                        className="form-control"
                        name="duration"
                        value={formData.duration}
                        onChange={(e) =>
                          setFormData({ ...formData, duration: e.target.value })
                        }
                      />
                    </div>
                  </div>
                
              </div>

              <div className="row">
                <div className="col-md-2">
                  {["family", "society", "work",].map(
                    (key) => (
                      <div className="input-block local-forms">
                        <label>{`${
                          key.charAt(0).toUpperCase() + key.slice(1)
                        } Keyword`}</label>
                        <input
                          type="text"
                          className="form-control"
                          name={`${key}.keyword`}
                          value={formData[key].keyword}
                          onChange={handleChange}
                          style={{ position: "relative" }}
                        />
                        <IconButton
                          onClick={() => toggleDescription(key)}
                          style={{
                            position: "absolute",
                            right: "10px",
                            top: "3px",
                          }}
                        >
                          <ArrowDownLeft />
                        </IconButton>
                        {showDescription[key] && (
                          <input
                            type="text"
                            className="form-control"
                            name={`${key}.description`}
                            value={formData[key].description}
                            onChange={handleChange}
                            style={{ marginTop: "8px" }}
                          />
                        )}
                      </div>
                    )
                  )}
                </div>
                <div className="col-md-10">
                  <div className="row">
                    <div className="col-md-6">
                      <FormControl
                        component="fieldset"
                        style={{
                          border: "2px solid rgba(46, 55, 164, 0.1)",
                          borderRadius: "10px",
                          padding: "10px",
                          width: "100%",
                        }}
                      >
                        <FormLabel component="legend">
                          <h4 style={{ color: "black" }}>
                            Characteristics Expression
                          </h4>
                        </FormLabel>
                        <div style={styles.linkContainer}>
                          <div style={styles.linkItem}>
                            <Link to="/emotionalstate" style={styles.link}>
                              Emotional State
                            </Link>
                          </div>
                          <div style={styles.linkItem}>
                            <Link to="/intellectualstate2" style={styles.link}>
                              Intellectual State
                            </Link>
                          </div>
                          <div style={styles.linkItem}>
                            <Link to="/action" style={styles.link}>
                              Action
                            </Link>
                          </div>
                        </div>
                      </FormControl>
                    </div>

                    <div className="col-md-6">
                      <FormControl
                        component="fieldset"
                        style={{
                          border: "2px solid rgba(46, 55, 164, 0.1)",
                          borderRadius: "10px",
                          padding: "10px",
                          width: "100%",
                        }}
                      >
                        <FormLabel component="legend">
                          <h4 style={{ color: "black" }}>Reaction Cause  {"< >"} </h4>
                        </FormLabel>
                        <div style={styles.linkContainer}>
                          <div style={styles.linkItem}>
                            <Link to="/emotions" style={styles.link}>
                            Emotions
                            </Link>
                          </div>
                          <div style={styles.linkItem}>
                            <Link to="/intellecturalactivety" style={styles.link}>
                              Intellectual Activity
                            </Link>
                          </div>
                          <div style={styles.linkItem}>
                            <Link to="/action" style={styles.link}>
                              Life Situation
                            </Link>
                          </div>
                        </div>
                      </FormControl>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 mt-4">
                      {["interpretation"].map((key) => (
                        <div className="input-block local-forms">
                          <label>{`${
                            key.charAt(0).toUpperCase() + key.slice(1)
                          } Keyword`}</label>
                          <input
                            type="text"
                            className="form-control"
                            name={`${key}.keyword`}
                            value={formData[key].keyword}
                            onChange={handleChange}
                            style={{ position: "relative" }}
                          />
                          <IconButton
                            onClick={() => toggleDescription(key)}
                            style={{
                              position: "absolute",
                              right: "10px",
                              top: "3px",
                            }}
                          >
                            <ArrowDownLeft />
                          </IconButton>
                          {showDescription[key] && (
                            <input
                              type="text"
                              className="form-control"
                              name={`${key}.description`}
                              value={formData[key].description}
                              onChange={handleChange}
                              style={{ marginTop: "8px" }}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="col-8 mt-4">
                    <div className="input-block local-forms">
                      <label>Attributes</label>
                      <input
                        type="text"
                        className="form-control"
                        name="duration"
                        value={formData.duration}
                        onChange={(e) =>
                          setFormData({ ...formData, duration: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  </div>
                </div>
              </div>

              <div className="submit-section " style={{ marginTop: "20px" }}>
                <button
                  type="submit"
                  onClick={handleAddEvent}
                  className="btn btn-primary-StartRecording submit-form me-2"
                >
                  Add Event
                </button>
                <button type="button" className="btn btn-danger cancel-form">
                  Save
                </button>
              </div>
            </form>
          </FormContainer>
        </div>
      </div>
    </div>
  );
};
const styles = {
  linkContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  linkItem: {
    flex: 1,
    textAlign: "center",
    border: "1px solid #f2f2f2", // Added border style
    padding: "10px", // Added padding for spacing
    margin: "5px", // Added margin for spacing between items
    borderRadius: "5px", // Optional: Add border-radius for rounded corners
    backgroundColor: "#f2f2f2", // Optional: Add background color
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "12px",
  },
};
export default LstTable;
