import axios from "axios";

const GetAllData = async () => {
  try {
    const res = await axios.get(
      "https://668a8cba2c68eaf3211d1e6e.mockapi.io/list/task"
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default GetAllData;
