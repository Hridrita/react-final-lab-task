// src/components/StudentCard.js
import React from 'react';
import PropTypes from 'prop-types';
import './StudentCard.css';

const StudentCard = ({ name, id, avatar, gpa, major }) => {
  return (
    <div className="student-card">
      <img src={avatar} alt={name} className="student-avatar" />
      <div className="student-info">
        <h3>{name}</h3>
        <p><strong>ID:</strong> {id}</p>
        <p><strong>Major:</strong> {major}</p>
        <p><strong>GPA:</strong> {gpa}</p>
      </div>
    </div>
  );
};

// PropTypes Validation (Task 5 এর জন্য গুরুত্বপূর্ণ)
StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  gpa: PropTypes.number.isRequired,
  major: PropTypes.string.isRequired,
};

export default StudentCard;