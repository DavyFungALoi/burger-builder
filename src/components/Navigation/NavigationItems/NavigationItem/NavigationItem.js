import React from "react";
import "./NavigationItem.css";

export default function NavigationItem(props) {
  return (
    <ul>
      <li className="NavigationItem">
        <a href={props.link}
        className={props.active ? 'active': null}
        >{props.children}</a>
      </li>
    </ul>
  );
}
