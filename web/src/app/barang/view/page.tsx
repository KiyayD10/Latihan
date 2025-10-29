"use client";

import React from 'react';
import styles from '../barang.module.css';
import useSWR from 'swr';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// import Image from 'next/image';

// buat interface untuk data barang
interface ModelBarang {
    id: number;
    kode: string;
    nama: string;
    harga: number;
    satuan: string;
}

// buat variable fetcher
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ViewBarangPage() {
    // const nama = "TEKNOKRAT";
    // const motto = "SANG JUARA";

    // return (
    //     <p>View Barang {`${nama} ${motto}`} TERBAIK ASEAN</p>
    // )

    // definisi SWR
    const { data, error, isLoading } = useSWR(
        "http://localhost:3001/api/barang",
        fetcher
    );

    return (
        <section className={styles.page}>
            {/* tombol / nvigasi */}
            <nav className='mb-4 flex sm:justify-end md:justify-start justify-center'>
                <button className='sm:bg-cyan-600 bg-rose-700 px-8 py-2 text-white rounded-full'>Tambah Data</button>
            </nav>
            
            {/* tabel barang */}
            <article>
                {/* <table>
                    <tr>
                        <th>Aksi</th>
                        <th>Kode</th>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Satuan</th>
                    </tr>
                 */}

            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Invoice</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                {data && (
                    data.barang.map((item: ModelBarang) => (
                        // <div key={item.id}>
                        //     <p>{item.nama}</p>
                        // </div>
                        // <tr key={item.id}>
                        //     <td>-</td>
                        //     <td>{item.kode}</td>
                        //     <td>{item.nama}</td>
                        //     <td>{item.harga}</td>
                        //     <td>{item.satuan}</td>
                        // </tr>
                        <TableRow key={item.id}>
                            <TableCell className="font-medium">INV001</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                    ))
                )}
                </TableBody>
            </Table>

                {/* </table> */}
            </article>
        </section>
    )
}
