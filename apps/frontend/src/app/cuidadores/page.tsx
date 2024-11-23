import React from "react";

const caregivers = [
  {
    id: 1,
    name: "Lucas Oliveira",
    description:
      "Especializado em reabilitação física para idosos após cirurgias ou lesões.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Beatriz Santos",
    description:
      "Cuidadora experiente em acompanhar pacientes com diabetes e hipertensão.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Carlos Mendes",
    description:
      "Oferece suporte para idosos com deficiência visual ou auditiva.",
    image: "https://via.placeholder.com/150",
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

const CuidadoresPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Nossos Cuidadores</h1>
      <p className="text-xl text-gray-600 text-center mb-10">
        Encontre abaixo os melhores cuidadores disponíveis para atender você e
        sua família.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caregivers.map((caregiver) => (
          <div
            key={caregiver.id}
            className="bg-white shadow-md rounded-lg p-6 text-center"
          >
            <img
              src={caregiver.image}
              alt={caregiver.name}
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {caregiver.name}
            </h2>
            <p className="text-gray-600">{caregiver.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuidadoresPage;
