import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/main';
import Home from '../pages/Home';

const routes = createBrowserRouter([
    {
        path: '/', 
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },            
            {
                path: "index",
                element: "hi",
            },
        ] 
    },
    {
        path: '*',
        element: "404 - Aradığınız Sayfa Bulunamadı!"
    }    
]);

export default routes;
