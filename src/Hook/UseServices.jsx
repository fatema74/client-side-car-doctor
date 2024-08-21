import { useEffect, useState } from "react";


const UseServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://car-doctor-server-wine-tau.vercel.app/servicess')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return services;
};

export default UseServices;