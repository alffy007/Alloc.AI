"use client"
import React, { useEffect } from "react";
import { useListVals } from "react-firebase-hooks/database";
import  db  from "../firebase";
import {collection,doc,getDocs, updateDoc  } from "firebase/firestore";
import { ref, set } from "firebase/database";
import Swal from 'sweetalert2';

import { useState } from "react";
import Link from "next/link";
type StatusesKeys = "open" | string;



interface MarkerData {
    id: string;
    address: string;
    lat: number;
    lng: number;
}

const containerStyle = {
    height: "400px",
    width: "100%",
    borderRadius: "10px",
};





export default function Dashboard() {
    const [formattedCalls1, setFormattedCalls1] = useState<
    {
      task: string;
      id: any;
      items: any;
      name: string;
      taskid: string;
      phone: string;
      status: boolean;
      transcript: string;
      complete:boolean;
      avail:string
      // ... Other properties
    }[]
  >([]); // Initialize as an empty array

  useEffect(() => {
    const fetchDocs = async () => {
      const colRef = collection(db, 'WORKERS');
      const snapshots = await getDocs(colRef);

      const formattedCalls = snapshots.docs.map((doc) => {
        const docData = doc.data();
        return {
          name: docData.NAME,
          taskid: docData.TASKID,
          phone: docData.phone,
          status: docData.STATUS,
          transcript: docData.TECH,
          avail: docData.avail,
          id:docData.ID,
          task: docData.Task,
          complete:docData.completed,
          items:[]
          // ... Include other properties here
        };
      });

      setFormattedCalls1(formattedCalls); // Update state with the formatted data
    };

    fetchDocs();
  }, []);

  console.log('Formatted Calls 1:', formattedCalls1);
  
    // Your JSX and component code here

    const handleUpdateStatus = async (documentId: string) => {
        console.log(documentId)
        const docRef = doc(db, 'WORKERS', documentId); // Replace 'documentId' with the actual ID of the document
        const fieldToUpdate = 'avail';
        const newValue = false; // Update with the new value
    
        try {
          await updateDoc(docRef, {
            [fieldToUpdate]: newValue,
          });
          Swal.fire(
            'Availability Canceled!',
            'completed!',
            'success'
          )
          console.log('Field updated successfully');

        } catch (error) {
          console.error('Error updating field:', error);
        }
      };

    const [selectedOrderIndex, setSelectedOrderIndex] = useState(1);
    const [showOrderDetails, setShowOrderDetails] = useState(false);

    const [infoWindowData, setInfoWindowData] = React.useState<MarkerData | null>(
        null
    );
    const [isOpen, setIsOpen] = React.useState(false);

    const handleMarkerClick = (marker: MarkerData) => {
        setInfoWindowData(marker);
        setIsOpen(true);
    };
    return (
        <div className="bg-[#000000] flex min-h-screen w-full">

            <div
                className="flex w-full flex-col bg-slate-100 sm:w-64 m-4 rounded-3xl p-2"
                style={{ flex: 3 }}
            >
                <div className="py-12 bg-slate-100 sm:py-16 lg:py-7 w-full">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="grid max-w-5xl grid-cols-1 gap-12 mx-auto sm:grid-cols-2 lg:grid-cols-3">
                            <Link href="/dashboard">
                                <div className="bg-white border shadow-xl scale-105  border-blue-200 rounded-xl">
                                    <div className="px-5 py-4">
                                        <p className="text-sm font-medium tracking-wider text-gray-700 uppercase">
                                            <img width="32" height="32" src="https://img.icons8.com/quill/50/tasks.png" alt="tasks" />{" "}
                                            Total Tasks{" "}
                                        </p>
                                        <div className="flex items-center justify-between mt-3">
                                            <p className="text-xl font-bold text-gray-900 ml-3">
                                                4
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/dashboardaccept">
                                <div className="bg-white border border-gray-200 rounded-xl">
                                    <div className="px-5 py-4">
                                        <p className="text-sm font-medium tracking-wider text-gray-700 uppercase">
                                            <img width="32" height="32"
                                                src="https://img.icons8.com/external-others-ghozy-muhtarom/32/external-ongoing-delivery-duotone-others-ghozy-muhtarom.png"
                                                alt="external-ongoing-delivery-duotone-others-ghozy-muhtarom"
                                            />{" "}
                                            Ongoing Tasks{" "}
                                        </p>
                                        <div className="flex items-center justify-between mt-3">
                                            <p className="text-xl font-bold text-gray-900 ml-3">
                                                {" "}
                                                5
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/dashboarddeliver">
                                <div className="bg-white border border-gray-200 rounded-xl">
                                    <div className="px-5 py-4">
                                        <p className="text-sm font-medium tracking-wider text-gray-700 uppercase">
                                            <img width="32" height="32" src="https://img.icons8.com/color/48/ok--v1.png" alt="ok--v1" />{" "}
                                            Completed Tasks{" "}
                                        </p>
                                        <div className="flex items-center justify-between mt-3">
                                            <p className="text-xl font-bold text-gray-900 ml-3">
                                                {" "}
                                                5
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="px-10  mt-4">
                    <div className="py-12 bg-white sm:py-16 lg:py-2 rounded-3xl">
                        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <div className="flex items-center justify-between"></div>

                            <div className="flex flex-col mt-4 lg:mt-8">
                                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                        <div className="grid grid-cols-8 gap-x-3.5">
                                            <div className="py-3.5 pl-4 pr-3 text-left text-sm whitespace-nowrap font-medium text-gray-500">
                                                <div className="flex items-center">ID</div>
                                            </div>

                                            <div className="py-3.5  text-left text-sm  whitespace-nowrap font-medium text-gray-500">
                                                <div className="flex items-center">Employee Name </div>
                                            </div>

                                            <div className="py-3.5 px-3 text-left col-span-1 text-sm whitespace-nowrap font-medium text-gray-500">
                                                <div className="flex items-center">Tech Stack</div>
                                            </div>

                                            <div className="py-3.5 px-3 text-left text-sm whitespace-nowrap font-medium text-gray-500">
                                                <div className="flex items-center">Task ID</div>
                                            </div>
                                            <div className="py-3.5 px-3 text-left col-span-2 text-sm whitespace-nowrap font-medium text-gray-500">
                                                <div className="flex items-center">Mobile NO</div>
                                            </div>

                                            <div className="py-3.5  text-left text-sm whitespace-nowrap font-medium text-gray-500">
                                                <div className="flex items-center">Task Alloc</div>
                                            </div>
                                            <div className="py-3.5  text-left text-sm whitespace-nowrap font-medium text-gray-500">
                                                <div className="flex items-center">Availability</div>
                                            </div>

                                            <div className="py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0">
                                                <span className="sr-only">Actions</span>
                                            </div>
                                        </div>
                                        {formattedCalls1.map((call, index) => (
                                            <div>
                                                <div className="divide-y divide-gray-200">
                                                    <div
                                                        className="grid grid-cols-8 gap-x-3.5"
                                                        key={call.name}
                                                    >
                                                        <div className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                            {index + 1}
                                                        </div>
                                                        <div className=" py-4 col-span-1 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                            {call.name}
                                                        </div>
                                                        <div className="px-4  py-4 col-span-1 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                        {call.transcript}
                                                        </div>{" "}
                                                        <div className="px-4 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                                            {call.taskid}
                                                        </div>
                                                        <div className="px-4 col-span-2 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">
                                                            <a href={`tel:${call.phone}`}>
                                                                <img
                                                                    className="inline-block mr-2 "
                                                                    width="30"
                                                                    height="30"
                                                                    src="https://img.icons8.com/color/48/apple-phone.png"
                                                                    alt="apple-phone"
                                                                />
                                                                {call.phone}
                                                            </a>
                                                        </div>
                                                        <div className="px-4 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                            <div className="inline-flex items-center">
                                                                <svg
                                                                    className={`mr-1.5 h-2.5 w-2.5 ${call.status ? 'text-green-500' : 'text-red-500'} `}
                                                                    fill="currentColor"
                                                                    viewBox="0 0 8 8"
                                                                >
                                                                    <circle cx="4" cy="4" r="3" />
                                                                </svg>
                                                                {call.status}
                                                           
                                                            </div>
                                                        </div>
                                                        <div className="px-4 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                            <div className="inline-flex items-center">
                                                                <svg
                                                                    className={`mr-1.5 h-2.5 w-2.5 ${call.avail ? 'text-green-500' : 'text-red-500'} `}
                                                                    fill="currentColor"
                                                                    viewBox="0 0 8 8"
                                                                >
                                                                    <circle cx="4" cy="4" r="3" />
                                                                </svg>
                                                                {call.avail}
                                                            
                                                            </div>
                                                        </div>
                                                        <div className="px-4 py-4 text-sm font-medium text-right text-gray-900 whitespace-nowrap">
                                                            <button
                                                                type="button"
                                                                onClick={() => {
                                                                    setSelectedOrderIndex(index);
                                                                    setShowOrderDetails(!showOrderDetails);
                                                                }}
                                                                className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                                                            >
                                                                <img
                                                                    className={`transform transition-transform ${showOrderDetails &&
                                                                        index === selectedOrderIndex
                                                                        ? ""
                                                                        : "rotate-180"
                                                                        }`}
                                                                    width="20"
                                                                    height="20"
                                                                    src="https://img.icons8.com/ios/50/collapse-arrow--v2.png"
                                                                    alt="collapse-arrow--v2"
                                                                />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {showOrderDetails && selectedOrderIndex === index && (
                                                    <div className="py-1 bg-white grid mb-5 grid-cols-6">
                                                        <div className="px-4 col-span-3 mx-auto max-w-7xl sm:px-6 lg:px-3">
                                                            <div className="max-w-lg mx-auto">
                                                                <div>
                                                                    <h2 className="text-md font-medium text-gray-900">
                                                                        Task Details
                                                                    </h2>
                                                                </div>

                                                                <ul className="mt-6 space-y-4">
                                                                    <li className="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl">
                                                                        <div className="px-5 py-4">
                                                                            <div className="flex items-start justify-between">
                                                                                <div className="flex items-center">
                                                                                    <img
                                                                                        className="flex-shrink-0 object-cover rounded-full w-9 h-9"
                                                                                        src="https://img.icons8.com/color/48/purchase-order.png"
                                                                                        alt=""
                                                                                    />
                                                                                    <div className="ml-3">
                                                                                        <p className="text-sm font-medium text-gray-600">
                                                                                            {call.task}
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="px-5 py-4">
                                                                            <div className="flex items-center justify-between">
                                                                                <span className="inline-flex items-center text-sm font-medium text-gray-900">
                                                                                    <div className={`w-2.5 h-2.5 rounded-full ${call.complete ? 'bg-green-500' : 'bg-yellow-500'}  flex-shrink-0 mr-2`}></div>
                                                                                   {call.complete ? "Completed" : "In review"} 
                                                                                </span>

                                                                                <p className="text-sm font-medium text-right text-gray-500">
                                                                                    2 hours ago
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        
                                                        <div className="py-12 col-span-1 bg-white sm:py-16 lg:py-2">
                                                            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-3">
                                                                <div>
                                                                    <p className="text-md font-medium text-gray-900">
                                                                        Remove Availability{" "}
                                                                    </p>
                                                                </div>

                                                                <div className="mt-6  rounded-2xl">
                                                               
                                                                    <button
                                                                        onClick={() => handleUpdateStatus(call.id)}
                                                                        className="bg-red-400 mt-2 text-white px-9 py-2 rounded-2xl "
                                                                    >
                                                                        Cancel
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}