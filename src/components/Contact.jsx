export default function Contact() {
    return (
        <div name='contact' className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contato</p>
                    <p className="py-6">Preencha o formulário abaixo para entrar em contato comigo</p>
                </div>

                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/60bca86c-bee6-4f76-ac38-6a48cef5f819" method="POST" className="flex flex-col w-full md:w-1/2">
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Insira o seu nome" 
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" 
                        />

                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Insira o seu email" 
                            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" 
                        />

                        <textarea 
                            name="message" 
                            rows="10"
                            placeholder="Insira a sua mensagem" 
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        ></textarea>

                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}