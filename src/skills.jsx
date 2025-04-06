import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const InteractiveHero = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Composites = Matter.Composites,
      Common = Matter.Common,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Composite = Matter.Composite,
      Bodies = Matter.Bodies;

    // Create engine and world
    const engine = Engine.create();
    const world = engine.world;

    // Create renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        background: "#1a202c", // Dark background
        wireframes: false, // Disable wireframes for polished look
      },
    });

    Render.run(render);

    // Create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Create HTML div elements
    const skills = ["React", "Material UI", "Tailwind CSS", "Firebase", "JavaScript", "CSS", "HTML", "Git"];
    
    // Create Matter.js bodies and corresponding HTML divs
    const elements = skills.map((skill, index) => {
      const x = 100 + index * 150;
      const y = 200;
      const width = 120;
      const height = 50;

      // Create Matter.js body
      const body = Bodies.rectangle(x, y, width, height, {
        render: {
          visible: false, // Hide the physics body (we'll manage the div position)
        },
      });

      // Create HTML div element
      const divElement = document.createElement("div");
      divElement.textContent = skill;
      divElement.classList.add(
        "absolute",
        "flex",
        "justify-center",
        "items-center",
        "bg-green-400",
        "text-gray-900",
        "rounded-lg",
        "font-bold",
        "text-sm"
      );
      divElement.style.width = `${width}px`;
      divElement.style.height = `${height}px`;
      sceneRef.current.appendChild(divElement);

      // Sync HTML div with Matter.js body position
      Matter.Events.on(engine, "afterUpdate", () => {
        const { x, y } = body.position;
        divElement.style.transform = `translate(${x - width / 2}px, ${y - height / 2}px)`;
      });

      // Return the body to be added to the world
      return body;
    });

    // Add bodies to the world
    Composite.add(world, elements);

    // Add static walls
    Composite.add(world, [
      Bodies.rectangle(window.innerWidth / 2, 0, window.innerWidth, 50, {
        isStatic: true,
      }),
      Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 50, {
        isStatic: true,
      }),
      Bodies.rectangle(0, window.innerHeight / 2, 50, window.innerHeight, {
        isStatic: true,
      }),
      Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 50, window.innerHeight, {
        isStatic: true,
      }),
    ]);

    // Add mouse control for dragging shapes
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false, // Hide the mouse constraint visual
        },
      },
    });

    Composite.add(world, mouseConstraint);

    // Keep the mouse in sync with rendering
    render.mouse = mouse;

    // Adjust viewport to the scene size
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: window.innerWidth, y: window.innerHeight },
    });

    // Cleanup on component unmount
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Matter.World.clear(world);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <div>
      <div
        ref={sceneRef}
        style={{
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      />
      {/* Overlay for text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center text-white pointer-events-none">
        <h1 className="text-4xl md:text-6xl font-bold">
          Interactive Hero Section
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Click and drag shapes to interact with them!
        </p>
      </div>
    </div>
  );
};

export default InteractiveHero;
