import Head from "next/head";
import { Box, Grid } from "@mui/material";
import Layout from "mdsreact/components/layout";
import TopNavBar from "mdsreact/components/navigation/top-navbar";
import LeftSideBar from "mdsreact/components/client/floorplan-overview/left-sidebar";
import FloorplansDashboard from "mdsreact/components/client/floorplan-overview/floorplans-dashboard";

export default function FloorplanOverview() {
  return (
    <Layout>
      <Head>
        <title>Multivista - Client Floorplan Overview</title>
      </Head>
      <Box>
        <Grid container>
          <TopNavBar />
          <LeftSideBar />
          <FloorplansDashboard />
        </Grid>
      </Box>
    </Layout>
  );
}
