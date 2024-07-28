import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions,useWindowDimensions, SafeAreaView } from 'react-native';
import Box from "./components/Box";
import CustomButton from './components/CustomButton/CustomButton';
// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;




export default function App() {

// const [dimensions, setDimensions] = useState({
//   window: Dimensions.get("window")
// })

// useEffect(() =>{
//   const subscription = Dimensions.addEventListener("change", ({window}) =>{
// setDimensions({ window });
//   })
//   return ()=> subscription?.remove();
// })

// const { window } = dimensions;
// const windowWidth = window.width;
// const windowHeight = window.height;

const windowWidth = useWindowDimensions().width;
const windowHeight = useWindowDimensions().height;

  return (
      <SafeAreaView style={styles.safeContainer}>
    <View style={styles.container}>
      <CustomButton title="Press me" onPress={() => alert("Pressed!")} />
      <Box style={{ backgroundColor: "#8e9b00", height:windowHeight>1500? "60%" : "90%", width:windowWidth>500? "70%" : "90%" }}>Box 1</Box>
      {/* <Box style={{ backgroundColor: "#b65d1f", alignSelf: "flex-start" }}>Box 2</Box>
      <Box style={{ backgroundColor: "#1c4c56", alignSelf: "center" }}>Box 3</Box> */}
      {/* <Box style={{ backgroundColor: "#ab9156" }}>Box 4</Box>
      <Box style={{ backgroundColor: "#6b0803" }}>Box 5</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 6</Box>
      <Box style={{ backgroundColor: "#b95f21" }}>Box 7</Box> */}
      <Text style={{fontSize: windowWidth > 500 ? 50: 24}}>Testing Text</Text>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  safeContainer:{
    flex:1,
    backgroundColor: "red"
  },
  container: {

    // height:windowHeight>600? "60%" : "90%",
    // width:windowWidth>500? "70%" : "90%",
    // fontSize:windowWidth>500?50:24,
    // flexWrap:"wrap",
    // flexDirection:"row",
    // flex:1,
    // justifyContent: "space-evenly",
    // alignItems:"center",
    // alignContent:"stretch",
    // rowGap:20,
    // columnGap:20,
    // marginTop: 64,
    // borderWidth: 6
  },
});
