import PageHeader from "../Components/PageHeader";
import { IoReturnUpBackOutline, IoTrashOutline } from "react-icons/io5";
import { BsCartX } from "react-icons/bs";

import service1 from "./../assets/images/services/1.jpg";
import { useContext } from "react";
import { DataContext } from "../Contexts/DataContext";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Cart = () => {
  const { bookings, setBookings, apiURI } = useContext(DataContext);

  const deleteBooking = async (id) => {
    try {
      const response = await axios.delete(`${apiURI}/bookings/${id}`);

      if (response) {
        Swal.fire({
          icon: "success",
          text: "Successfully removed!",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          toast: true,
        });

        const newBookings = bookings.filter((booking) => booking._id !== id);
        setBookings(newBookings);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleConfirm = (id) => {
    try {
      const newStatus = "Confirmed";
      const response = axios.patch(`${apiURI}/bookings/${id}`, { newStatus });

      console.log(response);

      const filteredData = bookings.filter((booking) => booking._id === id);
      const filteredBooking = filteredData[0];
      filteredBooking.status = newStatus;

      setBookings([...bookings]);

      Swal.fire({
        icon: "success",
        title: "Status updated!",
        timer: 2000,
        timerProgressBar: true,
        toast: true,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <PageHeader title="Cart" />

      {/* cart items */}
      <div className="relative overflow-x-auto sm:rounded-lg py-20">
        {bookings.length > 0 ? (
          <>
            <table className="w-full text-sm text-left">
              <tbody className="border-t">
                {bookings &&
                  bookings.map((booking) => (
                    <tr key={booking._id} className="border-b">
                      <td className="px-6 py-4">
                        <button
                          onClick={() => deleteBooking(booking._id)}
                          className="h-10 w-10 border rounded-full bg-bgGray"
                        >
                          X
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <img
                          className="w-20 h-20 object-cover rounded-md"
                          src={booking.serviceImg}
                          alt=""
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-lg">
                        {booking.serviceName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-lg">
                        ${booking.servicePrice}
                      </td>
                      <td className="px-6 py-4">{booking.date}</td>
                      <td className="px-6 py-4">
                        {booking.status === "Confirmed" ? (
                          <button className="btn btn-primary bg-green-600 border-green-600 capitalize">
                            {booking.status}
                          </button>
                        ) : (
                          <button
                            onClick={() => handleConfirm(booking._id)}
                            className="btn btn-primary capitalize"
                          >
                            {booking.status}
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <div className="flex justify-between py-10">
              <Link
                to="/services"
                className="text-text flex gap-3 items-center hover:text-secondary"
              >
                <IoReturnUpBackOutline className="text-xl" /> Continue Shopping
              </Link>
              <button className="text-text flex gap-3 items-center hover:text-secondary">
                <IoTrashOutline className="text-xl" /> Clear Shopping Cart
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center space-y-6">
            <BsCartX className="text-9xl text-text" />
            <h3 className="text-text text-2xl font-light">
              Your cart is empty!
            </h3>
            <Link to="/services" className="btn btn-bordered hover:btn-primary">
              Go to Services page
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
