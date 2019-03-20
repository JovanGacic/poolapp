import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
     //   borderBottomWidth: 1,
        padding: 5,
        backgroundColor: 'rgba(255,255,255,0.8)',
     //   backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
}

export { CardSection };