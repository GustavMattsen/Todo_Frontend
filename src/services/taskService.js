import { authService } from './authService';

const API_URL = 'http://localhost:9090/api/todo';

export const taskService = {

    // Get all tasks
    getAllTasks: async () => {
        const token = authService.getToken();
        const response = await fetch(API_URL, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!response.ok) throw new Error('Failed to fetch tasks');
        return response.json();
    },

    // Get a single todo by ID
    getTaskById: async (id) => {
        const token = authService.getToken();
        const response = await fetch(`${API_URL}/${id}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!response.ok) throw new Error('Failed to fetch task');
        return response.json();
    },

    // Add a new todo
    addTask: async (task) => {
        const token = authService.getToken();
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(task)
        });
        if (!response.ok) throw new Error('Failed to add task');
        return response.json();
    },

      // Update a todo
    updateTask: async (id, task) => {
        const token = authService.getToken();
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(task)
        });
        if (!response.ok) throw new Error('Failed to update task');
        return response.json();
    },

    // Delete a todo
    deleteTask: async (id) => {
        const token = authService.getToken();
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!response.ok) throw new Error('Failed to delete task');
        return true;
    },  

       // Get overdue tasks
    getOverdueTasks: async () => {
        const token = authService.getToken();
        const response = await fetch(`${API_URL}/overdue`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!response.ok) throw new Error('Failed to fetch overdue tasks');
        return response.json();
    },

    // Get tasks by person
    getTasksByPerson: async (personId) => {
        const token = authService.getToken();
        const response = await fetch(`${API_URL}/person/${personId}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!response.ok) throw new Error('Failed to fetch tasks for person');
        return response.json();
    },

    // Get tasks by status
    getTasksByStatus: async (status) => {
        const token = authService.getToken();
        const response = await fetch(`${API_URL}/status?status=${status}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!response.ok) throw new Error('Failed to fetch tasks by status');
        return response.json();
    }
};