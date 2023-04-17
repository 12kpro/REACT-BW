import UserMainCard from "./UserMainCard";

const CardSlider = ({ cards }) => {
  return (
    <div className="d-flex flex-row overflow-x-auto gap-3 flex-nowrap slider">
      <UserMainCard button={{ type: "button", txt: "aggiungi una competenza", icon: "bi-person-plus-fill pe-2" }} />
      <UserMainCard button={{ type: "button", txt: "aggiungi una competenza" }} />
      <UserMainCard button={{ type: "button", txt: "aggiungi una competenza" }} />
      <UserMainCard button={{ type: "link", txt: "aggiungi una competenza" }} />
    </div>
  );
};
export default CardSlider;
