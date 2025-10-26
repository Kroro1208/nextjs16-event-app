"use client";
import { FaArrowCircleDown } from "react-icons/fa";

const ExploreButton = () => {
  return (
    <button
      type="button"
      id="explore-btn"
      onClick={() => console.log("click!!")}
      className="mt-7 mx-auto"
    >
      <a href="#events">
        イベントを探す
        <FaArrowCircleDown
          className="inline-block ml-2"
          aria-label="イベントを探す"
        />
      </a>
    </button>
  );
};

export default ExploreButton;
