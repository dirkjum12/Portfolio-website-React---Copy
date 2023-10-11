// links
import Link from 'next/link';

// icons
import {
  RiLinkedinLine,
  RiInstagramLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.instagram.com/dirk.3/'} target="_blank" className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/dirkvr/'} target="_blank" className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
    </div>
  );
};

export default Socials;
