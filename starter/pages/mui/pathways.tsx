// /mui/pathways: "Your pathways", the app's Pathways page re-skinned (same layout, polished).
import Head from 'next/head';
import { site } from '@/lib/site';
import { AppFrame } from '@/mui/components/AppFrame';
import { PathwaysScreen } from '@/mui/screens/pathways/PathwaysScreen';

export default function PathwaysPage() {
  return (
    <>
      <Head><title>{`Pathways · ${site.name}`}</title></Head>
      <AppFrame active="pathways" crumbs={[{ label: 'My development' }, { label: 'Pathways' }]}>
        <PathwaysScreen />
      </AppFrame>
    </>
  );
}
