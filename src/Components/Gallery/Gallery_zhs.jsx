import { Grid, Image, Box } from '@chakra-ui/react';
import AboutBanner from '../About/AboutBanner';
import images from './Gallery_zhsData.json';

function GalleryZhs() {
  return (
    <>
      <AboutBanner munheading={'ZERO HOUR SUMMIT GALLERY'} />
      <Box pl={['0', '10']} pt={'10'} bg="green.50" pb={'10'}>
        <Grid
          templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
          ml={['10%', '12%']}
          mr={['10%', '12%']}
          gap={4}
        >
          {images &&
            images.map(image => {
              const { src, alt } = image;
              return (
                <Image
                  key={src}
                  src={src}
                  alt={alt}
                  objectFit="cover"
                  w="100%"
                  h="250px"
                  borderRadius="md"
                  boxShadow="md"
                  loading="lazy"
                />
              );
            })}
        </Grid>
      </Box>
    </>
  );
}

export default GalleryZhs;
