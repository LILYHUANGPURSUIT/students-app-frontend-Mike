import React from 'react';
import "./Container.css";

function Container({center, children}) {
  let classNames = ["container"];
  if(center) {
    classNames.push("container--center");
  }

  console.log(`<Container /> rendered!`);
  return (
    <div className={classNames.join(" ")}>{children}</div>
  ) 
}

export default Container