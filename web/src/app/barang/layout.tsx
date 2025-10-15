import React from 'react'

export default function BarangLayout({ children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div>
            {/* <div>Barang</div> */}
            <div>{children}</div>
        </div>
    )
}
