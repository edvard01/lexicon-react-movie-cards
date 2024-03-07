interface IReview {
  id: number;
  title: string;
  rating: number;
  genre: string;
  description: string;
}

interface IMovieCardProps {
  item: IReview;
  setupRating: (rating: number) => string;
  handleInspectClick: (id: number) => void;
}

export function MovieCard({
  item,
  setupRating,
  handleInspectClick,
}: IMovieCardProps): JSX.Element {
  let descTooLong = false;
  let shortDesc = adjustDesc();
  function adjustDesc() {
    if (item.description.length > 68) {
      descTooLong = true;
      return item.description.substring(0, 68);
    }

    return "";
  }

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
        {descTooLong ? (
          <p className="description">{shortDesc}...</p>
        ) : (
          <p className="description">{item.description}</p>
        )}
        <span className="see-more-link">
          <a onClick={() => handleInspectClick(item.id)}>
            See more
            <span className="material-symbols-outlined">arrow_right</span>
          </a>
        </span>
      </div>
    </>
  );
}
