import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { data } from "../../assets/data.js";
import { slugify } from "../utils/slugify";
import ImageSlider from "./ImageSlider";
import Star from "../../assets/star_icon.png";
import Star_dull from "../../assets/star_dull_icon.png";
import { CartContext } from "../Cart/CartContext";

const ProductDetail = () => {
const { title, id } = useParams();
  const product = data.find((item) => {
    return String(item.id) === id && slugify(item.title) === title;
  });

  if (!product) {
    return <div className="p-10 text-center text-red-500">❌ Product Not Found</div>;
  }




  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Load reviews from localStorage
    const savedReviews = JSON.parse(localStorage.getItem(id)) || [];
    setReviews(savedReviews);
  }, [id]);

  useEffect(() => {
  document.title = product?.title || "Product Detail";
   }, [product]);
  useEffect(() => {
    localStorage.setItem(id, JSON.stringify(reviews));
  }, [reviews]);

  const handleAddToCart = () => {
    if (quantity < 1) {
      alert("Please select a valid quantity.");
      return;
    }
    addToCart(product, quantity);
    alert("Product added to cart!");
  };

  if (!product)
    return (
      <h2 className="text-center text-2xl mt-10 text-red-500">
        Product not found!
      </h2>
    );

  // Related products logic
  let relatedProduct = data.filter(
    (item) =>
      item.Category === product.Category &&
      item.id !== product.id
  );

  if (relatedProduct.length < 6) {
    const additional = data.filter(
      (item) =>
        item.gender === product.gender &&
        item.Category !== product.Category &&
        item.id !== product.id &&
        !relatedProduct.some((rp) => rp.id === item.id)
    );
    relatedProduct = [...relatedProduct, ...additional].slice(0, 6);
  }

  const handleReviewSubmit = () => {
    if (rating === 0 || comment.trim() === "") {
      alert("Please add a rating and comment.");
      return;
    }
    const newReview = { rating, comment };
    setReviews([...reviews, newReview]);
    setRating(0);
    setComment("");
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <ImageSlider image={product.image} />
        </div>
        <div className="md:w-1/2">
          <h4 className="text-3xl font-bold mb-4">{product.title}</h4>
          <p className="text-gray-600 line-clamp-3">{product.description}</p>
          <p className="mt-3 text-xl text-gray-800">
            Price:{" "}
            <span className="font-semibold">
              ${product.price || "Contact for price"}
            </span>
          </p>

          <div className="mt-6 flex items-center">
            <label htmlFor="quantity" className="mr-3 text-lg font-medium">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              className="w-16 p-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={handleAddToCart}
            disabled={quantity < 1}
            className={`mt-4 text-white py-2 px-8 rounded transition ${
              quantity < 1
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-yellow-500 hover:bg-yellow-700"
            }`}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Description */}
      <div>
        <h1 className="mt-8 font-bold text-2xl">Product Description:</h1>
        <p className="text-gray-600 mt-2">{product.description}</p>
      </div>

      {/* Review Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Customer Reviews</h3>
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet. Be the first to review!</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} className="border p-4 rounded-md shadow-sm mb-2">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={i < review.rating ? Star : Star_dull}
                    alt="star"
                    className="w-5 h-5"
                  />
                ))}
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))
        )}

        {/* Add Review */}
        <div className="mt-6 border p-4 rounded-md shadow-md">
          <h4 className="text-xl font-medium mb-2">Write a Review</h4>
          <div className="flex mb-2">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={i < rating ? Star : Star_dull}
                alt="star"
                className="w-6 h-6 cursor-pointer"
                onClick={() => setRating(i + 1)}
              />
            ))}
          </div>
          <textarea
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your review here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            onClick={handleReviewSubmit}
            className="mt-3 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Submit Review
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {relatedProduct.map((item) => (
            <Link
              to={`/details/${slugify(item.title)}/${item.id}`}
              key={item.id}
              className="bg-white p-4 rounded shadow hover:shadow-lg transition"
            >

              <img
                src={item.image?.[0] || "/default.jpg"}
                alt={item.title}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <p className="font-semibold text-lg text-gray-600">{item.title}</p>
              <p className="text-black bg-gray-200 text-center rounded mt-1">
                ${item.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
