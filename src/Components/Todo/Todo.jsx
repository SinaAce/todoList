import Form from "./Form/Form";
import Header from "./Header/Header";
import Tasks from './Tasks/Tasks';

const Todo = () => {
  
  return (
    <div className="bg-[#2C6B56] rounded-xl shadow-2xl">
      <Header />
      <Tasks />
    </div>
  );
};

export default Todo;
