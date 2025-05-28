import { FadeIn } from "@/components/template/animated/FadeIn"

const syaratKetentuanData = [
    {
        title: "1. Definisi",
        content: [
            "<strong>Platform</strong>: Website dan sistem online Lumino (termasuk aplikasi jika ada).",
            "<strong>Pengguna</strong>: Semua individu yang mengakses atau menggunakan Lumino, baik sebagai peserta maupun mentor.",
            "<strong>Materi Pembelajaran</strong>: Konten yang disediakan oleh Lumino seperti modul teks, video, infografis, dan dokumen pendukung.",
            "<strong>Layanan</strong>: Seluruh fitur pembelajaran, diskusi, bimbingan, dan sistem evaluasi yang tersedia di Lumino."
        ]
    },
    {
        title: "2. Akses dan Penggunaan",
        content: [
            "Anda harus berusia minimal 13 tahun untuk menggunakan layanan kami. Jika Anda di bawah 18 tahun, Anda harus mendapatkan izin dari orang tua atau wali. Akun pengguna bersifat pribadi dan tidak boleh dibagikan kepada pihak lain. Anda bertanggung jawab menjaga keamanan informasi akun Anda."
        ]
    },
    {
        title: "3. Hak Kekayaan Intelektual",
        content: [
            "Semua materi pembelajaran, desain, dan fitur platform adalah milik Lumino atau pihak ketiga yang bekerja sama, dilindungi oleh hak cipta dan peraturan hukum yang berlaku. Anda tidak diperkenankan menggandakan, menyebarluaskan, atau menggunakan materi Lumino di luar kepentingan pembelajaran pribadi tanpa izin tertulis."
        ]
    },
    {
        title: "4. Kewajiban Pengguna",
        content: [
            "Pengguna setuju untuk:",
            [
                "Tidak menggunakan platform untuk tujuan ilegal, menipu, atau merugikan pihak lain.",
                "Tidak mengunggah konten yang bersifat diskriminatif, menyinggung, atau melanggar hukum.",
                "Menggunakan materi dan forum diskusi dengan etika dan rasa hormat."
            ]
        ]
    },
    {
        title: "5. Peran Mentor",
        content: [
            "Mentor adalah profesional atau praktisi berpengalaman yang memberikan bimbingan di Lumino. Mereka tidak bertanggung jawab atas keputusan pribadi peserta berdasarkan konten diskusi atau bimbingan, tetapi diharapkan memberi arahan profesional terbaik."
        ]
    },
    {
        title: "6. Layanan Berbayar",
        content: [
            "Beberapa layanan Lumino mungkin memerlukan pembayaran. Informasi biaya, durasi akses, dan hak peserta akan disampaikan secara jelas sebelum transaksi dilakukan."
        ]
    },
    {
        title: "7. Pengakhiran Akses",
        content: [
            "Lumino berhak menghentikan akses pengguna sementara atau permanen apabila:",
            [
                "Terjadi pelanggaran terhadap Syarat dan Ketentuan ini.",
                "Terdapat aktivitas mencurigakan yang membahayakan platform atau pengguna lain.",
                "Pengguna melakukan tindakan yang merugikan reputasi atau keamanan sistem Lumino."
            ]
        ]
    },
    {
        title: "8. Batasan Tanggung Jawab",
        content: [
            "Lumino tidak menjamin hasil spesifik atas partisipasi pengguna dalam program pembelajaran. Platform disediakan \"sebagaimana adanya\" dan kami tidak bertanggung jawab atas gangguan teknis, keterlambatan, atau kesalahan konten dari pihak ketiga."
        ]
    },
    {
        title: "9. Perubahan Ketentuan",
        content: [
            "Kami berhak mengubah Ketentuan ini kapan saja. Perubahan penting akan diberitahukan melalui email atau notifikasi di dalam platform. Penggunaan berkelanjutan setelah perubahan berarti Anda menyetujui ketentuan yang diperbarui."
        ]
    },
    {
        title: "10. Hukum yang Berlaku",
        content: [
            "Syarat dan Ketentuan ini diatur oleh hukum Republik Indonesia. Sengketa yang timbul akan diselesaikan secara musyawarah terlebih dahulu. Jika tidak tercapai kesepakatan, akan diselesaikan melalui jalur hukum sesuai peraturan yang berlaku."
        ]
    },
    {
        title: "11. Kontak",
        content: [
            "Untuk pertanyaan atau keluhan mengenai Syarat dan Ketentuan ini, silakan hubungi:",
            [
                "📧 Email: support@lumino.id",
                "📞 Telepon: +62-xxx-xxxx-xxxx"
            ]
        ]
    }
]

const SyaratKetentuanPage = () => {
    return (
        <main className="w-full">
            <div className="w-full p-res-xxl max-w-[900px] mx-auto space-y-10 flex flex-col sm:mt-0 mt-10">
                <FadeIn direction="down" className="w-full">
                    <h1 className="text-res-3xl font-bold bg-gradient-to-r from-blue-800 via-purple-600 to-purple-800 inline-block text-transparent bg-clip-text">
                        Syarat dan Ketentuan Layanan Lumino
                    </h1>
                    <p>Harap membaca Syarat dan Ketentuan ini sebelum menggunakan Lumino. Dengan mengakses atau menggunakan platform kami, Anda menyetujui untuk terikat pada ketentuan yang berlaku.</p>
                </FadeIn>

                <hr className="border-t border-gray-300" />

                {syaratKetentuanData.map((section, idx) => (
                    <FadeIn direction="down" key={idx} className="space-y-2">
                        <h2 className="text-res-xl font-bold bg-gradient-to-r from-blue-800 via-purple-600 to-purple-800 inline-block text-transparent bg-clip-text">{section.title}</h2>
                        {section.content.map((item, i) =>
                            typeof item === 'string' ? (
                                <p key={i} dangerouslySetInnerHTML={{ __html: item }} />
                            ) : (
                                <ul key={i} className="list-disc list-inside ml-4">
                                    {item.map((li, j) => (
                                        <li key={j}>{li}</li>
                                    ))}
                                </ul>
                            )
                        )}
                    </FadeIn>
                ))}
            </div>
        </main>
    )
}

export default SyaratKetentuanPage
