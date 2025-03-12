const About = () => {
  return (
    <div>
      <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="items-center flex flex-col overflow-hidden pt-[11px] px-20 max-md:px-5 w-full max-w-[1918px] mx-auto my-0 pb-[120px] max-sm:pb-[60px] translate-y-10">
          <div className="flex w-full max-w-[1128px] gap-8 items-center justify-between mx-auto my-0 px-5 py-0 max-md:flex-col max-md:items-center max-md:gap-10">
            <div className="flex flex-col max-w-[548px] max-md:max-w-full">
              <h2 className="text-[#161414] dark:text-white text-[32px] font-bold leading-[48px] mb-8 max-sm:text-2xl max-sm:leading-9">
                About Us
              </h2>
              <p className="text-[#161414] dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a
                sapien justo. Nulla facilisis tristique imperdiet. Nullam a placerat
                odio. Sed in ex augue. Aliquam porta consectetur lorem sit amet
                ultrices. Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <br />
              <button className="flex items-center gap-1 w-fit text-[#7B61FF] dark:text-[#A18AFF] text-base font-normal cursor-pointer bg-[#F6F4FF] dark:bg-[#2A2547] p-2.5 rounded-xl hover:bg-[#EDEAFF] dark:hover:bg-[#3B3561] transition-colors max-sm:w-full max-sm:justify-center">
                <span>Read more</span>
              </button>
            </div>
            <div>
              <img
                src="https://i.ibb.co/67zH6SNY/image.png"
                alt="About Us"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Caring is the new marketing
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The Nexcent blog is the best place to read about the latest membership insights,
              trends and more. See who&apos;s joining the community, read about how our community
              are increasing their membership income and lot&rsquo;s more.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Creating Streamlined Safeguarding Processes with OneRen',
                link: '#',
                image: 'https://i.ibb.co/qYRQ0PMt/image.png'
              },
              {
                title: 'What are your safeguarding responsibilities and how can you manage them?',
                link: '#',
                image: 'https://i.ibb.co/whchPCBv/image.png'
              },
              {
                title: 'Revamping the Membership Model with Triathlon Australia',
                link: '#',
                image: 'https://i.ibb.co/PsJqnk4s/image.png'
              }
            ].map((post, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={post.image}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {post.title}
                  </h3>
                  <a className="text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 flex items-center font-medium"
                  >
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;