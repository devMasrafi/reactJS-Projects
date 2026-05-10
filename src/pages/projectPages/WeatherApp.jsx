import React, { useEffect, useState } from "react";
import useWeatherData from "../../hooks/weatherApi/WeatherData";
import { IoLocationSharp } from "react-icons/io5";
import { NavLink } from "react-router";
import { MdErrorOutline } from "react-icons/md";
import Footer from "../../components/navigation/Footer";
import WeatherSmallCard from "../../components/cards/WeatherSmallCard";

const WeatherApp = () => {
  const [locationInput, setLocationInput] = useState("");
  const [locationName, setLocationName] = useState("dhaka");

  const { weatherApi, error, loading } = useWeatherData(locationName);

  console.log(weatherApi);
  const handleLocationName = (e) => {
    e.preventDefault();

    if (!locationInput.trim()) return;

    setLocationName(locationInput.trim());
    setLocationInput("");
  };

  return (
    <main className="w-7xl mx-auto">
      <div className="border-x border-b h-100 flex items-center justify-center">
        <div className="w-120 tracking-wider">
          <h2 className="text-3xl ">
            Weather app using weather API. fully responsive and acurate data
          </h2>
          <p className="mt-2 ">
            Weather app using Reactjs and TailwindCSS. Backend APi from{" "}
            <span className="font-semibold tracking-wider text-lg italic text-blue-400 ">
              <NavLink to={`https://www.weatherapi.com/`} target="_blank">
                weatherapi.com
              </NavLink>
            </span>{" "}
            Free api and usage with a limited number of request
          </p>
        </div>
      </div>

      {/* main content */}
      <div className="border-x border-b h-140 flex items-center justify-center">
        <div className="flex items-center gap-4">
          <div className="border p-10 rounded-xl h-120">
            {/* search location */}
            <div>
              {/* input area */}
              <div>
                <input
                  type="text"
                  placeholder="enter city/location"
                  value={locationInput}
                  onChange={(e) => setLocationInput(e.target.value)}
                  className="outline dark:outline-white -outline-offset-1 px-2 py-1 placeholder:text-black dark:placeholder:text-white rounded-l-xl "
                />
                <button
                  onClick={handleLocationName}
                  type="submit"
                  className="bg-black text-white dark:bg-white dark:text-black px-2 py-1 rounded-r-xl"
                >
                  Search
                </button>
              </div>
            </div>

            {/* details of the location */}
            {error ? (
              <div className="flex justify-center items-center h-full">
                <p className="text-blue-400 w-50 text-center mt-3 text-lg flex flex-col justify-center items-center capitalize">
                  <MdErrorOutline className="h-12 w-12" />"{locationName}" not
                  found. Try another location.
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <img
                  className="h-40 w-40 "
                  src={weatherApi?.current.condition.icon}
                  alt="weather icon"
                />

                {/* temperature */}
                <div className="my-4">
                  <h2 className="font-semibold text-6xl relative text-nowrap">
                    {weatherApi ? weatherApi.current.temp_c : ""}{" "}
                    <span className="absolute -top-2 text-3xl">&deg; c</span>
                  </h2>
                  <h2 className="font-semibold text-2xl relative my-2 opacity-45">
                    or {""}
                    {weatherApi ? weatherApi.current.temp_f : ""}{" "}
                    <span className="absolute -top-2 text-xl">&deg; f</span>
                  </h2>
                </div>
                <p className="capitalize text-lg font-semibold tracking-wider  ">
                  condition:{" "}
                  {`${weatherApi ? weatherApi.current.condition.text : ""}`}
                </p>
                <div className="flex items-center opacity-60 mt-3 ">
                  <p className="flex items-center pr-2">
                    <IoLocationSharp className="h-6 w-6 mr-1" />{" "}
                    {weatherApi ? weatherApi.location.name : ""},{" "}
                  </p>
                  <p>{weatherApi ? weatherApi.location.country : ""}</p>
                </div>
              </div>
            )}
          </div>

          {/* right side */}
          <div className="w-180 border h-120 rounded-xl ">
            <div className="flex h-full items-center justify-center">
              <div className="w-full">
                <div className="flex flex-wrap gap-3 items-center justify-center">
                  <WeatherSmallCard
                    title={
                      weatherApi == null ? "" : weatherApi.current.wind_kph
                    }
                    details={`wind speed`}
                  />
                  <WeatherSmallCard
                    title={error ? "--" : weatherApi?.current.humidity}
                    details={error ? "--" : "humidity"}
                  />
                  <WeatherSmallCard
                    title={weatherApi?.current.uv}
                    details={`Sun UV index `}
                  />
                  <WeatherSmallCard
                    title={weatherApi?.current.vis_km}
                    details={`visual/Km`}
                  />
                </div>
              </div>

              {/* guide information */}
              <div className="h-full border-l p-10 w-130">
                <h2 className="text-2xl capitalize  underline underline-offset-4 pb-5">
                  guide
                </h2>
                <ul className="text-sm tracking-wider list-inside list-disc">
                  <li className="pb-2">
                    Current city has been set to{" "}
                    <span className="text-blue-400 font-medium italic">
                      {weatherApi ? weatherApi.location.name : "loading..."}
                    </span>
                  </li>
                  <li className="pb-2">
                    change the city by typing the name in the search bar
                  </li>
                  <li className="pb-2">
                    if the city is in our database it will show
                  </li>
                  <li className="pb-2">
                    if its not in our database we hope for your understanding
                  </li>
                  <li className="pb-2">
                    This is from public API{" "}
                    <span className="text-blue-400 tracking-widest cursor-pointer">
                      (
                      <NavLink
                        to={`https://www.weatherapi.com/`}
                        target="_blank"
                      >
                        weatherapi.com
                      </NavLink>
                      )
                    </span>
                    you can follow link above for details
                  </li>
                  <li className="pb-2">Thank you for your understanding</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-25 border-x">
        <Footer />
      </div>
    </main>
  );
};

export default WeatherApp;
