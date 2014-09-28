module.exports = function(grunt) {

// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		// CONFIG

		compass: {
			build: {
				options: {
					config: 'config.rb',
					sassDir: 'sass',
					cssDir: 'css/tmp',
					environment: 'development',
					outputStyle: 'expanded'
				}
			}
		},

		// If prefer to not use compass
		// sass: {
		// 	build: {
		// 		options: {
		// 			style: 'expanded'
		// 		},
		// 		files: {
		// 			'css/temp/style.css': 'sass/style.scss'
		// 		}
		// 	}
		// },

		autoprefixer: {
			options: {
				browsers: [
					'last 2 version',
					'safari 6',
					'ie 9',
					'opera 12.1',
					'ios 6',
					'android 4'
				]
			},
			build: {
				src: 'css/tmp/style.css'
			},
		},

		cmq: {
			options: {
				log: true
			},
			dev: {
				files: {
					'css/dev/style.css': ['css/tmp/style.css']
				}
			},
			dist: {
				files: {
					'css/tmp/mq/style.css': ['css/tmp/style.css']
				}
			}
		},

		cssmin: {
			dist: {
				files: {
					'css/dist/style.css': ['css/tmp/mq/style.css']
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
					'html/dist/index.html': 'index.html'
				}
			}
		},

		clean: {
			build: [
				'css/tmp'
		]},

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
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-combine-media-queries');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-clean');

// TASKS

	grunt.registerTask('html', [
		'htmlmin:dist'
	]);

	grunt.registerTask('stylesheets', [
		'compass',
		'autoprefixer',
		'cmq:dev'
	]);

	// Only for final distribution. Run "grunt build"
	grunt.registerTask('build', [
		'compass',
		'autoprefixer',
		'cmq:dist',
		'cssmin:dist',
		'clean'
	]);

	// default is unminified. Run "grunt"
	grunt.registerTask('default', [
		'stylesheets',
		'clean',
		'watch'
	]);

};
