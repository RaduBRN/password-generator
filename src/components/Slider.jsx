import { useRef } from "react";

const Slider = ({ value, setValue, maximumValue = 20 }) => {
  const sliderRef = useRef(null);
  const coefficient = 100 / maximumValue;

  const handleMouseDown = (e) => {
    const updateValue = (e) => {
      if (sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        setValue((x / rect.width) * maximumValue);
      }
    };

    const handleMouseMove = (e) => {
      e.preventDefault();
      updateValue(e);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    updateValue(e);
  };

  return (
    <div
      ref={sliderRef}
      className="relative h-2 w-full rounded-full bg-darkestGray cursor-pointer"
      onMouseDown={handleMouseDown}
    >
      <div
        className="absolute h-full rounded-full bg-neonGreen"
        style={{ width: `${value * coefficient}%` }}
      />
      <div
        className="absolute h-6 w-6 top-1/2 -translate-y-1/2 rounded-full bg-white hover:bg-darkestGray active:bg-darkestGray hover:border-neonGreen active:border-neonGreen border-2 border-transparent shadow-md"
        style={{
          left: `${value * coefficient}%`,
          transform: `translate(-50%, -50%)`,
        }}
      />
    </div>
  );
};

export default Slider;
