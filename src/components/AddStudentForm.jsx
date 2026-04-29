import React, { useState, useContext } from 'react';
import { StudentContext } from '../Context/StudentContext';
import { toast } from 'react-toastify'; 

const AddStudentForm = () => {
  const { addStudent, students } = useContext(StudentContext);
  const [formData, setFormData] = useState({ name: '', id: '', major: '', gpa: '', courses: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    
    
    if (!formData.name) tempErrors.name = "Name is required";
    
    
    const idRegex = /^\d+-\d+$/; 
    
    if (!formData.id) {
        tempErrors.id = "ID is required";
    } else if (!idRegex.test(formData.id)) {
        tempErrors.id = "Invalid format! Use '23-1' or '22-101' style";
    } else if (students.some(s => s.id === formData.id)) {
        tempErrors.id = "This ID already exists";
    }

    
    if (formData.gpa === '' || formData.gpa < 0 || formData.gpa > 4) {
        tempErrors.gpa = "GPA must be between 0-4.0";
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addStudent({ 
        ...formData, 
        gpa: parseFloat(formData.gpa), 
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=" + formData.name 
      });

      
      toast.success(`${formData.name} added successfully!`);

      
      setFormData({ name: '', id: '', major: '', gpa: '', courses: '' });
      setErrors({});
    } else {
      
      toast.error("Please fix the errors in the form");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-student-form">
      <h3>Add New Student</h3>
      
      <div className="form-group">
        <input 
          type="text" 
          placeholder="Full Name" 
          value={formData.name} 
          onChange={(e) => setFormData({...formData, name: e.target.value})} 
        />
        {errors.name && <small className="error-text">{errors.name}</small>}
      </div>
      
      <div className="form-group">
        <input 
          type="text" 
          placeholder="Student ID" 
          value={formData.id} 
          onChange={(e) => setFormData({...formData, id: e.target.value})} 
        />
        {errors.id && <small className="error-text">{errors.id}</small>}
      </div>
      
      <div className="form-group">
        <input 
          type="number" 
          step="0.1" 
          placeholder="GPA" 
          value={formData.gpa} 
          onChange={(e) => setFormData({...formData, gpa: e.target.value})} 
        />
        {errors.gpa && <small className="error-text">{errors.gpa}</small>}
      </div>
      
      <button type="submit">Register Student</button>
    </form>
  );
};

export default AddStudentForm;