import axios from "axios";

const DeleteData = async (id) => {
  try {
    const res = await axios.delete(
      `https://668a8cba2c68eaf3211d1e6e.mockapi.io/list/task/${id}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default DeleteData;
