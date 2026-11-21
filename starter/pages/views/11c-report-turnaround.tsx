import Head from 'next/head';
import View, { title } from '@/screens/11c-report-turnaround';
import { site } from '@/lib/site';

export default function Page() {
  return (
    <>
      <Head><title>{`${site.name}: ${title}`}</title></Head>
      <View />
    </>
  );
}
