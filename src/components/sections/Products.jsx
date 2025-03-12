import Rating from "@mui/material/Rating";

const Products = () => {
    const hotelImages = [
        {
            img: "https://i.ibb.co/hJcP8Yk2/image.png",
            name: "Monastero Santa Rosa Hotel",
            location: "Salerno, Italy"
        },
        {
            img: "https://i.ibb.co/Wvb9X7m1/image.png",
            name: "Grand Hotel Termezzo",
            location: "Lake Como, Italy"
        },
        {
            img: "https://i.ibb.co/WNKfB7vS/image.png",
            name: "The Oberoi Udaivilas, Udaipur",
            location: "Udaipur, India"
        },
        {
            img: "https://i.ibb.co/Kp2XkcDz/image.png",
            name: "AKA Beverly Hills",
            location: "Los Angeles"
        }
    ];
    const portfolioImages = [
        {
            img: "https://i.ibb.co/PGJQhr7Y/image.png",
            name: "Design Byte App"
        },
        {
            img: "https://i.ibb.co/TqgqbNBT/image.png",
            name: "Cloud App"
        },
        {
            img: "https://i.ibb.co/PGJQhr7Y/image.png",
            name: "Design Furniture App"
        }
    ];

    return (
        <div className="w-full h-auto p-22 dark:bg-slate-900 overflow-y-auto">
            <div className="flex justify-between items-center p-4 ml-7">
                <h1 className="text-2xl font-bold dark:text-white">
                    Hotels and Restaurants
                </h1>
                <button className="w-28 h-10 bg-purple-100 text-purple-600 font-medium rounded-lg cursor-pointer dark:text-black">
                    View all
                </button>
            </div>

            <div className="flex flex-wrap justify-center gap-13 p-4">
                {hotelImages.map((hotel, index) => (
                    <div key={index} className="w-72 p-4">
                        <img
                            src={hotel.img}
                            className="w-72 h-80 rounded-lg object-cover"
                        />
                        <p className="mt-2 font-semibold text-lg dark:text-white">
                            {hotel.name}
                        </p>
                        <p className="text-sm text-gray-500">
                            {hotel.location}
                        </p>
                        <br />
                        <Rating
                            name={`rating-${index}`}
                            defaultValue={2.5}
                            precision={0.5}
                            className="ml-33 relative -top-5"
                        />
                    </div>
                ))}
            </div>
            <div className="py-12 text-center">
                <p className="text-blue-600 font-bold">Our Portfolio</p>
                <br />
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                    What do we do
                </h2>
                <br />
                <p className="mt-0 text-gray-600 max-w-lg mx-auto dark:text-white">
                    All projects that we have already done, proven to help create a more comfortable experience and can be used by clients from our business.
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-0">
                    <div className="flex justify-center gap-10 w-full">
                        {portfolioImages.map((portfolio, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img
                                    src={portfolio.img}
                                    className={`w-[260px] h-[260px] rounded-3xl ${index === 1 ? '' : 'mt-[20px]'
                                        }`}
                                />
                                <p className="mt-2 font-bold text-lg text-white">
                                    {portfolio.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;