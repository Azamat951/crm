import type { FC } from "react";

const LoginPage: FC = () => {
    function handleFormSubmit() {}
    return (
        <div>
            <h1>Kirish</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>

            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor='telNumber'>Phone:</label>
                    <input type='text' id='login' required />
                    {false && <p>Error</p>}
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' required />
                    {false && <p>Error</p>}
                </div>

                <div>
                    <button type='submit'>
                        {false ? "Sign in..." : "Sign in"}
                    </button>
                </div>
            </form>
        </div>
    );
};
export default LoginPage;
