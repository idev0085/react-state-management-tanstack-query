import { useState } from 'react'
import { useItems, useDeleteItem, useUpdateItem } from '../api/queries'
import { ItemCard } from './ItemCard'

export const ItemList = () => {
    const { data: items, isLoading, error } = useItems()
    const deleteMutation = useDeleteItem()
    const updateMutation = useUpdateItem()
    const [editingId, setEditingId] = useState(null)

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            try {
                await deleteMutation.mutateAsync(id)
            } catch (error) {
                console.error('Error deleting item:', error)
            }
        }
    }

    const handleEdit = async (id, updatedData) => {
        try {
            await updateMutation.mutateAsync({ id, ...updatedData })
            setEditingId(null)
        } catch (error) {
            console.error('Error updating item:', error)
        }
    }

    const handleCancel = () => {
        setEditingId(null)
    }

    if (isLoading) {
        return (
            <div className="loading">
                <span className="spinner"></span> Loading items...
            </div>
        )
    }

    if (error) {
        return (
            <div className="error">
                Error loading items: {error.message}
                <br />
                Make sure the backend server is running on http://localhost:5000
            </div>
        )
    }

    if (!items || items.length === 0) {
        return (
            <div className="empty-state">
                <h3>No items yet</h3>
                <p>Create your first item using the form above!</p>
            </div>
        )
    }

    return (
        <div>
            <h2>📋 Items List</h2>

            {deleteMutation.error && (
                <div className="error">Error deleting item: {deleteMutation.error.message}</div>
            )}

            {updateMutation.error && (
                <div className="error">Error updating item: {updateMutation.error.message}</div>
            )}

            <div className="items-grid">
                {items.map((item) => (
                    <ItemCard
                        key={item.id}
                        item={item}
                        isEditing={editingId === item.id}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        onEditClick={() => setEditingId(item.id)}
                        onCancel={handleCancel}
                        isDeleting={deleteMutation.isPending && deleteMutation.variables === item.id}
                        isUpdating={updateMutation.isPending && updateMutation.variables?.id === item.id}
                    />
                ))}
            </div>
        </div>
    )
}
