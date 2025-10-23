"use client";

import React from 'react';
import styles from '../barang.module.css';
import useSWR from 'swr';
// import Image from 'next/image';

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
        "https://localhost:3001/api/barang",
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
                
            </article>

        </section>
    )
}
