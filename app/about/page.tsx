


export default function About() {

    

    
    return (
        <div>
            <section className="bg-gray-100">
                <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className="max-w-lg">
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                            <p className="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                                eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                                Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                                malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
                            <div className="mt-8">
                                <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                                    <span className="ml-2">&#8594;</span>
                                </a>
                            </div>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" className="object-cover rounded-lg shadow-md" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100">
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
                <div className="mt-12 md:mt-0">
                    <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" className="object-cover rounded-lg shadow-md" />
                </div>
            </div>
            <div className="max-w-lg">
                <div className="mt-12 md:mt-0">
                    <p className="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                        eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                        Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                        malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
                    <div className="mt-8">
                        <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                            <span className="ml-2">&#8594;</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
        




</section>

<section className="py-16 bg-gray-100 dark:bg-gray-800 font-poppins">
  <div className="p-4 mx-auto max-w-7xl flex flex-col items-center">
    <h2 className="pb-4 text-4xl font-bold text-center text-gray-800 md:text-6xl dark:text-gray-400">
      Our Gallery
    </h2>
    <div className="mx-auto mb-8 border-b border-red-700 w-24 dark:border-gray-400"></div>
    <div className="flex flex-wrap justify-center">
      {Array.from({ length: 8 }, (_, index) => (
        <div key={index} className="w-48 sm:w-36 md:w-48 mb-4 md:mb-0 px-2">
          <a href="#">
            <div className="relative mb-5 overflow-hidden rounded-md">
              <img
                className="object-cover w-full h-36 md:h-48 transition duration-500 group-hover:origin-center hover:scale-105 rounded-md"
                src={`https://i.postimg.cc/Y23w2gc1/pexels-ricardo-esquivel-1586298.jpg`}
                alt=""
              />
            </div>
          </a>
        </div>
      ))}
    </div>
  </div>
</section>













            

            
        </div>
        
        
        
    );
}
