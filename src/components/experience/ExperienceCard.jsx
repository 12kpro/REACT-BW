import { Link } from "react-router-dom";
import { monthArray } from "../../helpers/mixed";
const ExperienceCard = ({ experience, edit, setId }) => {
  const startDate = new Date(experience.startDate);
  const endDate = experience.endDate ? new Date(experience.endDate) : null;

  return (
    <div className="d-flex border-bottom py-3 ">
      <img src={experience.image ? experience.image : ""} alt={experience.username} height="50px" width="50px" />
      <div className="ps-1 flex-grow-1">
        <h3 className="fs-6 footer-links m-0">
          <span>{experience.company}</span>&#160;&#8208;&#160;<span>{experience.role}</span>
        </h3>
        <div>
          <span>{monthArray[startDate.getMonth()]}</span>&#160;
          <span>{startDate.getFullYear()}</span> &#160;&#8208;&#160;
          {endDate ? (
            <>
              <span>{monthArray[endDate.getMonth()]}</span>&#160;
              <span>{endDate.getFullYear()}</span>
            </>
          ) : (
            <span>in corso</span>
          )}
        </div>
        <div>{experience.description}</div>
      </div>
      {edit && (
        <button
          className="btn"
          data-bs-toggle="modal"
          data-bs-target="#experiencesForm"
          onClick={() => setId(experience._id)}
        >
          <i className="bi bi-pencil"></i>
        </button>
      )}
    </div>
  );
};
export default ExperienceCard;
