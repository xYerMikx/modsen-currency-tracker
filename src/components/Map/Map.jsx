import { Component, createRef } from "react"
import { MapContainer } from "./styled"
import mapboxgl from "mapbox-gl"
import { currenciesCodes } from "@/constants/currencies"
import { mapConfig } from "@/constants/mapConfig"
import { position } from "@/constants/coords"
import PropTypes from "prop-types"
import { axios } from "@/services/axios"

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
        const zoom = window.innerWidth <= 768 ? 9 : mapConfig.zoom
        this.map = new mapboxgl.Map({
          container: this.mapContainer.current,
          style: mapConfig.styles,
          center: [pos.coords.longitude, pos.coords.latitude],
          zoom: zoom,
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

    getBanksMap(position)
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
    return <MapContainer data-cy="map-container" ref={this.mapContainer} />
  }
}

Map.propTypes = {
  value: PropTypes.string.isRequired,
}
