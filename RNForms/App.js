import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Switch,
  Button,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitted", username, password);
      setUsername("");
      setPassword("");
      setErrors({});
    }
  }; 

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.os === "ios" ? 100 : 20}
      style={styles.container2}
    >
      <View style={styles.form}>
        <Image
          source={require("./assets/adaptive-icon.png")}
          style={styles.image}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />
        {errors.username ? (
          <Text style={styles.errorText}>{errors.username}</Text>
        ) : null}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {errors.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
        ) : null}
        <Button title="Login" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
    // <SafeAreaView style={styles.container}>
    //   <TextInput
    //     style={styles.input}
    //     value={name}
    //     onChangeText={setName}
    //     placeholder="example@email.com"
    //     autoCapitalize="none"
    //     // autoCorrect="false"
    //     // secureTextEntry
    //     // keyboardType="numeric"
    //   />

    //   <Text style={styles.text}>My name is:{name}</Text>

    //   <View style={styles.switchContainer}>
    //     <Text style={styles.text}>Dark Mode</Text>
    //     <Switch
    //       value={isDarkMode}
    //       onValueChange={() => setIsDarkMode((previousState) => !previousState)}
    //       trackColor={{ false: "#767577", true: "lightblue" }}
    //       thumbColor="#f4f3f4"
    //     />
    //   </View>
    // {/* // </SafeAreaView> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
  container2: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 30,
    marginBottom: 5,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 50,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    fontSize: 30,
    padding: 10,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
