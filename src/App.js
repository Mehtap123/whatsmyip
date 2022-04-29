import { useEffect, useState } from "react";
import "./App.css";
import MyMap from "./Components/MyMap";

function App() {
  const [dataSet, setDataSet] = useState();
  const [country, setCountry] = useState();

  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setDataSet(data));
    fetch("https://restcountries.com/v3.1/name")
      .then((res2) => res2.json())
      .then((data2) => setCountry(data2));
  }, []);

  console.log(country);

  return (
    <>
      <div className="App">
        {dataSet ? (
          <>
            <div>
              <p>This is your IP-Addres: {dataSet.ip}</p>
              <p>Your location is: {dataSet.location.country}</p>
              <p>Your region is: {dataSet.location.region}</p>
              <p>Your domain is: {dataSet.as.domain} </p>
            </div>
            <div>
              <MyMap />
            </div>
          </>
        ) : (
          "Loading......."
        )}
      </div>
    </>
  );
}

export default App;
