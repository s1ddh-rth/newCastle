import React from 'react'

function Card() {
    return (
        <div style={{display:'flex', justifyContent:'center', width:'100%'}}>
            {/* <!-- Container --> */}
            <main>
            {/* <!-- Intro --> */}
            <section className="intro">
            <h1 style={{overflowWrap: 'break-word'}}>Reliable, efficient delivery <span>Powered by Technology</span></h1>
            <p>Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful</p>
            </section>
            {/* <!-- Products --> */}
            <section className="products">
            {/* <!-- Supervisor --> */}
            <div className="supervisor">
            <h2>Supervisor</h2>
            <p>Monitors activity to identify project roadblocks</p>
            <img src="images/icon-supervisor.svg" alt="" />
            </div>
            <div className="middle">
            {/* <!-- Builder --> */}
            <div className="builder">
            <h2>Team Builder</h2>
            <p>Scans our talent network to create the optimal team for your
            project</p>
            <img src="images/icon-team-builder.svg" alt="" />
            </div>
            {/* <!-- Karma --> */}
            <div className="karma">
            <h2>Karma</h2>
            <p>Regularly evaluates our talent to ensure quality</p>
            <img src="images/icon-karma.svg" alt="" />
            </div>
            </div>
            {/* <!-- Calculator --> */}
            <div className="calculator">
            <h2>Calculator</h2>
            <p>Uses data from past projects to provide better delivery
            estimates</p>
            <img src="images/icon-calculator.svg" alt="" />
            </div>
            </section>
            </main>
        </div>
    )
}

export default Card
