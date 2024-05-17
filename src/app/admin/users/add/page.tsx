'use client'
import { Grid, Box, Card, Stack, Typography,Button } from '@mui/material';
import PageContainer from '@/app/admin/layout/components/container/PageContainer';
import ProductPerformance from '@/app/admin/layout/components/dashboard/ProductPerformance';
import Logo from "@/app/admin/layout/layout/shared/logo/Logo";
import AuthLogin from "../../authentication/auth/AuthLogin";
import CustomTextField from '@/app/admin/layout/components/forms/theme-elements/CustomTextField';

import Link from "next/link";

const Dashboard = () => {
  return ( 
      <Box>
            <Stack mb={3}>
                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='name' mb="5px">Name</Typography>
                <CustomTextField id="name" variant="outlined" fullWidth />

                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='email' mb="5px" mt="25px">Email Address</Typography>
                <CustomTextField id="email" variant="outlined" fullWidth />

                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='password' mb="5px" mt="25px">Password</Typography>
                <CustomTextField id="password" variant="outlined" fullWidth />
            </Stack>
            <Button color="primary" variant="contained" size="large" fullWidth component={Link} href="/authentication/login">
                Sign Up
            </Button>
        </Box>
  )
}

export default Dashboard;
