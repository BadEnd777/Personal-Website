import {
    VStack,
    HStack,
    Grid,
    GridItem,
    Heading,
    Text,
    Image,
    Link,
    Button,
    Badge
} from '@chakra-ui/react'
import NextLink from 'next/link'

export const BlogList = ({ posts }) => {
    return (
        <Grid
            templateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)'
            }}
            gap="8"
            mt="8"
        >
            {posts.map(post => (
                <GridItem key={post.meta.title} colSpan="1">
                    <VStack spacing="4" align="flex-start" bg="surface0" borderRadius="md" p="4">
                        <Image
                            src={post.meta.previewImage}
                            alt={post.meta.title}
                            borderRadius="md"
                        />
                        <Heading size="md" fontWeight="bold" noOfLines="1">
                            {post.meta.title}
                        </Heading>
                        <Text fontSize="sm" color="subtext0" noOfLines="3">
                            {post.meta.description}
                        </Text>
                        <HStack spacing="2" wrap="wrap">
                            {post.meta.tags.map(tag => (
                                <NextLink key={tag} href={`/blog/tag/${tag}`}>
                                    <Badge key={tag} colorScheme="blue">
                                        {tag}
                                    </Badge>
                                </NextLink>
                            ))}
                        </HStack>
                        <Link
                            as={NextLink}
                            href={`/blog/${post.slug}`}
                            _hover={{ textDecor: 'none' }}
                        >
                            <Button rounded="md">Read More</Button>
                        </Link>
                    </VStack>
                </GridItem>
            ))}
        </Grid>
    )
}
