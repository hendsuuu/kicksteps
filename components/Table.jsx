"use client";

import React from "react";
import { useState, useEffect } from "react";

const Table = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllUsers = async () => {
    setLoading(true);
    setTimeout(async () => {
      const res = await fetch("http://localhost:3000/api/user");
      const data = await res.json();
      console.log(data);
      setUsers(data);
      setLoading(false);
    }, 1500);
    // update state
  };

  const handlerDeleteUser = async () => {
    const res = await fetch(`http://localhost:3000/api/user/delete/${userId}`);

    getAllUsers();
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="w-full flex place-content-center p-15">
      <div className="relative rounded-xl overflow-auto bg-slate-800 w-11/12">
        <div className="shadow-sm overflow-hidden my-8">
          <table className="border-collapse table-auto w-full text-sm text-white">
            <thead>
              <tr>
                <th className="border-b  font-medium p-4 pl-8 py-0 pb-3">No</th>
                <th className="border-b  font-medium p-4 pl-8 py-0 pb-3">
                  Username
                </th>
                <th className="border-b  font-medium p-4 pl-8 py-0 pb-3">
                  Password
                </th>
                <th className="border-b  font-medium p-4 pl-8 py-0 pb-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {loading ? (
                <div className="w-full flex ">
                  <p className=" text-center text-2xl italic w-full mx-auto text-white">
                    Loading...
                  </p>
                </div>
              ) : (
                users?.map((user, index) => (
                  <tr>
                    <td className="border-b p-4 pl-8 py-0 pb-3">{index + 1}</td>
                    <td className="border-b p-4 pl-8 py-0 pb-3">{user.name}</td>
                    <td className="border-b  p-4 pl-8 py-0 pb-3">
                      {user.password}
                    </td>
                    <td className="border-b p-4 pl-8 py-0 pb-3">
                      <a href="">
                        <button className="bg-yellow-500 px-5 py-1 rounded-sm mt-4 mr-5">
                          Edit
                        </button>
                      </a>
                  
                      <a href="/api/user/delete/${}">
                        <button
                          onClick={handleDeleteUser}
                          className="bg-red-500 px-5 py-1 rounded-sm mt-4"
                        >
                          Hapus
                        </button>
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
