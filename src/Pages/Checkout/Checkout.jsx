import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthCotext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Checkout = () => {
  const service = useLoaderData();
  const { title, price, _id, img } = service;
  const { user } = useContext(AuthCotext);

  const handleBookService = event => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const message = form.message.value;
    const order = {
      customerName: name,
      email,
      img,
      date, 
      service: title,
      service_id: _id,
      price,
      message
    }
    console.log(order);

    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(date => {
        console.log(date);
        if (date.insertedId) {
          Swal.fire({
            title: 'Booking Now?',
            text: 'Service booking successfully?',
            icon: 'question',
          });
        }
      });

  }



  return (
    <div className="mb-16">
      <h2 className="text-center font-semibold text-4xl">Book Fear: {title}</h2>

      <form onSubmit={handleBookService} className="card-body">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={'$' + price}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                defaultValue={user?.email}
                name="email"
                className="input input-bordered"
                required
              />
            </div>
          </div>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Your Message</span>
          </label>
          <textarea
            className="textarea w-full textarea-bordered"
            name='message'
            placeholder="Your message"
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn bg-red-400"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
