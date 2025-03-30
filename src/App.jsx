
import './App.css'

function App() {
 

  return (
    <>
    <body class="flex items-center flex-col overflow-x-hidden">
    <header
      class="shadow w-full h-[420px] bg-zinc-900 bg-[url('/src/images/bg.jpg')] bg-cover bg-center"
    >
      <div
        class="w-full h-full flex flex-col justify-center text-center items-end pr-[10vw]"
      >
        <h1 class="text-5xl mt-4 mb-2 font-bold text-white">Dev Burguer</h1>

        <span class="text-white font-medium text-[18px]">Rua dev 10, Campo Grande - MS</span>

        <div class="bg-green-600 px-10 py-1 rounded-lg mt-5 " id="date-span">
          <span class="text-white font-medium text-[17px]">Seg á Dom 18:00 as 22:00</span>
        </div>
      </div>
    </header>

    <h2 id="title" class="text-3xl md:text-3x1 font-bold text-center mt-9 mb-6 text-white uppercase">
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
                class="bg-amber-500 px-5 rounded add-to-cart-btn"
                data-name="Smash Burger Deluxe"
                data-price="21.90"
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
              >
                <i class="fa fa-cart-plus text-lg text-white"></i>
              </button>
            </div>
          </div>
        </div>
     

      </div>
    
    </div>
 
          
    <div class="relative bg-amber-500 w-full md:h-[70vh] h-[100vh] shadow3 items-center justify-center flex md:flex-row flex-col-reverse p-[20px] pb-[40px]  ">
      <div id="information_left" class="md:w-[35%] md:h-[80%] w-full  ">
        <div class="mb-[60px]">
          <h3 class="text-white text-[26px] font-bold uppercase">horário de funcionamento</h3>
          <p class="text-white text-[24px] ">Segunda a domingo das 18:00 ás 22:00</p>
        </div>
        <div class=" mb-[50px] ">
          <h3 class="text-white font-bold text-[26px] uppercase ">Endereço</h3>
          <p class="text-white cursor-pointer text-[24px] ">Rua Dev 10, Bairro Tecnópolis, Campo Grande - MS, 79000-000</p>
        </div>
          <div class="md:w-[190px] flex md:justify-between w-full justify-end">
              <a href=""><button class="cursor-pointer shadow2 w-[50px] h-[50px] bg-amber-100 rounded-4xl md:mr-[20px] md:ml-0 ml-[20px]  flex justify-center items-center">
                <i class="fab fa-whatsapp  text-[30px]"></i>
            </button></a>
            
            <a href=""><button class="cursor-pointer shadow2 w-[50px] h-[50px] bg-amber-100 rounded-4xl md:mr-[20px] md:ml-0 ml-[20px] flex justify-center items-center">
                <i class="fab fa-instagram  text-[30px]"></i>
            </button></a>
            
            <a href=""><button class="cursor-pointer shadow2 w-[50px] h-[50px] bg-amber-100 rounded-4xl md:mr-[20px] md:ml-0 ml-[20px]  flex justify-center items-center">
                <i class="fab fa-facebook-f text-[30px]"></i>
            </button></a>
        </div>
      
      </div>
      <div id="information_rigth" class="md:w-[35%] md:h-[80%] md:ml-[100px] w-full ">
        <div class="mb-[60px]">
          <h3 class="text-white cursor-pointer text-[26px]  ">(00) 0 0000-0000</h3>
          <p class="text-white cursor-pointer text-[26px] ">email@email.com</p>
          
        </div>
       
       
      </div>
      <img class="hidden md:block w-[350px] h-[300px] absolute right-0 bottom-12" src="/src/images/burguer.png" alt="">
      </img>
      <span class="p-[5px] rounded-tr-xl bg-amber-50 absolute left-0 md:bottom-12 bottom-14 text-[14px]" id="copyright">
        &copy; 2025 Lavinea Souza
    </span>
      
      </div>
    
    <div
      class="bg-black/60 w-full h-full fixed top-0 left-0 z-[99] items-center justify-center hidden"
      id="cart-modal"
    >
      <div
        class="bg-white P-5 px-8 py-6 rounded-md min-w-[90%] md:min-w-[600px]"
      >
        <h2 class="text-center font-bold text-2xl mb-2">Meu carrinho</h2>

        <div id="cart-items" class="flex justify-between m-2 flex-col"></div>

        <p class="font-bold">Total: <span id="cart-total">0.00</span></p>

        <p class="font-bold mt-4">Endereço de entrega:</p>

        <input
          type="text"
          placeholder="Digite seu endereço completo..."
          id="address"
          class="w-full border-2 p-1 rounded my-1 border-gray-300"
        />
        <p class="text-red-500 hidden" id="address-warn">
          Digite seu endereço completo!
        </p>

        <div class="flex items-center justify-between mt-5 w-full">
          <button id="close-modal-btn">Fechar</button>
          <button
            id="checkout-btn"
            class="bg-green-500 text-white px-4 py-1 rounded"
          >
            Finalizar Pedido
          </button>
        </div>
      
      </div>
      
     
    </div>
   

    

    <footer class="w-full  bg-red-600 md:py-3 py-4 fixed bottom-0 z-40 flex items-center justify-center">
      <button class="flex cursor-pointer items-center md:text-[17px] text-[19px] gap-2 text-white font-bold" id="cart-btn">
        (<span id="cart-count">0</span>) Ver carrinho
        <i class="fa fa-cart-plus text-lg text-white"></i>
      </button>
    </footer>

    <script src="/src/javascripts/script.js"></script>
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/toastify-js"
    ></script>
    <script src="https://unpkg.com/scrollreveal"></script>
  </body>
    </>
  )
}

export default App
