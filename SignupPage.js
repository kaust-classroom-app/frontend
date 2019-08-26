import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, KeyboardAvoidingView, ScrollView } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  state = {
    FullName: '',
    password: '',
    email: '',
    instructor: false,
  };
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };

  
  validName(myString) {
    if ( (/^[A-Za-z\s]+$/gi.test(myString)) || (/^$/.test(myString)) ){
      return true
    }
  }

  nameChangeText = (key, val) => {
    if (this.validName(val)) {
      this.setState({ [key]: val });
    }
  };


  signUp = async () => {
    const { FullName, password, email } = this.state;
    try {
      // here place your signup logic
      console.log('user successfully signed up!');
    } catch (err) {
      console.log('error signing up: ', err);
    }
  };


  render() {
    return (

      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ScrollView>
        <Text style={styles.title}>Sign up for RecordKeeper!</Text>

        <Text style={styles.paragraph}>Full name:</Text>

        <TextInput
          style={styles.input}
          
          autoCapitalize="words"
          placeholderTextColor="black"
          value={this.state.FullName}
          onChangeText={val => this.nameChangeText('FullName', val)}
          placeholder="Enter your full name"
        />

        <Text style={styles.paragraph}>Email address:</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          autoCapitalize="none"
          placeholderTextColor="black"
          onChangeText={val => this.onChangeText('email', val)}
        />

        <Text style={styles.paragraph}>Password:</Text>

        <TextInput
          style={styles.last}
          secureTextEntry={true}
          placeholder="Enter your password"
          autoCapitalize="none"
          placeholderTextColor="black"
          
          onChangeText={val => this.onChangeText('password', val)}
        />

        <Button style={styles.button} title="Sign up!" onPress={this.signUp} />
        </ScrollView>>
      </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 3,
    fontSize: 18,
    fontWeight: 'bold',
    //textAlign: 'left',
  },

  title: {
   // textAlign: 'center',
    //justifyContent:'center',
    fontSize: 40,
  },
  button: {
    margin: 100,
    borderRadius: 30,
    color: 'red',
  },
  input: {
    width: '95%',
    height: 40,
    //alignSelf: 'left',
    backgroundColor: 'white',
    margin: 2,
    padding: 8,
    color: 'black',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },

  last: {
    width: '95%',
    height: 40,
    //alignSelf: 'left',
    backgroundColor: 'white',
    margin: 4,
    padding: 8,
    color: 'black',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
    //borderBottomWidth: 10,
    marginBottom: 25,
  },
});