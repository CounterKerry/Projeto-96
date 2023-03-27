import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PostCard from './PostCards'

let posts = require("../json/temp_posts.json");

class Feed extends Component{
    renderItem = ({ item: post }) => {
        return <PostCard post={post}/>
    }

    keyExtractor = (item, index) => index.toString();
    
    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style={droidSafeArea}/>
                <View style={styles.appTitle}>
                    <Text style={styles.appTitleText}> Espectagrama </Text>
                </View>
                <View style={styles.cardContainer}>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={posts}
                        renderItem={this.renderItem}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "darkBlue",
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 35,
    },
    appTitle: {
        flex: 0.07,
        padding: 5,
        flexDirection: "Row",
        justifyContent: "center",
    },
    appTitleText: {
        color: "white",
        fontSize: 28,
    },
    cardContainer: {
        flex: 0.93,
    }
});

export default Feed;