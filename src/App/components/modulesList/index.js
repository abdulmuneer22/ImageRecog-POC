import React, { Component } from 'react'
import { Text, View , FlatList, StyleSheet , TouchableOpacity } from 'react-native'
import {Metrics, Colors} from '../../../constants'

export class ModulesList extends Component {

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => {
    return (
      <View style={{
        backgroundColor : 'rgb(212, 220, 224)',
        marginHorizontal  : 5,
        marginVertical : 5,
        height : 40,
        alignItems : 'center',
        justifyContent : 'center'
      }}>
        <Text style={{
          color : Colors.FADED_TEXT,
        }}>
          {item.name}
        </Text>
      </View>
    );
  }

  render() {
    const {listItems} = this.props
    return (
      <TouchableOpacity
      onPress = {this.props.onPress}
      style={{
        justifyContent : 'center',
        alignSelf : 'center',
        flex : 1,
        width : Metrics.FULL_WIDTH * 0.9,
        paddingVertical : 20
      }}>
          <Text style={{
            color : Colors.FADED_TEXT,
            textAlign : 'center',
            paddingVertical : 10,
            fontWeight : '600',
            fontSize : 20
          }}>
            Modules List
          </Text>
          <FlatList
          contentContainerStyle={{
            flex : 1,
            //alignItems : 'center',
            justifyContent : 'center'
          }}
          showsVerticalScrollIndicator = {false}
          data={listItems}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          />
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  ListItem : {

  }
})

export default ModulesList