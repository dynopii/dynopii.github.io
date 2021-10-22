const url = 'https://dynopii-web.vercel.app/'

module.exports = {
    siteUrl: url,
    generateRobotsTxt: true,
    changefreq: 'daily',
    transform: async (config, path) => {
        console.log(path)
        if(path === '/'){
            return {
                loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
                changefreq: config.changefreq,
                priority: 1,
                lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
                alternateRefs: config.alternateRefs ?? [],
            }
        }
        return {
          loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
          changefreq: config.changefreq,
          priority: config.priority,
          lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
          alternateRefs: config.alternateRefs ?? [],
        }
      },
}