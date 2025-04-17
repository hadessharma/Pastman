import React from "react";
import { useState } from "react";

const Home = () => {
    const [method, setMethod] = useState('GET');
    const [url, setUrl] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (event) => {
        console.log({ method, url, body });
    }
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <form onSubmit={handleSubmit} className="">
                    <select className="border rounded-2xl" value={method} onChange={(e) => setMethod(e.target.value)}>
                        {
                            ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'].map((m) => (
                                <option key={m} value={m}>{m}</option>
                        ))
                        }
                    </select>
                </form>
            </div>
        </>
    )
}

export default Home;