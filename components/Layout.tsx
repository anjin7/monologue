import NavBar from "./NavBar";

interface Ititle {
title : string
children : React.ReactNode
}

export default function Layout({ children }:Ititle) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}