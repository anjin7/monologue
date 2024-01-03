import Header from "../components/NavBar";

export default function NotFound() {
  return (
    <div className='min-h-screen font-sans'>
      <Header />
      <h3 className='my-16 text-center font-bold text-3xl text-gray-500'>
        404 NOT FOUND
      </h3>
    </div>
  );
}