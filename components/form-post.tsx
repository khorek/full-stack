// "use client";
import { useState } from "react";

const FormPost = () => {
  const [title, setTitle] = useState("");
  // Create post
  async function submitPost(e: React.FormEvent) {
    e.preventDefault();
    const data = await fetch(`/api/createPost`, {
      method: "POST",
      body: JSON.stringify({ title }),
    });
    const res = await data.json();
    if (!res.ok) {
      console.log("res", res);
    }
  }

  return (
    <form onSubmit={submitPost}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
      />
      <button
        type="submit"
        style={{
          margin: "0 0 0 10px",
          border: "1px solid #ccc",
          padding: "3px 10px",
        }}
        className="bg-teal-500 text-white py-2 px-4 rounded-md"
      >
        Add New Post
      </button>
    </form>
  );
};

export default FormPost;
