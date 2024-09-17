import React, { useState, useEffect } from 'react';
import './DottedGraph.css';

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
    const spacing = 15;
    const width = viewportWidth + 100;
    const height = viewportHeight + 100;

    for (let x = -50; x < width; x += spacing) {
      for (let y = -50; y < height; y += spacing) {
        const { backgroundColor, size } = calculateBackgroundColorAndSize(x, y);
        dots.push(
          <span
            key={`${x}-${y}`}
            className="dot"
            style={{
              left: `${x}px`,
              top: `${y}px`,
              backgroundColor,
              width: `${size}px`,
              height: `${size}px`,
            }}
          />
        );
      }
    }
    return dots;
  };

  const calculateBackgroundColorAndSize = (x, y) => {
    if (mouseX === null || mouseY === null) return { backgroundColor: 'rgb(170, 170, 170)', size: 2 };
    const distance = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);
    const maxDistance = 100; 
    const fadeFactor = Math.max(0, (maxDistance - distance) / maxDistance);
    const defaultDotColor = 200;
    const maxDotColorFactor = 120;
    const r = Math.round(defaultDotColor - fadeFactor * maxDotColorFactor);
    const g = Math.round(defaultDotColor - fadeFactor * maxDotColorFactor);
    const b = Math.round(defaultDotColor - fadeFactor * maxDotColorFactor);
    const sizeFactor = Math.max(0, 1 - fadeFactor);
    const size = distance < maxDistance ? 4 - sizeFactor * 2 : 2;
    return { backgroundColor: `rgb(${r}, ${g}, ${b})`, size };
  };

  return <div className="dotted-graph">{generateDots()}</div>;
};

export default DottedBackground;