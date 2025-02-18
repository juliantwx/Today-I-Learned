import { createClient } from "@supabase/supabase-js";

// Create Supabase client
const supabaseUrl = "https://xhwemyzcpgqghyxthzif.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhod2VteXpjcGdxZ2h5eHRoemlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4NTE4MzksImV4cCI6MjA1NTQyNzgzOX0.5lhCTQkoUC_2XTuas4aDraOyb8gJUbpmIfT6IE7O5oo";
const supabase = createClient(supabaseUrl, supabaseKey);

// Fetches all existing posts from the database
async function fetchPostsFromDatabase() {
  try {
    let { data: Posts, error } = await supabase
      .from("Posts")
      .select("*")
      .order("id", { ascending: false });
    return Posts;
  } catch (error) {
    console.error(
      "An error has been encountered while fetching posts: ",
      error
    );
    return [];
  }
}

// Applies a filter and fetches all existing posts from the database
async function fetchFilteredPostsFromDatabase({ category }) {
  try {
    let { data: Posts, error } = await supabase
      .from("Posts")
      .select("*")
      .eq("category_type", category)
      .order("id", { ascending: false });
    return Posts;
  } catch (error) {
    console.error(
      "An error has been encountered while fetching filtered posts: ",
      error
    );
    return [];
  }
}

// Add a new post into Supabase
async function addNewPostToDatabase({ content, source_link, category_type }) {
  try {
    const { data, error } = await supabase
      .from("Posts")
      .insert([
        {
          content: content,
          source_link: source_link,
          category_type: category_type,
        },
      ])
      .select();
    return data;
  } catch (error) {
    console.error(
      "An error has been encountered while adding a new post to the database: ",
      error
    );
  }
}

export {
  supabase,
  fetchPostsFromDatabase,
  fetchFilteredPostsFromDatabase,
  addNewPostToDatabase,
};
