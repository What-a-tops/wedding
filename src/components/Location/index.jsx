import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import React from "react";
import JasmineBeachResort from "../../assets/img/Jasmine.jpg";
import { MapPin, TimerIcon } from "lucide-react";
import { CalendarIcon, MapIcon } from "@heroicons/react/16/solid";
import Title from "../Title";
import { motion } from "framer-motion";

const index = () => {
  return (
    <section
      id="location"
      data-section="location"
      className="relative w-full flex items-center justify-center text-justify p-10 gap-4 h-[100vh] shadow-md bg-lime-500/10"
    >
      <div className="relative w-full max-w-4xl mx-auto">
        <Title title="Location" className="mb-4" />
        <div className="flex flex-col justify-center items-center italic overflow-hidden">
          <div className="grid grid-cols-2 gap-2 items-center">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="col-span-1 bg-lime-50 border-2 border-lime-600/50 rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
            >
              <div className="relative w-full h-48">
                <img
                  src={JasmineBeachResort}
                  alt="Jasmin Beach Resort"
                  className="w-full h-full object-cover shadow"
                />
                <div className="absolute inset-0 bg-gradient-to-t to-transparent"></div>
              </div>

              <div className="p-2 flex-grow bg-white">
                <p className="text-sm text-lime-700/80 leading-relaxed mb-2 flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-lime-900 hover:scale-110 transition-all" />
                  <strong>Venue:</strong> Jasmin Beach Resort
                </p>

                <p className="text-sm text-lime-700/80 leading-relaxed mb-2 flex items-center gap-1 whitespace-normal break-words">
                  <MapIcon className="w-4 h-4 text-lime-900 hover:scale-110 transition-all" />
                  <strong>Address:</strong> Brgy. Amambucale, Marabut Samar
                </p>

                <p className="text-sm text-lime-700/80 leading-relaxed mb-2 flex items-center gap-1">
                  <CalendarIcon className="w-4 h-4 text-lime-900 hover:scale-110 transition-all" />
                  <strong>Date:</strong> April 28, 2025
                </p>

                <p className="text-sm text-lime-700/80 leading-relaxed mb-2 flex items-center gap-1">
                  <TimerIcon className="w-4 h-4 text-lime-900 hover:scale-110 transition-all" />
                  <strong>Time:</strong> 3:00 PM
                </p>

                <hr className="my-4 border-lime-900" />

                <p className="text-xs text-lime-900 italic text-center">
                  "We can't wait to celebrate this special day with you!"
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="col-span-1 h-full flex items-center"
            >
              <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <div className="h-full w-full rounded-lg overflow-hidden shadow-md border-2 border-lime-600/50">
                  <Map
                    defaultCenter={{
                      lat: 11.096406818380087,
                      lng: 125.21684827489315,
                    }}
                    defaultZoom={14}
                    options={{
                      styles: [
                        {
                          featureType: "all",
                          elementType: "geometry",
                          stylers: [{ color: "#e9e9e9" }],
                        },
                        {
                          featureType: "road",
                          elementType: "geometry",
                          stylers: [{ color: "#d0d0d0" }],
                        },
                        {
                          featureType: "water",
                          elementType: "geometry",
                          stylers: [{ color: "#a3c5f7" }],
                        },
                      ],
                    }}
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
