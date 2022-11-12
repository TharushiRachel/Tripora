import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
// import { Container, Header, Content,Left, Body, Right, Title, Tab, Tabs } from 'native-base';
import Article from "../screens/NewsAlerts";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";
import { Feather, Entypo } from "@expo/vector-icons";

const Sports = ({
  navigation,
  onPress,
  clicked,
  searchPhrase,
  setSearchPhrase,
}) => {
  const [items, setArticles] = useState([]);
  const getNews = () => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.newsfirst.lk%2Fcategory%2Fsports%2Ffeed%2F"
      )
      .then((response) => {
        // handle success
        setArticles(response.data.items);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          style={styles.bottomContainer}
          onPress={() => navigation.navigate("CategoryNews")}
        >
          <AntDesign name="left" size={20} style={styles.back_btn} />
        </TouchableOpacity>
        <Text style={styles.text1}>Sports News!!</Text>
      </View>

      <Text style={styles.text2}>News Notifications</Text>
      <View
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      ></View>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <Article
            urlToImage={item.thumbnail}
            title={item.title}
            // description = {item.description}
            //author = {item.author}
            publishedAt={item.pubDate}
            sourceName={item.link}
            url={item.link}
          />
        )}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>
  );
};

export default Sports;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body: {
    backgroundColor: "#FAF9F6",
    // alignItems:'center',
    // justifyContent:'center',
    flex: 1,
  },

  text1: {
    color: "#000000",
    fontWeight: "bold",
    marginRight: 230,
    marginTop: 35,
    fontSize: 18,
    marginBottom: 40,
  },

  back_btn: {
    marginLeft: 30,
    marginTop: 37,
    color: colors.primary,
  },

  text2: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#696969",
    marginLeft: 20,
  },

  item: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    marginRight: 20,
    marginLeft: 20,
    padding: 15,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  negombo_img: {
    width: 110,
    height: 100,
    // borderRadius:100
  },

  negombo_text: {
    marginTop: 0,
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
    marginLeft: 10,
  },

  location_icon: {
    color: colors.primary,
  },

  negombo_text2: {
    marginLeft: 5,
    fontSize: 16,
    color: colors.gray,
    marginLeft: 10,
  },

  text_view: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: 190,
  },
  container2: {
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
});
