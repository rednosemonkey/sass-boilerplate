# Sass project Boilerplate

A simple, concise, sass file structure that can be used to start off any project. A consolidation of a couple years of sass use. I've tried to maintain a structure that can fit most projects, without all the cruft prevalent in many frameworks today. 

sass-globbing gem required to import a folder of individual files. Easily add or remove files in a folder without having to update @import.

    $ gem install sass-globbing

To use with compass, add the following to compass config file.

    require 'sass-globbing'  

Without compass, watch for changes and compile using

    $ sass -r sass-globbing --watch style.scss:style.css

## Acknowledgments

 - [Jonathan Snook's "SMACSS"](http://smacss.com/)
 - [Hugo Giraudel's "Architecture for a Sass Project"](http://www.sitepoint.com/architecture-sass-project/) 
 - [Toolkit](https://github.com/Team-Sass/toolkit)
 - [bourbon](http://bourbon.io/)
