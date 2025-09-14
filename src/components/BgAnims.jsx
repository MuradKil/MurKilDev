import { useEffect, useRef } from "react";

export default function BgAnimation({ className = "", style = {}, count = 14 }) {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    function setCanvasSize() {
      const dpr = window.devicePixelRatio || 1;
      const width = wrapper.offsetWidth;
      const height = wrapper.offsetHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const ctx = canvas.getContext("2d");
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }

    setCanvasSize();

    const ctx = canvas.getContext("2d");
    const particlesArray = [];

    class Particle {
      constructor() {
        // Начинаем с правой стороны
        this.x = wrapper.offsetWidth + Math.random() * 100; // Добавляем случайное смещение
        this.y = Math.random() * wrapper.offsetHeight;
        this.size = Math.random() * 16 + 24;
        this.speed = Math.random() * 1 + 0.5; // Скорость движения влево
        this.color = "rgba(255,255,255,0.5)";
        this.radius = 6;
      }

      update() {
        // Двигаемся только влево
        this.x -= this.speed;

        // Если частица ушла за левый край - возвращаем её справа
        if (this.x + this.size < 0) {
          this.x = wrapper.offsetWidth + Math.random() * 100;
          this.y = Math.random() * wrapper.offsetHeight;
        }
      }

      draw() {
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(this.x, this.y, this.size, this.size, this.radius);
        } else {
          ctx.moveTo(this.x + this.radius, this.y);
          ctx.lineTo(this.x + this.size - this.radius, this.y);
          ctx.quadraticCurveTo(this.x + this.size, this.y, this.x + this.size, this.y + this.radius);
          ctx.lineTo(this.x + this.size, this.y + this.size - this.radius);
          ctx.quadraticCurveTo(this.x + this.size, this.y + this.size, this.x + this.size - this.radius, this.y + this.size);
          ctx.lineTo(this.x + this.radius, this.y + this.size);
          ctx.quadraticCurveTo(this.x, this.y + this.size, this.x, this.y + this.size - this.radius);
          ctx.lineTo(this.x, this.y + this.radius);
          ctx.quadraticCurveTo(this.x, this.y, this.x + this.radius, this.y);
        }
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    function init() {
      particlesArray.length = 0;
      for (let i = 0; i < count; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, wrapper.offsetWidth, wrapper.offsetHeight);
      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
      setCanvasSize();
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [count]);

  return (
    <div
      ref={wrapperRef}
      className={`absolute inset-0 ${className}`}
      style={style}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          background: "transparent",
        }}
      />
    </div>
  );
}