import React from 'react'
import '../../../App.css'

const ProductList = () => {
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
                            <div className="orders">
                                <div className="orders-card">
                                    <div className="card-header">
                                        <h3>Orders</h3>
                                    </div>
                                    <div className="card-body">
                                        <table width="100%" id="table">
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
                                                <tr>
                                                    <td>10</td>
                                                    <td>Faux Filet</td>
                                                    <td>Mohamed</td>
                                                    <td>Marrakech</td>
                                                    <td>
                                                        <span className="status cancelled">cancelled</span>

                                                    </td>
                                                    <td>105 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>11</td>
                                                    <td>Salade Cesar</td>
                                                    <td>Mehdi</td>
                                                    <td>Marrakech</td>
                                                    <td>
                                                        <span className="status progress">in progress</span>

                                                    </td>
                                                    <td>45 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>12</td>
                                                    <td>Cheesecake</td>
                                                    <td>Sohaib</td>
                                                    <td>Marrakech</td>
                                                    <td>
                                                        <span className="status progress"> in progress</span>

                                                    </td>
                                                    <td>35 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>13</td>
                                                    <td>Milkshake</td>
                                                    <td>Chaimae</td>
                                                    <td>Marrakech</td>
                                                    <td>
                                                        <span className="status delivered"> Delivered</span>

                                                    </td>
                                                    <td>25 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>14</td>
                                                    <td>Burger</td>
                                                    <td>Mohamed</td>
                                                    <td>Marrakech</td>
                                                    <td>
                                                        <span className="status progress">in progress</span>

                                                    </td>
                                                    <td>80 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>15</td>
                                                    <td>Burger</td>
                                                    <td>Amine</td>
                                                    <td>Marrakech</td>
                                                    <td>
                                                        <span className="status cancelled">cancelled</span>

                                                    </td>
                                                    <td>80 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>16</td>
                                                    <td>Bruschetta</td>
                                                    <td>Laila</td>
                                                    <td>Marrakech</td>
                                                    <td>
                                                        <span className="status progress"> in progress</span>

                                                    </td>
                                                    <td>39 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>17</td>
                                                    <td>Tiramisu</td>
                                                    <td>Mouad</td>
                                                    <td>Marrakech</td>
                                                    <td>
                                                        <span className="status progress">in progress</span>

                                                    </td>
                                                    <td>32 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>18</td>
                                                    <td>Jus Exotique</td>
                                                    <td>Nada</td>
                                                    <td>Marrakech</td>
                                                    <td>
                                                        <span className="status delivered">Delivered</span>

                                                    </td>
                                                    <td>25 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>19</td>
                                                    <td>Faux Filet</td>
                                                    <td>Mohamed</td>
                                                    <td>Marrakech</td>
                                                    <td>
                                                        <span className="status cancelled">cancelled</span>

                                                    </td>
                                                    <td>105 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>20</td>
                                                    <td>Salade Cesar</td>
                                                    <td>Mehdi</td>
                                                    <td>Marrakech</td>
                                                    <td>
                                                        <span className="status progress">in progress</span>

                                                    </td>
                                                    <td>45 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>21</td>
                                                    <td>Cheesecake</td>
                                                    <td>Sohaib</td>
                                                    <td>Marrakech</td>
                                                    <td>
                                                        <span className="status progress"> in progress</span>

                                                    </td>
                                                    <td>35 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>22</td>
                                                    <td>Milkshake</td>
                                                    <td>Chaimae</td>
                                                    <td>Marrakech</td>
                                                    <td>
                                                        <span className="status delivered"> Delivered</span>

                                                    </td>
                                                    <td>25 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>23</td>
                                                    <td>Burger</td>
                                                    <td>Mohamed</td>
                                                    <td>Marrakech</td>
                                                    <td>
                                                        <span className="status progress">in progress</span>

                                                    </td>
                                                    <td>80 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>24</td>
                                                    <td>Burger</td>
                                                    <td>Amine</td>
                                                    <td>Marrakech</td>
                                                    <td>
                                                        <span className="status cancelled">cancelled</span>

                                                    </td>
                                                    <td>80 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>25</td>
                                                    <td>Bruschetta</td>
                                                    <td>Laila</td>
                                                    <td>Marrakech</td>
                                                    <td>
                                                        <span className="status progress"> in progress</span>

                                                    </td>
                                                    <td>39 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>26</td>
                                                    <td>Tiramisu</td>
                                                    <td>Mouad</td>
                                                    <td>Marrakech</td>
                                                    <td>
                                                        <span className="status progress">in progress</span>

                                                    </td>
                                                    <td>32 DH</td>
                                                </tr>
                                                <tr>
                                                    <td>27</td>
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


