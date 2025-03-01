const Home = () => {
    return (
      <div className="items-center flex flex-col overflow-hidden pt-[11px] px-20 max-md:px-5 bg-white dark:bg-gray-900">
        <div className="flex w-full max-w-[1050px] flex-col overflow-hidden items-center justify-center py-40 max-md:max-w-full max-md:py-[100px]">
          <div className="flex w-full max-w-[1045px] items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
            <section className="self-stretch flex min-w-60 gap-[30px] overflow-hidden w-[521px] my-auto max-md:max-w-full">
              <img
                src="https://i.ibb.co/dwmbDZND/2025-02-20-184151.png"
                className="aspect-[1.1] object-contain w-[521px] min-w-60"
              />
            </section>
            <section className="self-stretch flex min-w-60 flex-col overflow-hidden items-stretch text-sm text-black dark:text-white font-bold tracking-[0.2px] w-[381px] my-auto">
              <h2 className="text-[40px] leading-[50px] text-black dark:text-white">Approdable Packages</h2>
              <p className="font-normal leading-5 mt-[35px] text-black dark:text-gray-300">
                Problems trying to resolve the conflict between the two major realms
                of Classical physics: Newtonian mechanics
              </p>
              <br /><br />
              <h5 className="text-green-400 dark:text-green-300">Learn more</h5>
            </section>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;