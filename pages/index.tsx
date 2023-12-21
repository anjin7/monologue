import type { NextPage } from "next";
import Header from "../components/Header";


const Home:NextPage = () => {
  return (
    <div>
      <Header />
      <h2 className='font-bold text-xl m-4'>Hello</h2>
    </div>
  )
}
export default Home;