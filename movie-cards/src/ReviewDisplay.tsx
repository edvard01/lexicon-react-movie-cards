import { MovieCard } from "./MovieCard";
import "./reviewDisplay.css";

interface IReview {
  id: number;
  title: string;
  rating: number;
  genre: string;
  description: string;
}

interface IReviewDisplayProps {
  reviews: IReview[];
  openInspectModal: (id: number) => void;
}

export function ReviewDisplay({
  reviews,
  openInspectModal,
}: IReviewDisplayProps) {
  function setupRating(rating: number): string {
    let html: string = "";
    for (let i = 1; i <= rating; i++) {
      html += `<span class="material-symbols-outlined yellow">star_rate</span>`;
    }
    let greyStarCount: number = 5 - rating;
    for (let i = 1; i <= greyStarCount; i++) {
      html += `<span class="material-symbols-outlined grey">star_rate</span>`;
    }
    return html;
  }

  function handleInspectClick(id: number) {
    openInspectModal(id);
  }

  return (
    <>
      <div className="review-content">
        {reviews.map((item, index) => (
          <MovieCard
            item={item}
            setupRating={setupRating}
            handleInspectClick={handleInspectClick}
            key={index}
          />
        ))}
      </div>
    </>
  );
}
