import styles from './Hero.module.scss';
import { useEffect, useRef, useCallback } from "react";


export default function HeroCanvas() {
  const canvasRef = useRef(null);
  const parentRef = useRef(null);



  useEffect(() => {
    const canvas = canvasRef.current;
    const canvasParent = parentRef.current;
    const ctx = canvas.getContext("2d");

    let mobile = window.outerWidth <= 800;
    let animating = false;
    let animationId;

    

    let magnetMin = 2000;
    let magnetMax = 12000;
    let magnet = magnetMin;
    let mouseInterval;

    let mouse = { x: null, y: null };
    let touch = { x: null, y: null, active: false };

    let allDots = [];
    let frame = 0;
    let lastScroll = 0;


    const myName =
      "HI, MY NAME IS BARTON WHITE. I AM A WEB DEVELOPER FROM PORTLAND, OR. "
        .split("");

    function clamp(num, min, max) {
      return num <= min ? min : num >= max ? max : num;
    }

    function lerp(start, end, amt) {
      return (1 - amt) * start + amt * end;
    }

    function resizeCanvas() {
      
      canvas.width = canvasParent.offsetWidth;
        canvas.height = canvasParent.offsetHeight;
    }

    function Dot(x, y, letter, rando) {
      this.x = x;
      this.y = y;
      this.oX = x;
      this.oY = y;
      this.fx = 0;
      this.fy = 0;
      this.letter = letter;
      this.rando = rando;

      this.draw = () => {
        let color = "#ffffff33";
        if (this.rando === 1) color = "#ff000044";
        //else if (this.rando === 2) color = "#ffee0044";
        //else if (this.rando === 3) color = "#8888aa22";

        ctx.fillStyle = color;
        ctx.font = "11px monospace";
        ctx.fillText(this.letter, this.x, this.y);
      };

      this.update = () => {
        if (mouse.x !== null && mouse.y !== null && animating) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          let powerx = this.x - (dx / distance) * (magnet / distance);
          let powery = this.y - (dy / distance) * (magnet / distance);

          this.fx = (this.fx + (this.oX - this.x) / 2) / 2.1;
          this.fy = (this.fy + (this.oY - this.y) / 2) / 2.1;

          this.x = powerx + this.fx;
          this.y = powery + this.fy;
        } else {
          this.x = this.oX;
          this.y = this.oY;
        }

        this.draw();
      };
    }

    function init() {
      //setTimeout(() => handleScroll(), 250);
      allDots = [];
      let xLength = (canvas.width - 20) / 20;
      let yLength = (canvas.height - 5) / 20;
      let k = 0;

      for (let i = 0; i < yLength; i++) {
        for (let j = 0; j < xLength; j++) {
          if (j === 0 && myName[k % myName.length] === " ") k++;
          if (myName[k % myName.length] !== " ") {
            let glitchChars = ["#", "%", "@", "*", "^", "&"];
            let outputChar =
              Math.random() * 6 > 1
                ? myName[k % myName.length]
                : glitchChars[Math.floor(Math.random() * glitchChars.length)];

            let rSeed = Math.floor(Math.random() * myName.length * 2);
            let xJitter = i & 1 ? 15 : 10;

            allDots.push(
              new Dot(j * 20 + xJitter, i * 20 + 15, outputChar, rSeed)
            );
          }
          k++;
        }
      }
    }

    function animate() {
      frame++;
      if (frame > 60) frame = 0;

      if ((frame & 1) !== 1) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        allDots.forEach((dot) => dot.update());
      }

      if (touch.active) {
        console.log('touch');
        mouse.x = touch.x;
        mouse.y = lerp(mouse.y, touch.y, 0.25);
      }

      animationId = requestAnimationFrame(animate);

    }

    // ---- Events ----

    function handleMouseMove(e) {
      mouse.x = e.clientX - canvasParent.offsetLeft;
      mouse.y = e.clientY + window.pageYOffset - canvasParent.offsetTop;
    }

    function handleMouseDown() {
      clearInterval(mouseInterval);
      mouseInterval = setInterval(() => {
        magnet = clamp(magnet + 2000, magnetMin, magnetMax);
      }, 33);
    }

    function handleMouseUp() {
      clearInterval(mouseInterval);
      mouseInterval = setInterval(() => {
        magnet = clamp(magnet - 2000, magnetMin, magnetMax);
      }, 33);
    }

    function handleMouseOut() {
      mouse.x = null;
      mouse.y = null;
    }

    function handleScroll() {
      let mobilebuffer = mobile ? window.outerHeight * 0.25 : 0;

      if (window.scrollY - mobilebuffer <
        canvasParent.offsetHeight + canvasParent.offsetTop) {
        if (!animating) {
          animating = true;
        }
      } else {
        animating = false;
      }
    }

    function handleResize() {
      resizeCanvas();
      init();
    }

    function handleTouchstart(e){
      touch.active = true;
    touch.x = e.touches[0].clientX;
      touch.y = e.touches[0].clientY;
     // mouse.x = e.touches[0].clientX;
      //mouse.y = e.touches[0].clientY;// + window.pageYOffset;
    }
    function handleTouchend(e){
      touch.active = false;
      //console.log(touching);
     // mouse.x = e.touches[0].clientX;
      //mouse.y = e.touches[0].clientY;// + window.pageYOffset;
    }
    function handleTouchmove(e){
      touch.x = e.touches[0].clientX;
      touch.y = e.touches[0].clientY;
      /*console.log('touchmove');
      mouse.x = e.touches[0].clientX;
      //this works as expected but it looks cooler when it doesn't scroll with you
      mouse.y = e.touches[0].clientY;///window.pageYOffset;*/
    }

    

    // ---- Setup ----

    resizeCanvas();
    init();
    animating = true;
    animationId = requestAnimationFrame(animate);
    
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        lastScroll = window.pageYOffset;

      // run your scroll logic here
      handleScroll();

      //animationId = requestAnimationFrame(animate);
      });
    });

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener('touchstart', handleTouchstart);
    window.addEventListener('touchend', handleTouchend);
    window.addEventListener('touchmove', handleTouchmove);
    //window.addEventListener("pageshow", handlePageShow);
    


    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('touchstart', handleTouchstart);
      window.removeEventListener('touchend', handleTouchend);
      window.removeEventListener('touchmove', handleTouchmove);
      //window.removeEventListener("pageshow", handlePageShow);
    };

  }, []);



  return (
    <div className={styles.canvasParent} ref={parentRef} >
      <canvas className={styles.canvas} ref={canvasRef} />
      <h1 className={styles.h1}>
        <small className={styles.small}>Hi, my name is </small>
        BARTON WHITE.
        <small className={styles.small}> I am a web developer from Portland, OR</small>
      </h1>
    </div>
  );
}