import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Button, Input, Overlay } from 'react-native-elements';
import Modal from 'react-native-modal';

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        padding: 5
    },
    repText: {
        fontSize: 20
    }
})

export default function HomeScreen() {
    const [showLogin, setShowLogin] = useState(false)
    const [login, setLogin] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
      setVisible(!visible);
    }

    return (
      <>
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent:"space-evenly", margin: 10, padding: 5, backgroundColor:"#afabeb"}}>
        <View>
          {!login ?
            <>
              <Text style={{fontSize:25, fontWeight:"bold", textAlign:"center"}}>Welcome to your 30 Day Challenge! </Text>
              <View style={{alignItems: 'center', justifyContent:"space-evenly"}} onPress={()=>close}>
                <Text style={{padding: 10}}>Please log in below!</Text>
                <Button
                  onPress={() => setShowLogin(true)}
                  title="Login"
                  style={{ padding: 5 }}
                /> 
              </View>
            </>
            :
            <>
              <View style={{alignItems: 'center', justifyContent:"space-between"}}>
                <Text style={{fontSize:25, fontWeight:"bold", padding: 10}}>Welcome back, {username}!</Text>
                <Button
                  onPress={() => setLogin(false)}
                  title="Logout"
                  style={{ padding: 5 }}
                />
              </View>
            </>
          }
          <Overlay isVisible={showLogin} ModalComponent={Modal}>
            <View style={{padding:5, margin: 5, width: 200}}>
            <Text>Please login below</Text>
              <Input placeholder="Username" value={username} onChangeText={(un => setUsername(un))}></Input>
              <Input placeholder="Password" value={password} secureTextEntry={true} onChangeText={(pw => setPassword(pw))}></Input>
              <Button title="Login" onPress={() => { setLogin(true); setShowLogin(false) }} style={{ padding: 5 }}></Button>
            </View>
          </Overlay>
        </View>
        </SafeAreaView>
      </>
    )
}