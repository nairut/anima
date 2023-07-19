import React, { useEffect, useState } from 'react';
import CellForm from './screens/pages/CellForm/CellForm';
import Celular from './screens/pages/Celular/Celular';
import DesktopForm from './screens/pages/DesktopForm/DesktopForm';
import Index from './screens/pages/Index/Index';

const ResponsiveComponent = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update the width when the window is resized
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {width >= 768 && <Index />}
      {width < 768 && width >= 576 && <Celular />}
      {width < 576 && <CellForm />}
      {width < 768 && width >= 576 && <DesktopForm />}
    </>
  );
};

export default ResponsiveComponent;