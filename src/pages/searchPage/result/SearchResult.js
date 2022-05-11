import { FavoriteBorder, Star } from "@material-ui/icons";
import "./SearchResult.css";
function SearchResult({
  src,
  title,
  description,
  price,
  star,
  total,
  location,
}) {
  return (
    <div className="searchResult">
      <img src={src} alt="" />
      <FavoriteBorder className="searchResult_heart" />
      <div className="searchResult_info">
        <div className="searchResult_info_top">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>
        <div className="searchResult_info_bottom">
          <div className="searchResult_stars">
            <Star className="searchResult_star_icon" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResult_price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchResult;
