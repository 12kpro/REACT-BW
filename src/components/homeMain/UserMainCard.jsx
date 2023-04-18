import { Link } from "react-router-dom";

const UserMainCard = ({ button }) => {
  return (
    <div className="slider-item position-relative p-2 border rounded">
      <div className="pe-4">
        <p className="m-0 small lh-sm pe-5">
          <strong>Special title treatment:</strong> With supporting text below as a natural lead-in to additional
          content.
        </p>
        {button.type === "button" ? (
          <button className="btn bg-trasparent btn-sm mt-1 p-0 ">
            {button.icon ? <i className={`bi ${button.icon}`}></i> : ""}
            {button.txt}
          </button>
        ) : (
          <Link to="/">{button.txt}</Link>
        )}
      </div>
      <button className="btn btn-close position-absolute top-0 end-0 mt-1 me-2"></button>
    </div>
  );
};
export default UserMainCard;
