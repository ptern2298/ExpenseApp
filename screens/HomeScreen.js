import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font'
import ExpenseList from '../components/ExpenseList';
import TotalExpense from '../components/TotalExpense';
export default function HomeScreen({ navigation, route, expenses, deleteExpense }) {
    const[loading, setLoading] = useState(false);

    const startLoading = () =>
    {
        setLoading(true);
        setTimeout(() => { setLoading(false)},1000)
    }

    useEffect(()=> {startLoading()},[])

    return(
        <SafeAreaView>
            <ActivityIndicator animating={loading} size='large' style={}/>
            {loading ? (
                    <ActivityIndicator
                        animating={loading}
                        size="large"
                        style={styles.loadingWheel}/>
                ):
                (
                    <>
                        <TotalExpense expenses={expenses} />
                        {expenses.length > 0 ? (
                            <>
                                <Text style={styles.flatListTitle}>All Expenses</Text>
                                <ExpenseList expenses={expenses} deleteExpense={deleteExpense}/>
                            </>
                        ) : (
                            <Text style={styles.noExpenses}>No Expenses Yet! </Text>
                        )
                        }
                        <Button title="Create expense" onPress = {() => { navigation.navigate('CreateExpense') }} />
                    </>
                )}
            <StatusBar style="auto"/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    loadingWheel: {
        flex:1,
        alignSelf: "center",

        color:'red',
    },
    flatListTitle: {
        margin: 5
    },
    noExpenses: {
        textAlign: 'center',
        margin: 50,
        fontSize: 20

    }

});