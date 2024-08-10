import PropTypes from "prop-types";
const Blog = ({ blog }) => {
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
    <div>
      <img src={cover} alt="" />
      <div className="flex justify-between">
        <div className="flex gap-4">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h2>{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min time</span>
        </div>
      </div>
      <h1 className="text-4xl">{title}</h1>
      {hashtags.map((hash, idx) => (
        <span key={idx}>
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
