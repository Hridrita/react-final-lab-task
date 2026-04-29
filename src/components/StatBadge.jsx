import React from 'react';
import PropTypes from 'prop-types';

const StatBadge = ({ label, value }) => {
  return (
    <div style={{ margin: '8px 0', fontSize: '14px' }}>
      <span style={{ fontWeight: 'bold', color: '#555' }}>{label}: </span>
      <span style={{ color: 'var(--primary-color)' }}>{value}</span>
    </div>
  );
};

StatBadge.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default StatBadge;