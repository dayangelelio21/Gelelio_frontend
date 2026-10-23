
import { useState } from "react";
import { storePost } from "../../services/postService";

export default function Post() {
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    if (!message.trim()) {
      setError("Post cannot be empty");
      return;
    }

    setProcessing(true);
    setError("");

    try {
      const response = await storePost({ message });

      const newPost = response.data.data || response.data;

      setPosts((prevPosts) => [newPost, ...prevPosts]);
      setMessage("");
    } catch (err) {
      const errMsg =
        err.response?.data?.message || "Failed to share post";

      setError(errMsg);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="post-container">
      <h2>Create a Post</h2>

      <form onSubmit={submit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What's on your mind?"
          disabled={processing}
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit" disabled={processing}>
          {processing ? "Sharing..." : "Share Post"}
        </button>
      </form>

      <div className="posts-list">
        <h2>Posts</h2>

        {posts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          posts.map((post, index) => (
            <div className="post-card" key={post.id ?? index}>
              <p>{post.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
