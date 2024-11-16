import { useForm } from "react-hook-form";

const useCustomForm = (defaultValues) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues });

  return {
    register,
    handleSubmit,
    errors,
    reset,
  };
};

export default useCustomForm;
