import { PrismaClient } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// buat service DELETE untuk hapus data
export const DELETE = async (request: NextRequest, 
    { params }: { params: { slug: string } }) => {
    const id = params.slug

    // cek apakah id sudah ada / belum
    const check = await prisma.tb_barang.findUnique({
        where : {
            id : Number (id)
        },
        select : {
            id : true
        }
    })

    // jika data tidak ditemukan
    if (!check) {
        return NextResponse.json({
            message: "Data barang gagal dihapus (id barang tidak ditemukan)",
            success: false
        })
    }

    // jika data ditemukan
    await prisma.tb_barang.delete({
        where : {
            id : Number (id)
        }
    })

    return NextResponse.json({
            message: "Data barang berhasil dihapus",
            success: true
        })

}

// buat service PUT (ubah data)
export const PUT = async (request: NextRequest, 
    { params }: { params: { slug: string } }) => {
    const id = params.slug

    const data = await request.json()
    // cek apakah id sudah ada / belum
    const check = await prisma.tb_barang.findFirst({
        where : {
            id:{
                not: Number (id)
            },
            kode: data.kode
        },
        select : {
            id : true
        }
    })

    // jika data ditemukan
    if (check) {
        return NextResponse.json({
            message: "Data barang gagal diubah (data barang sudah ditambahkan)",
            success: false
        })
    }

    await prisma.tb_barang.update({
        where : {
            id : Number (id)
        },
        data: {
            kode: data.kode,
            nama: data.nama,
            harga: data.harga,
            satuan: data.satuan
        } 
    })

    return NextResponse.json({
            message: "Data barang berhasil diubah",
            success: true
        })

}