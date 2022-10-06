import React from "react";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import "mapbox-gl/dist/mapbox-gl.css";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import Label from "./Label";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  //   Transform the search results to
  // { latitude: 52.516272, longitude: 13.377722 } format
  const coordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 12,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/saranshkhulbe/cl8w10oek000s14nuxjwuprki"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewState)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker longitude={result.long} latitude={result.lat}>
            <p
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
              role="img"
            >
              <LocationMarkerIcon className="h-6 text-red-500" />
            </p>
          </Marker>

          {/* The Popup that show show if we click on a Marker */}
          {selectedLocation.long === result.long ? (
            <Marker longitude={result.long} latitude={result.lat}>
              <p
                onClick={() => setSelectedLocation(result)}
                className="cursor-pointer text-2xl animate-bounce"
                aria-label="push-pin"
                role="img"
              >
                <Label title={result.title} />
              </p>
            </Marker>
          ) : (
            <div></div>
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
