import { useEffect, useRef, useState } from "react";
import "./App.css";
import Menu from "./components/menu";
import Slider0 from "./components/slider0/slider0";
import Slider1 from "./components/slider1/slider1";
import Slider2 from "./components/slider2/slider2";
import Slider3 from "./components/slider3/slider3";

const slides = [
  "Slide 1",
  "Slide 2",
  "Slide 3",
  "Slide 4 (Background Shifts)",
  "Slide 5",
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [partialStep, setPartialStep] = useState(false); // <--- NEW
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  const goToSlide = (index: number) => {
    index = Math.max(0, Math.min(slides.length - 1, index));

    // Prevent double trigger
    if (index === currentSlide && !partialStep) return;

    // Special case: going from slide 1 → 2 (first step)
    if (currentSlide === 0 && index === 1 && !partialStep) {
      setPartialStep(true);

      if (containerRef.current) {
        containerRef.current.style.transform = `translateY(calc(-${
          currentSlide * 100
        }vh - 100px))`;
      }
    } else {
      // Normal behavior (or second scroll after partial step)
      setPartialStep(false);
      setCurrentSlide(index);

      if (containerRef.current) {
        containerRef.current.style.transform = `translateY(-${index * 100}vh)`;
      }
    }

    isScrolling.current = true;
    setTimeout(() => (isScrolling.current = false), 700);
  };

  // Wheel scroll
  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (isScrolling.current) return;

    if (e.deltaY > 0) goToSlide(currentSlide + 1);
    else goToSlide(currentSlide - 1);
  };

  // Arrow keys
  const handleKeyDown = (e: KeyboardEvent) => {
    if (isScrolling.current) return;
    if (e.key === "ArrowDown") goToSlide(currentSlide + 1);
    if (e.key === "ArrowUp") goToSlide(currentSlide - 1);
  };

  // Touch
  let touchStartY = 0;
  const handleTouchStart = (e: TouchEvent) => {
    touchStartY = e.touches[0].clientY;
  };
  const handleTouchEnd = (e: TouchEvent) => {
    if (isScrolling.current) return;
    const deltaY = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(deltaY) < 50) return;
    if (deltaY < 0) goToSlide(currentSlide + 1);
    else goToSlide(currentSlide - 1);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentSlide, partialStep]);

  return (
    <div className="app">
      {/* Fixed Background */}
      <div id="bg" ref={bgRef} className={`bg${currentSlide}`} 
      style={{backgroundPosition: `right 20px top ${currentSlide * -200}px`}}/>

      {/* Conditional Menu */}
      <div className={currentSlide < 1 ? "menu-show" : "menu-hide"}>
        <Menu />
      </div>

      {/* Slides container */}
      <div ref={containerRef} className="slides-container">
        {slides.map((text, index) => (
          <div key={index} className="slide">
            {index === 0 && <Slider0 partialStep={partialStep} />}
            {index === 1 && <Slider1 />}
            {index === 2 && <Slider2 />}
            {index === 3 && <Slider3 />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
