import { View, TouchableOpacity, StyleSheet, } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text } from '@react-navigation/elements';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import AntDesign from '@expo/vector-icons/AntDesign';
import Foundation from '@expo/vector-icons/Foundation';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { IconSymbol } from '@/components/ui/IconSymbol';

const activeIconColor = '#43CDFA'
const activeBgColor = 'rgba(67,205,250,0.25)'
const tabBarBg = '#1e1e1e'

export function TabBarStyle({ state, descriptors, navigation }: BottomTabBarProps) {
    const { colors } = useTheme();

    const icons: { [key: string]: (props: any) => JSX.Element } = {
        index: (props: any) => <IconSymbol size={32} name="house.fill" {...props} />,
        analytics: (props: any) => <Foundation name="graph-bar" size={30} {...props} />,
        transaction: (props: any) => <AntDesign name="pluscircle" size={48} color={activeIconColor} {...props} />,
        notification: (props: any) => <Fontisto name="bell-alt" size={28} {...props} />,
        profile: (props: any) => <FontAwesome name="user" size={30} {...props} />,
    }

    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={route.name}
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarButtonTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.tabItem}
                    >
                        {icons[route.name]({
                            focused: isFocused, color: isFocused ? activeIconColor : '#7f7f7f', position: 'below-icon', children: ''
                        })}
                        <Text style={{ color: isFocused ? activeIconColor : colors.text, fontSize: 10 }}>
                            {typeof label === 'string' ? label : label({ focused: isFocused, color: isFocused ? activeIconColor : colors.text, position: 'below-icon', children: '' })}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 10,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        backgroundColor: '#2f2f2f',
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
    }
})