import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export default function Product({
  _id,
  title,
  description,
  cover,
  price,
  createdAt,
  //   author,
}) {
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={"http://localhost:5000/" + cover} alt="" />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          {/* <li>{author.username}</li> */}
          <time>{`Création : ${formatISO9075(new Date(createdAt))}`}</time>
        </p>
        <p className="summary">{description}</p>
        <p>{`${price} €`}</p>
      </div>
    </div>
  );
}
