import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';

const Login = lazy(() => import('./pages/Login'));
const NewOrder = lazy(() => import('./pages/NewOrder'));
const Orders = lazy(() => import('./pages/Orders'));
const Products = lazy(() => import('./pages/Products'));

function App() {
  return (
    <Suspense fallback={<h1>Cargando...</h1>}>
      <Routes>
        <Route index element={<Login />} />
        <Route element={<Layout />}>
          <Route path='nueva-orden' element={<NewOrder />} />
          <Route path='ordenes' element={<Orders />} />
          <Route path='productos' element={<Products />} />
          <Route path='*' element={<Navigate to='/' />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
