import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";


function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function removeBox(id) {
    setBoxes(boxes => {boxes.filter(b => b.id !== id)})
  }

  let renderBoxes = boxes.map(b => {
    return (
      <Box width={b.width}
        height={b.height}
        backgroundColor={b.backgroundColor}
        removeBox={removeBox}
        key={box.id}
        id={box.id} />
    )
  });

  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }


  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  )


}

export default BoxList