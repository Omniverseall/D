import Rating from '@mui/material/Rating';

// Компонент с контактами и отзывами
const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50 w-full flex items-center justify-center dark:bg-slate-800">
      <div className="flex justify-around w-full mt-10">
        <div className="text-center text-sm">
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/KxpLCxYY/073283df5eb03f8788573ed232dd447cd632de22e001cd0590d3407f6e313416-api-Key-57ce9dd418304f6392e54924fd1.png"
              alt="Regina Miles"
              className="rounded-full w-[200px] h-[200px]"
            />
          </div>
          <br />
          <p className="text-gray-500 font-medium dark:text-white">
            Slate helps you see how many more days <br />
            you need to work to reach your financial <br />
            goal for the month and year.
          </p>
          <br />
          <div className="text-sm">
            <Rating name="half-rating" defaultValue={4.0} precision={0.5} />
          </div>
          <div>
            <b className="dark:text-white">Regina Miles</b>
            <br />
            <b className="text-gray-500 dark:text-white">Designer</b>
          </div>
        </div>
        <div className="text-center text-sm">
          <div className="flex justify-center rounded-full object-cover">
            <img
              src="https://i.ibb.co/FkDYfSn9/efeecd99341595e51c9d9201d71eacc29529c5e1eee1275b9209a007e6705f98-api-Key-57ce9dd418304f6392e54924fd1.png"
              alt="John Doe"
              className="rounded-full w-[230px] h-[230px]"
            />
          </div>
          <br />
          <p className="text-gray-500 font-medium dark:text-white">
            I was able to organize my tasks and track my progress easily. <br />
            This tool helped me improve my productivity.
          </p>
          <br />
          <div className="text-sm">
            <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
          </div>
          <div>
            <b className="dark:text-white">John Doe</b>
            <br />
            <b className="text-gray-500 dark:text-white">Project Manager</b>
          </div>
        </div>

        <div className="text-center text-sm">
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/Y7YfZnf0/2daae5243511c7f02f83db3c978b95f98b281499e098af82ecc647a803ebfdad-api-Key-57ce9dd418304f6392e54924fd1.png"
              alt="Emily Stone"
              className="rounded-full w-[230px] h-[230px]"
            />
          </div>
          <br />
          <p className="text-gray-500 font-medium dark:text-white">
            Using this tool, I was able to meet my financial <br />
            targets much faster. It's a game-changer!
          </p>
          <br />
          <div className="text-sm">
            <Rating name="half-rating" defaultValue={5.0} precision={0.5} />
          </div>
          <div>
            <b className="dark:text-white">Emily Stone</b>
            <br />
            <b className="text-gray-500 dark:text-white">Financial Advisor</b>
          </div>
        </div>
      </div>
    </div>
  );
};

// Раздел с отзывами
const TestimonialSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-blue-500 dark:text-purple-300 text-xl font-semibold mb-2">
          Testimonial
        </h2>
        <h1 className="text-4xl font-bold mb-10 dark:text-white">
          People Talk about us
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Testimonial 1 */}
          <div className="min-w-60 w-[380px]">
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://i.ibb.co/PZCPgDKt/64e4a047340794d3c573da187a8dbff87d20b187da534bafcf267e25a8f62344-placeholder-If-Absent-true.png"
                  alt="Angel Rose profile"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <div className="text-blue-500 dark:text-purple-300 font-semibold">
                    Angel Rose
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">
                    Creative Manager
                  </div>
                </div>
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                There are many variations of passages of Lorem Ipsum, but some by words which don't look right.
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="min-w-60 w-[380px]">
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://i.ibb.co/PZCPgDKt/64e4a047340794d3c573da187a8dbff87d20b187da534bafcf267e25a8f62344-placeholder-If-Absent-true.png"
                  alt="Michael Scott profile"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <div className="text-blue-500 dark:text-purple-300 font-semibold">
                    Michael Scott
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">
                    Regional Manager
                  </div>
                </div>
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                The services provided have been outstanding, and I highly recommend them to anyone looking to improve their performance.
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="min-w-60 w-[380px]">
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://i.ibb.co/PZCPgDKt/64e4a047340794d3c573da187a8dbff87d20b187da534bafcf267e25a8f62344-placeholder-If-Absent-true.png"
                  alt="Kelly Kapoor profile"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <div className="text-blue-500 dark:text-purple-300 font-semibold">
                    Kelly Kapoor
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">
                    Marketing Executive
                  </div>
                </div>
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                This product has transformed the way I handle my daily tasks. Highly recommended!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Объединенный компонент
const CombinedComponent = () => {
  return (
    <div className="dark:bg-gray-900">
      <Contact />
      <TestimonialSection />
    </div>
  );
};

export default CombinedComponent;
