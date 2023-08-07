import React from "react";
import { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const Modal = ({ setaddContact, setAdd, add1 }) => {
  const name = useRef("");
  const surname = useRef("");
  const number = useRef("");
  const img = useRef("");

  const inputValues = (e) => {
    e.preventDefault();
    const contacts = {
      Id: Date.now(),
      Name: name.current.value,
      Surname: surname.current.value,
      Number: number.current.value,
      Img: img.current.value,
    };

    // console.log(contacts, add1);
    if (
      contacts.Name.trim().length &&
      contacts.Surname.trim().length &&
      contacts.Number.trim().length
    ) {
      setAdd((oldingiQiymatlar) => [contacts, ...oldingiQiymatlar]);
      toast.success("Success");
      name.current.value = "";
      surname.current.value = "";
      number.current.value = "";
    } else {
      toast.error("Please enter a titles");
    }
  };
  return (
    <>
      <div className="w-full h-[130vh] fixed z-[99] bg-[rgb(0,0,0,0.6)]"></div>

      <div className="modal_window z-[999]">
        <ToastContainer/>
        <div className="w-[800px] text-[#041830] bg-indigo-300 top-[20%] flex flex-col items-center justify-center gap-y-5 right-[29.1%] rounded-[15px] p-5 h-[550px] fixed z-[999]">
          <h1 className="mb-6 text-[30px] font-bold font-sans">Add contact</h1>
          <form onSubmit={(e) => inputValues(e)} className="relative">
            <div className="flex gap-4">
              <div className="w-[250px] flex flex-col gap-y-2">
                <label className="font-semibold text-center text-[15px]">
                  Name
                </label>
                <input
                  ref={name}
                  type="text"
                  className=" outline-none px-4 py-3 rounded-lg placeholder:text-center"
                  placeholder="Your Name"
                />
              </div>

              <div className="w-[250px] flex flex-col gap-y-2">
                <label className="font-semibold text-center text-[15px]">
                  Surname
                </label>
                <input
                  ref={surname}
                  type="text"
                  className=" outline-none px-4 py-3 rounded-lg placeholder:text-center"
                  placeholder="Your Surname"
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-y-2 mt-5">
              <label className="font-semibold text-center text-[15px]">
                Phone number
              </label>
              <input
                ref={number}
                type="tel"
                className=" outline-none px-4 py-3 rounded-lg placeholder:text-center"
                placeholder="Phone number"
              />
            </div>

            <div className="w-full flex flex-col gap-y-2 mt-5">
              <label className="font-semibold text-center text-[15px]">
                Image Url
              </label>
              <input
                ref={img}
                type="text"
                className=" outline-none px-4 py-3 rounded-lg placeholder:text-center"
                placeholder="Image adress htpps://"
              />
            </div>

            {/* <div className="flex gap-4 mt-5">
              <div className="w-[250px] flex flex-col gap-y-2">
                <label className="font-semibold text-center text-[15px]">
                  Room
                </label>
                <input
                  ref={room}
                  type="text"
                  className=" outline-none px-4 py-3 rounded-lg placeholder:text-center"
                  placeholder="Room number"
                />
              </div>

              <div className="w-[250px] flex flex-col gap-y-2">
                <label className="font-semibold text-center text-[15px]">
                  Price
                </label>
                <input
                  ref={price}
                  type="text"
                  className=" outline-none px-4 py-3 rounded-lg placeholder:text-center"
                  placeholder="Room price"
                />
              </div>
            </div> */}

            <button className="mt-5 w-full bg-blue-500 py-3 rounded-lg font-semibold text-white active:bg-blue-600">
              Add
            </button>

            <button
              onClick={() => setaddContact(false)}
              className="mt-5 w-full bg-red-500 py-3 rounded-lg font-semibold text-white active:bg-red-600"
            >
              Cancel
            </button>

            <button
              onClick={() => setaddContact(false)}
              className="absolute -top-[90px] -right-[120px] bg-red-500 w-[20px] h-[20px] flex items-center rounded-sm active:bg-red-600"
            >
              <i className="bx bx-x text-xl text-white font-semibold"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
