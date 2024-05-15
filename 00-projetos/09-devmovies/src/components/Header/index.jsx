import Logo from "../../assets/images/logo.png";

function Header() {
  return (
    <div>
      <img src={Logo} alt="Logo-dev-movies" style={{ width: 300 }} />
    </div>
  );
}

export default Header;
