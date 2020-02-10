import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View} from 'react-native';  
  
type Props = {};  
export default class Planning extends Component<Props> {  
  render() {  
    return (  
      <View>  
        <Text style={styles.welcome}>Planning</Text>  
      </View>  
    );  
  }  
}  
const styles = StyleSheet.create({  
  welcome: {  
    fontSize: 20,  
    textAlign: 'center',  
    margin: 10,  
    paddingTop: 20,
  }  
});  