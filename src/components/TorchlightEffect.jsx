import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './TorchlightEffect.scss';

function TorchlightEffect() {
  const wrapperRef = useRef(null);
  const heroRef = useRef(null);
  const overlayRef = useRef(null);
  const hydraRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const hero = heroRef.current;
    const overlay = overlayRef.current;
    const hydra = hydraRef.current;

    /* Timeline */
    const tl = gsap.timeline();

    tl.to(hero, {
      '--maskSize1': '15%',
      duration: 0.5,
      ease: 'back.out(2)',
    }).to(
      hero,
      {
        '--maskSize2': '75%',
        '--maskSize3': 'calc(50%)',
        duration: 0.5,
        delay: 0.5,
        ease: 'back.out(2)',
      },
      '-=0.5'
    );

    /* Cursor */
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = Math.round((clientX / window.innerWidth) * 100);
      const y = Math.round((clientY / window.innerHeight) * 100);

      gsap.to(hero, {
        '--x': `${x}%`,
        '--y': `${y}%`,
        duration: 0.3,
        ease: 'sine.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleClick = () => {
    const wrapper = wrapperRef.current;
    const hero = heroRef.current;
    const overlay = overlayRef.current;

    wrapper.classList.add('fade-out');
    gsap.to(hero, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        gsap.set(overlay, { visibility: 'visible', backgroundColor: 'black', opacity: 1 });
        gsap.to(overlay, {
          duration: 0.5,
          backgroundColor: 'transparent',
          onComplete: () => {
            gsap.set(overlay, { visibility: 'hidden' });
            gsap.fromTo(
              wrapper.children,
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 }
            );
            wrapper.style.display = 'none';
          },
        });
      },
    });
  };

  useEffect(() => {
    const hydra = hydraRef.current;

    const blinkRandomly = () => {
      const randomDelay = Math.random() * 800 + 500; // Random delay between 500ms and 2500ms
      hydra.style.setProperty('--blink-delay', `${randomDelay}ms`);
      setTimeout(blinkRandomly, randomDelay);
    };

    blinkRandomly();
  }, []);

  return (
    <div className="wrapper" ref={wrapperRef} onClick={handleClick}>
      <div className="hero">
        <h1 className="hero__heading"></h1>
      </div>

      <div className="hero hero--secondary" aria-hidden="true" ref={heroRef} data-hero>
        <p className="hero__heading">Click me and follow me into the rabbit hole...</p>
        <div className="hydra" ref={hydraRef}>
          <img className="hydraimg" src="hydre.png" alt="Hydra" />
        </div>
      </div>

      <div className="overlay" ref={overlayRef}></div>
    </div>
  );
}

export default TorchlightEffect;

