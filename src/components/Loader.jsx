import React, { useEffect, useState } from 'react';

const Loader = ({onFinish}) => {

    const [percentage,setPercentage] = useState(0)

    useEffect(()=>{
        const loading = setInterval(() => {
            setPercentage((per)=>{
                if(per<100){
                    return per + 1;
                }
                else
                {
                    clearInterval(loading);
                     onFinish(); 
                    return per;
                }
            })
        }, 50);

         return ()=> clearInterval(loading);
    },[onFinish])

  return (
    <>
     <div className="loader">
      <h1 className='loading-text text-white'>RG's Portfolio</h1> <br />
      <h6 id='percentage'>Loading... {percentage}%</h6>
      </div>
    </>
  );
}

export default Loader;
