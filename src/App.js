import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dataSet, setDataSet] = useState();

  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDataSet(data);
      });
  }, []);

  console.log(dataSet);

  return <div className="App"></div>;
}

export default App;
