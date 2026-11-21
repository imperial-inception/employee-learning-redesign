import Head from 'next/head';
import View, { title } from '@/screens/07f-profile-job-expectations';
import { site } from '@/lib/site';

export default function Page() {
  return (
    <>
      <Head><title>{`${site.name}: ${title}`}</title></Head>
      <View />
    </>
  );
}
