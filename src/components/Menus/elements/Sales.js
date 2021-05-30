import React from 'react'
import '../../../App.css'
import steak from '../../../images/steak.jpg'
import salade from '../../../images/salade.jpg'
import burger from '../../../images/burger.jpg'
import steak2 from '../../../images/steak2.jpg'
import jus from '../../../images/jus.jpg'
import milkshake from '../../../images/milkshake.jpg'
import brushetta from '../../../images/brushta.jpg'
import cheescake from '../../../images/Cheescake.jpg'

const ProductList = () => {
    /*this.state = {
        Sales: [],
        Products:[]
      }
  
      /*componentDidMount(
        axios.get('\api')
        .then(res =>{
          const Sales = res.data['Sales'];
          const Products = res.data['Products'];
          this.setState({Sales,Products})
        })
      )*/

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
                    <div class="main-content">
                    <main>
                        <div class="recent-grid">
                            <div class="orders">
                                <div class="orders-card">
                                    <div class="card-header">
                                        <h3>Sales</h3>
                                    </div>
                                    <div class="card-body">
                                        <table width="100%" id="sales">
                                            <thead >
                                                <tr>
                                                    <td>Product ID</td>
                                                    <td>Product Name</td>
                                                    <td>Category</td>
                                                    <td>Quantity</td>
                                                    <td>Price</td>
                                                    <td>Income</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1111</td>
                                                    <td><span>
                                                        <img src={salade} width="40px" height="40px" alt="" />
                                                    </span> Salade Piemontraise</td>
                                                    <td>Entrees</td>
                                                    <td>115</td>
                                                    <td>35 DH</td>
                                                    <td>4025 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>1112</td>
                                                    <td><span>
                                                        <img src={salade} width="40px" height="40px" alt="" />
                                                    </span> Salade Cesar</td>
                                                    <td>Entrees</td>
                                                    <td>27</td>
                                                    <td>45 DH</td>
                                                    <td>1215 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>1113</td>
                                                    <td><span>
                                                        <img src={salade} width="40px" height="40px" alt="" />
                                                    </span> Panier de nature</td>
                                                    <td>Entrees</td>
                                                    <td>87</td>
                                                    <td>45 DH</td>
                                                    <td>3915 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>1114</td>
                                                    <td><span>
                                                        <img src={salade} width="40px" height="40px" alt="" />
                                                    </span> Salade Bor'kan</td>
                                                    <td>Entrees</td>
                                                    <td>39</td>
                                                    <td>55 DH</td>
                                                    <td>2145 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>1115</td>
                                                    <td><span>
                                                        <img src={salade} width="40px" height="40px" alt="" />
                                                    </span> Tarticlette Bor'kan</td>
                                                    <td>Entrees</td>
                                                    <td>67</td>
                                                    <td>49 DH</td>
                                                    <td>3283 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>2121</td>
                                                    <td><span>
                                                        <img src={brushetta} width="40px" height="40px" alt="" />
                                                    </span> Bruschetta veget</td>
                                                    <td>Bruschetta</td>
                                                    <td>32</td>
                                                    <td>39 DH</td>
                                                    <td>1248 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>2122</td>
                                                    <td><span>
                                                        <img src={brushetta} width="40px" height="40px" alt="" />
                                                    </span> Bruschetta Bor'kan</td>
                                                    <td>Bruschetta</td>
                                                    <td>65</td>
                                                    <td>55 DH</td>
                                                    <td>3575 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>2123</td>
                                                    <td><span>
                                                        <img src={brushetta} width="40px" height="40px" alt="" />
                                                    </span> Bruschetta chevre miel</td>
                                                    <td>Bruschetta</td>
                                                    <td>43</td>
                                                    <td>75 DH</td>
                                                    <td>3225 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>3131</td>
                                                    <td><span>
                                                        <img src={brushetta} width="40px" height="40px" alt="" />
                                                    </span> Penne au pastrami</td>
                                                    <td>Pates</td>
                                                    <td>33</td>
                                                    <td>59 DH</td>
                                                    <td>1947 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>3132</td>
                                                    <td><span>
                                                        <img src={brushetta} width="40px" height="40px" alt="" />
                                                    </span> Penne au saumon</td>
                                                    <td>Pates</td>
                                                    <td>78</td>
                                                    <td>80 DH</td>
                                                    <td>6240 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>4141</td>
                                                    <td><span>
                                                        <img src={steak} width="40px" height="40px" alt="" />
                                                    </span> Filet de boeuf</td>
                                                    <td>Grillades</td>
                                                    <td>27</td>
                                                    <td>140 DH</td>
                                                    <td>3780 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>4142</td>
                                                    <td><span>
                                                        <img src={steak2} width="40px" height="40px" alt="" />
                                                    </span> Filet Filet</td>
                                                    <td>Grillades</td>
                                                    <td>24</td>
                                                    <td>105 DH</td>
                                                    <td>2520 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>4143</td>
                                                    <td><span>
                                                        <img src={steak} width="40px" height="40px" alt="" />
                                                    </span> Entrecote de boeuf</td>
                                                    <td>Grillades</td>
                                                    <td>51</td>
                                                    <td>110 DH</td>
                                                    <td>5610 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>4144</td>
                                                    <td><span>
                                                        <img src={steak2} width="40px" height="40px" alt="" />
                                                    </span> Cotelettes d'agneau</td>
                                                    <td>Grillades</td>
                                                    <td>15</td>
                                                    <td>85 DH</td>
                                                    <td>1275 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>4145</td>
                                                    <td><span>
                                                        <img src={steak} width="40px" height="40px" alt="" />
                                                    </span> Bor'kefta</td>
                                                    <td>Grillades</td>
                                                    <td>28</td>
                                                    <td>75 DH</td>
                                                    <td>2100 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>4146</td>
                                                    <td><span>
                                                        <img src={steak2} width="40px" height="40px" alt="" />
                                                    </span> Cuisse de poulet</td>
                                                    <td>Grillades</td>
                                                    <td>32</td>
                                                    <td>59 DH</td>
                                                    <td>1888 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>4147</td>
                                                    <td><span>
                                                        <img src={steak} width="40px" height="40px" alt="" />
                                                    </span> Brochettes de poulet indienne</td>
                                                    <td>Grillades</td>
                                                    <td>65</td>
                                                </tr>
                                                <tr>
                                                    <td>4148</td>
                                                    <td><span>
                                                        <img src={steak2} width="40px" height="40px" alt="" />
                                                    </span> Brochettes de poulet pakistanaise</td>
                                                    <td>Grillades</td>
                                                    <td>19</td>
                                                    <td>65 DH</td>
                                                    <td>1235 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>4149</td>
                                                    <td><span>
                                                        <img src={steak} width="40px" height="40px" alt="" />
                                                    </span> Mixed grill cheese</td>
                                                    <td>Grillades</td>
                                                    <td>25</td>
                                                    <td>110 DH</td>
                                                    <td>2750 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>5151</td>
                                                    <td><span>
                                                        <img src={cheescake} width="40px" height="40px" alt="" />
                                                    </span> Tiramisu</td>
                                                    <td>Desserts</td>
                                                    <td>16</td>
                                                    <td>35 DH</td>
                                                    <td>560 DH</td>
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
                                                    <td>10</td>
                                                    <td>39 DH</td>
                                                    <td>390 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>6161</td>
                                                    <td><span>
                                                        <img src={cheescake} width="40px" height="40px" alt="" />
                                                    </span> Nutella</td>
                                                    <td>Crepes</td>
                                                    <td>18</td>
                                                    <td>29 DH</td>
                                                    <td>522 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>6162</td>
                                                    <td><span>
                                                        <img src={cheescake} width="40px" height="40px" alt="" />
                                                    </span> Tagliatelle</td>
                                                    <td>Crepes</td>
                                                    <td>19</td>
                                                    <td>29 DH</td>
                                                    <td>551 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>6163</td>
                                                    <td><span>
                                                        <img src={cheescake} width="40px" height="40px" alt="" />
                                                    </span> Crepe surprise</td>
                                                    <td>Crepes</td>
                                                    <td>22</td>
                                                    <td>42 DH</td>
                                                    <td>924 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>7171</td>
                                                    <td><span>
                                                        <img src={milkshake} width="40px" height="40px" alt="" />
                                                    </span> Nutella</td>
                                                    <td>Milkshakes</td>
                                                    <td>31</td>
                                                    <td>45 DH</td>
                                                    <td>1395 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>7172</td>
                                                    <td><span>
                                                        <img src={milkshake} width="40px" height="40px" alt="" />
                                                    </span> Fruits rouges</td>
                                                    <td>Milkshakes</td>
                                                    <td>23</td>
                                                    <td>39 DH</td>
                                                    <td>897 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>7173</td>
                                                    <td><span>
                                                        <img src={milkshake} width="40px" height="40px" alt="" />
                                                    </span> Vanille</td>
                                                    <td>Milkshakes</td>
                                                    <td>19</td>
                                                    <td>36 DH</td>
                                                    <td>684 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>8181</td>
                                                    <td><span>
                                                        <img src={jus} width="40px" height="40px" alt="" />
                                                    </span> Jus d'orange</td>
                                                    <td>Boissons</td>
                                                    <td>47</td>
                                                    <td>42 DH</td>
                                                    <td>1974 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>8182</td>
                                                    <td><span>
                                                        <img src={jus} width="40px" height="40px" alt="" />
                                                    </span> Jus citron</td>
                                                    <td>Boissons</td>
                                                    <td>14</td>
                                                    <td>22 DH</td>
                                                    <td>308 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>8183</td>
                                                    <td><span>
                                                        <img src={jus} width="40px" height="40px" alt="" />
                                                    </span> Jus de fraise</td>
                                                    <td>Boissons</td>
                                                    <td>18</td>
                                                    <td>22 DH</td>
                                                    <td>396 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>8184</td>
                                                    <td><span>
                                                        <img src={jus} width="40px" height="40px" alt="" />
                                                    </span> Jus exotique</td>
                                                    <td>Boissons</td>
                                                    <td>15</td>
                                                    <td>25 DH</td>
                                                    <td>375 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>8185</td>
                                                    <td><span>
                                                        <img src={jus} width="40px" height="40px" alt="" />
                                                    </span> Eau minerale</td>
                                                    <td>Boissons</td>
                                                    <td>78</td>
                                                    <td>10 DH</td>
                                                    <td>780 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>8186</td>
                                                    <td><span>
                                                        <img src={jus} width="40px" height="40px" alt="" />
                                                    </span> Eau gazeuse oulmes</td>
                                                    <td>Boissons</td>
                                                    <td>15</td>
                                                    <td>12 DH</td>
                                                    <td>180 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>8187</td>
                                                    <td><span>
                                                        <img src={jus} width="40px" height="40px" alt="" />
                                                    </span> Soda 0.33L</td>
                                                    <td>Boissons</td>
                                                    <td>78</td>
                                                    <td>14 DH</td>
                                                    <td>1092 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>8188</td>
                                                    <td><span>
                                                        <img src={jus} width="40px" height="40px" alt="" />
                                                    </span> Nespresso</td>
                                                    <td>Boissons</td>
                                                    <td>38</td>
                                                    <td>19 DH</td>
                                                    <td>722 DH</td>
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


