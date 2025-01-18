import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text, Card, Button, TextInput } from "react-native-paper";

export default function Profile({ route }) {

    const navigation = useNavigation();

    const studentDetails = route.params?.studentDetails

    function stuUpdate() {

        navigation.navigate('addstudent', {studentDetails:studentDetails})
    }

    return (
        <View style={styles.con}>
            <View style={styles.head}>
                <Text style={{ textAlign: 'center' }}>Profile</Text>
            </View>
            <View style={styles.body}>
                {
                    studentDetails ? (
                        <Card style={styles.card}>
                            <Text style={{textAlign:'center'}}>Id : {studentDetails.id}</Text>
                            <Text style={{textAlign:'center'}}>Name : {studentDetails.name}</Text>
                            <Text style={{textAlign:'center'}}>Age : {studentDetails.age}</Text>
                            <Button mode="outlined" onPress={() => {stuUpdate()}}>Update Student Details</Button>
                        </Card>
                    ) : (
                        <></>
                    )
                    
                }
            </View>
            <View >

            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    con: {
        flex: 1
    },
    head: {
        flex: 1,
        backgroundColor: 'lightgreen',
        justifyContent: 'center'
    },
    body: {
        justifyContent: 'center',
        flex: 5,
        backgroundColor: 'lightblue',
        padding: 10
    },
    card: {
        height: 100,
        width:'100%',
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 10
    },
    form:{
        width:'100%'
    }
})