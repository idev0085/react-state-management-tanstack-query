import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ItemForm } from './components/ItemForm'
import { ItemList } from './components/ItemList'

// Create a client for TanStack Query
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
        },
    },
})

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="container">
                <h1>🚀 React CRUD with TanStack Query</h1>
                <ItemForm />
                <ItemList />
            </div>
        </QueryClientProvider>
    )
}

export default App
