import React, { Component } from 'react';
import { Ion, Viewer, createWorldTerrain, createOsmBuildings, Cartesian3, Math, Rectangle, Camera, MapboxStyleImageryProvider } from "cesium";
import "cesium/Widgets/widgets.css";
import "../src/css/main.css"

class CesiumMap extends Component {

    componentDidMount() {

        var rec = [103.6, 1.22, 104.05, 1.46];
        var boundingRectangle = Rectangle.fromDegrees(rec[0], rec[1], rec[2], rec[3]);
        Camera.DEFAULT_VIEW_FACTOR = 0;
        Camera.DEFAULT_VIEW_RECTANGLE = boundingRectangle;

        Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyYjRjMWZhZi1iYWRhLTQ2ZGEtOWU5Ny0xZGFmMjhiY2RlOTEiLCJpZCI6MjU1MzMsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1ODYxNTQ5MDF9.LYpPxRfUNl2KMIqDy5jmweyYH5KVrnb7O-hNbee4lDQ";
        var viewer = new Viewer(this.cesiumContainer, {
            imageryProvider: new MapboxStyleImageryProvider({
                styleId: 'streets-v11',
                accessToken: 'pk.eyJ1IjoiZ292dGVjaC1nc28iLCJhIjoiY2o2cmEydjduMDc3dzMzbzZvdmw5azdqMCJ9.v1mFYyi8u3p2deGZH2_feQ'
            }),
            terrainProvider: createWorldTerrain(),
            // terrainProvider: new EllipsoidTerrainProvider(),
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
    }

    render = () => {
        return (
            <div>
                <div className='map-container'>
                    <div className='map' ref={element => this.cesiumContainer = element}
                        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }} />
                </div>
            </div>
        );
    }
} 

export default CesiumMap;