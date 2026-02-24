import { useState } from 'react'
import { useCreateItem } from '../api/queries'

export const ItemForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    })

    const [successMessage, setSuccessMessage] = useState('')

    const createMutation = useCreateItem()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!formData.title.trim()) {
            alert('Title is required!')
            return
        }

        try {
            await createMutation.mutateAsync(formData)
            setFormData({ title: '', description: '' })
            setSuccessMessage('Item created successfully!')
            setTimeout(() => setSuccessMessage(''), 3000)
        } catch (error) {
            console.error('Error creating item:', error)
        }
    }

    return (
        <div className="form-container">
            <h2>➕ Create New Item</h2>

            {successMessage && <div className="success">{successMessage}</div>}

            {createMutation.error && (
                <div className="error">Error: {createMutation.error.message}</div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title *</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter item title"
                        disabled={createMutation.isPending}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter item description"
                        disabled={createMutation.isPending}
                    />
                </div>

                <button
                    type="submit"
                    className="btn-primary"
                    disabled={createMutation.isPending}
                >
                    {createMutation.isPending ? (
                        <>
                            <span className="spinner"></span> Creating...
                        </>
                    ) : (
                        'Create Item'
                    )}
                </button>
            </form>
        </div>
    )
}
