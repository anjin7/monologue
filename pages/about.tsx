import Header from "../components/Header";
import type { NextPage } from "next";
import Resume from '../components/Resume';

const About: NextPage = () => {
  return (
    <div className='min-h-screen font-sans'>
      <Header />
      <Resume />
    </div>
  )
}

export default About;