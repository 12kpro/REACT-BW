import { useDispatch, useSelector } from "react-redux";
import UserMain from "./profile/UserMain";
import { useEffect } from "react";
import { addUserData, addUsers, getUserExperiences } from "../redux/action";
import CardTitle from "./profile/CardTitle";
import CardListItem from "./profile/CardListItem";
import { Link } from "react-router-dom";
import CardSlider from "./profile/CardSlider";
import AsideBox from "./aside/AsideBox";
import { suggestedCards } from "../helpers/cards";
import ExperienceCard from "./experience/ExperienceCard";
import ExperiencesMain from "./experience/ExperiencesMain";
import PostsMain from "./posts/PostsMain";
const Home = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const users = useSelector((state) => state.users);
  const userExperiences = useSelector((state) => state.experieces);

  useEffect(() => {
    if (!userData) {
      dispatch(addUserData());
    }
  }, []);
  useEffect(() => {
    if (userData) {
      if (!users.length) {
        dispatch(addUsers());
      }
      if (!userExperiences.length) {
        dispatch(getUserExperiences(userData._id));
      }
    }
  }, [userData]);
  return (
    <div className="container">
      <div className="row">
        {/*}   <main className="col-7 offset-2">
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
        </aside> */}
        <div className=" col-3">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">
                Card link
              </a>
              <a href="#" class="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex mb-3">
                <img
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                  alt="Vai al profilo di mauro simoni"
                  className="photo-circle flex-shrink-0"
                />
                <button className="rounded-pill flex-grow-1" data-bs-toggle="modal" data-bs-target="#PostsForm">
                  Avvia un post
                </button>
              </div>
              <div className="d-flex justify-content-between">
                <button className="btn btn-linkedin">
                  <i className="bi bi-image-fill"></i>
                  <span className="ps-2">Foto</span>
                </button>
                <button className="btn btn-linkedin">
                  <i className="bi bi-play-btn-fill"></i>
                  <span className="ps-2">Video</span>
                </button>
                <button className="btn btn-linkedin">
                  <i className="bi bi-calendar-date"></i>
                  <span className="ps-2">Evento</span>
                </button>
                <button className="btn btn-linkedin">
                  <i className="bi bi-text-indent-left"></i>
                  <span className="ps-2">Scrivi un articolo</span>
                </button>
              </div>
            </div>
          </div>
          <PostsMain edit />
        </div>
        <div className="col-3 d-none d-md-block">
          <aside>
            <AsideBox title="Persone che potresti conoscere" />
          </aside>
        </div>
      </div>
    </div>
  );
};
export default Home;
