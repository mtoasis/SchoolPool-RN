import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import { connect } from "react-redux";

let mapStateToProps = (store) => {
    return {
        userInfo: store.data.userInfo,

    }
}

class FindRide extends React.Component {


    render(){
        return(
            <View>
            <Text>Find Page</Text>
            </View>
        )
    }
}

export default connect(mapStateToProps)(FindRide)


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})