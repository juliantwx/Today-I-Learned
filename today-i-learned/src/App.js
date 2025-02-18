import { useState } from "react";
import "./style.css";
import Header from "./Header.js";
import SubmissionForm from "./SubmissionForm.js";
import CategoryFilter from "./CategoryFilter.js";
import PostContainer from "./PostContainer.js";

// The main component of the entire application
function App() {
  // Create useState to dictate whether the submission form should be visible
  const [showForm, setVisibility] = useState(false);

  // Create useState to dictate categories that should be displayed
  const [currentCategory, setCurrentCategory] = useState("all");

  // Create useState to keep track of changes to posts array
  const [isPostsArrayUpdated, setUpdateStatus] = useState(false);

  // Return JSX of entire application
  return (
    <div>
      <Header isFormVisible={showForm} showForm={setVisibility} />
      {showForm ? (
        <SubmissionForm
          showForm={setVisibility}
          updatePostContainer={setUpdateStatus}
        />
      ) : null}
      <main className="main">
        <CategoryFilter setCurrentCategory={setCurrentCategory} />
        <PostContainer
          currentCategory={currentCategory}
          isPostsArrayUpdated={isPostsArrayUpdated}
          updatePostContainer={setUpdateStatus}
        />
      </main>
    </div>
  );
}

export default App;
