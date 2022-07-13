import React from "react";
import Links from "../components/Links"
import user from "../data/user"


function About(props) {
  return (
    <div id="about">
       <h2>About Me</h2>
       
       
       {props.bio!=null ? (
        <p>{props.bio}</p>
      ) : (
      ''
      )}
       
       
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links links={user.links}/>

    </div>
  );
}

export default About;
