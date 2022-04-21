import * as React from 'react';
import type {Node} from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { useNotification } from 'react-native-internal-notification';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


function Notification(){
    const notification = useNotification();

    const handleNotificationTestClick = React.useCallback(() => {
        notification.showNotification({
            title: 'My first notification',
            message: 'Hello from my first message',
            icon: <FontAwesome name="check-circle" size={45} />,
            onPress: () => {
                alert('Pressed');
            },
        });
    }, [notification]);
    return(
        <TouchableOpacity onPress={handleNotificationTestClick}>
                <Text>Show notification</Text>
            </TouchableOpacity>
    )
}
export default Notification; 