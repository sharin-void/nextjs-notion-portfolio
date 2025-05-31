import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '204b543ea2e481429290f1d73b217e9f',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: 'e7cb543e-a2e4-81eb-9cc4-00037e7627aa',

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
     '/about': '204b543ea2e481d5a3bae439d217b2f5',
     '/contact': '204b543ea2e4818f995fc8f4c7ae4dc2'
   },
  // pageUrlOverrides: ,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
   {
     title: 'About',
     pageId: '204b543ea2e481d5a3bae439d217b2f5'
   },
   {
      title: 'Contact',
      pageId: '204b543ea2e4818f995fc8f4c7ae4dc2'
    }
  ]
}) 
