import React from "react";
import { useNavigate } from "react-router-dom";
import { createCar } from "../../services/carServices";
import useCustomForm from "../../hooks/useForm";

function CarForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, errors } = useCustomForm({
    model: "",
    make: "",
    color: "",
    registrationNo: "",
    category: "",
  });

  const onSubmit = async (data) => {
    await createCar(data);
    navigate("/");
  };

  return (
    <div>
      <h2>Add New Car</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("model", { required: "Model is required" })}
          placeholder="Model"
        />
        {errors.model && <p>{errors.model.message}</p>}

        <input
          {...register("make", { required: "Make is required" })}
          placeholder="Make"
        />
        {errors.make && <p>{errors.make.message}</p>}

        <input
          {...register("color", { required: "Color is required" })}
          placeholder="Color"
        />
        {errors.color && <p>{errors.color.message}</p>}

        <input
          {...register("registrationNo", {
            required: "Registration No is required",
          })}
          placeholder="Registration No"
        />
        {errors.registrationNo && <p>{errors.registrationNo.message}</p>}

        <input
          {...register("category", { required: "Category ID is required" })}
          placeholder="Category ID"
        />
        {errors.category && <p>{errors.category.message}</p>}

        <button type="submit">Add Car</button>
      </form>
    </div>
  );
}

export default CarForm;
