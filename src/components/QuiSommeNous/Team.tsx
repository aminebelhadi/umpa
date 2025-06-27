import { motion } from "framer-motion";
import EliseBaronImage from "../../images/baron.png";
import ValerieImage from "../../images/valerie.png";
import monsieur from "../../images/monsieur.png";
import "../../miniFramework.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const teamMembers = [
  {
    name: "Baron",
    title: "Fondatrice & Présidente",
    image: EliseBaronImage
  },
  {
    name: "Valerie",
    title: "Fondatrice & Présidente",
    image: ValerieImage
  },
  {
    name: "Monsieur",
    title: "Fondateur & Président",
    image: monsieur
  }
];

const Team = () => {
  return (
    <div className="marg-t-70">
      <div className="centering-equipe">
        <motion.h1
          className="t"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Rencontrez l'Équipe
        </motion.h1>
        <motion.p
          className="mini-title"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Découvrez les personnes passionnées qui œuvrent chaque jour pour la protection et le bien-être des animaux.
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row gap-8 marg-t-70 centering"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            marginTop: "52px",
          }}
        >
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-2xl gap-2 shadow-lg flex flex-col items-center p-6 w-full max-w-xs mx-auto transition-transform hover:-translate-y-2 hover:shadow-xl"
              variants={itemVariants}
              style={
                {
                  padding: "25px",
                }
              }
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-[#f3f3f3] shadow"
              />
              <h2 className="font-bold text-xl text-[#89202D] mb-1">{member.name}</h2>
              <p className="text-[15px] text-[#89202D] opacity-80">{member.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Team;