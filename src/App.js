import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { UsersDetails, UsersList } from './pages';
import { Layout } from './components';
import { useGetData } from './useGetData';

function App() {
  const { users, hasError, loading, resultsNumber } = useGetData();

  const html = document.querySelector('html');
  useEffect(() => {
    html.dataset.theme = `theme-light`;

    const isOsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log(isOsDark);
  }, []);

  const switchTheme = (theme) => {
    html.dataset.theme = `theme-${theme}`;
  };

  // const [darkTheme, setDarkTheme] = useState(false);
  // useEffect(() => {
  //   console.log(`darkTheme z useEfecctu`, darkTheme);
  // const root = document.documentElement;
  // root?.style.setProperty('$lightTheme', darkTheme ? true : false);
  // root.style.setProperty('$lightTheme', false);
  //   console.log(root.style);
  // }, []);
  return (
    <Layout>
      <main>
        <button onClick={() => switchTheme('light')}>Light</button>
        <button onClick={() => switchTheme('dark')}>Dark</button>
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
