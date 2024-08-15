import { Toaster } from "react-hot-toast";
import Layout from "../Components/Layout/Layout";
import Todo from "../Components/Todo/Todo";

function App() {
  return (
    <>
      <Layout>
        <Toaster />
        <Todo />
      </Layout>
    </>
  );
}

export default App;
