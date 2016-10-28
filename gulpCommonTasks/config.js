var build = './build';
var dev = './dev';

module.exports = {

	src: dev,
	build: build,

	template: {
		src: ['*.html', '!_*.html'],
		cwd: dev,
		dest: build
	},
	concatcss: {
		src: ['css/*.css'],
		dest: dev,
		cwd: dev,
		allFile: 'styles.css'
	},
	less: {
		src: 'less/*.less',
		dest: dev + '/css',
		cwd: dev
	},
	images: {
		src: 'images/**',
		cwd: dev,
		dest: build + '/images'
	}
};