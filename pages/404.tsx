import Header from "../components/Header";

export default function NotFound() {
  return (
    <div className='min-h-screen font-sans'>
      <Header />
      <h3 className='my-16 text-center font-bold text-3xl'>
        404 NOT FOUND
      </h3>
    </div>
  );
}