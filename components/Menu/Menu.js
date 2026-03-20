import Link from 'next/link';
import Data from '@components/Data';
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";




export default function Menu({ size = 48, strokeWidth = 2 }) {
  const router = useRouter();
  const allData = Data();
  const [open, setOpen] = useState(false);
  const [menuDisplay, setMenuDisplay] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [submenuDisplay, setSubmenuDisplay] = useState(false);
  const ref = useRef();
  const [isSticky, setIsSticky] = useState(false);
  const [offsetTop, setOffsetTop] = useState(0);

  useEffect(() => {
    setOpen(false);
    setOpenSubmenu(false);
    //setOpenSubmenu(false);
  },[router.asPath]);

  useEffect(() => {
    const el = ref.current;

    const rect = el.getBoundingClientRect();
    setOffsetTop(rect.top);

    const handleScroll = () => {
      if (window.scrollY >= rect.top) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offsetTop]);

  const handleOpen = () => {
    setOpen(!open);
    //I guess is doesn't set quick enough to use immediately, treat it like it hasn't been set yet
    if(!open){
      setMenuDisplay(true);
    }
  }

  const handleSubOpen = () => {
    setOpenSubmenu(!openSubmenu);
    //I guess is doesn't set quick enough to use immediately, treat it like it hasn't been set yet
    if(!openSubmenu){
      setSubmenuDisplay(true);
    }
  }


  const handleAnimationEnd = (e) => {
    //if(e.animationname === 'menuOut')
    if (!open) {
      setMenuDisplay(false); // remove from DOM after animation
      if (openSubmenu) {
        setOpenSubmenu(false);
        setSubmenuDisplay(false);
      }
    }
  }

  const handleAnimationEndSub = (e) => {
    //if(e.animationname === 'menuOut')
    console.log(e);
    if (!openSubmenu) {
      setSubmenuDisplay(false); // remove from DOM after animation
    }
  }


  return (
    <>
      {/* Placeholder to prevent layout jump */}
      
        <div className="menuPlaceholder" />
      
      <nav ref={ref}  className={open? 'open menu':'menu'} style={{
          position: isSticky ? "fixed" : "absolute",
          top: isSticky ? 0 : "auto",}}>

        <button onClick={handleOpen} aria-label="Toggle menu" aria-expanded={open} aria-controls='menuContainer'>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" strokeWidth={strokeWidth} strokeLinecap="round" >
            {/* Top line */}
            <line x1="4" y1="7" x2="20" y2="7" style={{
                transformOrigin: "12px 12px",
                transition: "transform 0.3s ease, opacity 0.2s ease",
                transform: open
                  ? "rotate(45deg) translateY(5px)"
                  : "rotate(0deg) translateY(0)",
              }} />

            {/* Middle line */}
            <line x1="4" y1="12" x2="20" y2="12" style={{
                transition: "opacity 0.2s ease",
                opacity: open ? 0 : 1,
              }} />

            {/* Bottom line */}
            <line x1="4" y1="17" x2="20" y2="17" style={{
                transformOrigin: "12px 12px",
                transition: "transform 0.3s ease, opacity 0.2s ease",
                transform: open
                  ? "rotate(-45deg) translateY(-5px)"
                  : "rotate(0deg) translateY(0)",
              }} />
          </svg>
        </button>

        <div className="menuContainer" id="menuContainer" onAnimationEnd={handleAnimationEnd} style={{display: (menuDisplay)? 'block': 'none'}}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/BartonWhite-PublicResume2026.pdf" target="_blank">View my resume</Link></li>
            <li>
              <button onClick={handleSubOpen} className="submenu-toggle" aria-expanded={openSubmenu} aria-controls='subMenuContainer'>
                Projects <div style={{
                  display: 'inline-block',
                  height: "10px",
                  width: "10px",
                  borderBottom: '3px solid currentColor',
                  borderLeft: '3px solid currentColor',
                  transition: 'transform .5s',
                  transform: openSubmenu 
                    ? 'rotate(-225deg)'
                    : 'translate(0px, -3px)  rotate(-45deg)'
                }}></div>
              </button>
              <ul id='subMenuContainer' className={openSubmenu? 'open': undefined} onAnimationEnd={handleAnimationEndSub} style={{display: (submenuDisplay)? 'block': 'none'}}>
                {allData.map((v,i)=>(
                  <li key={i}><Link href={'/project/'+v.slug}>{v.name}</Link></li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
