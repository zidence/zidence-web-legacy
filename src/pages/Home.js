import {
  Navigation,
  BigTitle,
  Title,
  Hero,
  Footer,
  FilterBar,
  CenterContent,
  SquareImage,
} from '../components'

import cities from '../data/cities.json'

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero backgroundPath='images/hero-image.jpg'>
        <BigTitle>The Ideal Residence</BigTitle>
        <Title>Find your true comfort</Title>
        <FilterBar />
      </Hero>
      <CenterContent>
        {cities.map((city, index) => (
          <SquareImage isWithPreview={false} key={index} src={city.imageSrc} />
        ))}
      </CenterContent>

      <Footer />
    </>
  )
}

export default Home
