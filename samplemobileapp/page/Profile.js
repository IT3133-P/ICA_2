import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text, Card, Button, TextInput } from "react-native-paper";

export default function Profile({ route }) {

    const navigation = useNavigation();

    const studentDetails = route.params?.studentDetails
    const [updateStatus, setUpdateStatus] = useState(false)

    const [student, setStudent] = useState({
        id: studentDetails.id,
        name: studentDetails.name,
        age: studentDetails.age
    })

    function updateStudent() {
        if(student.name === '') {
            student.name = studentDetails.name
        }
        if(student.age === '') {
            student.age = studentDetails.age
        }
        if(student.name && student.age) {
            navigation.popTo('home', { newStuArray: student })
        }
    }

    function inputHandel(char, field) {

        setStudent((pre) => ({
            ...pre,
            [field]: char
        }))

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
                            <Button mode="outlined" onPress={() => { setUpdateStatus(!updateStatus) }}>Update Student Details</Button>
                            {
                                updateStatus ? (
                                    <View style={styles.form}>
                                        <TextInput
                                            label={'Name'}
                                            value={student.name}
                                            onChangeText={(char) => { inputHandel(char, 'name') }}
                                        />
                                        <TextInput
                                            label={'Age'}
                                            value={student.age}
                                            onChangeText={(char) => { inputHandel(char, 'age') }}
                                        />
                                        <Button mode="outlined" onPress={() => { updateStudent() }}>Done</Button>
                                    </View>
                                ) : (
                                    <></>
                                )
                            }
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