const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <section className="items-center flex flex-col overflow-hidden pt-[11px] px-20 max-md:px-5 w-full max-w-[1918px] mx-auto my-0 pb-[120px] max-sm:pb-[60px] translate-y-10">
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
            <br /><br />
            <button className="flex items-center gap-1 w-fit text-[#7B61FF] dark:text-[#A18AFF] text-base font-normal cursor-pointer bg-[#F6F4FF] dark:bg-[#2A2547] p-2.5 rounded-xl hover:bg-[#EDEAFF] dark:hover:bg-[#3B3561] transition-colors max-sm:w-full max-sm:justify-center">
              <span>Read more</span>
            </button>
          </div>
          <div>
            <img src="https://i.ibb.co/qFVD3G3G/image.png" alt="About Us" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;