import React from "react";
import { Map, Marker } from "pigeon-maps";

const MyMap = (data) => {
  console.log(data);
  return (
    <Map
      height={300}
      defaultCenter={[data.data.location.lat, data.data.location.lng]}
      defaultZoom={11}
    >
      <Marker
        width={50}
        anchor={[data.data.location.lat, data.data.location.lng]}
      />
    </Map>
  );
};

export default MyMap;
