import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Input, Overlay } from 'react-native-elements';
import Modal from 'modal-react-native-web';

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        padding: 5
    },
    repText: {
        fontSize: 20
    }
})

export default function HomeScreen({navigation}) {
    const [showLogin, setShowLogin] = useState(false)
    const [login, setLogin] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {!login ?
          <>
            <Text>Welcome, Please log in below!</Text>
            <Button
              onPress={() => setShowLogin(true)}
              title="Login"
              style={{ padding: 5 }}
            />
          </>
          :
          <>
            <Text>Welcome, {username}</Text>
            <Button
              onPress={() => setLogin(false)}
              title="Logout"
              style={{ padding: 5 }}
            />
          </>
        }
        <Overlay isVisible={showLogin} ModalComponent={Modal}>
          <Text>Please login below</Text>
          <Input placeholder="Username" value={username} onChangeText={(un => setUsername(un))}></Input>
          <Input placeholder="Password" value={password} secureTextEntry={true} onChangeText={(pw => setPassword(pw))}></Input>
          <Button title="Login" onPress={() => { setLogin(true); setShowLogin(false) }} style={{ padding: 5 }}></Button>
        </Overlay>
      </View>
    )
}