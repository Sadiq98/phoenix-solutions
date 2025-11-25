import React from 'react';

const PhoenixLogo = ({ className = "text-stone-900", variant = "full" }) => {
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      
      {/* --- Logo --- */}
      {(variant === "full" || variant === "icon") && (
        <svg 
          width="42" 
          height="42" 
          viewBox="0 0 42 42" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          {/* The Rising Wing (Connectivity/Flow) */}
          <path 
            d="M8 28C8 28 14 34 24 34C34 34 38 24 38 14" 
            stroke="#ff6900" 
            strokeWidth="2.5" 
            strokeLinecap="square"
          />
          {/* The Body/Head (Precision/Tech) */}
          <path 
            d="M4 14C4 14 12 8 20 14C28 20 24 34 24 34" 
            stroke="#ff6900" 
            strokeWidth="2.5" 
            strokeLinecap="square"
          />
          {/* The Eye/Node (Smart Home Node) */}
          <circle cx="32" cy="10" r="2" fill="#ff6900" />
        </svg>
      )}

      {/* --- THE TYPOGRAPHY --- */}
      {(variant === "full" || variant === "text") && (
        <div className="flex flex-col justify-center -space-y-1">
          <span className="font-serif text-3xl font-medium tracking-tight leading-none">
            PHOENIX
          </span>
          <span className="font-sans text-[0.65 rem] font-bold uppercase tracking-[0.3em] opacity-60 leading-tight pl-[2px]">
            SOLUTIONS
          </span>
        </div>
      )}
    </div>
  );
};

export default PhoenixLogo;