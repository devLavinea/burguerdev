import { useState, useEffect } from "react";
import Toastify from "toastify-js"; // Corrigido a importação do Toastify
import "toastify-js/src/toastify.css";

export const useCart = () => {
  const [cart, setCart] = useState([]);
  const [cartModalVisible, setCartModalVisible] = useState(true);
  const [address, setAddress] = useState(""); // Estado para o endereço

  const [addressWarning, setAddressWarning] = useState(false); // Estado para controlar a visibilidade do aviso

  const [cartTotal, setCartTotal] = useState(0);

  // Adiciona item ao carrinho
  const addToCart = (name, price) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.name === name) {
          return { ...item, quantity: item.quantity + 1 }; // Cria um novo objeto com quantity atualizado
        }
        return item;
      });

      // Se o item não existir no carrinho, adicionamos ele
      if (!updatedCart.find((item) => item.name === name)) {
        updatedCart.push({ name, price, quantity: 1 });
      }

      return updatedCart;
    });
  };

  //remover item do carrinho

  const removeItemFromCart = (name) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) => {
          // Se o item encontrado for o que queremos remover
          if (item.name === name) {
            // Se a quantidade for maior que 1, diminui a quantidade
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              // Caso a quantidade seja 1, removemos o item
              return null;
            }
          }
          return item; // Se não for o item, retornamos o item sem modificações
        })
        .filter((item) => item !== null); // Filtra os itens que são null (itens removidos)

      return updatedCart; // Retorna o carrinho atualizado
    });
  };

  //calcula o total
  useEffect(() => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setCartTotal(total);
  }, [cart]);

  // Estado para controlar a visibilidade do modal
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  // Função que alterna o estado do modal
  const handleCartModal = () => {
    setIsCartModalOpen((prev) => !prev); // Alterna a visibilidade do modal
  };

  const [isRestaurantOpen, setIsRestaurantOpen] = useState(false);

  // Função que verifica se o restaurante está aberto ou fechado
  const checkRestaurantOpen = () => {
    const data = new Date();
    const hora = data.getHours();
    return hora >= 18 && hora < 22; // O restaurante está aberto das 18:00 às 22:00
  };

  // UseEffect para definir o status do restaurante
  useEffect(() => {
    const isOpen = checkRestaurantOpen();
    setIsRestaurantOpen(isOpen);
  }, []); // Apenas chama uma vez quando o componente for montado

  // Função para atualizar o endereço
  const handleAddressChange = (e) => {
    setAddress(e.target.value); // Atualiza o endereço
    if (e.target.value.trim() !== "") {
      setAddressWarning(false); // Se o endereço foi preenchido, oculta o aviso
    }
  };

  // Função de finalizar pedido
  const handleCheckout = () => {
    if (!isRestaurantOpen) {
      Toastify({
        text: "Ops, o restaurante está fechado!",
        duration: 4000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#ef4444",
        },
      }).showToast();
      return;
    }

    if (cart.length === 0) {
      console.error("Carrinho está vazio!");
      return;
    }

    if (!address) {
      setAddressWarning(true); // Torna o aviso visível
      console.error("Endereço não fornecido!");
      return;
    }

    // Criando a mensagem com os itens do carrinho
    const cartItems = cart
      .map((item) => {
        return `${item.name}, Quantidade: (${item.quantity}), Preço: R$${item.price} |`;
      })
      .join(" ");

    const message = encodeURIComponent(cartItems);
    const phone = "5574988248014"; // Número do WhatsApp

    // Abrindo o WhatsApp com os detalhes do pedido
    window.open(
      `https://wa.me/${phone}?text=PEDIDO%0A%0A${message}%0AEndereço: ${address}`,
      "_blank"
    );
  };

  return {
    cart,
    cartModalVisible,
    cartTotal,
    addToCart,
    removeItemFromCart, // A função agora remove um item de cada vez
    handleCartModal,
    handleCheckout,
    handleAddressChange,
    isCartModalOpen,
    isRestaurantOpen,
    addressWarning,
  };
};
