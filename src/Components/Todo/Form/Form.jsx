import { Controller, useForm } from "react-hook-form";
import Input from "./Input";
import axios from "axios";

const Form = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "https://668a8cba2c68eaf3211d1e6e.mockapi.io/list/task",
        {
          name: data?.title,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-24 w-full m-3 flex items-center justify-center gap-7"
      >
        <Controller
          name="title"
          control={control}
          defaultValue=""
          render={({ field }) => {
            return <Input {...field} />;
          }}
        />

        <button className="bg-blue-700 w-2/12 h-3/4 text-white text-2xl font-bold rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
