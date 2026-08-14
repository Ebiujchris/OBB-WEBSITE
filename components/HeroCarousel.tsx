'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    src: '/prime-minister.jpg',
    alt: 'Rt. Hon. Charles Bukantwa — Prime Minister',
    label: 'Prime Minister',
    name: 'Rt. Hon. Charles Bukantwa',
  },
  {
    src: '/omundhingiya image.jpeg',
    alt: 'Omudhingiya Martin Ayongi Kamya',
    label: 'Omudhingiya',
    name: 'Martin Ayongi Kamya',
  },
  {
    src: '/Nabantu(Queen).jpeg',
    alt: 'Nabantu — Queen',
    label: 'Nabantu (Queen)',
    name: '',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      borderRadius: '1.25rem',
      overflow: 'hidden',
      border: '1px solid rgba(216,35,42,0.25)',
      boxShadow: '0 0 40px rgba(216,35,42,0.08)',
      position: 'relative',
      aspectRatio: '3/4',
    }}>
      {slides.map((slide, i) => (
        <div
          key={i}
          style={{
            position: 'absolute', inset: 0,
            opacity: i === current ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
          }}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
            padding: '2rem 1.25rem 1.5rem',
          }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#FCD116', marginBottom: '0.375rem' }}>
              {slide.label}
            </p>
            {slide.name && (
              <p style={{ fontSize: '1.125rem', fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>
                {slide.name}
              </p>
            )}
          </div>
        </div>
      ))}

      {/* Dot indicators */}
      <div style={{
        position: 'absolute', bottom: '1rem', right: '1rem',
        display: 'flex', gap: '0.4rem', zIndex: 10,
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? 20 : 6,
              height: 6,
              borderRadius: 9999,
              background: i === current ? '#FCD116' : 'rgba(255,255,255,0.4)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s ease',
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
