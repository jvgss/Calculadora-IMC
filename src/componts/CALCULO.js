import React, { useState } from "react";
import { CustomInput } from "./input";

const CalculadoraIMC = () => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);
  const [categoria, setCategoria] = useState("");
  const [imagem, setImagem] = useState("");

  const calcularIMC = () => {
    if (peso && altura) {
      const alturaMetros = altura / 100;
      const resultadoIMC = peso / (alturaMetros * alturaMetros);
      setImc(resultadoIMC.toFixed(2));

      if (resultadoIMC < 18.5) {
        setCategoria("Abaixo do peso");
        setImagem(
          "https://img.freepik.com/fotos-gratis/vista-frontal-de-uma-jovem-mulher-com-corpo-em-forma-de-camisa-azul-sorrindo-na-parede-branca_140725-59170.jpg?t=st=1733251017~exp=1733254617~hmac=9e3989fccc1b697e107d6a494e875a1b78f1587de6990e49062856c60dd9a436&w=740"
        );
      } else if (resultadoIMC >= 18.5 && resultadoIMC < 24.9) {
        setCategoria("Peso normal");
        setImagem(
          "https://img.freepik.com/fotos-gratis/mulher-com-abdominais-visiveis-a-fazer-fitness_23-2150165198.jpg?t=st=1733251179~exp=1733254779~hmac=4fbd7eb3b0758c355baedd6f2b433e677b8bc2ff2defd6cfa6d2c6c965cb6d7b&w=740"
        )
      } else if (resultadoIMC >= 25 && resultadoIMC < 29.9) {
        setCategoria("Sobrepeso");
        setImagem(" https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-perdendo-peso_23-2149243018.jpg?t=st=1733251310~exp=1733254910~hmac=3d7a2eb4120beb747713c62f6879eefb1a7120b94b80547278e6a06e0af0c361&w=360")
      } else {
        setCategoria("Obesidade");
        setImagem("https://img.freepik.com/fotos-gratis/tiro-completo-de-mulher-se-exercitando-na-academia_23-2149639223.jpg?t=st=1733251386~exp=1733254986~hmac=7a09cae0dbef1a151e9493e3e095b1f45cc30515f63e86c1618dab73400e91d3&w=740")
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 via-sky-100 to-gray-200 p-6">
      <h1 className="text-4xl font-bold text-gray-700 mb-6">
        Calculadora de IMC
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md space-y-7">
        <CustomInput
          type="number"
          value={peso}
          label="Peso (kg): "
          placeholder=" Digite seu peso"
          onChange={(e) => setPeso(e.target.value)}
        />
        <CustomInput
          type="number"
          value={altura}
          label="Altura (cm):"
          placeholder="Digite sua altura"
          onChange={(e) => setAltura(e.target.value)}
        />
        <button
          onClick={calcularIMC}
          className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-sky-300 mt-4 w-full"
        >
          Calcular IMC
        </button>
      </div>
      {imc && (
        <div className="mt-6 bg-white shadow-md rounded-lg p-4 w-full max-w-md text-center">
          <h3 className="text-xl font-semibold text-gray-700">
            Seu IMC é: <span className="text-blue-600">{imc}</span>
          </h3>
          <img src={imagem} alt={categoria} />

          <p className="text-gray-600 mt-2">
            Categoria: <strong>{categoria}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default CalculadoraIMC;
