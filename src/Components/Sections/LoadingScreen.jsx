import { useProgress } from "@react-three/drei";
import { config } from "../../config";
import { useEffect, useState } from "react";

export const LoadingScreen = () => {
  const { progress, active } = useProgress();
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Only hide loading screen when progress is 100% and loading is no longer active
    if (progress === 100 && !active) {
      // Add small delay before hiding to ensure everything is loaded
      const timeout = setTimeout(() => {
        setShow(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, active]);

  // Don't render if show is false
  if (!show) return null;

  return (
    <div
      className={`fixed top-0 left-0 p-16 w-screen h-screen z-[9999] grid place-items-center text-center bg-gradient-to-t from-[#b8c6db] to-[#f5f7fa] opacity-100 transition-opacity duration-1000 ${
        progress === 100 && !active
          ? "animate-fadeOut pointer-events-none opacity-0"
          : ""
      }`}
    >
      <div>
        <h1 className="text-6xl font-black uppercase text-[var(--text-color)] m-0">
          {config.loadingScreen}
        </h1>
        <div className="w-full h-4 bg-[rgb(102,106,113,0.42)] relative overflow-hidden rounded">
          <div
            className="h-full bg-[#000000] transition-[width] duration-500 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
