import { FadeIn } from "@/components/template/animated/FadeIn"
import { Eye, Globe, Rocket } from "lucide-react"

const items = [
  {
    title: 'Inklusif',
    subtitle:
      'Lumino percaya bahwa setiap individu, tanpa memandang latar belakang, kondisi fisik, atau lokasi geografis, berhak mendapatkan akses pendidikan berkualitas. ',
    description:
      "Fitur seperti mode aksesibilitas, antarmuka ramah disabilitas, serta materi pembelajaran multibahasa mencerminkan komitmen kami terhadap kesetaraan. Platform ini menyatukan siswa dari berbagai budaya dan memberikan ruang aman bagi semua untuk berkembang.",
    icon: <Globe className="text-blue-600 w-8 h-8" />
  },
  {
    title: 'Cepat',
    subtitle:
      'Kecepatan bukan hanya soal teknologi, tapi soal memastikan pengalaman belajar berjalan tanpa hambatan.',
    description:
      "Lumino dibangun dengan performa tinggi waktu loading nyaris instan, pencarian materi cepat, dan kelas live dengan latensi rendah. Teknologi cerdas seperti cache otomatis dan rekomendasi berbasis AI memastikan pengguna mendapat apa yang mereka butuhkan dalam hitungan detik, bahkan dengan koneksi lambat.",
    icon: <Rocket className="text-yellow-500 w-8 h-8" />
  },
  {
    title: 'Transparan',
    subtitle:
      'Transparansi adalah pondasi kepercayaan antara pengguna dan platform.',
    description:
      'Di Lumino, pengguna dapat melihat histori belajar, penilaian, serta data pribadi dengan jelas. Mentor dan siswa dapat memberikan umpan balik terbuka, dan setiap proses dari evaluasi hingga kebijakan privasi dijelaskan secara gamblang dan mudah diakses.',
    icon: <Eye className="text-green-500 w-8 h-8" />
  }
]

const AboutPage = () => {
  return (
    <main className="w-full">
      <section className="w-full h-auto px-res-xxl py-15 flex flex-col gap-10">
        <div className="w-full flex flex-col gap-2 max-w-[800px]">
          <FadeIn direction="left" delay={0.2} className="text-res-3xl font-bold bg-gradient-to-r from-blue-800 via-purple-600 to-purple-800 inline-block text-transparent bg-clip-text">ABOUT LUMINO</FadeIn>
          <FadeIn direction="left" delay={0.3} className="text-justify">Lumino hadir sebagai solusi inovatif untuk pembelajaran di era digital. Platform ini menawarkan akses mudah ke materi yang terstruktur dengan sistem yang transparan demi menunjang pengalaman belajar terbaik. Dengan pendekatan modern, Lumino memastikan setiap peserta dapat belajar dengan efektif dan inklusif tanpa batasan.</FadeIn>
          <FadeIn direction="left" delay={0.4} className="text-justify">Memanfaatkan teknologi terkini, Lumino menggabungkan kemudahan akses dengan sistem pembelajaran yang mempercepat penguasaan ilmu, sekaligus menjaga keterbukaan proses agar setiap peserta dapat memantau perkembangan belajarnya.</FadeIn>
        </div>

        <div className="w-full flex flex-col gap-4">
          <FadeIn direction="left" delay={0.2} className="text-res-3xl font-bold bg-gradient-to-r from-blue-800 via-purple-600 to-purple-800 inline-block text-transparent bg-clip-text">WHY CHOOSE LUMINO</FadeIn>
          <div className="w-full flex flex-col gap-4 border-l-2 pl-4">
            {items.map((item, index) => (
              <FadeIn
                direction="down"
                delay={0.2}
                key={index}
                className="relative w-full flex flex-col gap-2 bg-accent p-res-lg rounded-bl-3xl rounded-tr-3xl border">
                <div className="w-full flex items-center gap-2">
                  {item.icon}
                  <h2 className="text-res-2xl font-bold">{item.title}</h2>
                </div>
                <p className="text-res-lg text-justify">{item.subtitle}</p>
                <p className="text-res-lg text-justify text-muted-foreground">{item.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage