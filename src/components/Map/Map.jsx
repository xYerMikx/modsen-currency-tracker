import { Component, createRef } from "react"
import { MapContainer } from "./styled"
import mapboxgl from "!mapbox-gl"
import axios from "axios"
import { currenciesCodes } from "@/constants/currencies"
import { mapConfig } from "@/constants/mapConfig"

export class Map extends Component {
  constructor(props) {
    super(props)
    this.mapContainer = createRef()
    this.map = null
    this.markers = []
    this.state = {
      features: [],
    }
    this.source = axios.CancelToken.source()
  }

  componentDidMount() {
    const getBanksMap = (pos) => {
      if (this.mapContainer.current) {
        this.map = new mapboxgl.Map({
          container: this.mapContainer.current,
          style: mapConfig.styles,
          center: [pos.coords.longitude, pos.coords.latitude],
          zoom: mapConfig.zoom,
          accessToken: mapConfig.accessToken,
        })

        axios
          .get("/banks", { cancelToken: this.source.token })
          .then(({ data }) => {
            const features = data.features
            if (features.length > 0) {
              this.setState((prevState) => ({
                ...prevState,
                features,
              }))
            } else {
              throw new Error("No banks")
            }
          })
          .catch((e) => {
            if (axios.isCancel(e)) {
              console.error("Canceled rendering", e.message)
            }
            console.error(e)
          })

        this.map.addControl(new mapboxgl.NavigationControl(), "top-right")
      }
    }

    const getUserLocation = () => {
      const position = {
        coords: {
          latitude: 53.893009,
          longitude: 27.567444,
        },
      }
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted") {
          navigator.geolocation.getCurrentPosition(getBanksMap)
        } else {
          getBanksMap(position)
        }
      })
    }

    getUserLocation()
  }

  shouldComponentUpdate(nextProps) {
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
    this.source.cancel("Operation canceled by user")
    if (this.mapContainer.current && this.map) {
      this.map?.remove()
    }
  }
  render() {
    return <MapContainer ref={this.mapContainer} />
  }
}
