import React, { useState } from 'react';
import "../styles/Estimation.css"

const ClientForm = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    clientAddress: '',
    email: '',
    createdBy: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form submission here (e.g., send data to a server)
    console.log(formData);
    // Show the popup
    setShowPopup(true);
    // Reset the form after submission
    setFormData({
      clientName: '',
      clientAddress: '',
      email: '',
      createdBy: '',
    });
  };

  const handlePopupClose = () => {
    // Hide the popup
    setShowPopup(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="client-form">
        <div>
          <center>
            <p>Set client details</p>
          </center>
        </div>
        <div>
          <label htmlFor="clientName">Client Name: </label>
          <input
            type="text"
            id="clientName"
            name="clientName"
            value={formData.clientName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="clientAddress">Client Address: </label>
          <textarea
            id="clientAddress"
            name="clientAddress"
            value={formData.clientAddress}
            onChange={handleChange}
            required
            rows={4} // You can set the number of rows you want to display
            cols={50}
          />
        </div>
        <div>
          <label htmlFor="email">Email ID: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="createdBy">Created By:</label>
          <input
            type="text"
            id="createdBy"
            name="createdBy"
            value={formData.createdBy}
            onChange={handleChange}
            required
          />
        </div>
        <center>
          <button type="submit">Submit</button>
        </center>
      </form>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            
            <p>Client Details Updated</p>
            <button onClick={handlePopupClose}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientForm;