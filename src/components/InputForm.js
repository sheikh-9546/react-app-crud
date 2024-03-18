import React, { useState } from 'react';

const InputForm = ({ addUser, updateUser, initialData }) => {
  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.id) {
      updateUser(formData);
    } else {
      addUser(formData);
    }
    
    // Reset form data
    setFormData(Object.fromEntries(Object.keys(initialData).map(key => [key, ''])));
  };

  // Define input fields
  const inputFields = ['first_name', 'last_name', 'email', 'phone', 'country', 'law_firm_id'];

  return (
    <form onSubmit={handleSubmit}>
      {inputFields.map(field => (
        <label key={field}>
          {field.replace('_', ' ')}:
          <input type="text" name={field} value={formData[field]} onChange={handleInputChange} />
        </label>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
