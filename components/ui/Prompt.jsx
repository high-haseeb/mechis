import Image from "next/image";
import React from "react";

const Prompt = () => {
  return (
    <div className="bg-yellow-200 w-2/3 rounded-2xl p-8 flex gap-4">
      <Image src={'/info.svg'} width={20} height={10} alt="info" className="object-cover w-1/6"/>
      <div>
      Pay only for what you actually use. The monthly fee is only CZK 10 for every 256 MB. You can optimize the conditions yourself as it suits you.
      You only pay for the actual use of the service, which allows you to save costs. With a low price for additional storage, it is possible to
      easily and carelessly adjust the storage capacity as needed. You always know what you're paying for. The app shows a clear overview of the cost
      of using the app.
    </div></div>
  );
};

export default Prompt;
