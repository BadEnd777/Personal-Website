// Import necessary components and data
import { Layout } from '@/components/layout'
import {
    Grid,
    GridItem,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Heading,
    Text,
    Divider,
    HStack,
    VStack,
    Button,
    Tooltip
} from '@chakra-ui/react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import NextLink from 'next/link'

// Define the MyServicesPage component
export const MyServicesPage = ({ products }) => (
    // Wrap the project list in the common layout
    <Layout
        title="BadEnd - My Services"
        description="Discover the services offered by BadEnd. Explore our skills and the technologies we employ. Get inspired by our diverse portfolio and the technologies we employ."
        url="my-services"
    >
        <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={4}
        >
            {products.map(product => (
                <GridItem key={product.id}>
                    <Card
                        bg="surface0"
                        borderWidth="1px"
                        borderColor="surface1"
                        borderRadius="md"
                        color="text"
                    >
                        <CardHeader p={0}>
                            <Image
                                src={product.images[0].image_thumbnail}
                                alt={product.title}
                                objectFit="cover"
                                w="100%"
                                h="250px"
                                roundedTop="md"
                            />
                        </CardHeader>
                        <CardBody>
                            <Heading size="md">{product.title}</Heading>
                            <Divider my="2" />
                            <Text fontSize="sm" color="subtext0" noOfLines="3">
                                {product.description}
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <HStack justify="space-between" w="100%">
                                <VStack align="flex-start" spacing="0">
                                    <Text fontSize="sm" color="subtext1">
                                        Base Price
                                    </Text>
                                    <Text fontSize="sm" color="mocha.blue">
                                        ฿{product.base_price}
                                    </Text>
                                </VStack>
                                <Tooltip label="View on Fastwork" placement="top">
                                    <NextLink
                                        href={`https://fastwork.co/user/firstpsk/${product.slug}`}
                                        passHref
                                        target="_blank"
                                    >
                                        <Button leftIcon={<FaExternalLinkAlt />}>View</Button>
                                    </NextLink>
                                </Tooltip>
                            </HStack>
                        </CardFooter>
                    </Card>
                </GridItem>
            ))}
        </Grid>
    </Layout>
)

export const getStaticProps = async () => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/graphql` // Define the URL of the GraphQL API

    const query = `
  query {
    user {
      products {
        id
        title
        slug
        base_price
        description
        show
        images {
          image_thumbnail
        }
      }
    }
  }
`

    // Define the headers of the request
    const authorizationHeader = `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
    const headers = {
        'Content-Type': 'application/json',
        Authorization: authorizationHeader
    }

    // Send the request
    const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify({ query })
    })

    // Get the response
    const { data } = await response.json()

    const products = data.user.products.filter(product => product.show === true)

    // Return the data
    return {
        props: {
            products
        }
    }
}
