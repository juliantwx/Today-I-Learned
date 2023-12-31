import Post from "./Post";

function PostContainer() {
  const facts = [
    {
      id: 1,
      content: "React is being developed by Meta (formerly facebook)",
      source_link: "https://opensource.fb.com/",
      category_type: "technology",
      count_likes: 24,
      count_happy: 9,
      count_angry: 4,
      createdIn: 2021,
    },
    {
      id: 2,
      content:
        "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
      source_link:
        "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
      category_type: "society",
      count_likes: 11,
      count_happy: 2,
      count_angry: 0,
      createdIn: 2019,
    },
    {
      id: 3,
      content: "Lisbon is the capital of Portugal",
      source_link: "https://en.wikipedia.org/wiki/Lisbon",
      category_type: "society",
      count_likes: 8,
      count_happy: 3,
      count_angry: 1,
      createdIn: 2015,
    },
  ];

  return (
    <section>
      <ul className="post-container">
        {facts.map((post) => (
          <Post key={post.id} postObj={post} />
        ))}
        <li>
          <button className="load-button">Load More Facts</button>
        </li>
      </ul>
    </section>
  );
}

export default PostContainer;
