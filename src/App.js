import { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { UsersDetails, UsersList } from './pages';
import { Header } from './components';
import api from './API';

function App() {
  const [users, setUsers] = useState([]);
  const [hasError, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  let resultsNumber = 10;

  useEffect(() => {
    setTimeout(() => {
      api
        .get(`/?results=${resultsNumber}`)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          setUsers(data.results);
          setLoading(false);
          setError(false);
        })
        .catch((error) => {
          setError(true);
          setLoading(false);
        });
    }, 1_000);
  }, []);

  return (
    <>
      <Header />
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
    </>
  );
}

export default App;
