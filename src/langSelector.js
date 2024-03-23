const langSelector = document.querySelector('.langSelector');
const toTranslate = document.querySelectorAll('[data-section]');

langSelector.addEventListener('click', (e) => {
  e.preventDefault();

  const languages = Array.from(langSelector.children);

  languages.forEach((lang) => {
    if (!lang.classList.contains('language_selected')) {
      lang.classList.add('language_selected');
      changeLanguage(lang.firstElementChild.dataset.language);
    } else {
      lang.classList.remove('language_selected');
    }
  });
});

export const changeLanguage = (language) => {
  for (const target of toTranslate) {
    const section = target.dataset.section;
    const value = target.dataset.value;
    language === 'es'
      ? (target.innerHTML = es[`${section}`][`${value}`])
      : (target.innerHTML = en[`${section}`][`${value}`]);
  }
};

export const es = {
  navigation: {
    first_Link: 'INICIO',
    second_Link: 'MISIÓN',
    third_Link: 'SERVICIOS',
    fourth_Link: 'CONTACTO',
  },
  social: {
    title: 'Redes',
  },
  partners: {
    title: 'Socios',
    first_Link: 'Link',
    second_Link: 'Link',
    third_Link: 'Link',
    fourth_Link: 'Link',
  },
  home: {
    title:
      'Somos MAIC, un aliado estratégico en servicios de consultoría de seguros Marítimos. ',
    description:
      'Aplicando las mejores prácticas de la industria, MAIC ayuda a terminales marítimos, así como a empresas navieras, a mejorar sus capacidades de gestión.La empresa se enfoca en promover la excelencia para garantizar la seguridad, sostenibilidad y eficiencia operativa dentro del sector marítimo.',
  },
  primary_btn: {
    title: 'Descargar Informe',
  },
  secondary_btn: {
    title: 'Más Información',
  },
  about: {
    title: 'Nuestra misión, transformar la industria.',
    description:
      'Somos una empresa de aseguramiento marítimo dedicada a la excelencia en servicios de consultoría y capacitación. Fundada en 2020, MAIC ha ido ganando la confianza en la industria marítima. A lo largo de los años, hemos forjado sólidas asociaciones con destacadas empresas navieras, terminales marítimos y entidades reguladoras, ganando una reputación de confiabilidad, integridad e innovación. Con un compromiso de mantenernos a la vanguardia de las tendencias y tecnologías emergentes, MAIC continúa evolucionando, ofreciendo soluciones de vanguardia que satisfacen las cambiantes necesidades de nuestros clientes en un panorama marítimo en constante cambio. Desde nuestra fundación hasta el día de hoy, nuestra dedicación inquebrantable a la excelencia ha sido la piedra angular de nuestro éxito, impulsándonos a elevar continuamente el estándar de la industria y las mejores prácticas. En MAIC, nos especializamos en proporcionar soluciones integrales adaptadas a las necesidades únicas de las empresas marítimas en todo el mundo. Nuestro equipo de expertos aporta amplios conocimientos y experiencia en la industria a cada proyecto, asegurando que nuestros clientes reciban el más alto nivel de apoyo y orientación. Ya sea optimizando la eficiencia operativa, mejorando los protocolos de seguridad o promoviendo iniciativas de sostenibilidad, MAIC se compromete a ayudar a nuestros clientes a alcanzar sus objetivos. Con un enfoque en la innovación y la mejora continua, capacitamos a las organizaciones para que naveguen por las complejidades de la industria marítima con confianza y éxito. Confíe en MAIC para obtener experiencia confiable y soluciones transformadoras que impulsen su negocio hacia adelante en las olas del éxito.',
  },

  services: {
    title: 'Explore nuestra gama de servicios',
    description:
      'Entendemos lo diversas que son las necesidades de los operadores marítimos. Es por eso que ofrecemos una gama completa de servicios diseñados para satisfacer las diversas necesidades de los operadores marítimos, garantizando seguridad, cumplimiento y excelencia operativa.',
  },
  consultancy: {
    title: 'Consultoría Especializada',
    description:
      'Constituye la piedra angular de sus ofertas, brindando asesoramiento experto y orientación sobre aspectos intrincados de las operaciones marítimas. Desde el cumplimiento normativo hasta la evaluación de riesgos y la gestión de la calidad, estos consultores aprovechan su profundo conocimiento de la industria para abordar los desafíos específicos enfrentados por los clientes, ofreciendo soluciones personalizadas para un crecimiento sostenible y un rendimiento mejorado.',
    sub_title: 'Consultoría',
    sub_description:
      'Nuestra consultoría especializada implica ofrecer orientación y apoyo experto para garantizar la seguridad, cumplimiento y eficiencia de las operaciones marítimas. Estas consultorías poseen un profundo conocimiento de las regulaciones internacionales, estándares de la industria y mejores prácticas relacionadas con la seguridad marítima, gestión de riesgos y aseguramiento de calidad. Trabajan en estrecha colaboración con empresas navieras, operadores offshore y organizaciones marítimas para evaluar y mitigar los riesgos asociados con las operaciones de buques, mantenimiento y gestión de tripulaciones. Desde la realización de auditorías e inspecciones hasta el desarrollo de estrategias de gestión de riesgos adaptadas y la provisión de programas de capacitación, los consultores especializados en aseguramiento marítimo desempeñan un papel crucial en la protección de activos, la preservación del medio ambiente y la promoción de prácticas sostenibles dentro de la industria marítima. Su experiencia ayuda a los clientes a navegar por marcos regulatorios complejos, optimizar el rendimiento y mantener los más altos estándares de seguridad y excelencia operativa en el mar.',
  },
  training: {
    title: 'Entrenamiento de Personal',
    description:
      'Diseñado para dotar al personal de habilidades y conocimientos esenciales para navegar con confianza por las complejidades de la industria marítima. A través de talleres interactivos, ejercicios de simulación y sesiones de capacitación práctica, los participantes obtienen conocimientos prácticos sobre protocolos de seguridad, procedimientos de respuesta a emergencias y requisitos regulatorios, fomentando una cultura de mejora continua y cumplimiento.',
    sub_title: 'Capacitaciones',
    sub_description:
      'Servicios integrales de formación adaptados a las necesidades específicas de los operadores marítimos, miembros de la tripulación y personal en tierra. Estos programas de formación abarcan una amplia gama de temas esenciales para promover la seguridad, el cumplimiento y la eficiencia operativa en la industria marítima. Los cursos pueden incluir procedimientos de seguridad en buques, entrenamiento en respuesta a emergencias, cumplimiento normativo marítimo, evaluación y gestión de riesgos, conservación del medio ambiente y sistemas de gestión de calidad. Además, se puede ofrecer formación especializada para roles como inspectores de buques, oficiales de seguridad y gerentes de cumplimiento normativo. A través de talleres interactivos, ejercicios de simulación y sesiones prácticas de formación, los participantes adquieren habilidades prácticas, conocimientos y confianza para enfrentar eficazmente los desafíos y mitigar los riesgos en sus operaciones diarias. Al invertir en servicios de formación de una empresa de aseguramiento marítimo, las organizaciones pueden mejorar su cultura de seguridad, mejorar el rendimiento y garantizar el cumplimiento de los estándares y regulaciones de la industria.',
  },
  management: {
    title: 'Optimización de la Gestión',
    description:
      'Este paquete de cursos está dirigido a capacitar a líderes y gerentes con estrategias y técnicas avanzadas para supervisar actividades de aseguramiento de manera efectiva. Cubriendo temas como gestión de riesgos, planificación estratégica y optimización operativa, estos cursos permiten a los gerentes impulsar el crecimiento organizacional, fomentar una cultura de seguridad y garantizar el cumplimiento de los estándares de la industria, lo que finalmente conduce a una mejora del desempeño y un éxito sostenido en el sector marítimo.',
    sub_title: 'Optimización de la gestión',
    sub_description:
      'Nuestro curso proporciona a los participantes los conocimientos y habilidades avanzadas necesarios para liderar y supervisar eficazmente las actividades de aseguramiento dentro de las operaciones marítimas. Cubriendo temas como gestión de riesgos, cumplimiento normativo, aseguramiento de calidad y protocolos de seguridad, este curso dota a los gerentes con las herramientas para optimizar el rendimiento operativo mientras mitigan posibles riesgos y aseguran el cumplimiento de los estándares de la industria. Los participantes aprenden técnicas de planificación estratégica, mejores prácticas en gestión operativa y métodos para fomentar una cultura de seguridad y cumplimiento dentro de sus organizaciones. A través de estudios de caso, ejercicios prácticos y discusiones interactivas, los participantes obtienen información sobre tendencias de la industria, tecnologías emergentes y cambios regulatorios, lo que les permite tomar decisiones informadas y promover iniciativas de mejora continua dentro del sector de aseguramiento marítimo.',
  },
  contact: {
    title: 'Contacto',
    email: 'Correo Electrónico',
    email_description:
      'Para consultas, asesoramiento o para obtener más información sobre nuestros servicios, póngase en contacto con nosotros por correo electrónico.',
    phone: 'Teléfono',
    phone_description:
      'No dude en llamarnos conocer más sobre cómo podemos ayudar a su organización a alcanzar la seguridad, el cumplimiento y la excelencia operativa en operaciones marítimas. Estamos aquí para apoyarlo en cada paso del camino.',
    office: 'Nuestra sucursal',
    office_description:
      'Si desea visitar nuestras oficinas, le damos una cálida bienvenida para que programe una cita. Nuestra oficina está convenientemente ubicada en Buenos Aires. Esperamos con interés reunirnos con usted y discutir cómo podemos colaborar para alcanzar el éxito en la industria marítima.',
  },
  footer: {
    suscribe: 'Suscríbase',
    suscribe_description:
      '¡Suscríbase ahora! ¡Esté al tanto de las últimas actualizaciones del sector, reciba contenido exclusivo y ofertas especiales!',
    btn_title: 'Enviar',
  },
  faq: {
    title: 'FAQs',
    q_one: 'Qué es Marine Assurance?',
    q_two: 'Qué hace un Consultor Marítimo?',
    q_three: 'Cuál es el proceso de garantía?',
    q_four: 'Necesito una Consultoría Marítima?',
    close_btn: 'Volver',
    description_one:
      'El Aseguramiento Marítimo se refiere a un conjunto de procesos, procedimientos y prácticas dirigidas a garantizar la seguridad, la protección y la fiabilidad de las operaciones y activos marítimos. Enmarca diversos aspectos como la gestión de riesgos, el cumplimiento normativo, el aseguramiento de calidad y las evaluaciones técnicas específicas de las actividades marítimas. Los componentes clave del aseguramiento marítimo pueden incluir inspecciones regulares de los barcos para verificar el cumplimiento de normas de seguridad, regulaciones y mejores prácticas de la industria. Estas inspecciones cubren aspectos como la integridad del casco, el estado de la maquinaria, el equipo de navegación, el equipo de seguridad y el cumplimiento ambiental, identificación, evaluación y mitigación de los riesgos asociados con las operaciones marítimas. Esto incluye evaluar peligros potenciales como condiciones climáticas adversas, desafíos de navegación, fallos de equipo y errores humanos, e implementar medidas para minimizar su impacto , también incluye la monitorización del cumplimiento de regulaciones nacionales e internacionales que rigen las operaciones marítimas, como SOLAS Convenio Internacional para la Seguridad de la Vida Humana en el Mar, MARPOL Convenio Internacional para la Prevención de la Contaminación por Buques y el Código ISM Código Internacional de Gestión para la Seguridad Operacional. Implementar sistemas de gestión de calidad para mantener altos estándares de operación, mantenimiento y gestión de buques e infraestructura marítima. Esto puede implicar procedimientos para control de documentos, capacitación, auditorías y mejora continua. Desarrollar e implementar planes y procedimientos para responder eficazmente a emergencias en el mar, como incendios, colisiones, vertidos de petróleo o emergencias médicas. Esto incluye capacitación de la tripulación, simulacros y coordinación con las autoridades pertinentes y organizaciones de respuesta. Proporcionar experiencia técnica y apoyo para garantizar la operación segura y eficiente de los activos marítimos. Esto puede implicar evaluaciones de ingeniería, monitoreo del rendimiento, resolución de problemas y planificación de mantenimiento. En general, el aseguramiento marítimo desempeña un papel crucial en la protección de vidas, la preservación del medio ambiente y la garantía de la fiabilidad y eficiencia de las operaciones marítimas en una industria marítima cada vez más compleja y desafiante.',
    description_two:
      'Un consultor marítimo es un profesional que brinda experiencia especializada y asesoramiento dentro de la industria marítima. Su rol puede abarcar una amplia gama de actividades dependiendo de su área de especialización y las necesidades específicas de sus clientes. Aquí se presentan algunas tareas y responsabilidades comunes de los consultores marítimos. Evaluaciones técnicas. Los consultores marítimos pueden realizar evaluaciones técnicas de buques, plataformas offshore, instalaciones portuarias o infraestructuras marítimas. Esto puede implicar evaluar la condición, el rendimiento y el cumplimiento de normas regulatorias, así como identificar áreas de mejora. Gestión de riesgos: Evalúan y gestionan los riesgos asociados con las operaciones marítimas, incluida la navegación, la seguridad, la protección ambiental y el cumplimiento normativo. Los consultores pueden desarrollar planes de gestión de riesgos, realizar evaluaciones de riesgos y recomendar medidas para mitigarlos. Cumplimiento normativo. Los consultores marítimos ayudan a los clientes a navegar por las complejas regulaciones marítimas y garantizar el cumplimiento de estándares internacionales, nacionales y específicos de la industria. Esto puede implicar interpretar regulaciones, realizar auditorías y desarrollar estrategias de cumplimiento. Gestión de proyectos. Pueden asistir en la gestión de proyectos para proyectos de construcción marítima, ingeniería o desarrollo. Esto puede incluir planificación de proyectos, programación, presupuestación, adquisiciones y coordinación de recursos y partes interesadas. Consultoría ambiental. Algunos consultores marítimos se especializan en gestión ambiental y brindan servicios relacionados con la prevención de la contaminación, evaluaciones de impacto ambiental, restauración de hábitats y cumplimiento de regulaciones ambientales como MARPOL. Formación y educación. Pueden desarrollar y ofrecer programas de formación para el personal marítimo sobre temas como procedimientos de seguridad, cumplimiento normativo, conciencia ambiental y habilidades técnicas. Investigación y análisis de mercado. Los consultores marítimos pueden realizar investigación y análisis de mercado para clientes en la industria marítima. Esto puede implicar evaluar tendencias del mercado, identificar oportunidades de negocio y proporcionar información para respaldar la toma de decisiones estratégicas. Apoyo legal. Pueden brindar testimonio de expertos, apoyo en litigios o asistencia con disputas regulatorias y problemas de cumplimiento relacionados con el derecho marítimo. En general, los consultores marítimos desempeñan un papel vital en apoyar la operación segura, eficiente y sostenible de las actividades marítimas al proporcionar asesoramiento experto, asistencia técnica y orientación estratégica a sus clientes.',
    description_three:
      'El Proceso de Aseguramiento Marítimo es un enfoque sistemático para garantizar la seguridad, fiabilidad y cumplimiento de las operaciones y activos marítimos. Si bien los procesos específicos pueden variar según factores como el tipo de operación, los estándares de la industria y los requisitos regulatorios, un típico proceso de aseguramiento marítimo puede incluir los siguientes pasos clave: Proceso de Aseguramiento Marítimo: "Evaluación de Riesgos": "Identificar y evaluar los posibles riesgos asociados con las operaciones marítimas, incluyendo peligros relacionados con la navegación, el clima, el equipo, el personal y factores ambientales. Revisar las regulaciones nacionales e internacionales aplicables, estándares y directrices de la industria para garantizar el cumplimiento de los requisitos relacionados con la seguridad, la protección, la protección ambiental y las prácticas operativas. Desarrollar planes y procedimientos integrales para abordar los riesgos identificados, cumplir con las regulaciones y optimizar el rendimiento operativo. Esto puede incluir planes de respuesta a emergencias, programas de mantenimiento, programas de capacitación y protocolos de auditoría. Implementar las medidas y procedimientos planificados en todos los aspectos de las operaciones marítimas, incluidas las operaciones de buques, actividades de mantenimiento, capacitación de la tripulación y gestión de la documentación. Monitorear y evaluar continuamente la efectividad de las medidas y procedimientos implementados mediante inspecciones regulares, auditorías, monitoreo del rendimiento e informes de incidentes. Identificar áreas de mejora y tomar acciones correctivas según sea necesario. Brindar formación y educación al personal involucrado en las operaciones marítimas para garantizar que tengan los conocimientos, habilidades y conciencia necesarios para desempeñar sus funciones de manera segura y efectiva. Mantener una documentación precisa y actualizada de todos los aspectos del proceso de aseguramiento marítimo, incluyendo evaluaciones de riesgos, informes de cumplimiento, hallazgos de inspección, informes de incidentes y acciones correctivas tomadas. Fomentar una cultura de mejora continua mediante la búsqueda activa de retroalimentación, el análisis de datos de rendimiento y la implementación de medidas para mejorar la seguridad, la fiabilidad y la eficiencia con el tiempo.',
    description_four:
      'Hay varias razones por las cuales podrías necesitar servicios de consultoría en aseguramiento marítimo: Seguridad y Cumplimiento: Los consultores en aseguramiento marítimo ayudan a garantizar que tus operaciones marítimas, embarcaciones e infraestructura cumplan con los estándares de seguridad y las regulaciones pertinentes. Esto es crucial para proteger vidas, prevenir accidentes y evitar penalizaciones legales y regulatorias. Gestión de Riesgos: Las actividades marítimas inherentemente involucran diversos riesgos, incluidos aquellos relacionados con la navegación, el clima, fallas en el equipo y errores humanos. Los consultores en aseguramiento marítimo pueden evaluar estos riesgos, desarrollar estrategias de gestión de riesgos e implementar medidas para mitigarlos, reduciendo la probabilidad de incidentes y su impacto potencial. Optimización de Operaciones: Los consultores pueden proporcionar experiencia para optimizar la eficiencia y efectividad de tus operaciones marítimas. Esto puede incluir mejorar el rendimiento de las embarcaciones, optimizar procesos, reducir el tiempo de inactividad y aumentar la productividad general. Protección Ambiental: Los consultores en aseguramiento marítimo pueden ayudar a minimizar el impacto ambiental de tus operaciones al garantizar el cumplimiento de regulaciones ambientales, implementar medidas de prevención de la contaminación y promover prácticas sostenibles. Experiencia y Conocimiento Especializado: Los consultores en aseguramiento marítimo aportan conocimientos, habilidades y experiencia especializados para abordar los desafíos y complejidades únicas de la industria marítima. Pueden proporcionar conocimientos valiosos, orientación y apoyo adaptados a tus necesidades y circunstancias específicas. Ahorro de Costos: Invertir en servicios de consultoría en aseguramiento marítimo puede conducir en última instancia a ahorros de costos al ayudarte a evitar accidentes costosos, tiempo de inactividad, multas regulatorias y daños reputacionales. Los consultores también pueden identificar oportunidades para eficiencias operativas y optimización que pueden contribuir a ahorros de costos a largo plazo. Tranquilidad: Al involucrar a consultores en aseguramiento marítimo, obtienes tranquilidad sabiendo que tus operaciones marítimas están siendo supervisadas por expertos que priorizan la seguridad, el cumplimiento y la gestión de riesgos. Esto te permite centrarte en tus actividades comerciales principales con confianza. En resumen, los servicios de consultoría en aseguramiento marítimo son esenciales para garantizar la seguridad, el cumplimiento, la eficiencia y la sostenibilidad de las operaciones marítimas, lo que en última instancia contribuye al éxito y la resiliencia de tu negocio en la dinámica industria marítima.',
  },
  copy: {
    description:
      'Sitio Desarrollado por http://mpa.com.es Todos los derechos reservados MAIC &copy; 2024',
  },
  terms: {
    policy: 'Políticas de Privacidad',
    conditions: 'Términos y Condiciones',
    settings: 'Configuración de Cookies',
  },
  cookies: {
    title: 'Configuración de Cookies',
    description:
      'Este sitio web utiliza cookies para asegurar la mejor experiencia para nuestros usuarios. Por favor, indique su preferencia o visite nuestra página de configuración de cookies para mayor información',
    accept: 'Aceptar todas',
    reject: 'Rechazar todas',
    save: 'Guardar Preferencias',
  },
  terms_conditions: {
    title: 'Términos y Condiciones',
    description:
      'Por favor, lea cuidadosamente estos términos y condiciones antes de utilizar [www.marineassuranceic.com] operado por [Centro Internacional de Aseguramiento Marítimo]. Su acceso y uso del servicio están condicionados a su aceptación y cumplimiento de estos términos. Estos términos se aplican a todos los visitantes, usuarios y otras personas que accedan o utilicen el servicio. Al acceder o utilizar el servicio, usted acepta quedar obligado por estos términos. Si no está de acuerdo con alguna parte de los términos, entonces no podrá acceder al servicio. Propiedad Intelectual: El servicio y su contenido original, características y funcionalidad son y seguirán siendo propiedad exclusiva de [Centro Internacional de Aseguramiento Marítimo] y sus licenciantes. El servicio está protegido por derechos de autor, marcas comerciales y otras leyes tanto de [Argentina] como de países extranjeros. Nuestras marcas comerciales y diseño comercial no pueden ser utilizados en conexión con ningún producto o servicio sin el consentimiento previo por escrito de [Centro Internacional de Aseguramiento Marítimo]. Enlaces a Otros Sitios Web: Nuestro servicio puede contener enlaces a sitios web o servicios de terceros que no son propiedad ni están controlados por [Centro Internacional de Aseguramiento Marítimo]. [Centro Internacional de Aseguramiento Marítimo] no tiene control sobre, y no asume responsabilidad alguna por, el contenido, políticas de privacidad o prácticas de cualquier sitio web o servicio de terceros. Usted reconoce y acepta además que [Centro Internacional de Aseguramiento Marítimo] no será responsable ni tendrá obligación directa o indirecta, por cualquier daño o pérdida causada o que se suponga causada por o en conexión con el uso o dependencia de dicho contenido, bienes o servicios disponibles en o a través de dichos sitios web o servicios. Le recomendamos encarecidamente que lea los términos y condiciones y políticas de privacidad de cualquier sitio web o servicio de terceros que visite. Terminación: Podemos terminar o suspender el acceso a nuestro servicio de inmediato, sin previo aviso ni responsabilidad, por cualquier motivo, incluyendo, entre otros, si usted incumple los términos. Todas las disposiciones de los términos que por su naturaleza deban sobrevivir a la terminación, sobrevivirán a la terminación, incluyendo, entre otras, disposiciones de propiedad, renuncias de garantía, indemnización y limitaciones de responsabilidad. Ley Aplicable: Estos términos serán regidos e interpretados de acuerdo con las leyes de [Argentina], sin tener en cuenta sus disposiciones sobre conflictos de leyes. Nuestro fracaso en hacer valer cualquier derecho o disposición de estos términos no se considerará una renuncia a esos derechos. Si alguna disposición de estos términos es considerada inválida o no aplicable por un tribunal, las disposiciones restantes de estos términos seguirán en vigor. Estos términos constituyen el acuerdo completo entre nosotros con respecto a nuestro servicio y reemplazan cualquier acuerdo previo que pudiéramos tener entre nosotros con respecto al servicio. Cambios: Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos términos en cualquier momento. Si una revisión es material, trataremos de proporcionar al menos 30 días de aviso antes de que entren en vigor los nuevos términos. Lo que constituye un cambio material será determinado a nuestra sola discreción. Al continuar accediendo o utilizando nuestro servicio después de que esas revisiones entren en vigor, usted acepta quedar obligado por los términos revisados. Si no está de acuerdo con los nuevos términos, por favor deje de utilizar el servicio. Contáctenos: Si tiene alguna pregunta sobre estos términos, por favor contáctenos.',
    close_btn: 'Volver',
  },
  privacy_policy: {
    title: 'Política de Privacidad',
    description:
      "Última actualización: [20 de marzo de 2024]\n\n[Centro Internacional de Aseguramiento Marítimo] ('nosotros', 'nos', o 'nuestro') opera [www.marineassuranceic.com] (el 'Sitio'). Esta página le informa sobre nuestras políticas con respecto a la recopilación, uso y divulgación de la Información Personal que recibimos de los usuarios del Sitio. Utilizamos su Información Personal solo para proporcionar y mejorar el Sitio. Al utilizar el Sitio, usted acepta la recopilación y el uso de información de acuerdo con esta política. Recopilación y Uso de Información Mientras utiliza nuestro Sitio, es posible que le pidamos que nos proporcione cierta información personalmente identificable que se puede utilizar para contactarlo o identificarlo. La información personalmente identificable puede incluir, entre otras cosas, su nombre ('Información Personal'). Datos de Registro Al igual que muchos operadores de sitios, recopilamos información que su navegador envía cada vez que visita nuestro Sitio ('Datos de Registro'). Estos Datos de Registro pueden incluir información como la dirección de Protocolo de Internet ('IP') de su computadora, el tipo de navegador, la versión del navegador, las páginas de nuestro Sitio que visita, la hora y la fecha de su visita, el tiempo que pasó en esas páginas y otras estadísticas. Además, podemos utilizar servicios de terceros como Google Analytics que recopilan, monitorean y analizan estos datos. Comunicaciones Podemos utilizar su Información Personal para contactarlo con boletines informativos, marketing o materiales promocionales y otra información relacionada con el propósito de nuestro Sitio. Puede optar por no recibir alguna o todas estas comunicaciones de nosotros siguiendo el enlace de cancelación de suscripción o las instrucciones proporcionadas en cualquier correo electrónico que enviemos. Cookies Las cookies son archivos con una pequeña cantidad de datos que pueden incluir un identificador único anónimo. Las cookies se envían a su navegador desde un sitio web y se almacenan en el disco duro de su computadora. Al igual que muchos sitios, utilizamos 'cookies' para recopilar información. Puede instruir a su navegador para que rechace todas las cookies o para que le indique cuándo se está enviando una cookie. Sin embargo, si no acepta cookies, es posible que no pueda utilizar algunas partes de nuestro Sitio. Seguridad La seguridad de su Información Personal es importante para nosotros, pero recuerde que ningún método de transmisión a través de Internet, o método de almacenamiento electrónico, es 100% seguro. Si bien nos esforzamos por utilizar medios comercialmente aceptables para proteger su Información Personal, no podemos garantizar su seguridad absoluta. Cambios en esta Política de Privacidad Esta Política de Privacidad es efectiva a partir de [Fecha] y permanecerá en vigor excepto con respecto a cualquier cambio en sus disposiciones en el futuro, los cuales estarán vigentes inmediatamente después de su publicación en esta página. Nos reservamos el derecho de actualizar o cambiar nuestra Política de Privacidad en cualquier momento, y usted debe consultar esta Política de Privacidad periódicamente. Su uso continuado del Servicio después de que publiquemos cualquier modificación a la Política de Privacidad en esta página constituirá su reconocimiento de las modificaciones y su consentimiento para cumplir y estar sujeto a la Política de Privacidad modificada. Si realizamos cambios sustanciales a esta Política de Privacidad, le notificaremos ya sea a través de la dirección de correo electrónico que nos haya proporcionado o colocando un aviso destacado en nuestro sitio web. Contáctenos Si tiene alguna pregunta sobre esta Política de Privacidad, por favor contáctenos en [Su Información de Contacto].",
    close_btn: 'Volver',
  },
  cookie_settings: {
    title: 'Configuración de Cookies',
    description:
      "Cookies Conf.\n\nUtilizamos cookies necesarias para que nuestro sitio funcione. Nosotros y nuestros socios también nos gustaría usar cookies analíticas opcionales, anónimas, para ayudarnos a mejorar el sitio. Ninguna cookie se guardará a menos que las habilite haciendo clic en el botón 'Aceptar todo'. Una vez que haya tomado su decisión, se establecerá una cookie en su dispositivo para recordar sus preferencias.\n\nAlmacenamiento\nAlmacenamos sus configuraciones durante 30 días. Puede cambiar de opinión en cualquier momento haciendo clic en la pestaña 'Administrar cookies' en la parte inferior de esta página o en 'Configuración de cookies' en la parte inferior de este sitio web.\n\nNecesarias: Estas cookies son estrictamente necesarias para el correcto funcionamiento del sitio y la ejecución adecuada de los servicios que solicita, así como para almacenar su consentimiento para otras categorías de cookies. Puede desactivarlas cambiando la configuración de su navegador, pero esto puede afectar cómo funciona el sitio.\nAnalítica: Estas cookies son instaladas por Google Analytics. Se utilizan para mejorar nuestro sitio web recopilando y reportando información sobre cómo lo utiliza. Las cookies recopilan información de una manera que no identifica directamente a nadie.\nDirigidas/Publicidad: Las cookies publicitarias rastrean la actividad en los sitios web para comprender el interés del visitante y para ofrecer contenido publicitario personalizado. Ejemplos incluyen cookies utilizadas para marketing de seguimiento o publicidad basada en los intereses del visitante.",
    close_btn: 'Volver',
  },
};

