import React from 'react';
import styles from '../barang.module.css';
// import Image from 'next/image';

export default function ViewBarangPage() {
    // const nama = "TEKNOKRAT";
    // const motto = "SANG JUARA";

    // return (
    //     <p>View Barang {`${nama} ${motto}`} TERBAIK ASEAN</p>
    // )

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
