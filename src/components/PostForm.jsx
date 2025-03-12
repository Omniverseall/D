import { useState } from "react"
import PropTypes from 'prop-types';

const PostForm = ({ onSubmit, initialValue }) => {
  const [post, setPost] = useState({
    title: initialValue.title || "",
    body: initialValue.body || ""
  });

  const handleChangeInput = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    })
  }

  const renderField = (label) => (
    <div>
      <label>{label}</label>
      <input onChange={handleChangeInput} type="text" name={label.toLowerCase()} value={post[label.toLowerCase()]} />
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(post);
    setPost({
      title: "",
      body: ""
    })

  }

  return (
    <form onSubmit={handleSubmit}>
      {renderField('Title')}
      {renderField('Body')}
      <button type="submit">Submit</button>
    </form>
  )
}
PostForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValue: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string
  })
};

export default PostForm