export const en = {
  navigation: {
    first_Link: 'HOME',
    second_Link: 'ABOUT',
    third_Link: 'SERVICES',
    fourth_Link: 'CONTACT',
  },
  social: {
    title: 'Follow Us',
  },
  partners: {
    title: 'Partners',
    first_Link: 'Link',
    second_Link: 'Link',
    third_Link: 'Link',
    fourth_Link: 'Link',
  },
  home: {
    title:
      'We are a marine assurance company offering tailored consultancy and training services.',
    description:
      'Employing industry best practices, MAIC assists marine and inland terminals as well as shipping companies in enhancing their management capabilities. The company focuses on promoting excellence to ensure safety, sustainability, and operational efficiency within the maritime sector.',
  },
  primary_btn: {
    title: 'Download Brouchure',
  },
  secondary_btn: {
    title: 'Learn More',
  },
  about: {
    title: 'Transforming the maritime industry for good',
    description:
      'We are a Marine Assurance company dedicated to excellence in consultancy and training services. Established in 2020, MAIC has been gaining trust in the maritime industry. Over the years, we have forged strong partnerships with leading shipping companies, marine terminals, and regulatory bodies, earning a reputation for reliability, integrity, and innovation. With a commitment to staying ahead of emerging trends and technologies, MAIC continues to evolve, offering cutting-edge solutions that meet the evolving needs of our clients in an ever-changing maritime landscape. From our inception to the present day, our unwavering dedication to excellence has remained the cornerstone of our success, driving us to continually raise the bar for industry standards and best practices. At MAIC, we specialize in providing comprehensive solutions tailored to the unique needs of maritime businesses worldwide. Our team of experts brings extensive industry knowledge and experience to every project, ensuring that our clients receive the highest level of support and guidance. Whether it´s optimizing operational efficiency, enhancing safety protocols, or promoting sustainability initiatives, MAIC is committed to helping our clients achieve their goals. With a focus on innovation and continuous improvement, we empower organizations to navigate the complexities of the maritime industry with confidence and success. Trust MAIC for reliable expertise and transformative solutions that propel your business forward on the waves of success.',
  },

  services: {
    title: 'Explore our core services.',
    description:
      'We understand how diverse are the needs of maritime operators. That´s because we offer a comprehensive suite of services tailored to meet the diverse needs of maritime operators, ensuring safety, compliance, and operational excellence.',
  },
  consultancy: {
    title: 'Specialized Consultancy',
    description:
      'Forms the cornerstone of their offerings, providing expert advice and guidance on intricate aspects of maritime operations. From regulatory compliance to risk assessment and quality management, these consultants leverage their deep industry knowledge to address specific challenges faced by clients, offering tailored solutions for sustainable growth and enhanced performance.',
    sub_title: 'Consultancy',
    sub_description:
      'Our specialized consultancy involves offering expert guidance and support to ensure the safety, compliance, and efficiency of maritime operations. These consultancies possess in-depth knowledge of international regulations, industry standards, and best practices related to marine safety, risk management, and quality assurance. They work closely with shipping companies, offshore operators, and maritime organizations to assess and mitigate risks associated with vessel operations, maintenance, and crew management. From conducting audits and inspections to developing tailored risk management strategies and providing training programs, specialized Marine Assurance consultants play a crucial role in safeguarding assets, protecting the environment, and promoting sustainable practices within the maritime industry. Their expertise helps clients navigate complex regulatory frameworks, optimize performance, and uphold the highest standards of safety and operational excellence at sea.',
  },
  training: {
    title: 'Training Services',
    description:
      'Designed to equip personnel with essential skills and knowledge to navigate the complexities of the marine industry confidently. Through interactive workshops, simulation exercises, and hands-on training sessions, participants gain practical insights into safety protocols, emergency response procedures, and regulatory requirements, fostering a culture of continuous improvement and compliance.',
    sub_title: 'Training Services',
    sub_description:
      'Comprehensive training services tailored to the specific needs of maritime operators, crew members, and shore-based personnel. These training programs cover a wide range of topics essential for promoting safety, compliance, and operational efficiency in the marine industry. Courses may include vessel safety procedures, emergency response training, maritime regulatory compliance, risk assessment and management, environmental stewardship, and quality management systems. Additionally, specialized training can be provided for roles such as vessel inspectors, safety officers, and regulatory compliance managers. Through interactive workshops, simulation exercises, and hands-on training sessions, participants gain practical skills, knowledge, and confidence to effectively navigate challenges and mitigate risks in their day-to-day operations. By investing in training services from a Marine Assurance company, organizations can enhance their safety culture, improve performance, and ensure compliance with industry standards and regulations.',
  },
  management: {
    title: 'Enhancing Management',
    description:
      'This package of courses aimed at empowering leaders and managers with advanced strategies and techniques to oversee assurance activities effectively. Covering topics such as risk management, strategic planning, and operational optimization, these courses enable managers to drive organizational growth, foster safety culture, and ensure adherence to industry standards, ultimately leading to improved performance and sustained success in the marine sector.',
    sub_title: 'Enhancing Management',
    sub_description:
      'Our course provides participants with the advanced knowledge and skills needed to effectively lead and oversee assurance activities within maritime operations. Covering topics such as risk management, regulatory compliance, quality assurance, and safety protocols, this course equips managers with the tools to optimize operational performance while mitigating potential risks and ensuring adherence to industry standards. Participants learn strategic planning techniques, best practices in operational management, and methods for fostering a culture of safety and compliance within their organizations. Through case studies, practical exercises, and interactive discussions, participants gain insights into industry trends, emerging technologies, and  regulatory changes, enabling them to make informed decisions and drive continuous improvement initiatives within the marine assurance sector.',
  },
  contact: {
    title: 'Contact',
    email: 'Email',
    email_description:
      'For inquiries, consultations, or to learn more about our services, we encourage you to reach out to us via email.',
    phone: 'Phone',
    phone_description:
      'Feel free to call us to speak with one of our experts and learn more about how we can assist your organization in achieving safety, compliance, and operational excellence in maritime operations. We´re here to support you every step of the way.',
    office: 'Office',
    office_description:
      'If you would like to visit our office, we warmly welcome you to schedule an appointment. Our office is conveniently located in Buenos Aires. We look forward to meeting with you and discussing how we can collaborate to achieve success in the maritime industry.',
  },
  footer: {
    suscribe: 'Suscribe',
    suscribe_description:
      'Subscribe now! Never miss out on our latest updates, exclusive content, and special offers.',
    btn_title: 'Suscribe',
  },
  faq: {
    title: 'FAQs',
    q_one: 'What is Marine Assurance?',
    q_two: 'What does a Marine Consultant do?',
    q_three: 'What is the Marine Assurance Proccess?',
    q_four: 'Do I need a Marine Assurance consultancy?',
    close_btn: 'Close',
    description_one:
      'Marine Assurance refers to a set of processes, procedures, and practices aimed at ensuring the safety, security, and reliability of maritime operations and assets. It encompasses various aspects such as risk management, regulatory compliance, quality assurance, and technical assessments specific to maritime activities. Key components of marine assurance may include: Vessel Inspections: Regular inspections of ships to verify compliance with safety standards, regulations, and industry best practices. These inspections cover aspects like hull  integrity, machinery condition, navigation equipment, safety equipment, and environmental compliance. Risk Management: Identification, assessment, and mitigation of risks associated with maritime operations. This includes assessing potential hazards such as adverse weather conditions, navigational challenges, equipment failures, and human errors, and implementing measures to minimize their impact. Compliance Monitoring: Ensuring adherence to national and international regulations governing maritime operations, such as SOLAS (International Convention for the Safety of Life at Sea), MARPOL (International Convention for the Prevention of Pollution from Ships), and ISM Code (International Safety Management Code). Quality Management: Implementing quality management systems to maintain high standards of operation, maintenance, and management of vessels and maritime infrastructure. This may involve procedures for document control, training, audits, and continuous improvement. Emergency Preparedness: Developing and implementing plans and procedures to respond effectively to emergencies at sea, such as fires, collisions, oil spills, or medical emergencies. This includes crew training, drills, and coordination with relevant authorities and response organizations. Technical Support: Providing technical expertise and support to ensure the safe and efficient operation of maritime assets. This may involve engineering assessments, performance monitoring, troubleshooting, and maintenance planning. Overall, marine assurance plays a crucial role in safeguarding lives, protecting the environment, and ensuring the reliability and efficiency of maritime operations in an increasingly complex and challenging maritime industry.',
    description_two:
      'A marine consultant is a professional who provides specialized expertise and advice within the maritime industry. Their role can encompass a wide range of activities depending on their area of expertise and the specific needs of their clients. Here are some common tasks and responsibilities of marine consultants: Technical Assessments: Marine consultants may conduct technical assessments of vessels, offshore platforms, port facilities, or marine infrastructure. This can involve evaluating the condition, performance, and compliance with regulatory standards, as well as identifying areas for improvement. Risk Management: They assess and manage risks associated with maritime operations, including navigation, safety, security, environmental impact, and regulatory compliance. Consultants may develop risk management plans, conduct risk assessments, and recommend measures to mitigate risks. Regulatory Compliance: Marine consultants help clients navigate complex maritime regulations and ensure compliance with international, national, and industry-specific standards. This may involve interpreting regulations, conducting audits, and developing compliance strategies. Project Management: They may assist in project management for maritime construction, engineering, or development projects. This can include project planning, scheduling, budgeting, procurement, and coordination of resources and stakeholders. Environmental Consulting: Some marine consultants specialize in environmental management and provide services related to pollution prevention, environmental impact assessments, habitat restoration, and compliance with environmental regulations such as MARPOL. Training and Education: They may develop and deliver training programs for maritime personnel on topics such as safety procedures, regulatory compliance, environmental awareness, and technical skills. Market Research and Analysis: Marine consultants may conduct market research and analysis for clients in the maritime industry. This can involve assessing market trends, identifying business opportunities, and providing insights to support strategic decision-making. Legal Support: They may provide expert witness testimony, litigation support, or assistance with regulatory disputes and compliance issues related to maritime law. Overall, marine consultants play a vital role in supporting the safe, efficient, and sustainable operation of maritime activities by providing expert advice, technical assistance, and strategic guidance to their clients.',
    description_three:
      'The Marine Assurance Process is a systematic approach to ensuring the safety, reliability, and compliance of maritime operations and assets. While specific processes may vary depending on factors such as the type of operation, industry standards, and regulatory requirements, a typical marine assurance process may include the following key steps: Risk Assessment: Identify and assess potential risks associated with maritime operations, including hazards related to navigation, weather, equipment, personnel, and environmental factors. Regulatory Compliance Review: Review applicable national and international regulations, standards, and industry guidelines to ensure compliance with requirements related to safety, security, environmental protection, and operational practices. Planning and Preparation: Develop comprehensive plans and procedures to address identified  risks, comply with regulations, and optimize operational performance. This may include emergency response plans, maintenance schedules, training programs, and audit protocols. Implementation: Implement the planned measures and procedures across all aspects of maritime operations, including vessel operations, maintenance activities, crew training, and  documentation management. Monitoring and Evaluation: Continuously monitor and evaluate the effectiveness of implemented  measures and procedures through regular inspections, audits, performance monitoring, and incident reporting. Identify areas for improvement and take corrective actions as necessary. Training and Education: Provide training and education to personnel involved in maritime operations to ensure they have the necessary knowledge, skills, and awareness to perform their duties   safely and  effectively. Documentation and Recordkeeping: Maintain accurate and up-to-date documentation and records of all aspects of the marine assurance process, including risk assessments, compliance reports, inspection findings, incident reports, and corrective actions taken. Continuous Improvement: Foster a culture of continuous improvement by actively seeking feedback, analyzing performance data, and implementing measures to enhance safety, reliability, and efficiency over time. By following a structured marine assurance process, organizations can effectively manage risks, ensure regulatory compliance, optimize operational performance, and ultimately enhance the safety, reliability, and sustainability of their maritime operations.',
    description_four:
      'There are several reasons why you might need marine assurance consultancy services: Safety and Compliance: Marine assurance consultants help ensure that your maritime  operations,  vessels, and infrastructure meet safety standards and comply with relevant regulations.  This is crucial for protecting lives, preventing accidents, and avoiding legal and  regulatory penalties.  Risk Management: Maritime activities inherently involve various risks, including those      related to navigation, weather, equipment failure, and human error. Marine assurance      consultants can assess these risks, develop risk management strategies, and implement  measures to mitigate them, reducing the likelihood of incidents and their potential impact. Optimizing Operations: Consultants can provide expertise to optimize the efficiency and  effectiveness of your maritime operations. This may include improving vessel performance, streamlining processes, reducing downtime, and enhancing overall productivity. Environmental Protection: Marine assurance consultants can help minimize the environmental impact of your operations by ensuring compliance with environmental regulations, implementing pollution prevention measures, and promoting sustainable practices. Expertise and Experience: Marine assurance consultants bring specialized knowledge, skills, and experience to address the unique challenges and complexities of the maritime industry. They can provide valuable insights, guidance, and support tailored to your specific needs and circumstances. Cost Savings: Investing in marine assurance consultancy services can ultimately lead to cost savings by helping you avoid costly accidents, downtime, regulatory fines, and reputational damage. Consultants can also identify opportunities for operational efficiencies and optimization that can contribute to long-term cost savings. Peace of Mind: By engaging marine assurance consultants, you gain peace of mind knowing that your maritime operations are being overseen by experts who prioritize safety, compliance, and risk management. This allows you to focus on your core business activities with confidence. Overall, marine assurance consultancy services are essential for ensuring the safety, compliance, efficiency, and sustainability of maritime operations, ultimately contributing to the success and resilience of your business in the dynamic maritime industry.',
  },
  copy: {
    description:
      'Developed and designed by  http://mpa.com.es All rights reserved MAIC &copy; 2024',
  },
  terms: {
    policy: 'Privacy Policy',
    conditions: 'Terms and Conditions',
    settings: 'Cookie Settings',
  },
  cookies: {
    title: 'Cookie Settings',
    description:
      'This website uses cookies to ensure you get the best experience on our website. Please select your preference or visit our Cookie Settings page for more information.',
    accept: 'Accept All',
    reject: 'Reject All',
    save: 'Save Preferences',
  },
  terms_conditions: {
    title: 'Terms and Conditions',
    description:
      'Please read these terms and conditions carefully before using [www.marineassuranceic.com] operated by [Marine Assurance International Centre]. Your access to and use of the service is conditioned on your acceptance of and compliance with these terms. These terms apply to all visitors, users, and others who access or use the service. By accessing or using the service, you agree to be bound by these terms. If you disagree with any part of the terms, then you may not access the service. Intellectual Property The service and its original content, features, and functionality are and will remain the exclusive property of [Marine Assurance International Centre] and its licensors. The service is protected by copyright, trademark, and other laws of both the [Argentina] and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of [Marine Assurance International Centre]. Links to Other Websites Our service may contain links to third-party websites or services that are not owned or controlled by [Marine Assurance International Centre]. [Marine Assurance Internattional Centre] has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that [Marine Assurance International Centre] shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services. We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit. Termination We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the terms. All provisions of the terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability. Governing Law These terms shall be governed and construed in accordance with the laws of [Argentina], without regard to its conflict of law provisions. Our failure to enforce any right or provision of these terms will not be considered a waiver of those rights. If any provision of these terms is held to be invalid or unenforceable by a court, the remaining provisions of these terms will remain in effect. These terms constitute the entire agreement between us regarding our service, and supersede and replace any prior agreements we might have between us regarding the service. Changes We reserve the right, at our sole discretion, to modify or replace these terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the service. Contact Us If you have any questions about these terms, please contact us.',
    close_btn: 'Close',
  },
  privacy_policy: {
    title: 'Privacy Policy',
    description:
      "Last updated: [March 20, 2024] [Marine Assurance International Centre] (us, we, or our) operates [www.marineassuranceic.com] (the Site). This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Site. We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy. Information Collection and Use While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally, identifiable information may include but is not limited to your name (Personal Information). Log Data Like many site operators, we collect information that your browser sends whenever you visit our Site (Log Data). This Log Data may include information such as your computer's Internet Protocol (IP) address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other statistics. In addition, we may use third-party services such as Google Analytics that collect, monitor, and analyze this data. Communications We may use your Personal Information to contact you with newsletters, marketing, or promotional materials and other information that is related to the purpose of our Site. You may opt-out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send. Cookies: Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive. Like many sites, we use cookies to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site. Security: The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security. Changes to This Privacy Policy: This Privacy Policy is effective as of [Date] and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change our Privacy Policy at any time, and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy. If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us or by placing a prominent notice on our website. Contact Us If you have any questions about this Privacy Policy, please contact us at [Your Contact Information].",
    close_btn: 'Close',
  },
  cookie_settings: {
    title: 'Cookie Settings',
    description:
      "Cookies Conf. We use necessary cookies to make our site work. We and our partners would also like to use optional, anonymous, analytical cookies to help us improve the site. No cookies will be saved unless you enable them by clicking on the “Accept all” button. Once you have made your decision, a cookie will be set on your device to remember your preferences. Storing We store your settings for 30 days. You can change your mind at any time by clicking on the      “Manage cookies” tab on the bottom of this page or Cookie Settings at the botttom of this website. Necessaries: These cookies are strictly necessary for the proper functioning of the site and the proper execution of the services you request, as well as to store your consent for other categories      of cookies. You can disable them by changing your browser settings, but this may affect how the site functions. Analytics: These cookies are installed by Google Analytics. They are used to improve our website by collecting and reporting information on how you use it. The cookies collect information in a way that does not directly identify anyone. Targeting/Advertising: Advertising cookies track activity across websites in order to understand visitor interest and to deliver tailored advertising content. Examples include cookies used for follow-up marketing or advertising based on the visitor's interests.",
    close_btn: 'Close',
  },
};
