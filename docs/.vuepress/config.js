module.exports = {
    locales: {
      '/': {
        lang: 'en-US',
        title: 'Novamar AS',
        description: 'Documentation for Novamar supplied products and services'
      }
    },
    serviceWorker: true,
    themeConfig: {
      logo: '/site-icon.png',
      lastUpdated: true,
      sidebarDepth: 3,
      docsDir: 'docs',
      locales: {
        '/': {
          label: 'English',
          selectText: 'Languages',
          nav: [
            {
              text: 'Datalog',
              link: '/datalog/introduction'
            },
            {
              text: 'Seabed camera',
              link: '/uvcam/introduction'
            },
            {
              text: 'Temperature sensor',
              link: '/temperature/introduction'
            }
          ],
          sidebar: [
            {
              title: 'Datalog',
              children: [
                '/datalog/introduction',
                '/datalog/dashboard',
                '/datalog/things',
                '/datalog/settings'
              ]
            },
            {
              title: 'Seabed camera',
              children: [
                  '/uvcam/introduction',
                  '/uvcam/mounting',
                  '/uvcam/software'
              ]
            },
            {
                title: 'Temperature sensor',
                children: [
                    '/temperature/introduction'
                ]
            }
          ]
        }
      }
    }
  }