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
                    key: 'ck_119ac199ab2f9e9a89dcb266c10e0fc89ab92f4c',
                    secret: 'cs_966f9b08bb726d6902afa3eff8784d91fd986d76',
                },
				basicAuth: {
                    username: 'metronomestag',
                    password: 'nerdcow',
                },
            },
        },
	],
};
