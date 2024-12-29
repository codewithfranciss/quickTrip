"use client"

import { Input } from '@/components/ui/input';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState } from 'react';

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

function LocationMarker({ setLocation }) {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      setLocation(e.latlng);
    },
  });

  return position === null ? null : <Marker position={position}></Marker>;
}

export default function Page() {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [location, setLocation] = useState(null);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-wrap lg:flex-nowrap gap-8 w-full max-w-7xl">
        {/* Form Section */}
        <div className="w-full lg:w-1/3 p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-gray-800 font-bold text-2xl text-center mb-6">
            Find a Driver
          </h1>
          <form className="space-y-5">
            {/* Pickup Location Input */}
            <div>
              <label htmlFor="pickup" className="block text-sm font-medium text-gray-600">
                Pickup Location
              </label>
              <Input
                id="pickup"
                type="text"
                className="mt-1 bg-slate-200 p-3  w-full"
                placeholder="Enter pickup location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
              />
            </div>
            {/* Drop-off Location Input */}
            <div>
              <label htmlFor="dropoff" className="block text-sm font-medium text-gray-600">
                Drop-off Location
              </label>
              <Input
                id="dropoff"
                type="text"
                className="mt-1 bg-slate-200 p-3  w-full"
                placeholder="Enter drop-off location"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
              />
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="button"
                className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              >
                Search for Driver
              </button>
            </div>
          </form>
        </div>
        {/* Map Section */}
        <div className="w-full lg:w-2/3 h-[500px] bg-gray-200 rounded-lg overflow-hidden shadow-md">
          <MapContainer
            center={[6.5244, 3.3792]} // Example coordinates (Lagos, Nigeria)
            zoom={13}
            className="h-full w-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <LocationMarker setLocation={(latlng) => setLocation(latlng)} />
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
