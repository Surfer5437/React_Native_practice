import { View, Text, Image, ImageBackground, ScrollView, Button, Pressable, Modal, ActivityIndicator, Alert } from 'react-native'
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Greet from './components/Greet'

const logoIMG = require("./assets/adaptive-icon.png")


export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return <View style={{ flex: 1, backgroundColor: "plum", padding: 20 }}>
    <ScrollView>
      <ActivityIndicator />
      <ActivityIndicator size={'large'} color={'midnightblue'} animating={false} />
      <StatusBar backgroundColor='green' barStyle="light-content" />
      <Text><Text style={{ color: "white" }}>Hello</Text> world</Text>
      <Image source={logoIMG} style={{ width: 200, height: 200 }} />
      <Image source={{ uri: "https://picsum.photos/300" }}  style={{ width: 200, height: 200 }} />
      {/* <ImageBackground source={logoIMG} style={{flex:1}}>
      <Text>IMAGE TEXT</Text>
    </ImageBackground> */}
      <Button title="Show Modal" onPress={() => setIsModalVisible(true)} color="midnightblue" />
        <Greet name="Bruce Wayne" />
      <Button title="Alert" onPress={() => Alert.alert("Invalid Data")} color="midnightblue" />
      <Button title="Alert2" onPress={() => Alert.alert("Invalid Data", "DOB incorrect")} color="midnightblue" />
      <Button title="Alert3" onPress={() => Alert.alert("Invalid Data", "DOB incorrect", [
        {
          text: `Cancel`,
          onPress: () => console.log('cancel pressed')
        },
        {
          text: `OK`,
          onPress: () => console.log('OK pressed')
        }]
      )} color="midnightblue" />
      <Pressable onPress={() => console.log("IMG PRESSED")}>
        <Text>
          lorem jksoidfjosjoliejfoij soijd foij soifj oisj foisjofijsoijf oiwsj foisjdfoijsoidfj woijefowengoisnvioupnaoijnfvioeawun mfvilajnsdf liansdlfikuhbaliwkubnefilasnfilu f iouh foiulh afoh aufeh nilukajhf loui hfol;a; ehf;liansdlfikuhbaliwkubnefilasnfiluasdf
        </Text>
        <Image source={logoIMG} style={{ width: 200, height: 200 }}/>
      </Pressable>
      <Modal visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType='slide'
        // animationType='fade'
        presentationStyle='pageSheet'
      // presentationStyle='formSheet'
      >
        <View style={{ flex: 1, backgroundColor: "midnightblue", padding: 60 }}>
          <Text style={{ color: "white" }}>Modal content</Text>

          <Button title="Close" onPress={() => setIsModalVisible(false)} color="pink" />
        </View>
      </Modal>
    </ScrollView>
  </View>;
}