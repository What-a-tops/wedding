import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import React from "react";
import JasmineBeachResort from "../../assets/Jasmine.jpg";
import { MapPin, TimerIcon } from "lucide-react";
import { CalendarIcon, GlobeAltIcon, MapIcon } from "@heroicons/react/16/solid";

const index = () => {
  return (
    <section
      id="location"
      className="relative w-full flex items-center justify-center text-justify p-10 gap-4 h-[100vh] shadow-md bg-lime-500/10"
    >
      <div className="relative w-full max-w-4xl">
        <div className="relative z-10 text-dark text-center p-4">
          <h1 className="text-3xl font-extrabold text-lime-900 uppercase">
            Location
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center italic">
          <div className="grid grid-cols-2 gap-2 items-center">
            <div className="col-span-1 bg-lime-50 border-2 border-lime-600 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
              <div className="relative w-full h-48">
                <img
                  src={JasmineBeachResort}
                  alt="Jasmin Beach Resort"
                  className="w-full h-full object-cover shadow"
                />
              </div>

              <div className="p-2 flex-grow bg-white">
                <p className="text-sm text-lime-700 leading-relaxed mb-2 flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-lime-900" />
                  <strong>Venue:</strong> Jasmin Beach Resort
                </p>

                <p className="text-sm text-lime-700 leading-relaxed mb-2 flex items-center gap-1 whitespace-normal break-words">
                  <MapIcon className="w-4 h-4 text-lime-900" />
                  <strong>Address:</strong> Brgy. Amambucale, Marabut Samar
                </p>

                {/* <p className="text-sm text-lime-700 leading-relaxed mb-2 flex items-center gap-2">
                  <GlobeAltIcon className="w-4 h-4 text-lime-900" />
                  <strong>Coordinates:</strong> Lat: <strong>11.0964</strong>,
                  Lng: <strong>125.2168</strong>
                </p> */}

                <p className="text-sm text-lime-700 leading-relaxed mb-2 flex items-center gap-1">
                  <CalendarIcon className="w-4 h-4 text-lime-900" />
                  <strong>Date:</strong> April 28, 2025
                </p>

                <p className="text-sm text-lime-700 leading-relaxed mb-2 flex items-center gap-1">
                  <TimerIcon className="w-4 h-4 text-lime-900" />
                  <strong>Time:</strong> 3:00 PM
                </p>

                <hr className="my-4 border-lime-900" />

                <p className="text-xs text-lime-900 italic text-center">
                  "We can't wait to celebrate this special day with you!"
                </p>
              </div>
            </div>

            <div className="col-span-1 h-full flex items-center">
              <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <div className="h-full w-full rounded-lg overflow-hidden shadow-md">
                  <Map
                    defaultCenter={{
                      lat: 11.096406818380087,
                      lng: 125.21684827489315,
                    }}
                    defaultZoom={14}
                  >
                    <Marker
                      position={{
                        lat: 11.096406818380087,
                        lng: 125.21684827489315,
                      }}
                      title="Jasmin Beach Resort"
                    />
                  </Map>
                </div>
              </APIProvider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
