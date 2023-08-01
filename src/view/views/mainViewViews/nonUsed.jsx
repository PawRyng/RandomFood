import languageList from "../../translactions/languages.json";
import pl from '../../IMG/pl.png';
import en from '../../IMG/en.png';
import {motion, AnimatePresence} from "framer-motion"

import { useState, useEffect } from "react";

import { Navigate, useLoaderData, useNavigate } from "react-router-dom";

import languages from "../../translactions/mainTranslations.json"

export default function NonUsed() {
    const [language, setLanguage] = useState(window.localStorage.getItem("lang") ? window.localStorage.getItem("lang") : "en")
    const lang = languages[language];
    const navigate = useNavigate();
    const {used} = useLoaderData();
    useEffect(() => {  
      if(used){
        navigate('/');
      }
    });
      const flag = (name, key) => {
    // Determine the flag image based on the language name
    const flagImage = name === 'pl' ? pl : en;
    return (
        <motion.button key={key} className={language === name ? "flags__flag flags__flag--active" : "flags__flag"} onClick={()=> languageHandler(name)} variants={item} whileTap={{scale:1.05}}>
            <img src={flagImage} alt={name} className=""/>
        </motion.button>
    );
      };
  const languageHandler = (name)=>{
    setLanguage(name)
    window.localStorage.setItem("lang", name);
  }
  const nextButtonHandler = () =>{
    window.localStorage.setItem("used", 1);
    navigate('/')
  }

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  const buttonNext = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <div className="non-used">
    <AnimatePresence mode='wait'>
    <motion.div
    className="non-used__title"
            key={language ? language : "empty"}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {lang.title}
          </motion.div>

    </AnimatePresence>
    <motion.div
    className="flags"
    variants={container}
    initial="hidden"
    animate="visible"
  >
      {languageList.languagesList.map((language, key) => flag(language, key))}
    </motion.div>
    <motion.button className={"non-used__next"} onClick={nextButtonHandler} variants={buttonNext} initial="hidden" animate="visible" whileTap={{scale:1.05}}>
      Dalej
        </motion.button>

    </div>
  );
}
