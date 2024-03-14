import React, { useEffect, useState } from 'react';
import { ItineraryIndex } from '../APIs';
import { Link, useNavigate } from 'react-router-dom';

const Index = () => {
 let Navigate=useNavigate()

    const [apiResponse, setApiResponse] = useState({})

    // const baseURL = process.env.REACT_APP_API_KEY


    useEffect(() => {
        ItineraryIndex().then((data) => {
            console.log("-------------------------data", data)
            setApiResponse(data);
        }).catch((err) => {
            console.log("-------------------------Error", err)
        })

    }, [])



    const [activeId, setActiveId] = useState(null);

    const handleAccordionClick = (id) => {
        if (activeId === id) {
            setActiveId(null);
        } else {
            setActiveId(id);
        }
    };




    return (
        <>

            <header className="main-header w-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img src="images/logoexpedition.png" alt="wall image" />
                        </div>
                    </div>
                </div>
            </header>

            <section className="hero-banner position-relative overflow-hidden">
                <div className="container">
                    <div className="row d-flex flex-wrap align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="position-relative left-hero-color">
                                <h1 className="mb-3"> How to Plan Your Trip</h1>
                                <p>Your adventure awaits. We aim to make the decisions and preparations simple so you can focus on the anticipation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="position-relative paddSection">
                <div className="container">
                    <div className="row d-flex flex-wrap align-items-center">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="position-relative">
                                <h3 className="mb-2"> Our Partners</h3>
                                <p>We partner with the very best travel professionals who share our passion for expedition style travel.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex flex-wrap align-items-center">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <ul className="partnerLogo">
                                <li><img src="images/lgo-1.png" alt="wall image" /></li>
                                <li><img src="images/lgo-2.png" alt="wall image" /></li>
                                <li><img src="images/lgo-3.png" alt="wall image" /></li>
                                <li><img src="images/lgo-4.png" alt="wall image" /></li>
                                <li><img src="images/lgo-5.png" alt="wall image" /></li>
                                <li><img src="images/lgo-6.png" alt="wall image" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <section className="position-relative paddSection pt-0">
                    <div className="container">
                        <div className="row d-flex flex-wrap align-items-center">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="position-relative tourGreyBox">
                                    <h3 className="mb-2 text-underline"> Tour &amp; Destination</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="position-relative paddSection tourImageBg">
                    <div className="container">
                        <div className="row d-flex flex-wrap align-items-center justify-content-center">
                            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                                <div className="position-relative tourCardBox">
                                    <img src="images/tour1.png" alt="wall image" />
                                    <div className="tourWhiteBox">
                                        <h5>ongoing tours </h5>
                                        <div className="tourWhiteBoxInner">
                                            <p><b>Trip length:</b> 14 Days</p>
                                            <p><b>Price Point:</b> $15,840/person  <span>(does not include airfare)</span> </p>
                                            <p><b>Seasons Available:</b> Winter</p>
                                            <p>This is the classic National Geographic voyage to the Antarctic Peninsula. Over 14 days, experience the majestic landscapes of ice, visit penguin rookeries, Zodiac around tabular icebergs, and meet abundant marine and bird life. You’ll travel in a state-of-the-art icebreaker with biologists, undersea specialists, and professional photographers to help you get the most out of your voyage.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                                <div className="position-relative tourCardBox">
                                    <img src="images/tour2.png" alt="wall image" />
                                    <div className="tourWhiteBox">
                                        <h5>up coming tours</h5>
                                        <div className="tourWhiteBoxInner">
                                            <p><b>Trip length:</b> 8 Days</p>
                                            <p><b>Price Point:</b>  $7,340-$12,140/person  <span>(does not include airfare)</span> </p>
                                            <p><b>Seasons Available:</b>  Spring, Summer</p>
                                            <p>Be one of 100 guests to sail with National Geographic to get up close to the rich wildlife and spectacular scenery of southeast Alaska in this active 8-day voyage. Take a kayak or Zodiac to venture into the UNESCO World Heritage Site and biosphere reserve of Glacier Bay National Park. Hike into Tongass National Forest by special permit. Breathe in the beauty of America’s last frontier.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div>
                <section className="position-relative paddSection">
                    <div className="container">
                        <div className="row d-flex flex-wrap">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="position-relative">
                                    <img src="images/mapeft.png" className="touritnerfaMap" alt="wall image" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="position-relative">
                                    <h3 className="mb-2"> <b>Tour itinerary</b></h3>

                                    <div className="touriTineraryFaq">
                                        <div className="accordion" id="accordionExampleTop" style={{ maxHeight: "25rem", scrollBehavior: "smooth", overflowY: "scroll" }}>

                                            {
                                                Object.keys(apiResponse).map((key)=>{

                                                    const data = apiResponse[key];
                                                    const isActive = activeId === data.id;

                                                    return (
                                                        <div key={data.id} className="accordion-item">
                                                            <h2 className="accordion-header" id={`heading${data.id}`}>
                                                                <button
                                                                    className={`accordion-button ${isActive ? '' : 'collapsed'}`}
                                                                    type="button"
                                                                    onClick={() => handleAccordionClick(data.id)}
                                                                    aria-expanded={isActive ? 'true' : 'false'}
                                                                    aria-controls={`collapse${data.id}`}
                                                                >
                                                                    {data.expedition_name}
                                                                </button>
                                                            </h2>
                                                            <div
                                                                id={`collapse${data.id}`}
                                                                className={`accordion-collapse collapse ${isActive ? 'show' : ''}`}
                                                                aria-labelledby={`heading${data.id}`}
                                                                data-bs-parent="#accordionExampleTop"
                                                            >
                                                                <div className="accordion-body">
                                                                    <div style={{display:"flex",justifyContent:"end",lineHeight:"15px"}} >
                                                                <span className="mb-1 p-1 border border-primary rounded">
                                                                <Link
    to="/TP"
    state={{ data: data.id }}
    className=" text-azure"
    style={{ display: "inline-block", textDecoration: "none", padding: "0.5rem 1rem", borderRadius: "0.25rem" }}
>
     View Detail <i className="fa fa-arrow-right me-1"></i>
</Link>                                                                    </span>   </div>

                                                                    <div className="media-or-card pb-0 mb-0">
                                                                        <p className="font-24 next-text-white mb-2">Region Name: {data.region}</p>
                                                                        <p className="font-24 next-text-white mb-2">Duration Days: {data.duration_days}</p>
                                                                        <p className="font-24 next-text-white mb-2">Start Location: {data.start_location}</p>
                                                                        <p className="font-24 next-text-white mb-2">End Location: {data.end_location}</p>
                                                                        <img style={{ width: "16rem" }} src={data.itinerary_map[0].fullsize_url} alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            }


                                            {/* <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading11">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="true" aria-controls="collapse11" onClick={() => ItineraryIndex()} >

                                                        Lorem Ipsum
                                                    </button>
                                                </h2>
                                                <div id="collapse11" className="accordion-collapse collapse show" aria-labelledby="heading11" data-bs-parent="#accordionExampleTop">
                                                    <div className="accordion-body">
                                                        <div className="media-or-card pb-0 mb-0">
                                                            <p className="font-24 next-text-white mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading12">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                                                        Lorem Ipsum
                                                    </button>
                                                </h2>
                                                <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12" data-bs-parent="#accordionExampleTop">
                                                    <div className="accordion-body">
                                                        <div className="media-or-card pb-0 mb-0">
                                                            <p className="font-24 next-text-white mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="heading13">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse12">
                                                        Lorem Ipsum
                                                    </button>
                                                </h2>
                                                <div id="collapse13" className="accordion-collapse collapse" aria-labelledby="heading13" data-bs-parent="#accordionExampleTop">
                                                    <div className="accordion-body">
                                                        <div className="media-or-card pb-0 mb-0">
                                                            <p className="font-24 next-text-white mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="position-relative paddSection tourItineraryBg" />
            </div>

            <section className="position-relative paddSection">
                <div className="container">
                    <div className="row d-flex flex-wrap align-items-center">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="position-relative">
                                <h3 className="mb-2"> Featured Blog</h3>
                                <p>A truly unforgettable trip is all in the preparation. Get to know some of the local secrets and top tips with first-hand knowledge from our experts.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex flex-wrap align-items-center">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="carousel-section" data-aos="fade-up" data-aos-duration={3000} data-aos-delay={300}>
                                <div className="owl-carousel office-slider">
                                    <div className="item">
                                        <div className="office-boxs">
                                            <div className="leftimg-office">
                                                <img src="images/blogfeatured.png" alt="wall image" />
                                            </div>
                                            <div className="right-offic-contet">
                                                <h3>Sylvia Earle: Navigating Through Luxury and Adventure with Aurora Expeditions </h3>
                                                <p>The Sylvia Earle follows a long-standing tradition of naming ships after influential women.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="office-boxs">
                                            <div className="leftimg-office">
                                                <img src="images/tour1.png" alt="wall image" />
                                            </div>
                                            <div className="right-offic-contet">
                                                <h3>Sylvia Earle: Navigating Through Luxury and Adventure with Aurora Expeditions </h3>
                                                <p>The Sylvia Earle follows a long-standing tradition of naming ships after influential women.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="office-boxs">
                                            <div className="leftimg-office">
                                                <img src="images/tour2.png" alt="wall image" />
                                            </div>
                                            <div className="right-offic-contet">
                                                <h3>Sylvia Earle: Navigating Through Luxury and Adventure with Aurora Expeditions </h3>
                                                <p>The Sylvia Earle follows a long-standing tradition of naming ships after influential women.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="position-relative footerSection">
                <div className="container">
                    <div className="row d-flex flex-wrap">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 rightPadding">
                            <img src="images/footelogo.png" className="logoFooter" alt="wall image" />
                            <a href="/" className="getintouch mb-5">GET IN TOUCH</a>
                            <p className="fContact">Phone: <span>1-877-412-8527</span></p>
                            <p className="fContact">Hours: <span>Mon-Fri <br /> 8 a.m.-5p.m. PT</span></p>
                            <p className="fContact">Address: <span>5932 California Ave SW, Seattle, WA 98136-1863, United States</span></p>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <ul className="fMenu">
                                        <li><a href="/">Destnation</a></li>
                                        <li><a href="/">Antarctic</a></li>
                                        <li><a href="/">Galapagos</a></li>
                                        <li><a href="/">Alaska</a></li>
                                        <li><a href="/">Arctic</a></li>
                                        <li><a href="/">South Pacific</a></li>
                                        <li><a href="/">Amazon </a></li>
                                        <li><a href="/">Bajaj California</a></li>
                                        <li><a href="/">Australia &amp; New Zealand</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <ul className="fMenu">
                                        <li><a href="/">How to Plan Your Trip</a></li>
                                        <li><a href="/">Travelogue</a></li>
                                        <li><a href="/">About Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                            <p className="text-white">Sign up for insider travel tips, special offer, and more.</p>
                            <input type="text" className="footerInput" placeholder="First name" />
                            <input type="text" className="footerInput" placeholder="Last name" />
                            <input type="text" className="footerInput" placeholder="Email address" />
                            <button type="text" className="signUpBtn">SIGN UP </button>
                            <p className="text-white mt-5">Follow us on our socials</p>
                            <ul className="getintouchSocial">
                                <li><a href="/"><i className="fab fa-facebook-f icon" /></a></li>
                                <li><a href="/"><i className="fab fa-instagram icon" /></a></li>
                                <li><a href="/"><i className="fab fa-twitter icon" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row d-flex flex-wrap">
                        <div className="col-md-12">
                            <p className="copyrightTxt">© 2024 Expedition Trips. All rights reserved. | Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}





export default Index