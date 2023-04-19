import { useDispatch, useSelector } from "react-redux";
import { addUserData, getUserExperiences } from "../../redux/action";
import CardTitle from "../profile/CardTitle";
import CardListItem from "../profile/CardListItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExperienceCard from "./ExperienceCard";
import ExperiencesModal from "./ExperiencesModal";
import ExperiencesMain from "./ExperiencesMain";

const Experiences = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const userExperiences = useSelector((state) => state.experieces);
  const [selectedId, setSelectedId] = useState();

  useEffect(() => {
    if (!userData) {
      dispatch(addUserData());
    }
    /*
    if (!userExperiences.length) {
      dispatch(getUserExperiences(userData._id));
    }
    */
  }, []);
  useEffect(() => {
    if (userData) {
      /*
    if (!users.length) {
      dispatch(addUsers());
    }*/
      if (!userExperiences.length) {
        dispatch(getUserExperiences(userData._id));
      }
    }
  }, [userData]);
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
          <ExperiencesMain back />
        </div>
      </div>
      <ExperiencesModal id={selectedId} />
    </div>
  );
};
export default Experiences;
