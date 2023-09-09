import { Link } from 'react-router-dom';
import './ProjectsShowOff.css'

const ProjectsShowOff = ({img, link, name}) => {
    return (
        <div className='my-6 mx-1 md:w-80'>
            <div className='hoverEffect border rounded-xl h-96' style={{ backgroundImage: `url('${img}')` }}>
            <p className='hover:opacity-0 rounded-xl h-full w-full flex justify-center items-center text-4xl font-extrabold backdrop-blur-sm underline decoration-sky-500 text-white'>
          Hover me
        </p>
            </div>
            <p className='text-3xl mt-2 ms-4'>Project:<Link to={link}><span className='ms-2'>{name} (<span className='text-blue-400'>Live</span>)</span></Link></p>
        </div>
    );
};

export default ProjectsShowOff;