import React from 'react';
import { useNavigation} from '@react-navigation/native';
import {View, Text, Pressable, Button, StyleSheet} from 'react-native';
import { useFonts} from 'expo-font';

export default function ExpenseItem() {
    return(
        <View style={styles.item}>
            <Pressable style={styles.itemContainer} onPress={}>
                <Text style={styles.itemMoney}>price</Text>
                <Text style={styles.itemTitle}>title</Text>
            </Pressable>
            <Pressable onPress={}>
                <Text style={styles.itemDelete}>Delete</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        marginVertical: 1
    },
    itemMoney: {
        fontSize: 24,
        fontFamily: 'Handlee-Regular',
        color: 'black',

    },
    itemDetails: {
        fontSize: 18,
        fontFamily: 'Handlee-Regular',
        backgroundColor: '#FFF',
    },
    itemTitle: {
        fontSize: 20,
        fontFamily: 'Handlee-Regular',
        marginLeft: 30
    },
    itemDelete: {
        fontSize: 20,
        color: "red"
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    }

})