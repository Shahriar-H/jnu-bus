import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import polyline from "@mapbox/polyline";
import { useIsFocused } from "@react-navigation/native";
import { useGlobalSearchParams } from "expo-router";

const busRoutes = [
  {
    name: "চন্দ্রমুখী-১",
    stops: [
      { name: "Farmgate", latitude: 23.757391114748447, longitude: 90.38999579527564 },
      { name: "Asad Gate", latitude: 23.760748353332136, longitude: 90.37267825136199 },
      { name: "Shukrabad", latitude: 23.75262237866886, longitude: 90.37774719580723 },
      { name: "Kolabagan", latitude: 23.745836231515877, longitude: 90.38175508644943 },
      { name: "New Market", latitude: 23.73440158608769, longitude: 90.38442962225929 },
      { name: "Azimpur", latitude: 23.727609752265604, longitude: 90.38610200691532 },
      { name: "Palashi", latitude: 23.726176652484245, longitude: 90.3865869681663 },
      { name: "Gulistan", latitude: 23.72536167996538, longitude: 90.41189029448654 },
      { name: "Jagannath University", latitude: 23.708094529547324, longitude: 90.41094356643796 },
    ],
  },
  {
    name: "চন্দ্রমুখী-২",
    stops: [
      { name: "Kamarbari", latitude: 23.760279183165824, longitude: 90.38336000322808 },
      { name: "Dhanmondi-27", latitude: 23.75657844799127, longitude: 90.37556680099928 },
      { name: "Kalabagan", latitude: 23.746179949983304, longitude: 90.38188009318877 },
      { name: "City College", latitude: 23.73958785682906, longitude: 90.38336089893797 },
      { name: "Nilkhet", latitude: 23.732306796357012, longitude: 90.38506859515392 },
      { name: "Azimpur", latitude: 23.727609752265604, longitude: 90.38610200691532 },
      { name: "Palashi", latitude: 23.726176652484245, longitude: 90.3865869681663 },
      { name: "Gulistan", latitude: 23.72536167996538, longitude: 90.41189029448654 },
      { name: "Jagannath University", latitude: 23.708094529547324, longitude: 90.41094356643796 },
    ],
  },
  {
    name: "উত্তরা-১",
    stops: [
      { name: "Uttara (Azampur Bus Stand)", latitude: 0, longitude: 0 },
      { name: "Kurigram", latitude: 0, longitude: 0 },
      { name: "Bimanbandar", latitude: 0, longitude: 0 },
      { name: "Badda", latitude: 0, longitude: 0 },
      { name: "Rampura", latitude: 0, longitude: 0 },
      { name: "Malibagh", latitude: 0, longitude: 0 },
      { name: "Paltan", latitude: 0, longitude: 0 },
      { name: "Golap Shah Mazar", latitude: 0, longitude: 0 },
      { name: "Chabir Haat", latitude: 0, longitude: 0 },
    ],
  },
  {
    name: "উত্তরা-২",
    stops: [
      { name: "Tongi Bridge", latitude: 0, longitude: 0 },
      { name: "Airport", latitude: 0, longitude: 0 },
      { name: "Banani", latitude: 0, longitude: 0 },
      { name: "Mohakhali", latitude: 0, longitude: 0 },
      { name: "Maghbazar", latitude: 0, longitude: 0 },
      { name: "Chowrangi", latitude: 0, longitude: 0 },
      { name: "Malibagh", latitude: 0, longitude: 0 },
      { name: "Kakrail", latitude: 0, longitude: 0 },
      { name: "Chabir Haat", latitude: 0, longitude: 0 },
    ],
  },
  {
    name: "প্রজ্ঞা-১",
    stops: [
      { name: "Khilgaon", latitude: 0, longitude: 0 },
      { name: "Basabo", latitude: 0, longitude: 0 },
      { name: "Bouddha Mandir", latitude: 0, longitude: 0 },
      { name: "Shantinagar", latitude: 0, longitude: 0 },
      { name: "Tiptop", latitude: 0, longitude: 0 },
      { name: "Malibagh", latitude: 0, longitude: 0 },
      { name: "Golap Shah Mazar", latitude: 0, longitude: 0 },
      { name: "Dayaganj", latitude: 0, longitude: 0 },
      { name: "Chabir Haat", latitude: 0, longitude: 0 },
    ],
  },
  {
    name: "প্রজ্ঞা-২",
    stops: [
      { name: "Arambagh", latitude: 0, longitude: 0 },
      { name: "Motijheel", latitude: 0, longitude: 0 },
      { name: "Maniknagar", latitude: 0, longitude: 0 },
      { name: "Shajahanpur", latitude: 0, longitude: 0 },
      { name: "Shantinagar", latitude: 0, longitude: 0 },
      { name: "Dayaganj", latitude: 0, longitude: 0 },
      { name: "Chabir Haat", latitude: 0, longitude: 0 },
    ],
  },
  {
    name: "মধুমতি",
    stops: [
      { name: "Narayanganj", latitude: 0, longitude: 0 },
      { name: "Chashara", latitude: 0, longitude: 0 },
      { name: "Fatullah", latitude: 0, longitude: 0 },
      { name: "Pagla", latitude: 0, longitude: 0 },
      { name: "Jatrabari", latitude: 0, longitude: 0 },
      { name: "Sayedabad", latitude: 0, longitude: 0 },
      { name: "Chabir Haat", latitude: 0, longitude: 0 },
    ],
  },
  {
    name: "উদয়ন",
    stops: [
      { name: "Mirpur-14", latitude: 0, longitude: 0 },
      { name: "Mirpur-10", latitude: 0, longitude: 0 },
      { name: "Mirpur-2", latitude: 0, longitude: 0 },
      { name: "Agargaon", latitude: 0, longitude: 0 },
      { name: "Kalyanpur", latitude: 0, longitude: 0 },
      { name: "New Market", latitude: 0, longitude: 0 },
      { name: "Azimpur", latitude: 0, longitude: 0 },
      { name: "Chabir Haat", latitude: 0, longitude: 0 },
    ],
  },
  {
    name: "দুর্জয়",
    stops: [
      { name: "Mirpur-10", latitude: 0, longitude: 0 },
      { name: "Mirpur-3", latitude: 0, longitude: 0 },
      { name: "Kazipara", latitude: 0, longitude: 0 },
      { name: "Agargaon", latitude: 0, longitude: 0 },
      { name: "Kalyanpur", latitude: 0, longitude: 0 },
      { name: "New Market", latitude: 0, longitude: 0 },
      { name: "Azimpur", latitude: 0, longitude: 0 },
      { name: "Chabir Haat", latitude: 0, longitude: 0 },
    ],
  },
];

