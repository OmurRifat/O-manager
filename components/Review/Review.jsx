import Link from "next/link";
import { BiDonateHeart } from "react-icons/bi";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Reviews from "./Reviews";
import Image from "next/image";


const Review = () => {
  
  const styleObject = {
    h3: {
      color: "#2A9D8F",
      marginBottom: "10px",
    },
    h2: {
      color: "#4D4D4D",
      marginBottom: "20px",
    },
    gradient: {
      background: "rgba(42, 157, 143, 0.15)",
    },
    pColor: {
      color: "#656565",
    },
    primary:{
      color: "#2A9D8F"
    },
    secondary:{
      backgroundColor : '#2A9D8F'
    }
  };
  return (
    <>
      <div className="text-center pt-20 pb-16">
        <h3 style={styleObject.h3} className="2xl font-medium">
          Menjadi Bagian Bertumbuh
        </h3>
        <h2 style={styleObject.h2} className="text-6xl max-w-2xl mx-auto">
          Buat Hal Sederhana Jadi Lebih Bermakna
        </h2>
        <p
          style={styleObject.pColor}
          className="font-normal text-xl max-w-xl mx-auto"
        >
          Ciptakan setiap kegiatan jadi lebih bermakna dan bermanfaat untuk
          kita, dia dan semua
        </p>
      </div>
     

     <div  style={styleObject.gradient} className='pt-16 pb-16 px-6 '>
     <div  className=" grid grid-cols-1 md:grid-cols-3 mb-10  pb-12  gap-y-10 md:gap-x-11">

      {/* card----->1 */}
      <div className="max-w-sm p-6 h-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        
        <div style={styleObject.secondary} className="w-16 mb-5 h-16 flex justify-center items-center ">
          <Image src="/donate.png" width={20} height={20} alt="picture of the client"></Image>
        </div>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-justify max-w-[260px]">
        Anda dapat membantu dengan berdonasi untuk biaya penanaman, perwatan, bibit dan biaya oprasional lainnya
        </p>
        <div className="flex items-center">
        <Link
          href="/" style={styleObject.primary}
          className="h-7 font-normal "
        >
          Menjadi Donatur
          </Link>
          <FaLongArrowAltRight style={{color:'#2A9D8F'}} className="w-8 h-4"></FaLongArrowAltRight>
        </div>
    
        
      </div>
       {/* card----->2 */}
      <div className="max-w-sm p-6 h-96   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        
        <div style={{backgroundColor: "#2A9D8F",marginBottom : '20px'}} className="w-16 h-16 flex justify-center items-center ">
        <Image src="/people.png" width={20} height={20} alt="picture of the client"></Image>
        </div>
        
        <p className="mb-3  font-normal text-gray-500 dark:text-gray-400 text-justify max-w-[260px]">
        Kamu dapat membantu bertumbuh dengan menjadi relawan kami. Kamu dapat langsung menanam pohon, membantu berkebun, melakukan sosialisasi dan program-program menarik lainnya
        </p>
        <div className="flex items-center">
        <Link
          href="/" style={styleObject.primary}
          className="h-7 font-normal "
        >
          Menjadi Donatur
          </Link>
          <FaLongArrowAltRight style={{color:'#2A9D8F'}} className="w-8 h-4"></FaLongArrowAltRight>
        </div>
    
        
      </div>
      {/* card----->3 */}
      <div className="max-w-sm p-6 h-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        
        <div style={{backgroundColor: "#2A9D8F",marginBottom : '20px'}} className="w-16 h-16 flex justify-center items-center ">
        <Image src="/cap.png" width={20} height={20} alt="picture of the client"></Image>
        </div>
        
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-justify max-w-[260px]">
        Kamu akan belajar tentang cara  menanam pohon, merawat pohon serta hal lain dengan bergabung sebagai petani
        </p>
        <div className="flex items-center">
        <Link
          href="/" style={styleObject.primary}
          className="h-7 font-normal "
        >
          Menjadi Donatur
          </Link>
          <FaLongArrowAltRight style={{color:'#2A9D8F'}} className="w-8 h-4"></FaLongArrowAltRight>
        </div>
    
        
      </div>
      
      </div>
     
     <div className=" flex justify-center  items-center bg-white border mx-auto w-28 h-16">
        <FaLongArrowAltLeft style={styleObject.primary} className="cursor-pointer"></FaLongArrowAltLeft>
        <button style={styleObject.secondary} className="w-12 h-10 ml-2 flex justify-center items-center bg-white"><FaLongArrowAltRight></FaLongArrowAltRight> </button>
      </div>
     
     </div>
    </>
  );
};

export default Review;
