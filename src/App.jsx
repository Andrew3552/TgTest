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

    </div>
  );
}

export default App;

