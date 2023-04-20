import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUserData, addUsers } from "../redux/action";
import AsideBox from "./aside/AsideBox";
import PostCard from "./posts/PostCard";
import PostsModal from "./posts/PostsModal";
import PhotoUploadModal from "./profile/PhotoUploadModal";
import { getUserPosts } from "../redux/action/posts";
import ProfilePhotoModal from "./profile/ProfilePhotoModal";
import { Link } from "react-router-dom";

const Home = () => {
  /*
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const users = useSelector((state) => state.users);
  */
  const posts = useSelector((state) => state.posts);
  const [selectedId, setSelectedId] = useState();
  const userData = useSelector((state) => state.userData);

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
          <div className="card">
            <div>
              {" "}
              {userData.image ? (
                <img className="card-img-top" src={userData.image} />
              ) : (
                <i class="bi bi-camera"></i>
              )}{" "}
            </div>
            <div className="card-body">
              <h5 className="card-title">Ti diamo il benvenuto {`${userData.name}`}!</h5>
              <Link to="/" data-bs-toggle="modal" data-bs-target="#UploadPhotoProfile">
                Aggiungi una foto
              </Link>
              <ProfilePhotoModal />
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Collegamenti</li>
              <li className="list-group-item">
                <Link className="text-decoration-none" to="/">
                  <div className="d-flex justify-content-center"></div>
                  <p
                    className=""
                    style={{
                      fontSize: "small",
                      maxWidth: "125px",
                      textDecoration: "underline",
                      lineHeight: "15px",
                    }}
                  >
                    Prova Premium gratuitamente
                  </p>
                </Link>
              </li>
              <li className="list-group-item">I miei elementi</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </div>
          <div class="card mt-2 sticky-top">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Gruppi</li>
              <li class="list-group-item">Eventi</li>
              <li class="list-group-item">Hashtag seguiti</li>
            </ul>
          </div>
        </div>

        <div className="col-6">
          <div className="card mb-3">
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

          {posts.map((post) => (
            <PostCard key={post._id} edit post={post} setId={setSelectedId} />
          ))}
          <PostsModal id={selectedId} />
          <PhotoUploadModal id={selectedId} dataProp="post" />
        </div>
        <div className="col-3 d-none d-md-block">
          {/*  <aside>
            <AsideBox title="Persone che potresti conoscere" />
          </aside> */}

          <div class="card">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
              <li class="list-group-item">A third item</li>
              <li class="list-group-item">A third item</li>
              <li class="list-group-item">A third item</li>
            </ul>
          </div>
          <img
            src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
            alt="Advertise on LinkedIn"
            border="0"
            className="sticky-top mt-2 rounded"
            style={{ width: "262px" }}
          ></img>

          <div className="mt-4 footer-home">
            <div className="d-flex justify-content-center">
              <div className="mx-3">
                <Link to="/" alt="footer link" className="footer-links">
                  Informazioni
                </Link>
              </div>
              <div>
                <Link to="/" alt="footer link" className="footer-links">
                  Accessibilità
                </Link>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="mx-2">
                <Link to="/" alt="footer link" className="footer-links">
                  Centro Assistenza
                </Link>
              </div>
              <div>
                <div className="dropdown">
                  <button
                    className="btn bg-trasparent btn-sm dropdown-toggle p-0 m-0 footer-links"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Privacy e Condizioni
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item " to="/">
                        Informativa sulla privacy
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item " to="/">
                        Contratto di licenza
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item " to="/">
                        Informativa sui cookie
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item " to="/">
                        Informativa sul copyright
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link to="/" alt="footer link" className="footer-links">
                Opzioni per gli annunci pubblicitari
              </Link>
            </div>
            <div className="d-flex justify-content-center">
              <div className="mx-3">
                <Link to="/" alt="footer link" className="footer-links">
                  Pubblicità
                </Link>
              </div>
              <div>
                <div className="dropdown">
                  <button
                    className="btn bg-trasparent btn-sm dropdown-toggle p-0 m-0 footer-links"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Servizi alle aziende
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item " to="/">
                        Informativa sulla privacy
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item " to="/">
                        Contratto di licenza
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item " to="/">
                        Informativa sui cookie
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item " to="/">
                        Informativa sul copyright
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="mx-3">
                <Link to="/" alt="footer link" className="footer-links">
                  Scarica l'app Linkedin
                </Link>
              </div>
              <div>
                <Link to="/" alt="footer link" className="footer-links">
                  Altro
                </Link>
              </div>
            </div>
            <div className="text-center mb-2 mt-2 fw-light copyright"> Linkedin Corporation © 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
