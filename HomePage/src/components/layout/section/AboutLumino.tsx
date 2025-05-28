// components/RoadmapVertical.jsx
import { FadeIn } from "@/components/template/animated/FadeIn";
import { Globe, Bolt, Eye } from "lucide-react"

const roadmapItems = [
  {
    title: "Inklusif",
    icon: <Globe className="text-blue-600 w-8 h-8" />,
    description:
      "Akses pendidikan yang setara bagi semua orang, tanpa batas latar belakang atau kondisi fisik."
  },
  {
    title: "Cepat",
    icon: <Bolt className="text-yellow-500 w-8 h-8" />,
    description:
      "Belajar jadi efisien dengan performa platform yang ringan, cepat, dan cerdas."
  },
  {
    title: "Transparan",
    icon: <Eye className="text-green-500 w-8 h-8" />,
    description:
      "Setiap proses di Lumino terbuka dan dapat dilacak—membangun kepercayaan penuh.",
  },
];

export function RoadmapVertical() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Roadmap Nilai Utama Lumino
        </h2>

        <div className="relative border-l-2 border-gray-300">
          {roadmapItems.map((item, index) => (
            <FadeIn
              key={index}
              className="mb-16 ml-6 relative"
            >
              <div className="absolute -left-6 top-1">
                <div className="bg-white border-2 border-gray-300 rounded-full p-2 shadow">
                  {item.icon}
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-3 text-sm">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
