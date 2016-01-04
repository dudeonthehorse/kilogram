var build = './build';
var dev = './dev';

module.exports = {

	src: dev,
	build: build,

	inliner: {
		src: ['*.html', '!_*.html'],
		cwd: dev,
		dest: build
	},

	concatcss: {
		src: dev + '/css/*.css',
		dest: dev,
		allFile: 'allstyles.css',
		delStyleCompile: dev + '/allstyles.css'
	},

	images: {
		src: 'images/**',
		cwd: dev,
		dest: build + '/images'
	}

};
