import { ChangeEvent, useEffect, useState } from "react";

type TaskInputs = {
  title?: string;
  description?: string;
  section?: string;
};

type UserInputs = {
  username?: string;
  email?: string;
  password?: string;
};

type SectionInputs = {
  section_name?: string;
  board?: string;
};

type BoardInputs = {
  board_name?: string;
};

type Inputs = TaskInputs & UserInputs & SectionInputs & BoardInputs;

type InputTypes = {
  name: string;
  type: string;
  value: string | number | File;
};

function useForm(initial: Inputs) {
  const [inputs, setInputs] = useState<Inputs>(initial);
  const initialValues = Object.values(initial).join("");

  useEffect(() => {
    setInputs(initial);
  }, [initialValues]);

  function handleChange(
    event: ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLTextAreaElement> & ChangeEvent<HTMLSelectElement>,
  ) {
    let { name, type, value }: InputTypes = event.target;

    if (type === "number") {
      value = parseInt(value);
    }

    if (type === "file" && event.target.files) {
      value = event.target.files[0];
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, ""])) as unknown;

    setInputs(blankState as Inputs);
  }

  return { inputs, handleChange, resetForm, clearForm };
}

export default useForm;
