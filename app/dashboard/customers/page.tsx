// Fonts & Styles
import { lusitana } from '@/app/ui/fonts';

// Components
import Table from '@/app/ui/customers/table';
import Search from '@/app/ui/search';
import { CreateCustomer } from '@/app/ui/buttons';
import Pagination from '@/app/ui/invoices/pagination';

// Helpers
import { fetchCustomersPages } from '@/app/lib/data';

export default async function CustomersPage(
    { searchParams }: { searchParams?: { query?: string; page?: string; } }
) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchCustomersPages(query);

    return (<div className="w-full">
        <div className="flex w-full items-center justify-between">
            <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
            <Search placeholder="Search customers..." />
            <CreateCustomer />
        </div>
        <Table query={query} currentPage={currentPage} />

        <div className="mt-5 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
        </div>
    </div>);
}