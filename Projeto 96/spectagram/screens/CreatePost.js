import React from 'react';
import { Text, View } from 'react-native';

class CreatePost extends Component{
    render() {
        return(
            <View>
                <Text style={styles.text}> Criação de Postagem </Text>
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

export default CreatePost;