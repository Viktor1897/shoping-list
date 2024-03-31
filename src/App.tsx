import { RouterProvider } from 'react-router-dom';
import { router } from './app/router/routes/router';
import { AuthProvider } from './app/contexts/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
