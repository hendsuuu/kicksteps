"use client";

import React from "react";
import { useState, useEffect } from "react";
import { DeleteModal } from "./modal/DeleteModal";
import { useDisclosure } from "@chakra-ui/react";
import { BadgeModal } from "./modal/BadgeModal";

const Table = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [editForm, setEditForm] = useState(null);

  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();

  const handleEditModal = (target) => {
    onOpenEdit();
    console.log(editForm);
  };
  const handlerEditUser = async (data) => {
    try {
      // e.preventDefault;
      console.log(data);
      const res = await fetch(`http://localhost:3000/api/user/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        onCloseEdit();
        getAllUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submitDataEdit = (data) => {
    console.log(data);
    handlerEditUser(data);
  };

  const handleDeleteModal = (id) => {
    setSelectedId(id);
    onOpenDelete();
  };

  const handleDelete = (id) => {
    handlerDeleteUser(id);

    console.log("deleted!", id);
    onCloseDelete();
  };

  const getAllUsers = async () => {
    setLoading(true);
    setTimeout(async () => {
      const res = await fetch("http://localhost:3000/api/user", {
        method: "GET",
      });
      const data = await res.json();
      console.log(data);
      setUsers(data);
      setLoading(false);
    }, 1500);
  };

  const handlerDeleteUser = async (userId) => {
    const res = await fetch(`http://localhost:3000/api/user`, {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        id: userId,
      }),
    });

    getAllUsers();
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <BadgeModal
        isOpen={isOpenEdit}
        onClose={onCloseEdit}
        onSubmit={submitDataEdit}
        target={editForm}
      />

      <DeleteModal
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
        target={selectedId}
        onDelete={handleDelete}
      />

      <div className="w-full flex place-content-center p-15">
        <div className="relative rounded-xl overflow-auto bg-slate-800 w-11/12">
          <div className="shadow-sm overflow-hidden my-8">
            <table className="border-collapse table-auto w-full text-sm text-white">
              <thead>
                <tr>
                  <th className="border-b  font-medium p-4 pl-8 py-0 pb-3">
                    No
                  </th>
                  <th className="border-b  font-medium p-4 pl-8 py-0 pb-3">
                    Username
                  </th>
                  <th className="border-b  font-medium p-4 pl-8 py-0 pb-3">
                    Email
                  </th>
                  <th className="border-b  font-medium p-4 pl-8 py-0 pb-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                {loading ? (
                  <tr>
                    <td></td>
                    <td className="text-center text-2xl italic w-full mx-auto text-white mt-5 col-span-4 row-span-2">
                      Loading...
                    </td>
                    <td></td>
                  </tr>
                ) : (
                  users?.map((user, index) => (
                    <tr key={index}>
                      <td className="border-b p-4 pl-8 py-0 pb-3">
                        {index + 1}
                      </td>
                      <td className="border-b p-4 pl-8 py-0 pb-3">
                        {user.name}
                      </td>
                      <td className="border-b  p-4 pl-8 py-0 pb-3">
                        {user.email}
                      </td>
                      <td className="border-b p-4 pl-8 py-0 pb-3">
                        {/* <a href=""> */}
                        <button
                          onClick={() => {
                            setEditForm(user);
                            handleEditModal(user);
                          }}
                          className="bg-yellow-500 px-5 py-1 rounded-sm mt-4 mr-5"
                        >
                          Edit
                        </button>
                        {/* </a> */}

                        {/* <a href="/api/user/delete/${}"> */}
                        <button
                          onClick={() => {
                            handleDeleteModal(user.id);
                          }}
                          className="bg-red-500 px-5 py-1 rounded-sm mt-4"
                        >
                          Hapus
                        </button>
                        {/* </a> */}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
