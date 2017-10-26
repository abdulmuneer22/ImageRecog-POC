import React, { Component } from 'react'
import { Text, View , CameraRoll , FlatList , Image, TouchableOpacity} from 'react-native'
import {Metrics} from '../../../constants'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
          images: [],
          received: false,
          showActivity: true
        };
      }

    _keyExtractor = (item, index) => item.uri;

    _renderItem = ({item}) => {
        return(
                <TouchableOpacity
                onPress = {() => this.props.onPress(item)}
                >
                <Image style={{
                    width : (Metrics.FULL_WIDTH / 3) - 10,
                    height : (Metrics.FULL_WIDTH / 3) - 10,
                    borderRadius : 6,
                    margin : 5,
                }} 
                //resizeMode = 'center'
                source ={{uri : item.uri}}
                />
                </TouchableOpacity>
        );
    }
    componentDidMount() {
        selectedPhotos = [];
        CameraRoll.getPhotos({
            first: 200,
            assetType: 'Photos',
        })
            .then((data) => {
            if (data) {
                var size = 3000;
                const edges = data.edges.slice(0, size);
                var currentState = this.state.images;
                edges.forEach((item) => {
                //var currentState = this.state.images;
                currentState.push({
                    uri: item.node.image.uri
                });

                });
                this.setState({
                images: currentState,
                received: true
                });
            }
            });
    }

    render() {
        console.log("images" , this.state)
        return (
        <View style={{
            backgroundColor : 'rgba(1,1,1,0.7)',
            width : Metrics.FULL_WIDTH,
            height : Metrics.FULL_HEIGHT
        }}>

            <View style={{
                marginTop : Metrics.FULL_HEIGHT * 0.3,
                height : Metrics.FULL_HEIGHT * 0.7,
                backgroundColor : 'white',
            }}>
                <View style={{
                    paddingVertical : 10,
                    paddingHorizontal : 5,
                    flexDirection : 'row'
                }}>
                    <Text style={{
                        fontSize : 18,
                        color : 'black'
                    }}>Image Upload</Text>

                    <TouchableOpacity style={{
                        flex : 1,
                        alignItems : 'flex-end',
                        justifyContent : 'center'
                    }}>
                        <Icon name='camera-retro'
                        color = 'black'
                        size={25}/>
                    </TouchableOpacity>
                </View>
                <FlatList
                numColumns={3}
                showsVerticalScrollIndicator = {false}
                data={this.state.images}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                />
            </View>
            
        </View>
        )
    }
}