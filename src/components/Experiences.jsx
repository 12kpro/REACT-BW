import { useDispatch, useSelector } from "react-redux";
import { addUserData, getUserExperiences } from "../redux/action";
import CardTitle from "./homeMain/CardTitle";
import CardListItem from "./homeMain/CardListItem";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Experiences = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const userExperiences = useSelector((state) => state.experieces);

  useEffect(() => {
    if (!userData) {
      dispatch(addUserData());
    }
    if (!userExperiences.length) {
      dispatch(getUserExperiences());
    }
  }, []);

  return (
    <div
      className="container"
      style={{
        marginTop: "50px",
        marginLeft: "31px"
        /* paddingRight: "300px", */
      }}
    >
      <div className="row">
        <div className="col-1 d-none d-lg-block" style={{ width: "10%" }}></div>
        <div className="col-8 col-md-12" style={{ width: "63%" }}>
          <div className="card mt-2">
            <div className="card-body">
              <CardTitle title="Esperienze" />
              <ul className="list-unstyled">
                <CardListItem
                  title="Modalità creazione contenuti"
                  txt="Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi agli strumenti di creazione"
                />
              </ul>
            </div>
            <div className="card-footer bg-white text-body text-center">
              <Link to="/" className="text-secondary text-decoration-none">
                Mostra tutte le attività <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experiences;
