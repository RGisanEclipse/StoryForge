import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
export default function RevealX(props) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});
    const mainControls = useAnimation();
    useEffect(()=>{
        if(isInView){
            mainControls.start("visible");
        }
    },[isInView])
    return (
    <div ref={ref}className='relative overflow-hidden'>
        <motion.div variants={{
            hidden:{opacity:0, x:75},
            visible: {opacity:1, x:0}
        }}
        initial="hidden"
        animate={mainControls} 
        transition={{duration: 1, delay: 0.25}}
        >
            {props.children}
        </motion.div>
    </div>
  )
}
