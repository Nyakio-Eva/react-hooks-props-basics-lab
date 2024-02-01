import React from "react";
import Links from "./Links";


function About(props) {
  console.log(props)
  const github = "https://github.com/liza"
  const linkedin = "https://www.linkedin.com/in/liza/"

  const displayBio = props.bio && props.bio.trim() !== '';

  
  return (
    <div id="about">
      <h2>About Me</h2>
      {displayBio && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={github} linkedin={linkedin}/>
    </div>
  );
}

export default About;
