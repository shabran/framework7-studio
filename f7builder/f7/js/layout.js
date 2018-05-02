blockManager.add('single-view', {
    label: 'Single Page',
    attributes: {
        class: 'fa fa-square',
        title: 'Single Page'
    },
    content: '<div class="page"></div><script src="f7/js/demo.js"></script>',
    category: {
        label: 'Layout',
        open: false
    }
});

blockManager.add('page-content', {
    label: 'Page Content',
    attributes: {
        class: 'fa fa-square',
        title: 'Page Content'
    },
    content: '<div class="page-content"></div>',
    category: {
        label: 'Layout',
        open: false
    }
});