import React from 'react';
import aboutImg from '../assets/about-img.avif'

const About = () => {
  return (
    <div>
      <section className='About p-5 bg-black text-white' id='about'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 mt-4">
              <div className="img-container">
                <img className='img-fluid' src={aboutImg} alt="about" height={300}/>
              </div>
            </div>
            <div className="col-6 p-4  mt-4 ">
              <div className="ab-txt">
                <h1 className='ms-5 heading-ab'>About Me</h1>
                <p className='w-75 mt-4 ms-5'>Hi, I'm Rudra Gondaliya, a passionate Full Stack Developer with strong skills in both front-end and back-end technologies. I specialize in building responsive, user-friendly web applications using modern tools like HTML, CSS, JavaScript, Bootstrap, React, and Node.js. I also have a solid foundation in C and C++, which helps me write efficient and optimized code.
                 <br /> <br />
                I'm always eager to learn new technologies, take on challenges, and build projects that solve real-world problems. Whether it's designing a sleek UI or developing robust backend systems, I enjoy every part of the development process.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
}

export default About;
