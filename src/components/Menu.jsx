import { NavLink } from "react-router-dom";

const menuContent = [
  { id: 1, name: "Statistics", link: "/" },
  { id: 2, name: "Applied Jobs", link: "/appliedjob" },
  { id: 3, name: "Blog", link: "/blog" },
];
function Menu() {
  return (
    <>
      {menuContent.map((menu) => {
        const { id, name, link } = menu;
        return (
          <li key={id}>
            <NavLink
              className={({ isActive }) => {
                isActive
                  ? "bg-gradient-to-r  from-btn-StartBg to-btn-EndBg font-bold"
                  : "bg-transparent text-transparent text-dark-dark3 font-medium";
              }}
              to={link}
            >
              {name}
            </NavLink>
          </li>
        );
      })}
    </>
  );
}

export default Menu;
