const CollectionSkeleton = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white animate-pulse">

      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 text-center">
        <div className="h-10 md:h-14 bg-gray-700 rounded w-64 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-700 rounded w-96 max-w-full mx-auto"></div>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">

          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg p-4">

              {/* image */}
              <div className="h-56 bg-gray-300 rounded mb-4"></div>

              {/* brand */}
              <div className="h-3 bg-gray-300 rounded w-1/3 mb-2"></div>

              {/* title */}
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-3"></div>

              {/* rating */}
              <div className="h-3 bg-gray-300 rounded w-1/3 mb-4"></div>

              {/* price + button */}
              <div className="flex justify-between items-center">
                <div className="h-5 w-16 bg-gray-300 rounded"></div>
                <div className="h-8 w-8 bg-gray-300 rounded"></div>
              </div>

            </div>
          ))}

        </div>
      </section>

    </main>
  );
};

export default CollectionSkeleton;
