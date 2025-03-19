
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* left section  */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 dark:text-gray-300 leading-6'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, aut, esse quod labore qui amet ipsam deserunt aliquid adipisci, cumque sequi exercitationem ullam ducimus nam!
            </p>
        </div>
        {/* center section  */}
        <div>
            <p className='text-xl font-medium mb-5 dark:text-gray-200'>Company</p>
            <ul className='flex flex-col gap-2 text-gray-600 dark:text-gray-400'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        {/* Right section  */}
        <div>
            <p className='text-xl font-medium mb-5 dark:text-gray-200'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600 dark:text-gray-400'>
              <li>+88 017 3145 8068</li>
              <li>mirajhowlader9999@gmail.com</li>
            </ul>
        </div>
      </div>
      {/* copyright text  */}
      <div>
        <hr className="dark:border-gray-700" />
        <p className='py-5 text-sm text-center dark:text-gray-300'>&copy; 2024 All Right reserved.</p>
      </div>
    </div>
  )
}

export default Footer
