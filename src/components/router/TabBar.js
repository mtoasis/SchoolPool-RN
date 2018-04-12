import React from 'react';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Avatar from '../../pages/Avatar'
import PostRide from '../../pages/PostRide'
import FindRide from '../../pages/FindRide'
import Inbox from '../../pages/Inbox'


export default Tabs = TabNavigator(

    {     
        Avatar: { screen: Avatar }, 
        PostRide: { screen: PostRide },         
        FindRide: { screen: FindRide },             
        Inbox: { screen: Inbox },
        
    },
    {
        navigationOptions: ({ navigation }) => ({            
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Avatar') {
                    iconName = `ios-home${focused ? '' : '-outline'}`;
                }
                else if (routeName === 'Inbox') {
                    iconName = `ios-chatboxes${focused ? '' : '-outline'}`;
                }
                else if (routeName === 'FindRide') {
                    iconName = `ios-search${focused ? '' : '-outline'}`;
                }
                else if (routeName === 'PostRide') {
                    iconName = `ios-create${focused ? '' : '-outline'}`;
                }

                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#08AAFF',
            inactiveTintColor: 'gray',
        },
        animationEnabled: false,
        swipeEnabled: true,
        
    }
);

