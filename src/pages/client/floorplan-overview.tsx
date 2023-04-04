import Head from 'next/head';
import Layout from 'mdsreact/components/layout';
import TopNavBar from 'mdsreact/components/Navigation/top-navbar';

export default function FloorplanOverview() {
    return (
        <Layout>
            <Head>
                <title>Multivista - Client Floorplan Overview</title>
            </Head>
            <TopNavBar />
        </Layout>
    );
}