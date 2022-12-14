import React from "react";
import profile from "../../images/RebekkaSquare.png";

export default function About() {
  return (
    <div className="content__container">
      <div className="about__container">
        <h1>About</h1>
        <p>
          Hi, my name is Rebekka Rustad. I am a front-end developer from Oslo,
          Norway. I finished my Higher Professional Degree at Noroff School of
          technology and digital media in December 2022, and I am ready for new
          adventures.
        </p>
        <p>
          I have always been fascinated by problem-solving, and I started with
          simple HTML and CSS all the way back in 2008 by redesigning all my
          friends' blogs.
        </p>
        <p>
          As an adventurous person, I am always up for a new challenge. I am a
          well-organized, independent employee with great attention to detail. I
          love traveling, watching movies, and reading good books.
        </p>
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
}
