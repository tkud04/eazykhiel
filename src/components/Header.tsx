
export const Header = () => {

    return (
     <>
        <div className="lines-wrap">
         <div className="lines-inner">
          <div className="lines"></div>
         </div>
        </div>

        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close">
              <span className="icofont-close js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>

        <nav className="site-nav dark mb-5">
          <div className="container">
            <div className="site-navigation">
              <a href="index.html" className="logo m-0">Re<strong>shape</strong> <span className="text-primary">.</span></a>
              <ul className="js-clone-nav d-none d-lg-inline-block site-menu float-right">
                <li className="active"><a href="index.html">Home</a></li>
                <li className="has-children">
                  <a href="about.html">About us</a>
                  <ul className="dropdown">
                    <li><a href="elements.html">Elements</a></li>
                  </ul>
                </li>
                <li><a href="services.html">Our services</a></li>
                <li><a href="how-we-work.html">How we work?</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="contact.html">Contact us</a></li>
              </ul>
              <a href="#" className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none" data-toggle="collapse" data-target="#main-navbar">
                <span></span>
              </a>
            </div>
          </div>
        </nav>
     </>
    )
}