import React from "react";

function Box(props) {

  function handleClick() {
    props.removeBox(props.id);
  }

  return (
    <div>
      <div className="Box" style={props}> </div>
      <button onClick={handleClick}>Delete Box</button>
    </div>
  )
}



export default Box;

