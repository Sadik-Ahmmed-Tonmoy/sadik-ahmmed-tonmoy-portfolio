import CountUp from "react-countup";


const ImageWithTitle = ({image, title, percentage }) => {
    return (
       <div className="md:w-40 text-center hover:text-green-500">
         <div className="border hover:border-green-500 rounded-3xl">
            <img className="h-40 py-4 mx-auto" src={image} alt="" />
            <p className="mb-2 text-3xl"><CountUp duration={5} end={percentage} />%</p>
            
        </div>
        <p className="font-bold mt-3 mb-10">{title}</p>
       </div>
    );
};

export default ImageWithTitle;