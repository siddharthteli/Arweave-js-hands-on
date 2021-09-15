import logo from "./logo.svg";
import "./App.css";
import Arweave from "arweave";
function App() {
  const arweave = Arweave.init({});
  console.log("Arweave init:--" + arweave.api.config.host);
  arweave.wallets.generate().then((key) => {
    console.log(key);
  });
  return <div className="App">(dsvds)</div>;
}

export default App;
