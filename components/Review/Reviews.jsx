import React from 'react';
// import data from '../public/data.json';

const Reviews = () => {


    return (
        <div>
        
            {
                {/* jsonData && jsonData.map(item => <Review key={item.id} item = {item}></Review>) */}
                
                
            }
        </div>
    );
};

export default Reviews;

export async function getStaticProps() {
    const res = await fetch('/data.json');
    const data = await res.json();
    console.log(data);
  
    return {
      props: {
        data
      }
    };
  }