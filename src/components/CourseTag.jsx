import React from 'react';
import PropTypes from 'prop-types';

const CourseTag = ({ courseName, color }) => {
  const tagStyle = {
    backgroundColor: color || '#e0e0e0',
    color: '#fff',
    padding: '5px 12px',
    borderRadius: '15px',
    fontSize: '12px',
    margin: '4px',
    display: 'inline-block',
    fontWeight: 'bold'
  };

  return <span style={tagStyle}>{courseName}</span>;
};

CourseTag.propTypes = {
  courseName: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default CourseTag;