"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          username,
          password,
        }
      );

      const timestamp = Date.now();

      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("token_timestamp", timestamp.toString());
      router.push("/dashboard");
    } catch {
      setError("Credenciais inválidas.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-[80%] relative">
      <div className="mb-4">
        <label
          className="block text-sm font-medium mb-2 text-gray-200"
          htmlFor="username"
        >
          Usuário
        </label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="off"
          className="bg-transparent w-full text-white p-2 border rounded border-gray-500 focus:outline-none focus:bg-black focus:border-[#B3961D] hover:border-[#B3961D]"
          required
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-sm font-medium mb-2 text-gray-200"
          htmlFor="password"
        >
          Senha
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Senha do usuário"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-transparent w-full text-white p-2 border rounded border-gray-500 focus:outline-none focus:bg-black  focus:border-[#B3961D] hover:border-[#B3961D]"
          required
        />
      </div>
      {(error || !error) && <p className="text-red-500 mb-4">{error}</p>}
      <button
        type="submit"
        className="bg-transparent border border-gray-500 text-slate-200 p-2 rounded w-[40%] cursor-pointer hover:bg-black hover:text-slate-200 hover:border-[#B3961D]"
      >
        Entrar
      </button>
    </form>
  );
};

export default LoginForm;
