import { useState } from "react";
import { MovieFormModal } from "./MovieFormModal";
import { Nav } from "./Nav";
import { ReviewDisplay } from "./ReviewDisplay";

interface IReview {
  title: string;
  rating: number;
  genre: string;
  description: string;
}

export function App() {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  function modalChangeState() {
    if (modalOpen) {
      setModalOpen(false);
    } else {
      setModalOpen(true);
    }
  }

  function addReview(review: IReview) {
    setReviews((prevArray) => [...prevArray, review]);
  }

  return (
    <>
      <Nav openModal={modalChangeState} />
      <MovieFormModal
        open={modalOpen}
        onClose={modalChangeState}
        addReview={addReview}
      />
      <ReviewDisplay reviews={reviews} />
    </>
  );
}