// Google Maps API Key
const GOOGLE_MAPS_API_KEY = "AIzaSyCGBvTrnJlNrRqI_ZTFO_hux6gxZzEwLP0";

// Sample Locations
const origin = { name: "Farmgate", latitude: 23.757391114748447, longitude: 90.38999579527564 };
const destination = { name: "Azimpur", latitude: 23.727609752265604, longitude: 90.38610200691532 };
const waypoints = [
  { name: "Shukrabad", latitude: 23.75262237866886, longitude: 90.37774719580723 },
];

export default function App() {
  const [route, setRoute] = useState([]); // Holds decoded polyline route
  const [loading, setLoading] = useState(true);
  const focused = useIsFocused()
  const params = useGlobalSearchParams()
  const [busData, setbusData] = useState(null);

  useEffect(() => {
    if(params?.busdata){
      console.log("params?.busdata",JSON.parse(params?.busdata));
      setbusData(JSON.parse(params?.busdata))
    }
    return ()=>{
      setbusData(null)
    }
    // setbusData(JSON.parse(params?.busdata))        
  }, [focused,params?.busdata]);



  async function fetchDirections() {
    setLoading(true);
    const startFrom = busData?.stops[0]
    const viaLine = busData?.stops[4]
    const endAt = busData?.stops[busData?.stops?.length-1]
    try {
      const waypointStr = busData?.stops
        .map((wp,index) => (index>0||index<busData?.stops.length-1)&&`${wp.latitude},${wp.longitude}`)
        .join("|");
      console.log(waypointStr);
      
      const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${startFrom.latitude},${startFrom.longitude}&destination=${endAt.latitude},${endAt.longitude}&waypoints=${waypoints.length > 0 ? waypointStr : ""}&key=${GOOGLE_MAPS_API_KEY}`;

      console.log("Fetching Directions from:", url);

      const response = await fetch(url);
      const data = await response.json();

      if (data.routes && data.routes.length > 0) {
        const points = data.routes[0].overview_polyline.points;
        const decodedPoints = polyline.decode(points).map(([lat, lng]) => ({
          latitude: lat,
          longitude: lng,
        }));
        // console.log("Decoded Polyline Points:", decodedPoints);
        setRoute(decodedPoints);
      } else {
        console.error("No routes found in API response:", data);
      }
    } catch (error) {
      console.error("Error fetching directions:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if(busData){
      fetchDirections();
      console.log(route.length);
    }
    
  }, [busData]);

  return (
    <View style={styles.container}>
      
      {(route.length>0&&busData)?<MapView
        style={styles.map}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {/* Origin Marker */}
        <Marker
          coordinate={{ latitude: busData?.stops[0].latitude, longitude: busData?.stops[0].longitude }}
          title={busData?.name}
          description={busData?.stops[0]?.name}
        />
        {/* Destination Marker */}
        <Marker
          coordinate={{ latitude: busData?.stops[busData?.stops.length-1].latitude, longitude: busData?.stops[busData?.stops.length-1].longitude }}
          title={busData.name}
          description={busData?.stops[busData?.stops.length-1]?.name}
          image={require("../../assets/images/marker2.png")}
        />
        {/* Waypoint Markers */}
        {busData?.stops.map((waypoint, index) => {
          return (index>0 && index<busData?.stops.length-1) &&<Marker
            key={index}
            coordinate={{
              latitude: waypoint.latitude,
              longitude: waypoint.longitude,
            }}
            title={busData.name}
            description={`${busData?.stops[index]?.name}`}
          />
        })}
        {/* Polyline for Route */}
        {
          <Polyline
            coordinates={route}
            strokeColor="blue"
            strokeWidth={4}
          />
        }
      </MapView>:<View style={{height:'100%', width:"100%",display:'flex', justifyContent:'center',alignItems:'center'}}>
        <Image resizeMode="contain" style={{height:250, width:250}} source={require("../../assets/images/1024.png")} />
        </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff"
  },
  map: {
    flex: 1,
  },
});
