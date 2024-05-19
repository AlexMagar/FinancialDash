// [id] => dynamic route segments 

import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from "@/app/ui/invoices/create-form";
import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data";

export default async function Page({params}: {params:{id:string}}) {
    const id = params.id;
    const [invoices, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers(),
    ])
    return(
        <main>
            <Breadcrumbs 
                breadcrumbs={[
                    {label: 'Invoices', href:'/dashboard/invoices'},
                    {
                        label: 'Edit Invoice',
                        href: `/dashboard/invoices/${id}/edit`,
                        active: true
                    }
                ]}
            />
            <Form invoices={invoices} customers={customers} />
        </main>
    )
}