import PropType from "prop-types";

function SectionTitle({ title, desc }) {
  return (
    <div className="container flex flex-col justify-center items-center  text-center space-y-3 w-full md:max-w-xl">
      <h1 className="font-extrabold text-dark-dark1 text-4xl md:text-5xl capitalize">
        {title}
      </h1>
      <p className="font-medium text-base text-dark-dark3">{desc}</p>
    </div>
  );
}
SectionTitle.propTypes = {
  title: PropType.string,
  desc: PropType.string,
};
export default SectionTitle;
