import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Picker, KeyboardAvoidingView, ScrollView} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  state = {
    QuestionText: '',
    AnswerA: '',
    AnswerB: '',
    AnswerC: '',
    AnswerD: '',
    AnswerE: '',
    CorrectAnswer:'',
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
          <Text style={styles.title}>Create a new question</Text>

          <Text style={styles.paragraph}>Enter question text:</Text>

          <TextInput
            style={styles.input}
            //autoCapitalize="words"
            placeholderTextColor="black"
            value={this.state.QuestionText}
            onChangeText={val => this.nameChangeText('QuestionText', val)}
            //placeholder="Enter your full name"
          />

          <Text style={styles.paragraph}>Answer A:</Text>

          <TextInput
            style={styles.input}
            //autoCapitalize="none"
            placeholderTextColor="black"
            onChangeText={val => this.onChangeText('AnswerA', val)}
            value={this.state.AnswerA}
          />

          <Text style={styles.paragraph}>Answer B:</Text>

          <TextInput
            style={styles.input}
            //autoCapitalize="none"
            placeholderTextColor="black"
            onChangeText={val => this.onChangeText('AnswerB', val)}
            value={this.state.AnswerB}
          />

          <Text style={styles.paragraph}>Answer C:</Text>

          <TextInput
            style={styles.input}
            //autoCapitalize="none"
            placeholderTextColor="black"
            onChangeText={val => this.onChangeText('AnswerC', val)}
            value={this.state.AnswerC}
          />

          <Text style={styles.paragraph}>Answer D:</Text>

          <TextInput
            style={styles.input}
            //autoCapitalize="none"
            placeholderTextColor="black"
            onChangeText={val => this.onChangeText('AnswerD', val)}
            value={this.state.AnswerD}
          />

          <Text style={styles.paragraph}>Answer E:</Text>

          <TextInput
            style={styles.input}
            //autoCapitalize="none"
            placeholderTextColor="black"
            onChangeText={val => this.onChangeText('AnswerE', val)}
            value={this.state.AnswerE}
          />

          <Text style={styles.paragraph}>Choose the correct answer:</Text>
          <Picker
            selectedValue={this.state.CorrectAnswer}
            style={{ height: 50, width: 100, marginBottom: 8 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ CorrectAnswer: itemValue })
            }>
            <Picker.Item label="A" value="A" />
            <Picker.Item label="B" value="B" />
            <Picker.Item label="C" value="C" />
            <Picker.Item label="D" value="D" />
            <Picker.Item label="E" value="E" />
          </Picker>

         <View style={{flex:1 , marginBottom:5}} >
          <Button style = {styles.button} title = "Create and publish question" onPress={this.publish}/>
         </View>

          <Button style = {styles.button} title = "Create and save " onPress={this.save}/>
          </ScrollView>
        </KeyboardAvoidingView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
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
