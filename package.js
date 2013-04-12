Package.describe({
    summary: 'A basic controller watching route-matches of ia-router-core'
});

Package.on_use(function (api, where) {
    api.use(['underscore', 'deps'], 'client');

    api.add_files([
        'lib/namespace.js',
        'lib/Controller.js'
    ], 'client');
});
