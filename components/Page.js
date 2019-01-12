import Router from 'next/router'

import * as gtag from '../lib/gtag'

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

export default ({ children }) => (
  <div className='main'>
    {children}
    <style global jsx>{`
      .main {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol';
        font-size: 16px;
      }

      h1 {
        font-size: 2.5em;
      }

      a {
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </div>
)
