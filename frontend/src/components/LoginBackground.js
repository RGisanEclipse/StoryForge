import React, { useRef, useEffect } from 'react';

const STAR_COLOR = '#fff';
const STAR_SIZE = 3;
const STAR_MIN_SCALE = 0.2;
const OVERFLOW_THRESHOLD = 50;

const LoginBackground = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);

  const generateStars = () => {
    const stars = [];
    const numStars = Math.round((window.innerWidth * window.innerHeight) / 5000); // Adjust as needed
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE),
      });
    }
    starsRef.current = stars;
  };

  const recycleStar = (star) => {
    let direction = 'z';
    if (direction === 'z') {
      star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);
      star.x = Math.random() * window.innerWidth;
      star.y = Math.random() * window.innerHeight;
    }
  };

  const resize = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    generateStars();
  };

  const step = () => {
    update();
    render();
    requestAnimationFrame(step);
  };

  const update = () => {
    const velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0001 }; // Reduced speed
    starsRef.current.forEach((star) => {
      star.x += velocity.x * star.z;
      star.y += velocity.y * star.z;
      star.x += (star.x - window.innerWidth / 2) * velocity.z * star.z;
      star.y += (star.y - window.innerHeight / 2) * velocity.z * star.z;
      star.z += velocity.z;
      if (
        star.x < -OVERFLOW_THRESHOLD ||
        star.x > window.innerWidth + OVERFLOW_THRESHOLD ||
        star.y < -OVERFLOW_THRESHOLD ||
        star.y > window.innerHeight + OVERFLOW_THRESHOLD
      ) {
        recycleStar(star);
      }
    });
  };

  const render = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    starsRef.current.forEach((star) => {
      context.beginPath();
      context.lineCap = 'round';
      context.lineWidth = STAR_SIZE * star.z;
      context.globalAlpha = 1;
      context.strokeStyle = STAR_COLOR;
      context.moveTo(star.x, star.y);
      let tailX = 2;
      let tailY = 2;
      if (Math.abs(tailX) < 0.1) tailX = 0.5;
      if (Math.abs(tailY) < 0.1) tailY = 0.5;
      context.lineTo(star.x + tailX, star.y + tailY);
      context.stroke();
    });
  };

  useEffect(() => {
    generateStars();
    resize();
    step();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, background: '#0b0338', zIndex: -1 }} />;
};

export default LoginBackground;
