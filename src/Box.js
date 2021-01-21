import React from "react";
/* props:
  removeBox(function) */
function Box(props) {
  
  function handleClick() {
    props.removeBox(props.id);
  }
// props that had nothing to do with style. 
  return (
    <div>
      <div className="Box" style={props}> </div>
      <button onClick={handleClick}>Delete Box</button>
    </div>
  )
}



export default Box;

