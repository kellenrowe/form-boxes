import React, {useState} from "react";

function NewBoxForm(props) {
  const initialState = { width: "", height: "", backgroundColor:"" };
  const [formData, setFormData] = useState(initialState);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    console.log("enter handle submit");
    evt.preventDefault();
    console.log("formdata", formData);
    props.addBox(formData);
    setFormData(initialState);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height">Height</label>
      <input name="height" onChange={handleChange} value={formData.height}/>

      <label htmlFor="width">Width</label>
      <input name="width" onChange={handleChange} value={formData.width}/>

      <label htmlFor="backgroundColor"> Background Color</label>
      <input name="backgroundColor"onChange={handleChange} value={formData.backgroundColor}/>

      <button>Add Box!</button>
    </form>
  )
}



export default NewBoxForm;