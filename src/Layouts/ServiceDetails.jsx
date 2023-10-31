import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import PageHeader from "../Components/PageHeader";
import step1 from "./../assets/icons/01.png";
import step2 from "./../assets/icons/02.png";
import step3 from "./../assets/icons/03.png";
import downloadIcon from "./../assets/icons/download.svg";
import videoPreview from "./../assets/images/video-preview.png";
import Logo from "../Components/Logo";
import { DataContext } from "../Contexts/DataContext";

const ServiceDetails = () => {
  const { services } = useContext(DataContext);
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const serviceId = searchParams.get("service_id");

  const filterData = services.filter((service) => service._id === serviceId);
  const serviceData = filterData[0];

  const { _id, title, img, price, service_id, facility, description } =
    serviceData || {};

  // console.log(serviceData);

  return (
    <>
      <PageHeader title={title} />
      <div className="grid lg:grid-cols-3 gap-8 py-20">
        <div className="content lg:col-span-2 space-y-5">
          <img
            className="w-full h-[350px] object-cover rounded-lg"
            src={img}
            alt=""
          />
          <h2>{title} Service</h2>
          <p>{description}</p>

          {/* service features */}
          <div className="grid grid-cols-2 gap-5">
            {serviceData &&
              facility.map((item, index) => (
                <div
                  key={index}
                  className="card p-5 bg-bgGray rounded-lg border-t-4 border-primary"
                >
                  <h4>{item.name}</h4>
                  <p className="leading-normal pt-2">{item.details}</p>
                </div>
              ))}
          </div>

          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>

          <h2>3 Simple Steps to Process</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text
          </p>

          {/* steps */}
          <div className="grid grid-cols-3 gap-5 text-center">
            <div className="border p-8 rounded-lg space-y-2">
              <img className="inline" src={step1} alt="step 1" />
              <h4 className="uppercase">Step One</h4>
              <p>It uses a dictionary of over 200 .</p>
            </div>
            <div className="border p-8 rounded-lg space-y-2">
              <img className="inline" src={step2} alt="step 2" />
              <h4 className="uppercase">Step Two</h4>
              <p>It uses a dictionary of over 200 .</p>
            </div>
            <div className="border p-8 rounded-lg space-y-2">
              <img className="inline" src={step3} alt="step 3" />
              <h4 className="uppercase">Step Three</h4>
              <p>It uses a dictionary of over 200 .</p>
            </div>
          </div>

          {/* video */}
          <img src={videoPreview} alt="" />
        </div>
        <div className="sidebar space-y-8">
          <div className="service-list p-8 rounded-lg bg-bgGray space-y-5">
            <h4 className="text-2xl">Services</h4>
            <ul className="space-y-3">
              {services &&
                services.map((service) => (
                  <li key={service._id}>
                    <Link
                      to={`/service/?service_id=${service._id}`}
                      className="group service flex justify-between items-center px-5 py-3 bg-white rounded-md hover:bg-primary hover:text-white"
                    >
                      <p className="text-secondary group-hover:text-white">
                        {service.title}
                      </p>
                      <FiArrowRight className="text-2xl text-primary group-hover:text-white" />
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className="download-list p-8 rounded-lg bg-secondary space-y-5">
            <h4 className="text-2xl text-white">Downloads</h4>
            <ul className="space-y-3">
              <li>
                <Link className="group flex justify-between items-center rounded-md">
                  <div className="flex items-center gap-2">
                    <img src={downloadIcon} alt="" />
                    <div>
                      <h5 className="text-white leading-none">Our Brochure</h5>
                      <p className="text-sm">Download</p>
                    </div>
                  </div>
                  <FiArrowRight className="text-2xl py-2 px-3 w-auto h-auto bg-primary rounded-md text-white" />
                </Link>
              </li>
              <li>
                <Link className="group flex justify-between items-center rounded-md">
                  <div className="flex items-center gap-2">
                    <img src={downloadIcon} alt="" />
                    <div>
                      <h5 className="text-white leading-none">
                        Company Details
                      </h5>
                      <p className="text-sm">Download</p>
                    </div>
                  </div>
                  <FiArrowRight className="text-2xl py-2 px-3 w-auto h-auto bg-primary rounded-md text-white" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="download-list p-8 pb-16 rounded-lg bg-secondary space-y-5 text-center">
            <Logo isDark={true} className="inline-flex" />
            <p className="text-white font-semibold">
              Need Help? We Are Here <br />
              To Help You
            </p>
            <div className="bg-white p-8 rounded-lg ">
              <h5>
                <span className="text-primary">Car Doctor</span> Special
              </h5>
              <p className="py-1">
                Save up to <span className="text-primary">60% off</span>
              </p>
              <div className="-mb-12 mt-2">
                <Link className="btn btn-primary inline-block " to="/contact">
                  Get A Quote
                </Link>
              </div>
            </div>
          </div>

          <h2>Price ${price}</h2>

          <Link
            to={`/checkout/?service_id=${_id}`}
            className="btn btn-primary block text-center"
          >
            Proceed Checkout
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
