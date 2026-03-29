import React, { useEffect, useState } from "react";
import axios from "axios";

export default function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const namespace = "my-react-weather-app";  
    const key = "visits";

    const url = `https://api.countapi.xyz/hit/${namespace}/${key}`;

    axios.get(url)
      .then((response) => {
      setCount(response.data.value);
    })
      .catch((error) => {
        console.log("Visitor counter error:", error);
        setCount("N/A");
    });
  
  }, []);

  return (
    <div className="visitor-counter">
      {count ? `👀 ${count} návštěv` : "Loading..."}
    </div>
  );
}