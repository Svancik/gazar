import React from "react";
import "./hero.scss";

export const Hero = () => {
  return (
    <div className="heroWrap">
      <video
        className="videoElement"
        loop
        autoPlay
        muted
        width="300px"
        height="530px"
      >
        <source
          src={require(`../../media/vlaknoZarovky.mp4`)}
          type="video/mp4"
        />
      </video>
      <div className="heroAboutWrapTitle">
        <h1>GAZAR</h1>
        <h2>GROUP</h2>
      </div>

      <div className="heroAboutWrapText">
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
      </div>
    </div>
  );
};
