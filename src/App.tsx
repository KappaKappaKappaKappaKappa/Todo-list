import TodoList from "./components/TodoList";
import Form from "./components/Form";

function App() {
  return (
    <main className="w-full flex flex-col pt-[40px] items-center">
      <Form />
      <TodoList />
    </main>
  );
}

export default App;
