var build = './build';
var dev = './dev';

module.exports = {

	src: dev,
	build: build,

	template: {
		src: ['*.html', '!_*.html'],
		cwd: dev,
		dest: build,
		data: dev + '/data.json',
		utm: {
			source: 'autofunnels',
			medium: 'email',
			campaign: 'sever',
			term: 'newsletter',
			content: 'content'
		}
	},

	concatcss: {
		src: 'less/*.less',
		dest: dev,
		cwd: dev,
		allFile: 'css/styles.css'
	},

	images: {
		src: 'images/**',
		cwd: dev,
		dest: build + '/images'
	}

};
