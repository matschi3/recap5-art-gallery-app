import React, { useState } from "react";

const CommentForm = ({ onSubmitComment }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitComment(comment);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment..."
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default CommentForm;
