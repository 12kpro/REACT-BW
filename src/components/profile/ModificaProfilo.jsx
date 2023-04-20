import { useEffect, useState } from "react";
import { monthArray, yearsArray } from "../../helpers/mixed";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserExperience, postUserExperience, putUserExperience } from "../../redux/action";

const ModificaProfilo = ({ id = null }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const userExperiences = useSelector((state) => state.experieces);
  const [role, setRole] = useState("");

  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [area, setArea] = useState("");

  const [isCurrentJob, setIsCurrentJob] = useState(true);
  const [monthStart, setMonthStart] = useState("");
  const [yearStart, setYearStart] = useState("");
  const [monthEnd, setMonthEnd] = useState("");
  const [yearEnd, setYearEnd] = useState("");
  const [save, setSave] = useState(true);

  useEffect(() => {
    if (id) {
      const exp = userExperiences.find((exp) => exp._id === id);
      const currentStartDate = new Date(exp.startDate);

      setRole(exp.role);
      setCompany(exp.company);
      setDescription(exp.description);
      setArea(exp.area);

      setMonthStart(currentStartDate.getMonth());
      setYearStart(currentStartDate.getFullYear());

      if (exp.endDate) {
        const currentEndDate = new Date(exp.endDate);
        setIsCurrentJob(false);
        setMonthEnd(currentEndDate.getMonth());
        setYearEnd(currentEndDate.getFullYear());
      }
    }
  }, [id]);

  const handleDelete = () => {
    dispatch(deleteUserExperience(userData._id, id));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const day = new Date().getDate();
    const formData = {
      role: role,
      company: company,
      startDate: `${yearStart}-${monthStart.toString().padStart(2, "0")}-${day}`,
      endDate: isCurrentJob ? null : `${yearEnd}-${monthEnd.toString().padStart(2, "0")}-${day}`,
      description: description,
      area: area,
    };
    id
      ? dispatch(putUserExperience(userData._id, id, JSON.stringify(formData)))
      : dispatch(postUserExperience(userData._id, JSON.stringify(formData)));
  };
  return (
    <>
      <div
        className="modal fade modal-lg"
        id="profiloForm"
        tabIndex="-1"
        aria-labelledby="experiencesForm"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modifica il tuo profilo
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12"></div>
                    <div className="mb-3">
                      <label htmlFor="role" className="form-label">
                        Nome
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="role"
                        aria-describedby="role"
                        placeholder={`${userData.name}`}
                        onChange={(e) => setRole(e.target.value)}
                        required
                        value={role}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">
                        Cognome
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="role"
                        aria-describedby="role"
                        placeholder={`${userData.surname}`}
                        onChange={(e) => setRole(e.target.value)}
                        required
                        value={role}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="company" className="form-label">
                        Nome aggiuntivo
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="company"
                        aria-describedby="emailHelp"
                        placeholder=""
                        onChange={(e) => setCompany(e.target.value)}
                        required
                        value={company}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="area" className="form-label">
                        Località
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="area"
                        placeholder={`${userData.area}`}
                        onChange={(e) => setArea(e.target.value)}
                        required
                        value={area}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Chiudi
              </button>

              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#confirmModal"
                onClick={() => setSave(true)}
              >
                {id ? "Modifica" : "Salva"}
              </button>
              {id && (
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#confirmModal"
                  onClick={() => setSave(false)}
                >
                  Elimina
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="confirmModal" tabIndex="-1" aria-labelledby="confirmModal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Conferma operazione
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              L&#180;esperienza verrà {save ? (id ? "Modificata" : "Salvata") : "Eliminata"}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Annulla
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={save ? handleSubmit : handleDelete}
              >
                Conferma
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModificaProfilo;
