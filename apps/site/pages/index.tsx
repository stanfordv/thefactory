import Image from 'next/image';

export function Index() {
  return (
    <div className="bg-yellow-500" place-content-center>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div className="text-3xl font-mono tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">
            <div className="items-center justify-center px-1 py-1 bg-black shadow-2xl rounded"
            >
              <Image
                src='/subroutineID_round.jpg'
                alt="Soundcloud"
                height={400}
                width={400}

              />

            </div>
          </span>
          <div className="text-base text-center  mb-8 p-2 ">
            <span className="text-xl pb-2 text-slate-100 font-light">
              * Alter Echo *
            </span>
          </div>
          <div className="mt-8 place-content-center flex lg:mt-0 ">
            <div className="inline-flex justify-center px-5 py-3 border text-base font-medium rounded-md text-white bg-orange-500 hover:bg-black rounded-md shadow">
              <a
                href="https://soundcloud.com/thesubroutine/looking-up-high"
                target="_blank"
                rel="noreferrer"
              ><div className="h-10 w-20 relative">
                  <Image
                    src='/SoundcloudLogo.png'
                    alt="Soundcloud"
                    width={80}
                    height={40}

                    className="rounded-full"
                  />
                </div>
              </a>
            </div>
            <div className="ml-4 inline-flex rounded-md shadow lg:mt-0 inline-flex items-center justify-center px-5 py-3 border text-base font-medium rounded-md text-indigo-500 bg-black hover:bg-white">
              <a
                href="https://open.spotify.com/artist/3HdPgI00Jz1qViim7N0zpw?si=pzMWop4dSDqhtbajvifHWQ"
                target="_blank"
                rel="noreferrer"
              ><div className="h-10 w-20 relative p-1">
                  <Image
                    src='/spotifyLogo4.png'
                    alt="Spotify"
                    width={70}
                    height={35}



                  />
                </div>
              </a>
            </div>
          </div></div>
      </div >
    </div >
  );
}
export default Index;
