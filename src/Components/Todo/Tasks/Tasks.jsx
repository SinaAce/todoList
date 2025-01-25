import { useEffect, useState } from "react";
import GetAllData from "../../../Core/Api/GetAllData/GetAllData";
import DeleteData from "../../../Core/Api/DeleteData";
import Form from "../Form/Form";
import moment from "jalali-moment";

const Tasks = () => {
  const [allTask, setTask] = useState([]);
  const [search, setSearch] = useState("");

  const data = async () => {
    // بررسی وجود تسک‌ها در LocalStorage
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTask(storedTasks);
    } else {
      const result = await GetAllData();
      const tasksWithLabels = result?.data.map((task) => ({
        ...task,
        label: "تسک عادی",
      }));
      setTask(tasksWithLabels);
      localStorage.setItem("tasks", JSON.stringify(tasksWithLabels));
    }
  };

  const handleDelete = (id) => {
    setTask((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const handleLabelChange = (id, newLabel) => {
    setTask((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === id ? { ...task, label: newLabel } : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const changeDate = (date) => {
    return moment(date, "YYYY-MM-DDTHH:mm:ssZ")
      .local("fa")
      .format("jYYYY/jMM/jDD");
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <>
      <Form onTaskAdded={data} />
      <input
        type="search"
        className="w-7/12 ml-10 h-11 rounded-md p-3 text-[#B22222] shadow-xl outline-none mb-10 mt-3 placeholder:text-[#B22222]"
        placeholder="Search Tasks ..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="w-11/12 h-[350px] mx-auto flex-col overflow-y-scroll">
        {allTask
          .filter((value) =>
            search.toLowerCase() === ""
              ? value
              : value.name.toLowerCase().includes(search)
          )
          .map((value) => (
            <div
              key={value.id}
              className="flex p-5 gap-x-10 items-center relative border-b border-[#FFD700] m-2"
            >
              <input
                type="checkbox"
                className="size-5"
                onChange={(e) => filterData(value?.id)}
              />
              <p className="text-lg text-[#FAFAFA] font-semibold">
                {value.name}
              </p>
              <p className="text-sm text-[#F0F0F0]">
                {changeDate(value.createdAt)}
              </p>
              <select
                value={value.label}
                onChange={(e) => handleLabelChange(value.id, e.target.value)}
                className="text-sm text-[#333333] bg-[#FFD700] p-1 rounded-md opacity-80 outline-none"
              >
                <option value="تسک عادی">تسک عادی</option>
                <option value="مهم">مهم</option>
                <option value="رویداد">رویداد</option>
              </select>
              <p className="text-sm text-[#FFD700] font-medium">
                {value.label}
              </p>
              <button
                onClick={() => handleDelete(value.id)}
                className="bg-[#B22222] text-[#FAFAFA] w-10 h-10 absolute shadow-xl right-5 rounded-full"
              >
                X
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Tasks;
