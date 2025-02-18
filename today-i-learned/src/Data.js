import {
  fetchPostsFromDatabase,
  fetchFilteredPostsFromDatabase,
  addNewPostToDatabase,
} from "./Supabase.js";

let instance = null;
let posts = [];

// Singleton class used to handle all post data.
// All components will refer to this class to retrieve posts.
class Data {
  constructor() {
    // If an instance of this object still does not exists,
    // Set this object as the primary instance
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  // Return an existing or new instance of Data
  static getInstance() {
    if (!instance) instance = new Data();
    return instance;
  }

  // Returns all existing posts
  getAllPosts() {
    return posts;
  }

  // Returns a filtered array based on category
  getAllFilteredPosts({ category }) {
    return posts.filter((post) => post.category_type === category);
  }

  // Fetches all posts from the database via Supabase
  async fetchAllPosts() {
    posts = await fetchPostsFromDatabase();
  }

  // Fetches all filtered posts from the database via Supabase
  async fetchAllFilteredPosts({ category }) {
    posts = await fetchFilteredPostsFromDatabase({
      category: category,
    });
  }

  // Adds a new post to the database
  async addNewPost({ content, source_link, category_type }) {
    // Add post into the database
    const newPost = await addNewPostToDatabase({
      content,
      source_link,
      category_type,
    });

    // Push new post into existing post list
    posts.push(newPost);
  }
}

export default Data;
