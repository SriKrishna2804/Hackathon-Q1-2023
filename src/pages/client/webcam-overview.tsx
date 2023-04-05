import Head from "next/head";
import { Box, Grid } from "@mui/material";
import Layout from "mdsreact/components/layout";
import TopNavBar from "mdsreact/components/navigation/top-navbar";
import LeftSideBar from "mdsreact/components/client/webcam-overview/left-sidebar";
import WebcamsDashboard from "mdsreact/components/client/webcam-overview/webcams-dashboard";
import axios from "axios";
import React from "react";

export default function WebcamOverview() {
  const [webcams, setWebcams] = React.useState(null);
  React.useEffect(() => {
    axios
      .get(
        "https://mds.multivista.com/index.cfm?fuseaction=aAPI.getWebcams&ProjectUID=571596E2-CB37-40DE-8930-F44F7340BB80",
        {
          auth: {
            username: "sudeepa.gorle@hexagon.com",
            password: "Sanvika@123",
          },
        }
      )
      .then((response) => {
        setWebcams(response.data.data);
      });
  }, []);

  if (!webcams) return null;

  return (
    <Layout>
      <Head>
        <title>Multivista - Webcam Overview</title>
      </Head>
      <Box>
        <Grid container>
          <TopNavBar />
          <LeftSideBar />
          <WebcamsDashboard webcams={webcams} />
        </Grid>
      </Box>
    </Layout>
  );
}
