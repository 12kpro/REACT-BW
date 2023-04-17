import { Link } from "react-router-dom";

const UserMainCard = ({ button }) => {
  return (
    <div className="slider-item position-relative p-3 border rounded">
      <div className="pe-4">
        <p className="m-0 small">
          <strong>Special title treatment:</strong> With supporting text below as a natural lead-in to additional
          content.
        </p>
        {button.type === "button" ? (
          <button className="btn btn-outline-secondary rounded-pill mt-4">
            {button.icon ? <i className={`bi ${button.icon}`}></i> : ""}
            {button.txt}
          </button>
        ) : (
          <Link to="/">{button.txt}</Link>
        )}
      </div>
      <button className="btn btn-close position-absolute top-0 end-0 mt-3 me-3"></button>
    </div>
  );
};
export default UserMainCard;
