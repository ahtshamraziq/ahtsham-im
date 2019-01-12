import Link from 'next/link'

import Page from '../components/Page'
import Wrapper from '../components/Wrapper'

export default () => (
  <Page>
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
        <Link href='/blog'>
          <a>Blog</a>
        </Link>
      </div>
      <style jsx>{`
        .links {
          margin-top: 1rem;
          text-align: center;
        }

        a {
          font-size: 1.5rem;
        }

        a + a {
          margin-left: 0.5rem;
        }

        @media screen and (max-width: 319.98px) {
          .links {
            flex-direction: column;
          }
        }
      `}</style>
    </Wrapper>
  </Page>
)