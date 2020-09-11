import React, {Component} from 'react';  
import {Platform, Text, View} from 'react-native';  
import { styles } from '../components/styles'

type Props = {};  
export default class Settings extends Component<Props> {  
  render() {  
    return (  
      <View>  
        <Text style={styles.welcome}>Settings</Text>  
      </View>  
    );  
  }  
}  
