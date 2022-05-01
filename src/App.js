import { useEffect, useState } from "react";
import "./App.css";
import CountryInformation from "./Components/CountryInformation";
import MyMap from "./Components/MyMap";

function App() {
  const [dataSet, setDataSet] = useState();

  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setDataSet(data));
  }, []);

  console.log(dataSet);
  return (
    <>
      <div className="App">
        {dataSet ? (
          <>
            <div>
              <p>This is your IP-Addres: {dataSet.ip}</p>
              <p>Your location is: {dataSet.location.country}</p>
              <p>Your region is: {dataSet.location.region}</p>
              <p>Your city is: {dataSet.location.city}</p>
              <p>Your domain is: {dataSet.as.domain} </p>
            </div>
            <div>
              <MyMap data={dataSet} />
            </div>
            <div>
              <CountryInformation data={dataSet} />
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
