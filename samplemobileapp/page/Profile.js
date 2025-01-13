import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text, Card, Button, TextInput} from "react-native-paper";

export default function Profile({ route }) {

    const studentDetails = route.params?.studentDetails
    const [updateStatus, setUpdateStatus] = useState(false)
    const [error, setError] = useState('') 

    const [student, setStudent] = useState({
        id:studentDetails.id,
        name:"",
        age:""
    })

    function inputHandel(char, field) {

        setStudent((pre) => ({
            ...pre,
            [field]:char
        }))

    }

    return (
        <View style={styles.con}>
            <View style={styles.head}>
                <Text style={{ textAlign: 'center' }}>Profile</Text>
            </View>
            <View style={styles.body}>
                {
                    studentDetails  ? (
                        <Card style={styles.card}>
                            <Text>Id : {studentDetails.id}</Text>
                            <Text>Name : {studentDetails.name}</Text>
                            <Text>Age : {studentDetails.age}</Text>
                        </Card>
                    ) : (
                        <Text style={{ textAlign: 'center' }}>Student deails is not available</Text>
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
        height:100,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 10
    }
})