import "./main.css"

export const Get = () => {
    return(
        <>
        <div className="get">
            <div className="container">
                        <h2 className="get-text">Get started now</h2>
                <div className="get-inner">
                     <div className="get-list">
                         <div className="get-list">
                            <div className="list-card">
                                <h3 className="get-h3">
                                Connect Git repository
                                </h3>
                                <p className="get-p">
                                Select a Git provider to start with an existing project from any Git context.
                                </p>
                                <div className="get-btn">
                                    <button className="get-btn-item">Continue with GitLab</button>
                                </div>
                                <div className="get-btn">
                                    <button className="get-btn-item">Continue with GitHub</button>
                                </div>
                                <div className="get-btn">
                                    <button className="get-btn-item">Continue with Bitbucket</button>
                                </div>
                                
                                <p className="text-p">Or prefix any GitLab, GitHub or Bitbucket URL with</p>
                                <p className="text-p2">gitpod.io/#</p>
                            </div>
                         </div>
                     </div>


                     <div className="get-list">
                         <div className="get-list">
                            <div className="list-card">
                                <h3 className="get-h3">
                                Launch an example workspace
                                </h3>
                                <p className="get-p">
                                Dive into one of our example workspaces
                                </p>
                                <div className="get-card2">
                                    <p className="get-i">Node or TypeScript</p>
                                    <button className="btn-i">Launch workspace</button>
                                </div>
                                <div className="get-card2">
                                    <p className="get-i">Python</p>
                                    <button className="btn-2">Launch workspace</button>
                                </div>
                                <div className="get-card2">
                                    <p className="get-i">Go</p>
                                    <button className="btn-3">Launch workspace</button>
                                </div>
                                <div className="get-card2">
                                    <p className="get-i">Rust</p>
                                    <button className="btn-4">Launch workspace</button>
                                </div>
                                <div className="get-card2">
                                    <p className="get-i">Java</p>
                                    <button className="btn-5">Launch workspace</button>
                                </div>
                                <div className="get-card2">
                                    <p className="get-i">Svelte</p>
                                    <button className="btn-6">Launch workspace</button>
                                </div>

                            </div>
                         </div>
                     </div>
                </div>
            </div>
        </div>
        </>
    )
}