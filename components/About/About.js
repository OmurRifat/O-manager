const About = () => {

    const styleObject = {
      button: {
        background: '#2A9D8F',
      },
      textcolor: {
        color: '#2A9D8F',
      },
      size: {
        height: '400px',
        width: '440px',
      }
    };
  
    return (
      
  
  <div> 
  
    {/* <---------------About Part-------------> */}
  <div className="mx-auto flex justify-center items-center bg-white p-5 sm:flex">
      <img className="h-36" src="https://i.ibb.co/QHjcc5v/Screenshot-2023-03-31-100804-removebg-preview.png" alt="" />
      <div className="font-medium text-gray-800">
          <div className="text-2xl">1000+</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Active Organization</div>
      </div>
      <br></br>
  
  </div>
  
  {/* <------------------------------> */}
  
  <div className=" text-center bg-white m-5 sm:p-8 ">
  
      <div className="justify-between p-5 space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <div className=" sm:w-auto bg-white  focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
              <div className="text-left">
              <img style={styleObject.size} className="" src="https://i.ibb.co/hcrYTBs/Untitled-3.png" alt="" />
                  
              </div>
            </div>
  
          <div className=" sm:w-auto bg-white  focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center p-5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
              <div className="text-left">
              <p style={styleObject.textcolor} className="text-gray-900 font-semibold pb-2">Managing Organization</p>
                      <h1  className="text-4xl font-semibold text-gray-600 dark:text-white">We Commit To Manage <br></br> Your Organization </h1>
                      <br></br>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">BERTUMBUH - Adalah organisasi non-profit yang mempunyai   <br></br> Melindungi, menjaga, merawat, dan melestarikan pohon-  <br></br> bumi yang kita pijak sekarang. BERTUMBUH - Adalah  <br></br> non-profit yang mempunyai tujuan Melindungi, menjaga, <br></br> dan melestarikan pohon-pohon yang </p>
                      <br></br>
                      <button style={styleObject.button} type="button" className="text-white bg-gray-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">   Start A Free Trail</button>
  
              </div>
              <br></br>
          </div>
        </div>
        <br></br>
      </div>


      {/* <------------------------------> */}
      <div className="text-center bg-white m-5 sm:p-8 ">
        <div className="m-5 justify-between space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <div class="sm:w-auto bg-white  focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center p-5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <div className="text-left">
              <p
                style={styleObject.textcolor}
                className="text-gray-900 font-semibold "
              >
                Managing Man-Power
              </p>
              <h1 class="text-4xl font-semibold text-gray-600 dark:text-white mr-5">
              We Will Manage Your <br></br> Man-Power Carefully!{" "}
              </h1>
              <br></br>
              <div className="mx-auto flex justify-between items-center bg-white sm:flex">
              <div className="font-medium text-gray-800">
                    <div className="text-2xl text-gray-700">15,3 M</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Members</div>
                </div>
                <div className="font-medium text-gray-700">
                    <div className="text-2xl">1000+</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Organization</div>
                </div>
                <br></br>
              </div>
              <br></br>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                BERTUMBUH - Adalah organisasi non-profit yang mempunyai{" "}
                <br></br> Melindungi, menjaga, merawat, dan melestarikan pohon-{" "}
                <br></br> bumi yang kita pijak sekarang. BERTUMBUH - Adalah{" "}
                <br></br> non-profit yang mempunyai tujuan Melindungi, menjaga,{" "}
                <br></br> dan melestarikan pohon-pohon yang{" "}
              </p>
              <br></br>
              <button
                style={styleObject.button}
                type="button"
                class="text-white bg-gray-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
              >
                Manage Your Power
              
              </button>
            </div>
          </div>
          <div className="sm:w-auto bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <div className="text-left">
              <img
                style={styleObject.size}
                class=""
                src="https://i.ibb.co/DpydcPf/Untitledujnjikuu-copy.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
