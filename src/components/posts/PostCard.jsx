import { Link } from "react-router-dom";
import { monthArray } from "../../helpers/mixed";
const PostCard = ({ Post, edit, setId }) => {
  const startDate = new Date(Post.startDate);
  const endDate = Post.endDate ? new Date(Post.endDate) : null;

  return (
    <div className="d-flex border-bottom py-3 ">
      <img src={Post.image ? Post.image : ""} alt={Post.username} height="50px" width="50px" />
      <div className="ps-1 flex-grow-1">
        <h3 className="fs-6 footer-links m-0">
          <span>{Post.company}</span>&#160;&#8208;&#160;<span>{Post.role}</span>
        </h3>
        <div>
          <span>{monthArray[startDate.getMonth()]}</span>&#160;
          <span>{startDate.getFullYear()}</span> &#160;&#8208;&#160;
          {endDate ? (
            <>
              <span>{monthArray[endDate.getMonth()]}</span>&#160;
              <span>{endDate.getFullYear()}</span>
            </>
          ) : (
            <span>in corso</span>
          )}
        </div>
        <div>{Post.description}</div>
      </div>
      {edit && (
        <button className="btn" data-bs-toggle="modal" data-bs-target="#PostsForm" onClick={() => setId(Post._id)}>
          <i className="bi bi-pencil"></i>
        </button>
      )}
    </div>
  );
};
export default PostCard;
