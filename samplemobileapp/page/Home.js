import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text, Card, Button} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Home({ route }) {

    const navigation = useNavigation()
    const [allStudent, setAllStudent] = useState([])

    useEffect(() => {
        if(route.params?.newStuArray) {
            const newStudent = route.params?.newStuArray
            setAllStudent((pre) => ([...pre, newStudent]))
        }
    },[route.params?.newStuArray])

    function deleteStudent(stuId) {
        const updatedStuArray = allStudent.filter((stu) => stu.id !== stuId)
        setAllStudent(updatedStuArray)
    }

    return (
        <View style={styles.con}>
            <View style={styles.head}>
                <Text style={{ textAlign: 'center' }}>All Student</Text>
            </View>
            <View style={styles.body}>
                {
                    allStudent.length === 0 ? (
                        <Text style={{ textAlign: 'center' }}>Student are not available</Text>
                    ) : (
                        <FlatList
                            data={allStudent}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => 
                                <View style={styles.card}>
                                    <Text onPress={() => {navigation.navigate('profile', {studentDetails:item})}}>
                                        {item.name}
                                    </Text>
                                    <Button onPress={() => {deleteStudent(item.id)}}>Delete</Button>
                                </View>
                            }
                        />
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
        padding:10
    },
    card:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'space-between',
        padding:10
    }
})