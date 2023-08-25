
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import EmployeeManagementScreen from './src/screens/EmployeeManagementScreen';
import LeadManagementScreen from './src/screens/LeadManagementScreen';
import OpportunityTrackingScreen from './src/screens/OpportunityTrackingScreen';
import TaskAssignmentScreen from './src/screens/TaskAssignmentScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EmployeeManagement" component={EmployeeManagementScreen} />
        <Stack.Screen name="LeadManagement" component={LeadManagementScreen} />
        <Stack.Screen name="OpportunityTracking" component={OpportunityTrackingScreen} />
        <Stack.Screen name="TaskAssignment" component={TaskAssignmentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;