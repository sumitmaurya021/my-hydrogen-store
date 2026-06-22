import { useState, useRef, useEffect } from 'react';
import '~/assets/css/TrainingFeatures.css';
import { trainingFeaturesData } from '~/data/trainingFeaturesData';

export function TrainingFeatures({
  title = "Training that moves with you",
  subtitle = "Peloton IQ takes the guesswork out of workouts with customised plans, personal insights, and a training experience that revolves around your goals.",
  items = trainingFeaturesData
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeIndex) {
          video.currentTime = 0;
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.log("Autoplay was prevented by browser:", error);
            });
          }
          setIsPlaying(true);
        } else {
          video.pause();
        }
      }
    });
  }, [activeIndex]);

  const handleItemClick = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  const togglePlay = () => {
    const video = videoRefs.current[activeIndex];
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="training-features-section">
      <div className="training-features-container">
        <div className="training-header">
        <h2 className="training-title">{title}</h2>
        <p className="training-subtitle">{subtitle}</p>
      </div>

      <div className="training-content-wrapper">
        <div className="training-accordion">
          {items.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <div 
                key={item.id} 
                className={`accordion-item ${isActive ? 'active' : ''}`}
                onClick={() => handleItemClick(index)}
              >
                <div className="accordion-header">
                  <div className="accordion-title-wrap">
                    <span className="accordion-number">{index + 1}</span>
                    <span className="accordion-title">{item.title}</span>
                  </div>
                  <svg 
                    className="accordion-icon" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                <div className="accordion-body">
                  <p className="accordion-desc">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="training-media-container">
          {items.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <div 
                key={`media-${item.id}`} 
                className={`training-media-wrapper ${isActive ? 'active' : ''}`}
              >
                {item.mediaType === 'video' ? (
                  <>
                    <video
                      ref={el => videoRefs.current[index] = el}
                      src={item.mediaUrl}
                      loop
                      muted
                      playsInline
                      onClick={togglePlay}
                      style={{ cursor: 'pointer' }}
                    />
                    {isActive && !isPlaying && (
                      <div className="play-button-overlay" onClick={togglePlay}>
                        <svg viewBox="0 0 24 24">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                    )}
                  </>
                ) : (
                  <img 
                    src={item.mediaUrl} 
                    alt={item.title} 
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
}
