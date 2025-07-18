import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Box, Center, Spinner, Text } from '@chakra-ui/react'

// Dynamically import the Live2D model component with no SSR
const Live2DModelClient = dynamic(() => import('./Live2DModelClient'), {
  ssr: false,
  loading: () => (
    <Box
      width={{ base: '95vw', md: '60vw', lg: '400px' }}
      height={{ base: '80vh', md: '70vh', lg: '600px' }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      backgroundColor="transparent"
    >
      <Spinner size="xl" color="gray.400" />
      <Text marginTop={4} color="gray.500">
        載入中...
      </Text>
    </Box>
  ),
})

interface Live2DModelProps {
  width?: number
  height?: number
}

const Live2DModel: React.FC<Live2DModelProps> = ({ width, height }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <Box
        width={{ base: '95vw', md: '60vw', lg: width || '400px' }}
        height={{ base: '80vh', md: '70vh', lg: height || '600px' }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        backgroundColor="transparent"
      >
        <Spinner size="xl" color="gray.400" />
        <Text marginTop={4} color="gray.500">
          初始化中...
        </Text>
      </Box>
    )
  }

  return (
    <>
      <Box maxWidth="width.section" margin="0 auto" position="relative">
        <Text
          color="white"
          marginX={{ base: '20px', md: '40px', lg: '60px' }}
          fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
          fontWeight="bold"
        >
          Live2D
        </Text>
        <Text
          color="white"
          marginX={{ base: '20px', md: '40px', lg: '60px' }}
          fontSize="14px"
        >
          嘗試自己做了Live2D模型，移動滑鼠的話，眼睛會跟著動喔！
        </Text>
      </Box>
      <Center>
        <Live2DModelClient width={width} height={height} />
      </Center>
    </>
  )
}

export default Live2DModel
