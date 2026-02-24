# React State Management with TanStack Query

A complete full-stack CRUD application demonstrating modern React state management using **TanStack Query (React Query v5)**.

## 📁 Project Structure

```
react-state-management-tanstack-query/
├── backend/                    # Express.js API server
│   ├── server.js              # Express app with CRUD endpoints
│   ├── package.json           # Backend dependencies
│   └── README.md
├── frontend/                  # React with TanStack Query
│   ├── src/
│   │   ├── api/
│   │   │   └── queries.js     # useQuery & useMutation hooks
│   │   ├── components/
│   │   │   ├── ItemForm.jsx   # Create item form
│   │   │   ├── ItemList.jsx   # Display all items
│   │   │   └── ItemCard.jsx   # Single item card
│   │   ├── App.jsx            # Main app with QueryClientProvider
│   │   ├── main.jsx           # Entry point
│   │   └── index.css          # Styling
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── README.md
└── README.md                  # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js v16+
- npm or yarn

### 1. Start Backend Server

```bash
cd backend
npm install
npm start
# Server runs on http://localhost:5000
```

### 2. Start Frontend Application

In a new terminal:

```bash
cd frontend
npm install
npm run dev
# Application opens at http://localhost:3000
```

## 🎯 Features

### ✨ Complete CRUD Operations
- **Create** - Add new items with title and description
- **Read** - Fetch and display all items
- **Update** - Edit existing items
- **Delete** - Remove items with confirmation

### 🔄 TanStack Query Features
- **Automatic Caching** - Smart caching strategy
- **Background Refetching** - Keep data fresh
- **Query Invalidation** - Automatic cache invalidation on mutations
- **Loading States** - Built-in isPending status
- **Error Handling** - Comprehensive error management
- **Optimistic Updates** - Responsive UX

### 🎨 Modern UI/UX
- Responsive design
- Beautiful animations
- Loading spinners
- Success/error messages
- Gradient backgrounds
- Smooth transitions

## 📚 API Endpoints

### Base URL: `http://localhost:5000/api`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/items` | Get all items |
| GET | `/items/:id` | Get single item |
| POST | `/items` | Create new item |
| PUT | `/items/:id` | Update item |
| DELETE | `/items/:id` | Delete item |

### Item Model
```json
{
  "id": "uuid v4",
  "title": "string (required)",
  "description": "string"
}
```

## 🛠️ Technology Stack

### Backend
- **Express.js** - Web framework
- **UUID** - Generate unique IDs
- **CORS** - Cross-origin resource sharing

### Frontend
- **React 18** - User interface
- **TanStack Query v5** - Server state management
- **Axios** - HTTP client
- **Vite** - Build tool
- **CSS3** - Styling

## 📖 How TanStack Query Works

### 1. Setup QueryClientProvider
```jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Your app */}
    </QueryClientProvider>
  )
}
```

### 2. Use Query Hook
```jsx
const { data: items, isLoading, error } = useItems()
```

### 3. Use Mutation Hook
```jsx
const mutation = useCreateItem()
await mutation.mutateAsync({ title, description })
```

## 🔍 Key Concepts

### Queries
Used for fetching data. They automatically handle:
- Caching
- Deduplication
- Background refetching
- Stale data handling

### Mutations
Used for modifying data (POST, PUT, DELETE). They:
- Provide loading state
- Handle errors
- Trigger query invalidation
- Support optimistic updates

### Query Invalidation
Automatically refetch data when mutations succeed:
```javascript
onSuccess: () => {
  queryClient.invalidateQueries({ queryKey: ['items'] })
}
```

## 💻 Development

### Backend Development
```bash
cd backend
npm run dev  # Uses nodemon for auto-reload
```

### Frontend Development
```bash
cd frontend
npm run dev  # Hot module replacement (HMR)
```

### Production Build
```bash
cd frontend
npm run build
npm run preview
```

## 🧪 Testing the Application

1. **Create Item**
   - Fill the form with title and description
   - Click "Create Item"
   - Item appears in the list below

2. **Update Item**
   - Click "Edit" on any item card
   - Modify title or description
   - Click "Save" to update

3. **Delete Item**
   - Click "Delete" on any item
   - Confirm deletion when prompted

4. **Real-time Updates**
   - Changes reflect immediately in the UI
   - TanStack Query manages cache automatically

## 🔧 Configuration

### API Base URL
Edit `frontend/src/api/queries.js`:
```javascript
const API_BASE_URL = 'http://localhost:5000/api'
```

### Query Options
Customize in `frontend/src/api/queries.js`:
```javascript
staleTime: 1000 * 60 * 5,  // 5 minutes
gcTime: 1000 * 60 * 10,    // 10 minutes
refetchOnWindowFocus: false
```

## 📋 Common Tasks

### Add a new field to items
1. Update backend model
2. Update API endpoints
3. Update React form components
4. Update queries.js hooks

### Add pagination
1. Modify backend to accept page/limit parameters
2. Create custom useItemsPaginated hook
3. Add pagination UI component

### Add filtering
1. Modify frontend to pass filters to API
2. Implement filter state in components
3. Update query keys to include filters

## 🐛 Troubleshooting

### "Cannot GET /api/items"
- Ensure backend server is running on port 5000
- Check backend/server.js for correct routes

### CORS Error
- Ensure `cors()` middleware is in backend
- Check API_BASE_URL matches backend server

### Items not updating
- Check browser console for errors
- Verify network requests in DevTools
- Ensure mutations are invalidating queries

### Mutations not working
- Confirm form data matches API expectations
- Check error messages in UI
- Enable browser DevTools for debugging

## 📚 Learning Resources

- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [React Documentation](https://react.dev)
- [Axios Documentation](https://axios-http.com)
- [Express.js Guide](https://expressjs.com)

## 🚀 Next Steps

1. Add **authentication** with JWT tokens
2. Implement **pagination** for large datasets
3. Add **search and filtering** capabilities
4. Create **unit tests** with Vitest
5. Add **TypeScript** for type safety
6. Implement **persistent storage** (database)
7. Add **form validation** library (e.g., React Hook Form)

## 📝 Notes

- Backend uses in-memory storage (resets on restart)
- For production, replace with a real database
- CORS is enabled for local development
- Disable CORS in production if both services are on same domain

## 🤝 Contributing

Feel free to fork, modify, and improve this project!

## 📄 License

ISC

