import React from 'react'
import Product from '../components/Product';
import Menu from '../components/Menu'
import "../scss/Home.scss";
import image from '../components/images';
import mobile_add from '../images/mobile_add.webp';

const Home = () => {


    return (
        <div className="home">
          <Menu/>
          <div className="home_advertise" >
            <img src={mobile_add}/>
           </div>
    
          
           <div className="home_row">
             
             <Product
             id="121"
             title="SPARX Men Sandal"
             price={719}
             rating={5}
             src={image.Footwear_one}

           />
            <Product
            id="122"
            title="Nike Shoes"
             price={1000}
             rating={5}
            src={image.Footwear_two}

           />
            <Product
             id="123"
             title="puma flip flops"
             price={1000}
             rating={5}
             src={image.Footwear_three}

           />
            
           <Product
           id="124"
           title="puma shoes"
            price={1000}
            rating={5}
           src={image.Footwear_four}

          />
            <Product
             id="125"
             title="adidas shoes"
             price={1000}
             rating={5}
             src={image.Footwear_six}

           />
            <Product
          
           id="126"
           title="rebok shoes"
            price={1000}
            rating={5}
           src={image.Footwear_five}

          />
           </div>

            <div className="home_row_two">
            <Product
             id="211"
             title="Ecko"
             price={384}
             rating={5}
             src={image.Cloths_one}

           />
           <Product
             id="212"
             title="English"
             price={500}
             rating={5}
             src={image.Cloths_two}

           />
            <Product
             id="213"
             title="HIGHLANDER"
             price={384}
             rating={5}
             src={image.Cloths_three}

           />
            <Product
             id="214"
             title="Mast"
             price={500}
             rating={5}
             src={image.Cloths_four}

           />
            <Product
             id="215"
             title="Roadster"
             price={500}
             rating={5}
             src={image.Cloths_five}

           />

            </div>
            <div className="home_row_three">
             <Product
             id="13"
             title="Sony tv"
             price={35000}
             rating={5}
             src={image.Electronics_three}

           />
           <Product
             id="11"
             title="iPhone"
             price={35000}
             rating={5}
             src={image.Electronics_one}
             
           />
           <Product
             id="12"
             title="camera"
             price={35000}
             rating={5}
             src={image.Electronics_two}
             
           />
        </div>
        </div>
    );
    

}
export default Home;
