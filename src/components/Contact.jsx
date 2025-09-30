import React from 'react';

const Contact = () => {
  return (
    <div>
      <section className='Contact p-5 ' id='contact'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 position-relative">
              <div className="contact-1 text-center p-5 ">
               <h1 className='text-white con-text'>Contact Us</h1>
               <h6 className='text-start text-white con-text-2'>Get in Touch</h6>
               <h5 className='text-white text-start con-text-3 '>Reach out to our support center for <br /> any inquiries, feedback, or technical <br /> assistance. We are here to help.</h5>
              </div>
            </div>
            <div className="col-6 ">
              <div className="contact-form p-5 text-white">
              <form>
          <div className="mb-3 w-75 ms-5">
            <label htmlFor="firstname" className="form-label">First Name</label>
            <input type="text" className="form-control mt-2" id="firstname" aria-describedby="emailHelp" />
           
          </div>
          <div className="mb-3 w-75 ms-5">
            <label htmlFor="lastname" className="form-label">Last Name</label>
            <input type="text" className="form-control mt-2" id="lastname" />
          </div>

           <div className="mb-3 w-75 ms-5">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control mt-2" id="email" />
          </div>

           <div className="mb-3 w-75 ms-5">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="text" className="form-control mt-2" id="phone" />
          </div>

           <div className="mb-3 w-75 ms-5">
            <label htmlFor="message" className="form-label">Message</label> <br />
            <textarea className='mt-3' name="message" cols={49} rows={5} id="message"></textarea>
          </div>
        
          <button type="submit" className="btn text-black bg-white p-2 w-75 ms-5">Submit</button>
        </form>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
