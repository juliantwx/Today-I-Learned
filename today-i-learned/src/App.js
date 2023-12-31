import "./style.css";
import Header from "./Header.js";
import SubmissionForm from "./SubmissionForm.js";
import CategoryFilter from "./CategoryFilter.js";
import PostContainer from "./PostContainer.js";

// The main component of the entire application
function App() {
  return (
    <div>
      <Header />
      <SubmissionForm />
      <main className="main">
        <CategoryFilter />
        <PostContainer />
      </main>
    </div>
  );
}

export default App;
