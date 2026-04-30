import './App.css'

function App() {
    return (
        <>
            <div className="main-bg text-white">

                {/* Navbar */}
                <div className="container-fluid pt-3">
                    <div className="d-flex justify-content-between align-items-center">

                        <div className="d-flex gap-3 ">
                            <a href="" className="text-secondary fw-semibold text-decoration-none me-5 fs-4 l1 ">Home</a>
                            <a href="" className="text-secondary fw-semibold text-decoration-none me-5   fs-4 l2">About</a>
                            <a href="" className="text-secondary  fw-semibold text-decoration-none  me-5  fs-4 l3">Contact</a>
                        </div>

                        <h1 className="logo m-0 u8">UNIVERSE</h1>

                        <div className="d-flex gap-4">
                            <a href="" className="text-secondary fw-semibold text-decoration-none fs-4 r1">Galaxies</a>
                            <a href="" className="text-secondary fw-semibold text-decoration-none fs-4 r2">Blog</a>
                            <a href="" className="text-secondary fw-semibold text-decoration-none r3 fs-4">العربية</a>
                        </div>

                    </div>
                </div>

                {/* Sun title */}
                <div className="text-center mt-5">
                    <h3 className='mt-5 fs-1'>SUN</h3>

                    <div className="container mt-4">
                        <div className="row text-center">

                            <div className="col-md-3 ">
                                <h6 className='fs-2 text-secondary'>GALAXY</h6>
                                <p className='fs-5'>Milky Way</p>
                            </div>

                            <div className="col-md-3">
                                <h6 className='fs-2 text-secondary'>DIAMETER</h6>
                                <p className='fs-5'>1,392,684 km</p>
                            </div>

                            <div className="col-md-3">
                                <h6 className='fs-2 text-secondary'>LENGTH OF DAY</h6>
                                <p className='fs-5'>---</p>
                            </div>

                            <div className="col-md-3">
                                <h6 className='fs-2 text-secondary'>AVERAGE TEMPERATURE</h6>
                                <p className='fs-5'>6000 Kelvin</p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Planets Section */}
                <div className="container-fluid planets mt-5">

                    <div className="row align-items-center text-center">

                        {/* Neptune */}
                        <div className="col-3 d-flex">
                            <img src="./images/neptune.png" className="img-fluid planet-left mx-3" />
                            <p className="mt-5 fs-3 fw-light ">NEPTUNE</p>
                        </div>

                        {/* Sun */}
                        <div className="col-6">
                            <img src="./images/sun.png" className="img-fluid sun-img " />
                        </div>

                        {/* Mercury */}
                        <div className="col-3 d-flex planet-right">
                            <span className='mt-5 fs-3 fw-light'>MERCURY</span>
                            <img src="./images/mercury.png" className="img-fluid mx-3 "  />

                        </div>

                    </div>

                </div>


            </div>
        </>
    );

}

export default App