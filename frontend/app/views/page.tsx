"use client"
import { useRouter } from "next/navigation";
import Minutespage from "../components/minutespage";
import Sidebar from "../components/Sidebar";




export default function Home() {
    const router = useRouter();
    const handledashboard = () => {
        router.push('/');
      };
      const handleNavigate = () => {
        router.push('/views');
      };
  return (
   
      <div className=" flex flex-row ">
      <Sidebar handledashboard={handledashboard} handleNavigate={handleNavigate}/>
      <Minutespage/>
      </div>

  )
}
