module.exports = {
	siteMetadata: {
		siteUrl: "https://metronomestag.wpengine.com/",
		title: "Metronome",
	},
	plugins: [
		{
			resolve: "gatsby-source-wordpress",
			options: {
				url: "https://metronomestag.wpengine.com/graphql",
				auth: {
					htaccess: {
						username: `metronomestag`,
						password: `nerdcow`,
					}
				}
			},
		},
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			// options: {
			// 	name: "images",
			// 	path: "./src/assets/images/",
			// },
			__key: "images",
		},
		{
			resolve: "gatsby-plugin-sass",
		},
	],
};
