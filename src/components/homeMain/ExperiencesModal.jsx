import { useState } from "react";
import { monthArray, yearsArray } from "../../helpers/mixed";
import { useDispatch, useSelector } from "react-redux";
import { postUserExperience } from "../../redux/action";
const ExperiencesModal = ({ button }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const [qualification, setQualification] = useState("");
  const [employment, setEmployment] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [isCurrentJob, setIsCurrentJob] = useState(true);
  const [monthStart, setMonthStart] = useState("");
  const [yearStart, setYearStart] = useState("");
  const [monthEnd, setMonthEnd] = useState("");
  const [yearEnd, setYearEnd] = useState("");
  const [trade, setTrade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const day = new Date().getDate();
    const formData = {
      role: qualification,
      company: company,
      startDate: `${yearStart}-${monthStart.padStart(2, "0")}-${day}`,
      endDate: isCurrentJob ? null : `${yearEnd}-${monthEnd.padStart(2, "0")}-${day}`,
      description: employment,
      area: location
    };
    dispatch(postUserExperience(userData.username, JSON.stringify(formData)));
  };
  return (
    <div
      className="modal fade modal-lg"
      id="experiencesForm"
      tabIndex="-1"
      aria-labelledby="experiencesForm"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Aggiungi esperienza
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="container-fluid">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12"></div>
                  <div className="mb-3">
                    <label htmlFor="qualification" className="form-label">
                      Qualifica
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="qualification"
                      aria-describedby="emailHelp"
                      placeholder="Qualifica"
                      onChange={(e) => setQualification(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="employment" className="form-label">
                      Tipo di Impiego
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="employment"
                      placeholder="Tipo di Impiego"
                      onChange={(e) => setEmployment(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="company" className="form-label">
                      Azienda
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="company"
                      aria-describedby="emailHelp"
                      placeholder="Azienda"
                      onChange={(e) => setCompany(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="location" className="form-label">
                      Località
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      placeholder="Località"
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="isCurrentJob"
                      defaultChecked
                      onChange={() => setIsCurrentJob(!isCurrentJob)}
                    />
                    <label className="form-check-label" htmlFor="isCurrentJob">
                      Attualmente ricopro questo ruolo
                    </label>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <p className="small">Data inizio *</p>
                  </div>
                  <div className="col-6">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      defaultValue=""
                      onChange={(e) => setMonthStart(e.target.value)}
                      required
                    >
                      <option value="">Mese</option>
                      {monthArray.map((m, i) => (
                        <option key={`month-start-${i}`} value={i + 1} className="text-capitalize">
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-6">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      defaultValue=""
                      onChange={(e) => setYearStart(e.target.value)}
                      required
                    >
                      <option value="">Anno</option>
                      {yearsArray(50).map((y, i) => (
                        <option key={`years-start-${i}`} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <p className="small">Data fine *</p>
                  </div>
                  <div className="col-6">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      defaultValue=""
                      disabled={isCurrentJob}
                      onChange={(e) => setMonthEnd(e.target.value)}
                    >
                      <option value="">Mese</option>
                      {monthArray.map((m, i) => (
                        <option key={`month-end-${i}`} value={i + 1} className="text-capitalize">
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-6">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      defaultValue=""
                      disabled={isCurrentJob}
                      onChange={(e) => setYearEnd(e.target.value)}
                    >
                      <option value="">Anno</option>
                      {yearsArray(50).map((y, i) => (
                        <option key={`years-end-${i}`} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="mb-3">
                      <label htmlFor="trede" className="form-label">
                        Settore *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="trade"
                        placeholder="Settore"
                        onChange={(e) => setTrade(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Chiudi
            </button>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Salva
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExperiencesModal;
