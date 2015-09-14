var build = './build';
var production = './production';
var src = './src';

module.exports = {

	src: src,
	build: build,
	production: production,

	inliner: {
		src: src + '/index.html',
		dest: build
	},

	concatcss: {
		src: src + '/css/*.css',
		dest: build
	},

	images: {
		src: [src + '/images/**'],
		dest: build + '/images'
	}

};
