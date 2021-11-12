import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import Container from './components/Container';
import Layout from './components/Layout/Layout';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const AuthPage = lazy(() =>
  import('./pages/AuthPage' /* webpackChunkName: "auth-page" */)
);
const PostsPage = lazy(() =>
  import('./pages/PostsPage' /* webpackChunkName: "posts-page" */)
);
const RangeInputsPage = lazy(() =>
  import('./pages/RangeInputsPage' /* webpackChunkName: "range-inputs-page" */)
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage' /* webpackChunkName: "range-inputs-page" */)
);

function App() {
  return (
    <>
      <Container>
        <Suspense fallback={<Loader type="Rings" color="#b00b69" />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<AuthPage />} />
              <Route path="posts" element={<PostsPage />} />
              <Route path="ranges" element={<RangeInputsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
