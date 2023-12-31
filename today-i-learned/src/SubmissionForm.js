function SubmissionForm() {
  return (
    <form className="submission-form hideable">
      <ul>
        <li>
          <input
            type="text"
            placeholder="Share a fact with the world"
            className="input-content form-input"
          />
        </li>
        <li className="word-counter form-element">
          <span>200</span>
        </li>
        <li className="submission-confirmation">
          <input
            type="text"
            placeholder="Link to Source"
            className="input-link form-input"
          />
          <select className="select-category form-input">
            <option value="">Choose Category</option>
            <option value="tech">Technology</option>
            <option value="science">Science</option>
            <option value="finance">Finance</option>
          </select>
          <button className="btn-post btn btn-large">Post</button>
        </li>
      </ul>
    </form>
  );
}

export default SubmissionForm;
