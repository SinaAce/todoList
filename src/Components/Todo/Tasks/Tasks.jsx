import { useEffect, useState } from "react";
import GetAllData from "../../../Core/Api/GetAllData/GetAllData";
import DeleteData from "../../../Core/Api/DeleteData";
import Form from "../Form/Form";

const Tasks = () => {
  const [allTask, setTask] = useState([]);
  const [search, setSearch] = useState("");

  const fetchTasks = async () => {
    const result = await GetAllData();
    setTask(result?.data);
  };

  const handleDelete = async (id) => {
    try {
      const res = await DeleteData(id);
      if (res?.status === 200 || res?.success) {
        setTask((prevTasks) => prevTasks.filter((task) => task.id !== id));
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <Form onTaskAdded={fetchTasks} />
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
              <p className="text-sm text-[#F0F0F0]">{value.createdAt}</p>
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
