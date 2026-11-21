import Head from 'next/head';
import View, { title } from '@/screens/07d-profile-certifications';
import { site } from '@/lib/site';

export default function Page() {
  return (
    <>
      <Head><title>{`${site.name}: ${title}`}</title></Head>
      <View />
    </>
  );
}
