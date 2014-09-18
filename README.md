# Sass project Boilerplate

A simple, concise, sass file structure that can be used to jump start any project. The barebone requirements for any project without overly verbose mixins trying to cover every eventuality. Simple and straightforward file structure and mixins that that can be droppped in, tweeked, and easily added to for each project. 

## Usage

Drop in your preferred grid, mixins or helpers. Replace normalize for your preferred reset, or only use the project-normalize to keep file size down.

Compiling the sass will result in only the base files being output.

As projects get bigger, a single variable file can get bloated and hard to find what you're looking for. I've prefer to contained variables within their own partial. Typography variables go at the top of the typography file, etc. There is a variables partial in utils, but I recommend only using temporarily, or if the project is small.

No framework proprietory mixins. Vender prefixing handled by [autoprefixer](https://github.com/postcss/autoprefixer). Seriously, if you're still using mixins for prefixes, for the good of the web, please stop ^^;

I recommend Compass if you use sprites (and you should, if you want multi-coloured icons AND cross browser support). If you download [pngquant](http://pngquant.org/) and link to it from the compass config file, your automatically Compass compiled sprite map will be automatically compressed (lossy) by pngquant. 

sass-globbing gem required to import a folder of individual files. Easily add or remove files in a folder without having to update @import.

    $ gem install sass-globbing

Add the following to compass config file.

    require 'sass-globbing'  
    

## Acknowledgments

 - [Hugo Giraudel's "Architecture for a Sass Project"](http://www.sitepoint.com/architecture-sass-project/) 
 - [Bitters](http://bitters.bourbon.io/)
 - [Google](https://www.google.com/)
