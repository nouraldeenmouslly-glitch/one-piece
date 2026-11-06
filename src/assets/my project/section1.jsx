
import { useState, useEffect, useRef } from 'react';
function Section1() {
    
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const Scroll = () => {
      if (sectionRef.current) {
        const topPosition = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (topPosition < windowHeight - 150) {
          setAnimate(true);
        }
      }
    };
    window.addEventListener('scroll', Scroll);
    Scroll();
    return () => window.removeEventListener('scroll', Scroll);
  }, []);

  return (
    <section ref={sectionRef} className={`section-1 ${animate ? 'animate' : ''}`}>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-6 d-flex align-items-center justify-content-center text-center">
            <img src="../content-ima01.png" alt="" />{" "}
            <h2 className="h1 ">
              Different <br />
              demos
            </h2>
          </div>
          <div className="col-md-6 border-start border-1 border-black overflow-hidden">
            <h1
              style={{
                transform: animate ? 'translateX(0%)' : 't',
                transition: 'transform 0.8s ease-out',
              }}
            >
              The easier and quick way to achieve your business goals…
            </h1>
          </div>
        </div>
      </div>
      
    </section>
  );
}
export default Section1;

