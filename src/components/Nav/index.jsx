import "./frame.css";
import ol from "../../assets/img/mashara.png";

export const Nav = () => {
  return (
    <>
      <div className="boshi">
        <div className="container">
          <div className="nav-inner">
              <h3 className="nav-h3">Used by 400,000+ developers.</h3>
              <div className="nav-card-item">
                <div className="nav-card">
                  <div className="nav-p">
                    <p>GitPod is incredibly cool.</p>
                    <p>
                      In my opinion, this is a big step in open source software
                      contribution. I'm excited to see where we go from here.
                    </p>
                  </div>
                  <div className="nav-img1">
                    <img className="nav-img" src={ol} alt="bashara" />
                    <h6 className="nav-h6">Ben Halpern @forem and</h6>
                    <h6 className="nav-item">@ThePracticalDev</h6>
                  </div>
                </div>
                <div className="nav-card">
                  <div className="nav-p">
                    <p>
                      Let's say we were overwhelmed how smooth @gitpod
                      workspaces creation & own Docker image for workspaces
                      worked.
                    </p>
                    <p>
                      Plus, installing @code extensions from the store and
                      integrating @gitlab CI. That blew my mind entirely, and
                      that is hard ;
                    </p>
                  </div>
                  <div className="nav-img1">
                    <img className="nav-img" src={ol} alt="bashara" />
                    <h6 className="nav-h6">Michael Friedrich</h6>
                    <h6 className="nav-item">Developer Evangelist @GitLab</h6>
                  </div>
                </div>
                <div className="nav-card">
                  <div className="nav-p">
                    <p>
                      Look at any PR (pull request) in a full coding environment
                      where you can edit, build, and test the PR code, by just
                      prepending "gitpod.io#" to the PR URL. Super useful for
                      reviewing/testing stuff without having to check it out
                      locally!
                    </p>
                    <p>
                      In my opinion, this is a big step in open source software
                      contribution. I'm excited to see where we go from here.
                    </p>
                  </div>
                  <div className="nav-img1">
                    <img className="nav-img" src={ol} alt="bashara" />
                    <h6 className="nav-h6">Julius Volz</h6>
                    <h6 className="nav-item">Creator @PrometheusIOq</h6>
                  </div>
                </div>
              </div>

              {/* <div className="nav-text-item">
                        <h3 className="nav-item-h3">
                        Get started now
                        </h3>
                    </div> */}
            </div>
        </div>
      </div>
    </>
  );
};
