import Image from "next/image";

const Blog = () => {
  const styles = {
    primary: {
      color: "#2A9D8F",
    },
    secondary: {
      color: "#4D4D4D",
    },
    paraColor: {
      color: "#656565",
    },
  };
  return (
    <>
      <div className="pt-24 pb-10 pl-10 pr-6 md:pr-0 md:pl-24 md:text-left text-center">
        <h3 style={styles.primary} className="text-2xl mb-4 font-medium">
          Read Our Posts
        </h3>
        <h2 style={styles.secondary} className="font-medium mb-5 text-5xl">
          Latest News, Articles & Events
        </h2>
        <p style={styles.paraColor} className="font-normal text-xl">
          Read and follow the events and programs that we do for a better earth
        </p>
      </div>
     <div className="grid md:grid-cols-2 px-24">
      <div>
      <Image className="pb-6" src='/forest.png' width={500} height={300} alt='picture of forest'></Image>
      <h3 style={styles.secondary} className="font-medium mb-5 text-2xl">Save Forests for a Healthy and Beautiful Earth</h3>
      <p style={styles.paraColor} className="text-justify mb-6 md:mb-0 md:w-4/5  pb-4 text-xl">Forests have many benefits for all of us. But looking at the current data, the worlds forests, especially in Indonesia, are starting to be threatened. To not cause more severe damage we must prevent it in a way. Like ....</p>
      </div>
      <div className="blogs">
      {/* blog--->1 */}
          <div className="flex mb-12">
            <div className="pr-6">
              <h3 style={styles.secondary} className="text-xl mb-6 font-medium">Get to know the definition, function and types of forest</h3>
              <p style={styles.paraColor} className="text-lg">1 January 2022</p>
            </div>
            <div>
               <Image src='/tree1.png' width={120} height={120} alt='tree image 1'></Image>
            </div>
          </div>
      {/* blog--->2 */}
          <div className="flex mb-12">
            <div className="pr-6">
              <h3 style={styles.secondary} className="text-xl mb-6 font-medium">Climbing Mount Ciremai with Growing for Environment</h3>
              <p style={styles.paraColor} className="text-lg">10 December 2021</p>
            </div>
            <div>
               <Image src='/tree2.png' width={120} height={120} alt='tree image 2'></Image>
            </div>
          </div>
      {/* blog--->3 */}
          <div className="flex mb-12">
            <div className="pr-6">
              <h3 style={styles.secondary} className="text-xl mb-6 font-medium">Program: Training on Planting and Caring for Trees</h3>
              <p style={styles.paraColor} className="text-lg">9 December 2021</p>
            </div>
            <div>
               <Image src='/tree3.png' width={111} height={111} alt='tree image 3'></Image>
            </div>
          </div>
      {/* blog--->4 */}
          <div className="flex">
            <div className="pr-6">
              <h3 style={styles.secondary} className="text-xl mb-6 font-medium">Growing To Become The Best Earth Care Platform Version of ccin</h3>
              <p style={styles.paraColor} className="text-lg">1 December 2022</p>
            </div>
            <div>
               <Image src='/tree4.png' width={140} height={140} alt='tree image 4'></Image>
            </div>
          </div>
      </div>
      </div>
      <div className="w-60 mx-auto text-center mt-20 pb-20">
        <button className="px-8 py-2 font-medium" style={{backgroundColor:'#2A9D8F'}}>View More</button>
      </div>
    </>
  );
};

export default Blog;
