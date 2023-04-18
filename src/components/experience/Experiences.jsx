import { useDispatch, useSelector } from "react-redux";
import { addUserData, getUserExperiences } from "../../redux/action";
import CardTitle from "../homeMain/CardTitle";
import CardListItem from "../homeMain/CardListItem";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ExperienceCard from "./ExperienceCard";
import ExperiencesModal from "./ExperiencesModal";

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
                {userExperiences.map((experience) => (
                  <ExperienceCard key={experience._id} edit experience={experience} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ExperiencesModal />
    </div>
  );
};
export default Experiences;
