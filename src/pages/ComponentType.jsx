import React, { useState } from 'react';
import Modal from 'react-modal';

import "../styles/ComponentType.css"; // Import the CSS file

const ComponentType = () => {
  const [components, setComponents] = useState([]);
  const [newComponent, setNewComponent] = useState('');
  const [newComponentModalIsOpen, setNewComponentModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [selectedComponentIndex, setSelectedComponentIndex] = useState(null);
  const [updatedComponentName, setUpdatedComponentName] = useState('');

  const handleAddComponent = () => {
    setNewComponentModalIsOpen(true);
  };

  const handleNewComponentSubmit = () => {
    if (newComponent.trim() !== '') {
      const newComponentObj = {
        name: newComponent,
        crudOptions: {
          create: true,
          read: true,
          update: true,
          delete: true
        }
      };
      setComponents([...components, newComponentObj]);
      setNewComponent('');
      setNewComponentModalIsOpen(false);
    }
  };

  const openEditModal = (index) => {
    setSelectedComponentIndex(index);
    setUpdatedComponentName(components[index].name);
    setEditModalIsOpen(true);
  };

  const closeEditModal = () => {
    setEditModalIsOpen(false);
    setSelectedComponentIndex(null);
    setUpdatedComponentName('');
  };

  const handleEditComponentName = () => {
    if (selectedComponentIndex !== null && updatedComponentName.trim() !== '') {
      const updatedComponents = [...components];
      updatedComponents[selectedComponentIndex].name = updatedComponentName.trim();
      setComponents(updatedComponents);
      closeEditModal();
    }
  };

  const handleDeleteComponent = (index) => {
    const updatedComponents = [...components];
    updatedComponents.splice(index, 1);
    setComponents(updatedComponents);
  };

  return (
    <div className="component-manager">
      <button className="add-component-button" onClick={handleAddComponent}>Add Component</button>
      {components.map((component, index) => (
        <div className="component" key={index}>
          <h3>{component.name}</h3>
          
          <button className="edit-button" onClick={() => openEditModal(index)}>Edit</button>
          <button className="delete-button" onClick={() => handleDeleteComponent(index)}>Delete</button>
        </div>
      ))}

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
          />
          <button className="modal-button" onClick={handleNewComponentSubmit}>Add</button>
          <button className="modal-button" onClick={() => setNewComponentModalIsOpen(false)}>Cancel</button>
        </div>
      </Modal>

      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={closeEditModal}
        contentLabel="Edit Component Name"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <h2>Edit Component Name</h2>
          <input
            type="text"
            value={updatedComponentName}
            onChange={(e) => setUpdatedComponentName(e.target.value)}
          />
          <button className="modal-button" onClick={handleEditComponentName}>Save</button>
          <button className="modal-button" onClick={closeEditModal}>Cancel</button>
        </div>
      </Modal>
    </div>
  );
};

export default ComponentType;