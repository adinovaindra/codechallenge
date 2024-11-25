import React from 'react';
import aboutMe from './../assets/image/aboutme.jpg'

const Aboutme: React.FC = () => {
    return (
        <section id="about" className="pt-10 overflow-hidden bg-black-800 md:pt-0 sm:pt-16 2xl:pt-16 scroll-m-5">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 md:grid-cols-2">

                    <div>
                        <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                            Adinova Indra Permana
                        </h2>
                        <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                        Born in Yogyakarta, Adinova has a rich cultural heritage that inspires his creative endeavors. Adinova was born in Yogyakarta on 1st March 1999, a place known for its vibrant arts and traditions. His upbringing in such a culturally rich environment has profoundly influenced his passion and vision. With a deep appreciation for both modern technology and traditional art, Adinova continually seeks to blend these worlds in his work, bringing innovative solutions and unique perspectives to the table.
                        </p>
                    </div>

                    <div className="relative">
                        <img
                            className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 rounded-md"
                            src={aboutMe}
                            alt=""
                        />
                    </div>
                    <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
                </div>
            </div>
        </section>
    );
};

export default Aboutme;
