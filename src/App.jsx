import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root from './components/layout/Root';
import Work from './components/pages/Work';
import ChartToppersProject from './components/projects/ChartToppersProject';
import LynnsListProject from './components/projects/LynnsListProject';
import OverlookHotelProject from './components/projects/OverlookHotelProject';
import RancidTomatillosProject from './components/projects/RancidTomatillosProject';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import ResumePDF from './components/pages/ResumePDF';
import NotFound from './components/pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Root /> }>
      <Route index element={ <About /> } />
      <Route path='work' element={<Work />} />
      <Route path='work/charttoppers' element={ <ChartToppersProject /> } />
      <Route path='work/lynnslist' element={<LynnsListProject />} />
      <Route path='work/rancidtomatillos' element={<RancidTomatillosProject /> } />
      <Route path='work/overlookhotel' element={<OverlookHotelProject />} />
      <Route path='resume' element={ <Resume /> }/>
      <Route path='contact' element={ <Contact /> }/>
      <Route path='resume.pdf' element={ <ResumePDF /> } />
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
