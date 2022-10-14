import { Header } from "./components/Header/Header";
import LargeList from "./components/LargeList/LargeList";
import RightList from "./components/RightList/RightList";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <LargeList />
        <RightList />
      </div>
    </>
  );
}

export default App;
