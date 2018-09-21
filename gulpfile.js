var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('default', function () {
    nodemon({
        script: 'api/app.js',
        ext: 'js',
        env: {
            JWT_SECRET: 'ilovemean'
        },
        ignore: ['/node_modules/**']
    })
        .on('restart', function () {
            console.log('Server restarting');
        });
});