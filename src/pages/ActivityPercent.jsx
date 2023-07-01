import React, { useState } from 'react';
import Modal from 'react-modal';
import "../styles/Activity.css"

const ComponentManager = () => {
  const [components, setComponents] = useState([]);
  const [newComponent, setNewComponent] = useState('');
  const [newComponentModalIsOpen, setNewComponentModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [selectedComponentIndex, setSelectedComponentIndex] = useState(null);
  const [updatedComponentName, setUpdatedComponentName] = useState('');
  const [updatedComponentPercentage, setUpdatedComponentPercentage] = useState('');
  const [totalPercentage, setTotalPercentage] = useState(0);

  const handleAddComponent = () => {
    setNewComponentModalIsOpen(true);
  };

  const handleNewComponentSubmit = () => {
    if (newComponent.trim() !== '' && updatedComponentPercentage.trim() !== '') {
      const newComponentObj = {
        name: newComponent,
        percentage: parseFloat(updatedComponentPercentage)
      };
      setComponents([...components, newComponentObj]);
      setNewComponent('');
      setUpdatedComponentPercentage('');
      setTotalPercentage(totalPercentage + parseFloat(updatedComponentPercentage));
      setNewComponentModalIsOpen(false);
    }
  };

  const openEditModal = (index) => {
    setSelectedComponentIndex(index);
    setUpdatedComponentName(components[index].name);
    setUpdatedComponentPercentage(components[index].percentage.toString());
    setEditModalIsOpen(true);
  };

  const closeEditModal = () => {
    setEditModalIsOpen(false);
    setSelectedComponentIndex(null);
    setUpdatedComponentName('');
    setUpdatedComponentPercentage('');
  };

  const handleEditComponentName = () => {
    if (selectedComponentIndex !== null && updatedComponentName.trim() !== '') {
      const updatedComponents = [...components];
      const updatedPercentage =
        totalPercentage - updatedComponents[selectedComponentIndex].percentage + parseFloat(updatedComponentPercentage);
      updatedComponents[selectedComponentIndex].name = updatedComponentName.trim();
      updatedComponents[selectedComponentIndex].percentage = parseFloat(updatedComponentPercentage);
      setComponents(updatedComponents);
      setTotalPercentage(updatedPercentage);
      closeEditModal();
    }
  };

  const handleDeleteComponent = (index) => {
    const deletedComponentPercentage = components[index].percentage;
    const updatedComponents = [...components];
    updatedComponents.splice(index, 1);
    setComponents(updatedComponents);
    setTotalPercentage(totalPercentage - deletedComponentPercentage);
  };

  return (
    <div className="component-manager">
      <button className="add-component-button" onClick={handleAddComponent}>
        Add Component
      </button>
      {components.length > 0 && (
        <table className="component-table">
          <thead>
            <tr>
              <th>Component Name</th>
              <th>Percentage</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {components.map((component, index) => (
              <tr key={index}>
                <td>{component.name}</td>
                <td>{component.percentage}%</td>
                <td>
                  <button className="edit-button" onClick={() => openEditModal(index)}>
                    Edit
                  </button>
                  <button className="delete-button" onClick={() => handleDeleteComponent(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <p>Total Percentage: {totalPercentage}%</p>

      <Modal
        isOpen={newComponentModalIsOpen}
        onRequestClose={() => setNewComponentModalIsOpen(false)}
        contentLabel="Add New Component"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <h2>Add New Component</h2>
          <input
            type="text"
            value={newComponent}
            onChange={(e) => setNewComponent(e.target.value)}
            placeholder="Enter component name"
            className="modal-input"
          />
          <input
            type="number"
            value={updatedComponentPercentage}
            onChange={(e) => setUpdatedComponentPercentage(e.target.value)}
            placeholder="Enter percentage"
            className="modal-input"
          />
          <button className="modal-button" onClick={handleNewComponentSubmit}>
            Add
          </button>
          <button className="modal-button" onClick={() => setNewComponentModalIsOpen(false)}>
            Cancel
          </button>
        </div>
      </Modal>
      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={closeEditModal}
        contentLabel="Edit Component"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <h2>Edit Component</h2>
          <input
            type="text"
            value={updatedComponentName}
            onChange={(e) => setUpdatedComponentName(e.target.value)}
            placeholder="Enter component name"
            className="modal-input"
          />
          <input
            type="number"
            value={updatedComponentPercentage}
            onChange={(e) => setUpdatedComponentPercentage(e.target.value)}
            placeholder="Enter percentage"
            className="modal-input"
          />
          <button className="modal-button" onClick={handleEditComponentName}>
            Save
          </button>
          <button className="modal-button" onClick={closeEditModal}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ComponentManager;