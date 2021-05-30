import React from 'react'
import '../../../App.css'
import steak from '../../../images/steak.jpg'
import salade from '../../../images/salade.jpg'
import salade2 from '../../../images/salade2.jpg'
import salade3 from '../../../images/salade3.jpg'
import salade4 from '../../../images/salade4.jpg'
import burger from '../../../images/burger.jpg'
import steak2 from '../../../images/steak2.jpg'
import steak3 from '../../../images/steak3.jpg'
import steak4 from '../../../images/steak4.jpg'
import jus from '../../../images/jus.jpg'
import milkshake from '../../../images/milkshake.jpg'
import brushetta from '../../../images/brushta.jpg'
import brushetta2 from '../../../images/brushta2.jpg'
import brushetta3 from '../../../images/brushta3.jpeg'
import cheescake from '../../../images/Cheescake.jpg'

const ProductList = () => {
    /*this.state = {
        Products: []
      }
  
      componentDidMount(
        axios.get('\api')
        .then(res =>{
          const Products = res.data;
          this.setState({Products})
        })
    */
    
    return (
        <html lang="en">

            <head>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
                <title>Borkan admin</title>
                <link rel="stylesheet"
                    href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />
                <link rel="stylesheet" type="text/css" href="style.css" />
            </head>

            <body>
                    <div className="main-content">
                    <main>
                        <div className="recent-grid">
                            <div className="orders">
                                <div className="orders-card">
                                    <div className="card-header">
                                        <h3>Product list</h3>
                                    </div>
                                    <div className="card-body">
                                        <table width="100%" id="list">
                                            <thead >
                                                <tr>
                                                    <td>Product ID</td>
                                                    <td>Product Name</td>
                                                    <td>Category</td>
                                                    <td>Price</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1111</td>
                                                    <td><span>
                                                        <img src={salade} width="40px" height="40px" alt="" />
                                                    </span> Salade Piemontraise</td>
                                                    <td>Entrees</td>
                                                    <td>35</td>
                                                </tr>
                                                <tr>
                                                    <td>1112</td>
                                                    <td><span>
                                                        <img src={salade2} width="40px" height="40px" alt="" />
                                                    </span> Salade Cesar</td>
                                                    <td>Entrees</td>
                                                    <td>45</td>
                                                </tr>
                                                <tr>
                                                    <td>1113</td>
                                                    <td><span>
                                                        <img src={salade3} width="40px" height="40px" alt="" />
                                                    </span> Panier de nature</td>
                                                    <td>Entrees</td>
                                                    <td>45</td>
                                                </tr>
                                                <tr>
                                                    <td>1114</td>
                                                    <td><span>
                                                        <img src={salade4} width="40px" height="40px" alt="" />
                                                    </span> Salade Bor'kan</td>
                                                    <td>Entrees</td>
                                                    <td>55</td>
                                                </tr>
                                                <tr>
                                                    <td>1115</td>
                                                    <td><span>
                                                        <img src={salade} width="40px" height="40px" alt="" />
                                                    </span> Tarticlette Bor'kan</td>
                                                    <td>Entrees</td>
                                                    <td>49</td>
                                                </tr>
                                                <tr>
                                                    <td>2121</td>
                                                    <td><span>
                                                        <img src={brushetta} width="40px" height="40px" alt="" />
                                                    </span> Bruschetta veget</td>
                                                    <td>Bruschetta</td>
                                                    <td>39</td>
                                                </tr>
                                                <tr>
                                                    <td>2122</td>
                                                    <td><span>
                                                        <img src={brushetta2} width="40px" height="40px" alt="" />
                                                    </span> Bruschetta Bor'kan</td>
                                                    <td>Bruschetta</td>
                                                    <td>55</td>
                                                </tr>
                                                <tr>
                                                    <td>2123</td>
                                                    <td><span>
                                                        <img src={brushetta3} width="40px" height="40px" alt="" />
                                                    </span> Bruschetta chevre miel</td>
                                                    <td>Bruschetta</td>
                                                    <td>75</td>
                                                </tr>
                                                <tr>
                                                    <td>3131</td>
                                                    <td><span>
                                                        <img src={brushetta} width="40px" height="40px" alt="" />
                                                    </span> Penne au pastrami</td>
                                                    <td>Pates</td>
                                                    <td>59</td>
                                                </tr>
                                                <tr>
                                                    <td>3132</td>
                                                    <td><span>
                                                        <img src={brushetta2} width="40px" height="40px" alt="" />
                                                    </span> Penne au saumon</td>
                                                    <td>Pates</td>
                                                    <td>80</td>
                                                </tr>
                                                <tr>
                                                    <td>4141</td>
                                                    <td><span>
                                                        <img src={steak3} width="40px" height="40px" alt="" />
                                                    </span> Filet de boeuf</td>
                                                    <td>Grillades</td>
                                                    <td>140</td>
                                                </tr>
                                                <tr>
                                                    <td>4142</td>
                                                    <td><span>
                                                        <img src={steak2} width="40px" height="40px" alt="" />
                                                    </span> Filet Filet</td>
                                                    <td>Grillades</td>
                                                    <td>105</td>
                                                </tr>
                                                <tr>
                                                    <td>4143</td>
                                                    <td><span>
                                                        <img src={steak4} width="40px" height="40px" alt="" />
                                                    </span> Entrecote de boeuf</td>
                                                    <td>Grillades</td>
                                                    <td>110</td>
                                                </tr>
                                                <tr>
                                                    <td>4144</td>
                                                    <td><span>
                                                        <img src={steak2} width="40px" height="40px" alt="" />
                                                    </span> Cotelettes d'agneau</td>
                                                    <td>Grillades</td>
                                                    <td>85</td>
                                                </tr>
                                                <tr>
                                                    <td>4145</td>
                                                    <td><span>
                                                        <img src={steak4} width="40px" height="40px" alt="" />
                                                    </span> Bor'kefta</td>
                                                    <td>Grillades</td>
                                                    <td>75</td>
                                                </tr>
                                                <tr>
                                                    <td>4146</td>
                                                    <td><span>
                                                        <img src={steak3} width="40px" height="40px" alt="" />
                                                    </span> Cuisse de poulet</td>
                                                    <td>Grillades</td>
                                                    <td>59</td>
                                                </tr>
                                                <tr>
                                                    <td>4147</td>
                                                    <td><span>
                                                        <img src={steak2} width="40px" height="40px" alt="" />
                                                    </span> Brochettes de poulet indienne</td>
                                                    <td>Grillades</td>
                                                    <td>65</td>
                                                </tr>
                                                <tr>
                                                    <td>4148</td>
                                                    <td><span>
                                                        <img src={steak3} width="40px" height="40px" alt="" />
                                                    </span> Brochettes de poulet pakistanaise</td>
                                                    <td>Grillades</td>
                                                    <td>65</td>
                                                </tr>
                                                <tr>
                                                    <td>4149</td>
                                                    <td><span>
                                                        <img src={steak4} width="40px" height="40px" alt="" />
                                                    </span> Mixed grill cheese</td>
                                                    <td>Grillades</td>
                                                    <td>110</td>
                                                </tr>
                                                <tr>
                                                    <td>5151</td>
                                                    <td><span>
                                                        <img src={cheescake} width="40px" height="40px" alt="" />
                                                    </span> Tiramisu</td>
                                                    <td>Desserts</td>
                                                    <td>35</td>
                                                </tr>
                                                <tr>
                                                    <td>5152</td>
                                                    <td><span>
                                                        <img src={cheescake} width="40px" height="40px" alt="" />
                                                    </span> Cheesecake</td>
                                                    <td>Desserts</td>
                                                    <td>42</td>
                                                </tr>
                                                <tr>
                                                    <td>5153</td>
                                                    <td><span>
                                                        <img src={cheescake} width="40px" height="40px" alt="" />
                                                    </span> Bor'kan</td>
                                                    <td>Desserts</td>
                                                    <td>39</td>
                                                </tr>
                                                <tr>
                                                    <td>6161</td>
                                                    <td><span>
                                                        <img src={cheescake} width="40px" height="40px" alt="" />
                                                    </span> Nutella</td>
                                                    <td>Crepes</td>
                                                    <td>29</td>
                                                </tr>
                                                <tr>
                                                    <td>6162</td>
                                                    <td><span>
                                                        <img src={cheescake} width="40px" height="40px" alt="" />
                                                    </span> Tagliatelle</td>
                                                    <td>Crepes</td>
                                                    <td>29</td>
                                                </tr>
                                                <tr>
                                                    <td>6163</td>
                                                    <td><span>
                                                        <img src={cheescake} width="40px" height="40px" alt="" />
                                                    </span> Crepe surprise</td>
                                                    <td>Crepes</td>
                                                    <td>42</td>
                                                </tr>
                                                <tr>
                                                    <td>7171</td>
                                                    <td><span>
                                                        <img src={milkshake} width="40px" height="40px" alt="" />
                                                    </span> Nutella</td>
                                                    <td>Milkshakes</td>
                                                    <td>45</td>
                                                </tr>
                                                <tr>
                                                    <td>7172</td>
                                                    <td><span>
                                                        <img src={milkshake} width="40px" height="40px" alt="" />
                                                    </span> Fruits rouges</td>
                                                    <td>Milkshakes</td>
                                                    <td>39</td>
                                                </tr>
                                                <tr>
                                                    <td>7173</td>
                                                    <td><span>
                                                        <img src={milkshake} width="40px" height="40px" alt="" />
                                                    </span> Vanille</td>
                                                    <td>Milkshakes</td>
                                                    <td>36</td>
                                                </tr>
                                                <tr>
                                                    <td>8181</td>
                                                    <td><span>
                                                        <img src={jus} width="40px" height="40px" alt="" />
                                                    </span> Jus d'orange</td>
                                                    <td>Boissons</td>
                                                    <td>42</td>
                                                </tr>
                                                <tr>
                                                    <td>8182</td>
                                                    <td><span>
                                                        <img src={jus} width="40px" height="40px" alt="" />
                                                    </span> Jus citron</td>
                                                    <td>Boissons</td>
                                                    <td>22</td>
                                                </tr>
                                                <tr>
                                                    <td>8183</td>
                                                    <td><span>
                                                        <img src={jus} width="40px" height="40px" alt="" />
                                                    </span> Jus de fraise</td>
                                                    <td>Milkshakes</td>
                                                    <td>22</td>
                                                </tr>
                                                <tr>
                                                    <td>8184</td>
                                                    <td><span>
                                                        <img src={jus} width="40px" height="40px" alt="" />
                                                    </span> Jus exotique</td>
                                                    <td>Boissons</td>
                                                    <td>25</td>
                                                </tr>
                                                <tr>
                                                    <td>8185</td>
                                                    <td><span>
                                                        <img src={jus} width="40px" height="40px" alt="" />
                                                    </span> Eau minerale</td>
                                                    <td>Boissons</td>
                                                    <td>10</td>
                                                </tr>
                                                <tr>
                                                    <td>8186</td>
                                                    <td><span>
                                                        <img src={jus} width="40px" height="40px" alt="" />
                                                    </span> Eau gazeuse oulmes</td>
                                                    <td>Boissons</td>
                                                    <td>12</td>
                                                </tr>
                                                <tr>
                                                    <td>8187</td>
                                                    <td><span>
                                                        <img src={jus} width="40px" height="40px" alt="" />
                                                    </span> Soda 0.33L</td>
                                                    <td>Boissons</td>
                                                    <td>14</td>
                                                </tr>
                                                <tr>
                                                    <td>8188</td>
                                                    <td><span>
                                                        <img src={jus} width="40px" height="40px" alt="" />
                                                    </span> Nespresso</td>
                                                    <td>Boissons</td>
                                                    <td>19</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div><br />
                            </div>
                        </div>
                    </main>
                    </div>
            </body>

        </html>
    )
}

export default ProductList


