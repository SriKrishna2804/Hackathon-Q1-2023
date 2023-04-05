import Head from "next/head";
import { Box, Grid } from "@mui/material";
import Layout from "mdsreact/components/layout";
import TopNavBar from "mdsreact/components/navigation/top-navbar";
import LeftSideBar from "mdsreact/components/client/webcam-overview/left-sidebar";
import WebcamsDashboard from "mdsreact/components/client/webcam-overview/webcams-dashboard";

export default function WebcamOverview() {
  return (
    <Layout>
      <Head>
        <title>Multivista - Webcam Overview</title>
      </Head>
      <Box>
        <Grid container>
          <TopNavBar />
          <LeftSideBar />
          <WebcamsDashboard />
        </Grid>
      </Box>
    </Layout>
  );
}
