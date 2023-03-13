import React, { useEffect, useRef } from "react";
import "cesium/Widgets/widgets.css";
import "../src/css/main.css";
import CesiumNavigation from "./public/assets/lib/cesium-navigation/CesiumNavigation";
import {
  Ion,
  Viewer,
  createWorldTerrain,
  createOsmBuildings,
  Cartesian3,
  Camera,
  TileMapServiceImageryProvider,
  buildModuleUrl,
} from "cesium/Cesium";

function CesiumMap() {
  const cesiumContainer = useRef(null);

  useEffect(() => {
    // var rec = [103.6, 1.22, 104.05, 1.46];
    // var boundingRectangle = Rectangle.fromDegrees(
    //   rec[0],
    //   rec[1],
    //   rec[2],
    //   rec[3]
    // );
    // Camera.DEFAULT_VIEW_FACTOR = 0;
    // Camera.DEFAULT_VIEW_RECTANGLE = boundingRectangle;
    const viewer = new Viewer(cesiumContainer.current, {
      animation: false,
      baseLayerPicker: false,
      homeButton: false,
      infoBox: false,
      sceneModePicker: false,
      selectionIndicator: false,
      timeline: false,
      navigationHelpButton: false,
      navigationInstructionsInitiallyVisible: false,
      automaticallyTrackDataSourceClocks: false,
      fullscreenButton: false,
      shouldAnimate: true,
      requestRenderMode: false,
      msaaSamples: 8,
      geocoder: false,
      imageryProvider: new TileMapServiceImageryProvider({
        url: buildModuleUrl("Assets/Textures/NaturalEarthII"),
      }),
    });
    new CesiumNavigation(viewer)
    viewer.cesiumWidget.creditContainer.style.display = "none";
    viewer.camera.setView({
      destination: Cartesian3.fromDegrees(108.845808, 34.214282, 17000000),
      orientation: {
        heading: 0,
        pitch: -1.5707963267948966,
        roll: 0.0,
      },
    });
    // viewer.scene.primitives.add(createOsmBuildings());
  });

  return (
    <div>
      <div className="map-container">
        <div
          className="map"
          ref={cesiumContainer}
          style={{
            position: "absolute",
            top: 64,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      </div>
    </div>
  );
}

export default CesiumMap;
