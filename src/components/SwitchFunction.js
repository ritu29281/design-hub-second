import { useEffect, useState } from "react";

const SwitchFunction = ({ onAbove700Change }) => {
  // eslint-disable-next-line
  const [isAbove700, setIsAbove700] = useState(window.innerWidth > 700);

  const handleResize = () => {
    const isAbove = window.innerWidth > 700;
    setIsAbove700(isAbove);
    onAbove700Change(isAbove);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // eslint-disable-next-line
  }, [onAbove700Change]);

  return null;
};

export default SwitchFunction;
