import { FadeIn } from "@/components/template/animated/FadeIn"

const faqData = [
  {
    question: 'Apa itu Lumino?',
    answer: 'Lumino adalah platform edukasi online yang menyediakan materi pembelajaran terstruktur dan inklusif, dengan akses cepat dan transparan untuk semua peserta.'
  },
  {
    question: 'Siapa yang dapat menggunakan Lumino?',
    answer: 'Siapa pun yang ingin belajar—baik pelajar, mahasiswa, profesional, atau pengajar—dapat mendaftar dan menggunakan Lumino tanpa diskriminasi.'
  },
  {
    question: 'Apakah Lumino gratis?',
    answer: 'Beberapa materi dasar tersedia secara gratis, namun ada juga layanan premium atau bimbingan mentor yang memerlukan biaya.'
  },
  {
    question: 'Bagaimana cara saya mengakses materi pembelajaran?',
    answer: 'Setelah mendaftar dan login, Anda dapat langsung mengakses modul pembelajaran melalui dashboard yang tersedia, termasuk video, teks, dan infografis.'
  },
  {
    question: 'Bagaimana jika saya mengalami kendala saat belajar?',
    answer: 'Anda dapat menghubungi mentor melalui fitur diskusi atau mengirimkan laporan kendala ke tim dukungan kami di [support@lumino.id].'
  },
  {
    question: 'Apakah saya mendapatkan sertifikat setelah menyelesaikan kursus?',
    answer: 'Ya, peserta yang menyelesaikan modul dan evaluasi akan mendapatkan sertifikat digital sebagai bukti kompetensi.'
  },
  {
    question: 'Apakah data saya aman di Lumino?',
    answer: 'Kami menjaga privasi dan keamanan data Anda dengan prosedur dan teknologi terkini, seperti enkripsi dan sistem otorisasi yang ketat.'
  }
]


const FAQPage = () => {
  return (
    <main className="w-full">
      <section className="w-full p-res-xxl max-w-[900px] mx-auto space-y-10 flex flex-col sm:mt-0 mt-10">
        <FadeIn direction="down" delay={0.2} className="w-full">
          <h1 className="text-res-3xl font-bold bg-gradient-to-r from-blue-800 via-purple-600 to-purple-800 inline-block text-transparent bg-clip-text">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h1>
          <p>Berikut adalah jawaban untuk beberapa pertanyaan umum tentang penggunaan platform Lumino.</p>
        </FadeIn>

        <hr className="border-t border-gray-300" />

        {faqData.map((item, idx) => (
          <FadeIn direction="down" delay={0.2} key={idx} className="space-y-1">
            <h2 className="text-res-lg font-semibold text-blue-800">{item.question}</h2>
            <p>{item.answer}</p>
          </FadeIn>
        ))}
      </section>
    </main>
  )
}

export default FAQPage
