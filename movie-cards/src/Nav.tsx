import "./nav.css";

interface INav {
  openModal: () => void;
}

export function Nav({ openModal }: INav) {
  return (
    <>
      <div className="nav">
        <div className="content">
          <span className="nav-item">
            <a href="#">Home</a>
          </span>
          <button onClick={openModal}>Add review</button>
        </div>
      </div>
    </>
  );
}
