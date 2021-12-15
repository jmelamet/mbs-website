module.exports = {
	siteMetadata: {
		siteUrl: "https://metronomebusinesssolutions.com/",
		// siteUrl: "https://devnerdcow.wpengine.com",
		title: "Metronome",
	},
	plugins: [
		{
			resolve: "gatsby-source-wordpress",
			options: {
				url: "https://metronomeprod.wpengine.com/graphql",
				// auth: {
				// 	htaccess: {
				// 		username: `metronomestag`,
				// 		password: `nerdcow`,
				// 	}
				// },
				type: {
					BlockEditorContentNode: { exclude: true },
				},
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
                baseUrl: 'https://metronomeprod.wpengine.com',
                include: [], // Array of form IDs. Will only import these forms.
                exclude: [], // Array of form IDs. Will exclude these forms.
                // Gravity Forms API
                allowSelfSigned: true,
				api: {
                    key: 'ck_a3fb1d83f409c31b9a1cfa6596609e59a9bd09cc',
                    secret: 'cs_fd5f994db977704f3fc3aba7d4dbcb6ee17831c1',
                },
            },
        },
		`gatsby-plugin-advanced-sitemap`,
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://metronomebusinesssolutions.com',
				sitemap: 'https://metronomebusinesssolutions.com/sitemap.xml',
				policy: [{ userAgent: '*', allow: '/' }]
			}
		},
		{
			resolve: "gatsby-plugin-google-tagmanager",
			options: {
				id: "GTM-5HDQQ9P",
				includeInDevelopment: true,
				enableWebVitalsTracking: true,
			},
		},
	],
};
