// Usamos react-katex para las fórmulas
// El formato \\( ... \\) es para fórmulas inline
// El formato \\[ ... \\] es para fórmulas en bloque
export const ondasEnCuerdaData = {
  title: "Ondas en una Cuerda",
  author: "Héctor Alzate López.", // <-- AÑADE ESTA LÍNEA

  sections: [
    {
      id: "objetivos",
      title: "Objetivos",
      icon: "🎯", // Diana
      content: `
        <p>Para una cuerda con extremos fijos:</p>
        <ul>
          <li>Medir las frecuencias fundamental y de algunos sobretonos.</li>
          <li>Comprobar la fórmula de las frecuencias propias.</li>
        </ul>
      `
    },
    {
      id: "equipo",
      title: "Equipo",
      icon: "🔬", // Microscopio
      content: `
        <ul>
          <li>Vibrador Pasco</li>
          <li>Generador Pasco</li>
          <li>2 varillas 30 cm con soporte</li>
          <li>Tensor con cuerda</li>
          <li>Cuerda de cerca de 1.5 m</li>
          <li>3 cables cortos banana-banana</li>
          <li>Pesa de 50 g</li>
          <li>Regla de 1 m</li>
          <li>2 nueces</li>
        </ul>
        <p><b>Para todo el grupo:</b> 2 balanzas digitales 0.01 g.</p>
        <p><i>Nota: Las cuerdas deben ser de igual grosor y material.</i></p>
      `
    },
    {
      id: "teoria",
      title: "Teoría",
      icon: "🧠", // Cerebro
      content: `
        <p>
          En una cuerda perfectamente flexible (o cuerda ideal), con extremos fijos, de longitud \\(L\\), densidad lineal de masa \\(\\mu\\) y sometida a una tensión<sup>1</sup> \\(T\\), las ondas transversales se propagan con velocidad:
        </p>
        <div class="formula-container">
          \\[v = \\sqrt{T/\\mu}.\\]
        </div>
        <p>
          Suponer una cuerda perfectamente flexible es despreciar su rigidez intrínseca; esto es, se supone que las fuerzas recuperadoras originadas por una deformación del medio se deben únicamente a la tensión. En este caso, si la cuerda destensada se pusiera transversalmente sobre una cuchilla, no habría ningún espacio entre ambas, la cuerda se adaptaría perfectamente a la forma de 
          la cuchilla (Fig. 2.1), \\(\\alpha = 0\\). 
          
          La situación opuesta, también ideal, es la de rigidez absoluta, \\(\\alpha = 90°\\).          
        </p>
        @@IMG(/images/figura-2-1.png, Diagrama de una cuerda sobre una cuchilla, Figura 2.1)@@        
        <p>
          Se denomina frecuencia libre a la frecuencia con la que vibra un sistema sin la presencia de un agente externo. <i>Modo de vibración</i> es la vibración de un sistema con una de sus frecuencias libres. La Fig. 2.2 ilustra los 3 primeros modos de vibración de una cuerda con los extremos fijos; se induce de la figura que \\(L = m \\lambda / 2\\), con \\(m = 1, 2, 3, \\dots\\). Por lo tanto, las longitudes de onda permitidas son \\(\\lambda_m = 2L/m\\), y las frecuencias libres posibles son
        </p>
        <div class="formula-container">
          \\[\\nu_m = \\frac{v}{\\lambda_m} = \\frac{m}{2L} \\sqrt{\\frac{T}{\\mu}}, \\quad m = 1, 2, 3, \\dots\\]
        </div>

        <div class="formula-container">
         \\[\\nu_m = \\frac{v}{\\lambda_m} = \\frac{m}{2L} \\sqrt{\\frac{T}{\\mu}}, \\quad m = 1, 2, 3, \\dots\\]
        </div>

        @@IMG(/images/figura-2-2.png, Tres primeros modos de vibración de una cuerda. (a) Primer armónico o modo fundamental. (b) Segundo armónico o primer sobretono. (c) Tercer armónico o segundo sobretono., Figura 2.2)@@

        <p>
          Un sistema físico puede vibrar libremente con una frecuencia o una superposición de diferentes frecuencias, pertenecientes a su conjunto de frecuencias libres —o frecuencias naturales o propias o normales— de vibración. Para la cuerda ideal este conjunto está determinado por la Ec. 2.2. A la frecuencia mínima libre se le denomina fundamental, a las demás sobretonos. Sólo si este es un número entero \\(m\\) de veces la fundamental, se dice que el sobretono es el armónico de orden \\(m\\). Así, el fundamental es el primer armónico. Según la Ec. 2.2, todos los sobretonos de una cuerda ideal son armónicos, empezando con el primer sobretono o segundo armónico, \\(m = 2\\). Al pulsar una cuerda, por ejemplo de una guitarra, generalmente vibra a la vez con una superposición de armónicos como los que veremos en este laboratorio.
        </p>
        <p>
          Si el sistema está sometido a una fuerza externa \\(F\\), sus vibraciones no tendrán la frecuencia libre \\(\\nu\\) sino la frecuencia de \\(F\\), \\(\\nu_{ext}\\) (subíndice ext: externa). \\(F\\) es quien mantiene las vibraciones, pues el sistema disipa su energía debido a las fricciones presentes y transmisión de energía a la estructura en que se apoye el sistema; estas fugas de energía deben ser iguales a la energía que el agente externo le seda al sistema. O sea que si queremos mantener las vibraciones, el agente debe hacerle un trabajo positivo al sistema, debe haber una transferencia neta positiva de energía por unidad de tiempo: potencia \\(P = \\mathbf{F} \\cdot \\mathbf{v}_p > 0\\), donde \\(v_p\\) es la velocidad de la partícula del sistema sobre la que actúa el agente externo. Para que la potencia sea positiva en todo instante, es necesario que \\(F\\) y \\(v_p\\) estén en fase, y el desfase de cero solo se consigue cuando
        </p>
        <div class="formula-container">
          \\[\\nu_{ext} = \\nu_m.\\]
        </div>
        <p>
          Cuando se presenta la igualdad anterior, se dice que hay resonancia entre la fuerza externa y el modo \\(m\\)-ésimo de vibración del sistema. (Vea la práctica <i>Oscilaciones Forzadas</i> de la guía del laboratorio de Física II).
        </p>
        <p>
          Como \\(v_p = d\\xi/dt\\), \\(v_p\\) tiene la misma frecuencia del desplazamiento \\(\\xi\\).
        </p>
        <p>
          En resumen, cuando la frecuencia de vibración libre del sistema es igual a la del agente externo, \\(\\nu = \\nu_{ext}\\), hay una transferencia neta de energía del agente externo al sistema, y las vibraciones del sistema se hacen muy notables: se presenta resonancia entre el agente externo y el sistema vibrante.
        </p>
        <p>
          Todas las prácticas con ondas elásticas de este curso son sobre vibraciones forzadas y resonancia.
        </p>
        <hr/>
        <p><small>
          <sup>1</sup> <i>En una guitarra al cambiar de traste se cambia \\(L\\), al cambiar de cuerda se cambia \\(\\mu\\), al rotar las clavijas se cambia \\(T\\).</i>
        </small></p>
      `
    },
    {
      id: "ejemplos-calculo",
      title: "Ej. de Cálculo",
      icon: "🧮", // Ábaco
      content: `
        <p>
          El objetivo de estos ejemplos es capacitarlo sobre la forma correcta de hacer y escribir los cálculos. Durante todo el curso deberá aplicar lo aprendido con ellos. Puede repasar los ejemplos que con el mismo fin hay en la práctica <i>Movimiento Armónico Simple</i> de la guía del laboratorio de Física II.
        </p>
        <p>
          Las cantidades primadas significan que se deben expresar con error,<sup>1</sup> (vea el pie de página) y, siguiendo las normas sobre redondeo y cifras significativas. Estudie el apéndice A al respecto, al igual que el apéndice B sobre la forma correcta de escribir las unidades.
        </p>
        <p>
          <i>Los números en los ejemplos son ficticios; usted utilizará valores diferentes durante el experimento.</i>
        </p>
        
        <h4>Ejemplo 2.1</h4>
        <p>
          La longitud vibrante de la cuerda en el modo fundamental fue \\(L' = L \\pm \\Delta L = 0.817 \\pm 0.056 \\text{ m}\\) (Fig. 2.3) y la frecuencia en el generador de ondas \\(\\nu_f = 32 \\pm 1 \\text{ Hz}\\) (subíndice f: fundamental). El primer sobretono se obtuvo con \\(\\nu = 65 \\pm 2 \\text{ Hz}\\). Calcular \\(\\lambda'_f\\), la velocidad de las ondas \\(v'\\) y determinar si el primer sobretono es o no armónico.
        </p>
        <p>
          <b>Solución.</b> \\(\\lambda'_f = 2L' = 2(0.817 \\pm 0.056) = 1.634 \\pm 0.112\\). Como el error se suele escribe con máximo dos cifras significativas, 0.112 se redondea a 0.11, con lo que \\(\\lambda'_f\\) quedaría igual a \\(1.634 \\pm 0.11\\); sin embargo, como el valor central A solo tiene sus cifras significativas hasta la posición de la última cifra significativa del error, y esta se encuentra en la posición de las centésimas, es necesario redondear A a 1.63, con lo que el resultado final se escribe como
        </p>
        <div class="formula-container">\\[\\lambda'_f = 1.63 \\pm 0.11 \\text{ m}.\\]</div>
        <p>La velocidad de las ondas, utilizando los datos del modo fundamental, es</p>
        <div class="formula-container">\\[v' = \\lambda'_f \\nu'_f = (1.63 \\pm 0.11)(32 \\pm 1) \\approx 1.63 \\times 32 \\pm 52.16 \\left( \\frac{0.11}{1.63} + \\frac{1}{32} \\right)\\]</div>
        <div class="formula-container">\\[v' \\approx 52.16 \\pm 5.15 \\approx 52.2 \\pm 5.2 \\text{ m/s}.\\]</div>
        <p>Para saber si el primer sobretono es o no un armónico es necesario hallar el cociente \\(\\nu / \\nu_f\\):</p>
        <div class="formula-container">\\[\\frac{\\nu'}{\\nu'_f} = \\frac{65 \\pm 2}{32 \\pm 1} = \\frac{65}{32} \\pm 2.031 \\left( \\frac{2}{65} + \\frac{1}{32} \\right)\\]</div>
        <div class="formula-container">\\[\\frac{\\nu'}{\\nu'_f} \\approx 2.031 \\pm 0.126 \\approx 2.031 \\pm 0.13 \\approx 2.03 \\pm 0.13.\\]</div>
        <p>
          Según esto, hallamos que dicho cociente está en el intervalo \\((2.03 - 0.13, 2.03 + 0.13) = (1.90, 2.16)\\). Puesto que el valor posible del cociente está dentro de un intervalo de ancho \\(2 \\times 0.13 = 0.26\\) centrado en el número \\(2.03 \\approx 2\\) (y muy alejado de otros enteros), podemos afirmar con un bajo margen de error que el primer sobretono es el armónico de orden 2.
        </p>
        
        <h4>Ejemplo 2.2</h4>
        <p>Mostramos algunos ejemplos basados en las normas resaltadas con letra negrilla en el ejemplo anterior. Inicialmente, en cada numeral, se da un número con su error, que puede ser la lectura en la pantalla de una calculadora; después se da la forma correcta de escribirlos (subrayada) y algunos comentarios. Vea la regla 3 sobre redondeo en el apéndice A, p. 88.</p>
        <ul>
          <li>(a) \\(125.767 \\pm 1.5521 \\approx 125.767 \\pm 1.6 \\approx \\underline{125.8 \\pm 1.6}\\)</li>
          <li>(b) \\(876256.5 \\pm 165.32 \\approx 876256.5 \\pm 170 \\approx \\underline{876260 \\pm 170 \\text{ s}}\\)<br>
          Las cifras significativas solo van hasta la posición de las centenas, resaltadas en negrilla; los ceros en la posición de las unidades no son cifras significativas. Cuando el número es mayor que mil, se prefiere la notación exponencial, siguiendo la regla de que el exponente del valor central y del error deben coincidir: \\(8.763 \\times 10^5 \\pm 0.017 \\times 10^5 \\text{ s} = \\underline{(8.763 \\pm 0.017) \\times 10^5 \\text{ s}}\\).</li>
          <li>(c) \\(0.0003376939 \\pm 0.000000652 \\approx 0.0003376939 \\pm 0.00000065 \\approx \\underline{0.00033769 \\pm 0.00000065}\\)<br>
          Las cifras significativas van hasta la posición de las diezmillonésimas. Cuando el número es menor que una milésima, se prefiere la notación exponencial, y así el anterior número lo reescribimos como<br>
          \\(3.3769 \\times 10^{-4} \\pm 0.0065 \\times 10^{-4} \\text{ m/s} = \\underline{(3.3769 \\pm 0.0065) \\times 10^{-4} \\text{ m/s}}\\).</li>
        </ul>
        <p>En resumen, al escribir un valor numérico primero se redondea el error a dos cifras significativas, y este error nos dice cómo escribir el valor central.</p>
        
        <h4>Criterio de Igualdad</h4>
        <p>
          Consideramos que dos cantidades \\(A\\) y \\(B\\) son iguales, dentro de los márgenes de error experimentales, si los intervalos determinados por los errores de cada una se intersecan. Esto es, si \\(A' = A \\pm \\Delta A\\) y \\(B' = B \\pm \\Delta B\\), decimos que \\(A = B\\) cuando el intervalo \\(I_A = (A - \\Delta A, A + \\Delta A)\\) tiene un segmento en común con el intervalo \\(I_B = (B - \\Delta B, B + \\Delta B)\\).
        </p>
        <hr/>
        <p><small>
          <sup>1</sup> Si \\(A' = A \\pm \\Delta A\\) y \\(B' = B \\pm \\Delta B\\), entonces (a) \\(A' + B' = A + B \\pm (\\Delta A + \\Delta B)\\), (b) \\(A' - B' = A - B \\pm (\\Delta A + \\Delta B)\\), (c) \\(\\frac{A'}{B'} = \\frac{A}{B} \\pm \\frac{A}{B} \\left( \\frac{\\Delta A}{A} + \\frac{\\Delta B}{B} \\right)\\), (d) \\(A'B' = AB \\pm AB \\left( \\frac{\\Delta A}{A} + \\frac{\\Delta B}{B} \\right)\\)
        </small></p>
      `
    },
    {
      id: "procedimiento",
      title: "Procedimiento",
      icon: "🧪", // Tubo de ensayo
      content: `

      @@IMG(/images/figura-2-3.png, Montaje para buscar las resonancias de una cuerda, Figura 2.3)@@
        <p>
          Arme el montaje de la Fig. 2.3. La cuerda debe estar alineada dentro de las poleas y paralela al tensor. La perilla de amplitud del generador póngala en cero, girándola completamente contrarreloj. \\(L\\) es la longitud de la sección ondulante de la cuerda.
        </p>
        
        <h4>2.4.1 Medida de la densidad lineal de masa</h4>
        <p>
          Mida la longitud \\(l' = l \\pm \\Delta l\\) de la cuerda adicional que se le entrega (no debe tener nudos). Aunque la medición se efectúa con una regla con una precisión de 1 mm, el error \\(\\Delta l\\) es mayor que 1 mm puesto que se mide en dos tramos, y la cuerda que está en el tensor aumenta un poco su longitud por la tensión. Aumente a un valor razonable respecto a 1 mm a \\(\\Delta l\\). Mida la masa de la cuerda, \\(m'_c = m_c \\pm \\Delta m_c\\), y calcule \\(\\mu'\\). Dé la respuesta en g/m y kg/m.
        </p>
        
        <h4>2.4.2 Vibraciones Libres</h4>
        <p>
          No prenda aún los aparatos. Pulse la cuerda y déjela vibrar. El experimentador solo le cede parte de su energía a la cuerda, después de soltarla vibra libremente con varias frecuencias dadas por la Ec. 2.2. Predomina el modo fundamental. Observe. No permita que la pesa se balancee.
        </p>
        
        <h4>2.4.3 Vibraciones Forzadas Transversales. Resonancia</h4>
        <blockquote>
          En todas las prácticas, no dude en consultar al profesor cuando lo esperado y lo obtenido difieran notablemente.
        </blockquote>
        <p>
          Enfrentaremos dos sistemas vibrantes a continuación: la cuerda, con su conjunto discreto \\(\\{\\nu_m\\}\\) (Ec. 2.2) de frecuencias propias o libres; y el vibrador, como agente externo a la cuerda que le forzará las vibraciones, con frecuencia \\(\\nu_{ext}\\) variable desde el generador de una forma continua.
        </p>
        <p>
          Moviendo la polea desplazable, utilice la mayor \\(L\\) posible en el tensor.
        </p>
        <p>
          Rote un poco la perilla de amplitud más allá del cero sin pasar, aproximadamente, de 1/20 del total de su recorrido. Prenda el generador. Rotando lentamente la perilla izquierda de frecuencia los cambios de \\(\\nu\\) son de 1 Hz, rotándola rápidamente los cambios son de 4 Hz. Rotando la perilla derecha de frecuencia los cambios son de 0.1 Hz.
        </p>
        <p>
          Para buscar el modo fundamental (Fig. 2.2a) o primera resonancia entre vibrador y cuerda empiece con una \\(\\nu_{ext}\\) de 15 Hz y auméntela lentamente de a 1 Hz (15, 16, 17...) hasta que obtenga el modo fundamental o armónico de orden 1. Es posible que deba disminuir la amplitud desde el generador para que el punto de acople de la cuerda al vibrador sea un nodo y su vibración en este punto sea mínima. Cerciórese que el nodo sí esté en dicho punto y no cerca del punto de acople. Haga ajustes de décimas de Hz con la perilla derecha de frecuencia hasta que la amplitud en el centro de la cuerda sea máxima y la vibraciones sean estables.
        </p>
        <p>
          Determine en qué rango de \\(\\nu\\) la amplitud en el centro de la cuerda parece máxima. El centro de ese rango es \\(\\nu\\) y la mitad del rango es \\(\\Delta \\nu\\); vea el siguiente ejemplo:
        </p>
        <p>
          <b>Ejemplo 2.3</b> Si la amplitud pareció ser máxima entre 28.2 y 28.7 Hz, entonces \\(\\nu = (28.7 + 28.2)/2 = 28.45 \\text{ Hz}\\) y \\(\\Delta \\nu = (28.7 - 28.2)/2 = 0.25 \\text{ Hz}\\), con lo que \\(\\nu' = \\nu \\pm \\Delta \\nu = 28.45 \\pm 0.25 \\text{ Hz}\\). Después de redondear a décimas de Hz, queda \\(\\nu' = 28.4 \\pm 0.2 \\text{ Hz}\\). El error no puede ser menor que 0.1 Hz, pues esta es la precisión del generador de ondas.
        </p>
        <p>
          Aunque la precisión del generador sea 0.1 Hz, este no es el error de \\(\\nu'\\) porque hay errores de apreciación mayores a 0.1 Hz, como acabamos de ver. Algo similar ocurre con la determinación de \\(L' = L \\pm \\Delta L\\): aunque se mida con una regla con una precisión de 1 mm, este tampoco es el error en la medida de \\(L\\): el error \\(\\Delta L\\) se debe aumentar respecto a más de 1 mm, pues no es muy claro donde empieza y donde termina la parte vibrante de la cuerda; determine, razonablemente, un valor para \\(\\Delta L\\). Calcule \\(\\lambda'\\) (vea las figuras 2.2). Halle la velocidad de las ondas para la frecuencia leída, \\(v' = \\lambda'\\nu'\\). Llene la segunda fila (f: fundamental) de la Tabla 2.1, p. 15.
        </p>
        <p>
          Para buscar la próxima resonancia o primer sobretono (Fig. 2.2b) proceda de manera similar a como obtuvo el modo fundamental: aumente la frecuencia; una vez obtenido puede aumentar la amplitud desde el generador. Las vibraciones deben ser estables y con un nodo en el punto de acople de la cuerda al vibrador. Complete la tercera fila de dicha tabla. Obtenga el segundo sobretono y complete la última fila de la misma tabla. Apague el generador.
        </p>
        <p>
          Halle los intervalos experimentales en que están las frecuencias y complete la segunda columna de la Tabla 2.2.
        </p>
        <p>
          Si la velocidad de las ondas depende de la frecuencia, el medio se denomina un <i>medio dispersivo</i>.<sup>1</sup> Halle los intervalos en que está cada una de las velocidades de la Tabla 2.1 y llene la tercera columna de la Tabla 2.2. Si los intervalos se intersecan, podemos afirmar que las velocidades son iguales dentro de los márgenes de error experimentales, y que por lo tanto la cuerda no es dispersiva para esas frecuencias. ¿Es dispersiva la cuerda para las frecuencias utilizadas? (Aplique el criterio de igualdad).
        </p>
        <p>
          ¿Qué relación espera, teóricamente, entre las velocidades para las diferentes frecuencias?
        </p>
        <p>
          Según la Tabla 2.1, ¿son armónicos, y de qué orden, los sobretonos 1 y 2?
        </p>
        
        <h4>Valores Esperados de la Velocidad de las Ondas y de las Frecuencias</h4>
        <p>
          Mida la masa \\(M' = M \\pm \\Delta M\\) que tensiona la cuerda y calcule, con error, la velocidad esperada de propagación de las ondas \\(v_{esp}\\) (subíndice esp = esperado), y la frecuencia de los 3 primeros modos de vibración (Ecs. 2.1 y 2.2. Vea el pie de página o el apéndice A para el error en la raíz cuadrada;<sup>2</sup> \\(g = 9.764 \\text{ m/s}^2\\); exprese la tensión en N).
        </p>
        <p>
          Halle los intervalos esperados de la frecuencia de los 3 tres primeros modos. Aplicando el <i>Criterio de Igualdad</i> definido en la sección Teoría, ¿qué concluye de comparar estos 3 intervalos esperados con los respectivos intervalos experimentales?
        </p>
        <hr/>
        <p><small>
          <sup>1</sup> No diga que, como \\(v = \\lambda \\nu\\), al cambiar la frecuencia cambia la velocidad, y por lo tanto el medio es dispersivo. Aún faltaría analizar qué le pasa a \\(\\lambda\\).<br/>
          <sup>2</sup> \\(\\sqrt{A'} = \\sqrt{A} \\pm \\frac{1}{2} \\frac{\\Delta A}{A} \\sqrt{A}\\). Medellín \\(g=9.764\\) m/s². Como este valor de g se da con 4 cifras significativas, y sus cálculos no tienen más de 3, puede considerar a g sin error.
        </small></p>
      `
    },

    {

      id: "simulacion",
      title: "Simulaciones",
      icon: "🎮", // Mando de videojuego
      content: `
        <h4>Simulación de Onda Estacionaria</h4>
    <p>Utilice los siguientes controles para explorar cómo los diferentes parámetros físicos afectan la forma y el comportamiento de las ondas estacionarias en una cuerda. Observe cómo cambia el número de antinodos (vientres) al variar la frecuencia, la tensión y la densidad de la cuerda.</p>
    @@SIMULACION()@@
    
    <hr class="section-divider" />

    <h4>Simulación de Oscilador Armónico Amortiguado</h4>
    <p>Explore el movimiento de un oscilador armónico simple sometido a una fuerza de rozamiento proporcional a la velocidad. Observe la diferencia en la atenuación de la amplitud al cambiar de fluido y ajuste los parámetros para visualizar los regímenes de oscilación: subamortiguado, críticamente amortiguado y sobreamortiguado.</p>
    @@OSCILADOR()@@

      `

    }





  ]
};