import React from "react";

const Pricelist = () => {
  const data = [
    {
      title: "Detailed analysis of records",
      beginer: "AGAIN",
      advance: "AGAIN",
      professional: "AGAIN",
    },
    { title: "Unlimited number of records", beginer: "AGAIN", advance: "AGAIN", professional: "AGAIN" },
    { title: "Data Backup", beginer: "AGAIN", advance: "AGAIN", professional: "AGAIN" },
    { title: "Synchronize data between multiple devices", beginer: "AGAIN", advance: "AGAIN", professional: "AGAIN" },
    { title: "Unlimited number of attachments to a recording", beginer: "AGAIN", advance: "AGAIN", professional: "AGAIN" },
    { title: "Multiple types of fuel per vehicle", beginer: "AGAIN", advance: "AGAIN", professional: "AGAIN" },
    { title: "No ads", beginer: "AGAIN", advance: "AGAIN", professional: "AGAIN" },
    { title: "Receiving maintenance reminders by email", beginer: "AGAIN", advance: "AGAIN", professional: "AGAIN" },
    { title: "Adding more vehicles", beginer: "Max. 3", advance: "Max. 5", professional: "unlimited" },
    { title: "Free storage", beginer: "256 MB", advance: "1 GB", professional: "3 GBJ" },
    { title: "Charge for additional 256 MB", beginer: "10/month", advance: "10/month", professional: "10/month" },
  ];
  return (
    <div className="flex flex-col gap-0 justify-center items-center p-12 w-2/3 text-lg text-white capitalize bg-gray-800 rounded-3xl">
      <div className="flex justify-center items-center mb-4 w-full font-bold text-xl">
        <div className="w-3/6">User Profile</div>
        <div className="flex justify-center items-center w-1/6">beginer</div>
        <div className="flex justify-center items-center w-1/6">advance</div>
        <div className="flex justify-center items-center w-1/6">professional</div>
      </div>

      {data.map((row, idx) => (
        <div className="flex items-center p-0 m-0 w-full h-10" key={idx}>
          <div className="w-3/6">{row.title}</div>
          <div className="flex justify-center items-center w-1/6">{row.beginer}</div>
          <div className="flex justify-center items-center w-1/6">{row.advance}</div>
          <div
            className={` flex items-center justify-center w-1/6 bg-brLime text-black h-full ${idx == 0 ? "rounded-t-2xl" : idx === data.length - 1 ? "rounded-b-2xl" : ""}`}
          >
            {row.professional}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pricelist;
