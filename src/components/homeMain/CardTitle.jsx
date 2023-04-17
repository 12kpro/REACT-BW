const CardTitle = ({ title }) => {
  return (
    <div className="card-title">
      <h2 className="fs-5 m-0">{title}</h2>
      <p className="small text-secondary">
        <i className="bi bi-eye-fill pe-1"></i>
        Solo per te
      </p>
    </div>
  );
};
export default CardTitle;
