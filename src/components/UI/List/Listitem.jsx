import React from "react";
import { ToastContainer, toast } from "react-toastify";

const Listitem = ({
  state: { Name, isDone, Id, Surname, Number, Img },
  index,
  deletecontact,
}) => {
  return (
    <li className="list p-3 flex items-center justify-between my-5 bg-white rounded-lg">

      <div class="flex flex-col items-center w-[100%] bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="w-[350px] overflow-hidden">
          <img
            className="object-cover  rounded-[50%] min-w-[150px] h-[150px]"
            src={
              Img.length
                ? Img
                : "https://i.pinimg.com/236x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg"
            }
            alt="Profile picture"
          />
        </div>
        <div className="flex relative text-start w-full flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {Name} {Surname}
          </h5>
          <a
            href="#"
            className="mb-3 font-normal text-gray-700 dark:text-gray-400"
          >
            {Number}
          </a>
          <div className="flex justify-end items-center">
            <button
              onClick={() => deletecontact(Id)}
              className="bg-red-500 px-3 py-2 w-[120px] rounded-lg font-bold text-white active:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Listitem;
