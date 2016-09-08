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
		src: 'css/*.less',
		dest: dev,
		cwd: dev,
		allFile: 'styles.css'
	},

	images: {
		src: 'images/**',
		cwd: dev,
		dest: build + '/images'
	}

};
