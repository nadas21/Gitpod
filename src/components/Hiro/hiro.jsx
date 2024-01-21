import "./hiro.css";
import img from "../../assets/img/hiro-img.png";
import chrom from "../../assets/img/chrom.png";
import frame from "../../assets/img/fram2.png";

export const Hiro = () => {
    return (
        <>
         <header className="header">
            <div className="container">
                <div className="hiro-inner">
                    <div className="hiro-h2">
                        <h3>Remote-first. Secure by design.</h3>
                    </div>
                    <div className="hiro-img">
                    <img src={img} alt="img" /> 
                    </div>
                    <div className="hiro-text">
                        <p>You no longer need an over-powered laptop to code, Gitpod works just as smoothly on a Chromebook or iPad. All you need is a browser. Gitpod centralizes all source code and never stores it on insecure machines and networks.</p>
                        <div className="hiro-btn">
                          <button className="hiro-btn-chrom">
                            <img className="hiro-chrom" src={chrom} alt="chrom" width={24} height={24} />
                          Chrome Extension
                          </button>
                          <button className="hiro-btn-chrom">
                            <img className="frame" src={frame} alt="frame" width={24} height={24} />
                          Firefox Extension
                          </button>
                        </div>
                    </div>

                </div>
            </div>
         </header>
        </>
    )
}
  