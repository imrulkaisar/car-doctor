import { useContext } from "react";
import PageHeader from "../Components/PageHeader";
import { DataContext } from "../Contexts/DataContext";
import { useLocation } from "react-router";
import { UserContext } from "../Contexts/UserContext";
import axios from "axios";
import Swal from "sweetalert2";

const Checkout = () => {
  const { user } = useContext(UserContext);
  const { services, bookings, setBookings, apiURI } = useContext(DataContext);
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const serviceId = searchParams.get("service_id");

  const filterData = services.filter((service) => service._id === serviceId);
  const serviceData = filterData[0];

  const { _id, title, img, price, service_id } = serviceData || {};

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const date = form.date.value;
    const message = form.message.value;

    const orderInfo = {
      name,
      phone,
      email,
      date,
      message,
      serviceName: title,
      serviceImg: img,
      servicePrice: price,
      serviceId: service_id,
      status: "pending",
    };

    const postOrder = async () => {
      try {
        const response = await axios.post(`${apiURI}/bookings`, orderInfo);

        console.log(response.data);

        if (response.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Order done!",
            text: "Please wait for admin confirmation.",
            showConfirmButton: false,
            showCloseButton: true,
          });

          const loadBookings = async () => {
            try {
              const response = await axios.get(`${apiURI}/bookings`);
              if (response.status === 200) {
                setBookings(response.data);
              } else {
                console.error("Request failed with status:", response.status);
                // handle error or set appropriate state
              }
            } catch (error) {
              console.error("An error occurred:", error);
              // handle error or set appropriate state
            }
          };

          loadBookings();
        }
      } catch (error) {
        console.error(error);
      }
    };

    postOrder();
  };

  return (
    <div>
      <PageHeader title="Checkout" />
      <div className="mt-20 flex gap-5">
        <img
          className="w-40 aspect-video object-cover rounded-lg border"
          src={img}
          alt=""
        />
        <div>
          <p>
            <b className="font-semibold text-secondary">Service:</b> {title}
          </p>
          <p>
            <b className="font-semibold text-secondary">Service ID:</b>{" "}
            {service_id}
          </p>
          <p>
            <b className="font-semibold text-secondary">Price:</b> ${price}
          </p>
        </div>
      </div>
      <div className="my-20 p-8 bg-bgGray rounded-lg">
        <form
          className="grid sm:grid-cols-2 gap-5"
          onSubmit={handleConfirmOrder}
        >
          <div className="form-group">
            <label htmlFor="name" className="sr-only">
              First Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full name"
              className="form-input"
              defaultValue={user?.displayName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="sr-only">
              Phone Number
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              className="form-input"
              defaultValue={user?.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date" className="sr-only">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              placeholder="Last Name"
              className="form-input"
            />
          </div>
          <div className="form-group col-span-2">
            <label htmlFor="message" className="sr-only">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              className="form-input min-h-[200px]"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary col-span-2 block">
            Order Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
