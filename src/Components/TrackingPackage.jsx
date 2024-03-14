import React, { useEffect, useState } from 'react';
import { ShipDetail, CabinCategoryIndex, itenenaryDetail } from '../APIs';
import { useLocation } from 'react-router-dom';


const TrackingPackage = () => {
let location=useLocation()
    const [littleTabs, setLittleTabs] = useState({ tab1: true, tab2: false, tab3: false, tab4: false })
    const [shipData, setShipData] = useState({})
    const [itenerarydata, setitenerarydata] = useState({})
    const shipId = 16636

    const fetchShipDataById = async () => {
        const response = await ShipDetail(shipId)
        if (response?.data) {
            setShipData(response.data);
        }
        else {
            console.log("Error while fetching data")
        }
    }
    const itinenaryDataById = async () => {
        const response = await itenenaryDetail(shipId)
        if (response?.data) {
            setitenerarydata(response.data);
        }
        else {
            console.log("Error while fetching data")
        }
    }
    // const baseURL = process.env.REACT_APP_API_KEY
    useEffect(() => {
        fetchShipDataById()

    }, [])
    useEffect(() => {
        itinenaryDataById()

    }, [])

    const [CabinData, setCabinData] = useState({})

    // const baseURL = process.env.REACT_APP_API_KEY


    // useEffect(() => {
    //     CabinCategoryIndex().then((data) => {
    //         console.log("-------------------------data", data)
    //         setApiResponse(data);
    //     }).catch((err) => {
    //         console.log("-------------------------Error", err)
    //     })

    // }, [])

    const fetchCabinCategoryIndex = async () => {
        const response = await CabinCategoryIndex()
        if (response?.data) {
            console.log("-------------------------cabin data", response)
            setCabinData(response.data);
        }
        else {
            console.log("Error while fetching data")
        }
    }

    // const baseURL = process.env.REACT_APP_API_KEY
    useEffect(() => {

        fetchCabinCategoryIndex()

    }, [])


    async function fetchData() {
        if (shipData.departures) {
            let datasample = shipData.departures?.constructor.name === "Object" ? Object.entries(shipData.departures)?.map(([key, value]) => {
                return (
                    value?.itinerary_id
                )
            }) : [];
    
            if (Array.isArray(datasample) && datasample.length > 0) {
                let array = [];
                await Promise.all(datasample.map(async (shipId) => {
                    const response = await itenenaryDetail(shipId);
                    array.push(response.data[shipId]);
                }));
                console.log({array});
                if(array.length==datasample.length){
                    setitenerarydata(array)
                }
                
                // 'array' now contains all the data fetched from the 'itenenaryDetail' function for each 'shipId'
            }
        }
    }
    
    // Call the fetchData function
    useEffect(()=>{
        fetchData();
    },[shipData])
  
    


    const options = {
        items: 4,
        nav: true,
        rewind: true,
        autoplay: true,
    };


console.log(itenerarydata,"0000000000000000000000");

    return (
        <>


            <header className="main-header w-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img src="images/logoexpedition.png" alt="" />
                        </div>
                    </div>
                </div>
            </header>

            <section className="hero-banner-second position-relative overflow-hidden">
                <div className="container" />
            </section>

            <section className="position-relative paddSection shipsecription">
                <div className="container">
                    <div className="row d-flex flex-wrap">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                            <div className="position-relative">
                                <h3 className="mb-2">{shipData?.ship_name}</h3>
                                <p>{shipData?.description}
                                </p>


                                <a href="#" className="shipdaybtn">Ship Description <i className="fa-regular fa-file-pdf" /></a>
                                <a href="#" className="shipdaybtn"><i className="fa-solid fa-arrow-down" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="position-relative shipsecriptionRight">
                                {console.log({shipData})}
                                <h5 className="mb-2"> Ship Description</h5>
                                {shipData.ship_specifications?.map((e,i)=>{
                                    return(
                                 <>
                                     <p> {e.spec_type} <span> {e.spec_value}</span></p>
                         
                                 </>
                                    )
                                })}
                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <section className="position-relative paddSection">
                <div className="container">
                    <div className="row d-flex flex-wrap align-items-center">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="mdl-tabs vertical-mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
                                <div className="mdl-grid mdl-grid--no-spacing">
                                    <div className="mdl-cell mdl-cell--2-col">
                                        <div className="mdl-tabs__tab-bar">
                                            <a href="#tab1-panel" className="mdl-tabs__tab is-active">

                                                <span className="hollow-circle" />
                                                ITINERARIES &amp; DATES

                                            </a>
                                            <a href="#tab2-panel" className="mdl-tabs__tab">
                                                <span className="hollow-circle" />
                                                CABINS
                                            </a>
                                            <a href="#tab3-panel" className="mdl-tabs__tab">
                                                <span className="hollow-circle" />
                                                FEATURES
                                            </a>
                                            <a href="#tab4-panel" className="mdl-tabs__tab">
                                                <span className="hollow-circle" />
                                                ON BOARD
                                            </a>
                                        </div>
                                    </div>

                                    <div className="mdl-cell mdl-cell--10-col">
                                        <div className="mdl-tabs__panel is-active" id="tab1-panel">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="tracingcardBox">
                                                        <img src="images/tour1.png" alt=""/>
                                                        <div className="trackingInner">
                                                            <h6>Lorem ipsum dolor sit</h6>
                                                            <p>Ultramarine, 199-guests 11 Days</p>
                                                            <div className="fleBox">
                                                                <span className="spanleft">Explore the trip</span>
                                                                <span className="spanright">Save up to 30%</span>
                                                            </div>
                                                            <div className="flexboxpprice">
                                                                <span className="leftPrice">Dec 18, 2024 - Jan 05, 2025</span>
                                                                <span className="rightdate">22,100</span>
                                                            </div>
                                                            <div className="flexboxpprice">
                                                                <span className="leftPrice">Dec 18, 2024 - Jan 05, 2025</span>
                                                                <span className="rightdate">22,100</span>
                                                            </div>
                                                            <div className="flexboxpprice">
                                                                <span className="leftPrice">Dec 18, 2024 - Jan 05, 2025</span>
                                                                <span className="rightdate">22,100</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tracingCarbtmmenu">
                                                        <a href="#"><i className="fa-solid fa-phone" /></a>
                                                        <a href="#">Get quote</a>
                                                        <a href="#"><i className="fa-brands fa-whatsapp" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="tracingcardBox">
                                                        <img src="images/tour1.png" alt=""/>
                                                        <div className="trackingInner">
                                                            <h6>Lorem ipsum dolor sit</h6>
                                                            <p>Ultramarine, 199-guests 11 Days</p>
                                                            <div className="fleBox">
                                                                <span className="spanleft">Explore the trip</span>
                                                                <span className="spanright">Save up to 30%</span>
                                                            </div>
                                                            <div className="flexboxpprice">
                                                                <span className="leftPrice">Dec 18, 2024 - Jan 05, 2025</span>
                                                                <span className="rightdate">22,100</span>
                                                            </div>
                                                            <div className="flexboxpprice">
                                                                <span className="leftPrice">Dec 18, 2024 - Jan 05, 2025</span>
                                                                <span className="rightdate">22,100</span>
                                                            </div>
                                                            <div className="flexboxpprice">
                                                                <span className="leftPrice">Dec 18, 2024 - Jan 05, 2025</span>
                                                                <span className="rightdate">22,100</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tracingCarbtmmenu">
                                                        <a href="#"><i className="fa-solid fa-phone" /></a>
                                                        <a href="#">Get quote</a>
                                                        <a href="#"><i className="fa-brands fa-whatsapp" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="tracingcardBox">
                                                        <img src="images/tour1.png" alt=""/>
                                                        <div className="trackingInner">
                                                            <h6>Lorem ipsum dolor sit</h6>
                                                            <p>Ultramarine, 199-guests 11 Days</p>
                                                            <div className="fleBox">
                                                                <span className="spanleft">Explore the trip</span>
                                                                <span className="spanright">Save up to 30%</span>
                                                            </div>
                                                            <div className="flexboxpprice">
                                                                <span className="leftPrice">Dec 18, 2024 - Jan 05, 2025</span>
                                                                <span className="rightdate">22,100</span>
                                                            </div>
                                                            <div className="flexboxpprice">
                                                                <span className="leftPrice">Dec 18, 2024 - Jan 05, 2025</span>
                                                                <span className="rightdate">22,100</span>
                                                            </div>
                                                            <div className="flexboxpprice">
                                                                <span className="leftPrice">Dec 18, 2024 - Jan 05, 2025</span>
                                                                <span className="rightdate">22,100</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tracingCarbtmmenu">
                                                        <a href="#"><i className="fa-solid fa-phone" /></a>
                                                        <a href="#">Get quote</a>
                                                        <a href="#"><i className="fa-brands fa-whatsapp" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="tracingcardBox">
                                                        <img src="images/tour1.png" alt=""/>
                                                        <div className="trackingInner">
                                                            <h6>Lorem ipsum dolor sit</h6>
                                                            <p>Ultramarine, 199-guests 11 Days</p>
                                                            <div className="fleBox">
                                                                <span className="spanleft">Explore the trip</span>
                                                                <span className="spanright">Save up to 30%</span>
                                                            </div>
                                                            <div className="flexboxpprice">
                                                                <span className="leftPrice">Dec 18, 2024 - Jan 05, 2025</span>
                                                                <span className="rightdate">22,100</span>
                                                            </div>
                                                            <div className="flexboxpprice">
                                                                <span className="leftPrice">Dec 18, 2024 - Jan 05, 2025</span>
                                                                <span className="rightdate">22,100</span>
                                                            </div>
                                                            <div className="flexboxpprice">
                                                                <span className="leftPrice">Dec 18, 2024 - Jan 05, 2025</span>
                                                                <span className="rightdate">22,100</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tracingCarbtmmenu">
                                                        <a href="#"><i className="fa-solid fa-phone" /></a>
                                                        <a href="#">Get quote</a>
                                                        <a href="#"><i className="fa-brands fa-whatsapp" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div></div></div></div></div></div>
            </section > */}

            {/*------ tab second start --------*/}
            {/* < div className="mdl-tabs__panel" id="tab2-panel" >
                <div className="row">
                    <div className="col-md-12">
                        <div className="coachBoX">
                            <div className="row">
                                <div className="col-md-5">
                                    <h3>Explorer <br /> Triple</h3>
                                    <img src="images/exploreroom.png" alt=""/>
                                </div>
                                <div className="col-md-7">
                                    <p>Located on Deck 3, and approximately 285 sq. ft. (26.5 m2).
                                        This suite is perfect for guests traveling solo who want to
                                        share their experience with other like-minded travelers of
                                        the same gender, or for groups of three traveling together.
                                        Featuring three separate single beds, and amenities for each
                                        of the three guests.</p>
                                    <p><b>Features:</b> three single beds (two of which can be
                                        combined into a double bed), sitting area, picture window,
                                        desk, refrigerator, TV, private bathroom with shower and
                                        heated floors.</p>
                                    <p><b>Standard Amenities:</b> hair dryer, bathrobe, slippers,
                                        shampoo, conditioner, shower gel, complimentary water
                                        bottle.</p>
                                    <ul>
                                        <li>Area: 285 Sq ft </li>
                                        <li>Occupancy: 1-3 </li>
                                        <li>Bed Config: 3 single beds, two of which can be converted
                                            to a double bed </li>
                                        <li>Class: Standard </li>
                                        <li>Location: Deck 3 </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="coachBoX">
                            <div className="row">
                                <div className="col-md-5">
                                    <h3>Explorer <br /> Triple</h3>
                                    <img src="images/exploreroom.png" alt=""/>
                                </div>
                                <div className="col-md-7">
                                    <p>Located on Deck 3, and approximately 285 sq. ft. (26.5 m2).
                                        This suite is perfect for guests traveling solo who want to
                                        share their experience with other like-minded travelers of
                                        the same gender, or for groups of three traveling together.
                                        Featuring three separate single beds, and amenities for each
                                        of the three guests.</p>
                                    <p><b>Features:</b> three single beds (two of which can be
                                        combined into a double bed), sitting area, picture window,
                                        desk, refrigerator, TV, private bathroom with shower and
                                        heated floors.</p>
                                    <p><b>Standard Amenities:</b> hair dryer, bathrobe, slippers,
                                        shampoo, conditioner, shower gel, complimentary water
                                        bottle.</p>
                                    <ul>
                                        <li>Area: 285 Sq ft </li>
                                        <li>Occupancy: 1-3 </li>
                                        <li>Bed Config: 3 single beds, two of which can be converted
                                            to a double bed </li>
                                        <li>Class: Standard </li>
                                        <li>Location: Deck 3 </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div > */}



            {/* <!-------- tab third start ----------> */}
            {/* < div className="mdl-tabs__panel" id="tab3-panel" >
                <div className="row">
                    <div className="col-md-12">
                        <div className="titleHeading">
                            Ship eatures
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="shipListbox mt-5">
                            <div className="leftRorate">
                                <span>Cabin<span>
                                </span></span></div>
                            <div className="rightContentShip">
                                <ul>
                                    <li>Spacious Entryways</li>
                                    <li>Personal Safes</li>
                                    <li>Spa-inspired Bathrooms</li>
                                    <li>Heated Bathroom Floors</li>
                                    <li>Premium beds and bed linens</li>
                                    <li>Convertible Beds</li>
                                    <li>Individual Temperature Controls</li>
                                    <li>HD Flatscreen Televisions</li>
                                    <li>Oversized Windows With Sweeping Views</li>
                                    <li>Electrical Supply: 220V</li>
                                </ul>
                            </div>
                        </div>
                        <div className="shipListbox mt-5">
                            <div className="leftRorate">
                                <span>Aboard<span>
                                </span></span></div>
                            <div className="rightContentShip">
                                <ul>
                                    <li>Spacious Entryways</li>
                                    <li>Personal Safes</li>
                                    <li>Spa-inspired Bathrooms</li>
                                    <li>Heated Bathroom Floors</li>
                                    <li>Premium beds and bed linens</li>
                                    <li>Convertible Beds</li>
                                    <li>Individual Temperature Controls</li>
                                    <li>HD Flatscreen Televisions</li>
                                    <li>Oversized Windows With Sweeping Views</li>
                                    <li>Electrical Supply: 220V</li>
                                </ul>
                            </div>
                        </div>
                        <div className="shipListbox mt-5">
                            <div className="leftRorate">
                                <span>Activities<span>
                                </span></span></div>
                            <div className="rightContentShip">
                                <ul>
                                    <li>Spacious Entryways</li>
                                    <li>Personal Safes</li>
                                    <li>Spa-inspired Bathrooms</li>
                                    <li>Heated Bathroom Floors</li>
                                    <li>Premium beds and bed linens</li>
                                    <li>Convertible Beds</li>
                                    <li>Individual Temperature Controls</li>
                                    <li>HD Flatscreen Televisions</li>
                                    <li>Oversized Windows With Sweeping Views</li>
                                    <li>Electrical Supply: 220V</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div > */}



            {/*------ tab four start --------*/}
            {/* < div className="mdl-tabs__panel" id="tab4-panel" >
                <div className="row">
                    <div className="col-md-12">
                        <div className="coachBoX onBoard">
                            <div className="row">
                                <div className="col-md-12">
                                    <h3>Polar Boutique</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="images/board1.png" alt=""/>
                                </div>
                                <div className="col-md-8">
                                    <p>Forgot something at home? Don’t worry. Our Polar Boutique is
                                        stocked with the industry’s top cold-weather expedition
                                        gear.</p>
                                </div>
                            </div>
                        </div>
                        <div className="coachBoX onBoard">
                            <div className="row">
                                <div className="col-md-12">
                                    <h3>Ready Rooms</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="images/board22.png" alt=""/>
                                </div>
                                <div className="col-md-8">
                                    <p>Designed for efficiency—with wider hallways, plenty of
                                        seating, and conveniently located bathrooms—our two ready
                                        rooms allow guests to quickly change in and out of their
                                        expedition gear.</p>
                                </div>
                            </div>
                        </div>
                        <div className="coachBoX onBoard">
                            <div className="row">
                                <div className="col-md-12">
                                    <h3>Ambassador Theater</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="images/board1.png" alt=""/>
                                </div>
                                <div className="col-md-8">
                                    <p>A state-of-the-art, high-resolution LED screen wall in the
                                        main theater ensures high-definition viewing of
                                        presentations from your Expedition Team from any angle.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div > */}





            <section className="position-relative paddSection">
                <div className="container">
                    <div className="row d-flex flex-wrap align-items-center">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="mdl-tabs vertical-mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
                                <div className="mdl-grid mdl-grid--no-spacing">
                                    <div className="mdl-cell mdl-cell--2-col">
                                        <div className="mdl-tabs__tab-bar">
                                            <a onClick={(e) => setLittleTabs({ tab1: true, tab2: false, tab3: false, tab4: false })} className="mdl-tabs__tab" style={{ fontSize: littleTabs.tab1 && "25px", color: littleTabs.tab1 && "black", borderRight: littleTabs.tab1 && "5px solid" }}>
                                                <span className="hollow-circle" />
                                                ITINERARIES &amp; DATES
                                            </a>
                                            <a onClick={(e) => setLittleTabs({ tab1: false, tab2: true, tab3: false, tab4: false })} className="mdl-tabs__tab" style={{ fontSize: littleTabs.tab2 && "25px", color: littleTabs.tab2 && "black", borderRight: littleTabs.tab2 && "5px solid" }}>
                                                <span className="hollow-circle" />
                                                CABINS
                                            </a>
                                            <a onClick={(e) => setLittleTabs({ tab1: false, tab2: false, tab3: true, tab4: false })} className="mdl-tabs__tab" style={{ fontSize: littleTabs.tab3 && "25px", color: littleTabs.tab3 && "black", borderRight: littleTabs.tab3 && "5px solid" }}>
                                                <span className="hollow-circle" />
                                                FEATURES
                                            </a>
                                            <a onClick={(e) => setLittleTabs({ tab1: false, tab2: false, tab3: false, tab4: true })} className="mdl-tabs__tab" style={{ fontSize: littleTabs.tab4 && "25px", color: littleTabs.tab4 && "black", borderRight: littleTabs.tab4 && "5px solid" }}>
                                                <span className="hollow-circle" />
                                                ON BOARD
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mdl-cell mdl-cell--10-col">

                                        {littleTabs.tab1 &&
                                            <div className="mdl-tabs__panel is-active" id="tab1-panel">
                                                <div className="row">
                                                    {itenerarydata?.length && itenerarydata?.map((e)=>{
                                                        return( 
                                                        <div className="col-md-6">
                                                            <div className="tracingcardBox">
                                                                <img src="images/tour1.png" alt="" />
                                                                <div className="trackingInner">
                                                                    <h6>{e.itinerary_name}</h6>
                                                                    <p>{e.expedition_name} ,{e.duration_days +" Days"}</p>
                                                                    <div className="fleBox">
                                                                        <span className="spanleft">Explore the trip</span>
                                                                        <span className="spanright">Save up to 30%</span>
                                                                    </div>
                                                                    <div className="flexboxpprice">
                                                                        <span className="leftPrice">Dec 18, 2024 - Jan 05, 2025</span>
                                                                        <span className="rightdate">22,100</span>
                                                                    </div>
                                                                    <div className="flexboxpprice">
                                                                        <span className="leftPrice">Dec 18, 2024 - Jan 05, 2025</span>
                                                                        <span className="rightdate">22,100</span>
                                                                    </div>
                                                                    <div className="flexboxpprice">
                                                                        <span className="leftPrice">Dec 18, 2024 - Jan 05, 2025</span>
                                                                        <span className="rightdate">22,100</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tracingCarbtmmenu">
                                                                <a href="#"><i className="fa-solid fa-phone" /></a>
                                                                <a href="#">Get quote</a>
                                                                <a href="#"><i className="fa-brands fa-whatsapp" /></a>
                                                            </div>
                                                        </div>   )
                                                    })
                                                            }
                                                   
                                                    {/* <div className="col-md-6">
                                                        <div className="tracingcardBox">
                                                            <img src="images/tour1.png" alt="" />
                                                            <div className="trackingInner">
                                                                <h6>Lorem ipsum dolor sit</h6>
                                                                <p>Ultramarine, 199-guests 11 Days</p>
                                                                <div className="fleBox">
                                                                    <span className="spanleft">Explore the trip</span>
                                                                    <span className="spanright">Save up to 30%</span>
                                                                </div>
                                                                <div className="flexboxpprice">
                                                                    <span className="leftPrice">Dec 18, 2024 - Jan 05, 2025</span>
                                                                    <span className="rightdate">22,100</span>
                                                                </div>
                                                                <div className="flexboxpprice">
                                                                    <span className="leftPrice">Dec 18, 2024 - Jan 05, 2025</span>
                                                                    <span className="rightdate">22,100</span>
                                                                </div>
                                                                <div className="flexboxpprice">
                                                                    <span className="leftPrice">Dec 18, 2024 - Jan 05, 2025</span>
                                                                    <span className="rightdate">22,100</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tracingCarbtmmenu">
                                                            <a href="#"><i className="fa-solid fa-phone" /></a>
                                                            <a href="#">Get quote</a>
                                                            <a href="#"><i className="fa-brands fa-whatsapp" /></a>
                                                        </div>
                                                    </div> */}
                                             
                                                </div>
                                            </div>
                                        }

                                        {littleTabs.tab2 &&
                                            <div className="mdl-tabs__panel" id="tab2-panel">
                                                {/* {console.log(shipData.cabins,"77888")} */}
                                                <div className="row">
                                                    {shipData.cabins ?
                                                        Object.keys(shipData.cabins).map((key) => {
                                                            const data = shipData.cabins[key];
                                                            // console.log({data},"77777777777");
                                                            const firstImageKey = Object.keys(data.image)[0]; // Get the first key of the image object
                                                            const imageUrl = data.image[firstImageKey].fullsize_url;
                                                            return (
                                                                <div key={data.id} className="col-md-12">
                                                                    <div className="coachBoX">
                                                                        <div className="row">
                                                                            <div className="col-md-5">
                                                                                <h3>{data.cabin_name}</h3>
                                                                                {/* <img src={data.image} alt="" /> */}
                                                                                <img src={imageUrl} alt={data.cabin_name} />



                                                                            </div>



                                                                            <div className="col-md-7">
                                                                                {/* {console.log(CabinData?.cabin ? Object.keys(CabinData?.cabin): "wwwwwww111",{CabinData})}
                                                                                {
                                                                                    Object.keys(CabinData).map((key_2) => {
                                                                                        const data = CabinData[key_2];
                                                                                        return ( */}
<> 
                                                                                            <p><b>Description:</b>{CabinData[data.id].description} </p>
                                                                                            <p><b>Features:</b>{CabinData[data.id].ship_name}</p>
                                                                                            <p><b>Standard Amenities:</b> hair dryer, bathrobe, slippers,
                                                                                                shampoo, conditioner, shower gel, complimentary water
                                                                                                bottle.</p>
                                                                                            <ul>
                                                                                                <li>Area: 285 Sq ft </li>
                                                                                                <li>Occupancy: 1-3 </li>
                                                                                                <li>Bed Config: 3 single beds, two of which can be converted
                                                                                                    to a double bed </li>
                                                                                                <li>Class: Standard </li>
                                                                                                <li>Location: Deck 3 </li>
                                                                                            </ul>
                                                                                            </>
                                                                                            {/* <p key={key_2.id}>{key_2.description}</p> */}
                                                                                            {/* )


                                                                                    })} */}

                                                     
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }) :""
                                                    }

                                                    {/* <div className="col-md-12">
                                                        <div className="coachBoX">
                                                            <div className="row">
                                                                <div className="col-md-5">
                                                                    <h3>Explorer <br /> Triple</h3>
                                                                    <img src="images/exploreroom.png" alt="" />
                                                                </div>
                                                                <div className="col-md-7">
                                                                    <p>Located on Deck 3, and approximately 285 sq. ft. (26.5 m2).
                                                                        This suite is perfect for guests traveling solo who want to
                                                                        share their experience with other like-minded travelers of
                                                                        the same gender, or for groups of three traveling together.
                                                                        Featuring three separate single beds, and amenities for each
                                                                        of the three guests.</p>
                                                                    <p><b>Features:</b> three single beds (two of which can be
                                                                        combined into a double bed), sitting area, picture window,
                                                                        desk, refrigerator, TV, private bathroom with shower and
                                                                        heated floors.</p>
                                                                    <p><b>Standard Amenities:</b> hair dryer, bathrobe, slippers,
                                                                        shampoo, conditioner, shower gel, complimentary water
                                                                        bottle.</p>
                                                                    <ul>
                                                                        <li>Area: 285 Sq ft </li>
                                                                        <li>Occupancy: 1-3 </li>
                                                                        <li>Bed Config: 3 single beds, two of which can be converted
                                                                            to a double bed </li>
                                                                        <li>Class: Standard </li>
                                                                        <li>Location: Deck 3 </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                        }

                                        {/* {littleTabs.tab3 &&
                                            <div className="mdl-tabs__panel" id="tab3-panel">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="titleHeading">
                                                            Ship Features
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    {
                                                        Object.keys(shipData.cabin).map((key) => {
                                                            const data = shipData.cabin[key];

                                                            return (
                                                                <div key={data.id} className="col-md-12">
                                                                    <div className="shipListbox mt-5">
                                                                        <div className="leftRorate">
                                                                            <span>Cabin</span>
                                                                        </div>
                                                                        <div className="rightContentShip">
                                                                            <ul>
                                                                                <li>Spacious Entryways</li>
                                                                                <li>Personal Safes</li>
                                                                                <li>Spa-inspired Bathrooms</li>
                                                                                <li>Heated Bathroom Floors</li>
                                                                                <li>Premium beds and bed linens</li>
                                                                                <li>Convertible Beds</li>
                                                                                <li>Individual Temperature Controls</li>
                                                                                <li>HD Flatscreen Televisions</li>
                                                                                <li>Oversized Windows With Sweeping Views</li>
                                                                                <li>Electrical Supply: 220V</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }

                                                </div>

                                                <div className="shipListbox mt-5">
                                                    <div className="leftRorate">
                                                        <span>Aboard</span>
                                                    </div>
                                                    <div className="rightContentShip">
                                                        <ul>
                                                            <li>Spacious Entryways</li>
                                                            <li>Personal Safes</li>
                                                            <li>Spa-inspired Bathrooms</li>
                                                            <li>Heated Bathroom Floors</li>
                                                            <li>Premium beds and bed linens</li>
                                                            <li>Convertible Beds</li>
                                                            <li>Individual Temperature Controls</li>
                                                            <li>HD Flatscreen Televisions</li>
                                                            <li>Oversized Windows With Sweeping Views</li>
                                                            <li>Electrical Supply: 220V</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="shipListbox mt-5">
                                                    <div className="leftRorate">
                                                        <span>Activities</span>
                                                    </div>
                                                    <div className="rightContentShip">
                                                        <ul>
                                                            <li>Spacious Entryways</li>
                                                            <li>Personal Safes</li>
                                                            <li>Spa-inspired Bathrooms</li>
                                                            <li>Heated Bathroom Floors</li>
                                                            <li>Premium beds and bed linens</li>
                                                            <li>Convertible Beds</li>
                                                            <li>Individual Temperature Controls</li>
                                                            <li>HD Flatscreen Televisions</li>
                                                            <li>Oversized Windows With Sweeping Views</li>
                                                            <li>Electrical Supply: 220V</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        } */}

                                        {littleTabs.tab3 && (
                                            <div className="mdl-tabs__panel" id="tab3-panel">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="titleHeading">
                                                            Ship Features
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
{console.log({shipData})}
                                                    {
                                                        Object.keys(shipData.amenities).map((category, index) => {
                                                            return (
                                                                <div key={index} className="col-md-12">
                                                                    <div className="shipListbox mt-5">
                                                                        <div className="leftRorate">
                                                                            <span>{category}</span>
                                                                        </div>
                                                                        <div className="rightContentShip">
                                                                            <ul>
                                                                                {
                                                                                    shipData.amenities[category].map((items, idx) => {
                                                                                        return (
                                                                                            <li key={idx}>{items}</li>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>

                                                {/* <div className="shipListbox mt-5">
                                                    <div className="leftRorate">
                                                        <span>Aboard</span>
                                                    </div>
                                                    <div className="rightContentShip">
                                                        <ul>
                                                            <li>Spacious Entryways</li>
                                                            <li>Personal Safes</li>
                                                            <li>Spa-inspired Bathrooms</li>
                                                            <li>Heated Bathroom Floors</li>
                                                            <li>Premium beds and bed linens</li>
                                                            <li>Convertible Beds</li>
                                                            <li>Individual Temperature Controls</li>
                                                            <li>HD Flatscreen Televisions</li>
                                                            <li>Oversized Windows With Sweeping Views</li>
                                                            <li>Electrical Supply: 220V</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="shipListbox mt-5">
                                                    <div className="leftRorate">
                                                        <span>Activities</span>
                                                    </div>
                                                    <div className="rightContentShip">
                                                        <ul>
                                                            <li>Spacious Entryways</li>
                                                            <li>Personal Safes</li>
                                                            <li>Spa-inspired Bathrooms</li>
                                                            <li>Heated Bathroom Floors</li>
                                                            <li>Premium beds and bed linens</li>
                                                            <li>Convertible Beds</li>
                                                            <li>Individual Temperature Controls</li>
                                                            <li>HD Flatscreen Televisions</li>
                                                            <li>Oversized Windows With Sweeping Views</li>
                                                            <li>Electrical Supply: 220V</li>
                                                        </ul>
                                                    </div>
                                                </div> */}

                                            </div>
                                        )}



                                        {littleTabs.tab4 &&
                                            <div className="mdl-tabs__panel" id="tab4-panel">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        
                                                        <div className="coachBoX onBoard">
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <h3>Polar Boutique</h3>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-4">
                                                                    <img src="images/board1.png" alt="" />
                                                                </div>
                                                                <div className="col-md-8">
                                                                    <p>Forgot something at home? Don’t worry. Our Polar Boutique is
                                                                        stocked with the industry’s top cold-weather expedition
                                                                        gear.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="coachBoX onBoard">
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <h3>Ready Rooms</h3>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-4">
                                                                    <img src="images/board22.png" alt="" />
                                                                </div>
                                                                <div className="col-md-8">
                                                                    <p>Designed for efficiency—with wider hallways, plenty of
                                                                        seating, and conveniently located bathrooms—our two ready
                                                                        rooms allow guests to quickly change in and out of their
                                                                        expedition gear.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="coachBoX onBoard">
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <h3>Ambassador Theater</h3>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-4">
                                                                    <img src="images/board1.png" alt="" />
                                                                </div>
                                                                <div className="col-md-8">
                                                                    <p>A state-of-the-art, high-resolution LED screen wall in the
                                                                        main theater ensures high-definition viewing of
                                                                        presentations from your Expedition Team from any angle.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >







            <section className="position-relative footerSection">
                <div className="container">
                    <div className="row d-flex flex-wrap">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 rightPadding">
                            <img src="images/footelogo.png" className="logoFooter" alt="" />
                            <a href="#" className="getintouch mb-5">GET IN TOUCH</a>
                            <p className="fContact">Phone: <span>1-877-412-8527</span></p>
                            <p className="fContact">Hours: <span>Mon-Fri <br /> 8 a.m.-5p.m. PT</span></p>
                            <p className="fContact">Address: <span>5932 California Ave SW, Seattle, WA 98136-1863, United
                                States</span></p>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <ul className="fMenu">
                                        <li><a href="#">Destnation</a></li>
                                        <li><a href="#">Antarctic</a></li>
                                        <li><a href="#">Galapagos</a></li>
                                        <li><a href="#">Alaska</a></li>
                                        <li><a href="#">Arctic</a></li>
                                        <li><a href="#">South Pacific</a></li>
                                        <li><a href="#">Amazon </a></li>
                                        <li><a href="#">Bajaj California</a></li>
                                        <li><a href="#">Australia &amp; New Zealand</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <ul className="fMenu">
                                        <li><a href="#">How to Plan Your Trip</a></li>
                                        <li><a href="#">Travelogue</a></li>
                                        <li><a href="#">About Us</a></li>
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
                                <li><a href="#"><i className="fab fa-facebook-f icon" /></a></li>
                                <li><a href="#"><i className="fab fa-instagram icon" /></a></li>
                                <li><a href="#"><i className="fab fa-twitter icon" /></a></li>
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






export default TrackingPackage