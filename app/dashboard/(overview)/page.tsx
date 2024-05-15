import { lusitana } from '@/app/ui/fonts';
import RevenueChart from '../../ui/dashboard/revenue-chart';
import LatestInvoices from '../../ui/dashboard/latest-invoices';
import CardWrapper from '../../ui/dashboard/cards';
import { Suspense } from 'react';
import { CardSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from '@/app/ui/skeletons';

export default async function Page(){

    // const revenu = await fetchRevenue();
    // const latestInvoices = await fetchLatestInvoices() //to run this we need to run fetchRevenue() first
    // const totalInvoices = await fetchCardData()
    return(
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardSkeleton/>}>
                    <CardWrapper />
                </Suspense>

                {/* <Card title='Collected' value={totalInvoices.totalPaidInvoices} type='collected' />
                <Card title='Pending' value={totalInvoices.totalPendingInvoices} type='pending' />
                <Card title='Total Invoices' value={totalInvoices.numberOfInvoices} type='invoices' />
                <Card title='Total Customers' value={totalInvoices.numberOfCustomers} type='customers' /> */}
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                {/* <RevenueChart revenue={revenu} /> */}
                <Suspense fallback={<RevenueChartSkeleton />} >
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
            </div>
        </main>
    )
}