import type { NextPage } from "next";
import Header from "../components/Header";


const Home:NextPage = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      <div className='grid gap-6 h-24 w-60 font-extrabold'>
        <div className='bg-white p-4 border border-black rounded-lg'>1</div>
        <div className='bg-white p-4 border border-black rounded-lg'>2</div>
        <div className='bg-white p-4 border border-black rounded-lg'>3</div>
      </div>
    </div>
  )
}
export default Home;