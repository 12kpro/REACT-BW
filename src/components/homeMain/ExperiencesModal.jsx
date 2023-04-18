import { useState } from "react";
import { monthArray, yearsArray } from "../../helpers/mixed";
const ExperiencesModal = ({ button }) => {
  const [qualification, setIsCurrentJob] = useState();
  const [employment, setEmployment] = useState();
  const [company, setCompany] = useState();
  const [location, setLocation] = useState();
  const [monthStart, setMonthStart] = useState();
  const [yearStart, setYearStart] = useState();
  const [monthEnd, setMonthEnd] = useState();
  const [yearEnd, setYearEnd] = useState();
  const [trade, setTrade] = useState();

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
              <form>
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
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="employment" className="form-label">
                      Tipo di Impiego
                    </label>
                    <input type="text" className="form-control" id="employment" placeholder="Tipo di Impiego" />
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
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="location" className="form-label">
                      Località
                    </label>
                    <input type="text" className="form-control" id="location" placeholder="Località" />
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="isCurrentJob" defaultChecked />
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
                    <select className="form-select" aria-label="Default select example" defaultValue="">
                      <option value="">Mese</option>
                      {monthArray.map((m, i) => (
                        <option key={`month-start-${i}`} value={i} className="text-capitalize">
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-6">
                    <select className="form-select" aria-label="Default select example" defaultValue="">
                      <option value="">Anno</option>
                      {yearsArray(50).map((y, i) => (
                        <option key={`years-start-${i}`} value={i}>
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
                    <select className="form-select" aria-label="Default select example" defaultValue="">
                      <option value="">Mese</option>
                      {monthArray.map((m, i) => (
                        <option key={`month-end-${i}`} value={i} className="text-capitalize">
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-6">
                    <select className="form-select" aria-label="Default select example" defaultValue="">
                      <option value="">Anno</option>
                      {yearsArray(50).map((y, i) => (
                        <option key={`years-end-${i}`} value={i}>
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
                      <input type="text" className="form-control" id="trade" placeholder="Settore" />
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
            <button type="button" className="btn btn-primary">
              Salva
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExperiencesModal;
