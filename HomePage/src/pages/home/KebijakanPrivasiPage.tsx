import { FadeIn } from "@/components/template/animated/FadeIn"

const kebijakanPrivasiData = [
  {
    title: '1. Informasi Yang Kami Kumpulkan',
    content: [
      'Kami dapat mengumpulkan data pribadi Anda ketika Anda:',
      {
        list: [
          'Mendaftar sebagai peserta atau mentor',
          'Berpartisipasi dalam diskusi, webinar, atau konsultasi dengan mentor',
          'Memberikan umpan balik atau testimoni',
        ]
      },
      'Jenis informasi yang dikumpulkan meliputi:',
      {
        list: [
          'Nama, email, nomor telepon',
          'Informasi akun (username, password)',
          'Data pembelajaran (modul yang diakses, waktu belajar, hasil evaluasi)',
          'Aktivitas diskusi dan kontribusi di forum',
        ]
      }
    ]
  },
  {
    title: '2. Penggunaan Informasi',
    content: [
      'Informasi Anda digunakan untuk:',
      {
        list: [
          'Memberikan akses ke materi pembelajaran berkualitas',
          'Menyediakan bimbingan dari mentor berpengalaman',
          'Meningkatkan pengalaman pengguna dan efektivitas sistem pembelajaran',
          'Menginformasikan perkembangan belajar dan memberikan rekomendasi yang relevan',
          'Menyusun analisis dampak dan studi kasus untuk peningkatan layanan'
        ]
      }
    ]
  },
  {
    title: '3. Pembagian Informasi',
    content: [
      'Kami <strong>tidak menjual atau menyewakan</strong> data pribadi Anda. Informasi Anda hanya dapat dibagikan kepada:',
      {
        list: [
          'Mentor yang membimbing Anda, untuk keperluan evaluasi dan bimbingan',
          'Tim pengembangan Lumino dalam rangka peningkatan layanan',
          'Pihak ketiga penyedia layanan (seperti penyimpanan cloud) yang telah terikat kontrak privasi dan keamanan data'
        ]
      }
    ]
  },
  {
    title: '4. Keamanan Data',
    content: [
      'Kami menerapkan teknologi dan prosedur keamanan terkini untuk:',
      {
        list: [
          'Melindungi data Anda dari akses, penggunaan, atau pengungkapan yang tidak sah',
          'Mengamankan komunikasi dan penyimpanan data menggunakan enkripsi',
          'Memastikan keterbukaan dan transparansi melalui pelaporan perkembangan belajar secara real-time'
        ]
      }
    ]
  },
  {
    title: '5. Hak Anda sebagai Pengguna',
    content: [
      'Anda memiliki hak untuk:',
      {
        list: [
          'Mengakses dan memperbarui informasi pribadi Anda',
          'Meminta penghapusan data tertentu',
          'Menarik persetujuan Anda kapan saja',
          'Mengetahui bagaimana data Anda digunakan'
        ]
      },
      'Permintaan terkait data pribadi dapat diajukan melalui [alamat email CS atau formulir kontak resmi Lumino].'
    ]
  },
  {
    title: '6. Penyimpanan Data',
    content: ['Data Anda disimpan selama akun Anda aktif atau sesuai kebutuhan operasional dan legal. Setelah itu, data akan dihapus secara aman.']
  },
  {
    title: '7. Perubahan Kebijakan Privasi',
    content: ['Kebijakan ini dapat diperbarui dari waktu ke waktu untuk mencerminkan perubahan sistem dan regulasi. Kami akan memberi tahu Anda melalui email atau notifikasi dalam platform jika terdapat perubahan penting.']
  },
  {
    title: '8. Hubungi Kami',
    content: ['Jika Anda memiliki pertanyaan lebih lanjut tentang Kebijakan Privasi, silakan hubungi [alamat email CS atau formulir kontak resmi Lumino].']
  }
]


const KebijakanPrivasiPage = () => {
  return (
    <main className="w-full">
      <div className="w-full p-res-xxl max-w-[900px] mx-auto space-y-10 flex flex-col sm:mt-0 mt-10">
        <FadeIn direction="down" className="w-full">
          <h1 className="text-res-3xl font-bold bg-gradient-to-r from-blue-800 via-purple-600 to-purple-800 inline-block text-transparent bg-clip-text">
            Kebijakan Privasi Lumino
          </h1>
          <p>Selamat datang di Lumino, platform edukasi inklusif, cepat, dan transparan. Kami menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi yang Anda berikan kepada kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda.</p>
        </FadeIn>

        <hr className="border-t border-gray-300" />

        {kebijakanPrivasiData.map((section, idx) => (
          <FadeIn direction="down" key={idx} className="space-y-2">
            <h2 className="text-res-xl font-bold bg-gradient-to-r from-blue-800 via-purple-600 to-purple-800 inline-block text-transparent bg-clip-text">{section.title}</h2>
            {section.content.map((item, i) =>
              typeof item === 'string' ? (
                <p key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ) : (
                <ul key={i} className="list-disc list-inside ml-4">
                  {item.list.map((li, j) => (
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

export default KebijakanPrivasiPage
