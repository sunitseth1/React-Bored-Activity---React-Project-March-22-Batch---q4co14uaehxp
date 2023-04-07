import React, { useState, useEffect } from "react";
import "../styles/App.css";

const Loader = () => <div id="loader">Loading...</div>;

const App = () => {
  // function for url link
  function makeURL(type) {
    console.log(type);
    return `https://www.boredapi.com/api/activity?type=${type}`;
  }
  // We can use two types
  // recreational or education.
  //
  const [activity, setActivity] = useState(null);

  async function getResponse(z) {
    setActivity(null);

    let a = makeURL(z);

    const response = await fetch(a);
    let data = await response.json();
    setActivity(data.activity);
  }

  useEffect(() => getResponse("education"), []);

  return (
    <div id="main">
      {activity ? <div id="activity"> {activity}</div> : <Loader />}
      <button id="btn-recreation" onClick={() => getResponse("recreational")}>
        Recreational
      </button>
      <button id="btn-education" onClick={() => getResponse("education")}>
        Education
      </button>
    </div>
  );
};

export default App;
