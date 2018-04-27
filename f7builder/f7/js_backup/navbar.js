blockManager.add('navbar', {
    label: 'Navbar',
    attributes: {
        class: 'fa fa-square',
        title: 'Navbar'
    },
    content: '<div class="navbar">' +
        '   <div class="navbar-inner">' +
        '       <div class="title sliding">Title</div>' +
        '   </div>' +
        '</div>',
    category: 'Navbar'
});

blockManager.add('navbar_icon', {
    label: 'Navbar Icon',
    attributes: {
        class: 'fa fa-square',
        title: 'Navbar Icon'
    },
    content: '<div class="navbar">' +
        '   <div class="navbar-inner">' +
        '       <div class="title">Title</div>' +
        '       <div class="right">' +
        '           <a class="link icon-only">' +
        '               <i class="material-icons">info</i>' +
        '           </a>' +
        '       </div>' +
        '   </div>' +
        '</div>',
    category: 'Navbar'
});

blockManager.add('navbar_icon_back', {
    label: 'Navbar Icon Back',
    attributes: {
        class: 'fa fa-square',
        title: 'Navbar Icon Back'
    },
    content: '<div class="navbar">' +
        '   <div class="navbar-inner">' +
        '       <div class="left">' +
        '           <a class="link icon-only">' +
        '               <i class="material-icons">chevron_left</i>' +
        '           </a>' +
        '       </div>' +
        '       <div class="title">Title</div>' +
        '       <div class="right">' +
        '           <a class="link icon-only">' +
        '               <i class="material-icons">info</i>' +
        '           </a>' +
        '       </div>' +
        '   </div>' +
        '</div>',
    category: 'Navbar'
});

blockManager.add('subnavbar_toolbar', {
    label: 'Sub Navbar Toolbar',
    attributes: {
        class: 'fa fa-square',
        title: 'Sub Navbar Toolbar'
    },
    content: '<div class="subnavbar">' +
        '  <div class="subnavbar-inner">' +
        '    <div class="segmented">' +
        '      <a class="button button-active">Tab 1</a>' +
        '      <a class="button">Tab 2</a>' +
        '      <a class="button">Tab 3</a>' +
        '    </div>' +
        '  </div>' +
        '</div>',
    category: 'Navbar'
});

blockManager.add('subnavbar_searchbar', {
    label: 'Sub Navbar Searchbar',
    attributes: {
        class: 'fa fa-square',
        title: 'Sub Navbar Searchbar'
    },
    content: '<div class="subnavbar">' +
        '   <!-- Searchbar with auto init -->' +
        '   <form class="searchbar">' +
        '     <div class="searchbar-inner">' +
        '       <div class="searchbar-input-wrap">' +
        '         <input type="search" placeholder="Search">' +
        '         <i class="searchbar-icon"></i>' +
        '         <span class="input-clear-button"></span>' +
        '       </div>' +
        '       <span class="searchbar-disable-button">Cancel</span>' +
        '     </div>' +
        '   </form>' +
        '</div>',
    category: 'Navbar'
});

blockManager.add('page_searchbar', {
    label: 'Page Searchbar',
    attributes: {
        class: 'fa fa-square',
        title: 'Page Searchbar'
    },
    content: '<div class="page">' +
        '  <div class="navbar">' +
        '    <div class="navbar-inner">' +
        '      <div class="title">Search Bar</div>' +
        '      <div class="subnavbar">' +
        '        <!-- Searchbar with auto init -->' +
        '        <form class="searchbar">' +
        '          <div class="searchbar-inner">' +
        '            <div class="searchbar-input-wrap">' +
        '              <input type="search" placeholder="Search">' +
        '              <i class="searchbar-icon"></i>' +
        '              <span class="input-clear-button"></span>' +
        '            </div>' +
        '            <span class="searchbar-disable-button">Cancel</span>' +
        '          </div>' +
        '        </form>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '  <div class="page-content">' +
        '    <!-- Searchbar backdrop -->' +
        '    <div class="searchbar-backdrop"></div>' +
        '    <!-- hide-on-search element -->' +
        '    <div class="block searchbar-hide-on-search">' +
        '      <p>This block will be hidden on search. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>' +
        '    </div>' +
        '    <!-- search target list -->' +
        '    <div class="list searchbar-found">' +
        '      <ul>' +
        '        <li class="item-content">' +
        '          <div class="item-inner">' +
        '            <div class="item-title">Acura</div>' +
        '          </div>' +
        '        </li>' +
        '        <li class="item-content">' +
        '          <div class="item-inner">' +
        '            <div class="item-title">Audi</div>' +
        '          </div>' +
        '        </li>' +
        '        <li class="item-content">' +
        '          <div class="item-inner">' +
        '            <div class="item-title">BMW</div>' +
        '          </div>' +
        '        </li>' +
        '        <li class="item-content">' +
        '          <div class="item-inner">' +
        '            <div class="item-title">Volvo</div>' +
        '          </div>' +
        '        </li>' +
        '      </ul>' +
        '    </div>' +
        '    <!-- Nothing found message -->' +
        '    <div class="block searchbar-not-found">' +
        '      <div class="block-inner">Nothing found</div>' +
        '    </div>' +
        '  </div>' +
        '</div>',
    category: 'Navbar'
});