import React, { useState } from 'react';
import styled from 'styled-components';
import { ExternalLink, X } from 'lucide-react';
import { motion } from 'framer-motion';

const PublicationCard = ({ publication, index, colorClasses }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showStatusDialog, setShowStatusDialog] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const handleCardClick = () => {
    if (isMobile) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleReadPaperClick = (e) => {
    e.preventDefault();
    if (publication.link === '#') {
      setShowStatusDialog(true);
    } else {
      window.open(publication.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <StyledWrapper>
      {/* Status Dialog */}
      {showStatusDialog && (
        <div className="dialog-overlay" onClick={() => setShowStatusDialog(false)}>
          <motion.div
            className="status-dialog"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
          >
            {/* Close Button */}
            <button
              className="dialog-close-btn"
              onClick={() => setShowStatusDialog(false)}
            >
              <X size={20} />
            </button>

            {/* Dialog Content */}
            <div className="dialog-content">
              <h3 className="dialog-title">{publication.title}</h3>
              
              {/* Status Section */}
              <div className="dialog-section">
                <p className="dialog-label">Publication Status</p>
                <p className="dialog-status">{publication.status}</p>
              </div>

              {/* DOI Section */}
              <div className="dialog-section">
                <p className="dialog-label">DOI</p>
                <p className="dialog-doi">{publication.doi}</p>
              </div>

              {/* Info Text */}
              <p className="dialog-info-text">
                This publication is currently in {publication.status.toLowerCase()}. The DOI will be updated once the paper is fully published online.
              </p>
            </div>
          </motion.div>
        </div>
      )}

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
                <button
                  onClick={handleReadPaperClick}
                  className="read-paper-btn"
                >
                  <ExternalLink className="icon" size={14} />
                  <span>{publication.link === '#' ? 'View Status' : 'Read Paper'}</span>
                </button>
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

  /* Dialog Overlay */
  .dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  /* Status Dialog */
  .status-dialog {
    position: relative;
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%);
    border: 2px solid rgba(0, 217, 255, 0.4);
    border-radius: 16px;
    padding: 2rem;
    max-width: 500px;
    width: 90%;
    box-shadow: 0 0 60px rgba(0, 217, 255, 0.3), inset 0 0 40px rgba(0, 217, 255, 0.1);
  }

  .dialog-close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(0, 217, 255, 0.15);
    border: 1px solid rgba(0, 217, 255, 0.3);
    color: #00d9ff;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(0, 217, 255, 0.3);
      border-color: rgba(0, 217, 255, 0.6);
      transform: rotate(90deg);
    }
  }

  .dialog-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .dialog-title {
    font-size: 1.3rem;
    font-weight: 700;
    color: #00d9ff;
    margin: 0;
    line-height: 1.4;
  }

  .dialog-section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    background: rgba(0, 217, 255, 0.08);
    border: 1px solid rgba(0, 217, 255, 0.2);
    border-radius: 10px;
  }

  .dialog-label {
    font-size: 0.85rem;
    font-weight: 700;
    color: rgba(0, 217, 255, 0.6);
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.8px;
  }

  .dialog-status {
    font-size: 1rem;
    font-weight: 700;
    color: #4ade80;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .dialog-doi {
    font-size: 0.95rem;
    font-weight: 600;
    color: #00d9ff;
    margin: 0;
    word-break: break-all;
  }

  .dialog-info-text {
    font-size: 0.9rem;
    color: rgba(0, 217, 255, 0.75);
    margin: 0;
    line-height: 1.6;
    font-style: italic;
    padding: 1rem;
    background: rgba(0, 217, 255, 0.05);
    border-left: 3px solid rgba(0, 217, 255, 0.4);
    border-radius: 6px;
  }

  @media (max-width: 640px) {
    .status-dialog {
      padding: 1.5rem;
      width: 95%;
    }

    .dialog-title {
      font-size: 1.1rem;
    }

    .dialog-section {
      padding: 0.8rem;
    }

    .dialog-label {
      font-size: 0.75rem;
    }

    .dialog-status {
      font-size: 0.9rem;
    }

    .dialog-doi {
      font-size: 0.85rem;
    }

    .dialog-info-text {
      font-size: 0.8rem;
      padding: 0.8rem;
    }
  }
`;

export default PublicationCard;
