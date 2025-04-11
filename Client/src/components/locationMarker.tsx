import { useState } from 'react'
import { useMapEvents } from 'react-leaflet'
import { LatLng } from 'leaflet'

const LocationMarker = () => {
    const [ position, setPosition ] = useState<LatLng | null>(null)

    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        }
    })
}

export default LocationMarker