import LoginForm from "../../components/LoginForm/LoginForm";


export default function LoginPage ({ setUser }) {

    return (
        <main>
            <h1>LoginPage</h1>
            <LoginForm setUser={ setUser } />

        </main>

    );
}