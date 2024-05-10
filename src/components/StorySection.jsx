// src/components/StorySection.jsx
import React from 'react';

const StorySection = () => {
  return (
    <div className="bg-gradient-linear p-12 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold">HealNet's Story: Get to know us</h2>
        <p className="mt-4 text-lg">
          HealNet is more than just an online medical service; it’s a movement towards accessible, efficient, and compassionate healthcare for all.
        </p>
        <button className="mt-6 bg-brand-blue hover:bg-deep-blue text-white font-bold py-2 px-4 rounded">
          Learn more about us
        </button>
      </div>
    </div>
  );
};

export default StorySection;
