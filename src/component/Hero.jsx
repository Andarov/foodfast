const Hero = () => {
  return (

    <div className="relative min-h-[300px] md:min-h-[400px]" style={{background: `url('https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`, backgroundPosition: 'center, center'}}>
        <div className="w-full max-w-[1240px] mx-auto px-5">
        <div className='relative'>
            <div className='absolute w-full text-gray-200 h-[300px] flex flex-col justify-center md:h-[400px]'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Eng <span className='text-orange-500'>Yaxshi</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>Taomlar</span> Bizda</h1>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Hero
