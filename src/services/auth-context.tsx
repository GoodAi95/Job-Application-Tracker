import { firebaseAuth } from "@/firebase";
import { createwithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { User } from "@/models/user.model";

interface AuthContextType
{
    curerntUser: User | undefined;
    loading: boolean;
    logIn: (email: string, password: string) => Promise<unknown>;
    signUp: (email: string, password: string) => Promise<unknown>;
    logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: {children: ReactNode})
{
    const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() =>
    {
        return onAuthStateChanged(firebaseAuth, (user: User | undefined) =>
        {
            setCurrentUser(user || undefined);
            setLoading(false);
        });
    });

    return <AuthContext.Provider
            value={(
                loading,
                currentUser,
                logIn: (email: string, password: string) => signInWithEmailAndPassword(firebaseAuth, email, password),
                signUp: (email: string, password: string) => createUserWithEmailAndPassword(firebaseAuth, email, password),
                logOut: () => logOut(firebaseAuth)
            )}>
                
            { children }
         </AuthContext.Provider>
        
}

export const useAuth = () => useContext(AuthContext);