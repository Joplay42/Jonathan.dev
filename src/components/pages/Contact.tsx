import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import emailjs from 'emailjs-com'; // Import emailjs-com

const Contact = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const [toSend, setToSend] = useState({
        from_name: '',
        from_prenom: '',
        to_name: '',
        sujet: '',
        message: '',
        reply_to: '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Send email using emailjs-com
        emailjs.send(
            'service_3cpygow',
            'template_ixydckj',
            toSend,
            'User ID'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div className=" bg-white dark:bg-neutral-900 dark:text-white rounded-3xl shadow-xl border border-gray-200 dark:border-neutral-800 overflow-y-auto mt-6 mr-6 xl:mr-16 ml-6 mb-6">
            <div className="h-[70vh]">
                <section data-aos="fade-right" className="py-10 relative">
                    <h1 className="text-center font-semibold text-3xl mb-10">N'hésitez pas à me <span className="text-blue-700">contacter</span> pour plus d'information!</h1>
                    <form onSubmit={handleSubmit} className="relative z-50 lg:w-[45rem] mx-8 lg:mx-auto bg-white shadow-xl border p-10 rounded-2xl space-y-4 dark:bg-neutral-800 dark:border dark:border-neutral-700 ">
                        <div className="lg:flex justify-evenly gap-10 space-y-4 lg:space-y-0">
                            <div className="flex flex-col w-full space-y-4">
                                <label className="dark:text-neutral-500">Nom : </label>
                                <input className="border border-neutral-300 p-2 rounded-xl dark:bg-neutral-800 dark:border-neutral-700 " type="text" name='from_name' value={toSend.from_name} onChange={handleChange} placeholder="votre nom" />
                            </div>
                            <div className="flex flex-col w-full space-y-4">
                                <label className="dark:text-neutral-500">Prénom : </label>
                                <input className="border border-neutral-300 p-2 rounded-xl dark:bg-neutral-800 dark:border-neutral-700" type="text" name='from_prenom' value={toSend.from_prenom} onChange={handleChange} placeholder="votre prénom" />
                            </div>
                        </div>
                        <div className="flex flex-col w-full space-y-4">
                            <label className="dark:text-neutral-500">Sujet : </label>
                            <input className="border border-neutral-300 p-2 rounded-xl dark:bg-neutral-800 dark:border-neutral-700" type="text" name='sujet' value={toSend.sujet} onChange={handleChange} placeholder="votre sujet" />
                        </div>
                        <div className="flex flex-col w-full space-y-4">
                            <label className="dark:text-neutral-500">Commentaire : </label>
                            <textarea className="border border-neutral-300 p-2 rounded-xl dark:bg-neutral-800 dark:border-neutral-700" rows={5} name='message' value={toSend.message} onChange={handleChange} placeholder="votre sujet" />
                        </div>
                        <button type="submit" className="bg-blue-700 hover:bg-transparent hover:text-blue-700 border border-blue-700 dark:bg-blue-700 dark:border-blue-700 dark:hover:text-white hover:dark:bg-transparent text-white px-6 py-3 rounded-lg mt-4">Envoyer</button>
                    </form>
                    <svg className="absolute bottom-0 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#1d4ed8" fillOpacity="1" d="M0,32L120,74.7C240,117,480,203,720,208C960,213,1200,139,1320,101.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                    </svg>
                </section>
            </div>
        </div>
    )
}

export default Contact;
