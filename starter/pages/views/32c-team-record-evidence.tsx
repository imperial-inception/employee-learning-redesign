import Head from 'next/head';
import View, { title } from '@/screens/32c-team-record-evidence';
import { site } from '@/lib/site';

export default function Page() {
  return (
    <>
      <Head><title>{`${site.name}: ${title}`}</title></Head>
      <View />
    </>
  );
}
