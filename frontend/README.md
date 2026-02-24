# React CRUD Application with TanStack Query

A modern React CRUD (Create, Read, Update, Delete) application built with **TanStack Query (React Query)** for efficient server state management.

## Features

✨ **Complete CRUD Operations**
- Create new items
- Read and display all items
- Update existing items
- Delete items

🔄 **TanStack Query (v5)**
- Powerful data fetching and caching
- Automatic background refetching
- Built-in loading and error states
- Query invalidation and mutation handling
- Optimized performance with stale-while-revalidate pattern

🎨 **Modern UI**
- Beautiful gradient design
- Responsive grid layout
- Smooth animations and transitions
- Loading spinners
- Error messages and success notifications

🚀 **Developer Experience**
- Vite for fast development
- Hot Module Replacement (HMR)
- Clean component structure
- Custom React hooks for API calls

## Tech Stack

- **React 18** - UI library
- **TanStack Query v5** - Server state management
- **Vite** - Build tool
- **Axios** - HTTP client
- **CSS3** - Styling

## Project Structure

```
frontend/
├── src/
│   ├── api/
│   │   └── queries.js          # TanStack Query hooks and API calls
│   ├── components/
│   │   ├── ItemForm.jsx        # Form component for creating items
│   │   ├── ItemList.jsx        # List component displaying all items
│   │   └── ItemCard.jsx        # Individual item card with edit/delete
│   ├── App.jsx                 # Main app component with QueryClientProvider
│   ├── main.jsx                # Entry point
│   ├── index.css               # Styles
│ ├── index.html                # HTML template
├── vite.config.js              # Vite configuration
└── package.json                # Dependencies
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Backend API running on `http://localhost:5000`

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Backend API Requirements

The application expects a backend API with the following endpoints:

- **GET** `/api/items` - Get all items
- **GET** `/api/items/:id` - Get single item
- **POST** `/api/items` - Create new item
- **PUT** `/api/items/:id` - Update item
- **DELETE** `/api/items/:id` - Delete item

### Item Model

```json
{
  "id": "uuid",
  "title": "string",
  "description": "string"
}
```

## API Usage with TanStack Query

### Hooks for Queries

```javascript
// Fetch all items
const { data: items, isLoading, error } = useItems()

// Fetch single item
const { data: item } = useItem(itemId)
```

### Hooks for Mutations

```javascript
// Create item
const createMutation = useCreateItem()
await createMutation.mutateAsync({ title, description })

// Update item
const updateMutation = useUpdateItem()
await updateMutation.mutateAsync({ id, title, description })

// Delete item
const deleteMutation = useDeleteItem()
await deleteMutation.mutateAsync(itemId)
```

## Key Features Explained

### Query Caching
TanStack Query automatically caches data and reuses it when appropriate, reducing unnecessary API calls.

### Automatic Invalidation
When you create, update, or delete an item, the queries are automatically invalidated and refetched to keep data fresh.

### Loading States
Each mutation provides `isPending` state to show loading indicators during API calls.

### Error Handling
Error states are provided for both queries and mutations, allowing you to display user-friendly error messages.

### Optimized Performance
- Stale-while-revalidate pattern
- Background refetching
- Request deduplication
- Automatic garbage collection

## Configuration

Edit the API base URL in [src/api/queries.js](src/api/queries.js):

```javascript
const API_BASE_URL = 'http://localhost:5000/api'
```

## Development Tips

1. **React DevTools** - Use the React DevTools browser extension for component debugging
2. **TanStack Query DevTools** - Install the devtools package for advanced debugging:
   ```bash
   npm install @tanstack/react-query-devtools
   ```
3. **Error Boundaries** - Consider adding error boundaries for better error handling
4. **Loading States** - The UI shows loading spinners during async operations

## Common Issues & Solutions

### CORS Errors
Make sure your backend has CORS enabled:
```javascript
app.use(cors());
```

### API Connection Errors
Verify the backend server is running on `http://localhost:5000`:
```bash
cd backend
npm install
npm start
```

### Changes Not Showing
- Check your browser console for errors
- Ensure backend API is responding correctly
- Try clearing browser cache

## Future Enhancements

- Local storage persistence
- Advanced filtering and search
- Pagination support
- Infinite scroll
- Authentication
- Tests with Vitest/Jest
- TypeScript support
- Advanced error recovery strategies

## License

ISC
