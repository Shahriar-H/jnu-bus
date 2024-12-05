import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, ScrollView, Image, TouchableOpacity, TextInput, ActivityIndicator } from "react-native";



export default function App() {
  const route = useRouter()
  const [searchbus, setsearchbus] = useState("Jagannath University");
  const [isLoading, setisLoading] = useState(false);
  const [busRoutes, setbusRoutes] = useState(null);
  const renderRoute = ({ item }) => {
    return JSON.stringify(item?.stops).toLowerCase().includes(searchbus.toLowerCase())&&<TouchableOpacity onPress={()=>route.push("/explore?busdata="+JSON.stringify(item))} style={{...styles.card, overflow:'hidden', borderWidth:1, borderColor:'#d0d0d0'}}>
      <View style={{backgroundColor:'#68ea65',padding:15}}>
        <Text style={styles.routeName}>{item.name}</Text>
        {/* <TouchableOpacity style={{backgroundColor:'#fff',padding:4, width:120, borderRadius:2}}>
          <Text style={{marginBottom:0, fontSize:12, textAlign:'center'}}><FontAwesome name="map-marker" size={12}/> View on Map</Text>
        </TouchableOpacity> */}
        <Text style={{marginBottom:0, fontSize:12, width:'70%', color:'#525151'}}><FontAwesome name="bus" size={12}/> {item?.description}</Text>
        <Image resizeMode="contain" style={{height:100, width:100, position:'absolute', right:10}} source={require("../../assets/images/jnubus.png")} />
      </View>
      <View style={{...styles.stopsContainer,padding:15}}>
        {item.stops.map((stop, index) => (
          <Text key={index} style={styles.stopName}>
            {stop.name} {index<item.stops.length-1&&<FontAwesome name="arrow-right" />}
          </Text>
        ))}
      </View>
    </TouchableOpacity>
  };
  

  const getData = ()=>{
    console.log("hello");
    setisLoading(true)
    fetch("https://firebasestorage.googleapis.com/v0/b/poribar-aeabf.appspot.com/o/data.json?alt=media&token=8be769e4-99ef-47f5-9bd4-5b0c456e75ce")
    .then((res)=>res.json())
    .then((res)=>{
      // console.log(res)
      setbusRoutes(res?.data)
      setisLoading(false)
    })
    .catch((e)=>console.log(e))
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <View style={{...styles.container}}>
      <View style={{backgroundColor:"#40d323",padding:15,paddingTop:50, borderBottomLeftRadius:15, borderBottomRightRadius:15}}>
        <Image resizeMode="contain" style={{position:'absolute', right:20, top:40, height:80, width:80,opacity:0.4}} source={require("../../assets/images/jnu.png")} />
        <Text style={{color:'#fff', fontSize:30, fontWeight:'bold',textTransform:'uppercase'}}>JnU Bus Route</Text>
        <Text style={{color:'#fff', fontSize:15}}>JnU Bus Route App: Your go-to guide for all bus pickup points and departure times at a glance!</Text>
        <View style={{marginTop:20, marginBottom:20}}>
          <TextInput value={searchbus} onChangeText={setsearchbus} placeholder="Search by Place" placeholderTextColor={"#e0e0e0"} style={{borderWidth:1, borderColor:'#fff', borderRadius:4, paddingLeft:40,paddingRight:10, color:"#fff",padding:10}} />
          <Text style={{position:"absolute", top:7, left:10, borderRightWidth:1, borderRightColor:'#fff',paddingRight:8}}><FontAwesome size={25} name="map-marker" color={"#fff"} /></Text>
        </View>
        
      </View>
      {!isLoading?<FlatList
        data={busRoutes}
        keyExtractor={(item, index) => `route-${index}`}
        renderItem={renderRoute}
        contentContainerStyle={{...styles.list,padding:15}}
      />:<View>
          <Image resizeMode="contain" style={{width:'100%'}} source={require("../../assets/images/skaleton.gif")} />
          <Image resizeMode="contain" style={{width:'100%'}} source={require("../../assets/images/skaleton.gif")} />
          <Image resizeMode="contain" style={{width:'100%'}} source={require("../../assets/images/skaleton.gif")} />
          <Image resizeMode="contain" style={{width:'100%'}} source={require("../../assets/images/skaleton.gif")} />
          <Image resizeMode="contain" style={{width:'100%'}} source={require("../../assets/images/skaleton.gif")} />
        </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
   
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  routeName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  stopsHeader: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
    color: "#555",
  },
  stopsContainer: {
    flexDirection: "row",
    flexWrap: "wrap", // Allows wrapping of stops when they don't fit in a row
    marginTop: 5,
  },
  stopName: {
    fontSize: 14,
    marginRight: 10, // Spacing between the stops
    color: "#ffffff",
    marginBottom: 5, // Optional, to add space between rows when wrapping,
    backgroundColor:"#fa3b3b",
    padding:3,
    borderRadius:3
  },
});
