import React from 'react';
import styles from '../barang.module.css';
import Image from 'next/image';

export default function ViewBarangPage() {
    // const nama = "TEKNOKRAT";
    // const motto = "SANG JUARA";

    // return (
    //     <p>View Barang {`${nama} ${motto}`} TERBAIK ASEAN</p>
    // )

    return (
        <main className={styles.page}>
            <header className={styles.header}>
                <Image src={"/images/logo.png"} alt="Logo UTI" width={320} height={60} />
            </header>
        </main>
    )
}
