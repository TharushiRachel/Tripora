import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";

function TourGuideList(navigation, onPress) {
  const [data, setTourGuide] = useState([]);
  // const [data,setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // const { onPress, title = 'Save' } = props;

  const url = "http://localhost:3000/tour-guide";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setTourGuide(json))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  // const [Items, setItems] = useState([
  //     {id: 1, name: 'Sujeewa de Silva', description: 'My main aim in tour guiding is to let the guests have..'},
  //     {id: 2, name: 'Ravi Munasinghe', description: 'Experience in Geology and Gemology study...'},
  //     {id: 3, name: 'Stanley', description: 'I am working as a National Tour Guide since 2002 and speaks Italian and .....'},
  //     {id: 4, name: 'Sisira Kuruppu', description: 'I am a National Tourist Guide Lecturer, who .....'}
  // ])

  return (
    <View style={styles.body}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <AntDesign name="left" size={20} style={styles.back_btn} />
        <Text style={styles.text1}>Find a Tour Guide</Text>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("TourGuideScreen")}
        >
          {loading ? (
            <Text>Loading ...</Text>
          ) : (
            data.map((post) => (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                  {post.name}
                </Text>
                {/* <Text style={{fontSize:15, color:'blue'}} >{post.body}</Text> */}
              </View>
            ))
          )}

          {/* {
                Items.map((guide)=>{
                    return(
                        <TouchableOpacity onPress={() => navigation.navigate("TourGuide")}>
                        <View style={styles.item} key={guide.id}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                             */}
          {/* <View>
                                    <Image source={guide1} style={styles.guide_img} />
                                </View> */}
          {/* <View style={styles.text_view}>
                                    <Text style={styles.text}>{guide.name}</Text> */}
          {/* <Text style={styles.text2}>{guide.description}</Text> */}
          {/* </View>
                                
                            </View>
                        </View>
                        </TouchableOpacity>
                    )
                })
            } */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#FAF9F6",
    // alignItems:'center',
    // justifyContent:'center',
    flex: 1,
  },

  item: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-start",
    margin: 15,
    marginRight: 20,
    marginLeft: 20,
    padding: 15,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  text: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
  },

  text2: {
    color: "#696969",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },

  text1: {
    color: "#000000",
    fontWeight: "bold",
    marginRight: 130,
    marginTop: 35,
    fontSize: 18,
    marginBottom: 40,
  },

  back_btn: {
    marginLeft: 30,
    marginTop: 37,
    color: colors.primary,
  },

  guide_img: {
    width: 110,
    height: 110,
  },

  box1: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    height: 200,
    padding: 15,
  },

  text_view: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: 190,
  },
});

export default TourGuideList;
