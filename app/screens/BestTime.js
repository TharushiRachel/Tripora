import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import colors from "../config/colors";
import ItemPicker from "../components/ItemPicker";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";

const locations = [
  { label: "Abardeen Falls", value: 1 },
  { label: "Abhayagiriya", value: 2 },
  { label: "Adam's Bridge", value: 3 },
  { label: "Aluviharaya Cave Temple", value: 4 },
  { label: "Ambuluwawa", value: 5 },
  { label: "Archaeologiical Measeum", value: 6 },
  { label: "Arugambay Beach", value: 7 },
  { label: "Bahiravakanda Temple", value: 8 },
  { label: "Bambarakanda Falls", value: 9 },
  { label: "Batticaloa Fort", value: 10 },
  { label: "Batticaloa Lagoon", value: 11 },
  { label: "Batticaloa Lighthouse", value: 12 },
  { label: "Benthota Beach", value: 13 },
  { label: "Beire Lake", value: 14 },
  { label: "Birds Research Center", value: 15 },
  { label: "Bopath Ella", value: 16 },
  { label: "Buddangala Temple", value: 17 },
  { label: "Buduruwagala", value: 18 },
  { label: "Casuarina Beach", value: 19 },
  { label: "Ceylon Tea Measeum", value: 20 },
  { label: "Colombo Dutch Measeum", value: 21 },
  { label: "Colombo National Measeum", value: 22 },
  { label: "Colombo Planatarium", value: 23 },
  { label: "Dambakolapatuna Temple", value: 24 },
  { label: "Dambulla Royal Cave Temple", value: 25 },
  { label: "Deegavapi", value: 26 },
  { label: "Demodara Bridge", value: 27 },
  { label: "Devon Falls", value: 28 },
  { label: "Dunhinda Falls", value: 29 },
  { label: "Dutch Reformed Church", value: 30 },
  { label: "Fort Fedric", value: 31 },
  { label: "Galle Dutch Fort", value: 32 },
  { label: "Galle Harbour", value: 33 },
  { label: "Galle Maritime Measeum", value: 34 },
  { label: "Galle Measeum", value: 35 },
  { label: "Galle Turtle Hatchery", value: 36 },
  { label: "Gal Viharaya", value: 37 },
  { label: "Gangaramaya", value: 38 },
  { label: "Gregory Lake", value: 39 },
  { label: "Guruge National Park", value: 40 },
  { label: "Hambanthota Hot Springs", value: 41 },
  { label: "Hikkaduwa Beach", value: 42 },
  { label: "Hollycross Church", value: 43 },
  { label: "Hortan Plains", value: 44 },
  { label: "International Buddhist Measeum", value: 45 },
  { label: "Isurumuniya", value: 46 },
  { label: "Jaffna Fort", value: 47 },
  { label: "Jaffna Library", value: 48 },
  { label: "Japaneese Peace Pagoda", value: 49 },
  { label: "Jethawanaramaya", value: 50 },
  { label: "Jungle Beach Galle", value: 51 },
  { label: "Kallady Beach Batticaloa", value: 52 },
  { label: "Kallady Bridge Batticaloa", value: 53 },
  { label: "Kalpitiya Diving Center", value: 54 },
  { label: "Kaluthara Beach", value: 55 },
  { label: "Katharagama Dewalaya", value: 56 },
  { label: "Kings Counsil Chamber Polonnaruwa", value: 57 },
  { label: "Kirivehera Polonnaruwa", value: 58 },
  { label: "Knuckles Mountain", value: 59 },
  { label: "Koggala Beach", value: 60 },
  { label: "Koneswaram Kovil", value: 61 },
  { label: "Kumana National Park", value: 62 },
  { label: "Lankathilaka Temple", value: 63 },
  { label: "Laxapana Falls", value: 64 },
  { label: "Lotus Pond Polonnaruwa", value: 65 },
  { label: "Lovamahapaya Anuradhapura", value: 66 },
  { label: "Mannar Fort", value: 67 },
  { label: "Marble Beach Trincomalee", value: 68 },
  { label: "Matara Beach Park", value: 69 },
  { label: "Minneriya Park", value: 70 },
  { label: "Mirissa Beach", value: 71 },
  { label: "Mountlavinia Beach", value: 72 },
  { label: "Mulkirigala Rock Monastery", value: 73 },
  { label: "Munneswarama Kovil", value: 74 },
  { label: "Muthiyangana Temple", value: 75 },
  { label: "Nagadeepa Temple", value: 76 },
  { label: "Nalanda Gedige Matale", value: 77 },
  { label: "Nallur Kovil Jaffna", value: 78 },
  { label: "National Railway Measeum Colombo", value: 79 },
  { label: "Navel History Measeum", value: 80 },
  { label: "Negombo Beach", value: 81 },
  { label: "Nilaveli Beach", value: 82 },
  { label: "Nissankalathamandapa Polonnaruwa", value: 83 },
  { label: "Panduwasnuwara Temple", value: 84 },
  { label: "Parakrama Samudraya", value: 85 },
  { label: "Paraviduwa Temple Matara", value: 86 },
  { label: "Pasikudah Beach", value: 87 },
  { label: "Peradeniya Botanical Gardens", value: 88 },
  { label: "Pettah Floating Market", value: 89 },
  { label: "Pidurangala Rock", value: 90 },
  { label: "Piduruthalagala", value: 91 },
  { label: "Pigeonisland Trincomalee", value: 92 },
  { label: "Pinnawala Elephant Orphanage", value: 93 },
  { label: "Point Dewundara", value: 94 },
  { label: "Pothgulviharaya Polonnaruwa", value: 95 },
  { label: "Ramboda Falls", value: 96 },
  { label: "Richmond Castle Kaluthara", value: 97 },
  { label: "Ruwanweliseya", value: 98 },
  { label: "Sathmalprasada Polonnaruwa", value: 99 },
  { label: "Seruwawila Temple", value: 100 },
  { label: "Sigiriya", value: 101 },
  { label: "Silvertemple Kurunegala", value: 102 },
  { label: "Sinharajaforest", value: 103 },
  { label: "Sithulpawwa Temple", value: 104 },
  { label: "Somawathiya", value: 105 },
  { label: "Sri Maha Bodhi", value: 106 },
  { label: "Sripadaya / Adam's Peak", value: 107 },
  { label: "Statue of Parakramabahu", value: 108 },
  { label: "Tangalle Beach", value: 109 },
  { label: "Temple of the Tooth Relic", value: 110 },
  { label: "Thudugala Ella", value: 111 },
  { label: "Thuparamaya", value: 112 },
  { label: "Trincomalee Harbour", value: 113 },
  { label: "Udawalawa National Park", value: 114 },
  { label: "Udawattekele Sanctuary", value: 115 },
  { label: "Unawatuna", value: 116 },
  { label: "Uppuveli Beach", value: 117 },
  { label: "Vatadage Polonnaruwa", value: 118 },
  { label: "Victoriapark Nuwaraeliya", value: 119 },
  { label: "Viharamahadevi Park Colombo", value: 120 },
  { label: "Wasgamuwa National Park", value: 121 },
  { label: "Wilpaththu National Park", value: 122 },
  { label: "Yala National Park", value: 123 },
  { label: "Yapahuwa Rockfortress Kurunegala", value: 124 },
  { label: "", value: 125 },
];

