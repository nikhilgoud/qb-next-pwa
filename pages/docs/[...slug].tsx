import React from 'react';
import { Container, Header, About, Main, Footer } from '@components';
import { useRouter } from 'next/router';
import { Blog } from '@components/blog';

const Docs: React.FC = () => {
  const router = useRouter();
  const params = router.query.slug;
  return (
    <Container>
      <Header />
      <Main header={`Built with following`} hideSkillNav />
      {params?.includes('about') && <About />}
      {params?.includes('blog') && <Blog />}
      {/* {params?.includes('contact') && <Contact />} */}
      <Footer />
    </Container>
  );
};

export default Docs;
