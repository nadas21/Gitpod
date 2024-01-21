import "./header.css";
import Logo from "../../assets/img/logo.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <a href="#" className="header-logo-link">
            <img
              src={Logo}
              alt="logo"
              className="header-img"
              width={131}
              height={40}
            />
          </a>
          <nav className="header-nav">
            <ul className="header-list">
              <li className="header-item">
                <a href="#" className="header-item-link">
                  Features
                </a>
              </li>
              <li className="header-item">
                <a href="#" className="header-item-link">
                  Pricing
                </a>
              </li>
              <li className="header-item">
                <a href="#" className="header-item-link">
                  Blog
                </a>
              </li>
              <li className="header-item">
                <a href="#" className="header-item-link">
                  Docs
                </a>
              </li>
              <li className="header-item">
                <a href="#" className="header-item-link">
                  Changelog
                </a>
              </li>
              <li className="header-item">
                <a href="#" className="header-item-link">
                  We're hiring
                </a>
              </li>
            </ul>
          </nav>

          <button className="header-btn">Login</button>
        </div>
      </div>
    </header>
  );
};
