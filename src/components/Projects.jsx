import React from 'react';
import pr1 from '../assets/pr-1.png'
import pr2 from '../assets/pr-2.png'
import pr3 from '../assets/blog.png'
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Projects = () => {
  return (
    <>
      <section className='Projects p-5 text-black' id='project'>
        <div className="container-fluid">
          <h1 className='text-black'>Explore My Work</h1>
          <div className="row mt-5">
            <div className="col-4 ">
              <div className="project-img">
                <div className="overlay d-flex justify-content-center align-items-center">
                  <button className='btn mx-2 btn-dark p-3'><a href="https://github.com/rudragondaliya/sundown" className='text-white'><FaGithub  size={20}/></a></button>
                  <button className='btn btn-dark p-3'><a href="https://sundown-studio-beta-eight.vercel.app/" className='text-white'><BsBoxArrowUpRight size={20}/></a></button>
                </div>
                <img className='img-fluid' src={pr1} alt="" />
              </div>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
              <div className="heading-1 ">
                 <h4>SunDown Studio</h4>
                 <h6 className='mt-3'>Spaces that Inspire</h6>
              </div>
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center">
              <div className="project-desc">
                <h6>Capabilities span creative concepting, <br /> design management, architectural renderings, <br /> and national installation</h6>
              </div>
            </div>
          </div>
          <hr  className='mt-5 border border-2'/>
          <div className="row mt-5">
            <div className="col-4 border border-3">
              <div className="project-img">
                 <div className="overlay d-flex justify-content-center align-items-center">
                  <button className='btn mx-2 btn-dark p-3'><a href="https://github.com/rudragondaliya/BOOTSTRAP-PROJECT-1?tab=readme-ov-file"className='text-white'><FaGithub  size={20}/></a></button>
                  <button className='btn  btn-dark p-3'><a href="https://starlit-seahorse-582a17.netlify.app/" className='text-white'><BsBoxArrowUpRight size={20}/></a></button>
                </div>
                <img className='img-fluid' src={pr2} alt="" />
              </div>
            </div>
            <div className="col-4  d-flex align-items-center justify-content-center">
              <div className="heading-1 ">
                 <h4>SolutionM4</h4>
                 <h6 className='mt-3'>Marketing Agency </h6>
              </div>
            </div>
            <div className="col-4  d-flex justify-content-center align-items-center">
              <div className="project-desc">
                <h6>Capabilities span creative concepting, <br /> design management, architectural renderings, <br /> and national installation</h6>
              </div>
            </div>
          </div>
          <hr  className='mt-5'/>
          <div className="row mt-5">
            <div className="col-4 ">
              <div className="project-img ">
                 <div className="overlay d-flex justify-content-center align-items-center">
                  <button className='btn mx-2 btn-dark p-3'><a href="https://github.com/rudragondaliya/node-blog-project" className='text-white'><FaGithub  size={20}/></a></button>
                  <button className='btn btn-dark p-3 '><a href="https://node-blog-project-rx8w.onrender.com/home" className='text-white'><BsBoxArrowUpRight size={20}/></a></button>
                </div>
                <img className='img-fluid' src={pr3} alt="" />
              </div>
            </div>
            <div className="col-4  d-flex align-items-center justify-content-center">
              <div className="heading-1 ">
                 <h4>Blogs</h4>
                 <h6 className='mt-3'>Write, Share, Inspire</h6>
              </div>
            </div>
            <div className="col-4  d-flex justify-content-center align-items-center ">
              <div className="project-desc  p-5">
               <h6>A fully functional blogging platform built with Node.js, Express, EJS, and MongoDB, featuring user authentication, session handling, and blog post management.</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
