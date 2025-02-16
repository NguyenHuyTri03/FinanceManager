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
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Foundation name="graph-bar" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <AntDesign name="pluscircleo" size={36} color='' />,
          tabBarIconStyle: {
            height: 70,
            width: 70,
            position: 'absolute',
            bottom: 20,

            backgroundColor: '#f2f2f2',
            borderRadius: '50%'
          }
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Fontisto name="bell-alt" size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
