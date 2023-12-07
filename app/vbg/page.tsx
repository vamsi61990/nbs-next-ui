'use client'
import * as React from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import BarCharts from '@/components/bar-charts/bar-charts';
import LineCharts from '@/components/line-charts/line-charts';
import Grid from '@mui/material/Grid';
// import DataTable from '@/components/data-table/data-table';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import DataPivotTable from '@/components/pivot-table/pivot-table';
// import DenseTable from '@/components/basic-table/basic-table';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function VbgHome() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box component="main">
          Welcome to NBS VBG Dashboards.
          <Box>
            <Grid container>
              <Grid item xs={12}>
                <Box sx={{ width: '100%' }}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="Tabs for different data groups">
                      <Tab label="MVP" {...a11yProps(0)} />
                      <Tab label="Item Two" {...a11yProps(1)} />
                      <Tab label="Item Three" {...a11yProps(2)} />
                      <Tab label="Item Four" {...a11yProps(3)} />
                    </Tabs>
                  </Box>
                  <CustomTabPanel value={value} index={0}>
                      <DataPivotTable />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                    to be soon available
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={2}>
                    to be soon available
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={3}>
                    to be soon available
                  </CustomTabPanel>
                </Box>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} md={6}>
                <BarCharts />
              </Grid>
              <Grid item xs={12} md={6}>
                <LineCharts />
              </Grid>
            </Grid>
          </Box>
      </Box>
    </>
  )
}