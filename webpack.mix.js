const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .copyDirectory('resources/assets', 'public/assets')
    .copyDirectory('resources/images', 'public/images')
    .copyDirectory('resources/fonts', 'public/fonts')

    .js('resources/js/app.js', 'public/js').vue()
        .postCss('resources/css/app.css', 'public/css', [
            require('postcss-import'),
            require('tailwindcss'),
        ])
    .styles([
        'resources/css/animate.css',
        'resources/css/animations-delay.css',
        'resources/css/aos.css',
        'resources/css/bootstrap.min.css',
        'resources/css/flexslider.css',
        'resources/css/magnific-popup.css',
        'resources/css/owl.carousel.min.css',
        'resources/css/owl.theme.default.min.css',
        'resources/css/owl.transitions.css',
        'resources/css/slick-theme.css',
        'resources/css/slick.css',
        'resources/css/style.css',
        'resources/css/swiper.min.css',
        'resources/css/custom.css',
        ], 'public/css/all.css')
    .webpackConfig(require('./webpack.config'))
    .sourceMaps();;

if (mix.inProduction()) {
    mix.version();
}
