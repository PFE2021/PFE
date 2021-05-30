import React from 'react'
import "../../../App.css"
import burger from '../../../images/burger.jpg'

const AddProduct = () => {
    return (
                <main>
                    <div className="recent-grid1">
                        <div className="add">
                            <div className="add-card">
                                <div className="card-header">
                                    <h3>Product Form</h3>
                                </div>
                                <div className="card-body">
                                <br/><br/><label >Product Name</label><br /><br/>
                                    <input type="text" name="name" /><br /><br/>
                                    <label>Category</label><br /><br/>
                                    <select name="category">
                                        <option>Entrees</option>
                                        <option>Bruschetta</option>
                                        <option>Grillades</option>
                                        <option>Desserts</option>
                                        <option>Pates</option>
                                        <option>Crepes</option>
                                        <option>Milkshakes</option>
                                        <option>Boissons</option>
                                    </select><br /><br/>
                                    <label>Description</label><br /><br/>
                                    <textarea name="description" cols="30" rows="4"></textarea><br />
                                    <label>Images</label><br /><br/>
                                    <input type="text" /><br /><br/><br/>
                                    <button className="pro">Add Product</button>
                                </div>
                            </div><br />
                        </div>



                        <div className="add">
                            <div className="add-card">
                                <div className="card-header">
                                    <h3>Product</h3>
                                </div>
                                <div className="card-body">
                                    <div className="img">
                                        <img src={burger} width="100%" alt="" />
                                    </div><br /><br />
                                    <label>Status available</label>
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label><br /><br />
                                    <label>Discount</label>
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label><br /><br />

                                    <button className="save">Save</button>
                                    <button className="saveadd">Save and Add</button>
                                </div>
                            </div><br />
                        </div>
                    </div>

                </main>
    )
}

export default AddProduct
