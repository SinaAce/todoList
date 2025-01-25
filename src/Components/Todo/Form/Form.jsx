import { Controller, useForm } from "react-hook-form";
import axios from "axios";

const Form = ({ onTaskAdded }) => {
  const { control, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "https://668a8cba2c68eaf3211d1e6e.mockapi.io/list/task",
        {
          name: data?.title,
        }
      );
      if (res.status === 201) {
        // داده‌ی تسک جدید
        const newTask = res.data;

        // ذخیره‌سازی تسک جدید در LocalStorage
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        storedTasks.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(storedTasks));

        // بروزرسانی وضعیت در کامپوننت والد
        onTaskAdded();

        // ریست کردن فرم
        reset();
      }
    } catch (error) {
      console.error("Error submitting the task:", error);
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
            return (
              <input
                {...field}
                className="outline-none w-9/12 h-3/4 rounded-md p-3 text-xl bg-[#B22222] shadow-xl placeholder:text-[#F0F0F0] text-[#F0F0F0]"
                placeholder="Enter new task"
              />
            );
          }}
        />

        <button className="bg-[#B22222] w-2/12 h-3/4 text-[#FAFAFA] text-2xl font-bold rounded-md shadow-xl">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
