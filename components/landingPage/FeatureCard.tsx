import React from 'react'


interface FeatureCardProps {
    title: string
    desc: string
    image: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, desc, image }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-fit bg-cardBackground min-h-[340px] rounded-lg py-[30px] px-[20px] shadow-md hover:scale-[1.02] duration-500">
            <img src={image} alt="icon" className=" w-[150px] h-[150px] rounded-full object-cover" />
            <h1 className="text-2xl font-bold mt-2 font-carme text-textColorSecondary">{title}</h1>
            <p className="text-center mt-2 leading-[1.3] font-carme text-white">{desc}</p>
        </div>
    )
}
export default FeatureCard