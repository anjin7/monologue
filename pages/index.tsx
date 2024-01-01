import type { NextPage } from "next";
import Header from "../components/Header";
import Project from '../components/Project';


const Home:NextPage = () => {
  return (
    <div className='min-h-screen font-sans'>
      <Header />
      <Project />
    </div>
  )
}
export default Home;