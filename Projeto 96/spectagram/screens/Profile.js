import React from 'react';
import { Text, View } from 'react-native';

class Profile extends Component{
    render() {
        return(
            <View>
                <Text style={styles.text}> Perfil </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fonWeight: 'bold',
    }
})

export default Profile;