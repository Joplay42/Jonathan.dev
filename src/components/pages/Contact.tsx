const Contact = () => {
    return (
        <div className=" bg-white dark:bg-neutral-900 dark:text-white rounded-3xl shadow-xl border border-gray-200 dark:border-neutral-800 overflow-y-auto mt-6 mr-6 xl:mr-16 ml-6 mb-6">
            <div className="h-[70vh] ">
                <section className="relative">
                    <form action="" className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 w-[60rem] bg-white shadow-xl border p-10 rounded-2xl space-y-4">
                        <div className="flex justify-evenly gap-10">
                            <div className="flex flex-col w-full space-y-4">
                                <label>Nom : </label>
                                <input className="border border-neutral-300 p-2 rounded-xl" type="text" placeholder="votre nom" />
                            </div>
                            <div className="flex flex-col w-full space-y-4">
                                <label>Prénom : </label>
                                <input className="border border-neutral-300 p-2 rounded-xl" type="text" placeholder="votre prénom" />
                            </div>
                        </div>
                        <div className="flex flex-col w-full space-y-4">
                            <label>Sujet : </label>
                            <input className="border border-neutral-300 p-2 rounded-xl" type="text" placeholder="votre sujet" />
                        </div>
                        <div className="flex flex-col w-full space-y-4">
                            <label>Commentaire : </label>
                            <textarea className="border border-neutral-300 p-2 rounded-xl" rows={5} placeholder="votre sujet" />
                        </div>
                    </form>
                    <svg className="pt-[24%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#1d4ed8" fill-opacity="1" d="M0,32L120,74.7C240,117,480,203,720,208C960,213,1200,139,1320,101.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                    </svg>
                </section>
            </div>
        </div>
    )
}

export default Contact;