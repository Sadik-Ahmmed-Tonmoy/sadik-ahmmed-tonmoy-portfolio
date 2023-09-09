import CountUp from "react-countup";


const ImageWithTitle = ({image, title, percentage }) => {
    return (
       <div className="md:w-10/12 text-center hover:text-green-500 ">
         <div className="border hover:border-green-500 rounded-3xl p-2">
            <img className=" py-4 mx-auto" src={image} alt="" />
            <p className="mb-2 text-3xl"><CountUp enableScrollSpy={true} duration={5} end={percentage} />%</p>
            
        </div>
        <p className="font-bold mt-3 mb-10">{title}</p>
       </div>
    );
};

export default ImageWithTitle;