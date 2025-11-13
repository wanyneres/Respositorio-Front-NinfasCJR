"use client";

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#E8E4D9] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Formulário */}
        <div className="w-full lg:w-1/2 max-w-md">
          <div className="bg-[#2B2B2B] rounded-3xl p-8 shadow-2xl">
            <h1 className="text-white text-3xl font-bold mb-8 text-center">
              CRIE SUA CONTA
            </h1>
            
            <div className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Nome Completo"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Senha"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirmar Senha"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-[#6C5CE7] hover:bg-[#5B4CD6] text-white font-bold py-3 rounded-full transition-colors duration-200 shadow-lg mt-6"
              >
                CRIAR CONTA
              </button>
            </div>
            
            <p className="text-center text-white mt-6 text-sm">
              Já possui uma conta?{' '}
              <a href="#" className="text-[#6C5CE7] hover:text-[#5B4CD6] font-semibold">
                Login
              </a>
            </p>
          </div>
        </div>
        
        {/* Lado direito - Logo e Personagem */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center space-y-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <h1 className="text-7xl font-black text-black tracking-tight">
                STOCK<span className="text-[#C5F542]">.IO</span>
              </h1>
              <div className="absolute -bottom-2 right-2 w-12 h-12 bg-[#C5F542] rounded-lg"></div>
            </div>
          </div>
          
          {/* Área para personagem */}
          <div className="relative w-80 h-[500px] bg-gradient-to-br from-white/30 to-white/10 rounded-3xl border-4 border-dashed border-gray-400/50 flex items-center justify-center backdrop-blur-sm">
            <div className="text-center text-gray-600 p-6">
              <div className="mb-4">
                <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-base font-bold mb-2">Insira sua personagem PNG aqui</p>
              <p className="text-sm text-gray-500">
                Personagem verde com cabelo roxo<br />
                fazendo sinal de paz ✌️
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}