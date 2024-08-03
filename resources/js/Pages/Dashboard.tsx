import UserLayout from '@/Layouts/UserLayout';

import { Head } from '@inertiajs/react';
import {Button} from "@/Components/ui/button";
import {Input} from "@/Components/ui/input";
import {Card} from "@/Components/ui/card";
import ProductCard from "@/Components/ui/Productcard";


export default function Dashboard() {
    return (
        <UserLayout
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <Card className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                            <Input type="number" placeholder="Anzahl" />
                            <Button>Button</Button>
                            
                        </Card>
                        <ProductCard itemName='Tomaten' itemId={0} price={9.99}/>

                        <div className="p-6 text-gray-900 dark:text-gray-100">You're logged in!</div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}
