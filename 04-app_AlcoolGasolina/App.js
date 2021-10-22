import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      alcool: null,
      gasolina: null,
      calc: '',
      result: ''
    }

    this.calc = this.calc.bind(this);
  }

  calc() {
    let alcool = this.state.alcool;
    let gasolina = this.state.gasolina;

    let message = '';

    if (alcool == null || gasolina == null)
      message = 'Digite todos os valores';
    else {
      if (alcool / gasolina > 0.7) 
        message =  'A gasolina é mais vantasoja!';
      else 
        message =  'O álcool é mais vantasojo!';
    }

    this.setState({
      result: message,      
    });
  }

  render() {
    let img = './img/alcoolGasolina.png';    

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Cálculo do Álcool e Gasolina
        </Text>

        <View style={styles.linha}></View>

        <Image 
          source={require(img)}
          style={styles.image}
        />
        <Text style={styles.label}>Digite o valor do álcool:</Text>
        <TextInput 
          style={styles.input}
          keyboardType={'numeric'}
          onChangeText={(text) => {this.setState({alcool: text})}}
        />
        <Text style={styles.label}>Digite o valor da gasolina:</Text>
        <TextInput 
          style={styles.input}
          keyboardType={'numeric'}
          onChangeText={(text) => {this.setState({gasolina: text})}}
        />
        <Pressable style={styles.button} onPress={this.calc}>
          <Text style={styles.text}>Calcular</Text>
        </Pressable>
        <Text style={styles.result}>{this.state.calc}</Text>
        <Text style={styles.result}>{this.state.result}</Text>
      </View>
    );
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
    color: 'rgb(45, 46, 92)'
  },
  linha: {
    width: '100%',
    height: 1,
    backgroundColor: 'grey',
    marginBottom: 8
  },
  image: {
    width: 180,
    height: 180,
    marginTop: 10,
    marginBottom: 25,
    alignSelf: 'center'
  },
  label: {
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
    color: 'white',
  },
  result: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18, 
    marginBottom: 2
  }
});

export default App;
