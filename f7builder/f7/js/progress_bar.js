blockManager.add('Determinate', {
    label: 'Determinate',
    attributes: {
        class: 'fa fa-square',
        title: 'Determinate'
    },
    content: '<div class="block block-strong">' +
        '<p><span data-progress="10" class="progressbar" id="demo-inline-progressbar"></span></p>' +
        '<div>',
    category: {
        label: 'Progress Bar',
        open: false
    }
});

blockManager.add('Infinite', {
    label: 'Infinite',
    attributes: {
        class: 'fa fa-square',
        title: 'Infinite'
    },
    content: '<div class="block block-strong">' +
        '<p>' +
        '  <span class="progressbar-infinite"></span>' +
        '</p>' +
        '</div>',
    category: {
        label: 'Progress Bar',
        open: false
    }
});