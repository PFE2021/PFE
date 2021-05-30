import React from 'react'
import "../../../App.css"
import axios from 'axios'
import profile1 from '../../../images/profile1.jpg'
import profile2 from '../../../images/profile2.jpg'
import profile3 from '../../../images/profile3.jpg'
import profile4 from '../../../images/profile4.jpg'

const Customers = () => {
    /*this.state = {
        Customers: []
      }
  
     componentDidMount(
        axios.get('\api')
        .then(res =>{
          const Customers = res.data;
          this.setState({Customers})
        })
      )*/

    return (
        <div>
            <body>
            <div class="main-content">
            <main>
        <div className="recent-grid">
        <div className="orders">
          <div className="orders-card" style={{width:'135%', marginLeft:'90px'}}>
              <div className="card-header">
                  <h3 style={{marginLeft:'100px'}}>Customers</h3>
              </div>
            <div className="card-body" style={{marginLeft:'100px'}}>
            <div>
                <div className="left">
                    <img src={profile4} width="40px" height="40px" alt=""/>
                    <label>Nada <span className="product">Jus Exotique</span> <span style={{float:"right" ,marginRight: "200px"}}>&#9733; &#9733; &#9733; &#9733; &#9734;</span></label><br/>
                </div>
                <div className="content">
                    <label className="date">Mars 24, 2021</label><br/><br/>
                    <label>Best&nbsp; juice &nbsp;i've &nbsp;ever &nbsp;had, &nbsp;the &nbsp;combination &nbsp;was &nbsp;perfect. &nbsp;Just &nbsp;amazing .</label><br/><br/>
                    <i className="las la-comment-alt"></i> &nbsp;5 &nbsp;
                    <i className="las la-paperclip"></i> &nbsp;2
                </div>
                <hr/>
            </div>
            <div>
                <div className="left">
                    <img src={profile3} width="40px" height="40px" alt=""/>
                    <label>Mohamed <span className="product">Faux Filet </span> <span style={{float: "right", marginRight: "200px"}}>&#9733; &#9733; &#9733; &#9733; &#9734;</span></label><br/>
                </div>
                <div className="content">
                    <label className="date">Mars 24, 2021</label><br/><br/>
                    <label>Amazing &nbsp;medium &nbsp;rare &nbsp;steak, &nbsp;with &nbsp;the &nbsp;potato &nbsp;purre &nbsp;it &nbsp;was &nbsp;really &nbsp;good .</label><br/><br/>
                    <i className="las la-comment-alt"></i> &nbsp;14 &nbsp;
                    <i className="las la-paperclip"></i> &nbsp;10
                </div>
                <hr/>
            </div>

            <div>
                <div className="left">
                    <img src={profile1} width="40px" height="40px" alt=""/>
                    <label>Mehdi <span className="product">Tiramisu</span> <span style={{float: "right", marginRight: "200px"}}>&#9733; &#9733; &#9733; &#9733; &#9733;</span></label><br/>
                </div>
                <div className="content">
                    <label className="date">Mars 24, 2021</label><br/><br/>
                    <label>Good &nbsp;dessert &nbsp;to &nbsp;get &nbsp;after &nbsp;a &nbsp;steak ,&nbsp;sweet &nbsp;and &nbsp;taste &nbsp;really &nbsp;good .</label><br/><br/>
                    <i className="las la-comment-alt"></i> &nbsp;32 &nbsp;
                    <i className="las la-paperclip"></i> &nbsp;15
                </div>
                <hr/>
            </div>

            <div>
                <div className="left">
                    <img src={profile3} width="40px" height="40px" alt=""/>
                    <label>Mohamed <span className="product">Faux Filet </span> <span style={{float: "right", marginRight: "200px"}}>&#9733; &#9733; &#9733; &#9733; &#9733;</span></label><br/>
                </div>
                <div className="content">
                    <label className="date">Mars 24, 2021</label><br/><br/>
                    <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ...</label><br/><br/>
                    <i className="las la-comment-alt"></i> &nbsp;15 &nbsp;
                    <i className="las la-paperclip"></i> &nbsp;12
                </div>
                <hr/>
            </div>

            <div>
                <div className="left">
                    <img src={profile3} width="40px" height="40px" alt=""/>
                    <label>Mohamed <span className="product">Cheesecake </span> <span style={{float: "right", marginRight: "200px"}}>&#9733; &#9733; &#9733; &#9734; &#9734;</span></label><br/>
                </div>
                <div className="content">
                    <label className="date">Mars 24, 2021</label><br/><br/>
                    <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ...</label><br/><br/>
                    <i className="las la-comment-alt"></i> &nbsp;42 &nbsp;
                    <i className="las la-paperclip"></i> &nbsp;27
                </div>
                <hr/>
            </div>

            <div>
                <div className="left">
                    <img src={profile2} width="40px" height="40px" alt=""/>
                    <label>Laila <span className="product">Bruschetta</span> <span style={{float: "right", marginRight: "200px"}}>&#9733; &#9733; &#9733; &#9733; &#9734;</span></label><br/>
                </div>
                <div className="content">
                    <label className="date">Mars 24, 2021</label><br/><br/>
                    <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ...</label><br/><br/>
                    <i className="las la-comment-alt"></i> &nbsp;15 &nbsp;
                    <i className="las la-paperclip"></i> &nbsp;12
                </div>
                <hr/>
            </div>

            <div>
                <div className="left">
                    <img src={profile1} width="40px" height="40px" alt=""/>
                    <label>Mehdi <span className="product">Burger </span> <span style={{float: "right", marginRight: "200px"}}>&#9733; &#9733; &#9733; &#9733; &#9733;</span></label><br/>
                </div>
                <div className="content">
                    <label className="date">Mars 24, 2021</label><br/><br/>
                    <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ...</label><br/><br/>
                    <i className="las la-comment-alt"></i> &nbsp;15 &nbsp;
                    <i className="las la-paperclip"></i> &nbsp;12
                </div>
                <hr/>
            </div>

            <div>
                <div className="left">
                    <img src={profile4} width="40px" height="40px" alt=""/>
                    <label>Nada <span className="product">Salade Cesar </span> <span style={{float: "right", marginRight: "200px"}}>&#9733; &#9733; &#9733; &#9733; &#9734;</span></label><br/>
                </div>
                <div className="content">
                    <label className="date">Mars 24, 2021</label><br/><br/>
                    <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ...</label><br/><br/>
                    <i className="las la-comment-alt"></i> &nbsp;10 &nbsp;
                    <i className="las la-paperclip"></i> &nbsp;12
                </div>
                <hr/>
            </div>

            <div>
                <div className="left">
                    <img src={profile3} width="40px" height="40px" alt=""/>
                    <label>Mohamed <span className="product">Faux de Boeuf </span> <span style={{float: "right", marginRight: "200px"}}>&#9733; &#9733; &#9733; &#9733; &#9733;</span></label><br/>
                </div>
                <div className="content">
                    <label className="date">Mars 24, 2021</label><br/><br/>
                    <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ...</label><br/><br/>
                    <i className="las la-comment-alt"></i> &nbsp;21 &nbsp;
                    <i className="las la-paperclip"></i> &nbsp;13
                </div>
                <hr/>
            </div>

            <div>
                <div className="left">
                    <img src={profile4} width="40px" height="40px" alt=""/>
                    <label>Nada <span className="product">Faux Filet </span> <span style={{float: "right", marginRight: "200px"}}>&#9733; &#9733; &#9733; &#9734; &#9734;</span></label><br/>
                </div>
                <div className="content">
                    <label className="date">Mars 24, 2021</label><br/><br/>
                    <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ...</label><br/><br/>
                    <i className="las la-comment-alt"></i> &nbsp;28 &nbsp;
                    <i className="las la-paperclip"></i> &nbsp;2
                </div>
                <hr/>
            </div>

            <div>
                <div className="left">
                    <img src={profile2} width="40px" height="40px" alt=""/>
                    <label>Laila <span className="product">Tarticlette</span> <span style={{float: "right", marginRight: "200px"}}>&#9733; &#9733; &#9733; &#9733; &#9734;</span></label><br/>
                </div>
                <div className="content">
                    <label className="date">Mars 24, 2021</label><br/><br/>
                    <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ...</label><br/><br/>
                    <i className="las la-comment-alt"></i> &nbsp;5 &nbsp;
                    <i className="las la-paperclip"></i> &nbsp;8
                </div>
                <hr/>
            </div>
                
            </div>
          </div><br/>
        </div>
        </div>
        
    </main>
    </div>
            </body>
        </div>
        
    )
}

export default Customers
