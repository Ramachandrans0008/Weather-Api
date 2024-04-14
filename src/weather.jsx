import { useState } from "react";
import axios from "axios";

function Weather() {
  // for input box
  const [inp, setinp] = useState("");

  const handleinp = (evt) => {
    setinp(evt.target.value);
  };

  // for report

  const [weather, setweather] = useState("");
  const [temp, settemp] = useState("");
  const [desc, setdesc] = useState("");

  // for button
  function search() {
    var wweatherdata = axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=6d2d6eac4ba251ef7c5b056bbb5f1d5c`
    );
    wweatherdata.then(function (sucess) {
      console.log(sucess.data);
      setweather(sucess.data.weather[0].main);
      settemp(sucess.data.main.temp);
      setdesc(sucess.data.weather[0].description);
    });
  }
  return (
    <>
      <div className=" text-center  mt-20  p-20">
        <h1 className="text-4xl font-bold text-teal-300 p-5 ml-5">
          Weather in
        </h1>
        <br />
        <input
          value={inp}
          onChange={handleinp}
          type="text"
          placeholder="Enter your city Name"
          className="border rounded-2xl w-96 h-10 bg-transparent text-slate-200"
        />
        <button
          onClick={search}
          className=" w-20 p-1 ml-3 border border-white rounded-3xl"
        >
          🔍
        </button>

        <h2 className="text-3xl font-bold text-orange-400 mt-5">Report</h2>
        <br />
        <p className="text-xl font-medium text-white mr-50">
          Weather : {weather}
        </p>
        <br />
        <p className="text-xl font-medium text-white mr-50">
          Temperature : {temp}
        </p>
        <br />
        <p className="text-xl font-medium text-white mr-50">
          Description : {desc}
        </p>
      </div>
    </>
  );
}
export default Weather;
