import Head from 'next/head';
import { site } from '@/lib/site';
import { AppFrame } from '@/mui/components/AppFrame';
import { HomeScreen } from '@/mui/screens/home/HomeScreen';

export default function MuiHomePage() {
  return (
    <>
      <Head><title>{`Home · ${site.name}`}</title></Head>
      <AppFrame active="home" crumbs={[{ label: 'My development' }, { label: 'Home' }]}>
        <HomeScreen />
      </AppFrame>
    </>
  );
}
