import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'; // আইকন ইম্পোর্ট করলাম
import CourseTag from './CourseTag';
import StatBadge from './StatBadge';
import './StudentCard.css';

const StudentCard = ({ name, id, avatar, gpa, major, onFavToggle }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggle = () => {
    const nextFavoriteStatus = !isFavorite;
    setIsFavorite(nextFavoriteStatus);
    
    if (onFavToggle) {
      onFavToggle(nextFavoriteStatus);
    }
  };

  return (
    <div className={`student-card ${isFavorite ? 'favorite' : ''}`}>
      <div className="card-header" style={{ textAlign: 'right', padding: '5px' }}>
        <button 
          onClick={handleToggle}
          style={{ 
            background: 'none', 
            border: 'none', 
            fontSize: '26px', 
            cursor: 'pointer',
            color: isFavorite ? '#e74c3c' : '#bdc3c7',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          {/* টগল লজিক অনুযায়ী আইকন চেঞ্জ হবে */}
          {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
      </div>

      <img src={avatar} alt={name} className="student-avatar" />
      <h3>{name}</h3>
      
      <StatBadge label="ID" value={id} />
      <StatBadge label="Major" value={major} />
      <StatBadge label="GPA" value={gpa} />

      <div style={{ marginTop: '10px' }}>
        <CourseTag courseName="Web Tech" color="#4a90e2" />
        <CourseTag courseName="HCI" color="#f39c12" />
      </div>
    </div>
  );
};

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  gpa: PropTypes.number.isRequired,
  major: PropTypes.string.isRequired,
  onFavToggle: PropTypes.func
};

export default StudentCard;