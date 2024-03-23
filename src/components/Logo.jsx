import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Logo({ cls, logo }) {
  return (
    <Link className={`${cls} text-3xl font-extrabold font-manrope`} to={"/"}>
      {logo}
    </Link>
  );
}
Logo.propTypes = {
  cls: PropTypes.string,
  logo: PropTypes.string,
};
export default Logo;
