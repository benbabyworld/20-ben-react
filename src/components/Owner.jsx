import React from 'react';

function Owner() {
  return (
    <div className="text-center">
      <div className="flex flex-col items-center justify-center">
        <img src="https://i.ibb.co/12N5kSV/ben.jpg" alt="Ben" className="rounded-full w-32 h-32 mb-4" />
        <h1 className="text-3xl font-bold mb-2">Nattapon (Ben) Srichan</h1>
        <p className="text-lg mb-2">Junior Software Developer</p>
        <p className="mb-2">+66 98 602 4000 | nattapon.schn@gmail.com</p>
        <p className="mb-2">
          <a href="https://www.linkedin.com/in/nattaponsc/" className="hover:underline">linkedin.com/nattaponsc</a> | <a href="https://bnbby.github.io/benbabyworld" className="hover:underline">bnbby.github.io/benbabyworld</a>
        </p>
      </div>
      <div className="max-w-lg mx-auto">
        <h2 className="text-xl font-bold mt-8 mb-4">OBJECTIVE</h2>
        <p className="text-lg mb-4">Undergoing five years as an educator, I'm diving into a Full Stack Development Bootcamp. I am ready to use my problem-solving skills, creativity, and passion for tech to build impactful applications through advanced front-end development skills to create educational impacts to my home country.</p>
      </div>
    </div>
  );
}

export default Owner;
