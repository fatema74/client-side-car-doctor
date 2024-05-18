import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const {_id, title, img, price } = service;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="p-4">
          <img src={img} alt="" className="rounded-xl h-72 w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{title}</h2>
          <p className="text-red-500 font-bold">Price: ${price}</p>
          <div className="text-right">
            <Link to={`/checkout/${_id}`}>
              <button className="btn text-xl">
                <AiOutlineArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
