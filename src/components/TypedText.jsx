'use client'; // Для использования хуков в Next.js 13 и новее

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function TypedText() {
  const typedElement = useRef(null); // Для ссылки на DOM-элемент
  const typedInstance = useRef(null); // Для хранения экземпляра Typed.js

  useEffect(() => {
    // Инициализация Typed.js
    typedInstance.current = new Typed(typedElement.current, {
      strings: ['Web Designer', 'Web Developer', 'Front Ent Developer'], // Строки для анимации
      typeSpeed: 50, // Скорость печати
      backSpeed: 30, // Скорость удаления текста
      loop: true, // Повтор текста
    });

    return () => {
      // Очистка экземпляра Typed.js при размонтировании
      typedInstance.current.destroy();
    };
  }, []);

  return (
    <span
      ref={typedElement}
      className="typed-text-output text-xl font-semibold text-white"
    />
  );
}
