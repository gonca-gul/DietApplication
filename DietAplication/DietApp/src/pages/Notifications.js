import * as React from 'react';
import type {Node} from 'react';
import { View, Text,TouchableOpacity,FlatList,StyleSheet,ScrollView } from 'react-native';
import { useNotification } from 'react-native-internal-notification';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ANIMALS = ["Gonca Gül", "Cansu Çil", "Chicken", "Dragon", "Camel", "Camel", "Camel"];

function Notification(){
   
    return(
                
                <FlatList
                style={{marginTop:10}}
                data={ANIMALS}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(animal) => {
                return (
                <View style={styles.listItem}>
                    <ScrollView>
                        <TouchableOpacity style={styles.btn}>
                        <Text style={styles.txt}>Show notification</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
              );
            }}/>
    )
}

const styles = StyleSheet.create({

    listItem: {
        height:80,
        backgroundColor: "white",
        borderColor: "thistle",
        elevation:20,
        shadowColor:"purple" 
        },
        txt:{
            left: 25,
            marginTop:30,
            fontSize:17,
            fontWeight:'500',
            color:'dimgray',
            },
    });

export default Notification; 