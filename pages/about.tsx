import Header from "../components/NavBar";
import type { NextPage } from "next";
import Resume from '../components/Resume';
import Seo from "../components/Seo";

const About: NextPage = () => {
  return (
    <div className='min-h-screen font-sans'>
      <Seo title="About" />
      <Header />      
      <Resume />
    </div>
  )
}

export default About;