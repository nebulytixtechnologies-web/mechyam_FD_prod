import React, { useEffect, useState } from "react";
import OurClientsImg from "../../assets/OurClients-Image/ourclients3.jpg";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const OurClients = () => {
  const [grouped, setGrouped] = useState({});
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const normalize = (name) => name.toLowerCase().trim();

  useEffect(() => {
    fetch(`${API_BASE_URL}/clients/all`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch clients");
        return res.json();
      })
      .then((data) => {
        const group = {};
        data.forEach((c) => {
          const key = normalize(c.companyName);
          if (!group[key]) group[key] = [];
          group[key].push(c);
        });
        setGrouped(group);
      })
      .catch((err) => console.error(err));
  }, []);

  // unique clients list
  let uniqueClients = Object.keys(grouped).map((key) => grouped[key][0]);

  // search
  uniqueClients = uniqueClients.filter((c) =>
    c.companyName.toLowerCase().includes(search.toLowerCase())
  );

  // sort
  uniqueClients.sort((a, b) =>
    sortAsc
      ? a.companyName.localeCompare(b.companyName)
      : b.companyName.localeCompare(a.companyName)
  );

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        <img
          src={OurClientsImg}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow">
            Our Clients
          </h1>
        </div>
      </section>

      {/* Search + Sort */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-4 px-6 mt-10">
        <input
          className="w-full md:flex-1 px-4 py-3 border rounded-lg shadow-sm"
          placeholder="Search Clients..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => setSortAsc(!sortAsc)}
          className="px-5 py-3 bg-blue-600 text-white rounded-lg shadow"
        >
          Sort {sortAsc ? "A → Z" : "Z → A"}
        </button>
      </div>

      {/* Clients */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {uniqueClients.map((client) => {
            const key = normalize(client.companyName);

            return (
              <div
                key={key}
                onClick={() => setSelected(key)}
                className="
                  bg-white rounded-xl p-8 cursor-pointer transition hover:-translate-y-2
                  border shadow hover:shadow-lg text-center
                "
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                  {client.companyName[0].toUpperCase()}
                </div>

                <h3 className="text-lg font-bold mt-4 text-gray-900">
                  {client.companyName}
                </h3>

                <div className="w-10 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />

                <p className="text-gray-500 text-sm mt-3">
                  {grouped[key]?.length} Projects
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 w-8 h-8 bg-red-500 text-white rounded-full"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <h2 className="text-3xl font-bold text-center text-blue-700">
              {grouped[selected][0].companyName}
            </h2>

            <p className="text-center text-gray-600 mt-2 mb-8">
              Registered Locations
            </p>

            <div className="space-y-4">
              {grouped[selected].map((c, i) => (
                <div
                  key={i}
                  className="p-4 bg-gray-100 rounded-lg border shadow-sm"
                >
                  <p className="font-semibold">Project / Location:</p>
                  <p className="text-gray-700 mt-1">{c.companyLocation}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button
                onClick={() => setSelected(null)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <section className="py-16 bg-gradient-to-br from-blue-100 via-white to-blue-100 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-blue-900 tracking-wide drop-shadow-sm">
            Our Clients Are Our Priority
          </h2>

          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            We build strong relationships grounded in trust, innovation, and
            shared success.
          </p>

          <div className="mt-6 flex justify-center">
            <span className="block w-24 h-1 bg-blue-600 rounded-full"></span>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurClients;
