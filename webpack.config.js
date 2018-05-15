module.exports = {
  	entry: './src/index.jsx',
	output: {
		path:__dirname+'/public/js',
		filename: "app.js"
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				loader: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: "style-loader" // creates style nodes from JS strings
					},
					{
						loader: "css-loader" // translates CSS into CommonJS
					},
					{
						loader: "sass-loader" // compiles Sass to CSS
					}
				]
			},
		]
	},
	mode: 'none'
};