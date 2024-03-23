import { useEffect, useState } from "react";
import Button from "../Button";

import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
function JobFeaturedItem() {
  const [featured, setFeatured] = useState([]);

  const [len, setLen] = useState(4);
  console.log(featured.slice(0, `${len}`));
  useEffect(() => {
    const featuredDataGet = async () => {
      const response = await fetch("jobs.json");
      const data = await response.json();
      setFeatured(data);
    };
    featuredDataGet();
  }, []);

  const handleSlice = () => {
    setLen(featured.length);
  };
  return (
    <div className="container pt-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {featured.slice(0, `${len}`).map((singleFeatured) => {
          const {
            id,
            logo,
            job_title,
            company_name,
            remote_or_onsite,
            location,
            salary,
            job_type,
          } = singleFeatured;
          return (
            <div
              key={id}
              className="bg-white rounded-lg p-10 flex flex-col space-y-4 lg:space-y-6 transition-all duration-300 ease-linear ring-1 ring-slate-100 hover:shadow-md"
            >
              <img
                src={logo}
                className="group-hover:shadow-sm transition-all duration-300 ease-linear w-32 h-auto object-contain border-2 border-dashed border-slate-100"
                alt="logo"
              />
              <div className="flex flex-col space-y-3">
                <h3 className="font-extrabold text-[24px] text-dark-dark2">
                  {job_title}
                </h3>
                <p className="font-medium text-base text-dark-dark2">
                  {company_name}
                </p>
              </div>
              <div className="flex gap-4">
                <button className="group relative inline-flex items-center justify-center p-0.5 transition-all ease-linear duration-300 mb-2 me-2 overflow-hidden text-sm font-medium  rounded-lg bg-gradient-to-br from-btn-StartBg to-btn-EndBg ">
                  <span className="group-hover:bg-transparent group-hover:text-white relative px-5 py-2.5 transition-all ease-linear duration-300 bg-white text-dark-dark1 rounded-lg ">
                    {remote_or_onsite}
                  </span>
                </button>
                <button className="group relative inline-flex items-center justify-center p-0.5 transition-all ease-linear duration-300 mb-2 me-2 overflow-hidden text-sm font-medium  rounded-lg bg-gradient-to-br from-btn-StartBg to-btn-EndBg ">
                  <span className="group-hover:bg-transparent group-hover:text-white relative px-5 py-2.5 transition-all ease-linear duration-300 bg-white text-dark-dark1 rounded-lg ">
                    {job_type}
                  </span>
                </button>
              </div>
              <div className="flex gap-4 text-xl text-dark-dark3 font-bold">
                <p className="flex gap-0.5 items-center">
                  <IoLocationOutline className="text-2xl"></IoLocationOutline>
                  {location}
                </p>
                <p className="flex gap-0.5 items-center">
                  <MdOutlineAttachMoney className="text-2xl"></MdOutlineAttachMoney>
                  {salary}
                </p>
              </div>
              {/* button */}
              <Button
                cls="!text-xl !px-[18px] !py-[10px]"
                name="View Details"
              ></Button>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center text-center mt-8">
        {featured.length > len && (
          <div
            onClick={() => {
              handleSlice();
            }}
          >
            <Button cls="py-4" name="See All Jobs"></Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobFeaturedItem;
