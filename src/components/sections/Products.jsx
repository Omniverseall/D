import PropTypes from 'prop-types';

const TestimonialCard = ({ image, review, name, role }) => {
    return (
        <div className="flex flex-col items-center p-6 w-[calc(50%_-_15px)] max-md:w-full max-md:max-w-lg max-sm:p-4">
            <div className="overflow-hidden mb-8 w-32 h-32 rounded-[200px] max-sm:h-[100px] max-sm:w-[100px]">
                <img
                    src={image}
                    alt={`${name}'s profile`}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="p-8 text-center max-sm:p-5">
                <p className="mb-4 text-sm tracking-wide leading-5 text-neutral-500 dark:text-neutral-400">
                    {review}
                </p>
                <div className="text-center">
                    <div className="mb-1.5 text-base font-bold tracking-normal leading-6 text-slate-800 dark:text-white">
                        {name}
                    </div>
                    <div className="text-sm font-bold tracking-wide leading-6 text-neutral-500 dark:text-neutral-400">
                        {role}
                    </div>
                </div>
            </div>
        </div>
    );
};

const testimonials = [
    {
        image: "https://i.ibb.co/KcxKDF5Z/2cd44705695d6c11d58937239a20c9078277ae7f-api-Key-57ce9dd418304f6392e54924fd11f74d.png",
        review: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
        name: "Regina Miles",
        role: "Designer"
    },
    {
        image: "https://i.ibb.co/9kb55JBg/1a0db7d7c234d9f1fb9ec604599b9d4836cb2e38-api-Key-57ce9dd418304f6392e54924fd11f74d.png",
        review: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
        name: "Regina Miles",
        role: "Designer"
    }
];

const TestimonialSection = () => {
    return (
        <section className="px-48 py-40 mx-auto my-0 max-w-[1440px] max-md:px-10 max-md:py-20 max-sm:px-5 max-sm:py-10">
            <div className="mb-24 max-w-[691px] max-sm:text-center">
                <h3 className="text-green-400">
                    Testimonials
                </h3>
                <h2 className="mb-2.5 text-4xl font-bold tracking-wide leading-[50px] text-slate-800 dark:text-white max-sm:text-3xl max-sm:leading-10">
                    Our Popular Courses
                </h2>
                <p className="text-sm tracking-wide leading-5 text-neutral-500 dark:text-neutral-400">
                    Problems trying to resolve the conflict between the two major realms
                    of Classical physics: Newtonian mechanics
                </p>
            </div>
            <div className="flex gap-8 justify-between max-md:flex-col max-md:items-center">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
        </section>
    );
};

TestimonialCard.propTypes = {
    image: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
};

export default TestimonialSection;
