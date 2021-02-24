import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {commonStyles} from '../utils/Theme';

const Login = (props) => {
  const [confirm, setConfirm] = useState(null);
  const [number, setNumber] = useState('');
  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phoneNumber.match(phoneno)) {
      let finalNumber = `+91${phoneNumber}`;
      let confirmation = await auth()
        .signInWithPhoneNumber(finalNumber)
        .then((confirmResult) => {
          console.log('confirmResult---->', confirmResult);
        })
        .catch((error) => console.log('error--->', error));

      setConfirm(confirmation);
    } else {
      alert('Invalid Mobile Number');
      return false;
    }
  }

  async function confirmCode() {
    try {
      let final = await confirm.confirm(code);
      if (final) {
        //navigation to dashboard
        console.log('final---->', final);
        props.navigation.navigate('Dashboard');
      }
    } catch (error) {
      alert('Invalid code.');
    }
  }
  if (!confirm) {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => Keyboard.dismiss()}>
        <View style={{width: 100, marginBottom: 20, alignSelf: 'center'}}>
          <Text style={commonStyles.text}>SWAPI</Text>
        </View>

        <TextInput
          style={styles.textInputStyle}
          placeholder={'Enter your mobile number'}
          keyboardType={'phone-pad'}
          value={number}
          onChangeText={(text) => setNumber(text)}
        />
        <Button
          title="Submit and Check Captcha"
          onPress={() => signInWithPhoneNumber(number)}
        />
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => Keyboard.dismiss()}>
      <View style={{width: 100, marginBottom: 20, alignSelf: 'center'}}>
        <Text style={commonStyles.text}>SWAPI</Text>
      </View>
      <TextInput
        style={styles.textInputStyle}
        placeholder={'Enter your code'}
        value={code}
        keyboardType={'phone-pad'}
        onChangeText={(text) => setCode(text)}
      />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    width: 250,
    alignSelf: 'center',
  },
  textInputStyle: {borderWidth: 1, marginBottom: 20, borderRadius: 14},
};
export default Login;
