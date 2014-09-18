module.exports = function(grunt) {

// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		// CONFIG

		compass: {
		 build: {
			 options: {
				 config: 'config.rb',
				 sassDir: 'sass/',
				 cssDir: 'dev/',
				 environment: 'development'
				 // outputStyle: 'expanded' //set in compass config
			 }
		 } 
	 },

	 autoprefixer: {
			options: {
				browsers: ['last 2 version', 'ie 8', 'ie 9']
			},
			build: {
				src: 'dev/style.css'
			},
		},

		cmq: {
			options: {
				log: true
			},
			main: {
				files: {
					'dev/combine-mq/style.css': ['dev/style.css']
				}
			}
		},

		cssmin: {
			build: {
				files: {
					'prod/style.css': ['dev/combine-mq/*.css']
				}
			}
		},

		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'prod/index.html': 'index.html'
				}
			}
		},

		watch: {
			stylesheets: {
				files: 'sass/**/*.scss',
				tasks: [ 'stylesheets' ]
			}
		}
	 
	});

// DEPENDENT PLUGINS

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-combine-media-queries');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

// TASKS

	grunt.registerTask(
		'stylesheets', 
		[ 'compass', 'autoprefixer', 'cmq', 'cssmin' ]
	);

	grunt.registerTask(
		'default', 
		[ 'stylesheets', 'watch' ] 
	);

};
