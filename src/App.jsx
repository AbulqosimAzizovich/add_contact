import { useRef, useEffect, useState } from "react";
import Listitem from "./components/UI/List/Listitem";
import { ToastContainer, toast } from "react-toastify";

import Modal from "./components/UI/List/Modal";

const App = () => {
  // const textRef = useRef();
  // const btnRef = useRef();
  // useEffect(() => {
  //   console.log(textRef.current, btnRef.current);
  //   btnRef.current.addEventListener("click", () => {
  //     console.log("1");
  //   });
  // }, []);

  const [add1, setAdd] = useState([]);

  const deleteTask = (Id) => {
    const filterAdd = add1.filter((item) => item.Id != Id);
    setAdd(filterAdd);
    toast.info("Delete successfully");
  };

  const [addContact, setaddContact] = useState(false);

  return (
    <>
    <ToastContainer/>
      {addContact === true && (
        <Modal setAdd={setAdd} add1={add1} setaddContact={setaddContact} />
      )}

      <div className="container mx-auto">
        <div className="wrapper mx-auto bg-indigo-500 my-5 rounded-lg w-[500px] p-2 ">
          <div className="todo relative">
            <div className="todo-header relative  p-5 gap-x-5">
              <h1 className="font-bold text-[15px] text-white absolute left-0 top-0 uppercase ">
                Add to contact
              </h1>
              <button
                onClick={() => setaddContact(true)}
                className="bg-green-500 px-3 py-2 rounded-lg font-bold text-white active:bg-green-600 absolute right-0 top-1 w-[200px]"
              >
                Add
              </button>
            </div>

            <div className="todo-body bg-slate-400 rounded-xl my-5 p-2">
              <ul>
                {add1.length ? (
                  add1.map((item, index) => {
                    return (
                      <Listitem
                        state={item}
                        deletecontact={deleteTask}
                        index={index}
                        key={item.id}
                      />
                    );
                  })
                ) : (
                  <h1 className="text-center font-bold text-lg text-white">
                    Contacts Empty
                  </h1>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
