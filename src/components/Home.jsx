import { useDispatch } from "react-redux";
import UserMain from "./homeMain/UserMain";
import { useEffect } from "react";
import { addUserData } from "../redux/action";
import CardTitle from "./homeMain/CardTitle";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addUserData());
  }, []);

  return (
    <div className="container">
      <div className="row">
        <main className="col-7 offset-2">
          <div className="row">
            <UserMain />
            <div className="col-12">
              <div class="card mt-2">
                <div class="card-body">
                  <CardTitle title="Consigliato per te" />
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div class="card mt-2">
                <div class="card-body">
                  <CardTitle title="Analisi" />
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div class="card mt-2">
                <div class="card-body">
                  <CardTitle title="Risorse" />
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div class="card mt-2">
                <div class="card-body">
                  <CardTitle title="Attività" />
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <aside className="col-3"></aside>
      </div>
    </div>
  );
};
export default Home;
