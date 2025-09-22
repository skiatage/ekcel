// AdminPanel.jsx
import React, { useState } from 'react';

const AdminPanel = ({ events, onAdd, onEdit, onDelete }) => {
  const [form, setForm] = useState({ title: '', date: '', location: '', description: '' });
  const [editingId, setEditingId] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (editingId) {
      onEdit({ ...form, id: editingId });
      setEditingId(null);
    } else {
      onAdd(form);
    }
    setForm({ title: '', date: '', location: '', description: '' });
  };

  const handleEdit = event => {
    setForm(event);
    setEditingId(event.id);
  };

  return (
    <div className="admin-panel">
      <h2>Admin Event Management</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
        <input name="date" value={form.date} onChange={handleChange} placeholder="Date" required />
        <input name="location" value={form.location} onChange={handleChange} placeholder="Location" required />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" required />
        <button type="submit">{editingId ? 'Update' : 'Add'} Event</button>
        {editingId && <button type="button" onClick={() => { setEditingId(null); setForm({ title: '', date: '', location: '', description: '' }); }}>Cancel</button>}
      </form>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <strong>{event.title}</strong> ({event.date}, {event.location})
            <button onClick={() => handleEdit(event)}>Edit</button>
            <button onClick={() => onDelete(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
