import { StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import React,{useLayoutEffect, useState} from 'react'
import { StatusBar } from "expo-status-bar";
import {Button, Input, Text} from "react-native-elements"
import { auth } from '../firebase';

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [imageUrl, setImageUrl] = useState();
  
  useLayoutEffect(() => {
    navigation.setOptions({
        headerBackTitle: "Login",
      })
    }, [navigation])

  const register = () => {
     auth
       .createUserWithEmailAndPassword(email, password)
       .then((authUser) => {
         authUser.user.updateProfile({
           displayName: name,
           photoURL:
             imageUrl ||
             "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
         });
       })
       .catch((error) => alert(error.message));
    }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.inputContainer}>
        <Text h3 style={{ marginBottom: 50 }}>
          Create an account
        </Text>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile picture Url (optional)"
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>
      <Button
        raised
        containerStyle={styles.button}
        onPress={register}
        title="register"
      />
      <View style={{ height: 100 }}></View>
    </KeyboardAvoidingView>
  );
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: 'center',
      padding: 10,
      backgroundColor: "white",
  },
  button: {
    width: 200,
    marginTop: 10,
  },
  inputContainer: {
    width: 300,
  }
  
})