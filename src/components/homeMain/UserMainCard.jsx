import { Link } from "react-router-dom";

const UserMainCard = () => {
  return (
    <div className="slider-item position-relative p-3 border rounded">
      <div className="pe-4">
        <p className="m-0 small">
          <strong>Special title treatment:</strong> With supporting text below as a natural lead-in to additional
          content.
        </p>
        <Link to="/">Inizia</Link>
      </div>
      <button className="btn btn-close position-absolute top-0 end-0 mt-3 me-3"></button>
    </div>
  );
};
export default UserMainCard;
