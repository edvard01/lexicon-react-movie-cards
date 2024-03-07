import { useState } from "react";
import { MovieFormModal } from "./MovieFormModal";
import { Nav } from "./Nav";
import { ReviewDisplay } from "./ReviewDisplay";
import { ReviewModal } from "./ReviewModal";

interface IReview {
  id: number;
  title: string;
  rating: number;
  genre: string;
  description: string;
}

export function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [reviewModalOpen, setReviewModalOpen] = useState<boolean>(false);
  const [reviewModalObject, setReviewModalObject] = useState<IReview | null>(
    null
  );
  const [reviewId, setReviewId] = useState<number>(7);
  const [reviews, setReviews] = useState<IReview[]>(seedReviews());

  function modalChangeState() {
    if (modalOpen) {
      setModalOpen(false);
    } else {
      setModalOpen(true);
    }
  }

  function increaseId() {
    setReviewId(reviewId + 1);
  }

  function seedReviews(): IReview[] {
    const array: IReview[] = [
      {
        id: 1,
        title: "Placeholder 1",
        rating: 2,
        genre: "Horror",
        description:
          "Cheap horror movie only filled with jumpscares. Overall disappointing sadly, meh",
      },
      {
        id: 2,
        title: "Placeholder 2",
        rating: 4,
        genre: "Action",
        description: "Fun action movie with some adventure mixed in!",
      },
      {
        id: 3,
        title: "Placeholder 1",
        rating: 2,
        genre: "Horror",
        description:
          "Cheap horror movie only filled with jumpscares. Overall disappointing",
      },
      {
        id: 4,
        title: "Placeholder 2",
        rating: 4,
        genre: "Action",
        description: "Fun action movie with some adventure mixed in!",
      },
      {
        id: 5,
        title: "Placeholder 1",
        rating: 2,
        genre: "Horror",
        description:
          "Cheap horror movie only filled with jumpscares. Overall disappointing",
      },
      {
        id: 6,
        title: "Placeholder 2",
        rating: 4,
        genre: "Action",
        description: "Fun action movie with some adventure mixed in!",
      },
    ];

    return array;
  }

  function addReview(review: IReview) {
    setReviews((prevArray) => [...prevArray, review]);
  }

  function openInspectModal(id: number) {
    for (let i = 0; i < reviews.length; i++) {
      if (reviews[i].id === id) {
        setReviewModalObject(reviews[i]);
        break;
      }
    }

    setReviewModalOpen(true);
  }

  const closeReviewModal = () => {
    setReviewModalOpen(false);
  };

  return (
    <>
      <Nav openModal={modalChangeState} />
      <MovieFormModal
        id={reviewId}
        open={modalOpen}
        onClose={modalChangeState}
        addReview={addReview}
        increaseId={increaseId}
      />
      <ReviewDisplay reviews={reviews} openInspectModal={openInspectModal} />
      <ReviewModal
        open={reviewModalOpen}
        review={reviewModalObject}
        closeReviewModal={closeReviewModal}
      />
    </>
  );
}
