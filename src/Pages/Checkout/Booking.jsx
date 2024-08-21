import { useEffect, useState } from 'react';
// import { AuthCotext } from '../../AuthProvider/AuthProvider';
import BookingRow from './BookingRow';
// import axios from 'axios';
import UseAxiosSecure from '../../Hook/UseAxiosSecure';
import UseAuth from '../../Hook/UseAuth'



const Booking = () => {
  const axiosSecure = UseAxiosSecure();
  const {user} = UseAuth()
  // const { user } = useContext(AuthCotext);

  const [booking, setBooking] = useState([]);

  const url = `/booking?email=${user?.email}`;

  useEffect(() => {

    // axios.get(url, {withCredentials: true})
    //   .then(res => {
    //   setBooking(res.data)
    // })
    
    
      // fetch(url, {credentials: 'include'})
      //   .then(res => res.json())
    //   .then(data => setBooking(data));

    axiosSecure.get(url)
      .then(res => setBooking(res.data));
    
  }, [url, axiosSecure]);

  const handleDelete = id => {
    const proceed = confirm('Are you sure you want to delete');

    if (proceed) {
      fetch(`https://car-doctor-server-wine-tau.vercel.app/booking/${id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(date => {
          console.log(date);
          if (date.deletedCount > 0) {
            alert('deleted successful');
            const remaining = booking.filter(booking => booking._id !== id);
            setBooking(remaining);
          }
        });
    }
  };

  
  const handleConfirm = id => {
    fetch(`https://car-doctor-server-wine-tau.vercel.app/booking/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ status: 'confirm' }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = booking.filter(booking => booking._id !== id);
          const updated = booking.find(booking => booking._id === id);
          updated.status = 'confirm';
          const newBooking = [updated, ...remaining];
          setBooking(newBooking);
        }
      });
  }




  return (
    <div>
      <h2>Your Booking: {booking.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {booking.map(booking => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
