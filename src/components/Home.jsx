import React from 'react';
import { FaStarOfLife } from "react-icons/fa6";


const Home = () => {
  return (
    <>

      <section className='Home' id='home'>
        <div className="container-fluid  gx-0">
            <div className="row">
                <div className="col-12 p-0 ">
                     <div className="home-page bg-black text-center overflow-hidden">
                      <h1 className='text-white name hero-name'  data-aos="fade-up" data-aos-delay="100">RUDRA </h1>
                      <p className='text-white name surname ms-4'  data-aos="fade-up" data-aos-delay="200">GONDALIYA</p> 

                      <div className="moving-text text-white">
                      <div>
                    <div className="con">
                      <h5>FULL STACK DEVELOPER</h5>
               <div id="gola"><FaStarOfLife color='darkgrey' /></div>
                      <h5>FULL STACK DEVELOPER</h5>
               <div id="gola"><FaStarOfLife color='darkgrey'/></div>
                      <h5>FULL STACK DEVELOPER</h5>
                     <div id="gola"><FaStarOfLife color='darkgrey'/></div>
                    </div>
                    <div className="con">
                      <h5>FULL STACK DEVELOPER</h5>
                       <div id="gola"><FaStarOfLife color='darkgrey'/></div>
                      <h5>FULL STACK DEVELOPER</h5>
                       <div id="gola"><FaStarOfLife color='darkgrey'/></div>
                      <h5>FULL STACK DEVELOPER</h5>
                       <div id="gola"><FaStarOfLife color='darkgrey'/></div>
                    </div>
                    <div className="con">
                      <h5>FULL STACK DEVELOPER</h5>
                        <div id="gola"><FaStarOfLife color='darkgrey' /></div>
                      <h5>FULL STACK DEVELOPER</h5>
                      <div id="gola"><FaStarOfLife color='darkgrey' /></div>
                      <h5>FULL STACK DEVELOPER</h5>
                      <div id="gola"><FaStarOfLife color='darkgrey' /></div>
                    </div>
                  </div>

                      </div>

                     
                      
                     </div>
                </div>
            </div>
            <div className="row bg-black p-5">
              <div className="col-6">
                 <div className="text text-start text-white ms-5 mt-3">
                        <p  data-aos="fade-down">A Full Stack Developer is a versatile programmer <br /> skilled in both front-end and back-end development. <br /> They build complete web applications, <br /> handling everything from user interfaces to server logic and databases.
                        </p>
                      </div>
              </div>
              <div className="col-6 ">
              <div className="hire-btn text-end mt-5">
                  <button className='btn text-white border border-white p-2 rounded-0 w-25' data-aos="fade-up" >HIRE ME</button>
              </div>
              </div>
            </div>
        </div>
      </section>
      <hr />
    </>
  );
}

export default Home;
