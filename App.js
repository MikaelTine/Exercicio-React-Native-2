import React from 'react'
import { 
  ScrollView,
  ActivityIndicator,
  Switch,
  TouchableHighlight,
  StatusBar, 
  TouchableOpacity, 
  Text, 
  ImageBackground, 
  Button, 
  Image, 
  View 
  } from 'react-native'

import img from "./assets/Emoji.png"

const image = {uri: 'https://reactjs.org/logo-og.png'}

export default class App extends React.Component {
  state = {
    resizeMode: 'repeat',
    isEnable: false
  }


  render() {
    return (


      <View style={{marginTop: 10}}>
        <Image
          resizeMode= {this.state.resizeMode}
          source={{uri: 'https://picsum.photos/id/1035/100/100.jpg'}}
          style={{ width: 300, height: 200, alignSelf: 'center'}}
        />


        <View style={{padding: 16, alignContent:'space-araund' }}>
          <Button
            title='Cover'
            onPress={()=>this.setState({resizeMode: 'cover'})}
          />
          <Button
            title="Contain"
            onPress={() => this.setState({resizeMode: 'contain'})}
          />
          <Button
            title="Stretch"
            onPress={() => this.setState({resizeMode: 'stretch'})}
          />
          <Button
            title="Repeat"
            onPress={() => this.setState({resizeMode: 'repeat'})}
          />
          <Button
            title="Center"
            onPress={() => this.setState({resizeMode: 'center'})}
          />       
        </View>


        <View>
          <Image
            source={img}
            style={{ width: 100, height: 100, alignSelf: "center"}}
          />
        </View>


        <View style={{flex: 1}}>
          <ImageBackground
            source={image}
            style={{flex: 1, justifyContent: 'center'}}
          >
          <Text
            style={{ color: 'black', fontSize: 30, textAling: 'center'}}
          >Hello React Native</Text>
          </ImageBackground>
        </View>


        <View style={{padding: 16}}>
          <TouchableOpacity 
            activeOpacity={0.05}
            onPress={_ =>alert('Precionado.')}>
              <Text>Um Texto clicavel.</Text>
          </TouchableOpacity>
          <StatusBar style="auto"/>

          <TouchableHighlight
            activeOpacity={0.6}
            onPress={_ =>alert('Precionado.')}
            underlayColor='aqua'>
              <Text>Um Texto clicavel.</Text>
          </TouchableHighlight>
        </View>

        
        <View style={{marginTop:20, flexDirection: 'row', alignItems: 'center'}}>
          <Text>Ativar Opção? </Text>
          <Switch
            value={this.state.isEnable}
            onValueChange={() => this.setState({isEnable: !this.state.isEnable})}
            trackColor={{false: '#333', true: '#F00' }}
          />
        </View>


        <View style={{
          marginTop:20, 
          flexDirection: 'row', 
          justifyContent: 'space-around', 
          alignItems: 'center'
          }}>
            <ActivityIndicator color='blue'   size="small" />
            <ActivityIndicator color='red'  size="large" />
            <ActivityIndicator color='green' size={80} animating={this.state.isEnable} />
        </View>


        <ScrollView 
          //horizontal={true}
          onScrollBeginDrag={_ => alert('Iniciou a Rolagem')}
          onScrollEndDrag={_ => alert('Terminou a Rolagem')}>
          <Image source={image} style={{ height: 300, width:300 }} />
          <Image source={image} style={{ height: 300, width:300 }} />
          <Image source={image} style={{ height: 300, width:300 }} />
        </ScrollView>



      </View>
    )
  }
}