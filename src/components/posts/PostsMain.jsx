import { useSelector } from "react-redux";
import { useState } from "react";
//import ExperienceCard from "./ExperienceCard";
//import ExperiencesModal from "./ExperiencesModal";
import { Link } from "react-router-dom";
import PhotoUploadModal from "../profile/PhotoUploadModal";
import PostsModal from "./PostsModal";
import PostCard from "./PostCard";

const PostsMain = ({ edit, back = false }) => {
  const items = useSelector((state) => state.posts);
  const [selectedId, setSelectedId] = useState();

  return (
    <div className="card mt-2">
      <div className="card-body pb-0">
        <div className="card-title">
          <div className="d-flex align-items-center">
            {back && (
              <Link className="btn btn-linkedin rounded-circle" to="/">
                <i className="bi bi-arrow-left"></i>
              </Link>
            )}
            <div className="flex-grow-1">
              <h2 className="fs-5 m-0 ">Attività</h2>
              <p className="small text-secondary m-0">
                <i className="bi bi-eye-fill pe-1"></i>
                Solo per te
              </p>
            </div>

            <button className="btn btn-linkedin rounded-circle" data-bs-toggle="modal" data-bs-target="#PostsForm">
              <i className="bi bi-plus"></i>
            </button>
            {edit && (
              <Link className="btn btn-linkedin rounded-circle" to="/posts">
                <i className="bi bi-pencil"></i>
              </Link>
            )}
          </div>
        </div>
        <ul className="list-unstyled items-list m-0">
          {edit
            ? items.slice(0, 5).map((post) => <PostCard key={post._id} post={post} />)
            : items.map((post) => <PostCard key={post._id} edit post={post} setId={setSelectedId} />)}
        </ul>
      </div>
      {edit && (
        <div className="card-footer bg-white text-body text-center">
          <Link to="/posts" className="text-secondary text-decoration-none">
            Mostra tutte le attività {items.length ? <>&#40; {items.length} &#41;</> : ""}
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      )}

      <PostsModal id={selectedId} />
      <PhotoUploadModal id={selectedId} dataProp="experience" />
    </div>
  );
};
export default PostsMain;
