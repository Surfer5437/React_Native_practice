import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container,styles.darkMode]}>
      <View style={[styles.lightblueBG, styles.box,styles.boxShadow,styles.androidShadow]}>
        <Text>Light blue box</Text>
      </View>
      <View style={[styles.lightgreenBG, styles.box,styles.androidShadow]}>
        <Text>Light green box</Text>
      </View>
      <Text style={styles.darkModeText}>Styles practice app !</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkMode:{
    backgroundColor:"black"
  },
  darkModeText:{
    color:"white"
  },
  box: {
    width: 200,
    height: 100,
    paddingVertical: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: "black",
    borderRadius:25
  },
  lightblueBG: {
    backgroundColor: 'lightblue'
  },
  lightgreenBG: {
    backgroundColor: 'lightgreen'
  },
  boxShadow:{
    shadowColor:"blue",
    shadowOffset:{
      width:6,
      height:6
    },
    shadowOpacicity:0.6,
    shadowRadious: 6

  },
  androidShadow:{
    elevation:10
  }
});
