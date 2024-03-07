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
  const [reviews, setReviews] = useState<IReview[]>(seedReviews());
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  function modalChangeState() {
    if (modalOpen) {
      setModalOpen(false);
    } else {
      setModalOpen(true);
    }
  }

  function seedReviews(): IReview[] {
    const array: IReview[] = [
      {
        title: "Placeholder 1",
        rating: 2,
        genre: "Horror",
        description:
          "Cheap horror movie only filled with jumpscares. Overall disappointing",
      },
      {
        title: "Placeholder 2",
        rating: 4,
        genre: "Action",
        description: "Fun action movie with some adventure mixed in!",
      },
      {
        title: "Placeholder 1",
        rating: 2,
        genre: "Horror",
        description:
          "Cheap horror movie only filled with jumpscares. Overall disappointing",
      },
      {
        title: "Placeholder 2",
        rating: 4,
        genre: "Action",
        description: "Fun action movie with some adventure mixed in!",
      },
      {
        title: "Placeholder 1",
        rating: 2,
        genre: "Horror",
        description:
          "Cheap horror movie only filled with jumpscares. Overall disappointing",
      },
      {
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
