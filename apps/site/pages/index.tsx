export function Index() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-mono tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">The Subroutine</span></h2>
        <h3 className="text-2xl">
          <span className="block text-indigo-600 ">
            Post apocalyptic optimism!
          </span>
        </h3>


        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border text-base font-medium rounded-md text-white bg-orange-500 hover:bg-black"
            >
              Soundcloud
            </a>
          </div>
          <div className="ml-4 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border text-base font-medium rounded-md text-indigo-500 bg-emerald-300 hover:bg-sky-500"
            >
              Spotify
            </a>
          </div>
        </div>
      </div >
    </div >
  );
}
export default Index;
