import React, { Component } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      quant: 0
    };

    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar() {
    this.setState({
      quant: this.state.quant + 1
    });
  }

  diminuir() {
    this.setState({
      quant: this.state.quant - 1
    });
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Contador de Pessoas</Text>

        <View style={styles.linha}></View>

        <Text style={styles.contador}>{this.state.quant}</Text>

        <ButtonPressable title={'+'} func={this.aumentar} color={'#03BB85'}/>
        <ButtonPressable title={'-'} func={this.diminuir} color={'#DC143C'}/>
      </View>
    )
  }
}

class ButtonPressable extends Component {
  render() {
    return(
      <Pressable style={[styles.button, {backgroundColor:this.props.color}]} onPress={this.props.func}>
        <Text style={styles.text}>{this.props.title}</Text>
      </Pressable>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center'
  },
  title:{
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
  contador:{
    fontSize: 30,
    textAlign: 'center',
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderColor: 'rgb(45, 46, 92)',
    borderRadius: 5,
    marginBottom: 20,
    width: '30%'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'black',
    marginBottom: 10,
    width: '100%'
  },
  text: {
    fontSize: 25,
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 3
  }
});

export default App;
