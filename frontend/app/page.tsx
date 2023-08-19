import Dashboard from './components/dashboard'
import Sidebar from './components/sidebar'
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyDQwCxJwXq4zctOu5S7s8UqXVODnKsVlWw",
  authDomain: "alloc-ai-15f3e.firebaseapp.com",
  projectId: "alloc-ai-15f3e",
  storageBucket: "alloc-ai-15f3e.appspot.com",
  messagingSenderId: "169287646236",
  appId: "1:169287646236:web:01c72fb4bd3cbd3b92b3d9",
  measurementId: "G-XDVYB919BG"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function Home() {
  return (
    <main className=" min-h-screen bg-black">
      <div className=" flex flex-row ">
      <Sidebar/>
      <Dashboard/>
      </div>
    </main>
  )
}
