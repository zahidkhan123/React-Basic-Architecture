import React from "react";
import { useNavigate } from "react-router-dom";
import useCustomForm from "../../hooks/useForm";
import { createCategory, updateCategory } from "../../services/categoryService";

function CategoryForm({ categoryId, initialData }) {
  const navigate = useNavigate();
  const { register, handleSubmit, errors, reset } = useCustomForm(
    initialData || { name: "" }
  );

  const onSubmit = async (data) => {
    if (categoryId) {
      await updateCategory(categoryId, data);
    } else {
      await createCategory(data);
    }
    navigate("/categories");
  };

  return (
    <div>
      <h2>{categoryId ? "Edit Category" : "Add Category"}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Category Name"
        />
        {errors.name && <p>{errors.name.message}</p>}

        <button type="submit">{categoryId ? "Update" : "Create"}</button>
      </form>
    </div>
  );
}

export default CategoryForm;
