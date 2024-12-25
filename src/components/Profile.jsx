import React from 'react';
import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats, scale = 1 }) => {
  // Условное применение класса для изменения масштаба
  const profileClass = scale === 1 ? css.profileScaled : css.profileScaledSmall;

  return (
    <div className={`${css.profile} ${profileClass}`}>
      <div className={css.description}>
        <img src={image} alt={`${name}'s avatar`} className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statItem}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.statItem}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.statItem}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
  scale: PropTypes.number,
};

export default Profile;
