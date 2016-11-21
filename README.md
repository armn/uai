
u[:a]i (**armn's user interface boilerplate**)
===================

This is a front-end boilerplate for Digital Score projects that currently uses **Pug** and **Semantic UI**

Made for **Digital Score** http://www.digitalscore.lv

---

Version 1.0.0, - initial commit

----------


Development stack
-----------------

This project uses:

- **Node & Node packagage manager:** for handling development dependancies 
    - **https://nodejs.org/**
    - **https://www.npmjs.com/**
- **Bower:** package management for front-end dependencies
    - **https://bower.io/**
- **Grunt, Gulp:** JavaScript task runner for automating building process (*Grunt not in use*)
    - http://gruntjs.com/
    - **https://gulp.readme.io/docs**
- **BrowserSync:** used for synchronized browser testing
    - **https://www.browsersync.io/**
- **Sass**, **Less**: used for CSS preprocessing (*Sass is not in use*
    - http://sass-lang.com/****
    - **http://lesscss.org/**
- **PostCSS**: used for CSS postprocessing - minification & auto prefixing (*included in Semantic UI by default*)
    - **https://github.com/postcss/postcss**
- **Pug (formerly Jade)**: HTML templating
    - **http://jade-lang.com/**
- **Foundation**, **Semantic UI**: front-end framework (*Foundation not in use*)
    - http://foundation.zurb.com/
    - **http://semantic-ui.com/**
- **BxSlider**, **slick slider**: content slider (*BxSlider not in use*)
    - http://bxslider.com/
    - **http://kenwheeler.github.io/slick/**
- **Icomoon**: for icon fonts
    - **https://icomoon.io/**

----------


Installation guide
-----------------
#### Install Node & Node package manager
- https://nodejs.org/
- https://www.npmjs.com/

#### Install Node modules
From project directory, run:

    npm install

Directory *node_modules* will be created

#### Install Bower components (*only if bower is in use*)
From project directory, run:

    bower install

Directory *bower_components* will be created


#### Run Gulp (*Semantic UI*) or Grunt (*Foundation*)
    gulp build

This will:

- [x] Compile **Pug** files to **HTML** (*in views/ directory*)
- [x] Build **Semantic UI** (**in ui/dist directory*)
- [ ] Run PostCSS tasks (nanocss & autoprefixer) on **style.css** and build **style.min.css**
- [ ] Minify files in **images/** directory


Development workflow
-------------

Setup local server with **site.dev** as localhost and run:

    gulp watch-sync

This will create a **BrowserSync** enabled watcher on **http://site.dev:3000/views** and all changes made to **.less** or **.pug** files will be automatically built and appear in the browser without the need to manually refresh.

----------


It is also possible to run the watch task without **BrowserSync:**

    gulp watch


## @todo

- [ ] Cleanup README.md
- [ ] Separate instructions for **Foundation** workflow with Grunt & PostCSS
- [ ] Development of **u[:a]i** Semantic UI theme
- [ ] Add **.pug** gulp tasks

 

Changelog
-------------

> **1.0.0**
- Initial commit of u[:a]i, some cleanup & added Readme