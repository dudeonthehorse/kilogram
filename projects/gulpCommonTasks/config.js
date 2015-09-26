var build = './build';
var dev = './dev';

module.exports = {

	src: dev,
	build: build,

	inliner: {
		src: dev + '/*.html',
		dest: build
	},

	concatcss: {
		src: dev + '/css/*.css',
		dest: dev,
		allFile: 'allstyles.css',
		delStyleCompile: dev + '/allstyles.css'
	},

	images: {
		src: [dev + '/images/**'],
		dest: build + '/images'
	}

};
