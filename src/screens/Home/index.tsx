import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { Tasks } from '../../components/Tasks';

import { styles } from './styles';
import { useState } from 'react';

export function Home() {
    const [tasks, setTasks] = useState < string[]> ([]);
    const [task, setTask] = useState('');

    function handleParticipantAdd() {
        if (tasks.includes(task)) {
            return Alert.alert('Tarefa já cadastrada', 'Já existe uma tarefa com essa descrição.');
        }

        setTasks(prevState => [...prevState, task]);
        setTask('');
    }
    
    function handleParticipantRemove(taskName: string) {
        Alert.alert('Remover', `Remover o participante ${taskName}?`, [
            {
                text: 'Sim',
                onPress: () => setTasks(prevState => prevState.filter(task => task !== taskName))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.eventTask}>
                Lista de Tarefas
            </Text>
    
            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2022.
                {/*Substituir essa chamada*/}
            </Text>
    
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Tarefa"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setTask}
                    value={task}
                />
    
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
    
            <FlatList
                data={tasks}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Tasks
                        key={item}
                        taskName={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Nenhuma tarefa cadastrada ainda? Adicione uma tarefa a sua lista.
                    </Text>
                )}
            />
    
        </View>
    )
}