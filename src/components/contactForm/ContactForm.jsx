import React from "react";
import { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import Check from "@mui/icons-material/Check";
import "./contactForm.scss";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div
      className="heroContactForm"
      data-aos="fade-down"
      data-aos-duration="3000"
    >
      <div className="contactFormHeader">
        <MailIcon
          className="mui"
          sx={{
            width: "28px",
            height: "28px",
          }}
        />
        <div className="contactUs">
          <span>Kontaktujte nás</span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <label>
            Jméno
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <br />

        <label>
          <textarea
            rows="8"
            cols="52.5"
            name="message"
            placeholder="Zadejte technické zadání vašeho požadavku. Jaký typ svítidla hledáte? Kolik kusů? Do jakého termínu?"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit" className="heroFormSubmitBtn">
          {" "}
          <Check
            className="mui"
            sx={{
              width: "24px",
              height: "24px",
            }}
          />{" "}
          <div className="submitBtnText">Odeslat</div>
        </button>
      </form>
    </div>
  );
};
