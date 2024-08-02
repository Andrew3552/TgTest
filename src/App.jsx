// import { useEffect } from 'react';
// const tg = window.Telegram.WebApp
import "./App.css";
import RootComponents from "./components/rootComponents/rootComponents";

function App() {
  // useEffect(() => {
  //   tg.ready();
  // }, [])

  // const onClose = () => {
  //   tg.close
  // }
  return (
    <div className="App">
      <RootComponents/>
      {/* <p className="text">привет підстрежися</p> */}
    </div>
  );
}

export default App;

