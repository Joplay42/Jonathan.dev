import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();        
        alert("Envoyé!")
        const serviceID = 'service_3cpygow';
        const templateID = 'template_ixydckj';
        const userID = '0Ub1vkrKTMYlpjfeQ';
            
        const formData = new FormData(e.currentTarget);
            
        // Populate the placeholders in the email template with the form data
        const templateParams = {
            from_nom: formData.get('nom') as string,
            from_prenom: formData.get('prenom') as string,
            email: formData.get('email') as string,
            message: formData.get('message') as string,
        };
    
        emailjs.send(serviceID, templateID, templateParams, userID)
            .then((result) => {
                console.log(result.text);
                // Add any success message or action here
            }, (error) => {
                console.log(error.text);
                // Add any error message or action here
            });
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
                                <input name='nom' className="border border-neutral-300 p-2 rounded-xl dark:bg-neutral-800 dark:border-neutral-700 " type="text" placeholder="votre nom" />
                            </div>
                            <div className="flex flex-col w-full space-y-4">
                                <label className="dark:text-neutral-500">Prénom : </label>
                                <input name='prenom' className="border border-neutral-300 p-2 rounded-xl dark:bg-neutral-800 dark:border-neutral-700" type="text" placeholder="votre prénom" />
                            </div>
                        </div>
                        <div className="flex flex-col w-full space-y-4">
                            <label className="dark:text-neutral-500">Email : </label>
                            <input name='email' className="border border-neutral-300 p-2 rounded-xl dark:bg-neutral-800 dark:border-neutral-700" type="text" placeholder="votre email" />
                        </div>
                        <div className="flex flex-col w-full space-y-4">
                            <label className="dark:text-neutral-500">Commentaire : </label>
                            <textarea name='message' className="border border-neutral-300 p-2 rounded-xl dark:bg-neutral-800 dark:border-neutral-700" rows={5} placeholder="votre sujet" />
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
