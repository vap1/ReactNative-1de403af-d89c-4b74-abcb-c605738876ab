
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { TaskDetails } from '../api/types'; // Import the API types

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<TaskDetails[]>([]);

  useEffect(() => {
    // Fetch tasks from the API
    const fetchTasks = async () => {
      try {
        const response = await fetch('/tasks');
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const renderTaskItem = ({ item }: { item: TaskDetails }) => (
    <View>
      <Text>{item.taskName}</Text>
      <Text>{item.status}</Text>
      {/* Render other task details */}
    </View>
  );

  return (
    <View>
      <Text>Task List</Text>
      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.taskId}
      />
    </View>
  );
};

export default TaskList;