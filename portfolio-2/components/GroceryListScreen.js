import React from 'react';
import { StyleSheet, FlatList, SafeAreaView, TextInput, View, Text } from 'react-native';
import { Card, CheckBox, Button } from 'react-native-elements';

export default function GroceryListScreen({navigation}) {
  let [textInputValue, setTextInputValue] = React.useState("")
  let [data, setData] = React.useState([])

  let renderItem = ({ item }) => {
    return (
      <View style={styles.body}>
        <CheckBox
          checked={item.completed}
          onPress={() => {
            let newData = [...data]
            let itemToLookFor = newData.find((item2) => item.key == item2.key)
            itemToLookFor.completed = !itemToLookFor.completed
            setData(newData)
          }}></CheckBox>
        <Text style={item.completed ? { textDecorationLine: "line-through", textDecorationStyle: "solid" } : undefined}>
          {item.description}
        </Text>
        <Button
          onPress={() => {
            let removeData = [...data]
            let removeItem = removeData.filter((item2) => item.key != item2.key)
            setData(removeItem)
          }}
          title="Delete"
        ></Button>
      </View>
    )
  }

  function changedText(text) {
    setTextInputValue(text)
  }

  let addToDoItem = () => {
    let newItem = { key: (data.length + 1).toString(), description: textInputValue, completed: false }
    let addItem = data.concat(newItem)
    setData(addItem)
    console.log(data.key)
  }

  let handleKeyPress = (event) => {
    if (event.key == "Enter") {
      addToDoItem()
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <Card.Title style={styles.header}>Make a Grocery List for the Week!</Card.Title>
        <Text style={{textAlign:"center"}}>Keep track of what you need to eat healthy all week long.</Text>
        <FlatList data={data} renderItem={renderItem}></FlatList>
        <Card>
          <TextInput style={styles.input} value={textInputValue} onChangeText={changedText} onKeyPress={handleKeyPress}></TextInput>
          <Button title="Add new item" onPress={addToDoItem} style={styles.button}></Button>
        </Card>
      </Card>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    marginTop: 40,
    backgroundColor:"#afabeb",
  },
  body: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
    padding: 20,
  },
  input: {
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    height: 40,
    marginBottom: 12,
    marginLeft: 12,
    marginRight: 12,

  },
  button: {
    padding: 10,
  },
  header: {
    fontSize: 20,
  }
});