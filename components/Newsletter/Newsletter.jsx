import styless from  "../../src/styles/Newsletter.module.css"

const Newsletter = () => {
    const styles = {
        h2:{
            color: '#313131'
        },
        p:{
            color: "#828282"
        },
        primary:{
            border : '1px solid #2A9D8F'
        },
        input :{
           border: 'none',
           outline: 'none',
           borderTop : 'none'
        }
        
    }
  return (
    <>
      <div className="text-center pt-28">
      <h2 style={styles.h2} className="text-5xl font-semibold mb-6">Subscribe to Our Newsletter</h2>
      <p style={styles.p} className="font-normal pb-10 text-lg">Do not miss the information and news from us. Subscribe now!</p>
      </div>
      <div className="mx-auto w-[350px] md:w-4/5 mb-48 lg:w-2/5 flex justify-around items-center" style={styles.primary}>
        <input style={{color: 'black'}}  placeholder="Enter your active e-mail" className={styless.inputClass} type="text" />
        <button className="px-3 mr-2 md:mr-0  md:px-8  md:my-5  py-3  md:py-3 rounded-lg font-medium text-base" style={{backgroundColor:'#2A9D8F'}}>Subscribe</button>
      </div>
    </>
  );
};

export default Newsletter;
