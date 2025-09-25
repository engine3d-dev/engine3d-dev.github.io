import Image from 'next/image'

const HeroCard = () =>{

    return(
        <div className="flex h-[80vh] bg-black items-center">
            <div className='px-[17vw] flex flex-col gap-2'>
                <h1 className="text-white font-semibold text-[5rem] h-24">
                    Atlas Engine
                </h1>
                <h2 className="text-gray-300 font-medium text-[3rem]">
                    <span className="bg-gradient-to-r from-red-400 to-blue-700 text-transparent bg-clip-text">3D</span> Game Engine
                </h2>
                <button className='rounded-3xl bg-blue-600 hover:cursor-pointer w-full text-[1.5rem] font-normal text-white py-2'>
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default HeroCard