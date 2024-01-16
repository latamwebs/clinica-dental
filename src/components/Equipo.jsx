import Doctora from "../assets/doctora.png";
const people = [
  {
    name: "Dra. Carmiol",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1560070201-d3d11effa179?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Dr. Henry Morales",
    role: "Dentista General",
    imageUrl:
      "https://images.unsplash.com/photo-1662837625421-1f9f79491cf5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Dr. Carlos Perez",
    role: "Ortodoncista",
    imageUrl:
      "https://images.unsplash.com/photo-1667133295308-9ef24f71952e?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Dra. Nataly Espinoza",
    role: "Cirujano Oral y Maxilofacial",
    imageUrl:
      "https://images.unsplash.com/photo-1662837775272-545d8e143ad0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Equipo() {
  return (
    <div className="bg-white py-18 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-5xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl pt-10 text-center">
            Conoce a <span className="text-danube-600">nuestro equipo</span>
          </h2>
          <p className="mt-6 text-2xl leading-8 text-gray-800 text-justify">
            Nuestro equipo de profesionales especializados en la salud bucal
            listos para brindarte la mejor atención
          </p>
          <img
            src={Doctora}
            alt=""
            className="py-4 mt-12 max-w-sm hidden xl:block"
          />
        </div>
        <ul
          role="list"
          className="grid gap-x-2 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex flex-col items-center gap-y-2">
                <img
                  className="rounded-xl object-fit h-80 w-64"
                  src={person.imageUrl}
                  alt=""
                />
                <div className="text-center">
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-800 pb-8">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
