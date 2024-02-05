
export default function Resume() {
  return (
    <div className='relative flex items-center justify-center my-6 mx-auto'>
      <div className=' text-gray-500 w-[80vw] min-w-[300px] p-4 border border-black rounded-lg'>
        <h2 className='font-bold text-lg m-4'>about</h2>
        <div className='w-[96%] my-8 mx-auto'>
          <ul className='grid grid-cols-1 gap-4 text-gray-500 font-extrabold md:grid-cols-2 xl:grid-cols-3'>
            <li className='bg-[#fcfaf2]/30 h-60 w-[100%] p-4 rounded-lg md:col-span-2'>
              <h3>1</h3>
            </li>
            <li className='bg-[#fcfaf2]/30 h-60 w-[100%] p-4 rounded-lg'>2</li>
            <li className='bg-[#fcfaf2]/30 h-60 w-[100%] p-4 rounded-lg'>3</li>
            <li className='bg-[#fcfaf2]/30 h-60 w-[100%] p-4 rounded-lg'>4</li>
            <li className='bg-[#fcfaf2]/30 h-60 w-[100%] p-4 rounded-lg'>5</li>
            <li className='bg-[#fcfaf2]/30 h-60 w-[100%] p-4 rounded-lg'>6</li>
            <li className='bg-[#fcfaf2]/30 h-60 w-[100%] p-4 rounded-lg xl:col-span-2'>7</li>
          </ul>
        </div>
      </div>
    </div>
  )
}