"use client"
import { LuLayoutDashboard } from 'react-icons/lu';
import { BsListTask } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import Image from 'next/image'
import backimage from '../../assets/blackimage.jpg'
import { ChangeEvent, Fragment, useState } from 'react';
import Model from './model';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';


interface SidebarProps {
  handleNavigate: () => void;
  handledashboard: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ handleNavigate,handledashboard}) => {



  const [showModal, setShowModal] = useState(false);
  const [typedData1, setTypedData1] = useState<string>('');
  const [typedData2, setTypedData2] = useState<string>('');
  const [typedData3, setTypedData3] = useState<string>('');

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTypedData1(event.target.value);
  };

  const handleInputChange1 = (event: { target: { value: any; }; }) => {
    const newValue = event.target.value;
    setTypedData2(newValue);

  };

  const handleInputChange2 = (event: { target: { value: any; }; }) => {
    const newValue = event.target.value;
    setTypedData3(newValue);

  };

  const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
  const API_URL = 'https://web-production-ecf9.up.railway.app/question';

  const handlePrintClick = async () => {

    console.log('Typed Data1:', typedData1);
    console.log('Typed value:', typedData2);
    console.log('Typed value:', typedData3);
    try {
      const response = await axios.post(`${CORS_PROXY}${API_URL}`, {
        "work": typedData1,
        "deadline": typedData2,
        "id": typedData3
      });
      
      console.log('Server Response:', response.data);

      setTypedData1('');
      setTypedData2('');
      setTypedData3('');
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }

      })
      setShowModal(false)

      
    } catch (error) {
      console.error('Error:', error);
    }
  };





  return (
    <Fragment>
      <div className="m-4 font-bold bg-white w-1/6 h-full p-3 flex-col rounded-3xl">
        <h1 className="text-xl pl-6 lg:text-5xl font-normal mt-11 ">Alloc.AI</h1>
        <button type="button" className="text-white mt-5 bg-[#0e1111] lg:text-lg hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50  rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2" onClick={handledashboard}>
          Dashboard
          <div className="w-16"></div>
          <LuLayoutDashboard />
        </button>
        <button type="button" className="text-white mt-5 bg-[#0e1111] lg:text-lg hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50  rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2" onClick={handleNavigate}>
          Meeting Summary
          <div className="w-8"></div>
          <BsListTask />
        </button>
        <Image
          className='mt-16'
          src={backimage}
          width={800}
          height={800}
          alt="Picture of the author"
          layout='responsive'
        />
        <button type="button" className="text-white mt-10 bg-[#0e1111] lg:text-lg hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50  rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2" onClick={() => setShowModal(true)}>
          Upload tasks
          <div className="w-12"></div>
          <AiOutlinePlus />
        </button>
      </div>
      <Model isvisible={showModal} onClose={async () => setShowModal(false)} >

        <div className='p-6'>
          <h3 className='text-xl font-semibold text-gray-900 mb-5'>Enter the Tasks</h3>

          <textarea name="message" inputMode='text' className='border border-neutral-300 bg-neutral-300 w-full h-40 p-3 rounded' rows={5}
            value={typedData1}
            onChange={handleTextAreaChange} ></textarea>
          <h3 className='text-xl font-semibold text-gray-900 mb-5'>Enter Deadline</h3>
          <input type="text"
            value={typedData2}
            onChange={handleInputChange1}
            placeholder="Dealine..."
            inputMode='text' className='border border-neutral-300 rounded bg-neutral-300 w-full p-3' />
          <h3 className='text-xl  mt-2 font-semibold text-gray-900 mb-5'>Github issue code</h3>
          <input type="text" value={typedData3} onChange={handleInputChange2} placeholder="Issue code.." inputMode='text' className='border border-neutral-300 rounded bg-neutral-300 w-full p-3' />
          <button type="submit" className="text-white mt-10 bg-[#0e1111] ml-48 lg:text-lg hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50  rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2" onClick={handlePrintClick}>
            Upload
            <div className="w-12"></div>
            <AiOutlinePlus />
          </button>


        </div>
      </Model>
    </Fragment>
  )
}

export default Sidebar