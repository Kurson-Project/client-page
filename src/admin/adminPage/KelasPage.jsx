import { Link } from "react-router-dom"
import { useState } from "react"
import TambahClass from "../components/class/TambahClass"


const KelasList = [
    {
        id: 1,
        name: 'Kelas 1',
        image: '/contohImage.jpg',
        deskripsi: 'ini adalah kelas 1',
        price: 'Rp. 100.000',
        category: 'Kategori 1'
    },
    {
        id: 2,
        name: 'Kelas 2',
        image: '/contohImage.jpg',
        deskripsi: 'ini adalah kelas 2',
        price: 'Rp. 100.000',
        category: 'Kategori 1'
    },
    {
        id: 3,
        name: 'Kelas 3',
        image: '/contohImage.jpg',
        deskripsi: 'ini adalah kelas 3',
        price: 'Rp. 100.000',
        category: 'Kategori 3'
    },
]

export default function KelasPage() {
    const [open, setOpen] = useState(false)

    return (
        <section className="flex flex-col w-full">
            <div className="bg-indigo-900 p-4 flex gap-2 items-center justify-between w-full h-12">
                <Link onClick={() => setOpen(open ? true : true )} className="bg-indigo-400 text-white rounded px-2">Tambah Kelas</Link>
            </div>

            <div className={`bg-gray-300 p-4 flex-col items-center flex ${open ? 'flex' : 'hidden'}`}>
                <TambahClass/>
                <button onClick={() => setOpen(open ? false : false)} className={`h-6 bg-indigo-400 text-white rounded px-2 ${open ? 'flex' : 'hidden'}`}>Close</button>
            </div>

            <section className={`flex-col gap-2 items-center flex`}>
                <div className="flex flex-wrap gap-4 m-4">
                    {KelasList.map((kelas) => {
                        return (
                            <div key={kelas.id} className="sm:w-[200px] w-[150px] sm:h-[300px] h-[270px] flex flex-col bg-gray-300 items-center justify-center rounded-md shadow">
                                <div className="w-full">
                                    <img src={kelas.image} alt="" className="object-cover w-full rounded-t-md" />
                                </div>
                                <div className="w-[90%]">
                                    <h1 className="font-bold text-lg">{kelas.name}</h1>
                                    <p className="text-sm">{kelas.deskripsi}</p>
                                    <p className="text-sm flex justify-between">{kelas.price} <span>{kelas.category}</span></p>
                                </div>
                                <div className="flex p-2 justify-between w-full">
                                    <button className="bg-indigo-400 text-white rounded px-2 text-sm">Edit</button>
                                    <button className="bg-indigo-400 text-white rounded px-2 text-sm">Delate</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </section>
    )
}