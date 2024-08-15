import Form from "./Form/Form";
import Header from "./Header/Header";
import Tasks from './Tasks/Tasks';

const Todo = () => {
  
  return (
    <div className="bg-gray-100 rounded-xl shadow-xl">
      <Header />
      <Form />
      <Tasks />
    </div>
  );
};

export default Todo;
