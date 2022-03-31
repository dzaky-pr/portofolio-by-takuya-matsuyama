import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbGrocerybud from '../public/images/works/grocerybud_01.png'
import thumbColorGenerator from '../public/images/works/colorgenerator_01.png'
import thumbWebChat from '../public/images/works/webchat_01.png'
import thumbBazcar from '../public/images/works/spestasia_web_01.png'
import thumbDemoPetitionPage from '../public/images/works/demopetitionpage_01.png'
import thumbRandomCatGenerator from '../public/images/works/randomcatgenerator_01.png'
import thumbBirthdayCard from '../public/images/works/birthdaycard_01.png'

const Works = () => {
    return (
      <Layout>
          <Container>
              <Heading as="h3" fontSize={20} mb={4}>
                  Works
              </Heading>

              <SimpleGrid columns={[1, 1, 2]} gap={6}>
                  <Section>
                      <WorkGridItem id="grocery-bud" title="Grocery Bud" thumbnail={thumbGrocerybud}>
                          Website to write important things while shopping
                      </WorkGridItem>
                  </Section>

                  <Section>
                      <WorkGridItem id="color-generator" title="Color Generator" thumbnail={thumbColorGenerator}>
                          Color palette maker website using hex color code
                      </WorkGridItem>
                  </Section>
              
                  <Section delay={0.1}>
                      <WorkGridItem id="web-chat" title="Web Chat" thumbnail={thumbWebChat}>
                          Learn to build a chat app with NextJS using react context, routing, and more!
                      </WorkGridItem>
                  </Section>
              </SimpleGrid>

              <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Collaborations
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="spestasia-website"
              thumbnail={thumbBazcar}
              title="Spestasia Website"
            >
              Virtual Event Website SMAN 68 Jakarta
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Old projects
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <WorkGridItem
              id="demo-petition-page"
              thumbnail={thumbDemoPetitionPage}
              title="Demo Petition Page"
            >
              Skillpath Web Development Pemula
            </WorkGridItem>
          </Section>

          <Section delay={0.5}>
            <WorkGridItem
              id="random-cat-generator"
              thumbnail={thumbRandomCatGenerator}
              title="Random Cat Generator"
            >
              Create simple random cat image generator using Fetch API and
              Bootstrap Theme
            </WorkGridItem>
          </Section>

          <Section delay={0.6}>
            <WorkGridItem
              id="birthday-card"
              thumbnail={thumbBirthdayCard}
              title="Birthday Card"
            >
              Create a simple birthday card. Bootcamp mini project by Sparta
              Coding Club Kr
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        </Container>
    </Layout>
    )
}

export default Works