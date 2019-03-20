import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Picker } from 'react-native';
import { Header, Card, CardSection, Button, Input, Spinner} from './common/index';

import firebase from 'firebase';

export default class Registration extends Component {

    state = {
        name: '',
        lastname: '',
        password: '',
        repeatedPassword: '',
        language: ''
    } 

    render(){
       return ( 
        <KeyboardAvoidingView behavior="padding"
        >    
            <ImageBackground source={require('../../assets/regbackground.jpg')} style={{width: '100%', height: '100%'}}>
                <Card>
                    <CardSection>
                        <Input 
                            placeholder = "John"
                            placeholderTextColor="rgba(0,0,0,0.5)" 
                            label = "Name"
                            value = {this.state.name}
                            onChangeText = {name => this.setState({ name })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input 
                            placeholder = "Doe"
                            placeholderTextColor="rgba(0,0,0,0.5)" 
                            label = "Last name"
                            value = {this.state.lastname}
                            onChangeText = {lastname => this.setState({ lastname })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            secureTextEntry
                            placeholder = "Not 123"
                            placeholderTextColor="rgba(0,0,0,0.5)" 
                            label = "Password"
                            value = { this.state.password }
                            onChangeText = { password => this.setState({ password })}
                        />   
                    </CardSection>
                    <CardSection>
                        <Input
                            secureTextEntry
                            placeholder = "Not 123"
                            placeholderTextColor="rgba(0,0,0,0.5)" 
                            label = "Repeat"
                            value = { this.state.repeatedPassword }
                            onChangeText = { repeatedPassword => this.setState({ repeatedPassword })}
                        />   
                    </CardSection>
                    <CardSection>
                        <Picker
                            
                            selectedValue={this.state.language}
                            style={{flex:1, width: 100, marginLeft: '5%'}}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({language: itemValue})
                            }>
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                    </CardSection>
                </Card>
            </ImageBackground>
        </KeyboardAvoidingView>
       )
    }
}