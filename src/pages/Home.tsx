import { HomeBanner } from "../components/HomeBanner"

import heroImage3 from '../assets/images/hero-3.jpg.webp'

const About = () => {
    return (
    <div className="untree_co-section-2 count-numbers">
    <div className="container">
        <div className="row">
            <div className="col-lg-9 mx-auto">
                <div className="row row-2">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                        <div className="counter" data-aos="fade-up" data-aos-delay="100">
                            <strong className="d-block number" data-number="1087">0</strong>
                            <span className="d-block caption">Number of Projects</span>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                        <div className="counter" data-aos="fade-up" data-aos-delay="200">
                            <strong className="d-block number" data-number="57">0</strong>
                            <span className="d-block caption">Year of Experience</span>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                        <div className="counter" data-aos="fade-up" data-aos-delay="300">
                            <strong className="d-block number" data-number="670">0</strong>
                            <span className="d-block caption">Number of Employees</span>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                        <div className="counter" data-aos="fade-up" data-aos-delay="400">
                            <strong className="d-block number" data-number="900">0</strong>
                            <span className="d-block caption">Number of Clients</span>
                        </div>
                    </div>
                </div>
                <div className="row row-overlap">
                    <div className="col-md-6 col-lg-6 mb-5" data-aos="fade-up">
                        <img src={heroImage3} alt="Image" className="img-fluid"/>
                    </div>
                    <div className="col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the
                            Semantics, a large language ocean.</p>
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at
                            the coast of the Semantics, a large language ocean.</p>
                        <p><a href="#" className="btn btn-primary">About us</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)}

export const Home = () => {

    return (
        <>
        <HomeBanner/>

        <About/>
        </>   
    )
}