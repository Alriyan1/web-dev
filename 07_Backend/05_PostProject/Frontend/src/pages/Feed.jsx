import axios from "axios";
import { useEffect, useState } from "react";

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: "1",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      caption: "Beautiful sunset at the beach",
    },
  ]);

  useEffect(()=>{
    axios.get('http://localhost:3000/posts')
    .then((res)=>{
        setPosts(res.data.posts)
    })
  },[])

  return (
    <section className="feed-section">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))
      ) : (
        <h1>No posts available</h1>
      )}
    </section>
  );
};

export default Feed;
