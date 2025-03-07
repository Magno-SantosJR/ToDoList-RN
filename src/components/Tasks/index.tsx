import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

type Props = {
    taskName: String;
    onRemove: () => void;
}

export function Tasks({ taskName, onRemove }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.task}>
                {taskName}
            </Text>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}