import type { NextPage } from "next";
import Resume from '../components/Resume';
import Seo from "../components/Seo";

const About: NextPage = () => {
  return (
    <div className='font-sans'>
      <Seo title="About" />     
      <Resume />
    </div>
  )
}

export default About;