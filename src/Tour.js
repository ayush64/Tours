import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTours }) => {
  const [showLess, setShowLess] = useState(true);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {showLess ? `${info.substring(0, 200)}...` : info}
          <button onClick={() => setShowLess(!showLess)}>
            {showLess ? "read more" : "read less"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTours(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
