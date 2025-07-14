import { Link } from "react-router-dom";

function GIProductCard({ post }) {
  return (
    <div className="blog-card">
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.summary}</p>
      <Link to={`/product/${post.id}`}>Read More</Link>
    </div>
  );
}

export default GIProductCard;
