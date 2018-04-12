import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import { connect } from "react-redux";

let mapStateToProps = (store) => {
    return {
        userInfo: store.data.userInfo,
    }
}

class Avatar extends React.Component {


    render(){
        return(
            <View style={styles.container}>
            <Text>Avatar Page</Text>
            </View>
        )
    }
}

export default connect(mapStateToProps)(Avatar)


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})