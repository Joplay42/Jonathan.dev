const Accueil = () => {
    return (
        <div className=" bg-white rounded-3xl shadow-xl border border-gray-200 overflow-y-auto px-4 md:px-14 lg:px-20 xl:px-32 mt-6 mr-6 xl:mr-16 ml-6 mb-6">
            <div className="h-[100vh] ">
                <section className="grid lg:grid-cols-2 justify-between items-center gap-10 py-20">
                    <div>
                        <h1 className="text-2xl">Voici un titre</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className="bg-blue-700 text-white px-6 py-2 rounded-lg">test</button>
                    </div>
                    <img src="../src/components/svg/Experience.svg" className="w-[300px] justify-self-center h-auto" />
                </section>
            </div>
        </div>

    )
}

export default Accueil;