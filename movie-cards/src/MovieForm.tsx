import React, { ChangeEvent } from "react";
import { useState } from "react";
import "./movieForm.css";

export function MovieForm() {
  const [sliderValue, setSliderValue] = useState<number>(3);

  function handleSliderChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = parseInt(event.target.value);
    setSliderValue(newValue);
  }

  return (
    <>
      <div className="movie-form">
        <form action="submit">
          <span className="title">
            <label id="movie-label">Movie:</label>
            <input type="text" />
          </span>
          <span className="rating">
            <label id="rating">Rating: {sliderValue}/5</label>
            <input
              type="range"
              min={1}
              max={5}
              value={sliderValue}
              onChange={handleSliderChange}
              step={1}
            />
            <span className="rating-slider-label">
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
            </span>
          </span>
          <select>
            <option value="" disabled selected hidden>
              Select genre
            </option>
            <option value="Horror">Horror</option>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
            <option value="Thriller">Thriller</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Romance">Romance</option>
            <option value="Documentary">Documentary</option>
            <option value="Adventure">Adventure</option>
            <option value="Mystery">Mystery</option>
          </select>
        </form>
      </div>
    </>
  );
}
