import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';

class App extends Component{

  state = {
    txt: 'Segure a frase pressionada',
    primeiratela: false,
    primeirapalavra: false
    
  }

  alterarcordofundo = () => {
    let {primeiratela} = this.state;
    this.setState({primeiratela:!primeiratela})

  }

  function = () => {
    let {primeirapalavra} = this.state;
    this.setState({primeirapalavra:!primeirapalavra})
    this.setState({primeirapalavra:true})
    this.setState({txt:'Funcionou'});    
    
  }

 

  render(){
    let {txt} = this.state;
    let {primeiratela} = this.state;
    let {primeirapalavra} = this.state;

    return(
      <View style={[styles.tela,  (primeiratela ? styles.primeiratela : {})]}> 
        <Text onPress={this.alterarcordofundo} onLongPress={this.function} style={[styles.letras,(primeirapalavra ? styles.primeirapalavra : {})]}>{txt}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  primeiratela:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  letras: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25
  },
  primeirapalavra: {
    textAlign: 'center',
    color: 'yellow',
    fontSize: 25
  }
})

export default App;