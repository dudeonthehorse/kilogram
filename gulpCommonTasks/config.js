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

	nunjucks: {
		src: ['*.html', '!_*.html'],
		cwd: dev,
		dest: build,
		srcCSS: 'css/**',
		destCSS: build + '/css'
	},

	concatcss: {
		src: 'css/*.css',
		dest: dev,
		cwd: dev,
		allFile: 'allstyles.css'
	},

	images: {
		src: 'images/**',
		cwd: dev,
		dest: build + '/images'
	}

};
