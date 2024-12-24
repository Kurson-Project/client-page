import axios from "axios"
import { useState } from "react"

export default function TambahClass() {
    const [file, setFile] = useState()

    const handleFile = (e) => {
        setFile(e.target.files[0])
    }

    const handleUpload = () => {
        const formData = new FormData()
        formData.append('image', file)
        formData.append('name', 'test')
        formData.append('deskripsi', 'test')
        formData.append('harga', 'test')
        formData.append('kategori', 'test')
        axios.post('http://localhost:3001/upload', formData)
            .then(res => { console.log(res) })
            .catch(err => { console.log(err) })
    }

    return (
        <>
            <div className="flex flex-col gap-2 bg-gray-300 p-4 rounded m-4">
                <div className="">
                    <input onChange={handleFile} type="file" className="px-2 rounded w-full flex flex-col" />
                </div>
                <div className="">
                    <input type="text" placeholder="Nama Kelas" className="px-2 rounded w-full" />
                </div>
                <div className="">
                    <input type="text" placeholder="Deskripsi" className="px-2 rounded w-full" />
                </div>
                <div className="">
                    <input type="text" placeholder="Harga" className="px-2 rounded w-full" />
                </div>
                <div className="">
                    <input type="text" placeholder="Kategori" className="px-2 rounded w-full" />
                </div>
                <button onClick={handleUpload} className="bg-indigo-400 text-white rounded px-2 hover:bg-indigo-600">Tambah</button>
            </div>
        </>
    )
}