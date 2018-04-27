routes = [{
        name: 'home',
        path: '/',
        url: './pages/home.html',
        options: {
            animate: false,
        }
    },
    {
        path: '(.*)',
        url: './pages/404.html'
    }
];