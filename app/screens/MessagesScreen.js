import React, { useState } from 'react'
import { FlatList } from 'react-native'

import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
import Icon from '../components/Icon'

const initialMessages = [
    {
        id: 1,
        title: 'Hello',
        description: 'Is this item available?',
        image: require('../assets/biniam.jpg')
    },
    {
        id: 2,
        title: 'Wie geht es dir',
        description: 'Ist es verfügbar?',
        image: require('../assets/biniam.jpg')
    }
]

function MessagesScreen() {

    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id))
    }

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        //IconComponent={<Icon name='email' />}
                        onPress={() => console.log('Message clicked', item)}
                        renderRightActions={() =>
                            <ListItemDeleteAction onPress={() => handleDelete(item)} />
                        }
                    />
                }
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 3,
                            title: 'T3',
                            description: 'D3',
                            image: require('../assets/biniam.jpg')
                        }
                    ]
                    )
                }}
            />
        </Screen>
    )
}

export default MessagesScreen
