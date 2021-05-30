import React from 'react'
import axios from 'axios'
import "../../../App.css"
import steak from '../../../images/steak.jpg'
import salade from '../../../images/salade.jpg'
import burger from '../../../images/burger.jpg'
import steak2 from '../../../images/steak2.jpg'
import brushetta from '../../../images/brushta.jpg'

const Dashboard = () => {
    return (
        <html lang="en">

<head>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1"/>
  <title>Borkan admin</title>
  <link rel="stylesheet"
    href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />
  <link rel="stylesheet" type="text/css" href="style.css" />
</head>

<body>
<div className="main-content" id='page'>
        <main>
      <div className="cards">
        <div className="card-single">
          <div>
            <h1>54</h1>
            <span>Customers</span>
          </div>
          <div>
            <span className="las la-users"></span>
          </div>
        </div>
        <div className="card-single">
          <div>
            <h1>14</h1>
            <span>Orders</span>
          </div>
          <div>
            <span className="las la-clipboard"></span>
          </div>
        </div>
        <div className="card-single">
          <div>
            <h1>89</h1>
            <span>Sales</span>
          </div>
          <div>
            <span className="las la-shopping-bag"></span>
          </div>
        </div>
        <div className="card-single">
          <div>
            <h1>78K DH</h1>
            <span>Income</span>
          </div>
          <div>
            <span className="lab la-google-wallet"></span>
          </div>
        </div>
      </div>

      <div className="recent-grid">
        <div className="projects">
          <div className="card">
            <div className="card-header">
              <h2>Recent orders</h2>

              <button>
                See all <span className="las la-arrow-right"></span>
              </button>
            </div>
            <div className="card-body">
              <table width="100%">
                <thead>
                  <tr>
                    <td>Food item</td>
                    <td>Price</td>
                    <td>Product ID</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span><img src={steak} width="30px" height="30px" alt=""/></span>Faux Filet</td>
                    <td>105</td>
                    <td>271782</td>
                  </tr>
                  <tr>
                    <td><span><img src={steak2} width="30px" height="30px" alt=""/></span>Bor'kefta</td>
                    <td>76</td>
                    <td>
                      27192
                    </td>
                  </tr>
                  <tr>
                    <td><span><img src={burger} width="30px" height="30px" alt=""/></span>Burger</td>
                    <td>80</td>
                    <td>
                      17825
                    </td>
                  </tr>
                  <tr>
                    <td><span><img src={salade} width="30px" height="30px" alt=""/></span>Salade César</td>
                    <td>45</td>
                    <td>
                      36729
                    </td>
                  </tr>
                  <tr>
                    <td><span><img src={brushetta} width="30px" height="30px" alt=""/></span>Bruschetta</td>
                    <td>55</td>
                    <td>
                      42516
                    </td>
                  </tr>
                  <tr>
                    <td><span><img src={burger} width="30px" height="30px" alt=""/></span>Burger</td>
                    <td>80</td>
                    <td>
                      17825
                    </td>
                  </tr>
                  <tr>
                    <td><span><img src={steak} width="30px" height="30px" alt=""/></span>Faux Filet</td>
                    <td>105</td>
                    <td>
                      271782
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/*<!-- <div className="customers">
          <div className="card">
            <div className="card-header">
              <h2>New customers</h2>

              <button>
                See all <span className="las la-arrow-right"></span>
              </button>
            </div>
            <div className="card-body">
              <div className="customer">
                <div className="info">
                  <img src="images/profile2.jpg" width="40px" height="40px" alt="">
                  <div>
                    <h4>Lewis S. Cunningham</h4>
                    <small>CEO</small>
                  </div>
                </div>
                <div className="contact">
                  <span className="las la-user-circle"></span>
                  <span className="las la-comment"></span>
                  <span className="las la-phone"></span>
                </div>
              </div>
              <div className="customer">
                <div className="info">
                  <img src="images/profile3.jpg" width="40px" height="40px" alt="">
                  <div>
                    <h4>Lewis S. Cunningham</h4>
                    <small>CEO</small>
                  </div>
                </div>
                <div className="contact">
                  <span className="las la-user-circle"></span>
                  <span className="las la-comment"></span>
                  <span className="las la-phone"></span>
                </div>
              </div>
              <div className="customer">
                <div className="info">
                  <img src="images/profile2.jpg" width="40px" height="40px" alt="">
                  <div>
                    <h4>Lewis S. Cunningham</h4>
                    <small>CEO</small>
                  </div>
                </div>
                <div className="contact">
                  <span className="las la-user-circle"></span>
                  <span className="las la-comment"></span>
                  <span className="las la-phone"></span>
                </div>
              </div>
              <div className="customer">
                <div className="info">
                  <img src="images/profile3.jpg" width="40px" height="40px" alt="">
                  <div>
                    <h4>Lewis S. Cunningham</h4>
                    <small>CEO</small>
                  </div>
                </div>
                <div className="contact">
                  <span className="las la-user-circle"></span>
                  <span className="las la-comment"></span>
                  <span className="las la-phone"></span>
                </div>
              </div>
              <div className="customer">
                <div className="info">
                  <img src="images/profile4.jpg" width="40px" height="40px" alt="">
                  <div>
                    <h4>Lewis S. Cunningham</h4>
                    <small>CEO</small>
                  </div>
                </div>
                <div className="contact">
                  <span className="las la-user-circle"></span>
                  <span className="las la-comment"></span>
                  <span className="las la-phone"></span>
                </div>
              </div>
              <div className="customer">
                <div className="info">
                  <img src="images/profile1.jpg" width="40px" height="40px" alt="">
                  <div>
                    <h4>Lewis S. Cunningham</h4>
                    <small>CEO</small>
                  </div>
                </div>
                <div className="contact">
                  <span className="las la-user-circle"></span>
                  <span className="las la-comment"></span>
                  <span className="las la-phone"></span>
                </div>
              </div>
            </div>
          </div>
         </div> -->*} */}
        <div className="monthly-revenue">
          <div className="card">
            <div className="card-header">
              <h2>Monthly revenue</h2>
            </div>
            <div className="card-body">
              <h4>Week 1</h4>
              <div className="w3-light-grey w3-round-xlarge">
                <div className="w3-container w3-deep-orange w3-round-xlarge" style={{width:'25%', textAlign: 'center'}}>25%
                </div>
              </div>
              <h4>Week 2</h4>
              <div className="w3-light-grey w3-round-xlarge">
                <div className="w3-container w3-deep-orange w3-round-xlarge"  style={{width:'50%', textAlign: 'center'}}>50%
                </div>
              </div>
              <h4>Week 3</h4>
              <div className="w3-light-grey w3-round-xlarge">
                <div className="w3-container w3-deep-orange w3-round-xlarge"  style={{width:'25%', textAlign: 'center'}}>25%
                </div>
              </div>
              <h4>Week 4</h4>
              <div className="w3-light-grey w3-round-xlarge">
                <div className="w3-container w3-deep-orange w3-round-xlarge"  style={{width:'100%', textAlign: 'center'}}>100%
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="orders">
          <div className="orders-card">
            <div className="card-header">
              <h2>Recent placed orders</h2>

              <button>
                See all <span className="las la-arrow-right"></span>
              </button>
            </div>
            <div className="card-body">
              <table width="100%">
                <thead>
                  <tr>
                    <td>Order ID</td>
                    <td>Order Name</td>
                    <td>Customer Name</td>
                    <td>Location</td>
                    <td>Order Status</td>
                    <td>Price</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Faux Filet</td>
                    <td>Mohamed</td>
                    <td>Marrakech</td>
                    <td>
                      <span className="status cancelled">cancelled</span>
                      
                    </td>
                    <td>105 DH</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Salade Cesar</td>
                    <td>Mehdi</td>
                    <td>Marrakech</td>
                    <td>
                      <span className="status progress">in progress</span>
                      
                    </td>
                    <td>45 DH</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Cheesecake</td>
                    <td>Sohaib</td>
                    <td>Marrakech</td>
                    <td>
                      <span className="status progress"> in progress</span>
                     
                    </td>
                    <td>35 DH</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Milkshake</td>
                    <td>Chaimae</td>
                    <td>Marrakech</td>
                    <td>
                      <span className="status delivered"> Delivered</span>
                     
                    </td>
                    <td>25 DH</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Burger</td>
                    <td>Mohamed</td>
                    <td>Marrakech</td>
                    <td>
                      <span className="status progress">in progress</span>
                      
                    </td>
                    <td>80 DH</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Burger</td>
                    <td>Amine</td>
                    <td>Marrakech</td>  
                    <td>
                      <span className="status cancelled">cancelled</span>
                      
                    </td>
                    <td>80 DH</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Bruschetta</td>
                    <td>Laila</td>
                    <td>Marrakech</td>
                    <td>
                      <span className="status progress"> in progress</span>
                     
                    </td>
                    <td>39 DH</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Tiramisu</td>
                    <td>Mouad</td>
                    <td>Marrakech</td>
                    <td>
                      <span className="status progress">in progress</span>
                      
                    </td>
                    <td>32 DH</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Jus Exotique</td>
                    <td>Nada</td>
                    <td>Marrakech</td>
                    <td>
                      <span className="status delivered">Delivered</span>
                      
                    </td>
                    <td>25 DH</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div><br/>
        </div>
        </div>
        <div className="customers">
      <div className="customers-card">
        <div className="card-header">
          <h2>Trending Orders</h2>
        </div>
        <div className="card-body">
          <div className="card">
            <div className="card-image1"></div>
            <div className="card-text">
              <span className="date">Product</span>
              <h2>Burger</h2>
              <p>Steak haché, jambon de dinde, sauce blanche.</p>
            </div>
            <div className="card-stats">
              <div className="stat">
                <div className="value">28</div>
                <div className="type">orders</div>
              </div>
              <div className="stat border">
                <div className="value">80<sup id='sup'>DH</sup></div>
                <div className="type">Price</div>
              </div>
              <div className="stat">
                <div className="value">2240<sup id='sup'>DH</sup></div>
                <div className="type">Income</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-image2"></div>
            <div className="card-text">
              <span className="date">Product</span>
              <h2>Salade Cesar</h2>
              <p>Salade romaine, croutons à l'ail, sauce césar.</p>
            </div>
            <div className="card-stats">
              <div className="stat">
                <div className="value">14</div>
                <div className="type">orders</div>
              </div>
              <div className="stat border">
                <div className="value">45<sup id='sup'>DH</sup></div>
                <div className="type">Price</div>
              </div>
              <div className="stat">
                <div className="value">630<sup id='sup'>DH</sup></div>
                <div className="type">Income</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-image3"></div>
            <div className="card-text">
              <span className="date">Product</span>
              <h2>Filet de boeuf</h2>
              <p>Filet de boeuf, purée de pommes de terre</p>
            </div>
            <div className="card-stats">
              <div className="stat">
                <div className="value">10</div>
                <div className="type">orders</div>
              </div>
              <div className="stat border">
                <div className="value">140<sup id='sup'>DH</sup></div>
                <div className="type">Price</div>
              </div>
              <div className="stat">
                <div className="value">1400<sup id='sup'>DH</sup></div>
                <div className="type">Income</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
    </div>
</body>
</html>
    )
}

export default Dashboard
