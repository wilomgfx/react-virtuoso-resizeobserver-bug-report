import { Virtuoso as VirtualList } from "react-virtuoso";
import "./App.css";

function MyReactVirtuosoBug() {
  const data = new Array(1000).fill(null).map((_, index) => ({ index }));
  return (
    <div style={{ height: "400px" }}>
      <VirtualList data={data} itemContent={(index) => <div>{index}</div>} />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <MyReactVirtuosoBug />
    </div>
  );
}

export default App;
