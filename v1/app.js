// Submission Form Segment
const formButton = document.querySelector(".btn-form");
const submissionForm = document.querySelector(".submission-form");

formButton.addEventListener("click", () => {
  // Display form and update button's text if button is pressed by removing the <hideable> class tag
  if (submissionForm.classList.contains("hideable")) {
    submissionForm.classList.remove("hideable");
    formButton.textContent = "Close";
  }

  // Else, hide the form and update button's text
  else {
    submissionForm.classList.add("hideable");
    formButton.textContent = "Post a Fact";
  }
});

// Category Tags Segment
const categoryButtons = document.querySelector(".category-buttons");

// Create a map to store different colors for each category
let colorMap = new Map();
colorMap.set("technology", "#3b82f6");
colorMap.set("science", "#16a34a");
colorMap.set("finance", "#ef4444");
colorMap.set("society", "#eab308");
colorMap.set("entertainment", "#db2777");
colorMap.set("health", "#14b8a6");
colorMap.set("history", "#f97316");
colorMap.set("news", "#8b5cf6");

// Create a category button for each category
colorMap.forEach((value, key) => {
  categoryButtons.insertAdjacentHTML(
    "beforeend",
    `<li>
    <button
      class="btn btn-sidemenu-specific"
      style="background-color:${value}"
    >
      ${key}
    </button></li>`
  );
});

// Post Container Segment
const postContainer = document.querySelector(".post-container");

// Clear post container
postContainer.innerHTML = "";

// Retrieve posts from Supabase
loadPosts();
async function loadPosts() {
  const res = await fetch(
    "https://zwugjynnelzymrzeelpu.supabase.co/rest/v1/Posts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3dWdqeW5uZWx6eW1yemVlbHB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxNDc3NDgsImV4cCI6MjAxODcyMzc0OH0.739kGMgVHVenndRjwbSerxJ054UGxCo5ybNxLxDzc0g",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3dWdqeW5uZWx6eW1yemVlbHB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxNDc3NDgsImV4cCI6MjAxODcyMzc0OH0.739kGMgVHVenndRjwbSerxJ054UGxCo5ybNxLxDzc0g",
      },
    }
  );

  // Convert data into json format
  const data = await res.json();

  // Retrieve filtered data
  // const filteredData = data.filter((el) => el.category_type === "technology");

  // Create new posts elements based on available filtered data
  data.forEach((post) =>
    postContainer.insertAdjacentHTML(
      "afterbegin",
      `<li class="post">
      <p class="post-content">
        ${post.content}
      </p>
      <ul>
        <li>
          <a
            href=${post.source_link}
            target="_blank"
            class="source-link"
            >Source</a
          >
        </li>
        <li class="category-tag">
            <span
              class="tag"
              style="background-color: ${colorMap.get(
                post.category_type
              )}; margin-right: 10px"
              >${post.category_type}</span
            >
        </li>
        <li class="rating-container">
            <button>👍 <strong>${post.count_likes}</strong></button>
            <button>😁 <strong>${post.count_happy}</strong></button>
            <button>😡 <strong>${post.count_angry}</strong></button>
        </li>
      </ul>
    </li>`
    )
  );
}
