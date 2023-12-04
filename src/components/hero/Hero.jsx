import React from "react";
import "./hero.scss";


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

  return (
    <div className="heroWrap">
      <video
        className="videoElement"
        loop
        autoPlay
        muted
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
            <div className="heroCategoryBox">Optika</div>
            <div className="heroCategoryBox">Zdravotnictví</div>
            <div className="heroCategoryBox">Průmysl</div>
          </div>
        </div>
      </div>

    
    </div>
  );
};
