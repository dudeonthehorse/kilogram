var build = './build';
var production = './production';
var dev = './dev';

module.exports = {

	src: dev,
	build: build,
	production: production,

	inliner: {
		src: dev + '/index.html',
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
