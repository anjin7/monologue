import type { NextPage } from "next";
import Header from "../components/NavBar";
import Project from '../components/Project';
import Seo from "../components/Seo";


const Home:NextPage = () => {
  return (
    <div className='min-h-screen font-sans'>
      <Seo title="Home" />
      <Project />
    </div>
  )
}
export default Home;