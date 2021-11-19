import "./styles.css";
import Top from "./component/Top";
import Bottom from "./component/Bottom";
export default function App() {
  return (
    <div className="App">
      <div className="appChild">
        <Top />
        <Bottom />
      </div>
    </div>
  );
}
