import Image from 'next/image';

export function Index() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div className="text-3xl font-mono tracking-tight text-gray-900 sm:text-4xl">
          <span className="block"><div className="items-center justify-center px-1 py-1 border bg-white"
          >
            <Image
              src='/subroutineID_round.jpg'
              alt="Soundcloud"
              height={500}
              width={500}

            />

          </div></span> <h3 className="text-2xl mb-8">
            <span className="text-zinc-600 ">
              Optimistic post-apocalyptic mysticism
            </span>
          </h3><div className="mt-8 ml-28 flex lg:mt-0">
            <div className="rounded-md shadow">
              <a
                href="https://soundcloud.com/thesubroutine/looking-up-high"
                target="_blank"
                className="inline-flex justify-center px-5 py-3 border text-base font-medium rounded-md text-white bg-orange-500 hover:bg-black" rel="noreferrer"
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
            <div className="ml-4 inline-flex rounded-md shadow ">
              <a
                href="https://open.spotify.com/artist/3HdPgI00Jz1qViim7N0zpw?si=pzMWop4dSDqhtbajvifHWQ"
                target="_blank"
                className="inline-flex items-center justify-center px-5 py-3 border text-base font-medium rounded-md text-indigo-500 bg-white hover:bg-sky-500" rel="noreferrer"
              ><div className="h-10 w-20 relative  items-center">
                  <Image
                    src='/spotifyLogo4.png'
                    alt="Spotify"
                    width={90}
                    height={45}
                    className="rounded-full"
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
