import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      n1: 0,
      n2: 0,
      result: 0
    };

    this.mult = this.mult.bind(this);
  }

  mult() {
    this.setState({
      result: this.state.n1 * this.state.n2
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Multiplicador de números</Text>

        <View style={styles.linha}></View>

        <Text style={styles.label}>Primeiro número:</Text>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
          placeholder='Digite o primeiro número'
          onChangeText={(text) => this.setState({n1: text})}
        />

        <Text style={styles.label}>Segundo número:</Text>
        <TextInput 
          style={styles.input}
          keyboardType='numeric'
          placeholder='Digite o segundo número'
          onChangeText={(text) => this.setState({n2: text})}
        />

        <Pressable style={styles.button} onPress={this.mult}>
          <Text style={styles.text}>Multiplicar</Text>
        </Pressable>

        <Text style={styles.result}>Resultado: {this.state.result}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 15,
    paddingTop: 20,
    color: 'rgb(45, 46, 92)'
  },
  linha: {
    width: '100%',
    height: 1,
    backgroundColor: 'grey',
    marginBottom: 25
  },
  label:{
    textAlign: 'left',
    color: 'rgb(45, 46, 92)',
    fontSize: 16,
    marginBottom: 5,
    fontStyle: 'normal'
  },
  input: {
    width: '100%',
    borderColor: 'rgb(45, 46, 92)',
    borderWidth: 1,
    padding: 5,
    marginBottom: 20,
    borderRadius: 5,
    fontSize: 16,
    fontStyle: 'normal'
  }, 
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    borderRadius: 6,
    backgroundColor: 'rgb(45, 46, 92)',
    width: '100%',
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'white'
  },
  result: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18, 
    marginBottom: 2
  }
});

export default App;