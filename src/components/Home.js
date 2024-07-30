import React, { useContext } from "react";
import Greeting from "../Utils/Greeting";
import DisplayTodos from "../Utils/DisplayTodos";
import { RxPlus } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import DataContext from "../context/DataContext";

const Home = () => {
  const {
    data,
    setData,
    edit,
    setEdit,
    addNotificationTitle,
    editNotificationTitle,
    deleteNotificationTitle,
    setDeleteNotificationTitle,
    addNotification,
    editNotification,
    deleteNotification,
    setDeleteNotification,
    setTaskDetails,
  } = useContext(DataContext);

  const navigate = useNavigate();

  return (
    <div className="w-full relative min-h-screen pb-60 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500">
      <div className="max-w-[1300px] px-6 m-auto">
        <div>
          <Greeting />
          <DisplayTodos
            data={data}
            setData={setData}
            edit={edit}
            setEdit={setEdit}
            setDeleteNotificationTitle={setDeleteNotificationTitle}
            setDeleteNotification={setDeleteNotification}
            setTaskDetails={setTaskDetails}
          />

          {addNotification && (
            <div className="z-10 px-4 py-3 rounded-md bg-white shadow-lg border-l-[5px] flex items-center gap-3 border-green-600 fixed bottom-8 left-1/2 transform -translate-x-1/2">
              <FaCheck className="text-2xl text-green-500" />
              <h2 className="text-sm text-slate-600 font-semibold">
                Added task - {addNotificationTitle}
              </h2>
            </div>
          )}

          {editNotification && (
            <div className="z-10 px-4 py-3 rounded-md bg-white shadow-lg border-l-[5px] flex items-center gap-3 border-blue-600 fixed bottom-8 left-1/2 transform -translate-x-1/2">
              <FaCheck className="text-2xl text-blue-500" />
              <h2 className="text-sm text-slate-600 font-semibold">
                Task {editNotificationTitle} updated
              </h2>
            </div>
          )}

          {deleteNotification && (
            <div className="z-10 px-4 py-3 rounded-md bg-white shadow-lg border-l-[5px] flex items-center gap-3 border-red-600 fixed bottom-8 left-1/2 transform -translate-x-1/2">
              <FaCheck className="text-2xl text-red-500" />
              <h2 className="text-sm text-slate-600 font-semibold">
                Deleted Task - {deleteNotificationTitle}
              </h2>
            </div>
          )}

          <div
            onClick={() => navigate("/addTodo")}
            className="fixed bottom-10 w-16 h-16 max-sm:w-14 max-sm:h-14 cursor-pointer bg-gradient-to-br from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 shadow-lg grid place-items-center rounded-full left-1/2 transform -translate-x-1/2 transition-transform duration-300 ease-in-out"
          >
            <RxPlus className="text-4xl text-white max-sm:text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
