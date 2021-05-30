import React, {useState} from 'react'
import '../../../App.css'
import axios from 'axios'

const Category = () => {
    /*this.state = {
      categories: []
    }

    /*componentDidMount(
      axios.get('\api')
      .then(res =>{
        const categories = res.data;
        this.setState({categories})
      })
    )*/

    return (
      <div>
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1"/>
      <title>Borkan admin</title>
      <link rel="stylesheet"
        href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />
      <link rel="stylesheet" type="text/css" href="style.css" />
    </head>
        <main>
        <div class="recent-grid1">
        <div class="add">
          <div class="add-card">
              <div class="card-header">
                  <h3>Categories</h3>
              </div>
            <div class="card-body">
                <button id="selected" class="cate">Entrees</button> <br/>
                <button class="cate">Bruschetta</button> <br/>
                <button class="cate">Grillades</button> <br/>
                <button class="cate">Desserts</button> <br/>
                <button class="cate">Pates</button> <br/>
                <button class="cate">Crepes</button> <br/>
                <button class="cate">Milkshakes</button> <br/>
                <button class="cate">Boissons</button> <br/>
                <button id="ADD" class="cate">Add Category</button>
                <button id="Del" class="cate">Delete Category</button>
            </div>
          </div><br/>
        </div>



        <div class="add">
            <div class="add-card">
                <div class="card-header">
                    <h3>Products per category</h3>
                </div>
              <div class="card-body">
                <table class="prod">
                  <tr>
                    <th>Product id</th>
                    <th>Product Name</th>
                    <th></th>
                  </tr>
                  <tr>
                    <td>110121</td>
                    <td>salade1</td>
                    <td><button class="btn trash"><i class="fa fa-trash"></i></button></td>
                  </tr>
                  <tr>
                    <td>110121</td>
                    <td>salade1</td>
                    <td><button class="btn trash"><i class="fa fa-trash"></i></button></td>
                  </tr>
                  <tr>
                    <td>110121</td>
                    <td>salade1</td>
                    <td><button class="btn trash"><i class="fa fa-trash"></i></button></td>
                  </tr>
                  <tr>
                    <td>110121</td>
                    <td>salade1</td>
                    <td><button class="btn trash"><i class="fa fa-trash"></i></button></td>
                  </tr>
                  <tr>
                    <td>110121</td>
                    <td>salade1</td>
                    <td><button class="btn trash"><i class="fa fa-trash"></i></button></td>
                  </tr>
                  <tr>
                    <td>110121</td>
                    <td>salade1</td>
                    <td><button class="btn trash"><i class="fa fa-trash"></i></button></td>
                  </tr>
                  <tr>
                    <td>110121</td>
                    <td>salade1</td>
                    <td><button class="btn trash"><i class="fa fa-trash"></i></button></td>
                  </tr>
                  <tr>
                    <td>110121</td>
                    <td>salade1</td>
                    <td><button class="btn trash"><i class="fa fa-trash"></i></button></td>
                  </tr>
                </table>
              </div>
            </div><br/>
          </div>
        </div>
    </main>
    </div>
    )
}

export default Category
