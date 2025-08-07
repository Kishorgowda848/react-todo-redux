import {createRoot} from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Listing from './src/component/listing';
// import Provider from 'react-redux';
import appStore from './src/utils/appStore';
import { Provider } from 'react-redux';

const root = createRoot(document.querySelector("#root"));

const Layout = ()=>{
    return <>
     <p> Todo List</p>
     <Provider store={appStore}>
     <Outlet/>
     </Provider>
    </>
}

const router = createBrowserRouter([
    {
        path:'',
        element: <Layout/>,
        children:[
            {
                path:'/',
                element:<Listing/>
            }
        ]
    }
]);
root.render(<RouterProvider router={router}/>)