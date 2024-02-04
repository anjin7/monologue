
export default function Project() {
  return (
    <div className='relative w-[80vw] min-w-[340px] flex items-center justify-center my-6 mx-auto'>
      <div className='w-[96%] my-8 mx-auto'>
        <ul className='grid grid-cols-1 gap-4 text-gray-500 font-extrabold lg:grid-cols-2'>
          <li className='bg-[#fcfaf2]/30 h-60 w-[100%] p-4 rounded-lg'>
            <h3>title1</h3>
            <p>skill</p>
          </li>
          <li className='bg-[#fcfaf2]/30 h-60 w-[100%] p-4 rounded-lg'>
            <h3 className='m-2'>title2</h3>
            <div className='mx-auto my-4 w-[90%] bg-white/50 h-[120px] rounded-lg text-center'>img</div>
            <p className='my-2 mx-4'>skill</p>
          </li>
          <li className='bg-[#fcfaf2]/30 h-60 w-[100%] p-4 rounded-lg'>
            <h3>title3</h3>
            <p>skill</p>
          </li>
          <li className='bg-[#fcfaf2]/30 h-60 w-[100%] p-4 rounded-lg'>
            <h3>title4</h3>
            <p>skill</p>
          </li>
          <li className='bg-[#fcfaf2]/30 h-60 w-[100%] p-4 rounded-lg'>
            <h3>title5</h3>
            <p>skill</p>
          </li>
          <li className='bg-[#fcfaf2]/30 h-60 w-[100%] p-4 rounded-lg'>
            <h3>title6</h3>
            <p>skill</p>
          </li>
        </ul>
      </div>
    </div>
  )
}