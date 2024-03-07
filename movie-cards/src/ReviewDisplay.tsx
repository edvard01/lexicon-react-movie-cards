import { MovieCard } from "./MovieCard";
import "./reviewDisplay.css";

interface IReview {
  title: string;
  rating: number;
  genre: string;
  description: string;
}

interface IReviewDisplayProps {
  reviews: IReview[];
}

export function ReviewDisplay({ reviews }: IReviewDisplayProps) {
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

  return (
    <>
      <div className="review-content">
        {reviews.map((item, index) => (
          <MovieCard item={item} setupRating={setupRating} key={index} />
        ))}
      </div>
    </>
  );
}
