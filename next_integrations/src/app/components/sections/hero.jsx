import Image from 'next/image'

const HeroCard = () =>{

    return(
        <div className="flex h-[80vh] bg-gray-100 items-center">
            <div className='px-[16vw] flex flex-col gap-2'>
                <h1 className="text-black font-bold text-[5rem] h-24">
                    Atlas Engine
                </h1>
                <h2 className="text-black text-[2rem]">
                    <span className="">3D</span> Game Engine
                </h2>
                <button className='rounded-2xl bg-blue-500 hover:cursor-pointer text-[1.1rem] w-[10vw] font-normal text-white py-3'>
                    Start Atlas
                </button>
            </div>
        </div>
    )
}

export default HeroCard