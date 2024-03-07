import "./reviewModal.css";

interface IReview {
  id: number;
  title: string;
  rating: number;
  genre: string;
  description: string;
}

interface IReviewModalProps {
  open: boolean;
  review: IReview | null;
  closeReviewModal: () => void;
}

export function ReviewModal({
  open,
  review,
  closeReviewModal,
}: IReviewModalProps): JSX.Element {
  function handleModalClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      closeReviewModal();
    }
  }

  function setupRating(rating: number | undefined): string {
    let html: string = "<p>Rating: </p>";
    if (rating !== undefined) {
      for (let i = 1; i <= rating; i++) {
        html += `<span class="material-symbols-outlined yellow">star_rate</span>`;
      }
      let greyStarCount: number = 5 - rating;
      for (let i = 1; i <= greyStarCount; i++) {
        html += `<span class="material-symbols-outlined grey">star_rate</span>`;
      }
      return html;
    }
    return html;
  }
  return (
    <>
      {open && (
        <div className="modal-overlay" onClick={handleModalClick}>
          <div className="modal">
            <div className="modal-header">
              <h3>{review?.title} review</h3>
              <button onClick={closeReviewModal}>X</button>
            </div>
            <div className="modal-body">
              <p>Genre: {review?.genre}</p>
              <p
                className="rating"
                dangerouslySetInnerHTML={{
                  __html: setupRating(review?.rating),
                }}
              ></p>
              <div className="desc">
                <h4>
                  <b>Description:</b>
                </h4>
                <p>{review?.description}</p>
              </div>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      )}
    </>
  );
}
