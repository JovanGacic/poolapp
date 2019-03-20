import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { Header, Card, CardSection, Button, Input, Spinner} from './common/index';

import firebase from 'firebase';

export default class LoginForm extends Component {

  state = {   email: '',
              error: '',
              loading: false  
};

  onButtonPress() {
      
      const {email } = this.state;

      this.setState({ error: '', loading: true });

      firebase.auth().signInWithEmailAndPassword(email.trim())
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFailed.bind(this))
  }

  onLoginFailed() {
      if (this.state.email == '') 
        this.setState({ 
          error: "You haven't entered your email.", 
          loading: false
          });
      else 
        this.setState({ 
        error: 'Authentication Failed.', 
        loading: false
        });
  }

  onLoginSuccess(){
      this.setState({ 
      email: '',
      loading: false,
      error: ''
      });   
  }

  renderButton() {
      if (this.state.loading) {
      return <Spinner size="small"/>
      }

      return (
      <Button onPress={this.onButtonPress.bind(this)} >
        Log in
      </Button>   
      );
      }

  render()  {
      return ( 
        <KeyboardAvoidingView behavior="padding"
        > 
          <ImageBackground source={require('../../assets/poolbackground.jpg')} style={{width: '100%', height: '100%'}}>
              <Card style={{flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            alignItems: 'stretch',
                            marginBottom: '10%'
                          }}>
                <CardSection style={{borderTopLeftRadius:20, borderTopRightRadius:20}}>
                    <Input 
                        placeholder = "user@email.com"
                        placeholderTextColor="rgba(0,0,0,0.5)" 
                        label = "Email"
                        value = {this.state.email}
                        onChangeText = {email => this.setState({ email })}
                    />
                </CardSection>
             
                <CardSection>
                    {this.renderButton()}
                </CardSection>
              
                <CardSection style={{height:18, justifyContent: 'center', borderBottomLeftRadius:20, borderBottomRightRadius:20}}> 
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                </CardSection>
            </Card>
            
         </ImageBackground>
      </KeyboardAvoidingView>
      );
     }
    
    // goToRegistration(){
    //   this.props.navigation.navigate('Registration');
    // }

  }

const styles = {
    errorTextStyle: {
    fontSize: 15,
    alignSelf: 'center',
    color: 'red',
    },
    registration: {
      fontSize: 15,
      
    }
};
