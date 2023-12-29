import banner from '../assets/banner.jpeg'

const Card = ({ firstName, lastName, username, bloodGroup, height, weight, image }) => {

  return (
    <div className='relative flex flex-col items-center gap-6 bg-white rounded-[1rem] w-[100%] h-[100%] text-[#404040]'>
        <div className='relative'>
          <img src={banner} alt="robot banner" loading='lazy' className='w-[100%] h-[130px] rounded-t-[1rem]'/>
        </div>

        <img src={image} alt="" loading='lazy'
        className="bg-white absolute h-[80px] w-[80px] rounded-full top-[30%] left-[50%] transform 
            translate-x-[-50%] translate-y-[-50%] hover:scale-110 hover:transition-all cursor-pointer profile-shadow "/>
        
        <div className='flex flex-col items-center mt-4'>
          <h1 className='font-bold text-[1.5em]'>{firstName} {lastName}</h1>
          <h4 className=' font-medium text-[#a0a0a0]'>@{username}</h4>
        </div>

        <div className='flex justify-between gap-4'>
          <div className='flex flex-col items-center'>
            <span className='font-bold text-[#1c9eff]'>blod group</span>
            <span className='text-[#a0a0a0] font-[0.85em]'>{bloodGroup}</span>
          </div>
          <div className='flex flex-col items-center'>
            <span className='font-bold text-[#1c9eff]'>height</span>
            <span className='text-[#a0a0a0] font-[0.85em]'>{height}</span>
          </div>
          <div className='flex flex-col items-center'>
            <span className='font-bold text-[#1c9eff]'>weight</span>
            <span className='text-[#a0a0a0] font-[0.85em]'>{weight}</span>
          </div>
        </div>

        <button className='w-[80%] h-10 bg-[#ffd01a] rounded-full font-bold hover:scale-110 hover:transition-all cursor-pointer'>More</button>
    </div>
  )
}

export default Card

