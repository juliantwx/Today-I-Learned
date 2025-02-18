import { useState, useEffect } from "react";
import Post from "./Post.js";
import Data from "./Data.js";

function PostContainer({
  currentCategory,
  isPostsArrayUpdated,
  updatePostContainer,
}) {
  // Create a boolean to decide if posts are filtered
  const isFiltered = currentCategory !== "all";

  // Create a loading state
  const [isLoading, setLoadingState] = useState(false);

  // Get singleton instance of Data
  const data = Data.getInstance();

  // Fetch all existing posts from the database
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoadingState(true);
        await data.fetchAllPosts();
      } catch (e) {
        console.error(e);
      } finally {
        // Reset update flag
        if (isPostsArrayUpdated) updatePostContainer(false);
        setLoadingState(false);
      }
    };
    fetchPosts();
  }, [currentCategory, isPostsArrayUpdated]);

  // Get posts from Data
  const posts = isFiltered
    ? data.getAllFilteredPosts({ category: currentCategory })
    : data.getAllPosts();

  // Instantiate Post objects based on available post data
  return (
    <section className="post-container">
      {/* Check if posts are being loaded */}
      {isLoading ? (
        <p className="post-container-msg">
          {isFiltered
            ? `Loading posts related to ${currentCategory.toUpperCase()} from the server...`
            : "Loading posts from the server..."}
        </p>
      ) : posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <Post key={post.id} postObj={post} />
          ))}
        </ul>
      ) : (
        <p className="post-container-msg">
          {isFiltered
            ? `No ${currentCategory.toUpperCase()} posts available.`
            : "No posts available."}
        </p>
      )}
    </section>
  );
}

export default PostContainer;
