import React, { useState } from 'react'
import {
  Box,
  Text,
  Grid,
  GridItem,
  VStack,
  Image,
  IconButton,
  Flex,
  useDisclosure,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'

const CharacterIntroduction: React.FC = () => {
  // State for current character art
  const [currentArtIndex, setCurrentArtIndex] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const characterArts = [
    '/assets/about/main_1.png',
    '/assets/about/main_2.png',
    '/assets/about/main_3.png',
    '/assets/about/main_4.png',
    '/assets/about/chiaki.png',
  ]

  const slides = characterArts.map((src) => ({
    src,
    alt: 'Character art',
  }))

  const delicateWirePatternStyles = {
    background: `
      repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(100, 100, 100, 0.1) 50px, rgba(100, 100, 100, 0.1) 51px),
      repeating-linear-gradient(60deg, transparent, transparent 50px, rgba(100, 100, 100, 0.1) 50px, rgba(100, 100, 100, 0.1) 51px),
      repeating-linear-gradient(120deg, transparent, transparent 50px, rgba(100, 100, 100, 0.1) 50px, rgba(100, 100, 100, 0.1) 51px)
    `,
    backgroundSize: '100% 100%',
  }

  return (
    <Grid
      templateColumns={{ base: '1fr', md: '1fr 1fr' }}
      gap={{ base: 8, md: 12 }}
      width="100%"
      maxWidth="width.section"
      margin="0 auto"
      paddingX={{ base: '20px', md: '40px', lg: '60px' }}
      paddingY="40px"
      color="black"
      position="relative"
      zIndex={1}
    >
      {/* Left Column - Character Introduction */}
      <GridItem my={{ base: '10px', md: '150px' }}>
        <VStack spacing={4} align="start">
          <Text
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            fontWeight="bold"
            marginBottom="20px"
          >
            涼風千秋
          </Text>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            lineHeight="1.8"
            fontWeight="medium"
          >
            「はおーっ！涼風千秋です！」
          </Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.8" opacity={0.9}>
            棕髮獸耳神使狐狸大小姐，喜歡跟人們交流。
            <br />
            希望能開心的度過每一天。
            <br />
            繪師、字體設計師、工程部門主管，興趣是自己動手做點小東西，對各種可愛的事物沒有抵抗力。
          </Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.8" opacity={0.9}>
            生日：2月27日
            <br />
            喜歡的要素：獸耳、女僕裝、水手領、蘿莉塔
          </Text>
          <Image
            src="/assets/about/signv2_animated.svg"
            alt="Chiaki Sign"
            width="50%"
            mt="20px"
            alignSelf="flex-end"
            transform="rotate(4deg)"
          />
        </VStack>
      </GridItem>

      {/* Right Column - Character Art Display */}
      <GridItem>
        <Flex gap={6}>
          {/* Main Image Display */}
          <Box
            position="relative"
            flex="1"
            height={{ base: '60vh', md: '70vh' }}
            overflow="hidden"
          >
            <Image
              src={characterArts[currentArtIndex]}
              alt={`Character art ${currentArtIndex + 1}`}
              width="100%"
              height="100%"
              objectFit="contain"
            />
            <IconButton
              aria-label="View full size"
              icon={<SearchIcon />}
              position="absolute"
              bottom="16px"
              right="16px"
              colorScheme="blackAlpha"
              variant="solid"
              onClick={onOpen}
              size="lg"
              borderRadius="full"
            />
          </Box>

          {/* Thumbnails */}
          <VStack
            spacing={3}
            width={{ base: '60px', md: '80px' }}
            my={{ base: '10px', md: '50px' }}
          >
            {characterArts.map((art, index) => (
              <Box
                key={art}
                boxSize={{ base: '50px', md: '70px' }}
                borderRadius="full"
                overflow="hidden"
                cursor="pointer"
                border="2px solid"
                borderColor={currentArtIndex === index ? '#df8a42' : '#f5c8a1'}
                transition="all 0.2s"
                backdropFilter="blur(10px)"
                onClick={() => setCurrentArtIndex(index)}
              >
                <Image
                  src={art}
                  alt={`Thumbnail ${index + 1}`}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  objectPosition="top"
                />
              </Box>
            ))}
          </VStack>
        </Flex>

        {/* Lightbox */}
        <Lightbox
          open={isOpen}
          close={onClose}
          slides={slides}
          index={currentArtIndex}
          plugins={[Zoom]}
          animation={{ fade: 300, swipe: 200 }}
          controller={{ closeOnBackdropClick: true }}
          carousel={{ finite: true }}
          zoom={{
            maxZoomPixelRatio: 3,
            zoomInMultiplier: 2,
            doubleTapDelay: 300,
            doubleClickDelay: 300,
            doubleClickMaxStops: 2,
            keyboardMoveDistance: 50,
            wheelZoomDistanceFactor: 100,
          }}
        />
      </GridItem>
    </Grid>
  )
}

export default CharacterIntroduction
