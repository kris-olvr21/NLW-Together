import { Link } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss'
import { Button } from '../components/Button'
/* import { useAuth } from '../hooks/useAuth'; */

export function NewRoom() {
    /* const { user } = useAuth() */

    return (
        <div id="page-auth">
           <aside>
               <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
               <strong>Crie salas de Q&amp;A ao vivo</strong>
               <p>Tire dúvidas da sua audiência em tempo real</p>
           </aside>
           <main>
               <div className="main-content">
                   <img src={logoImg} alt="Logo Letmeask"/>
                   <h2>Criar uma nova sala</h2>
                   <form>
                       <input 
                            type="text" 
                            placeholder="Nome da sala"
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                   </form>
                    
                    <Link to="/">Quer entrar em uma sala existente? Clique aqui</Link> {/* Alteração para melhor acessibilidade */}
               </div>
           </main>
       </div> 
    )
}