const months = [
  { label: "January", value: 1 },
  { label: "Feburary", value: 2 },
  { label: "March", value: 3 },
  { label: "April", value: 4 },
  { label: "May", value: 5 },
  { label: "June", value: 6 },
  { label: "July", value: 7 },
  { label: "August", value: 8 },
  { label: "September", value: 9 },
  { label: "October", value: 10 },
  { label: "November", value: 11 },
  { label: "December", value: 12 },
  { label: "", value: 13 },
];

const days = [
  { label: "Monday", value: 1 },
  { label: "Tuesday", value: 2 },
  { label: "Wednesday", value: 3 },
  { label: "Thursday", value: 4 },
  { label: "Friday", value: 5 },
  { label: "Saturday", value: 6 },
  { label: "Sunday", value: 7 },
  { label: "", value: 8 },
];

const times = [
  { label: "1AM", value: 1 },
  { label: "2AM", value: 2 },
  { label: "3AM", value: 3 },
  { label: "4AM", value: 4 },
  { label: "5AM", value: 5 },
  { label: "6AM", value: 6 },
  { label: "7AM", value: 7 },
  { label: "8AM", value: 8 },
  { label: "9AM", value: 9 },
  { label: "10AM", value: 10 },
  { label: "11AM", value: 11 },
  { label: "12PM", value: 12 },
  { label: "1PM", value: 13 },
  { label: "2PM", value: 14 },
  { label: "3PM", value: 15 },
  { label: "4PM", value: 16 },
  { label: "5PM", value: 17 },
  { label: "6PM", value: 18 },
  { label: "7PM", value: 19 },
  { label: "8PM", value: 20 },
  { label: "9PM", value: 21 },
  { label: "10PM", value: 22 },
  { label: "11PM", value: 23 },
  { label: "12AM", value: 24 },
];

