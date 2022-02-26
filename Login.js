import React from "react";
import { Text, View, Image } from 'react-native';
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const Login = () => {
  const [phoneNumber, onChangephoneNumber] = React.useState("");
  const [OTP, onChangeOTP] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangephoneNumber}
        value={phoneNumber}
        placeholder="Enter Phone Number"
        keyboardType="numeric"
      />
      <View>
      <Button 
      title="Send OTP"
      onPress={() => fetch('https://dev.stedi.me/twofactorlogin/'+phoneNumber, {method: "post"})}/>
      </View> 
      <TextInput
        style={styles.input}
        onChangeText={onChangeOTP}
        value={OTP}
        placeholder="Enter OTP"
        keyboardType="numeric"
      />
      <View>
      <Button 
      title="Login"
      onPress={() => fetch('https://dev.stedi.me/twofactorlogin/')}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});;

export default Login