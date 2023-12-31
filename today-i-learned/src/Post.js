import ColorMap from "./ColorMap";

function Post({ postObj }) {
  return (
    <li className="post">
      <p className="post-content">{postObj.content}</p>
      <ul>
        <li>
          <a href={postObj.source_link} target="_blank" className="source-link">
            Source
          </a>
        </li>
        <li className="category-tag">
          <span
            className="tag"
            style={{
              backgroundColor: ColorMap.get(postObj.category_type),
              marginRight: "10px",
            }}
          >
            {postObj.category_type}
          </span>
        </li>
        <li className="rating-container">
          <button>
            👍 <strong>{postObj.count_likes}</strong>
          </button>
          <button>
            😁 <strong>{postObj.count_happy}</strong>
          </button>
          <button>
            😡 <strong>{postObj.count_angry}</strong>
          </button>
        </li>
      </ul>
    </li>
  );
}

export default Post;
