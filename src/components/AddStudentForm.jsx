import React, { useState, useContext } from 'react';
import { StudentContext } from '../Context/StudentContext';

const AddStudentForm = () => {
  const { addStudent, students } = useContext(StudentContext);
  const [formData, setFormData] = useState({ name: '', id: '', major: '', gpa: '', courses: '' });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.id || students.some(s => s.id === formData.id)) tempErrors.id = "ID must be unique and numeric";
    // if (!formData.major) tempErrors.major = "Major is required";
    if (formData.gpa < 0 || formData.gpa > 4) tempErrors.gpa = "GPA must be between 0-4.0";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addStudent({ ...formData, gpa: parseFloat(formData.gpa), avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=" + formData.name });
      setFormData({ name: '', id: '', major: '', gpa: '', courses: '' });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000); 
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px' }}>
      <h3>Add New Student</h3>
      {showSuccess && <p style={{ color: 'green' }}>Student added successfully!</p>}
      
      <input type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
      {errors.name && <small style={{ color: 'red' }}>{errors.name}</small>}
      
      <input type="text" placeholder="Student ID" value={formData.id} onChange={(e) => setFormData({...formData, id: e.target.value})} />
      {errors.id && <small style={{ color: 'red' }}>{errors.id}</small>}
      
      <input type="number" step="0.1" placeholder="GPA" value={formData.gpa} onChange={(e) => setFormData({...formData, gpa: e.target.value})} />
      {errors.gpa && <small style={{ color: 'red' }}>{errors.gpa}</small>}
      
      <button type="submit">Register Student</button>
    </form>
  );
};

export default AddStudentForm;