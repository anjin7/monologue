import type { NextPage } from "next";
import Resume from '../components/Resume';
import Seo from "../components/Seo";

const About: NextPage = () => {
  return (
    <div>
      <Seo title="About" />     
      <Resume />
    </div>
  )
}

export default About;