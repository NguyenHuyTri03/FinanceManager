import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import AntDesign from '@expo/vector-icons/AntDesign';
import Foundation from '@expo/vector-icons/Foundation';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  const colorScheme = useColorScheme()
  const activeIconColor = '#43CDFA'
  // const activeIconShadow = '-1px -1px 12px 0px rgba(67,205,250,0.75)'
  const tabBarBg = '#1e1e1e'

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground,
        tabBarStyle: [
          Platform.select({
            ios: {
              position: 'absolute',
            },
            default: {},
          }),
          {
            height: 80,
            paddingTop: 10,
            backgroundColor: tabBarBg,
          }
        ],
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={32} name="house.fill" color={color} />,
          tabBarActiveTintColor: activeIconColor
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Foundation name="graph-bar" size={30} color={color} />,
          tabBarActiveTintColor: activeIconColor,
          tabBarInactiveBackgroundColor: 'transparent',
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <AntDesign name="pluscircle" size={48} color={activeIconColor} />,
          tabBarIconStyle: {
            height: 70,
            width: 70,
            position: 'relative',
            bottom: 40,

            backgroundColor: tabBarBg,
            borderRadius: '50%',
          }
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Fontisto name="bell-alt" size={28} color={color} />,
          tabBarActiveTintColor: activeIconColor
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={30} color={color} />,
          tabBarActiveTintColor: activeIconColor,
        }}
      />
    </Tabs>
  );
}
