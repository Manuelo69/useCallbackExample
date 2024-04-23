import "./App.css";
import Main2 from "./components/Main2";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <>
      <div className="app">
        <main>
          <Main2></Main2>
          <UserDetail userId={"63740fede2c75d8744f80a3f"} />
        </main>
      </div>
    </>
  );
}

export default App;
