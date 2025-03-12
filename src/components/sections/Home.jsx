const Home = () => {
  return (
    <main>
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
        <div className="w-full py-16 px-5">
          <div className="max-w-[1050px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-8 md:mb-0">
                <h2 className="text-3xl font-bold text-black dark:text-white">
                  Helping a local
                </h2>
                <h2 className="text-3xl font-bold text-green-500 mb-5">
                  business reinvent itself
                </h2>
                <p className="text-black dark:text-gray-300">
                  We reached here with our hard work and dedication
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-black dark:text-white">2,245,341</h3>
                    <p className="text-gray-500 dark:text-gray-400">Members</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-black dark:text-white">46,328</h3>
                    <p className="text-gray-500 dark:text-gray-400">Clubs</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-black dark:text-white">828,867</h3>
                    <p className="text-gray-500 dark:text-gray-400">Event Bookings</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-black dark:text-white">1,926,436</h3>
                    <p className="text-gray-500 dark:text-gray-400">Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;