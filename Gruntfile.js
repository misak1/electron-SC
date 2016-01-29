module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        'create-windows-installer': {
            x64: {
                appDirectory: '/Users/mac/vhosts/electron-asazuke/bin/electron-asazuke-win32-ia32/', // electron-packagerなどでパッケージしたアプリのディレクトリ
                outputDirectory: './bin/build/electron-asazuke-win32-ia32',
                authors: 'Mecanography.',
                exe: 'electron-asazuke.exe'
            }
            // ,
            // ia32: {
            //     appDirectory: './bin/build/installer32', // electron-packagerなどでパッケージしたアプリのディレクトリ
            //     outputDirectory: './bin/build/installer-out32',
            //     authors: 'Mecanography.',
            //     exe: 'mecanography.exe'
            // }
        },
        shell: {
            run: {
                command: 'electron .'
            }
        }
    });

    grunt.loadNpmTasks('grunt-electron-installer');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('executable', ['create-windows-installer']);
    grunt.registerTask('run', ['shell:run']);
    grunt.registerTask('default', ['shell:run']);
};
