import type { NextPage } from "next";
import Header from "../components/Header";


const Home:NextPage = () => {
  return (
    <div>
      <Header />
      <h2 className='font-bold'>Hello</h2>
    </div>
  )
}
export default Home;