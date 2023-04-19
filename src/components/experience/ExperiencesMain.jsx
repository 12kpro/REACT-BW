import { useSelector } from "react-redux";
import { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import ExperiencesModal from "./ExperiencesModal";
import { Link } from "react-router-dom";
import PhotoUploadModal from "../homeMain/PhotoUploadModal";

const ExperiencesMain = ({ edit, back = false }) => {
  const userExperiences = useSelector((state) => state.experieces);
  const [selectedId, setSelectedId] = useState();

  return (
    <div className="card mt-2">
      <div className="card-body">
        <div className="card-title">
          <div className="d-flex">
            {back && (
              <Link className="btn" to="/">
                <i className="bi bi-arrow-left"></i>
              </Link>
            )}
            <h2 className="fs-5 m-0 flex-grow-1">Esperienze</h2>
            <button className="btn" data-bs-toggle="modal" data-bs-target="#experiencesForm">
              <i className="bi bi-plus"></i>
            </button>
            {edit && (
              <Link className="btn" to="/experience">
                <i className="bi bi-pencil"></i>
              </Link>
            )}
          </div>

          <p className="small text-secondary">
            <i className="bi bi-eye-fill pe-1"></i>
            Solo per te
          </p>
        </div>
        <ul className="list-unstyled">
          {edit
            ? userExperiences
                .slice(0, 5)
                .map((experience) => <ExperienceCard key={experience._id} experience={experience} />)
            : userExperiences.map((experience) => (
                <ExperienceCard key={experience._id} edit experience={experience} setId={setSelectedId} />
              ))}
        </ul>
      </div>
      {edit && (
        <div className="card-footer bg-white text-body text-center">
          <Link to="/experience" className="text-secondary text-decoration-none">
            Mostra tutte le attività {userExperiences.length ? <>&#40; {userExperiences.length} &#41;</> : ""}
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      )}

      <ExperiencesModal id={selectedId} />
      <PhotoUploadModal id={selectedId} dataProp="experience" />
    </div>
  );
};
export default ExperiencesMain;
