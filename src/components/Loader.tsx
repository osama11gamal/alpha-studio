import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
      <div
        className="w-12 h-12 rounded-full border-4 border-[#FFD700] border-t-transparent animate-spin"
        role="status"
        aria-label="Loading"
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;


