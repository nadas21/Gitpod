import "./scrit.css"
import  g from"../../assets/img2/g.png"

export const Mark = () => {
    return (
        <>
           <div className="Mark">
            <div className="container">
                <div className="Mark-inner">
                    <div className="Mark-p">
                    <nav className="header-nav3">
            <ul className="header-list1">
              <li className="header-item-salom">
                <a href="#" className="header-item-a">
                Gitpod
                </a>
                <p>Home</p>
                <p>Features</p>
                <p>Pricing</p>
                <p>Changelog</p>
                <p>Self-Hosted</p>
                <p>Gitpod vs GitHub</p>
                <p>Codespaces</p>
                <p>Status</p>
              </li>
              <li className="header-item-salom">
                <a href="#" className="header-item-a">
                Developer
                </a>
                <p>Getting started</p>
                <p>Screencasts</p>
                <p>Blog</p>
                <p>Documentation</p>
                <p>Report a bug</p>
                <p>Community</p>
              </li>
              <li className="header-item-salom">
                <a href="#" className="header-item-a">
                Company
                </a>
                <p>About</p>
                <p>Careers</p>
                <p>Contact</p>
                <p>Media Kit</p>
              </li>
              <li className="header-item-salom">
                <a href="#" className="header-item-a">
                Legal
                </a>
                <p>Imprint</p>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
              </li>
            </ul>
          </nav>

           <div className="img">
           <img className="img1" src={g} alt="" />
           <p className="item-p">Copyright © 2021 Gitpod</p>
           </div>

                    </div>
                </div>
            </div>
           </div>
        </>
        )
    }