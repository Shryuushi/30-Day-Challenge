import * as React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Button } from 'react-native-elements'
import GroceryListScreen from "./GroceryListScreen"

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
    return (
        <View style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent:"center"
        }}>
            <Button 
                title="Grocery List"
                style={styles.buttonStyle}
                onPress = {() => navigation.push('Details')}
            ></Button>
        </View>
    )
}