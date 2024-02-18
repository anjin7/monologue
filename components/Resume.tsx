
export default function Resume() {
  return (
    <div className='relative flex items-center justify-center my-6 mx-auto'>
      <div className=' text-gray-500 w-[80vw] min-w-[300px] max-w-[1080px] p-4 border border-black rounded-lg'>
        <h2 className='font-bold text-lg m-4'>about</h2>
        <div className='w-[96%] my-8 mx-auto'>
          <ul className='grid grid-cols-1 gap-4 text-gray-500 font-extrabold md:grid-cols-2 xl:grid-cols-3'>
            <li className='bg-[#fcfaf2]/30 h-60 w-[100%] p-4 rounded-lg md:col-span-2'>
              <h3>name nickname</h3>
              <div>img</div>
            </li>
            <li className='grid gap-3 bg-[#fcfaf2]/30 h-60 w-[100%] p-4 rounded-lg md:row-span-2 md:h-[500px]'>
              <div>email</div>
              <div>github</div>
              <div>velog</div>
            </li>
            <li className='bg-[#fcfaf2]/30 h-60 w-[100%] p-4 rounded-lg md:row-span-2 md:h-[500px]'>
              <h3>skills</h3>
              <ul className='p-4 grid gap-3'>
                <li>
                  <div>HTML5</div>
                  <div className='grid grid-cols-5 gap-2'>
                    <div className='w-4 h-4 bg-sky-300'></div>
                    <div className='w-4 h-4 bg-sky-300'></div>
                    <div className='w-4 h-4 bg-sky-300'></div>
                    <div className='w-4 h-4 bg-sky-300'></div>
                    <div className='w-4 h-4 bg-sky-300'></div>
                  </div>
                </li>
                <li>
                  <div>CSS3</div>
                </li>
                <li>
                  <div>JavaScript</div>
                </li>
                <li>
                  <div>TypeScript</div>
                </li>
                <li>
                  <div>React</div>
                </li>
                <li>
                  <div>Next.js</div>
                </li>
              </ul>
            </li>
            <li className='bg-[#fcfaf2]/60 h-60 w-[100%] p-4 rounded-lg'>
              <h3></h3>
            </li>
            <li className='bg-[#fcfaf2]/30 h-60 w-[100%] p-4 rounded-lg xl:col-span-2'>
              <h3>end</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}