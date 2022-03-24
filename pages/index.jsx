import Head from 'next/head';
import { Layout, Menu } from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';
import appConfig from 'app-config';
import JcluesPage from 'src/components/JcluesPage';
import HomePage from 'src/components/HomePage';
import ProfileHeader from 'src/components/ProfileHeader';
import PageFooter from 'src/components/PageFooter';
import { useState } from 'react';

export default function Index(props) {
  const { Content, Footer, Header } = Layout;
  const [profile, setProfile] = useState({});
  const router = useRouter();
  const asPath = router.asPath;

  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Layout style={{ minHeight: '100vh' }}>
        <Layout className="site-layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[asPath]}>
              <Menu.Item key="/">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="/jclues">
                <Link href="/jclues">
                  <a>Jclues</a>
                </Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ margin: '16px 16px', display: 'grid', gridAutoRows: 'fit-content(100px)' }}>
            <ProfileHeader {...props} profile={profile} />
            <PageRouter asPath={asPath} {...props} setProfile={setProfile} profile={profile} />
          </Content>
          <Footer>
            <PageFooter {...props} profile={profile} />
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export function getServerSideProps() {
  // get config props
  const props = appConfig;

  // pass page props to app
  return { props };
}

function PageRouter(props) {
  const { asPath } = props;
  switch (asPath) {
    case '/jclues':
      return <JcluesPage {...props} />;
    case '/':
      return <HomePage {...props} />;
    default:
      return 'page not found';
  }
}
