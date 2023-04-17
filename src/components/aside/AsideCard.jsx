import { Link } from "react-router-dom";

const AsideCard = ({ username, title, image }) => {
  return (
    <div className="d-flex border-bottom py-3">
      <img src={image} alt="{username}" className="rounded-circle" height="50px" width="50px" />
      <div className="ps-1">
        <Link to="/" className="text-decoration-none text-reset">
          <h3 className="fs-6 footer-links">{username}</h3>
          <p className="m-0 small ">{title}</p>
        </Link>
        <button className="btn btn-outline-secondary rounded-pill mt-4">
          <i className="bi bi-person-plus-fill"></i>
          Collegati
        </button>
      </div>
    </div>
  );
};
export default AsideCard;
