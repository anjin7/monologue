import Header from "../components/Header";
import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      <h2 className='font-bold text-lg m-4'>about</h2>
    </div>
  )
}

export default About;