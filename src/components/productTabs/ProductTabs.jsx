import React, { useState } from "react";
import "./ProductsTabs.css";

const ProductTabs = ({ description, reviews = [], ratingCount }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="product-tabs">
      <div className="tab-buttons">
        <button
          className={activeTab === "description" ? "active" : ""}
          onClick={() => setActiveTab("description")}>
          Description
          
        </button>
        <button
          className={activeTab === "reviews" ? "active" : ""}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews ({ratingCount || reviews.length})
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "description" && (
          <p className="description-text">{description}</p>
        )}
        {activeTab === "reviews" && (
          <div className="reviews-content">
            {reviews.length === 0 ? (
              <p>No reviews yet.</p>
            ) : (
              reviews.map((review, idx) => (
                <div key={idx} className="review-item">
                  <p><b>{review.author}</b></p>
                  <p>{review.comment}</p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
