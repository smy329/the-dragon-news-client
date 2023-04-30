import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home/Home';
import Category from '../pages/Home/Category/Category';
import NewsLayout from '../layout/NewsLayout';
import News from '../pages/News/News/News';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import PrivateRoute from './PrivateRoute';
import Terms from '../pages/Shared/Terms/Terms';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Category />,
        loader: () =>
          fetch(
            'https://the-dragon-news-server-smy329-gmailcom.vercel.app/news'
          ),
      },
      {
        path: '/category/:id',
        element: <Category />,
        loader: ({ params }) =>
          fetch(
            `https://the-dragon-news-server-smy329-gmailcom.vercel.app/categories/${params.id}`
          ),
      },
      // {
      //   path: 'news/:id',
      //   element: <NewsLayout />,
      //   loader: ({ params }) =>
      //     fetch(`https://the-dragon-news-server-smy329-gmailcom.vercel.app/news/${params.id}`),
      // },
    ],
  },
  {
    path: 'news',
    element: (
      <PrivateRoute>
        <NewsLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: ':id',
        element: <News />,
        loader: ({ params }) =>
          fetch(
            `https://the-dragon-news-server-smy329-gmailcom.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: 'terms',
    element: <Terms />,
  },
]);

export default router;
