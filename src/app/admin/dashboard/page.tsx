'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/admin/layout/components/container/PageContainer';
// components
import SalesOverview from '@/app/admin/layout/components/dashboard/SalesOverview';
import YearlyBreakup from '@/app/admin/layout/components/dashboard/YearlyBreakup';
import RecentTransactions from '@/app/admin/layout/components/dashboard/RecentTransactions';
import ProductPerformance from '@/app/admin/layout/components/dashboard/ProductPerformance';
import Blog from '@/app/admin/layout/components/dashboard/Blog';
import MonthlyEarnings from '@/app/admin/layout/components/dashboard/MonthlyEarnings';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <ProductPerformance />
          </Grid>
          <Grid item xs={12}>
            <Blog />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
