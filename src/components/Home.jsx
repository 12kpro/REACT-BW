import { useDispatch, useSelector } from "react-redux";
import UserMain from "./homeMain/UserMain";
import { useEffect } from "react";
import { addUserData, addUsers } from "../redux/action";
import CardTitle from "./homeMain/CardTitle";
import CardListItem from "./homeMain/CardListItem";
import { Link } from "react-router-dom";
import CardSlider from "./homeMain/CardSlider";
import AsideBox from "./aside/AsideBox";

const Home = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const users = useSelector((state) => state.users);

  useEffect(() => {
    if (!userData) {
      dispatch(addUserData());
    }
    if (!users.length) {
      dispatch(addUsers());
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <main className="col-7 offset-2">
          <div className="row">
            <UserMain />
            <div className="col-12">
              <div className="card mt-2">
                <div className="card-body">
                  <CardTitle title="Consigliato per te" />
                  <CardSlider />
                </div>
              </div>
              <div className="card mt-2">
                <div className="card-body">
                  <CardTitle title="Analisi" />
                  <ul className="list-unstyled">
                    <CardListItem
                      icon="bi-people-fill"
                      title="0 visualizzazioni del profilo"
                      txt="Aggiorna il tuo profilo per attrarre visitatori."
                    />
                  </ul>
                </div>
              </div>
              <div className="card mt-2">
                <div className="card-body">
                  <CardTitle title="Risorse" />
                  <ul className="list-unstyled">
                    <CardListItem
                      icon="bi-broadcast-pin"
                      title="Modalità creazione contenuti"
                      txt="Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi agli strumenti di creazione"
                      badge="no"
                    />
                    <CardListItem
                      icon="bi-people-fill"
                      title="La mia rete"
                      txt="Salva e gestisci i tuoi collegamenti e interessi."
                    />
                  </ul>
                </div>
                <div className="card-footer bg-white text-body text-center">
                  <Link to="/" className="text-secondary text-decoration-none">
                    Mostra tutte le risorse <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="card mt-2">
                <div className="card-body">
                  <CardTitle title="Attività" />
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
        </main>
        <aside className="col-3">
          <AsideBox title="Persone che potresti conoscere" />
        </aside>
      </div>
    </div>
  );
};
export default Home;
