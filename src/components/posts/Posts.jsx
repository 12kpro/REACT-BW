import { useDispatch, useSelector } from "react-redux";
import { addUserData, getUserPosts } from "../../redux/action";
import CardTitle from "../homeMain/CardTitle";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";
import PostsModal from "./PostsModal";

const Posts = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const userPosts = useSelector((state) => state.posts);
  const [selectedId, setSelectedId] = useState();

  useEffect(() => {
    if (!userData) {
      dispatch(addUserData());
    }
    /*
    if (!userPosts.length) {
      dispatch(getUserPosts(userData._id));
    }
    */
  }, []);
  useEffect(() => {
    if (userData) {
      /*
    if (!users.length) {
      dispatch(addUsers());
    }*/
      if (!userPosts.length) {
        dispatch(getUserPosts(userData._id));
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
          <div className="card mt-2">
            <div className="card-body">
              <CardTitle title="Esperienze" />
              <ul className="list-unstyled">
                {userPosts.map((Post) => (
                  <PostCard key={Post._id} edit Post={Post} setId={setSelectedId} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <PostsModal id={selectedId} />
    </div>
  );
};
export default Posts;
