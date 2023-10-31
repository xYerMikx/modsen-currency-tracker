import React, { Component, createRef } from "react"
import { MapContainer } from "./styled"
import mapboxgl from "!mapbox-gl"
import axios from "axios"
import { currencies } from "../../constants/currencies"

export default class Map extends Component {
  constructor(props) {
    super(props)
    this.mapContainer = createRef()
    this.map = null
    this.markers = []
    this.state = {
      features: [],
    }
  }

  componentDidMount() {
    const getBanksMap = (pos) => {
      this.map = new mapboxgl.Map({
        container: this.mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [pos.coords.longitude, pos.coords.latitude],
        zoom: 11,
        accessToken: process.env.ACCESS_TOKEN_MAPBOX,
      })

      axios
        .get("/banks.json")
        .then((data) => {
          const features = data.data.features
          if (features.length > 0) {
            this.setState((prevState) => ({
              ...prevState,
              features,
            }))
          }
          throw new Error("No banks")
        })
        .catch((e) => {
          console.error(e)
        })

      this.map.addControl(new mapboxgl.NavigationControl(), "top-right")
    }

    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getBanksMap)
      }
    }

    getUserLocation()
  }

  shouldComponentUpdate(nextProps) {
    const currenciesCodes = currencies.map((el) => el.code)

    return currenciesCodes.includes(nextProps.value) || nextProps.value === ""
  }

  componentDidUpdate() {
    const { features } = this.state
    const { value } = this.props

    this.markers.map((marker) => marker.remove())

    features
      .filter((feature) => value === "" || feature.currencies.includes(value))
      .map((feature) => {
        const marker = new mapboxgl.Marker()
          .setLngLat([feature.geometry.longitude, feature.geometry.latitude])
          .setPopup(
            new mapboxgl.Popup({ offset: 30 }).setHTML(
              `<div>
									<p>${feature.properties.title}</p>
									<p>${feature.properties.description}</p>
							</div>`,
            ),
          )
          .addTo(this.map)
        this.markers.push(marker)
        return marker
      })
  }

  componentWillUnmount() {
    this.map?.remove()
  }
  render() {
    return <MapContainer ref={this.mapContainer} />
  }
}
