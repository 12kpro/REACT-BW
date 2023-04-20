const PostListCard = ({ post, edit, setId }) => {
  return (
    <div className=" border-bottom py-3 ">
      <div className="d-flex ps-1 ">
        <h3 className="fs-6 footer-links m-0 flex-grow-1">
          {post.user && (
            <>
              <span>{post.user.name}</span>&#160;<span>{post.user.surname}</span>
            </>
          )}
        </h3>
        {edit && (
          <>
            <button className="btn" data-bs-toggle="modal" data-bs-target="#PostsForm" onClick={() => setId(post._id)}>
              <i className="bi bi-pencil"></i>
            </button>
            <button
              className="btn"
              data-bs-toggle="modal"
              data-bs-target="#UploadPhoto"
              onClick={() => setId(post._id)}
            >
              <i className="bi bi-image"></i>
            </button>
          </>
        )}
      </div>
      <div className="text-center">{post.text}</div>
      {post.image && <img src={post.image} className="img-fluid" />}
    </div>
  );
};
export default PostListCard;
