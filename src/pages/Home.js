import {
  Navigation,
  CenterContent,
  BigTitle,
  Hero,
  Footer,
} from '../components'

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero backgroundPath='images/hero-image.jpg'>
        <CenterContent>
          <BigTitle>Zidence Web</BigTitle>
        </CenterContent>
      </Hero>
      <Footer />
    </>
  )
}

export default Home
