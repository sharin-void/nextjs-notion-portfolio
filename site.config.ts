import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '1ff33906fd9580808f3be85046efee0b',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: '4a49576c-46dd-461a-9dbd-be4c3ffccec8',

  // basic site info (required)
  name: 'Portfolio',
  domain: 'lenazav.com',
  author: 'Lena Zav',

  // open graph metadata (optional)
  description: 'Video Editor and Multimedia Designer',

  // social usernames (optional)
  // twitter: '#',
  // github: '#',
  linkedin: 'lena-zav',
  vimeo: 'lenazavx',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://i.imgur.com/ykU3C1G.png',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
     '/about': '20033906fd95811c831edafcc3b1f5d5',
     '/contact': '20033906fd9581168d1ef85da1451b9f',
     '/portfolio': '1fb33906fd958147af7fdde96bf5efcd'
   },
  // pageUrlOverrides: ,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
   {
     title: 'About',
     pageId: '20033906fd95811c831edafcc3b1f5d5'
   },
   {
      title: 'Contact',
      pageId: '20033906fd9581168d1ef85da1451b9f'
    }
  ]
}) 
