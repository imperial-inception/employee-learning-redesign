import Head from 'next/head';
import View, { title } from '@/screens/12c-health-missing-links';
import { site } from '@/lib/site';

export default function Page() {
  return (
    <>
      <Head><title>{`${site.name}: ${title}`}</title></Head>
      <View />
    </>
  );
}
