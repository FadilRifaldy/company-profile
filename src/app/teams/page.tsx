"use client";
import { useEffect, useState } from "react";

interface ITeams {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
}

export default function TeamsPage() {
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Project Manager",
    "Mobile App Developer",
    "DevOps Engineer",
  ];

  const desc = [
    "Membangun antarmuka yang interaktif dan responsif menggunakan React & Tailwind.",
    "Mengembangkan API yang efisien dan menjaga keamanan data di sisi server.",
    "Menciptakan desain yang intuitif dan pengalaman pengguna yang menyenangkan.",
    "Mengatur alur kerja tim dan memastikan proyek selesai tepat waktu.",
    "Mengembangkan aplikasi mobile dengan performa tinggi untuk Android dan iOS.",
    "Menjaga infrastruktur dan pipeline deployment agar berjalan lancar.",
  ];

  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetch("https://randomuser.me/api/?results=6");
        const data = await res.json();
        setTeam(data.results);
      } catch (error) {
        console.error("Failed to fetch team:", error);
      }
    };

    fetchTeam();
  }, []);

  return (
    <main className="min-h-screen px-20 pt-10 pb-20 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-10">Our Team</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member: ITeams, index) => (
          <div
            key={index}
            className="transition-transform hover:scale-105 duration-500 bg-gradient-to-r from-blue-50 via-white to-blue-50 p-6 rounded-xl shadow-lg text-center hover:shadow-2xl"
          >
            <img
              src={member.picture.large}
              alt={`${member.name.first} ${member.name.last}`}
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">
              {member.name.first} {member.name.last}
            </h2>
            <p className="text-blue-600 font-medium">{roles[index]}</p>
            <p className="text-gray-600 mt-2">{desc[index]}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
