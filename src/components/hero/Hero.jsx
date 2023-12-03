import React from "react";
import "./hero.scss";
import { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import CheckIcon from "@mui/icons-material/Check";
import Check from "@mui/icons-material/Check";

/*TODO: 
  - Udělat kontaktní formulář jako objekt
  - Srovnat kontaktní formulář vnitřní objekty k jedné straně (aby nebyli různé marginy při zoomu)
  - Udělat verzi pro 
    a) Full HD
    b) Laptop
    c) Tablet
    d) Mobil
*/

export const Hero = () => {
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

  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, such as sending data to a server.

    console.log("Form submitted:", formData);
  };

  return (
    <div className="heroWrap">
      <video
        className="videoElement"
        loop
        autoPlay
        muted
        width="355px"
        height="630px"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <source
          src={require(`../../media/vlaknoZarovky.mp4`)}
          type="video/mp4"
        />
      </video>
      <div className="heroAboutWrapTitle">
        <h1 data-aos="fade-right" data-aos-duration="1200">
          GAZAR
        </h1>
        <h2 data-aos="fade-left" data-aos-duration="1500">
          GROUP
        </h2>
      </div>

      <div
        className="heroAboutWrapText"
        data-aos="flip-up"
        data-aos-duration="1800"
      >
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          cupiditate reiciendis perspiciatis! Error quos recusandae quis
          delectus minus tempora excepturi culpa nihil vitae sint eligendi, aut
          totam veniam atque optio veritatis voluptates animi nobis odio natus
          magni? Aliquid vitae soluta quisquam dolorum obcaecati temporibus ad
          aliquam eum eos doloremque, ducimus commodi dolores dicta similique ex
          repellendus debitis nihil voluptates omnis! Impedit, distinctio
          beatae. Deleniti id dolor ea nulla vero inventore, veritatis rerum ut
          tenetur pariatur? Accusantium natus, eius maxime recusandae earum
          deserunt illo ex sint eos optio adipisci voluptates, quam cupiditate
          doloremque minus nulla ducimus necessitatibus voluptatum qui nisi!
          Ullam quia neque asperiores minima fugit, suscipit accusantium tempore
          quisquam excepturi natus, voluptate dignissimos praesentium fuga
          recusandae?
        </span>
        <br /> <br />
        <div className="heroAboutLinks">
          <span>Dodáváme světelné zdroje do několika odvětví:</span>
          <div className="heroTextCategories">
            <div className="heroTextBox">Optika</div>
            <div className="heroTextBox">Zdravotnictví</div>
            <div className="heroTextBox">Průmysl</div>
          </div>
        </div>
      </div>

      <div
        className="heroContactForm"
        data-aos="fade-down"
        data-aos-duration="3000"
      >
        <div className="contactFormText">
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
              cols="51"
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
    </div>
  );
};
