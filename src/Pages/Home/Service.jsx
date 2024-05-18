import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/servicess')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h3 className="text-3xl font-semibold text-red-500">Service</h3>
        <h2 className="text-5xl font-bold my-5">Our Services Aria</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br></br> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {services.map(service => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Service;
