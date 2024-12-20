import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Home() {
    return (
        <div>
            <Navbar />

            <section>
                
            </section>

            <section className="py-24 bg-black">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-20 text-center">
                        <span className="text-yellow-500 text-center font-medium mb-4 block">OUR PARTNERS</span>
                        <h1 className="text-4xl text-white text-center font-bold">We work with the best partners</h1>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
                        {[
                            "steam.png",
                            "1.png",
                            "2.png",
                            "3.png",
                            "4.png",
                            "5.png",
                            "6.png",
                            "7.png",
                        ].map((logo, index) => (
                            <a
                                key={index}
                                href="#"
                                className="flex justify-center items-center h-24 rounded-2xl shadow-sm"
                            >
                                <img
                                    src={`clients/${logo}`}
                                    alt={`Partner ${index + 1}`}
                                    className="max-h-16 max-w-full object-contain"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="py-8 bg-black">
                    <div className="flex flex-col md:flex-row justify-around items-center">
                        <div className="text-center flex items-center gap-4 group">
                            <img
                                src="https://flagcdn.com/w320/in.png"
                                alt="India Flag"
                                className="h-8 opacity-50 transition-opacity duration-200 ease-in-out group-hover:opacity-100"
                            />
                            <h2 className="text-4xl font-extrabold capitalize text-white opacity-50 stroke-text transition-opacity duration-200 ease-in-out group-hover:opacity-100">
                                India
                            </h2>
                        </div>

                        <div className="text-center flex items-center gap-4 group">
                            <img
                                src="https://flagcdn.com/w320/ca.png"
                                alt="Canada Flag"
                                className="h-8 opacity-50 transition-opacity duration-200 ease-in-out group-hover:opacity-100"
                            />
                            <h2 className="text-4xl font-extrabold capitalize text-white opacity-50 stroke-text transition-opacity duration-200 ease-in-out group-hover:opacity-100">
                                Canada
                            </h2>
                        </div>

                        <div className="text-center flex items-center gap-4 group">
                            <img
                                src="https://flagcdn.com/w320/us.png"
                                alt="USA Flag"
                                className="h-8 opacity-50 transition-opacity duration-200 ease-in-out group-hover:opacity-100"
                            />
                            <h2 className="text-4xl font-extrabold capitalize text-white opacity-50 stroke-text transition-opacity duration-200 ease-in-out group-hover:opacity-100">
                                USA
                            </h2>
                        </div>

                        <div className="text-center flex items-center gap-4 group">
                            <img
                                src="https://flagcdn.com/w320/ru.png"
                                alt="Russia Flag"
                                className="h-8 opacity-50 transition-opacity duration-200 ease-in-out group-hover:opacity-100"
                            />
                            <h2 className="text-4xl font-extrabold capitalize text-white opacity-50 stroke-text transition-opacity duration-200 ease-in-out group-hover:opacity-100">
                                Russia
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Home
