module.exports = {
	siteMetadata: {
		siteUrl: "https://metronomestag.wpengine.com",
		// siteUrl: "https://devnerdcow.wpengine.com",
		title: "Metronome",
	},
	plugins: [
		{
			resolve: "gatsby-source-wordpress",
			options: {
				url: "https://metronomestag.wpengine.com/graphql",
				// url: "https://devnerdcow.wpengine.com/graphql",
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
                baseUrl: 'https://devnerdcow.wpengine.com',
                include: [], // Array of form IDs. Will only import these forms.
                exclude: [], // Array of form IDs. Will exclude these forms.
                // Gravity Forms API
                allowSelfSigned: true,
                // api: {
                //     key: 'ck_119ac199ab2f9e9a89dcb266c10e0fc89ab92f4c',
                //     secret: 'cs_966f9b08bb726d6902afa3eff8784d91fd986d76',
                // },
				api: {
                    key: 'ck_876b122ca3195a786c9e8c034383f3f1dec20015',
                    secret: 'cs_5552b562f0ed8057cef16b7b32f43d7d5421fc66',
                },
				// basicAuth: {
                //     username: 'metronomestag',
                //     password: 'nerdcow',
                // },
            },
        },
	],
};
