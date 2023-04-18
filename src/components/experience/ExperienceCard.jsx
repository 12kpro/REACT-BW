import { Link } from "react-router-dom";

const ExperienceCard = ({ experience, edit }) => {
  return (
    <div className="d-flex border-bottom py-3 ">
      <img src={experience.image ? experience.image : ""} alt={experience.username} height="50px" width="50px" />
      <div className="ps-1 flex-grow-1">
        <h3 className="fs-6 footer-links m-0">{experience.title}</h3>
        <div>
          <span>{experience.company}</span>&#160;&#183;&#160;<span>{experience.role}</span>
        </div>
        <div>
          <span>{experience.startDate}</span>&#160;&#183;&#160;
          <span>{experience.endDate ? experience.endDate : "in corso"}</span>
        </div>
        <div>{experience.description}</div>
      </div>
      {edit && (
        <button className="btn" data-bs-toggle="modal" data-bs-target="#experiencesForm">
          <i className="bi bi-pencil"></i>
        </button>
      )}
    </div>
  );
};
export default ExperienceCard;
