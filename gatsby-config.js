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
			options: {
				name: "images",
				path: "./src/assets/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-plugin-sass",
		},
		{
            resolve: 'gatsby-source-gravityforms',
            options: {
                // Base URL needs to include protocol (http/https)
                baseUrl: 'https://metronomestag.wpengine.com',
                include: [], // Array of form IDs. Will only import these forms.
                exclude: [], // Array of form IDs. Will exclude these forms.
                // Gravity Forms API
                allowSelfSigned: true,
                api: {
                    key: '1641b8423d',
                    secret: 'be6d9a52d3df92f',
                },
				basicAuth: {
                    username: 'metronomestag',
                    password: 'nerdcow',
                },
            },
        },
	],
};
