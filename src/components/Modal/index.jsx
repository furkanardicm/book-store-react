import React from 'react';

function Index({ height, width, primaryColor, secondaryColor, border, borderColor, textColor, isOpen, children }) {
  return (
    <div 
      style={{
        width: width,
        height: height,
        backgroundColor: `#${primaryColor}`,
        borderColor: `#${borderColor}`,
        color: textColor
      }}
      className={`${isOpen ? 'visible' : 'invisible'} rounded-md z-30 absolute top-[90px] right-[250px] ${border} drop-shadow-md flex flex-col items-center`}
    >
      {children}
    </div>
  );
}

export default Index;
