import { useState } from "react";
import { FormType } from "../types/types";

function useForm (initialState: FormType) {
  const [form, setForm] = useState(initialState);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const input = evt.target;

    setForm({
      ...form,
      [input.name]: input.value,
    });
  };

  return { form, handleChange };
};

export default useForm;