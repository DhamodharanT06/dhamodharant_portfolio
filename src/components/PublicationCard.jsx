import React, { useState } from 'react';
import styled from 'styled-components';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const PublicationCard = ({ publication, index, colorClasses }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const handleCardClick = () => {
    if (isMobile) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <StyledWrapper>
      <motion.div
        initial={{ y: 15, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: index * 0.06 }}
        viewport={{ once: true }}
        className="book-container"
        onClick={handleCardClick}
      >
        <div className={`book ${isFlipped ? 'flipped' : ''}`}>
          {/* Front Face - Publication Preview */}
          <div className="front-content">
            <h3 className="title">{publication.title}</h3>
            <p className="subtitle">{isMobile ? 'Click Me' : 'Hover Me'}</p>
          </div>

          {/* Cover/Back Face - Full Details */}
          <div className="cover">
            <div className="cover-content">
              {/* Title at the top */}
              <div className="cover-title-section">
                <h3 className="cover-title">{publication.title}</h3>
              </div>

              {/* Status and Volume - Row */}
              <div className="row-flex">
                <div className="col-item">
                  <p className="detail-label">Status</p>
                  <p className="cover-status">{publication.status}</p>
                </div>
                <div className="col-item">
                  <p className="detail-label">Volume</p>
                  <p className="detail-value">{publication.volume}</p>
                </div>
              </div>

              {/* Year and Journal - Row */}
              <div className="row-flex">
                <div className="col-item">
                  <p className="detail-label">Year</p>
                  <p className="detail-value">{publication.year}</p>
                </div>
                <div className="col-item">
                  <p className="detail-label">Journal</p>
                  <p className="detail-value-sm">{publication.journal}</p>
                </div>
              </div>

              {/* Authors - Full Row */}
              <div className="row-full">
                <p className="detail-label">Authors</p>
                <p className="detail-value-xs">{publication.authors}</p>
              </div>

              {/* About - Full Row */}
              {publication.about && (
                <div className="row-full">
                  <p className="detail-label">About</p>
                  <p className="detail-about">{publication.about}</p>
                </div>
              )}

              {/* Read Paper Button */}
              <div className="button-container">
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-paper-btn"
                >
                  <ExternalLink className="icon" size={14} />
                  <span>Read Paper</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .book-container {
    perspective: 1200px;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .book {
    position: relative;
    border-radius: 10px;
    width: 100%;
    height: 450px;
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(10, 10, 10, 0.95) 100%);
    box-shadow: 0 0 20px rgba(0, 217, 255, 0.15), inset 0 0 20px rgba(0, 217, 255, 0.05);
    border: 1px solid rgba(0, 217, 255, 0.2);
    transform-style: preserve-3d;
    perspective: 2000px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      box-shadow: 0 0 30px rgba(0, 217, 255, 0.25), inset 0 0 30px rgba(0, 217, 255, 0.08);
      border-color: rgba(0, 217, 255, 0.4);
    }

    &:hover .front-content {
      transform: rotateY(-85deg);
      opacity: 0;
    }

    &:hover .cover {
      transform: rotateY(0deg);
    }

    &.flipped .front-content {
      transform: rotateY(-85deg);
      opacity: 0;
    }

    &.flipped .cover {
      transform: rotateY(0deg);
    }
  }

  .front-content {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    text-align: center;
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%);
    transition: all 0.5s ease;
    transform-origin: left;
    transform-style: preserve-3d;
  }

  .title {
    font-size: 1.1rem;
    font-weight: 700;
    color: #00d9ff;
    margin: 0;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .subtitle {
    font-size: 0.75rem;
    color: rgba(0, 217, 255, 0.6);
    margin-top: 0.5rem;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(0, 217, 255, 0.12) 0%, rgba(0, 217, 255, 0.06) 100%);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(0, 217, 255, 0.3);
    cursor: pointer;
    transition: all 0.5s ease;
    transform-origin: left;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 20px rgba(0, 217, 255, 0.1);
    overflow: hidden;
  }

  .cover-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1.2rem;
    text-align: left;
    gap: 0.8rem;
    overflow-y: auto;
    overflow-x: hidden;
    /* place scrollbar on left: set container to RTL then force children back to LTR */
    direction: rtl;

    /* ensure all inner content keeps normal left-to-right flow */
    & > * {
      direction: ltr;
    }

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      background: rgba(0, 217, 255, 0.1);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(0, 217, 255, 0.4);
      border-radius: 10px;

      &:hover {
        background: rgba(0, 217, 255, 0.6);
      }
    }
  }

  /* Cover Title Section */
  .cover-title-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid rgba(0, 217, 255, 0.2);
    margin-bottom: 0.6rem;
  }

  .cover-title {
    font-size: 0.85rem;
    font-weight: 700;
    color: #00d9ff;
    margin: 0;
    line-height: 1.35;
    word-wrap: break-word;
    word-break: break-word;
  }

  /* Row Layouts */
  .row-flex {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    width: 100%;
  }

  .col-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .row-full {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    width: 100%;
  }

  /* Labels and Values */
  .detail-label {
    font-size: 0.65rem;
    font-weight: 700;
    color: rgba(0, 217, 255, 0.6);
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .cover-status {
    font-size: 0.75rem;
    font-weight: 700;
    color: #4ade80;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.8px;
  }

  .detail-value {
    font-size: 0.8rem;
    font-weight: 600;
    color: #00d9ff;
    margin: 0;
  }

  .detail-value-sm {
    font-size: 0.73rem;
    font-weight: 500;
    color: rgba(0, 217, 255, 0.8);
    margin: 0;
    line-height: 1.3;
    max-height: 2.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .detail-value-xs {
    font-size: 0.68rem;
    font-weight: 400;
    color: rgba(0, 217, 255, 0.75);
    margin: 0;
    line-height: 1.35;
    word-wrap: break-word;
    word-break: break-word;
  }

  .detail-about {
    font-size: 0.68rem;
    font-weight: 400;
    color: rgba(0, 217, 255, 0.75);
    margin: 0;
    line-height: 1.4;
    word-wrap: break-word;
    word-break: break-word;
    font-style: italic;
  }

  /* Button Container */
  .button-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: auto;
    padding-top: 0.6rem;
    border-top: 1px solid rgba(0, 217, 255, 0.2);
  }

  .read-paper-btn {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.5rem 0.9rem;
    background: rgba(0, 217, 255, 0.1);
    border: 1px solid rgba(0, 217, 255, 0.4);
    border-radius: 6px;
    color: rgba(0, 217, 255, 0.9);
    font-size: 0.7rem;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(0, 217, 255, 0.2);
      border-color: rgba(0, 217, 255, 0.6);
      color: #00d9ff;
    }
  }

  .icon {
    width: 13px;
    height: 13px;
  }

  /* Tablet Responsive */
  @media (max-width: 1024px) {
    .book {
      height: 340px;
    }

    .cover-content {
      padding: 1rem;
      gap: 0.7rem;
    }

    .detail-value {
      font-size: 0.75rem;
    }

    .detail-value-sm {
      font-size: 0.7rem;
    }

    .detail-value-xs {
      font-size: 0.65rem;
    }

    .detail-about {
      font-size: 0.65rem;
    }
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .book {
      height: 300px;
      cursor: pointer !important;
    }

    .title {
      font-size: 0.95rem;
    }

    .subtitle {
      font-size: 0.7rem;
    }

    .cover-content {
      padding: 0.9rem;
      gap: 0.6rem;
    }

    .row-flex {
      gap: 0.8rem;
    }

    .detail-label {
      font-size: 0.6rem;
    }

    .cover-status {
      font-size: 0.7rem;
    }

    .detail-value {
      font-size: 0.7rem;
    }

    .detail-value-sm {
      font-size: 0.65rem;
    }

    .detail-value-xs {
      font-size: 0.6rem;
    }

    .detail-about {
      font-size: 0.6rem;
    }

    .read-paper-btn {
      padding: 0.4rem 0.75rem;
      font-size: 0.65rem;
    }

    .icon {
      width: 12px;
      height: 12px;
    }
  }

  /* Small Mobile */
  @media (max-width: 640px) {
    .book {
      height: 280px;
      border-radius: 8px;
    }

    .front-content,
    .cover {
      border-radius: 8px;
    }

    .title {
      font-size: 0.85rem;
    }

    .subtitle {
      font-size: 0.65rem;
    }

    .cover-content {
      padding: 0.75rem;
      gap: 0.5rem;
    }

    .row-flex {
      gap: 0.6rem;
    }

    .detail-label {
      font-size: 0.55rem;
    }

    .cover-status {
      font-size: 0.65rem;
    }

    .detail-value {
      font-size: 0.65rem;
    }

    .detail-value-sm {
      font-size: 0.6rem;
    }

    .detail-value-xs {
      font-size: 0.55rem;
    }

    .detail-about {
      font-size: 0.55rem;
    }

    .read-paper-btn {
      padding: 0.35rem 0.6rem;
      font-size: 0.6rem;
      gap: 0.3rem;
    }

    .icon {
      width: 11px;
      height: 11px;
    }
  }
`;

export default PublicationCard;
