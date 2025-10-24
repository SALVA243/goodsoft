"use client"
import React, { useState, useEffect, useRef } from 'react';

const LinearProgress = ({
  duration = 4200,
  finish = 85,
}) => {
  const [isInViewport, setIsInViewport] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [displayedProgress, setDisplayedProgress] = useState(0);
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInViewport(entry.isIntersecting);
    });

    const currentRef = progressRef.current; // Capture la valeur actuelle

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Utilisation de la valeur sauvegardée
      }
    };
  }, []);


  useEffect(() => {
    if (isInViewport && percentage <= finish) {
      const interval = duration / 100;

      const easeOutQuad = (t: any) => t * (2 - t);

      const increment = () => {
        setTimeout(() => {
          const newPercentage = percentage + 1;
          const newDisplayedProgress = Math.round(easeOutQuad(newPercentage / finish) * finish);
          setPercentage(newPercentage);
          setDisplayedProgress(newDisplayedProgress);
        }, interval);
      };

      increment();

      return () => {
        clearTimeout(interval);
      };
    }
  }, [isInViewport, percentage, duration, finish]);

  return (
    <div ref={progressRef} className="skillbar" data-pct={displayedProgress}>
      <span className="skill-bar-percent" style={{ left: `${displayedProgress}%` }}>{displayedProgress}%</span>
      <div className="bar" style={{ width: `${displayedProgress}%` }} />
    </div>
  );
};

export default LinearProgress;
