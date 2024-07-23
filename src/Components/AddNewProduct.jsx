import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/user/userSlice";
import { WithContext as ReactTags } from 'react-tag-input';
import { useNavigate } from "react-router-dom";
import { auth } from "../hooks/auth";

export default function AddNewProduct({ close }) {
  const user = auth();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    category: "",
    subCategory: "",
    stockQuantity: 0,
    imageURL: [],
    brand: "",
    weight: "",
    length: 0,
    width: 0,
    height: 0,
    color: "",
    material: "",
    keywords: [],
    rating: 0,
    discounts: "",
    availabilityStatus: "available",
    vendorId: user.id,
  });
  const [tags, setTags] = useState([]);
  const [suggestions, setSuggestions] = useState([
    { id: 'electronics', text: 'Electronics' },
    { id: 'clothing', text: 'Clothing' },
    { id: 'home', text: 'Home' }
  ]);

  const handleDelete = (i) => {
    const updatedTags = tags.filter((tag, index) => index !== i);
    setTags(updatedTags);

    const updatedKeywords = formData.keywords.filter((_, index) => index !== i);
    setFormData({ ...formData, keywords: updatedKeywords });
  };

  const handleDrag = () => {};

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
    setFormData({ ...formData, keywords: [...formData.keywords, tag.text] });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setFormData({ ...formData, category: category });

    // Update sub-categories based on selected category
    let subCategoryOptions = [];
    if (category === "physicalProduct") {
      subCategoryOptions = ["Home Appliances", "Electronics"];
    } else if (category === "digitalAsset") {
      subCategoryOptions = ["Assignments", "Projects"];
    } else if (category === "scrap") {
      subCategoryOptions = ["Wall Hangings", "Decoration pieces"];
    }
    setSubCategories(subCategoryOptions);
    setSelectedSubCategory(""); // Reset sub-category
    setFormData({ ...formData, subCategory: "" });
  };

  const handleSubCategoryChange = (e) => {
    const subCategory = e.target.value;
    setSelectedSubCategory(subCategory);
    setFormData({ ...formData, subCategory: subCategory });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/products/", formData);
      console.log("🚀 ~ handleSubmit ~ res:", res);
      close();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container mt-3">
        <form>
          <div className="row g-3">
            <div className="col-sm-6">
              <div className="mb-3">
                <label htmlFor="name" className="form-label ANP-label">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control ANP-input"
                  required
                />
              </div>
            </div>
            <div className="col-sm">
              <div className="mb-3">
                <label htmlFor="price" className="form-label ANP-label">
                  Price:
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="form-control ANP-input"
                  min="40"
                  required
                />
              </div>
            </div>
            <div className="col-sm">
              <label htmlFor="stockQuantity" className="form-label ANP-label">
                Stock Quantity:
              </label>
              <input
                type="number"
                id="stockQuantity"
                name="stockQuantity"
                value={formData.stockQuantity}
                onChange={handleChange}
                className="form-control ANP-input"
                min="1"
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label ANP-label">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-control ANP-input"
              required
            ></textarea>
          </div>

          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label htmlFor="category" className="form-label ANP-label">
                  Category:
                </label>
                <select
                  id="category"
                  className="form-select ANP-input"
                  name="category"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="physicalProduct">Physical Product</option>
                  <option value="digitalAsset">Digital Asset</option>
                  <option value="scrap">Scrap</option>
                </select>
              </div>
            </div>

            <div className="col">
              <div className="mb-3">
                <label htmlFor="subCategory" className="form-label ANP-label">
                  Sub-category:
                </label>
                <select
                  id="subCategory"
                  className="form-select ANP-input"
                  name="subCategory"
                  value={selectedSubCategory}
                  onChange={handleSubCategoryChange}
                  required
                >
                  <option value="">Select Sub-category</option>
                  {subCategories.map((subCategory) => (
                    <option key={subCategory} value={subCategory}>
                      {subCategory}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="brand" className="form-label ANP-label">
                Brand:
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className="form-control ANP-input"
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="imageInput" className="form-label ANP-label">
              Image URL or File:
            </label>
            <div className="input-group">
              <input
                type="text"
                id="imageInput"
                name="imageURL"
                value={formData.imageURL}
                onChange={handleChange}
                className="form-control ANP-input"
                placeholder="Enter image URL"
              />
              <input
                style={{ marginLeft: "30px" }}
                type="file"
                id="imageFile"
                name="imageFile"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    console.log("File selected:", file);
                  }
                }}
                className="form-control ANP-input"
              />
            </div>
          </div>

          <div className="row gx-3 gy-2 align-items-center">
            <div className="col-sm-2">
              <label htmlFor="weight" className="form-label ANP-label">
                Weight:
              </label>
              <input
                type="text"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="form-control ANP-input"
              />
            </div>

            <div className="col-sm-2">
              <label htmlFor="length" className="form-label ANP-label">
                Length:
              </label>
              <input
                type="number"
                id="length"
                name="length"
                value={formData.length}
                onChange={handleChange}
                className="form-control ANP-input"
              />
            </div>

            <div className="col-sm-2">
              <label htmlFor="width" className="form-label ANP-label">
                Width:
              </label>
              <input
                type="number"
                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange}
                className="form-control ANP-input"
              />
            </div>

            <div className="col-sm-2">
              <label htmlFor="height" className="form-label ANP-label">
                Height:
              </label>
              <input
                type="number"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
                className="form-control ANP-input"
              />
            </div>

            <div className="col-sm-2">
              <label htmlFor="discounts" className="form-label ANP-label">
                Discounts:
              </label>
              <input
                type="text"
                id="discounts"
                name="discounts"
                value={formData.discounts}
                onChange={handleChange}
                className="form-control ANP-input"
              />
            </div>

            <div className="col-sm-2">
              <label htmlFor="rating" className="form-label ANP-label">
                Rating:
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="form-control ANP-input"
                min="0"
                max="5"
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="keywords" className="form-label ANP-label">
              Keywords:
            </label>
            <ReactTags
              classNames="ReactTags"
              tags={tags}
              suggestions={suggestions}
              handleDelete={handleDelete}
              handleAddition={handleAddition}
              handleDrag={handleDrag}
              autocomplete={false}
            />
          </div>

          <div className="row gx-3 gy-2 align-items-center">
            <div className="col-sm-4">
              <label htmlFor="color" className="form-label ANP-label">
                Color:
              </label>
              <input
                type="text"
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
                className="form-control ANP-input"
              />
            </div>

            <div className="col-sm-4">
              <label htmlFor="material" className="form-label ANP-label">
                Material:
              </label>
              <input
                type="text"
                id="material"
                name="material"
                value={formData.material}
                onChange={handleChange}
                className="form-control ANP-input"
              />
            </div>

            <div className="col-sm-4">
              <label htmlFor="availabilityStatus" className="form-label ANP-label">
                Availability Status:
              </label>
              <select
                id="availabilityStatus"
                name="availabilityStatus"
                value={formData.availabilityStatus}
                onChange={handleChange}
                className="form-select ANP-input"
              >
                <option value="available">Available</option>
                <option value="outOfStock">Out of Stock</option>
                <option value="discontinued">Discontinued</option>
              </select>
            </div>
          </div>

          <button
            style={{ marginTop: "10px" }}
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
