import type { NextPage } from "next";
import Project from '../components/Project';
import Seo from "../components/Seo";


const Home:NextPage = () => {
  return (
    <div>
      <Seo title="Home" />
      <Project />
    </div>
  )
}
export default Home;