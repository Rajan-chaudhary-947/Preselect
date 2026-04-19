const ProductSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 animate-pulse">

      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

          {/* IMAGE GALLERY */}
          <div>
            {/* main image */}
            <div className="bg-gray-300 rounded-lg h-[300px] sm:h-[400px] md:h-[500px] mb-4"></div>

            {/* thumbnails */}
            <div className="flex gap-3 overflow-x-auto">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-300 rounded-lg shrink-0"
                />
              ))}
            </div>
          </div>

          {/* PRODUCT DETAILS */}
          <div className="space-y-4">

            {/* brand */}
            <div className="h-4 w-24 bg-gray-300 rounded"></div>

            {/* title */}
            <div className="h-8 w-3/4 bg-gray-300 rounded"></div>
            <div className="h-8 w-1/2 bg-gray-300 rounded"></div>

            {/* rating */}
            <div className="h-4 w-32 bg-gray-300 rounded"></div>

            {/* price */}
            <div className="h-10 w-24 bg-gray-300 rounded"></div>

            {/* description */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            </div>

            {/* sizes */}
            <div className="flex gap-3 flex-wrap mt-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-10 w-16 bg-gray-300 rounded-lg"
                />
              ))}
            </div>

            {/* buttons */}
            <div className="flex gap-4 mt-6">
              <div className="flex-1 h-12 bg-gray-300 rounded-lg"></div>
              <div className="w-32 h-12 bg-gray-300 rounded-lg"></div>
            </div>

          </div>
        </div>

        {/* REVIEWS SECTION */}
        <div className="bg-white rounded-lg shadow-lg p-8">

          {/* heading */}
          <div className="h-8 w-48 bg-gray-300 rounded mb-6"></div>

          {/* button */}
          <div className="h-10 w-40 bg-gray-300 rounded mb-8"></div>

          {/* review cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border rounded-lg p-4 space-y-3">
                
                {/* user */}
                <div className="h-4 w-24 bg-gray-300 rounded"></div>

                {/* stars */}
                <div className="h-3 w-20 bg-gray-300 rounded"></div>

                {/* comment */}
                <div className="space-y-2">
                  <div className="h-3 bg-gray-300 rounded w-full"></div>
                  <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                </div>

                {/* date */}
                <div className="h-3 w-20 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductSkeleton;
