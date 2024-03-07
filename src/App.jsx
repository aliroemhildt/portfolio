import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root from './components/layout/Root';
import Work from './components/pages/Work';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Root /> }>
      <Route index element={ <Work/> } />
      <Route path='about' element={ <About /> } />
      <Route path='resume' element={ <Resume /> }/>
      <Route path='contact' element={ <Contact /> }/>
      <Route path='*' element={ <NotFound /> } />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
