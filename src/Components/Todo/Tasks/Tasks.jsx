import { useEffect, useState } from "react";
import GetAllData from "../../../Core/Api/GetAllData/GetAllData";
import DeleteData from "../../../Core/Api/DeleteData";

const Tasks = () => {
  const [allTask, setTask] = useState();
  const [check, setCheck] = useState();
  const [search, setSearch] = useState("");

  const data = async () => {
    const result = await GetAllData();
    setTask(result?.data);
  };

  const handleDelete = async (id) => {
    const result = allTask?.filter((value) => value.id === id);
    console.log(result[0].id);
    const res = await DeleteData(result[0].id);
  };
  //

  // paginate

  useEffect(() => {
    data();
  }, []);

  console.log(search);

  return (
    <>
      <input type="search" onChange={(e) => setSearch(e.target.value)} />
      <div className="w-11/12 h-[450px] mx-auto flex-col overflow-y-scroll">
        {allTask
          ? allTask
              .filter((value) => {
                return search.toLowerCase() === ""
                  ? value
                  : value.name.toLowerCase().includes(search);
              })
              .map((value) => (
                <div
                  key={value.id}
                  className="flex p-5 gap-x-10 items-center relative border-b"
                >
                  <input
                    type="checkbox"
                    className="size-5"
                    onChange={(e) => filterData(value?.id)}
                  />
                  <p className="text-lg font-semibold">{value.name}</p>
                  <p className="text-sm">{value.createdAt}</p>
                  <button
                    onClick={() => handleDelete(value.id)}
                    className="bg-red-500 text-white w-10 h-10 absolute right-5 rounded-full"
                  >
                    X
                  </button>
                </div>
              ))
          : "no task"}
      </div>
    </>
  );
};

export default Tasks;
