// src/components/HtmlRenderer/HtmlRenderer.jsx

import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import Figure from '../Figure/Figure';
import WaveSimulation from '../WaveSimulation/WaveSimulation'; // 1. Importar la simulación
import DampedOscillator from '../DampedOscillator/DampedOscillator'; // 1. Importar el nuevo componente


//inicio de la función processNode
const processNode = (node, key) => {
  // 1. Si es un nodo de ELEMENTO
  if (node.nodeType === 1) {
    const TagName = node.tagName.toLowerCase();
    const voidElements = ['hr', 'br', 'img'];

    if (TagName === 'img-placeholder') {
      const src = node.getAttribute('src');
      const alt = node.getAttribute('alt');
      const caption = node.getAttribute('caption');
      return <Figure key={key} src={`${import.meta.env.BASE_URL}${src.substring(1)}`} alt={alt} caption={caption} />;
    }
    // 2. Añadir el caso para el placeholder de la simulación cuerda
    if (TagName === 'simulation-placeholder') {
      return <WaveSimulation key={key} />;
    }
    // 3. Añadir el caso para el placeholder del oscilador
      if (TagName === 'oscillator-placeholder') {
        return <DampedOscillator key={key} />;
      }



    const props = { key };
    for (const attr of node.attributes) {
    // Corrección definitiva:
    // Si el nombre del atributo es 'class' O 'classname',
    // asignamos su valor a la prop 'className' de React.
    // Para cualquier otro atributo, lo pasamos tal cual.
    if (attr.name === 'class' || attr.name === 'classname') {
        props.className = attr.value;
    } else {
        props[attr.name] = attr.value;
    }
}

    if (voidElements.includes(TagName)) {
      return React.createElement(TagName, props);
    }
    
    const children = Array.from(node.childNodes).map((child, index) => 
      processNode(child, `${key}-${index}`)
    );
    
    return React.createElement(TagName, props, children);
  } 
  // 2. Si es un nodo de TEXTO
  else if (node.nodeType === 3) {
    const text = node.nodeValue || '';
    const regex = /\\(\(|\[)(.*?)\\(\)|\])/g;
    const result = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        result.push(text.substring(lastIndex, match.index));
      }
      
      const bracketType = match[1];
      const mathContent = match[2];
      const Component = (bracketType === '[') ? BlockMath : InlineMath;
      result.push(<Component key={`${key}-math-${lastIndex}`} math={mathContent} />);
      
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      result.push(text.substring(lastIndex));
    }

    return result;
  }
  return null;
};
//Fin de la función processNode

const HtmlRenderer = ({ htmlString }) => {
  if (!htmlString) return null;

  const processedString = htmlString
  .replace(
    /@@IMG\((.*?),(.*?),(.*?)\)@@/g,
    (match, src, alt, caption) => 
      `<img-placeholder src="${src.trim()}" alt="${alt.trim()}" caption="${caption.trim()}"></img-placeholder>`
  )
   .replace(
      /@@SIMULACION\(\)@@/g,
      '<simulation-placeholder></simulation-placeholder>'
    )
    .replace(
      /@@OSCILADOR\(\)@@/g,
      '<oscillator-placeholder></oscillator-placeholder>'
    );
  
  const doc = new DOMParser().parseFromString(
    `<div>${processedString}</div>`, 
    'text/html'
  );
  
  const nodes = Array.from(doc.body.firstChild.childNodes);
  
  return <>{nodes.map((node, index) => processNode(node, `root-${index}`))}</>;
};

export default HtmlRenderer;