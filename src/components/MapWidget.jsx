import React from "react";

const MapWidget = () => (
  <div className="map-widget" style={{ width: "100%", maxWidth: 500, margin: "2rem auto", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 12px #0001" }}>
    <iframe
      title="Ekcel Event Center Map"
      width="100%"
      height="350"
      frameBorder="0"
      style={{ border: 0 }}
      src="https://www.google.com/maps?q=Awobo%20Estate%20Igbogbo%20Ikorodu%20Lagos%20Nigeria&output=embed"
      allowFullScreen
    ></iframe>
  </div>
);

export default MapWidget;
