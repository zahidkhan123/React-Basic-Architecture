import React from "react";
import CategoryForm from "../../components/Category/CategoryForm";
function CategoryFormScreen({ categoryId }) {
  return (
    <div>
      <h2>{categoryId ? "Edit Category" : "Add Category"}</h2>
      <CategoryForm categoryId={categoryId} />
    </div>
  );
}

export default CategoryFormScreen;
