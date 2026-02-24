import { useState } from 'react'

export const ItemCard = ({
    item,
    isEditing,
    onEdit,
    onDelete,
    onEditClick,
    onCancel,
    isDeleting,
    isUpdating,
}) => {
    const [editData, setEditData] = useState({
        title: item.title,
        description: item.description,
    })

    const handleEditChange = (e) => {
        const { name, value } = e.target
        setEditData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSave = () => {
        if (!editData.title.trim()) {
            alert('Title is required!')
            return
        }
        onEdit(item.id, editData)
    }

    return (
        <div className="item-card">
            {isEditing ? (
                <div className="edit-form">
                    <h4>✏️ Edit Item</h4>
                    <div className="form-group">
                        <label htmlFor={`title-${item.id}`}>Title</label>
                        <input
                            type="text"
                            id={`title-${item.id}`}
                            name="title"
                            value={editData.title}
                            onChange={handleEditChange}
                            disabled={isUpdating}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor={`desc-${item.id}`}>Description</label>
                        <textarea
                            id={`desc-${item.id}`}
                            name="description"
                            value={editData.description}
                            onChange={handleEditChange}
                            disabled={isUpdating}
                        />
                    </div>
                    <div className="form-buttons">
                        <button
                            className="btn-primary btn-sm"
                            onClick={handleSave}
                            disabled={isUpdating}
                        >
                            {isUpdating ? '💾 Saving...' : '💾 Save'}
                        </button>
                        <button className="btn-secondary btn-sm" onClick={onCancel} disabled={isUpdating}>
                            ❌ Cancel
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="item-actions">
                        <button
                            className="btn-warning btn-sm"
                            onClick={onEditClick}
                            disabled={isDeleting || isUpdating}
                        >
                            ✏️ Edit
                        </button>
                        <button
                            className="btn-danger btn-sm"
                            onClick={() => onDelete(item.id)}
                            disabled={isDeleting || isUpdating}
                        >
                            {isDeleting ? '🗑️ Deleting...' : '🗑️ Delete'}
                        </button>
                    </div>
                    <div className="item-id">ID: {item.id}</div>
                </>
            )}
        </div>
    )
}
