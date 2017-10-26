import React, { Component } from 'react'
import { Text, View , TouchableHighlight } from 'react-native'
import {Metrics} from '../../../constants'

export class Button extends Component {
  render() {
    return (
      <TouchableHighlight
      onPress = {this.props.onPress}
      style={{
        width : this.props.width || Metrics.FULL_WIDTH * 0.4,
        backgroundColor : this.props.backgroundColor || 'green',
        alignItems : 'center',
        justifyContent : 'center',
        paddingVertical : 10,
        borderRadius : 6,
        marginVertical : 5
      }}>
        <Text style={{
            color : this.props.color || 'white'
        }}> {this.props.label || 'Label'} </Text>
      </TouchableHighlight>
    )
  }
}

export default Button