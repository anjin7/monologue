
export default function Resume() {
  return (
    <div className='relative flex items-center justify-center my-6 mx-auto'>
      <div className=' text-gray-500 w-[80vw] min-w-[300px] max-w-[1080px] p-4 rounded-lg'>
        <div className='w-[96%] my-4 mx-auto'>
          <ul className='grid grid-cols-1 gap-4 text-gray-500 font-extrabold md:grid-cols-2 xl:grid-cols-3'>
            <li className='flex gap-4 bg-[#fcfaf2]/30 h-60 w-[100%] p-4 rounded-lg md:col-span-2'>
              <div className='w-40 bg-white rounded-lg'>img</div>
              <div className='grid'>
                <h4>Name</h4>
                <h4>Nickname</h4>
              </div>
            </li>
            <li className='grid gap-3 bg-[#fcfaf2]/30 h-60 w-[100%] p-4 rounded-lg md:row-span-2 md:h-[500px]'>
              <div>
                <h4>E-mail</h4>
                <p className='my-6 text-xl text-center'>mail</p>
              </div>
              <div>
                <h4>Github</h4>
                <div className='my-6 text-xl text-center'>
                  <a href="https://github.com/anjin7" target='_blank'>Github</a>
                </div>
                
              </div>
              <div>
                <h4>Blog</h4>
                <div className='my-4 text-xl text-center'>
                  <a href="https://velog.io/@anjin7/posts" target='_blank'>Velog</a>
                </div>                
              </div>
            </li>
            <li className='bg-[#fcfaf2]/30 w-[100%] p-4 rounded-lg row-span-2 h-[500px]'>
              <h3>Skills</h3>
              <ul className='p-4 grid gap-3'>
                <li>
                  <div>HTML5</div>
                  <div className='my-1 p-2 grid grid-cols-10 gap-1 rounded-lg hover:bg-white/50'>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-white'></div>
                  </div>
                </li>
                <li>
                  <div>CSS3</div>
                  <div className='my-1 p-2 grid grid-cols-10 gap-1 rounded-lg hover:bg-white/50'>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-white'></div>
                  </div>
                </li>
                <li>
                  <div>JavaScript</div>
                  <div className='my-1 p-2 grid grid-cols-10 gap-1 rounded-lg hover:bg-white/50'>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-white'></div>
                    <div className='h-4 bg-white'></div>
                  </div>
                </li>
                <li>
                  <div>React</div>
                  <div className='my-1 p-2 grid grid-cols-10 gap-1 rounded-lg hover:bg-white/50'>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-white'></div>
                    <div className='h-4 bg-white'></div>
                    <div className='h-4 bg-white'></div>
                  </div>
                </li>
                <li>
                  <div>TypeScript</div>
                  <div className='my-1 p-2 grid grid-cols-10 gap-1 rounded-lg hover:bg-white/50'>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-white'></div>
                    <div className='h-4 bg-white'></div>
                    <div className='h-4 bg-white'></div>
                    <div className='h-4 bg-white'></div>
                  </div>
                </li>
                <li>
                  <div>Next.js</div>
                  <div className='my-1 p-2 grid grid-cols-10 gap-1 rounded-lg hover:bg-white/50'>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-[#abd1e7]'></div>
                    <div className='h-4 bg-white'></div>
                    <div className='h-4 bg-white'></div>
                    <div className='h-4 bg-white'></div>
                    <div className='h-4 bg-white'></div>
                    <div className='h-4 bg-white'></div>
                    <div className='h-4 bg-white'></div>
                  </div>
                </li>
              </ul>
            </li>
            <li className='bg-white/30 h-60 w-[100%] p-4 rounded-lg hidden xl:block'>
              <h3>img</h3>
            </li>
            <li className='bg-[#fcfaf2]/10 h-60 w-[100%] p-4 rounded-lg md:col-span-2'>
              <h3></h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}