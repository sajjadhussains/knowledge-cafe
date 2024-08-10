import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddBookmark }) => {
  const {
    title,
    cover,
    author_img,
    author,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img className="mb-8" src={cover} alt="" />
      <div className="flex justify-between mb-8">
        <div className="flex gap-4">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h2>{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min time</span>
          <button
            onClick={() => handleAddBookmark(blog)}
            className="ms-2 text-red-600"
          >
            <FaBookmark />
          </button>
        </div>
      </div>
      <h1 className="text-4xl mb-4">{title}</h1>
      {hashtags.map((hash, idx) => (
        <span className="me-2" key={idx}>
          <a href="">{hash}</a>
        </span>
      ))}
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
