import { Link } from "react-router-dom";
//card.button.modal ? ( data-bs-toggle="modal" data-bs-target="#exampleModal")
const UserMainCard = ({ card }) => {
  return (
    <div className="slider-item position-relative p-3 border rounded">
      <div className="pe-4">
        <p className="m-0 small">
          <strong>{card.title.txt}</strong> {card.text}
        </p>
        {card.button.type === "button" ? (
          <button className="btn btn-outline-secondary rounded-pill mt-4" {...card.button.modal}>
            {card.button.icon ? <i className={`bi ${card.button.icon}`}></i> : ""}
            {card.button.btnTxt}
          </button>
        ) : (
          <Link to="/">{card.button.btnTxt}</Link>
        )}
      </div>
      <button className="btn btn-close position-absolute top-0 end-0 mt-3 me-3"></button>
    </div>
  );
};
export default UserMainCard;
