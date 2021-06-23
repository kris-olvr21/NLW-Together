import { useState, useEffect, createContext, ReactNode } from "react";
import { auth, firebase } from "../services/firebase";

type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();

  /* Se o usuário já estiver logado, se mantém logado, mesmo atualizando a aplicação */
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => { /* EventListener */
      if(user) {
        const { displayName, photoURL, uid } = user
        
        if(!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })
    /* "Desligamento" do EventListener */
    return() => {
      unsubscribe();
    }
  }, [])

  /* Todas as páginas terão acesso às informações do usuário logado */
  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);
    
    if (result.user) {
      const { displayName, photoURL, uid } = result.user

      if(!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {props.children}
    </AuthContext.Provider>
  );
}