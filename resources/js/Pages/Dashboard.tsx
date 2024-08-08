import React from 'react';
import UserLayout from '@/Layouts/UserLayout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'; // Import the authenticated layout
import { Head } from '@inertiajs/react';
import {PageProps} from "@/types";

export default function Dashboard({ auth }: PageProps) { // Accept auth as a prop
    const Layout = auth.user ? AuthenticatedLayout : UserLayout;

    return (
        <Layout header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>} user={auth.user}>
            <Head title="Dashboard" />

            <div className="py-12">
            </div>
        </Layout>
    );
}
