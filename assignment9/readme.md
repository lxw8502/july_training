# Assignment 9  Implement JsHint in grunt


1. install Grunt run:     
npm install grunt --save-dev     

2. install grunt command line interface (CLI) globally:      
npm install grunt-cli -g       

3. install the JSHint Grunt plugin:    
npm install grunt-contrib-jshint --save-dev

4. install a Grunt plugin called watch that detects when a file has been updated:   
npm install grunt-contrib-watch --save-dev  

5. write code below in Gruntfile.js  
```
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'app/**/*.js']
        },
        watch: {
            files: ['Gruntfile.js', 'app/**/*.js'],
            tasks: ['jshint']
        }
    });
};
```

