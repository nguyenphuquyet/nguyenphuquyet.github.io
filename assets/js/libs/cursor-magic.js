/*NGUYENPHUQUYET.CN*/ const styleElement = document.createElement("style");
document.head.appendChild(styleElement);
const styleSheet = styleElement.sheet;
styleSheet.insertRule(":root { --glow-rgb: 239 42 201; }", 0),
  styleSheet.insertRule(
    ".glow-point { position: absolute; box-shadow: 0rem 0rem 1.2rem 0.6rem rgb(var(--glow-rgb)); pointer-events: none; }",
    1,
  ),
  styleSheet.insertRule(
    ".star { position: absolute; z-index: 2; color: white; font-size: 1rem; animation-duration: 1500ms; animation-fill-mode: forwards; pointer-events: none; }",
    2,
  ),
  styleSheet.insertRule(
    "@keyframes fall-1 { 0% { transform: translate(0px, 0px) rotateX(45deg) rotateY(30deg) rotateZ(0deg) scale(0.25); opacity: 0; } 5% { transform: translate(10px, -10px) rotateX(45deg) rotateY(30deg) rotateZ(0deg) scale(1); opacity: 1; } 100% { transform: translate(25px, 200px) rotateX(180deg) rotateY(270deg) rotateZ(90deg) scale(1); opacity: 0; } }",
    3,
  ),
  styleSheet.insertRule(
    "@keyframes fall-2 { 0% { transform: translate(0px, 0px) rotateX(-20deg) rotateY(10deg) scale(0.25); opacity: 0; } 10% { transform: translate(-10px, -5px) rotateX(-20deg) rotateY(10deg) scale(1); opacity: 1; } 100% { transform: translate(-10px, 160px) rotateX(-90deg) rotateY(45deg) scale(0.25); opacity: 0; } }",
    4,
  ),
  styleSheet.insertRule(
    "@keyframes fall-3 { 0% { transform: translate(0px, 0px) rotateX(0deg) rotateY(45deg) scale(0.5); opacity: 0; } 15% { transform: translate(7px, 5px) rotateX(0deg) rotateY(45deg) scale(1); opacity: 1; } 100% { transform: translate(20px, 120px) rotateX(-180deg) rotateY(-90deg) scale(0.5); opacity: 0; } }",
    5,
  );
let start = new Date().getTime();
const originPosition = { x: 0, y: 0 },
  last = {
    starTimestamp: start,
    starPosition: originPosition,
    mousePosition: originPosition,
  },
  config = {
    starAnimationDuration: 1500,
    minimumTimeBetweenStars: 250,
    minimumDistanceBetweenStars: 75,
    glowDuration: 75,
    maximumGlowPointSpacing: 10,
    colors: ["249 146 253", "252 254 255"],
    sizes: ["1.4rem", "1rem", "0.6rem"],
    animations: ["fall-1", "fall-2", "fall-3"],
  };
let count = 0;
const rand = (t, e) => Math.floor(Math.random() * (e - t + 1)) + t,
  selectRandom = (t) => t[rand(0, t.length - 1)],
  withUnit = (t, e) => `${t}${e}`,
  px = (t) => withUnit(t, "px"),
  ms = (t) => withUnit(t, "ms"),
  calcDistance = (t, e) => {
    let a = e.x - t.x,
      o = e.y - t.y;
    return Math.sqrt(Math.pow(a, 2) + Math.pow(o, 2));
  },
  calcElapsedTime = (t, e) => e - t,
  appendElement = (t) => document.body.appendChild(t),
  removeElement = (t, e) => setTimeout(() => document.body.removeChild(t), e),
  createStar = (t) => {
    let e = document.createElement("span"),
      a = selectRandom(config.colors);
    (e.className = "star fa-solid fa-sparkle"),
      (e.style.left = px(t.x)),
      (e.style.top = px(t.y)),
      (e.style.fontSize = selectRandom(config.sizes)),
      (e.style.color = `rgb(${a})`),
      (e.style.textShadow = `0px 0px 1.5rem rgb(${a} / 0.5)`),
      (e.style.animationName = config.animations[count++ % 3]),
      (e.style.starAnimationDuration = ms(config.starAnimationDuration)),
      appendElement(e),
      removeElement(e, config.starAnimationDuration);
  },
  createGlowPoint = (t) => {
    let e = document.createElement("div");
    (e.className = "glow-point"),
      (e.style.left = px(t.x)),
      (e.style.top = px(t.y)),
      appendElement(e),
      removeElement(e, config.glowDuration);
  },
  determinePointQuantity = (t) =>
    Math.max(Math.floor(t / config.maximumGlowPointSpacing), 1),
  createGlow = (t, e) => {
    let a = calcDistance(t, e),
      o = determinePointQuantity(a),
      s = (e.x - t.x) / o,
      n = (e.y - t.y) / o;
    Array.from(Array(o)).forEach((e, a) => {
      let o = t.x + s * a,
        i = t.y + n * a;
      createGlowPoint({ x: o, y: i });
    });
  },
  updateLastStar = (t) => {
    (last.starTimestamp = new Date().getTime()), (last.starPosition = t);
  },
  updateLastMousePosition = (t) => (last.mousePosition = t),
  adjustLastMousePosition = (t) => {
    0 === last.mousePosition.x &&
      0 === last.mousePosition.y &&
      (last.mousePosition = t);
  },
  handleOnMove = (t) => {
    let e = { x: t.clientX, y: t.clientY };
    adjustLastMousePosition(e);
    let a = new Date().getTime(),
      o =
        calcDistance(last.starPosition, e) >=
        config.minimumDistanceBetweenStars,
      s =
        calcElapsedTime(last.starTimestamp, a) > config.minimumTimeBetweenStars;
    (o || s) && (createStar(e), updateLastStar(e)),
      createGlow(last.mousePosition, e),
      updateLastMousePosition(e);
  };
(window.onmousemove = (t) => handleOnMove(t)),
  (window.ontouchmove = (t) => handleOnMove(t.touches[0])),
  (document.body.onmouseleave = () => updateLastMousePosition(originPosition));
