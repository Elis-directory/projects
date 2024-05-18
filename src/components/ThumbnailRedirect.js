import React from 'react';
import PropTypes from 'prop-types';
import './ThumbnailRedirect.css';


const ThumbnailRedirect = ({ websiteUrl, previewImageUrl }) => {
  return (
    <div className="thumbnail-container">
      <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
        <div className="thumbnail">
          <img
            src={previewImageUrl}
            alt="Website Preview"
            className="thumbnail-image"
          />
        </div>
		<div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <p>Click to visit</p>
</div>
      </a>
    </div>
  );
};

ThumbnailRedirect.propTypes = {
  websiteUrl: PropTypes.string.isRequired,
  previewImageUrl: PropTypes.string.isRequired,
};

export default ThumbnailRedirect;
