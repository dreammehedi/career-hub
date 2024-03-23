import heroImg from "../assets/images/user.png";
import Button from "./Button";
function Hero() {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      {/* hero content */}
      <div className="container flex flex-col justify-center  lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center text-center lg:text-left lg:max-w-xl space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-normal md:leading-[50px] lg:leading-[100px] ">
            One Step Closer To Your
            <span className="dark:text-violet-600"> Dream Job</span>
          </h1>
          <p className="text-lg font-medium">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          {/* button */}
          <Button name="Get Started"></Button>
        </div>
        {/* hero img */}
        <div className="flex">
          <img src={heroImg} alt="" className="object-contain " />
        </div>
      </div>
    </section>
  );
}

export default Hero;
