// DottedBackground.js
import React, { useState, useEffect } from 'react';
import './dottedGraph.css';

// Even if youre not clicked onto the screen but it’s in your view?
// Null when your mouse leaves the screen?

const DottedBackground = () => {
  const [mouseX, setMouseX] = useState(null);
  const [mouseY, setMouseY] = useState(null);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  const handleMouseMove = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const generateDots = () => {
    const dots = [];
    const spacing = 25;
    const width = viewportWidth + 100;
    const height = viewportHeight + 100;

    for (let x = -50; x < width; x += spacing) {
      for (let y = -50; y < height; y += spacing) {
        dots.push(
          <span
            key={`${x}-${y}`}
            className="dot"
            style={{
              left: `${x}px`,
              top: `${y}px`,
              opacity: calculateOpacity(x, y),
            }}
          />
        );
      }
    }
    return dots;
  };

  const calculateOpacity = (x, y) => {
    if (mouseX === null || mouseY === null) return 1;
    const distance = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);
    const maxDistance = 150;
    const fadeFactor = Math.max(0, (maxDistance - distance) / maxDistance);
    return 1 - fadeFactor;
  };

  return <div className="dotted-grid">{generateDots()}</div>;
};

export default DottedBackground;