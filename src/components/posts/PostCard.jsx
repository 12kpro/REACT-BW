const PostCard = ({ post, edit, setId }) => {
  return (
    <div className="d-flex border-bottom py-3 ">
      <div className="ps-1 flex-grow-1">
        <h3 className="fs-6 footer-links m-0">
          <span>{post.user.name}</span>&#160;<span>{post.user.surname}</span>
        </h3>
        <div>{post.text}</div>
      </div>
      {edit && (
        <button className="btn" data-bs-toggle="modal" data-bs-target="#PostsForm" onClick={() => setId(post._id)}>
          <i className="bi bi-pencil"></i>
        </button>
      )}
    </div>
  );
};
export default PostCard;
