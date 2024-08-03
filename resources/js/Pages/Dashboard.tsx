import UserLayout from '@/Layouts/UserLayout';

import { Head } from '@inertiajs/react';
import ProductCard from "@/Components/ui/Productcard";


export default function Dashboard() {
    return (
        <UserLayout header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}>
            <Head title="Dashboard" />

            <div className="py-12">
            </div>
        </UserLayout>
    );
}
