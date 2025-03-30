import React, { useEffect } from "react";
import "./index.css";
import ScrollReveal from "scrollreveal";


import { useCart } from "./script"; // Corrigido para importar o hook useCart

const App = () => {
  // Desestruturando o hook useCart para pegar as variáveis e funções necessárias
  const {
    cart,
    cartTotal,
     addToCart,
   // handleCartModal,
    handleCheckout,
    handleAddressChange,
    address,
    removeItemFromCart
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
            className="bg-green-600 px-10 py-1 rounded-lg mt-5"
            id="date-span"
          >
            <span className="text-white font-medium text-[17px]">
              Seg á Dom 18:00 as 22:00
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

      
    <div id="menu" class="lg:w-[80%] w-[98%] mb-[80px] pt-[50px] rounded-1xl">
      <main class="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-12 mx-auto max-w-6xl px-2 mb-16">
        
        <div class="flex gap-2 bg-neutral-900 text-white p-[15px] rounded-1xl">
          <img
            src="./src/images/hamb-1.png"
            alt="Hamburguer Smash"
            class="w-28 h-28 rounded-md hover:scale-110 hover:rotate-2 duration-300"
          />

          <div>
            <p class="font-bold">Smash Burger Deluxe</p>
            <p class="font-sm">
              Pão brioche, hambúrguer suculento, queijo cheddar cremoso, bacon crocante e molho especial
              exclusivo.
            </p>

            <div class="flex items-center gap-2 justify-between mt-3">
              <p class="font-bold text-lg">R$ 21.90</p>
              <button
                class="bg-amber-500 px-5 rounded add-to-cart-btn w-1.5 h-6"
                data-name="Smash Burger Deluxe"
                data-price="21.90"
                onClick={() => addToCart("Smash Burger Deluxe", 21.9)}
              >
                <i class="fa fa-cart-plus text-lg text-white"></i>
              </button>
            </div>
          </div>
        </div>
        

        
        <div class="flex gap-2 bg-neutral-900 text-white p-[15px] rounded-1xl">
          <img
            src="./src/images/hamb-2.png"
            alt="Hamburguer Duplo"
            class="w-28 h-28 rounded-md hover:scale-110 hover:rotate-2 duration-300"
          />

          <div>
            <p class="font-bold">Double Stack Burger</p>
            <p class="font-sm">
              Dois hambúrgueres grelhados, queijo cheddar, cebola caramelizada e molho barbecue caseiro.
            </p>

            <div class="flex items-center gap-2 justify-between mt-3">
              <p class="font-bold text-lg">R$ 24.90</p>
              <button
                class="bg-amber-500 px-5 rounded add-to-cart-btn"
                data-name="Double Stack Burger"
                data-price="24.90"
                onClick={() => addToCart("Double Stack Burger", 24.9)}
              >
                <i class="fa fa-cart-plus text-lg text-white"></i>
              </button>
            </div>
          </div>
        </div>
        

        
        <div class="flex gap-2 bg-neutral-900 text-white p-[15px] rounded-1xl">
          <img
            src="./src/images/hamb-3.png"
            alt="Hamburguer Salad"
            class="w-28 h-28 rounded-md hover:scale-110 hover:rotate-2 duration-300"
          />

          <div>
            <p class="font-bold">Veggie Delight Burger</p>
            <p class="font-sm">
              Hambúrguer vegetal, queijo vegano, alface crocante, tomate e molho de mostarda e mel.
            </p>

            <div class="flex items-center gap-2 justify-between mt-3">
              <p class="font-bold text-lg">R$ 29.90</p>
              <button
                class="bg-amber-500 px-5 rounded add-to-cart-btn"
                data-name="Veggie Delight Burger"
                data-price="29.90"
                onClick={() => addToCart("Veggie Delight Burger", 29.9)}
              >
                <i class="fa fa-cart-plus text-lg text-white"></i>
              </button>
            </div>
          </div>
        </div>
        

        
        <div class="flex gap-2 bg-neutral-900 text-white p-[15px] rounded-1xl">
          <img
            src="./src/images/hamb-4.png"
            alt="Hamburguer da casa"
            class="w-28 h-28 rounded-md hover:scale-110 hover:rotate-2 duration-300"
          />

          <div>
            <p class="font-bold">Burguer da Casa</p>
            <p class="font-sm">
              Hambúrguer artesanal com carne 100% bovina, queijo prato, cebola roxa e molho especial da casa.
            </p>

            <div class="flex items-center gap-2 justify-between mt-3">
              <p class="font-bold text-lg">R$ 30.90</p>
              <button
                class="bg-amber-500 px-5 rounded add-to-cart-btn"
                data-name="Burguer da Casa"
                data-price="30.90"
                onClick={() => addToCart("Burguer da Casa", 30.9)}
              >
                <i class="fa fa-cart-plus text-lg text-white"></i>
              </button>
            </div>
          </div>
        </div>
        

        
        <div class="flex gap-2 bg-neutral-900 text-white p-[15px] rounded-1xl">
          <img
            src="./src/images/hamb-5.png"
            alt="Hamburguer Smash"
            class="w-28 h-28 rounded-md hover:scale-110 hover:rotate-2 duration-300"
          />
        
          <div>
            <p class="font-bold">Smash Burger Crispy</p>
            <p class="font-sm">
              Pão brioche, hambúrguer suculento, queijo cheddar derretido, cebola crocante e molho especial de mostarda.
            </p>
        
            <div class="flex items-center gap-2 justify-between mt-3">
              <p class="font-bold text-lg">R$ 21.90</p>
              <button
                class="bg-amber-500 px-5 rounded add-to-cart-btn"
                data-name="Smash Burger Crispy"
                data-price="21.90"
                onClick={() => addToCart("Smash Burger Crispy", 21.9)}
              >
                <i class="fa fa-cart-plus text-lg text-white"></i>
              </button>
            </div>
          </div>
        </div>
        
        
        
        <div class="flex gap-2 bg-neutral-900 text-white p-[15px] rounded-1xl">
          <img
            src="./src/images/hamb-6.png"
            alt="Hamburguer Duplo"
            class="w-28 h-28 rounded-md hover:scale-110 hover:rotate-2 duration-300"
          />
        
          <div>
            <p class="font-bold">Double Cheese Supreme</p>
            <p class="font-sm">
              Dois hambúrgueres grelhados, queijo cheddar, queijo muçarela derretido, bacon crocante e molho barbecue picante.
            </p>
        
            <div class="flex items-center gap-2 justify-between mt-3">
              <p class="font-bold text-lg">R$ 24.90</p>
              <button
                class="bg-amber-500 px-5 rounded add-to-cart-btn"
                data-name="Double Cheese Supreme"
                data-price="24.90"
                onClick={() => addToCart("Double Cheese Supreme", 24.9)}
              >
                <i class="fa fa-cart-plus text-lg text-white"></i>
              </button>
            </div>
          </div>
        </div>
        
        
        
        <div class="flex gap-2 bg-neutral-900 text-white p-[15px] rounded-1xl">
          <img
            src="./src/images/hamb-7.png"
            alt="Hamburguer Salad"
            class="w-28 h-28 rounded-md hover:scale-110 hover:rotate-2 duration-300"
          />
        
          <div>
            <p class="font-bold">Green Delight Burger</p>
            <p class="font-sm">
              Hambúrguer de quinoa, abacate cremoso, alface crocante, tomate fresco e molho de limão e ervas.
            </p>
        
            <div class="flex items-center gap-2 justify-between mt-3">
              <p class="font-bold text-lg">R$ 29.90</p>
              <button
                class="bg-amber-500 px-5 rounded add-to-cart-btn"
                data-name="Green Delight Burger"
                data-price="29.90"
                onClick={() => addToCart("Green Delight Burger", 29.9)}
              >
                <i class="fa fa-cart-plus text-lg text-white"></i>
              </button>
            </div>
          </div>
        </div>
        
        
        
        <div class="flex gap-2 bg-neutral-900 text-white p-[15px] rounded-1xl">
          <img
            src="./src/images/hamb-8.png"
            alt="Hamburguer da casa"
            class="w-28 h-28 rounded-md hover:scale-110 hover:rotate-2 duration-300"
          />
        
          <div>
            <p class="font-bold">House Special Burger</p>
            <p class="font-sm">
              Hambúrguer artesanal com carne 100% bovina, queijo cheddar, cogumelos salteados e molho secreto da casa.
            </p>
        
            <div class="flex items-center gap-2 justify-between mt-3">
              <p class="font-bold text-lg">R$ 30.90</p>
              <button
                class="bg-amber-500 px-5 rounded add-to-cart-btn"
                data-name="House Special Burger"
                data-price="30.90"
                onClick={() => addToCart("House Special Burger", 30.9)}
              >
                <i class="fa fa-cart-plus text-lg text-white"></i>
              </button>
            </div>
          </div>
        </div>
        
        
      </main>

      <div class="mx-auto flex items-start justify-center max-w-6xl px-2 my-13">
        <h2 id="title" class="font-bold text-white text-3xl uppercase">Bebidas</h2>
      </div>

     
      <div class="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-12 mx-auto max-w-6xl px-2 mb-16" id="menu">
        
        <div class="flex gap-2 w-full bg-neutral-900 text-white p-[15px] rounded-1xl">
          <img
            src="./src/images/refri-1.png"
            alt="Coca lata"
            class="w-28 h-28 rounded-md hover:scale-110 hover:rotate-2 duration-300"
          />

          <div class="w-full">
            <p class="font-bold">Coca-Cola Lata</p>

            <div class="flex items-center gap-2 justify-between mt-3">
              <p class="font-bold text-lg">R$ 6.00</p>
              <button
                class="bg-amber-500 px-5 rounded add-to-cart-btn"
                data-name="Coca-Cola Lata"
                data-price="6.00"
                onClick={() => addToCart("Coca-Cola", 6.0)}
              >
                <i class="fa fa-cart-plus text-lg text-white"></i>
              </button>
            </div>
          </div>
        </div>
       

        
        <div class="flex gap-2 w-full bg-neutral-900 text-white p-[15px] rounded-1xl">
          <img
            src="./src/images/refri-2.png"
            alt="Guaraná lata"
            class="w-28 h-28 rounded-md hover:scale-110 hover:rotate-2 duration-300"
          />

          <div class="w-full">
            <p class="font-bold">Guaraná Lata</p>

            <div class="flex items-center gap-2 justify-between mt-3">
              <p class="font-bold text-lg">R$ 6.00</p>
              <button
                class="bg-amber-500 px-5 rounded add-to-cart-btn"
                data-name="Guaraná Lata"
                data-price="6.00"
                onClick={() => addToCart("Guaraná", 6.0)}
              >
                <i class="fa fa-cart-plus text-lg text-white"></i>
              </button>
            </div>
          </div>
        </div>
       

      </div>
  
    </div>
    

      {/* Cart Modal */}
     





      <div className="relative bg-amber-500 w-full md:h-[70vh] h-[100vh] shadow3 items-center justify-center flex md:flex-row flex-col-reverse p-[20px] pb-[40px]">
  <div id="information_left" className="md:w-[35%] md:h-[80%] w-full">
    <div className="mb-[60px]">
      <h3 className="text-white text-[26px] font-bold uppercase">horário de funcionamento</h3>
      <p className="text-white text-[24px]">Segunda a domingo das 18:00 às 22:00</p>
    </div>
    <div className="mb-[50px]">
      <h3 className="text-white font-bold text-[26px] uppercase">Endereço</h3>
      <p className="text-white cursor-pointer text-[24px]">Rua Dev 10, Bairro Tecnópolis, Campo Grande - MS, 79000-000</p>
    </div>
    <div className="md:w-[190px] flex md:justify-between w-full justify-end">
      <a href="">
        <button className="cursor-pointer shadow2 w-[50px] h-[50px] bg-amber-100 rounded-4xl md:mr-[20px] md:ml-0 ml-[20px] flex justify-center items-center">
          <i className="fab fa-whatsapp text-[30px]"></i>
        </button>
      </a>

      <a href="">
        <button className="cursor-pointer shadow2 w-[50px] h-[50px] bg-amber-100 rounded-4xl md:mr-[20px] md:ml-0 ml-[20px] flex justify-center items-center">
          <i className="fab fa-instagram text-[30px]"></i>
        </button>
      </a>

      <a href="">
        <button className="cursor-pointer shadow2 w-[50px] h-[50px] bg-amber-100 rounded-4xl md:mr-[20px] md:ml-0 ml-[20px] flex justify-center items-center">
          <i className="fab fa-facebook-f text-[30px]"></i>
        </button>
      </a>
    </div>
  </div>
  <div id="information_rigth" className="md:w-[35%] md:h-[80%] md:ml-[100px] w-full">
    <div className="mb-[60px]">
      <h3 className="text-white cursor-pointer text-[26px]">(00) 0 0000-0000</h3>
      <p className="text-white cursor-pointer text-[26px]">email@email.com</p>
    </div>
  </div>
  <img className="hidden md:block w-[350px] h-[300px] absolute right-0 bottom-12" src="/src/images/burguer.png" alt="" />

  <span className="p-[5px] rounded-tr-xl bg-amber-50 absolute left-0 md:bottom-12 bottom-14 text-[14px]" id="copyright">
    &copy; 2025 Lavinea Souza
  </span>
</div>

{/* Modal de Carrinho */}
<div  className="text-black bg-black/60 w-full h-20 fixed top-50
 left-50 z-[99] items-center justify-center flex" id="cart-modal">
  <div id="car" className="bg-white p-5 px-8 py-6 rounded-md min-w-[90%] md:min-w-[600px]">
    <h2 className="text-center font-bold text-2xl mb-2">Meu carrinho</h2>
    <div className="flex justify-between m-2 flex-col">
      {cart.map((item, index) => (
        <div key={index} className="flex justify-between">
          <span>
            {item.name} <br></br> 
            Qtd: {item.quantity}<br></br>
            R${(item.price * item.quantity).toFixed(2)}
          </span>
          <button onClick={() => removeItemFromCart(item.name)}>Remover</button>
        </div>
      ))}
    </div>

    <p className="font-bold">Total: <span id="cart-total">R${cartTotal.toFixed(2)}</span></p>

    <p className="font-bold mt-4">Endereço de entrega:</p>

    <input
      type="text"
      placeholder="Digite seu endereço completo..."
      id="address"
     value={address}
     onChange={handleAddressChange}
      className="w-full border-2 p-1 rounded my-1 border-gray-300"
    />
    <p className="text-red-500 hidden" id="address-warn">
      Digite seu endereço completo!
    </p>

    <div className="flex items-center justify-between mt-5 w-full">
      <button id="close-modal-btn" //onClick={handleCartModal}
      >Fechar</button>
      <button onClick={handleCheckout}
       id="checkout-btn" className="bg-green-500 text-white px-4 py-1 rounded">
        Finalizar Pedido
      </button>
    </div>
  </div>
</div>

{/* Footer */}
<footer className="w-full bg-red-600 md:py-3 py-4 fixed bottom-0 z-40 flex items-center justify-center">
  <button className="flex cursor-pointer items-center md:text-[17px] text-[19px] gap-2 text-white font-bold" id="cart-btn">
    (<span id="cart-count">{cart.length}</span>) Ver carrinho
    <i className="fa fa-cart-plus text-lg text-white"></i>
  </button>
</footer>
      </div>
    
  );
};

export default App;
