import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const API_BASE_URL = 'http://localhost:5000/api'

// Create axios instance
const apiClient = axios.create({
    baseURL: API_BASE_URL,
})

// API Functions
const getItems = async () => {
    const { data } = await apiClient.get('/items')
    return data
}

const getItemById = async (id) => {
    const { data } = await apiClient.get(`/items/${id}`)
    return data
}

const createItem = async (item) => {
    const { data } = await apiClient.post('/items', item)
    return data
}

const updateItem = async ({ id, ...item }) => {
    const { data } = await apiClient.put(`/items/${id}`, item)
    return data
}

const deleteItem = async (id) => {
    const { data } = await apiClient.delete(`/items/${id}`)
    return data
}

// Custom Hooks - Queries
export const useItems = () => {
    return useQuery({
        queryKey: ['items'],
        queryFn: getItems,
        staleTime: 1000 * 60 * 5, // 5 minutes
        gcTime: 1000 * 60 * 10, // 10 minutes (formerly cacheTime)
    })
}

export const useItem = (id) => {
    return useQuery({
        queryKey: ['items', id],
        queryFn: () => getItemById(id),
        enabled: !!id,
        staleTime: 1000 * 60 * 5,
    })
}

// Custom Hooks - Mutations
export const useCreateItem = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: createItem,
        onSuccess: () => {
            // Invalidate and refetch items
            queryClient.invalidateQueries({ queryKey: ['items'] })
        },
    })
}

export const useUpdateItem = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: updateItem,
        onSuccess: (data) => {
            // Update the item in cache
            queryClient.setQueryData(['items', data.id], data)
            // Invalidate items list
            queryClient.invalidateQueries({ queryKey: ['items'] })
        },
    })
}

export const useDeleteItem = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: deleteItem,
        onSuccess: () => {
            // Invalidate and refetch items
            queryClient.invalidateQueries({ queryKey: ['items'] })
        },
    })
}
