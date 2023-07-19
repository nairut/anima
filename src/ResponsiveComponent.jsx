import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Celular } from "./screens/Celular";
import { DesktopForm } from "./screens/DesktopForm";
import { CellForm } from "./screens/CellForm";
import { Tablet } from "./screens/Tablet";
import { Index } from "./screens/Index";




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