import React from 'react';
import { Image, Text, View ,StyleSheet} from 'react-native';
import { TouchableOpacity,TouchableHighlight } from 'react-native-gesture-handler';
import {AntDesign,MaterialIcons} from 'react-native-vector-icons';
import { SwipeListView } from 'react-native-swipe-list-view';
const f =require('../Images/f.jpeg');

const orders=()=> {
  const [count, setCount] = React.useState(1)
  const restaurantData = [
    {
        id: 1,
        name: "ByProgrammers Burger",
        priceRating: '20dh',
        photo: f,
    },
    {
        id: 2,
        name: "ByProgrammers Pizza",
        priceRating: '100dh',
        photo:f,
    },
    {
        id: 3,
        name: "ByProgrammers Hotdogs",
        priceRating: '20dh',
        photo:f,
    }]
    function orderslist(){
      return(
        <View>
      <View style={{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:50
      }}>
        <Image source={require('../Images/iwwa_swipe.png')} />
        <Text style={{
          color:'#F47B0A',
          fontSize:10
          }}>swipe on an item to delete</Text>
      </View>
      <SwipeListView
                  useFlatList
                  data={restaurantData}
                  renderItem={ ({item}) => (
                    <View style={{
                      width:300,
                      height:80,
                      flexDirection:'row',
                      backgroundColor:'#17171a',
                      borderRadius:16,
                      justifyContent: 'space-around',
                      marginVertical:10,
                      marginHorizontal:40
                    }}>
                      <Image source={item.photo} style={{
                      width:80,
                      height:80,
                      borderRadius:16,
                      marginRight:10
                    }} />
                    <View style={{
                      justifyContent:"space-around",
                      paddingVertical:10,
                      
                        }}>
                      <Text style={{
                        color:'white'
              
                        }}>{item.name}</Text>
                      <Text style={{
                        color:'#F47B0A'
              
                        }}>{item.priceRating}</Text>
                    </View>
                    <View style={{
                        backgroundColor:'#FA4A0C',
                        borderRadius:12,
                        flexDirection:"row",
                        borderRadius:16,
                        width:50,
                        height:20,
                        alignContent:'center',
                        alignItems:'center',
                        justifyContent: 'space-around',
                        marginVertical:45,
                        marginHorizontal:10,
              
                        }}>
                      <TouchableOpacity  onPress={()=>(count>1)? setCount(count-1):1} >
                      <AntDesign name="minus" color='white' />
                      </TouchableOpacity>
                      <Text style={{
                      color:'white'
                    }}>{count}</Text>
                      <TouchableOpacity onPress={()=>setCount(count+1)}>
                      <AntDesign name="plus" color='white' />
                        </TouchableOpacity>
                    </View>
                    </View>
                  )}
                  renderHiddenItem={ () => (
                    <View style={{
                      flexDirection:"row",
                      alignSelf:'flex-end',
                      justifyContent:'space-around',

                      marginHorizontal:40,
                      marginVertical:30,
            
                      }}>
                    <TouchableOpacity  onPress={()=>(count>1)? setCount(count-1):1} style={{
                      backgroundColor:'#FA4A0C',
                      borderRadius:50,
                      width:30,
                      height:30,
                      marginHorizontal:10,
                      alignItems:'center',
                      justifyContent:'center'
            
                      }} >
                    <AntDesign name="delete" color='white' size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setCount(count+1)} style={{
                      backgroundColor:'#FA4A0C',
                      borderRadius:50,
                      width:30,
                      height:30,
                      alignItems:'center',
                      justifyContent:'center'
            
                      }}>
                    <MaterialIcons name="favorite-outline" color='white' size={20} />
                      </TouchableOpacity>
                  </View>
                  )}
                  rightOpenValue={-75}/>

        
              <TouchableOpacity onPress={() => {}}>
                <Text style={{        
                  marginBottom:60,
                      height: 70,
                      width:300,
                      borderWidth: 1,
                      borderColor:'#F47B0A',
                      color:'#fffcfc',
                      borderRadius: 30,
                      textAlign:"center",
                      textAlignVertical:"center",
                      alignSelf:'center',
                      fontSize:20,
                      marginTop:20,}}
                      >complete order</Text>
              </TouchableOpacity> 
            </View>
      );
    };
    function noOrders(){
      return(<View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',

        marginHorizontal:40,
        marginVertical:30,

        }}>
        <View style={{
          marginVertical:80

        }}>
        <Image source={require('../icons/orderlist.png')}/>
        <Text style={{        
                      color:'orange',
                      textAlign:"center",
                      textAlignVertical:"center",
                      fontSize:26,
                      marginTop:20,}}>No orders yet</Text>
        </View>

             <TouchableOpacity onPress={() => {}}>
                <Text style={{        
                      height: 70,
                      width:300,
                      borderWidth: 1,
                      borderColor:'#F47B0A',
                      color:'#fffcfc',
                      borderRadius: 30,
                      textAlign:"center",
                      textAlignVertical:"center",
                      fontSize:20,
                      marginTop:20,}}
                      >Start ordering</Text>
              </TouchableOpacity> 
            
      </View>);
    }
    if(restaurantData.length>0)
    {
  return (
    
    <View style={{
      flex:1,
      backgroundColor:'#0D0D0D',
      alignItems: "center",
      justifyContent:"space-between"
    }}>
      <View style={{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:30
      }}>
        
        <Text style={{
          color:'white',
          }}>Cart</Text>
      </View>
      {orderslist()}
    </View>
  );}
  else{
    return (
    
      <View style={{
        flex:1,
        backgroundColor:'#0D0D0D',
        alignItems: "center",
      }}>
        <View style={{
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
          marginTop:30
        }}>
          
          <Text style={{
            color:'white',
            }}>Cart</Text>
        </View>

         {noOrders()}
      </View>
    );}
  }

export default orders