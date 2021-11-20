
const Projects = () => {
    return ( 
        <div className="projects" id="projects">
        <div className="projects__container">
          <div className="projects__header">
            <h2>Projects</h2>
            <p>Here are some of my projects</p>
          </div>
          <div className="projects__items">
            <div className="project__item1 items">
              <div className="container__item">
                <div className="item__header">
                  <h2>TIP CALCULATOR</h2>
                  <p>
                    A tip calculator that can calculate various percentages and
                    translate them to real money for ya to make things much
                    easier.
                  </p>
                  <p><span className="lang__used">HTML / CSS / JS</span></p>
                </div>
                <div className="item__btn">
                  <button>
                    <a href="https://tipcalculator-reydel.netlify.app/"
                    rel="noreferrer"
                      >Visit Webpage</a
                    >
                  </button>
                  <button>
                    <a href="https://github.com/reydelshit/tip-calculator"
                    rel="noreferrer"
                      >Github</a
                    >
                  </button>
                </div>
              </div>
            </div>
            <div className="project__item2 items">
              <div className="container__item">
                <div className="item__header">
                  <h2>TAB URL GRABBER</h2>
                  <p>
                    An extension than can grab any links from the current tab
                    which is useful if you wanted to save the link.
                  </p>
                  <p><span className="lang__used">HTML / CSS / JS</span></p>
                </div>
                <div className="item__btn">
                  <button><a href="https://github.com/reydelshit/tip-calculator"
                    rel="noreferrer">Visit Webpage</a></button>
                  <button><a href="https://github.com/reydelshit/tip-calculator"
                    rel="noreferrer">Github</a></button>
                </div>
              </div>
            </div>
          </div>
          <span className="projects__footer"
            >Check out all my projecs on
            <span
              ><a
                href="https://github.com/reydelshit"
                target="_blank"
                className="projects__footer__github"
                rel="noreferrer"
                > Github</a
              ></span
            ></span
          >
        </div>
      </div>
     );
}
 
export default Projects;