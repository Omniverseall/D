import { assets } from "../assets/assets";
const About = () => {
  return (
    <div>
      <div
        className=" text-center text-2xl pt-10
       text-gray-500"
      >
        <p>
          ABOUT{" "}
          <span
            className=" text-gray-700
         font-medium"
          >
            US
          </span>
        </p>
      </div>

      <div
        className="my-10 flex flex-col md:flex-row
       gap-12"
      >
        <img
          className=" w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div
          className=" flex flex-col justify-center
         gap-6 md:w-2/4 text-gray-700 text-sm"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus libero blanditiis accusantium tenetur officiis
            exercitationem aliquam sunt, fugit voluptate labore corrupti, illum
            minima. Labore ea consectetur voluptas reiciendis. Aut, dolor
            repellat magni nihil fugit saepe omnis qui! Harum, aliquam nulla.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam quasi,
            ut vitae rerum eius sint tempora ullam necessitatibus natus impedit
            officia accusantium ducimus voluptatibus, fuga temporibus neque
            asperiores iusto consequuntur obcaecati placeat? Illum a doloremque
            non obcaecati maiores harum autem unde soluta tempore rerum dolores
            corporis eius expedita, ea distinctio!
          </p>
          <b>Our Vision</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            laboriosam quos magni dolorem fugit id nemo. Quidem, magnam atque
            repellat cumque iure consequuntur! Sapiente, consequatur!
          </p>
        </div>
      </div>

      <div className=" text-xl my-4">
        <p>
          WHY{" "}
          <span
            className=" text-gray-700
         font-semibold"
          >
            CHOOSE US
          </span>
        </p>
      </div>

      <div className=" flex flex-col md:flex-row mb-20">
        <div className=" border px-10 md:px-16 py-8
         sm:py-16 flex flex-col gap-5 text-[15px]
          hover:bg-primary hover:text-white
           transition-all duration-300 text-gray-600
            cursor-pointer">
          <b>Efficiency:</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, nam.</p>
        </div>

        <div  className=" border px-10 md:px-16 py-8
         sm:py-16 flex flex-col gap-5 text-[15px]
          hover:bg-primary hover:text-white
           transition-all duration-300 text-gray-600
            cursor-pointer">
          <b>Convenience:</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, alias?</p>
        </div>

        <div  className=" border px-10 md:px-16 py-8
         sm:py-16 flex flex-col gap-5 text-[15px]
          hover:bg-primary hover:text-white
           transition-all duration-300 text-gray-600
            cursor-pointer">
          <b>Personalization:</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, laborum!</p>
        </div>
      </div>

    </div>
  );
};

export default About;
