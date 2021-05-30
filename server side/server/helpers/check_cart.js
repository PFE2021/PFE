module.exports.checkCarts = async(temp_cart,user_cart)=>{

    const check_for_duplicate = user_cart.Products.map(el=>{
      let returned_item = el

      temp_cart.Products.map(t=>{
          if(el.id == t.id){
          returned_item.quantity += t.quantity
          }
      })
      return returned_item
  })
  //this one check for non existing Products of temp_cart to add them latet
  let check_for_new = temp_cart.Products.map(t=>{
      let returned_item = t

      //if there is an item that have the same id will be added to the checking array
      let checking = check_for_duplicate.filter(c=>{
      return returned_item.id == c.id
      })

      //this if statement goal is if there is an item in the checking array that means 
      // the item is already exist in the duplicate Array and there is no need to added it
      if(checking.length > 0){
      return null
      }
      //and if the item doesn't exist it return it
      else {
      return returned_item

      }

  })
  //just to filter the null values
  check_for_new = check_for_new.filter(el=>el !== null)
  //the finall array 
  return [...check_for_new,...check_for_duplicate]

}