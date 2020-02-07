var routes=[ // Index page
  {
      path: '/', url: './index.html', name: 'home',
  }
  ,
  {
      path: '/about/', url: './pages/about.html', name: 'about',
  }
  ,
  {
      path: '/login/', componentUrl: './pages/login.html', name: 'login',
  }
  ,
  {
      path: '/register/', componentUrl: './pages/register.html', name: 'register',
  }
  ,
  {
      path: '/home/', componentUrl: './pages/home.html', name: 'user-home',
  }

  ,
  {
      path: '/forgot-password/', componentUrl: './pages/fp.html', name: 'forgot-password',
  }
  ,
  {
      path: '/profile/', componentUrl: './pages/profile.html', name: 'profile',
  }
  ,
  {
      path: '/view-place/', componentUrl: './pages/view-place.html', name: 'view_place',
  }
  ,,
  {
      path: '/view-hotel/', componentUrl: './pages/view-hotel.html', name: 'view_hotel',
  }
  ,
  {
      path: '/saved/', componentUrl: './pages/saved.html', name: 'saved_places',
  }
  ,
  {
      path: '/saved-hotels/', componentUrl: './pages/saved_hotels.html', name: 'saved_hotels',
  }
  ,
  {
      path: '/places/', componentUrl: './pages/places.html', name: 'places',
  }
  ,
  {
      path: '/hotels/', componentUrl: './pages/hotels.html', name: 'hotels',
  }
  , // Default route (404 page). MUST BE THE LAST
  {
      path: '(.*)', url: './pages/404.html',
  }
  
  ];