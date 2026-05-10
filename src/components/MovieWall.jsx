import React from 'react';
import { motion } from 'framer-motion';

const movies = [
  { id: 1, title: 'RRR', year: '2022', image: 'https://filmifiles.com/wp-content/uploads/2022/03/img_0603.jpg' },
  { id: 2, title: 'Pushpa: The Rise', year: '2021', image: 'https://img.ap7am.com/froala-uploads/20241017fr6710ac0068685.jpg' },
  { id: 3, title: 'Devara', year: 'Upcoming', image: 'https://m.media-amazon.com/images/M/MV5BZWEwNmYwYTAtMmQxYS00ZTgwLWE0NmUtNGIwZDEyZmYwN2EwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
  { id: 4, title: 'Game Changer', year: 'Upcoming', image: 'https://image.tmdb.org/t/p/original/gDStKH2GKyk5uIX46FAuPddTotZ.jpg' },
  { id: 5, title: 'Leo', year: '2023', image: 'https://i.pinimg.com/originals/46/37/db/4637dbeccdf457d9086f4e19e3737863.jpg' },
  { id: 6, title: 'Adipurush', year: '2023', image: 'https://tse4.mm.bing.net/th/id/OIP._itXhBmZZFUd2XL1-Do0oAHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: 7, title: 'Sita Ramam', year: '2022', image: 'https://m.media-amazon.com/images/M/MV5BN2RjZDJhYzUtOTQ5Yy00OWM3LWE5OTctM2Y0YWVmNzAzODllXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_FMjpg_UX1000_.jpg' },
  { id: 8, title: 'Thandel', year: 'Upcoming', image: 'https://andhrawatch.com/wp-content/uploads/2024/09/thandel.jpg' },
  { id: 9, title: 'Kantara', year: '2022', image: 'https://panmovies.com/wp-content/uploads/al_opt_content/IMAGE/panmovies.com/wp-content/uploads/2025/09/Kantara-2-Movie-Review-2025-Star-Cast-Climax-Story-Rishab-Shetty-Kantara-2-Movie-Review-1024x576.png' },
  { id: 10, title: 'Kanguva', year: 'Upcoming', image: 'https://juksun.com/wp-content/uploads/2023/05/Kanguva-Movie-Poster-4.jpg' },
  { id: 11, title: 'Kubera', year: 'Upcoming', image: 'https://images.filmibeat.com/ph-big/2024/11/kubera-release-date-cast-crew-plot-more-about-dhanushs-upcoming-gritty-thriller1731736849_2.jpg' },
  { id: 12, title: 'Kalki 2898 AD', year: '2024', image: 'https://tse2.mm.bing.net/th/id/OIP.ZeLAWETJ9PgWyYJ0pi6mowHaLk?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: 13, title: 'Salaar', year: '2023', image: 'https://preview.redd.it/salaar-new-poster-and-announcement-v0-85s9cu4uhuzb1.jpg?width=1080&crop=smart&auto=webp&s=cb3ccf00234a37f4961d069a11841284606dfa20' },
  { id: 14, title: 'Ayalaan', year: '2024', image: 'https://image.tmdb.org/t/p/original/5sT4DxOYyMv9BJBRl64S4NfOuss.jpg' },
  { id: 15, title: 'Mahaveerudu', year: '2023', image: 'https://tse2.mm.bing.net/th/id/OIP.suwXf1p4FjMHyEIKHkBddAHaJO?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: 16, title: 'Bharateeyudu 2', year: '2024', image: 'https://upload.wikimedia.org/wikipedia/en/b/b3/Indian_2_poster.jpg' },
];

const MovieWall = () => {
  return (
    <section id="work" className="py-24 px-6 relative z-10 bg-[#0A0D0D]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Filmography</h2>
          <p className="text-secondary text-lg">The Movie Wall</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {movies.map((movie, index) => (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative aspect-[2/3] bg-[#1A1F1F] rounded-xl overflow-hidden border border-white/5 cursor-pointer group shadow-lg"
            >
              {/* Movie Poster Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#111] to-[#222]">
                <img 
                  src={movie.image} 
                  alt={movie.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-40 transition-opacity duration-500"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay content that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/10 flex flex-col items-center justify-end p-4 pb-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 leading-tight">{movie.title}</h3>
                <p className="text-xs md:text-sm text-secondary mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{movie.year}</p>
                <div className="w-8 h-1 bg-primary mb-2 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100"></div>
                <p className="text-xs md:text-sm text-primary font-semibold tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                  Role: Roto Artist
                </p>
                <p className="text-[10px] md:text-xs text-white/70 mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                  @ Phantom FX
                </p>
              </div>

              {/* Always visible title for when not hovered */}
              <div className="absolute bottom-0 inset-x-0 p-3 md:p-4 bg-gradient-to-t from-black/90 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-base md:text-lg font-semibold text-white/90 truncate text-center">{movie.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieWall;
