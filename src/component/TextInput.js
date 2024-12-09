import React from "react";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const TextInput = (props) => {
  const {
    inputType,
    inputRef,
    controlId,
    label,
    type,
    name,
    value,
    onChange,
    onBlur,
    placeholder,
    formGroupClassName,
    inputClassName,
    touched,
    errors,
    required,
    disabled,
    restProps,
    rightIcon,
    tooltip,
    maxLength,
    errorClass,
    autoComplete = "on",
  } = props;

  return (
    <Form.Group as={Col} className={formGroupClassName} controlId={controlId}>
      {label && (
        <Form.Label>
          <span>{label}&nbsp;{required && <span className="asterisk">*</span>}</span>
          {tooltip && (
            <span className="tooltip ">
              {tooltip.icon}
              <span className="tooltiptext">{tooltip.title}</span>
            </span>
          )}
        </Form.Label>
      )}
      {rightIcon ? (
        <div className="input-group">
          <Form.Control
            type={type}
            ref={inputRef}
            name={name}
            value={value}
            autoComplete={autoComplete}
            onChange={onChange}
            onBlur={onBlur}
            isValid={touched && !errors}
            isInvalid={touched && !!errors}
            placeholder={placeholder}
            className={inputClassName}
            disabled={disabled}
            as="input"
            {...restProps}
          />
          <span
            className="input-group-text eslint-input-group-text"
            onClick={rightIcon.onRightIconPress}
            role="button"
            aria-hidden
          >
            {rightIcon.state ? rightIcon.toggleON : rightIcon.toggleOff}
          </span>
          <Form.Control.Feedback type="invalid" className={`${errors?.length > 40 ? "password-error" : ""}`}>
            {touched && errors}
          </Form.Control.Feedback>
        </div>
      ) : (
        <>
          <div className="input-group">
            <Form.Control
              type={type}
              ref={inputRef}
              name={name}
              value={value}
              autoComplete={autoComplete}
              onChange={onChange}
              onBlur={onBlur}
              isValid={touched && !errors}
              isInvalid={touched && !!errors}
              placeholder={placeholder}
              className={inputClassName}
              disabled={disabled}
              maxLength={maxLength}
              as={inputType ? inputType : "input"}
              {...restProps}
            />
            <Form.Control.Feedback type="invalid" className={errorClass}>
              {touched && errors}
            </Form.Control.Feedback>
          </div>
        </>
      )}
    </Form.Group>
  );
};



export default TextInput;
