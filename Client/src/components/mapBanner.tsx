import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { properties } from './data'

const MapBanner = () => {

    return (
        <div className='mx-6 md:mx-52 my-8 md:my-24'>
            <MapContainer center={[41.9, 272]} zoom={11} scrollWheelZoom={true} id="map" zoomControl={false}
                style={{ height: '600px', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                { properties.map((property) => {
                    return (
                        <Marker key={property.id} position={[property.lat, property.lng]}>
                            <Popup>
                                <h1 className='font-bold text-xl'>{property.address}</h1>
                                <h2 className=''>{property.realtor}</h2>
                                <h2 className='text-xl my-1 flex justify-between'>
                                    ${property.price.toLocaleString()}
                                    { property.listingActive 
                                        ? <h1 className='text-lg text-green-800'>Active</h1>
                                        : <h1 className='text-lg text-red-800'>Sold</h1>
                                    }
                                </h2>
                                <img src={property.imageUrl} alt={property.address} className='w-full object-fit'/>
                                <p className='font-semibold flex gap-3'>
                                    <span>Beds: {property.bedrooms}</span>
                                    <span>Bath: {property.bathrooms}</span>
                                    <span>Sqft: {property.size}</span>   
                                </p>
                            </Popup>
                        </Marker>
                    )
                 })}

            </MapContainer>
        </div>
    )
}

export default MapBanner