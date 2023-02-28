import React, { useEffect, useRef } from 'react';
import "cesium/Widgets/widgets.css";
import "../src/css/main.css";
import { Ion, Viewer, createWorldTerrain, createOsmBuildings, Rectangle, Camera } from "cesium/Cesium";

function CesiumMap() {
    const cesiumContainer = useRef(null);

    useEffect(() => {
        var rec = [103.6, 1.22, 104.05, 1.46];
        var boundingRectangle = Rectangle.fromDegrees(rec[0], rec[1], rec[2], rec[3]);
        Camera.DEFAULT_VIEW_FACTOR = 0;
        Camera.DEFAULT_VIEW_RECTANGLE = boundingRectangle;

        Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYWE1OWUxNy1mMWZiLTQzYjYtYTQ0OS1kMWFjYmFkNjc5YzciLCJpZCI6NTc3MzMsImlhdCI6MTYyNzg0NTE4Mn0.XcKpgANiY19MC4bdFUXMVEBToBmqS8kuYpUlxJHYZxk";
        var viewer = new Viewer(cesiumContainer.current, {
            terrainProvider: createWorldTerrain(),
            baseLayerPicker: false,
            vrButton: false,
            geocoder: false,
            animation: true,
            timeline: true,
            scene3DOnly: true,
            selectionIndicator: false,
            shouldAnimate: false,
            shadows: false
        });
        
        viewer.scene.primitives.add(createOsmBuildings()); 
    });

    return (
        <div>
            <div className='map-container'>
                <div className='map' ref={cesiumContainer}
                    style={{ position: "absolute", top: 64, left: 0, right: 0, bottom: 0 }} />
            </div>
        </div>
    );
} 

export default CesiumMap;