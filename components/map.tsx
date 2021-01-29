import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import * as React from "react";
import "../src/styles.css";
import PopupContent from "../components/popupcontent";
export default function Map() {
  const [data, setData] = React.useState([]);
  const getData = () => {
    var requestOptions: any = {
      method: "GET",
      redirect: "follow"
    };

    fetch("https://Backend.srenmichaels.repl.co/", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setData(JSON.parse(result));
        return console.log(result);
      })
      .catch((error) => console.log("error", error));
  };
  React.useEffect(() => getData(), []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
      }}
    >
      <MapContainer
        style={{
          height: "90vh",
          width: "90%",
          borderRadius: "10px"
        }}
        center={[52.521918, 13.4132159]}
        zoom={11}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {data.map((marker, index) => (
          <Marker
            key={index}
            position={[Number(marker.lat), Number(marker.lon)]}
          >
            <Popup>
              <PopupContent
                name={marker.name}
                category={marker.category}
                img={marker.image}
                info={marker.info}
                website={marker.website}
                googlemaps={marker.googlemaps}
                reason={marker.reason}
              />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
