import Head from 'next/head'
import Link from 'next/link'

import Page from '../components/Page'
import Wrapper from '../components/Wrapper'

export default () => (
  <Page>
    <Head>
      <title>Ahtsham Raziq</title>
      <meta name='description' content="Ahtsham's homepage on the internets" />
    </Head>
    <Wrapper>
      <div>
        <h1>Ahtsham Raziq</h1>
      </div>
      <div className='links'>
        <Link href='https://github.com/ahtshamraziq'>
          <a>GitHub</a>
        </Link>
        <Link href='https://pk.linkedin.com/in/atheroth'>
          <a>LinkedIn</a>
        </Link>
        <Link href='mailto:ahtsham.raziq@pm.me'>
          <a>Contact</a>
        </Link>
      </div>
      <style jsx>{`
        .links {
          margin-top: 1rem;
          display: flex;
          justify-content: center;
        }

        a {
          font-size: 1.5rem;
          padding: 0 0.25rem;
        }

        @media screen and (max-width: 328.2px) {
          .links {
            flex-direction: column;
          }
        }
      `}</style>
    </Wrapper>
  </Page>
)
