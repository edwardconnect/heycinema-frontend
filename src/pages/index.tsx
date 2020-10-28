import React from "react"

import Layout from "../components/layout/Layout"
import PageContainer from "../components/layout/PageContainer"
import HomePage from "../components/home/HomePage/HomePage"
import { HomePageProvider } from "../contexts/home-page.context"

const IndexPage: React.FC = () => (
  <Layout>
    <PageContainer>
      <HomePageProvider>
        <HomePage />
      </HomePageProvider>
    </PageContainer>
  </Layout>
)

export default IndexPage
