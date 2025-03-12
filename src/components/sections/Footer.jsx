import { FaInstagram, FaDribbble, FaTwitter, FaYoutube } from 'react-icons/fa';

const CombinedComponent = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      <div className="pt-24">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-6 gap-8">
          <div className="flex flex-col max-w-md">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Interesting Collaboration With Us?
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Help you to reach your business goal
            </p>
            <div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition duration-300">
                Get Started
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <div className="flex">
                <div className="w-2/3">
                  <img 
                    src="https://i.ibb.co/7trctZGD/image.png" 
                    alt="People collaborating with high five" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/3">
                  <img 
                    src="https://i.ibb.co/M5s7ckCR/image.png" 
                    alt="Office space with team" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[120px] rounded-xl p-6 flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
          <div className="w-[300px] h-[300px]">
            <img src="https://i.ibb.co/Pv116jts/image.png" alt="Tesla Logo" />
          </div>
          <div className="flex-1">
            <p className="text-gray-700 dark:text-gray-300 text-base leading-6">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            </p>
            <div className="mt-3">
              <p className="text-gray-900 dark:text-white text-lg font-bold">Tim Smith</p>
              <p className="text-teal-500 text-sm">British Dragon Boat Racing Association</p>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <a href="#" className="text-teal-500 text-sm flex items-center hover:underline">
                Meet all customers
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <footer className="bg-[#2d3741] dark:bg-gray-800 text-white w-full mt-20">
          <div className="container mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-8 md:mb-0">
                <div className="mb-6">
                  <span className="text-2xl font-bold">Nexcent</span>
                </div>
                <p className="text-sm mb-6">Copyright © 2020 Nexcent ltd.</p>
                <p className="text-sm mb-6">All rights reserved</p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-[#374151] rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-300">
                    <FaInstagram className="text-lg" />
                  </div>
                  <div className="w-10 h-10 bg-[#374151] rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-300">
                    <FaDribbble className="text-lg" />
                  </div>
                  <div className="w-10 h-10 bg-[#374151] rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-300">
                    <FaTwitter className="text-lg" />
                  </div>
                  <div className="w-10 h-10 bg-[#374151] rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-300">
                    <FaYoutube className="text-lg" />
                  </div>
                </div>
              </div>
              <div className="mb-8 md:mb-0">
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="hover:text-gray-300 dark:hover:text-gray-400">About us</a></li>
                  <li><a href="#" className="hover:text-gray-300 dark:hover:text-gray-400">Blog</a></li>
                  <li><a href="#" className="hover:text-gray-300 dark:hover:text-gray-400">Contact us</a></li>
                  <li><a href="#" className="hover:text-gray-300 dark:hover:text-gray-400">Pricing</a></li>
                  <li><a href="#" className="hover:text-gray-300 dark:hover:text-gray-400">Testimonials</a></li>
                </ul>
              </div>
              <div className="mb-8 md:mb-0">
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="hover:text-gray-300 dark:hover:text-gray-400">Help center</a></li>
                  <li><a href="#" className="hover:text-gray-300 dark:hover:text-gray-400">Terms of service</a></li>
                  <li><a href="#" className="hover:text-gray-300 dark:hover:text-gray-400">Legal</a></li>
                  <li><a href="#" className="hover:text-gray-300 dark:hover:text-gray-400">Privacy policy</a></li>
                  <li><a href="#" className="hover:text-gray-300 dark:hover:text-gray-400">Status</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CombinedComponent;
