import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Button({ cls = "", link = "/", name = "Btn Name" }) {
  return (
    // button
    <Link to={link}>
      <button
        className={`${cls} font-extrabold text-base md:text-xl px-5 md:px-6 lg:px-7 py-3 md:py-4 lg:py-5 rounded-lg capitalize transition-all duration-300 ease-linear hover:bg-transparent  bg-gradient-to-r  from-btn-StartBg to-btn-EndBg hover:opacity-90 hover:ring-1 dark:bg-violet-600 dark:text-gray-50`}
      >
        {name}
      </button>
    </Link>
  );
}
Button.propTypes = {
  cls: PropTypes.string,
  link: PropTypes.string,
  name: PropTypes.string,
};
export default Button;
