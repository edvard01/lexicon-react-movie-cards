import React, { ChangeEvent, FormEvent, MouseEventHandler } from "react";
import { useState } from "react";
import "./movieFormModal.css";

interface IReview {
  title: string;
  rating: number;
  genre: string;
  description: string;
}

interface IMovieFormModalProps {
  open: boolean;
  onClose: () => void;
  addReview: (review: IReview) => void;
}

export function MovieFormModal({
  open,
  onClose,
  addReview,
}: IMovieFormModalProps) {
  const [title, setTitle] = useState<string>("");
  const [sliderValue, setSliderValue] = useState<number>(3);
  const [genre, setGenre] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  function handleSliderChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = parseInt(event.target.value);
    setSliderValue(newValue);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    let review = {
      title: title,
      rating: sliderValue,
      genre: genre,
      description: desc,
    };
    console.log(review);
    addReview(review);
    clear();
    onClose();
  }

  function handleModalClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  function clear() {
    setTitle("");
    setSliderValue(3);
    setGenre("");
    setDesc("");
  }

  return (
    <>
      {open && (
        <div className="modal-overlay" onClick={handleModalClick}>
          <div className="modal">
            <div className="modal-header">
              <h3>Add a review</h3>
              <button onClick={onClose}>X</button>
            </div>
            <div className="movie-form">
              <form action="submit" onSubmit={handleSubmit}>
                <span className="title">
                  <label id="movie-label">Movie:</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
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
                <select
                  className="genre"
                  onChange={(e) => setGenre(e.target.value)}
                  required
                >
                  <option value="">Select Genre</option>
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
                <label id="desc">Description: </label>
                <textarea
                  className="desc-input"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
                <button type="submit" className="submit-button">
                  Add review
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
