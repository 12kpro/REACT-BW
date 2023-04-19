import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserMainCard from "./UserMainCard";
import CardSlider from "./CardSlider";
import CardPhoto from "./CardPhoto";

const UserMain = () => {
  const userData = useSelector((state) => state.userData);
  return (
    <>
      {userData && (
        <div className="col-12">
          <div className="card mt-4 user-main">
            <img src={userData.image} className="card-img-top placeholder" />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <CardPhoto src={userData.image} />
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
              <CardSlider />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default UserMain;
