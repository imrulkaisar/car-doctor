import PageHeader from "../Components/PageHeader";

const Checkout = () => {
  return (
    <div>
      <PageHeader title="Checkout" />
      <div className="my-20 p-8 bg-bgGray rounded-lg">
        <form className="grid sm:grid-cols-2 gap-5">
          <div className="form-group">
            <label htmlFor="fname" className="sr-only">
              First Name
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="First Name"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lname" className="sr-only">
              Last Name
            </label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Last Name"
              className="form-input"
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
