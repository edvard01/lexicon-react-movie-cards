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
  return (
    <>
      <div className="review-list">
        <ul>
          {reviews.map((item, index) => (
            <li key={index}>
              <span className="info">
                <h4>{item.title}</h4>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
