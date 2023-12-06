import heroImage from '../assets/images/hero_1.jpg.webp'

export const HomeBanner = () => {
    return (
    <div className="untree_co-hero">
        <div className="container">
            <div className="hero-inner d-flex align-items-center">
                <div className="text">
                    <div className="intro">
                        <p data-aos="fade-up" data-aos-delay="200">
                            Separated they live in.
                            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                            ocean.</p>
                    </div>
                    <div className="heading">
                        <h1 data-aos="fade-up" data-aos-delay="100" className="mb-5">We are Re<strong>shape</strong>, and
                            <strong>we shape buildings</strong>.</h1>
                        <p data-aos="fade-up" data-aos-delay="200"><a href="#" className="btn btn-primary mr-2">About
                                us</a><a href="#" className="btn btn-secondary">Our services</a></p>
                    </div>
                </div>
                <div className="img-wrap" data-aos="fadep" data-aos-delay="400"
                    style={{backgroundImage: `url(${heroImage})`}}>
                </div>
            </div>
        </div>
    </div>
    )
}