module.exports = function(grunt) {
  grunt.initConfig({
    aws: grunt.file.readJSON('aws-keys.json'),
    aws_s3: {
      options: {
        accessKeyId: '<%= aws.AWSAccessKeyId %>', // Use the variables
        secretAccessKey: '<%= aws.AWSSecretKey %>' // You can also use env variables
      },
      dist: {
        options: {
          bucket: '<%= aws.bucket %>'
        },
        files: [
          {
            expand: true,
            cwd: 'client/dist/',
            src: ['**'],
            dest: '/scripts'
          }
        ]
      }
    }
  }),
    grunt.loadNpmTasks('grunt-aws-s3');
  grunt.registerTask('deploy', 'aws_s3');
};
