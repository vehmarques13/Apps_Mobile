import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      altura: null,
      peso: null,
      calc: '',
      result: ''
    }

    this.calc = this.calc.bind(this);
  }

  calc() {
    let altura = this.state.altura;
    let peso = this.state.peso;

    let message = '';

    if (altura == null || peso == null)
      message = 'Digite todos os valores';
    else {
      let calc = peso / (altura * altura);

      switch(true) {
        case (calc <= 18.5):
          message = 'Abaixo do peso!';
          break;
        case (calc > 18.5 && calc <= 24.9):
          message = 'Peso normal!';
          break;
        case calc > 24.9 && calc <= 29.9:
          message = 'Sobrepeso!';
          break;
        case calc > 29.9 && calc <= 34.9:
          message = 'Obesidade Grau I!';
          break;
        case calc > 34.9 && calc <= 39.9:
          message = 'Obesidade Grau II!';
          break;
        default: 
          message = 'Obesidade Grau III ou Mórbida!';
          break;        
      }

      this.setState({calc: 'Resultado do IMC: ' + calc.toPrecision(4)});
    }

    this.setState({
      result: message,      
    });
  }

  render() {
    let img = './img/imc.jpg';    

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Cálculo do IMC
        </Text>

        <View style={styles.linha}></View>

        <Image 
          source={require(img)}
          style={styles.image}
        />
        <Text style={styles.label}>Digite sua altura:</Text>
        <TextInput 
          style={styles.input}
          keyboardType={'numeric'}
          onChangeText={(text) => {this.setState({altura: text})}}
        />
        <Text style={styles.label}>Digite seu peso:</Text>
        <TextInput 
          style={styles.input}
          keyboardType={'numeric'}
          onChangeText={(text) => {this.setState({peso: text})}}
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
    lineHeight: 15,
    paddingTop: 20,
    color: 'rgb(45, 46, 92)'
  },
  linha: {
    width: '100%',
    height: 1,
    backgroundColor: 'grey',
    marginBottom: 8
  },
  image: {
    width: 220,
    height: 220,
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
