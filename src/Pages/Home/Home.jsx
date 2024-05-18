import About from './About';
import Contacts from './Contacts';
import Service from './Service';

const Home = () => {
  return (
    <div>
      <div className="mb-16">
        <About></About>
      </div>
      <div className="mb-16">
        <Service></Service>
      </div>
      <div className="mb-16">
        <Contacts></Contacts>
      </div>
    </div>
  );
};

export default Home;
