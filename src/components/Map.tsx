import { useEffect, useState } from "react";
import {
    MapContainer,
    TileLayer,
    CircleMarker,
    Popup,
    useMap,
    useMapEvents,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

// To control the map (zoom in / zoom out)
const MapController = () => {
    const map = useMap();

    useMapEvents({
        zoomend: () => {
            map.scrollWheelZoom.enable();
        },
    });

    return null;
};

// Defining types for Earthquake info
type EarthquakeFeature = {
    id: string;
    properties: {
        mag: number;
        place: string;
        time: number;
    };
    geometry: {
        coordinates: [number, number, number];
    };
};

const Map = () => {
    const [earthquakes, setEarthquakes] = useState<EarthquakeFeature[]>([]);

    useEffect(() => {
        fetchTheEarthquakes();
    }, []);

    // To fetch the earthquakes data
    const fetchTheEarthquakes = async () => {
        const response = await fetch(
            "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
        );
        const data = await response.json();
        setEarthquakes(data.features);
    };

    return (
        <MapContainer
            style={{ height: "90vh", width: "100%" }}
            zoom={3}
            center={[20, 0]}
            scrollWheelZoom={true}
        >
            {/* Attached the map tiles */}
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            {/* To control the map (zoom in / zoom out) */}
            <MapController />

            {earthquakes.map((eq) => {
                const [lon, lat] = eq.geometry.coordinates;
                const magnitude = eq.properties.mag || 0;

                return (
                    <CircleMarker
                        key={eq.id}
                        center={[lat, lon]}
                        radius={Math.max(magnitude * 2, 2)} // scale circle size by magnitude
                        pathOptions={{
                            color:
                                magnitude > 5
                                    ? "red"
                                    : magnitude > 3
                                    ? "orange"
                                    : "yellow",
                            fillOpacity: 0.7,
                        }}
                    >
                        <Popup>
                            <strong>{eq.properties.place}</strong>
                            <br />
                            Magnitude: {magnitude}
                            <br />
                            Time:{" "}
                            {new Date(eq.properties.time).toLocaleString()}
                        </Popup>
                    </CircleMarker>
                );
            })}
        </MapContainer>
    );
};

export default Map;
