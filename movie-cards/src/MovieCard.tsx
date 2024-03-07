interface IReview {
  title: string;
  rating: number;
  genre: string;
  description: string;
}

interface IMovieCardProps {
  item: IReview;
  setupRating: (rating: number) => string;
}

export function MovieCard({ item, setupRating }: IMovieCardProps): JSX.Element {
  return (
    <>
      <div className="review">
        <span className="info">
          <h4>{item.title}</h4>
          <span
            className="rating"
            dangerouslySetInnerHTML={{ __html: setupRating(item.rating) }}
          ></span>
        </span>
        <p className="genre">{item.genre}</p>
        <p className="description">{item.description}</p>
      </div>
    </>
  );
}
