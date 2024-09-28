import React from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";

const PlaceOrder = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] bordeer-t px-4 border-t sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="flex flex-col gap-4 w-full sm: max-w-[490px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"DETAILS"} />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 w-full py-1.5 px-3.5 rounded"
            type="text"
            placeholder="First Name"
            required
          />
          <input
            className="border border-gray-300 w-full py-1.5 px-3.5 rounded"
            type="text"
            placeholder="Last Name"
            required
          />
        </div>
        <input
          className="border border-gray-300 w-full py-1.5 px-3.5 rounded"
          type="email"
          placeholder="Email"
          required
        />
        <div className="flex gap-3">
          <input
            className="border border-gray-300 w-full py-1.5 px-3.5 rounded"
            type="text"
            placeholder="City"
            required
          />
          <input
            className="border border-gray-300 w-full py-1.5 px-3.5 rounded"
            type="text"
            placeholder="Estate"
            required
          />
        </div>
        <input
          className="border border-gray-300 w-full py-1.5 px-3.5 rounded"
          type="number"
          placeholder="Zipcode"
          required
        />
        <input
          className="border border-gray-300 w-full py-1.5 px-3.5 rounded"
          type="number"
          placeholder="Phone no."
          required
        />
      </div>

      <div className="mt-8 mb-10">
        <div className="mt-8 min-w-80">
          <CartTotal />
          <div className="mt-12">
            {/* Payment method selection */}
            <div className="flex gap-3 flex-col lg:flex-row"></div>
            <div className="w-full text-end mt-8">
              <button
                onClick={() => navigate("/orders")}
                className="bg-black w-full text-white px-16 py-3 text-sm"
              >
                PAY WITH MPESA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
