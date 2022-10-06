const path = require('path');
const portFinderSync = require('portfinder-sync');
const port = portFinderSync.getPort(8000);

module.exports = {
    paths: {
        source: path.resolve(__dirname, '../src/'),
        output: path.resolve(__dirname, '../../assets/'),
        images: path.resolve(__dirname, '../src/images/'),
    },
    deploy: {
        host: '8.12.17.114',
        username: 'root',
        password: 'L@o1R1xXz1c#tZ)E',
        to: '',
    },
    manifest: {
        path: 'assets/',
        phpClassName: 'PathsToFiles',
    },
    server: {
        proxy: 'http://viva',
        host: 'viva',
        port,
    },
};
