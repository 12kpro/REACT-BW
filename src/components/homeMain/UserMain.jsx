import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserMainCard from "./UserMainCard";

const UserMain = () => {
  const userData = useSelector((state) => state.userData);
  return (
    <div className="col-12">
      <div className="card mt-4 user-main">
        <img src={userData.image} className="card-img-top placeholder" />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="top-card--photo">
              <div className="top-card__photo-wrapper">
                <div className="top-card__edit-photo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    fill="currentColor"
                    className="bi bi-camera position-absolute top-50 start-50 translate-middle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                    <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                  </svg>
                  <button aria-label="Modifica foto" className="top-card__edit-photo-button" type="button"></button>
                </div>
              </div>
            </div>

            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg>
            </Link>
          </div>
          <h5 className="card-title">{`${userData.name} ${userData.surname}`}</h5>
          <p className="mb-1">
            {userData.area}&#xa0; &#183;&#xa0;<Link to="/"> Informazioni di contatto</Link>
          </p>
          <Link to="/">5 collegamenti</Link>
          <div className="mt-2 mb-4">
            <button className="btn btn-primary rounded-pill">Disponibile per</button>
            <button className="btn btn-outline-primary rounded-pill mx-2">Aggiungi sezione profilo</button>
            <button className="btn btn-outline-secondary rounded-pill">Altro</button>
          </div>
          <div className="d-flex flex-row overflow-x-auto gap-3 flex-nowrap slider">
            <UserMainCard />
            <UserMainCard />
            <UserMainCard />
            <UserMainCard />
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserMain;
