import Link from "next/link";

const caregivers = [
  {
    id: 1,
    name: "Lucas Oliveira",
    description:
      "Especializado em reabilitação física para idosos após cirurgias ou lesões.",
    image:
      "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    name: "Beatriz Santos",
    description:
      "Cuidadora experiente em acompanhar pacientes com diabetes e hipertensão.",
    image:
      "https://images.pexels.com/photos/8560209/pexels-photo-8560209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    name: "Carlos Mendes",
    description:
      "Oferece suporte para idosos com deficiência visual ou auditiva.",
    image:
      "https://images.pexels.com/photos/8942093/pexels-photo-8942093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    name: "Fernanda Costa",
    description:
      "Especialista em proporcionar companhia e suporte emocional para idosos.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Rafael Lima",
    description:
      "Experiência com cuidados paliativos e suporte emocional para famílias.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Clara Almeida",
    description:
      "Cuidadora bilíngue para famílias que necessitam de suporte em português e inglês.",
    image: "https://via.placeholder.com/150",
  },
];

export default function CaregiversPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Cuidadores Disponíveis</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 object-center">
        {caregivers.map((caregiver) => (
          <Link
            key={caregiver.id}
            href={`/cuidadores/${caregiver.id}`}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={caregiver.image}
              alt={caregiver.name}
              className="w-full h-52 object-cover object-center rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{caregiver.name}</h2>
              <p className="text-gray-600">{caregiver.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
