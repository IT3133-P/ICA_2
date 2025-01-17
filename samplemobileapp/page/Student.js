import { View, StyleSheet } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useState, useEffect, use} from 'react'
import { useNavigation } from "@react-navigation/native";

export default function Student() {

    const navigation = useNavigation();
    const [error, setError] = useState('') 

    const [student, setStudent] = useState({//stu structure
        id:"",
        name:"",
        age:""
    })

    function inputHandel(char, field) {//when on change text input, fields will be updated

        setStudent((pre) => ({
            ...pre,
            [field]:char
        }))

    }

    function addStudent() { //add stu funtion( send the new stu data into home page)

        if(student.id !== '' && student.name !== '' && student.age !== '') {
            navigation.popTo('home', {newStuArray:student})
            setStudent({
                id:'',
                name:'',
                age:''
            })
        }
        else {
            setError('Require all fields...')
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
                    onChangeText={(char) => {inputHandel(char,'id')}}
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

                <Button mode="outlined" onPress={() => {addStudent()}}>Add Student</Button>
                {
                    error ? (
                        <Text>{error}</Text>
                    ):(
                        <></>
                    )
                }
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