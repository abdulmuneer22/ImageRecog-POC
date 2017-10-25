import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ModulesList from '../../components/modulesList'

const List = [
    {
        name : 'Facial Recognition',
        id : 0
    },
    {
        name : 'Facial Unlock',
        id : 1
    },
    {
        name : 'Face Match',
        id : 2
    },
    {
        name : 'Face Search',
        id : 3
    },
    {
        name : 'Image Translator',
        id : 4
    },
    {
        name : 'Image Search',
        id : 5
    }
]

export class EntryModule extends Component {

    _handleModuleClick = () => {
        this.props.navigation.navigate('FaceRecog')
    }
        

    render() {
    return (
        <View style={{
        paddingTop : 25,
        flex : 1,
        paddingHorizontal : 10,
        justifyContent : 'center'
        }}>
            <ModulesList
            onPress = {this._handleModuleClick}
            listItems = {List}/>
        </View>
    )
    }
}

export default EntryModule