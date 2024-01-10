import NavBar from "./NavBar";
import TopBtn from '../components/TopBtn';

interface Ititle {
title?: string
children?: React.ReactNode
}

export default function Layout({ children }:Ititle) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <TopBtn />
    </>
  );
}