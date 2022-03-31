import NextLink from 'next/link'
import { Button, Container, Box, Heading, Image, Link, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons' 
import Layout from '../components/layouts/article '
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I{"'"}m web developer based in Depok!
                </Box>

                <Box display={{md: 'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Dzaky Purnomo Rifa'i
                        </Heading>
                        <p>Digital Craftman ( Developer / Designer )</p>
                    </Box>
                    <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                        <Image broderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/dzaky.jpg" alt="Profile Image"/>
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        About
                    </Heading>
                    <Paragraph>Hello, I{"'"}m a Student from SMAN 68 Jakarta whose interested in technology, especially web development, web3, blockchain, machine learning, IoT, AI, and UI/UX Design. Innovative Web Dev and UI/UX Designer with 1+ years of experience designing and developing websites from initial concept to final. Beside that, I like organization and a music lover.</Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">My portofolio</Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2004</BioYear>
                        Born in Jakarta, Indonesia.
                    </BioSection>

                    <BioSection>
                        <BioYear>2022</BioYear>
                        Completed Senior High School SMAN 68 Jakarta.
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I Love
                    </Heading>
                    <Paragraph>Art, Music,{" "}<Link href="https://github.com/dzaky-pr/" target="_blank">Coding</Link></Paragraph>
                </Section>

            </Container>
        </Layout>
    )
}

export default Page