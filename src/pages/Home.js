import {
  Navigation,
  BigTitle,
  Title,
  Hero,
  Footer,
  FilterBar,
} from '../components'

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero backgroundPath='images/hero-image.jpg'>
        <BigTitle>The Ideal Residence</BigTitle>
        <Title>Find your true comfort</Title>
        <FilterBar />
      </Hero>
      <Footer />
    </>
  )
}

export default Home
