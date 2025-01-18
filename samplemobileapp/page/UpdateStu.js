import { View, StyleSheet } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useState, useEffect, use} from 'react'
import { useNavigation } from "@react-navigation/native";

export default function AddStudent({route}) {

    const navigation = useNavigation();
    const studentDetails = route.params?.studentDetails//get the stu data that comes from profile page

    const [student, setStudent] = useState({//initialy the stu tructure has asigned the stu data that comes from profile page
        id: studentDetails.id,
        name: studentDetails.name,
        age: studentDetails.age
    })

    function inputHandel(char, field) {//when on change text input, fields will be updated

        setStudent((pre) => ({
            ...pre,
            [field]:char
        }))

    }

    function updateStudent() {//update the exist stu and sent the data to the home page
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


    return (
        <View style={styles.con}>
            <View style={styles.head}>
            <Text style={{textAlign:'center'}}>Add new Students</Text>
            </View>
            <View style={styles.body}>
                <TextInput
                    label={'Id'}
                    value={student.id}
                    editable={false}
                />
                <TextInput
                    label={'Name'}
                    value={student.name}
                    onChangeText={(char) => {inputHandel(char,'name')}}
                />
                <TextInput
                    label={'Age'}
                    value={student.age}
                    onChangeText={(char) => {inputHandel(char,'age')}}
                />

                <Button mode="outlined" onPress={() => {updateStudent()}}>Add Student</Button>
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
        justifyContent:'center'
    },
    body: {
        flex: 5,
        backgroundColor: 'lightblue',
        justifyContent:'center',
        padding:20
    }
})