import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import React from "react";
import Section from "../Section";
import JasmineBeachResort from "../../assets/img/Jasmine.jpg";
import { MapPin, TimerIcon } from "lucide-react";
import { CalendarIcon, MapIcon } from "@heroicons/react/16/solid";
import Title from "../Title";
import { motion } from "framer-motion";
import Ring from "../../assets/img/ring.webp";

const index = () => {
  return (
    <motion.section
      id="location"
      data-section="location"
      className="relative w-full flex flex-col justify-center items-center text-justify p-4 md:p-10 gap-4 min-h-[100vh] shadow-md bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Ring})` }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <motion.div
        className="flex flex-col justify-center py-4 md:py-4 rounded-2xl w-full text-center border-0 border-lime-600/50 border-opacity-20 overflow-hidden bg-white/70 backdrop-blur-sm shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <Title title="Location" />

        <div className="flex flex-col justify-center italic w-full">
          <div className="flex flex-col justify-center px-2 italic overflow-hidden mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
              <div className="col-span-1 overflow-hidden flex flex-col h-full flex-1">
                <div className="relative w-full h-48">
                  <img
                    src={JasmineBeachResort}
                    alt="Jasmin Beach Resort"
                    className="w-full h-full object-cover shadow"
                  />
                </div>

                <div className="p-2 flex-grow">
                  {/* Details */}
                  <p className="text-sm text-lime-700/80 leading-relaxed mb-2 flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-lime-900" />
                    <strong>Venue:</strong> Jasmin Beach Resort
                  </p>

                  <p className="text-sm text-lime-700/80 leading-relaxed mb-2 flex items-center gap-1">
                    <MapIcon className="w-4 h-4 text-lime-900" />
                    <strong>Address:</strong> Brgy. Amambucale, Marabut, Samar
                  </p>

                  <p className="text-sm text-lime-700/80 leading-relaxed mb-2 flex items-center gap-1">
                    <CalendarIcon className="w-4 h-4 text-lime-900" />
                    <strong>Date:</strong> April 28, 2025
                  </p>

                  <p className="text-sm text-lime-700/80 leading-relaxed mb-2 flex items-center gap-1">
                    <TimerIcon className="w-4 h-4 text-lime-900" />
                    <strong>Time:</strong> 3:00 PM
                  </p>

                  <hr className="my-4 border-lime-900" />

                  <p className="text-xs text-lime-900 italic text-center">
                    "We can't wait to celebrate this special day with you!"
                  </p>
                </div>
              </div>

              <div className="col-span-1 h-full min-h-[350px] flex-1">
                <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                  <div className="h-full w-full">
                    <Map
                      defaultCenter={{
                        lat: 11.096406818380087,
                        lng: 125.21684827489315,
                      }}
                      defaultZoom={15}
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
      </motion.div>
    </motion.section>
  );
};

export default index;
