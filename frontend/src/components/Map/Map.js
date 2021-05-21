import axios from "axios"
import React, { useState, useEffect } from "react"
import ReactMapGL, { Marker, Popup } from "react-map-gl"

const App = ({ adrs }) => {
  const [lat, setLat] = useState(19.051512)
  const [log, setLog] = useState(72.872426)
  const [address, setAddress] = useState(adrs)
  const [selectedPark, setSelectedPark] = useState(null)
  const [viewport, setViewPort] = useState({
    latitude: 19.051512,
    longitude: 72.872426,
    width: "100vw",
    height: "100vh",
    zoom: 12,
  })

  useEffect(async () => {
    const { data } = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${adrs}.json?access_token=pk.eyJ1IjoibmlzaGFudGRvbmdyZSIsImEiOiJja24ydTgwaWIwMXE4Mm9xYjZ1dndoaHEwIn0.Lr7u04h5-FKG4LAP1mRyCA`
    )
    setLog(data.features[0].geometry.coordinates[0])
    setLat(data.features[0].geometry.coordinates[1])
    setViewPort({
      latitude: data.features[0].geometry.coordinates[1],
      longitude: data.features[0].geometry.coordinates[0],
      width: "100vw",
      height: "100vh",
      zoom: 12,
    })
  }, [adrs])

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null)
      }
    }
    window.addEventListener("keydown", listener)

    return () => {
      window.removeEventListener("keydown", listener)
    }
  }, [])

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle='mapbox://styles/nishantdongre/ckoww0ebr0z6f18nrs8qqgqmr'
        onViewportChange={viewport => {
          setViewPort(viewport)
        }}
      >
        <Marker latitude={lat} longitude={log}>
          <button
            className='marker-btn'
            onClick={e => {
              e.preventDefault()
              setSelectedPark(address)
            }}
          >
            <i class='fas fa-map-marker-alt'></i>
          </button>
        </Marker>
        {selectedPark ? (
          <Popup
            latitude={lat}
            longitude={log}
            onClose={() => {
              setSelectedPark(null)
            }}
          >
            <div>
              <p>{address}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  )
}

export default App
