import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Avatar, Card, IconButton, Searchbar, Text } from 'react-native-paper';

const Community = () => {
    const data = [
        { id: '1', username: 'Name1', time: '2h', username1:'Name2' },
        { id: '2', username: 'Name1', time: '5h', username1: 'Name2' },
    ];

    const renderItem = ({ item }) => (
        <Card style={styles.card}>
            <Card.Title
                title={item.username}
                subtitle={item.time}
                left={(props) => <Avatar.Icon {...props} icon="account-circle" />}
            />
            <Card.Content>
                <Text>{item.content}</Text>
            </Card.Content>
            <Card.Actions>
                <IconButton icon="thumb-up-outline" onPress={() => {}} />
                <IconButton icon="comment-outline" onPress={() => {}} />
                <IconButton icon="share-outline" onPress={() => {}} />
            </Card.Actions>
        </Card>
    );

    return (
        <View style={styles.container}>
            <Searchbar
                placeholder="Search posts"
                style={styles.searchBar}
            />
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBar: {
        margin: 10,
        elevation: 2,
    },
    list: {
        paddingHorizontal: 10,
    },
    card: {
        marginVertical: 5,
        elevation: 2,
    }
});

export default Community;