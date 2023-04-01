
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
  <div class="mx-auto flex justify-center items-center bg-white p-5 sm:flex">
      <img class="h-36" src="https://i.ibb.co/QHjcc5v/Screenshot-2023-03-31-100804-removebg-preview.png" alt="" />
      <div class="font-medium text-gray-800">
          <div className="text-2xl">1.351.003</div>
          <div class="text-sm text-gray-500 dark:text-gray-400">Pohon yang Tertanam</div>
      </div>
      <br></br>
  
  </div>
  
  {/* <------------------------------> */}
  
  <div class="w-full text-center bg-white  sm:p-8 ">
  
      <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <div class="w-full sm:w-auto bg-white  focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
              <div class="text-left">
              <img style={styleObject.size} class="" src="https://i.ibb.co/hcrYTBs/Untitled-3.png" alt="" />
                  
              </div>
            </div>
  
          <div class="w-full sm:w-auto bg-white  focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center p-5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
              <div class="text-left">
              <p style={styleObject.textcolor} className="text-gray-900 font-semibold pb-2">Tentang  Kami</p>
                      <h1  class="text-4xl font-semibold text-gray-600 dark:text-white">BERTUMBUH - Save The<br></br> World </h1>
                      <br></br>
                      <p class="text-base font-normal text-gray-500 dark:text-gray-400">BERTUMBUH - Adalah organisasi non-profit yang mempunyai   <br></br> Melindungi, menjaga, merawat, dan melestarikan pohon-  <br></br> bumi yang kita pijak sekarang. BERTUMBUH - Adalah  <br></br> non-profit yang mempunyai tujuan Melindungi, menjaga, <br></br> dan melestarikan pohon-pohon yang </p>
                      <br></br>
                      <button style={styleObject.button} type="button" class="text-white bg-gray-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Lihat Selengkapnya</button>
  
              </div>
              <br></br>
          </div>
      </div>
  </div>
  
  
  
  {/* <------------------------------> */}
  <div class="w-full text-center bg-white  sm:p-8 ">
  
      <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <div class="w-full sm:w-auto bg-white  focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center p-5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
              <div class="text-left">
              <p style={styleObject.textcolor} className="text-gray-900 font-semibold ">Kami Butuh Kamu</p>
                      <h1  class="text-4xl font-semibold text-gray-600 dark:text-white mr-5">Kenapa BERTUMBUH <br></br> Butuh Kamu ? </h1>
                      <br></br>
                      <p class="text-base font-normal text-gray-500 dark:text-gray-400">BERTUMBUH - Adalah organisasi non-profit yang mempunyai   <br></br> Melindungi, menjaga, merawat, dan melestarikan pohon-  <br></br> bumi yang kita pijak sekarang. BERTUMBUH - Adalah  <br></br> non-profit yang mempunyai tujuan Melindungi, menjaga, <br></br> dan melestarikan pohon-pohon yang </p>
                      <br></br>
                      <button style={styleObject.button} type="button" class="text-white bg-gray-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Gabung Bertumbuh</button>
              </div>
          </div>
          <div class="w-full sm:w-auto bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
              <div class="text-left">
              <img style={styleObject.size} class="ps-5" src="https://i.ibb.co/DpydcPf/Untitledujnjikuu-copy.jpg" alt="" />
                  
              </div>
          </div>
          
      </div>
  </div>
  
  
  
  </div>
  
  
    )
  }
  
  export default About;
  