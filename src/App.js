import { Route, Routes, Navigate, HashRouter } from 'react-router-dom';
import { UsersDetails, UsersList } from './pages';
import { Layout } from './components';
import { useGetData } from './useGetData';

function App() {
  const { users, hasError, loading, resultsNumber } = useGetData();

  return (
    <Layout>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <UsersList
                users={users}
                loading={loading}
                hasError={hasError}
                resultsNumber={resultsNumber}
              />
            }
          />
          <Route path="/users/:id" element={<UsersDetails users={users} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Layout>
  );
}

export default App;
