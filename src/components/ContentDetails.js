import React from 'react';
import './ContentDetails.css';

const ContentDetails = ({ selectedContent }) => {
  return (
    <div className="content-details">
      <div className="content-media">
        {/* Verifica si el contenido es un video */}
        {selectedContent.type === 'video' ? (
          <iframe
            title={selectedContent.title}
            width="560"
            height="315"
            src={selectedContent.videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          // Si no es un video, muestra una imagen
          <img src={selectedContent.imageUrl} alt={selectedContent.title} />
        )}
      </div>
      <div className="content-summary">
        <div className="content-info">
          <h2>{selectedContent.title}</h2>
          <p>{selectedContent.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentDetails;

