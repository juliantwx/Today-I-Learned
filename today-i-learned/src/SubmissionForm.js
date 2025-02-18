import { useState } from "react";
import ColorMap from "./ColorMap";
import Data from "./Data";

function SubmissionForm({ showForm, updatePostContainer }) {
  const [content, setContent] = useState("");
  const [source_link, setSource] = useState("");
  const [category_type, setCategory] = useState("");

  function onSubmitHandler(e) {
    // Prevent the browser from reloading
    e.preventDefault();

    // Discontinue submission process if data is invalid
    if (!content || !source_link || !category_type || content.length > 200) {
      alert(
        "Posting Rules:\n\n1. Your fact is required.\n2. The fact must be 200 characters or fewer.\n3. A source link is required.\n4. You must select a fact category."
      );
      return;
    }

    // Send data to the database
    Data.getInstance().addNewPost({
      content,
      source_link,
      category_type,
    });

    // Update post container
    updatePostContainer(true);

    // Reset input fields
    setContent("");
    setSource("");
    setCategory("");

    // Hide submission form
    showForm(false);
  }

  return (
    <form className="submission-form" onSubmit={onSubmitHandler}>
      <ul>
        <li>
          <input
            type="text"
            placeholder="Share a fact with the world"
            className="input-content form-input"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </li>
        <li className="word-counter form-element">
          <span>{200 - content.length}</span>
        </li>
        <li className="submission-confirmation">
          <input
            type="text"
            placeholder="Link to Source"
            className="input-link form-input"
            value={source_link}
            onChange={(e) => {
              setSource(e.target.value);
            }}
          />
          <select
            className="select-category form-input"
            value={category_type}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Choose Category</option>
            {Array.from(ColorMap.keys()).map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
          <button className="btn-post btn btn-large">Post</button>
        </li>
      </ul>
    </form>
  );
}

export default SubmissionForm;
