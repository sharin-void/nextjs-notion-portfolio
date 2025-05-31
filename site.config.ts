import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '20433906fd9580ad977fe9d37799ae6f',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

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
  defaultPageIcon: 'https://img.notionusercontent.com/s3/prod-files-secure%2F4a49576c-46dd-461a-9dbd-be4c3ffccec8%2F4281ff0a-fe0c-425c-a2a5-eda62cf7a9c6%2Fprofile-cv-circle.png/freeze?exp=1748782498&sig=56aLYobeCG0cqIyN6abzolChhLxbeI5kZlcRBQiqYgw&id=20433906-fd95-80ad-977f-e9d37799ae6f&table=block',
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
     '/resume': '20433906fd9581b99e90efb17675a2da',
     '/contact-me': '20433906fd9581cb8fc9cdfa4a9c9ffc'
   },
  // pageUrlOverrides: ,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
   {
     title: 'About',
     pageId: '20433906fd9581b99e90efb17675a2da'
   },
   {
      title: 'Contact',
      pageId: '20433906fd9581cb8fc9cdfa4a9c9ffc'
    }
  ]
}) 
