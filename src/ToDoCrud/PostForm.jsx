import { useState } from "react";
import PropTypes from "prop-types";
import "../App.css";
const PostForm = ({ onSubmit, initialValue }) => {
  const [post, setPost] = useState({
    title: initialValue.title || "",
    body: initialValue.body || "",
  });

  const handleChangeInput = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(post);
    setPost({
      title: "",
      body: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="animate-fade-in">
      <div className="space-y-6 bg-white p-6 rounded-xl shadow-md">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={handleChangeInput}
            className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 transition-colors"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            name="body"
            value={post.body}
            onChange={handleChangeInput}
            rows={6}
            className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 transition-colors"
            required
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="btn-primary inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

PostForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValue: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }),
};

export default PostForm;