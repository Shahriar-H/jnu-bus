import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { Image } from 'react-native';
import { StyleSheet, View } from 'react-native';

const Menu = () => {
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <View style={{backgroundColor:"#40d323",padding:15,paddingTop:50, borderBottomLeftRadius:15, borderBottomRightRadius:15,paddingBottom:40}}>
                <Image resizeMode="contain" style={{position:'absolute', right:20, top:40, height:80, width:80,opacity:0.4}} source={require("../../assets/images/jnu.png")} />
                <Text style={{color:'#fff', fontSize:30, fontWeight:'bold',textTransform:'uppercase'}}>Feedback</Text>
                <Text style={{color:'#fff', fontSize:15}}>If you notice any mismatched routes or discrepancies, don’t hesitate to reach out to us!</Text>
            </View>
            <View style={{marginTop:20,padding:16}}>
                <Link href={"mailto:shakisk23@gmail.com"} style={{padding:8, borderWidth:1, borderColor:'#61d64d', borderRadius:4, backgroundColor:'#e5ffdf',marginBottom:12}}>
                    <Text style={{fontSize:16, color:"#0dbb04"}}><FontAwesome name='envelope' size={18}/> Email</Text>
                </Link>
                <Link href={"tel:01303954432"} style={{padding:8, borderWidth:1, borderColor:'#61d64d', borderRadius:4, backgroundColor:'#e5ffdf',marginBottom:12}}>
                    <Text style={{fontSize:16, color:"#0dbb04"}}><FontAwesome name='phone' size={18}/> Phone</Text>
                </Link>
                <Link href={"https://wa.me/8801303954432"} style={{padding:8, borderWidth:1, borderColor:'#61d64d', borderRadius:4, backgroundColor:'#e5ffdf',marginBottom:12}}>
                    <Text style={{fontSize:16, color:"#0dbb04"}}><FontAwesome name='whatsapp' size={18}/> Whatsapp</Text>
                </Link>
                <Link href={"https://www.facebook.com/shahriar.h.shaki"} style={{padding:8, borderWidth:1, borderColor:'#61d64d', borderRadius:4, backgroundColor:'#e5ffdf',marginBottom:12}}>
                    <Text style={{fontSize:16, color:"#0dbb04"}}><FontAwesome name='facebook' size={18}/> Facebook</Text>
                </Link>
                <Link href={"https://www.linkedin.com/in/md-shahoriar-hussain-al-shaky-051713178/"} style={{padding:8, borderWidth:1, borderColor:'#61d64d', borderRadius:4, backgroundColor:'#e5ffdf',marginBottom:12}}>
                    <Text style={{fontSize:16, color:"#0dbb04"}}><FontAwesome name='linkedin' size={18}/> Linkedin</Text>
                </Link>
            </View>

            <View style={{padding:16,marginTop:230}}>
                <Text style={{textAlign:'center', color:'#a2a2a2'}}>Developed By <Text style={{fontWeight:'bold'}}>SHAHRIAR HUSSAIN</Text>, Department of Statistics JnU.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Menu;



















































































// import React, { useState, useEffect } from "react";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import MapView, { Marker, Polyline } from "react-native-maps";
// import polyline from "@mapbox/polyline";
// import { useIsFocused } from "@react-navigation/native";
// import { useGlobalSearchParams, useRouter } from "expo-router";
// import { FontAwesome } from "@expo/vector-icons";

// const busRoutes = [
//   {
//     name: "চন্দ্রমুখী-১",
//     stops: [
//       { name: "Farmgate", latitude: 23.757391114748447, longitude: 90.38999579527564 },
//       { name: "Asad Gate", latitude: 23.760748353332136, longitude: 90.37267825136199 },
//       { name: "Shukrabad", latitude: 23.75262237866886, longitude: 90.37774719580723 },
//       { name: "Kolabagan", latitude: 23.745836231515877, longitude: 90.38175508644943 },
//       { name: "New Market", latitude: 23.73440158608769, longitude: 90.38442962225929 },
//       { name: "Azimpur", latitude: 23.727609752265604, longitude: 90.38610200691532 },
//       { name: "Palashi", latitude: 23.726176652484245, longitude: 90.3865869681663 },
//       { name: "Gulistan", latitude: 23.72536167996538, longitude: 90.41189029448654 },
//       { name: "Jagannath University", latitude: 23.708094529547324, longitude: 90.41094356643796 },
//     ],
//   },
//   {
//     name: "চন্দ্রমুখী-২",
//     stops: [
//       { name: "Kamarbari", latitude: 23.760279183165824, longitude: 90.38336000322808 },
//       { name: "Dhanmondi-27", latitude: 23.75657844799127, longitude: 90.37556680099928 },
//       { name: "Kalabagan", latitude: 23.746179949983304, longitude: 90.38188009318877 },
//       { name: "City College", latitude: 23.73958785682906, longitude: 90.38336089893797 },
//       { name: "Nilkhet", latitude: 23.732306796357012, longitude: 90.38506859515392 },
//       { name: "Azimpur", latitude: 23.727609752265604, longitude: 90.38610200691532 },
//       { name: "Palashi", latitude: 23.726176652484245, longitude: 90.3865869681663 },
//       { name: "Gulistan", latitude: 23.72536167996538, longitude: 90.41189029448654 },
//       { name: "Jagannath University", latitude: 23.708094529547324, longitude: 90.41094356643796 },
//     ],
//   },
//   {
//     name: "উত্তরা-১",
//     stops: [
//       { name: "Uttara (Azampur Bus Stand)", latitude: 0, longitude: 0 },
//       { name: "Kurigram", latitude: 0, longitude: 0 },
//       { name: "Bimanbandar", latitude: 0, longitude: 0 },
//       { name: "Badda", latitude: 0, longitude: 0 },
//       { name: "Rampura", latitude: 0, longitude: 0 },
//       { name: "Malibagh", latitude: 0, longitude: 0 },
//       { name: "Paltan", latitude: 0, longitude: 0 },
//       { name: "Golap Shah Mazar", latitude: 0, longitude: 0 },
//       { name: "Chabir Haat", latitude: 0, longitude: 0 },
//     ],
//   },
//   {
//     name: "উত্তরা-২",
//     stops: [
//       { name: "Tongi Bridge", latitude: 0, longitude: 0 },
//       { name: "Airport", latitude: 0, longitude: 0 },
//       { name: "Banani", latitude: 0, longitude: 0 },
//       { name: "Mohakhali", latitude: 0, longitude: 0 },
//       { name: "Maghbazar", latitude: 0, longitude: 0 },
//       { name: "Chowrangi", latitude: 0, longitude: 0 },
//       { name: "Malibagh", latitude: 0, longitude: 0 },
//       { name: "Kakrail", latitude: 0, longitude: 0 },
//       { name: "Chabir Haat", latitude: 0, longitude: 0 },
//     ],
//   },
//   {
//     name: "প্রজ্ঞা-১",
//     stops: [
//       { name: "Khilgaon", latitude: 0, longitude: 0 },
//       { name: "Basabo", latitude: 0, longitude: 0 },
//       { name: "Bouddha Mandir", latitude: 0, longitude: 0 },
//       { name: "Shantinagar", latitude: 0, longitude: 0 },
//       { name: "Tiptop", latitude: 0, longitude: 0 },
//       { name: "Malibagh", latitude: 0, longitude: 0 },
//       { name: "Golap Shah Mazar", latitude: 0, longitude: 0 },
//       { name: "Dayaganj", latitude: 0, longitude: 0 },
//       { name: "Chabir Haat", latitude: 0, longitude: 0 },
//     ],
//   },
//   {
//     name: "প্রজ্ঞা-২",
//     stops: [
//       { name: "Arambagh", latitude: 0, longitude: 0 },
//       { name: "Motijheel", latitude: 0, longitude: 0 },
//       { name: "Maniknagar", latitude: 0, longitude: 0 },
//       { name: "Shajahanpur", latitude: 0, longitude: 0 },
//       { name: "Shantinagar", latitude: 0, longitude: 0 },
//       { name: "Dayaganj", latitude: 0, longitude: 0 },
//       { name: "Chabir Haat", latitude: 0, longitude: 0 },
//     ],
//   },
//   {
//     name: "মধুমতি",
//     stops: [
//       { name: "Narayanganj", latitude: 0, longitude: 0 },
//       { name: "Chashara", latitude: 0, longitude: 0 },
//       { name: "Fatullah", latitude: 0, longitude: 0 },
//       { name: "Pagla", latitude: 0, longitude: 0 },
//       { name: "Jatrabari", latitude: 0, longitude: 0 },
//       { name: "Sayedabad", latitude: 0, longitude: 0 },
//       { name: "Chabir Haat", latitude: 0, longitude: 0 },
//     ],
//   },
//   {
//     name: "উদয়ন",
//     stops: [
//       { name: "Mirpur-14", latitude: 0, longitude: 0 },
//       { name: "Mirpur-10", latitude: 0, longitude: 0 },
//       { name: "Mirpur-2", latitude: 0, longitude: 0 },
//       { name: "Agargaon", latitude: 0, longitude: 0 },
//       { name: "Kalyanpur", latitude: 0, longitude: 0 },
//       { name: "New Market", latitude: 0, longitude: 0 },
//       { name: "Azimpur", latitude: 0, longitude: 0 },
//       { name: "Chabir Haat", latitude: 0, longitude: 0 },
//     ],
//   },
//   {
//     name: "দুর্জয়",
//     stops: [
//       { name: "Mirpur-10", latitude: 0, longitude: 0 },
//       { name: "Mirpur-3", latitude: 0, longitude: 0 },
//       { name: "Kazipara", latitude: 0, longitude: 0 },
//       { name: "Agargaon", latitude: 0, longitude: 0 },
//       { name: "Kalyanpur", latitude: 0, longitude: 0 },
//       { name: "New Market", latitude: 0, longitude: 0 },
//       { name: "Azimpur", latitude: 0, longitude: 0 },
//       { name: "Chabir Haat", latitude: 0, longitude: 0 },
//     ],
//   },
// ];

// // Google Maps API Key
// const GOOGLE_MAPS_API_KEY = "AIzaSyCGBvTrnJlNrRqI_ZTFO_hux6gxZzEwLP0";

// // Sample Locations
// const origin = { name: "Farmgate", latitude: 23.757391114748447, longitude: 90.38999579527564 };
// const destination = { name: "Azimpur", latitude: 23.727609752265604, longitude: 90.38610200691532 };
// const waypoints = [
//   { name: "Shukrabad", latitude: 23.75262237866886, longitude: 90.37774719580723 },
// ];

// export default function App() {
//   const [route, setRoute] = useState([]); // Holds decoded polyline route
//   const [loading, setLoading] = useState(true);
//   const focused = useIsFocused()
//   const params = useGlobalSearchParams()
//   const [busData, setbusData] = useState(null);
//   const router = useRouter()

//   useEffect(() => {
//     setbusData(null)
//     if(params?.busdata){
//       console.log("params?.busdata",JSON.parse(params?.busdata));
//       setbusData(JSON.parse(params?.busdata))
//     }
//     return ()=>{
//       setbusData(null)
//     }
//     // setbusData(JSON.parse(params?.busdata))        
//   }, [focused,params?.busdata]);



//   async function fetchDirections() {
//     setLoading(true);
//     const startFrom = busData?.stops[0]
//     const viaLine = busData?.stops[4]
//     const endAt = busData?.stops[busData?.stops?.length-1]
//     try {
//       const waypointStr = busData?.stops
//         .map((wp,index) => (index>0||index<busData?.stops.length-1)&&`${wp.latitude},${wp.longitude}`)
//         .join("|");
//       console.log(waypointStr);
      
//       const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${startFrom.latitude},${startFrom.longitude}&destination=${endAt.latitude},${endAt.longitude}&waypoints=${waypoints.length > 0 ? waypointStr : ""}&key=${GOOGLE_MAPS_API_KEY}`;

//       console.log("Fetching Directions from:", url);

//       const response = await fetch(url);
//       const data = await response.json();

//       if (data.routes && data.routes.length > 0) {
//         const points = data.routes[0].overview_polyline.points;
//         const decodedPoints = polyline.decode(points).map(([lat, lng]) => ({
//           latitude: lat,
//           longitude: lng,
//         }));
//         // console.log("Decoded Polyline Points:", decodedPoints);
//         setRoute(decodedPoints);
//       } else {
//         console.error("No routes found in API response:", data);
//       }
//     } catch (error) {
//       console.error("Error fetching directions:", error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     if(busData){
//       fetchDirections();
//       console.log(route.length);
//     }
    
//   }, [busData]);

//   return (
//     <View style={styles.container}>
      
//       {route.length>0&&busData&&<MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: origin.latitude,
//           longitude: origin.longitude,
//           latitudeDelta: 0.1,
//           longitudeDelta: 0.1,
//         }}
//       >
//         {/* Origin Marker */}
//         <Marker
//           coordinate={{ latitude: busData?.stops[0].latitude, longitude: busData?.stops[0].longitude }}
//           title={busData?.name}
//           description={busData?.stops[0]?.name}
         
          
//         />
//         {/* Destination Marker */}
//         <Marker
//           coordinate={{ latitude: busData?.stops[busData?.stops.length-1].latitude, longitude: busData?.stops[busData?.stops.length-1].longitude }}
//           title={busData.name}
//           description={busData?.stops[busData?.stops.length-1]?.name}
//           image={require("../../assets/images/marker2.png")}
          
//         />
//         {/* Waypoint Markers */}
//         {busData?.stops.map((waypoint, index) => {
//           return (index>0 && index<busData?.stops.length-1) &&<Marker
//             key={index}
//             coordinate={{
//               latitude: waypoint.latitude,
//               longitude: waypoint.longitude,
//             }}
//             title={busData.name}
//             description={`${busData?.stops[index]?.name}`}
//           />
//         })}
//         {/* Polyline for Route */}
//         {
//           <Polyline
//             coordinates={route}
//             strokeColor="blue"
//             strokeWidth={4}
//           />
//         }
//       </MapView>}
//       {route.length>0&&busData&&<View style={{position:"absolute", backgroundColor:"#fff", padding:15,width:'100%',paddingTop:40, justifyContent:'center', display:'flex', width:'100%', alignItems:'center', elevation:4}}>
//         <TouchableOpacity onPress={()=>router.push("/")} style={{position:'absolute', left:20, marginTop:10}}>
//           <FontAwesome name="chevron-left" size={20} />
//         </TouchableOpacity>
//         <View style={{display:'flex', flexDirection:'row', alignItems:"center", width:'60%', position:'relative'}}>
//           <Text style={{marginRight:10}}><FontAwesome name="circle-o" size={20} /></Text>
//           <Text style={{padding:6, borderWidth:1, borderColor:'#a8a8a8', borderRadius:4, width:"100%"}}>{busData?.stops[0]?.name}</Text>
//           <Text style={{position:'absolute', left:40, top:-8, backgroundColor:'#fff', fontSize:10}}>FROM</Text>
//         </View>
//         <View style={{position:'absolute', left:88,top:70,transform: [{ rotate: '90deg' }]}}>
//           <Text> - - - </Text>
//         </View>
//         <View style={{display:'flex', flexDirection:'row', alignItems:"center", width:'60%', marginTop:15}}>
//           <Text style={{marginRight:10}}><FontAwesome name="map-marker" size={28} /></Text>
//           <Text style={{padding:6, borderWidth:1, borderColor:'#a8a8a8', borderRadius:4, width:"100%"}}>Jagannath University</Text>
//           <Text style={{position:'absolute', left:40, top:-8, backgroundColor:'#fff', fontSize:10}}>TO</Text>
//         </View>
//       </View>}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
// });