function BestTime({ navigation }) {
  const [id, setId] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [msg, setMsg] = useState("");
  const [msg2, setMsg2] = useState("");
  const [msg3, setMsg3] = useState("");
  const [msg4, setMsg4] = useState("");

  // Busy count prediction
  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {
      id,
      month,
      day,
      time,
    };

    axios
      .post("https://tripora.herokuapp.com/prediction", params)
      .then((res) => {
        const data = res.data.data;
        const parameters = JSON.stringify(params);
        // const msg = `Parameters: ${parameters}\nCrowd: ${data.prediction}%`;
        const msg = `${data.prediction}%`;
        const msg2 = `${data.status}`;
        setMsg(msg);
        setMsg2(msg2);
        // alert(msg);
        // reset();
      })
      .catch((error) => alert(`Error: ${error.message}`));
  };

  // Best time prediction
  const handleSubmit2 = (e) => {
    e.preventDefault();
    const params = {
      id,
      month,
      day,
      time,
    };

    axios
      .post("https://tripora.herokuapp.com/timesuggest", params)
      .then((res) => {
        const data = res.data.data;
        const parameters = JSON.stringify(params);
        const msg3 = `${data.best_time}`;
        setMsg3(msg3);
      })
      .catch((error) => alert(`Error: ${error.message}`));
  };

  // Best months prediction
  const handleSubmit3 = (e) => {
    e.preventDefault();
    const params = {
      id,
      month,
      day,
      time,
    };

    axios
      .post("https://tripora.herokuapp.com/monthsuggest", params)
      .then((res) => {
        const data = res.data.data;
        const parameters = JSON.stringify(params);
        const msg4 = `${data.best_month}`;
        setMsg4(msg4);
      })
      .catch((error) => alert(`Error: ${error.message}`));
  };

  return (
    <>
      <View style={styles.view1}>
        <View style={styles.textContainer}></View>
        <View style={styles.picContainer}>
          <ItemPicker
            selectedItem={locations[id - 1]}
            locations={locations}
            value={id}
            onSelectItem={(item) => setId(item.value)}
            items={locations}
            icon="apps"
            placeholder="Select A Location"
          />

          <ItemPicker
            selectedItem={months[month - 1]}
            value={month}
            months={months}
            onSelectItem={(item) => setMonth(item.value)}
            items={months}
            icon="calendar-month"
            placeholder="Choose Month"
          />
          <ItemPicker
            selectedItem={days[day - 1]}
            value={day}
            days={days}
            onSelectItem={(item) => setDay(item.value)}
            items={days}
            icon="calendar-today"
            placeholder="Choose Day"
          />
          <ItemPicker
            selectedItem={times[time - 1]}
            value={time}
            times={times}
            onSelectItem={(item) => setTime(item.value)}
            items={times}
            icon="clock-time-five-outline"
            placeholder="Choose Time"
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={(e) => {
            handleSubmit(e);
            handleSubmit2(e);
            handleSubmit3(e);
          }}
        >
          <Text style={styles.btnText}>Check Now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.view2}>
        <View style={styles.textContainer}>
          <MaterialIcons
            name="people-outline"
            size={17}
            color={colors.primary}
          />
          <Text style={styles.smallText}>Crowd - </Text>
          <Text style={styles.smallText2}>{msg}</Text>
        </View>
        <View style={styles.textContainer}>
          <MaterialIcons name="lock-open" size={17} color={colors.primary} />
          <Text style={styles.smallText}>Status - </Text>
          <Text style={styles.smallText2}>{msg2}</Text>
        </View>
        <View style={styles.textContainer}>
          <MaterialIcons name="access-time" size={17} color={colors.primary} />
          <Text style={styles.smallText}>Best Time To Visit - </Text>
          <Text style={styles.smallText2}>{msg3}</Text>
        </View>
        <View style={styles.textContainer}>
          <MaterialIcons name="date-range" size={17} color={colors.primary} />
          <Text style={styles.smallText}>Best Months To Visit - </Text>
          <Text style={styles.smallText2}>{msg4}</Text>
        </View>
      </View>

      <View style={styles.view3}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SuggestedPlaces")}
        >
          <Text style={styles.btnText}>View Suggested Locations</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  smallText: {
    fontSize: 14,
    textTransform: "uppercase",
    // fontWeight: "bold",
    paddingLeft: 5,
  },
  smallText2: {
    fontSize: 14,
    textTransform: "uppercase",
    fontWeight: "bold",
    paddingLeft: 5,
    color: "blue",
  },
  view1: {
    height: "55%",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 2,
    borderColor: colors.primary,
  },
  text1: {
    color: "#black",
    fontSize: 18,
    paddingHorizontal: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  text1Container: {
    alignItems: "center",
    justifyContent: "center",
  },
  picContainer: {
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "85%",
    marginVertical: 10,
  },
  btnText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
  view2: {
    marginTop: 20,
    height: "25%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 30,
    marginRight: 50,
  },
  view3: {
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderTopWidth: 2,
    borderColor: colors.primary,
  },
  // View3left: {
  //   flex: 1,
  //   width: "50%",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // view3right: {
  //   flex: 1,
  //   width: "50%",
  //   alignItems: "flex-start",
  //   justifyContent: "center",
  // },
});
export default BestTime;
