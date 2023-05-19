import React from "react";
import REACTIMG from "../images/reactt.png";

export default function Main() {
  return (
    <main>
      <h1 className="main--title">
        Fun facts about <span>React</span>{" "}
      </h1>
      <article class="container">
        <img src={REACTIMG} class="react_img" alt="react icon with gradient" />
        <ul className="main--facts">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </article>
    </main>
  );
}
