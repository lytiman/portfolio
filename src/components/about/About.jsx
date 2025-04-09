import React, { useEffect, useRef } from 'react';
import './about.css';

function About() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const fadeIn = (element) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            element.current.classList.add('visible');
          }
        },
        { threshold: 0.3 }
      );

      if (element.current) {
        observer.observe(element.current);
      }

      return () => {
        if (element.current) observer.unobserve(element.current);
      };
    };

    fadeIn(leftRef);
    fadeIn(rightRef);
  }, []);

  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div
            ref={leftRef}
            className="zoom-paragraph sm:text-right text-4xl font-bold"
          >
            <p>Hi👋, I'm Latera, nice to meet you. Please take a look around</p>
          </div>
          <div ref={rightRef} className="zoom-paragraph">
            <p>
              I am a dedicated software engineer with a fervent commitment to
              lifelong learning and continuous self-improvement. With a strong
              foundation in software development, web application development,
              and object-oriented programming, I thrive on tackling complex
              challenges and finding innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
