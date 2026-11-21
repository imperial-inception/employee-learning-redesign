import Head from 'next/head';
import View, { title } from '@/screens/12d-health-formatting';
import { site } from '@/lib/site';

export default function Page() {
  return (
    <>
      <Head><title>{`${site.name}: ${title}`}</title></Head>
      <View />
    </>
  );
}
