import React, { useState, useEffect } from 'react';
import './CustomCursor.scss';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" style={{ left: position.x, top: position.y }}>
        <img className="cursor" src="cursorcp.png" alt="Custom Cursor" />
      </div>
      {/* Rest of your component */}
    </>
  );
};

export default CustomCursor;
