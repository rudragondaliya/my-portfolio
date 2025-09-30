// import React from 'react';

// const Skills = () => {
//   return (
//     <>
//       <section className='skills p-5'>
//         <div className="container-fluid">
//         <h1 className='text-black'>My Skills</h1>
//         <div className="row">
//           <div className="col-12">
//              <div className="skills-set mt-4 p-4">
//                <div className="row">
//                 <div className="col d-flex">
//                    <div className="skill-1 d-flex justify-content-center align-items-center mx-2">
//                  <h6>HTML</h6>
//                </div>
//                   <div className="skill-1 d-flex justify-content-center align-items-center mx-2">
//                  <h6>CSS</h6>
//                </div>
//                   <div className="skill-1 d-flex justify-content-center align-items-center mx-2">
//                  <h6>BOOTSTRAP</h6>
//                </div>
//                   <div className="skill-1 d-flex justify-content-center align-items-center mx-2">
//                  <h6>JAVASCRIPT</h6>
//                </div>
//                   <div className="skill-1 d-flex justify-content-center align-items-center mx-2">
//                  <h6>C</h6>
//                </div>
//                 </div>
//                </div>

//                <div className="row">
//                 <div className="col d-flex">
//                     <div className="skill-1 d-flex justify-content-center align-items-center mx-2 mt-3">
//                  <h6>C++</h6>
//                </div>
//                  <div className="skill-1 d-flex justify-content-center align-items-center mx-2 mt-3">
//                  <h6>REACT JS</h6>
//                </div>
//                  <div className="skill-1 d-flex justify-content-center align-items-center mx-2 mt-3">
//                  <h6>NODE JS</h6>
//                </div>
//                 </div>
//                </div>
               
               
            
//               </div>
              
             
//           </div>
//         </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Skills;


import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
  FaCuttlefish,
} from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-danger" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-primary" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple" /> },
    { name: "JavaScript", icon: <FaJs className="text-warning" /> },
    { name: "C", icon: <FaCuttlefish className="text-dark" /> },
    { name: "C++", icon: <SiCplusplus className="text-primary" /> },
    { name: "React JS", icon: <FaReact className="text-info" /> },
    { name: "Node JS", icon: <FaNodeJs className="text-success" /> },
  ];

  return (
    <section className="skills p-5 " id="skills">
      <div className="container-fluid">
        <h1 className="text-start  text-black fw-bold mb-4">My Skills</h1>
        <div className="row gap-2">
          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-md-3 mx-auto">
              <div className="skill-card shadow-sm rounded-4 p-3 text-center bg-white w-75 h-100 hover-effect">
                <div className="fs-1 mb-3">{skill.icon}</div>
                <h6 className="fw-semibold">{skill.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline CSS for modern effects */}
      <style>{`
        .hover-effect {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-effect:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }
        .text-purple { color: #7952b3; }
      `}</style>
    </section>
  );
};

export default Skills;
