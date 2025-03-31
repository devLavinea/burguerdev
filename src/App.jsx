import React, { useEffect } from "react"; 
import "./index.css";
import ScrollReveal from "scrollreveal";

import ProductCardBurguer from "./components/ProductCardBurguers";
import ProductCardDrink from "./components/ProductCardBurguers";
import { useCart } from "./script"; // Corrigido para importar o hook useCart

import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const App = () => {
  // Desestruturando o hook useCart para pegar as variáveis e funções necessárias
  const {
    cart,
    cartTotal,
    addToCart,
    handleCartModal,
    handleCheckout,
    handleAddressChange,
    address,
    removeItemFromCart,
    isCartModalOpen,
    isRestaurantOpen,
    addressWarning
 
  } = useCart();

  useEffect(() => {
    ScrollReveal().reveal("#information_left", {
      origin: "left",
      duration: 1500,
      distance: "20%",
    });

    ScrollReveal().reveal("#title", {
      origin: "top",
      duration: 1500,
      distance: "30%",
    });

    ScrollReveal().reveal("#menu", {
      origin: "top",
      duration: 1500,
      distance: "5%",
    });

    ScrollReveal().reveal("#information_rigth", {
      origin: "right",
      duration: 1500,
      distance: "20%",
    });
  }, []); // O array vazio significa que o efeito será executado apenas uma vez quando o componente for montado.


 

  return (
    <div className="flex items-center flex-col overflow-x-hidden">
      <header className="shadow w-full h-[420px] bg-zinc-900 bg-[url('/src/images/bg.jpg')] bg-cover bg-center">
        <div className="w-full h-full flex flex-col justify-center text-center items-end pr-[10vw]">
          <h1 className="text-5xl mt-4 mb-2 font-bold text-white">
            Dev Burguer
          </h1>
          <span className="text-white font-medium text-[18px]">
            Rua dev 10, Campo Grande - MS
          </span>
          <div
            className={`px-10 py-1 rounded-lg mt-5 ${
              isRestaurantOpen ? "bg-green-600" : "bg-red-600"
            }`}
            id="date-span"
          >
            <span className="text-white font-medium text-[17px]">
              Seg à Dom 18:00 às 22:00
            </span>
          </div>
        </div>
      </header>

      <h2
        id="title"
        className="text-3xl md:text-3x1 font-bold text-center mt-9 mb-6 text-white uppercase"
      >
        Conheça nosso menu
      </h2>

      <div id="menu" className="lg:w-[80%] w-[98%] mb-[80px] pt-[50px] rounded-1xl">
        <main className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-12 mx-auto max-w-6xl px-2 mb-16">
          <ProductCardBurguer
            image="./images/hamb-1.png"
            name="Smash Burger Deluxe"
            description="Pão brioche, hambúrguer suculento, queijo cheddar cremoso, bacon crocante e molho especial exclusivo."
            price="21.90"
            onClick={() => addToCart("smash Burguer Deluxe ", 21.9)}
            
            
          />

          <ProductCardBurguer
            image="./images/hamb-2.png"
            name="Hamburguer Smash"
            description="Pão brioche, hambúrguer suculento, queijo cheddar cremoso, bacon crocante e molho especial
              exclusivo."
            price="21.90"
            onClick={() => addToCart("Hamburguer Smash", 21.9)}
          
          />

          <ProductCardBurguer
            image="./images/hamb-3.png"
            name="Veggie Delight Burger"
            description="Hambúrguer vegetal, queijo vegano, alface crocante, tomate e molho de mostarda e mel."
            price="29.90"
            onClick={() => addToCart("Veggie Delight Burger", 29.9)}
          
          />

          <ProductCardBurguer
            image="./images/hamb-4.png"
            name="Burguer da Casa"
            description="Hambúrguer artesanal com carne 100% bovina, queijo prato, cebola roxa e molho especial da casa."
            price="30.90"
            onClick={() => addToCart("Burguer da Casa", 30.9)}
           
          />

          <ProductCardBurguer
            image="./images/hamb-5.png"
            name="Smash Burger Crispy"
            description="Pão brioche, hambúrguer suculento, queijo cheddar derretido, cebola crocante e molho especial de mostarda."
            price="21.90"
            onClick={() => addToCart("Smash Burger Crispy", 21.9)}
           
          />

          <ProductCardBurguer
            image="./images/hamb-6.png"
            name="Double Cheese Supreme"
            description="Dois hambúrgueres grelhados, queijo cheddar, queijo muçarela derretido, bacon crocante e molho barbecue picante."
            price="24.90"
            onClick={() => addToCart("Double Cheese Supreme", 24.9)}
           
          />

          <ProductCardBurguer
            image="./images/hamb-7.png"
            name="Green Delight Burger"
            description="Hambúrguer de quinoa, abacate cremoso, alface crocante, tomate fresco e molho de limão e ervas."
            price="29.90"
            onClick={() => addToCart("Green Delight Burger", 29.9)}
           
          />

          <ProductCardBurguer
            image="./images/hamb-8.png"
            name="House Special Burger"
            description="Hambúrguer artesanal com carne 100% bovina, queijo cheddar, cogumelos salteados e molho secreto da casa."
            price="30.90"
            onClick={() => addToCart("House Special Burger", 30.9)}
           
          />
        </main>

        <div className="mx-auto flex items-start justify-center max-w-6xl px-2 my-13">
          <h2 id="title" className="font-bold text-white text-3xl uppercase">
            Bebidas
          </h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-12 mx-auto max-w-6xl px-2 mb-16"
          id="menu"
        >
          <ProductCardDrink
            image="./images/refri-1.png"
            name="Coca-Cola lata"
            price="6.00"
            onClick={() => addToCart("Coca-Cola lata", 6.0)}
           
          />

          <ProductCardDrink
            image="./images/refri-2.png"
            name="Guaraná lata"
            price="6.00"
            onClick={() => addToCart("Guaraná lata", 6.0)}
           
          />
        </div>
      </div>

      {/* Cart Modal */}

      <div className="relative bg-amber-500 w-full md:h-[70vh] h-[100vh] shadow3 items-center justify-center flex md:flex-row flex-col-reverse p-[20px] pb-[40px]">
        <div id="information_left" className="md:w-[35%] md:h-[80%] w-full">
          <div className="mb-[60px]">
            <h3 className="text-white text-[26px] font-bold uppercase">
              horário de funcionamento
            </h3>
            <p className="text-white text-[24px]">
              Segunda a domingo das 18:00 às 22:00
            </p>
          </div>
          <div className="mb-[50px]">
            <h3 className="text-white font-bold text-[26px] uppercase">
              Endereço
            </h3>
            <p className="text-white cursor-pointer text-[24px]">
              Rua Dev 10, Bairro Tecnópolis, Campo Grande - MS, 79000-000
            </p>
          </div>
          <div className="md:w-[190px] flex md:justify-between w-full justify-end">
            <a href="">
              <button className="cursor-pointer shadow2 w-[50px] h-[50px] bg-amber-100 rounded-4xl md:mr-[20px] md:ml-0 ml-[20px] flex justify-center items-center">
              <FaWhatsapp className=" text-[25px]"/>
              </button>
            </a>

            <a href="">
              <button className="cursor-pointer shadow2 w-[50px] h-[50px] bg-amber-100 rounded-4xl md:mr-[20px] md:ml-0 ml-[20px] flex justify-center items-center">
              <FaInstagram className=" text-[25px]"/>
              </button>
            </a>

            <a href="">
              <button className="cursor-pointer shadow2 w-[50px] h-[50px] bg-amber-100 rounded-4xl md:mr-[20px] md:ml-0 ml-[20px] flex justify-center items-center">
              <FaFacebook className=" text-[25px]" /> 
              </button>
            </a>
          </div>
        </div>
        <div
          id="information_rigth"
          className="md:w-[35%] md:h-[80%] md:ml-[100px] w-full"
        >
          <div className="mb-[60px]">
            <h3 className="text-white cursor-pointer text-[26px]">
              (00) 0 0000-0000
            </h3>
            <p className="text-white cursor-pointer text-[26px]">
              email@email.com
            </p>
          </div>
        </div>
        <img
          className="hidden md:block w-[350px] h-[300px] absolute right-0 bottom-12"
          src="/src/images/burguer.png"
          alt=""
        />

        <span
          className="p-[5px] rounded-tr-xl bg-amber-50 absolute left-0 md:bottom-12 bottom-14 text-[14px]"
          id="copyright"
        >
          &copy; 2025 Lavinea Souza
        </span>
      </div>

      {/* Modal de Carrinho */}
      {isCartModalOpen && (
      <div
        className="text-black bg-black/60 w-full h-full fixed top-0
 left-0 z-[99] items-center justify-center flex"
        id="cart-modal"
      >
        <div
          id="cart"
          className="bg-white p-5 px-8 py-6 rounded-md min-w-[90%] md:min-w-[600px]"
          
        >
          <h2 className="text-center font-bold text-2xl mb-2">Meu carrinho</h2>
          <div className="flex justify-between m-2 flex-col">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span>
                  {item.name} <br></br>
                  Qtd: {item.quantity}
                  <br></br>
                  R${(item.price * item.quantity).toFixed(2)}
                </span>
                <button className="cursor-pointer" onClick={() => removeItemFromCart(item.name)}>
                  Remover
                </button>
              </div>
            ))}
          </div>

          <p className="font-bold">
            Total: <span id="cart-total">R${cartTotal.toFixed(2)}</span>
          </p>

          <p className="font-bold mt-4">Endereço de entrega:</p>

          <input
            type="text"
            placeholder="Digite seu endereço completo..."
            id="address"
            value={address}
            onChange={handleAddressChange}
            className="w-full border-2 p-1 rounded my-1 border-gray-300"
          />
           <p 
        className={`text-red-500 ${addressWarning ? '' : 'hidden'}`} 
        id="address-warn"
      >
            Digite seu endereço completo!
          </p>

          <div className="flex items-center justify-between mt-5 w-full">
            <button
              id="close-modal-btn" className="cursor-pointer" onClick={handleCartModal}>
        
              Fechar
            </button>
            <button
              onClick={handleCheckout}
              id="checkout-btn"
              className="cursor-pointer bg-green-500 text-white px-4 py-1 rounded"
            
            >
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
      )}

      {/* Footer */}
      <footer className="w-full bg-red-600 md:py-3 py-4 fixed bottom-0 z-40 flex items-center justify-center">
        <button
          className="flex cursor-pointer items-center md:text-[17px] text-[19px] gap-2 text-white font-bold"
          id="cart-btn"
          onClick={handleCartModal}>
       
          (<span id="cart-count">{cart.length}</span>) Ver carrinho
          <i className="fa fa-cart-plus text-lg text-white"></i>
        </button>
      </footer>
    </div>
  
  );
};

export default App;
