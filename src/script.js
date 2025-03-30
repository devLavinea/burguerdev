import { useState, useEffect } from 'react';
import Toastify from "toastify-js"; // Corrigido a importação do Toastify

export const useCart = () => {
  const [cart, setCart] = useState([]);
  const [cartModalVisible, setCartModalVisible] = useState(true);
  const [address, setAddress] = useState('');
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
      const updatedCart = prevCart.map((item) => {
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
      }).filter((item) => item !== null); // Filtra os itens que são null (itens removidos)
  
      return updatedCart; // Retorna o carrinho atualizado
    });
  };

  

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setCartTotal(total);
  }, [cart]);

  const handleCartModal = () => {
    setCartModalVisible(!cartModalVisible);
  };

  const handleCheckout = () => {
    if (!checkRestaurantOpen()) {
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

    if (cart.length === 0) return;
    if (!address) {
      return;
    }

    const cartItems = cart.map((item) => {
      return `${item.name}, Quantidade: (${item.quantity}), Preço: R$${item.price} |`;
    }).join(" ");

    const message = encodeURIComponent(cartItems);
    const phone = "5574988248014";

    window.open(`https://wa.me/${phone}?text=PEDIDO%0A%0A${message}%0AEndereço: ${address}`, "_blank");
    setCart([]);
  };

  const checkRestaurantOpen = () => {
    const data = new Date();
    const hora = data.getHours();
    return hora >= 18 && hora < 22;
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  return {
    cart,
    cartModalVisible,
    cartTotal,
    addToCart,
    removeItemFromCart,  // A função agora remove um item de cada vez
    handleCartModal,
    handleCheckout,
    handleAddressChange,
  };
};
