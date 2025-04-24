// Mock data to simulate API responses

// Profile data
export const profileData = {
  en: {
    name: "Mohammed Abdulwahab AlZoom",
    titles: [
      "Senior Software Development Engineer",
      "Full Stack Developer",
      "DevOps Expert"
    ],
    avatar: "/logo.png",
    bio: "Senior versatile software engineer with a passion for delivering high-impact, scalable solutions across modern digital ecosystems, open-source platforms, and enterprise environments. Trusted to drive complex production initiatives with a strong emphasis on performance, reliability, and long-term maintainability. Known for quickly adapting to and seamlessly integrating into diverse development environments.  Skilled in system architecture, DevOps, and full-cycle development, I bridge technical innovation with business goals. I thrive in collaborative environments, value mentoring, and continuously seek ways to optimize processes and build future-ready solutions that drive organizational growth.",
    contact: {
      email: "ellw0pc@gmail.com",
      phone: "+967775212843",
      github: "https://github.com/ellwo",
      linkedin: "https://linkedin.com/in/mohammedalzoom",
      twitter: "https://twitter.com"
    }
  },
  ar: {
    name: "محمد عبدالوهاب الزوم",
    titles: [
      "مهندس تطوير برمجيات أول",
      "مطور الواجهة الخلفية والأمامية",
      "خبير DevOps"
    ],
    avatar: "/logo.png",
    bio: `مهندس برمجيات أول متعدد المهارات، يتمتع بشغف لتقديم حلول رقمية عالية التأثير وقابلة للتوسع ضمن بيئات الأنظمة المفتوحة والمؤسسات الكبرى. موضع ثقة في قيادة المبادرات الإنتاجية المعقدة مع تركيز قوي على الأداء والموثوقية وقابلية الصيانة على المدى الطويل. معروف بقدرته على التكيف السريع والاندماج السلس في بيئات تطوير متنوعة.

يمتلك خبرة واسعة في هندسة الأنظمة، وعمليات التطوير (DevOps)، ودورة التطوير الكاملة، حيث يجمع بين الابتكار التقني وتحقيق الأهداف التجارية. يزدهر في بيئات العمل التعاونية، ويولي أهمية كبيرة للتوجيه والإرشاد، ويسعى باستمرار لتحسين العمليات وبناء حلول مستقبلية تُسهم في نمو المؤسسات.`,
contact: {
  email: "ellw0pc@gmail.com",
  phone: "+967775212843",
  github: "https://github.com/ellwo",
  linkedin: "https://linkedin.com/in/mohammedalzoom",
  twitter: "https://twitter.com"
}
  }
};

// Tech badges data
export const badgesData =  {
    "en": [
      {
        "name": "PHP",
        "icon": "devicon-php-plain colored",
        "tooltip_desc": "General-purpose scripting language especially suited to web development.",
        "link": "https://www.php.net/",
        "priority_percent": 0.7
      },
      {
        "name": "Python",
        "icon": "devicon-python-plain colored",
        "tooltip_desc": "High‑level, general‑purpose programming language emphasizing readability and rapid development.",
        "link": "https://www.python.org/",
        "priority_percent": 0.9
      },

      {
        "name": "Flask",
        "icon": "devicon-flask-plain colored",
        "tooltip_desc": "High‑level, general‑purpose programming language emphasizing readability and rapid development.",
        "link": "https://www.python.org/",
        "priority_percent": 0.9
      },
      
      {
        "name": "Java",
        "icon": "devicon-java-plain colored",
        "tooltip_desc": "Object‑oriented, platform‑independent language used widely for enterprise applications.",
        "link": "https://www.java.com/",
        "priority_percent": 0.75
      },
      {
        "name": "C++",
        "icon": "devicon-cplusplus-plain colored",
        "tooltip_desc": "General‑purpose language with low‑level memory manipulation and high performance.",
        "link": "https://isocpp.org/",
        "priority_percent": 0.7
      },
      {
        "name": "C#",
        "icon": "devicon-csharp-plain colored",
        "tooltip_desc": "Modern, type‑safe, object‑oriented language on the .NET platform.",
        "link": "https://learn.microsoft.com/dotnet/csharp/",
        "priority_percent": 0.72
      },
      {
        "name": "TypeScript",
        "icon": "devicon-typescript-plain colored",
        "tooltip_desc": "Superset of JavaScript adding optional static types for large‑scale applications.",
        "link": "https://www.typescriptlang.org/",
        "priority_percent": 0.95
      },

      {
        "name": "JavaScript",
        "icon": "devicon-javascript-plain colored",
        "tooltip_desc": "Superset of JavaScript adding optional static types for large‑scale applications.",
        "link": "https://www.typescriptlang.org/",
        "priority_percent": 0.95
      },
      
        {
          "name": "System Architecture",
          "icon": "fas fa-project-diagram text-purple-600",
          "tooltip_desc": "Designing scalable and maintainable system structures including modules, data flow, and service interactions.",
          "link": "https://en.wikipedia.org/wiki/Software_architecture",
          "priority_percent": 0.95
        },
        {
          "name": "Microservices",
          "icon": "fas fa-cubes text-indigo-500",
          "tooltip_desc": "Building distributed systems with independently deployable services communicating over lightweight protocols.",
          "link": "https://martinfowler.com/microservices/",
          "priority_percent": 0.9
        },
        {
          "name": "Load Balancing",
          "icon": "fas fa-server text-blue-500",
          "tooltip_desc": "Distributing client requests across servers to optimize resource use and ensure availability.",
          "link": "https://en.wikipedia.org/wiki/Load_balancing_(computing)",
          "priority_percent": 0.9
        },
        {
          "name": "Event-Driven Design",
          "icon": "fas fa-exchange-alt text-pink-500",
          "tooltip_desc": "Architecting systems to react to asynchronous events, enabling decoupling and responsiveness.",
          "link": "https://microservices.io/patterns/data/event-driven-architecture.html",
          "priority_percent": 0.85
        },
        {
          "name": "Model Serving",
          "icon": "fas fa-rocket text-purple-500",
          "tooltip_desc": "Deploying and scaling machine learning models through REST/gRPC APIs or model servers like TensorFlow Serving or TorchServe.",
          "link": "https://www.tensorflow.org/tfx/serving/serving_basic",
          "priority_percent": 0.7
        },
        {
          "name": "AI API Development",
          "icon": "fas fa-code text-blue-600",
          "tooltip_desc": "Building robust APIs to expose AI/ML models for integration with other systems and services.",
          "link": "https://fastapi.tiangolo.com/",
          "priority_percent": 0.4
        },
        {
          "name": "Open Source AI Integration",
          "icon": "fas fa-code-branch text-green-600",
          "tooltip_desc": "Leveraging and integrating open-source AI libraries, models, and platforms to accelerate solution development.",
          "link": "https://huggingface.co/models",
          "priority_percent": 0.4
        },
        {
          "name": "Inference Optimization",
          "icon": "fas fa-microchip text-rose-600",
          "tooltip_desc": "Improving model inference speed and resource usage via quantization, batching, and model distillation.",
          "link": "https://developer.nvidia.com/tensorrt",
          "priority_percent": 0.4
        },
        {
          "name": "Service Communication",
          "icon": "fas fa-random text-amber-600",
          "tooltip_desc": "Designing efficient inter-service communication strategies like REST, gRPC, and message queues.",
          "link": "https://grpc.io/docs/what-is-grpc/introduction/",
          "priority_percent": 0.82
        },
        {
          "name": "Data Modeling",
          "icon": "fas fa-database text-teal-500",
          "tooltip_desc": "Structuring relational and NoSQL schemas to support performance, scaling, and business logic.",
          "link": "https://en.wikipedia.org/wiki/Data_model",
          "priority_percent": 0.88
        },
        {
          "name": "Message Queuing",
          "icon": "fas fa-stream text-pink-600",
          "tooltip_desc": "Using brokers for async communication, decoupling, and load buffering between services.",
          "link": "https://www.rabbitmq.com/tutorials/amqp-concepts.html",
          "priority_percent": 0.8
        },
        {
          "name": "Caching Strategies",
          "icon": "fas fa-bolt text-yellow-500",
          "tooltip_desc": "Improving performance with memory-based data stores and content delivery networks.",
          "link": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching",
          "priority_percent": 0.83
        },
        {
          "name": "Resilience & Fault Tolerance",
          "icon": "fas fa-shield-alt text-red-500",
          "tooltip_desc": "Building systems that gracefully handle failure using retries, circuit breakers, and backups.",
          "link": "https://www.geeksforgeeks.org/microservices-resilience-patterns",
          "priority_percent": 0.87
        },
        {
          "name": "Observability",
          "icon": "fas fa-chart-line text-green-500",
          "tooltip_desc": "Implementing metrics, logs, and traces to monitor and debug complex systems.",
          "link": "https://opentelemetry.io/docs/concepts/observability-primer/",
          "priority_percent": 0.85
        },
        {
          "name": "CI/CD in Architecture",
          "icon": "fas fa-sync-alt text-blue-600",
          "tooltip_desc": "Designing systems to support continuous integration, delivery, and deployment pipelines.",
          "link": "https://www.redhat.com/en/topics/devops/what-is-ci-cd",
          "priority_percent": 0.84
        },
        {
          "name": "Service Discovery",
          "icon": "fas fa-sitemap text-lime-500",
          "tooltip_desc": "Enabling dynamic detection of service endpoints in distributed systems.",
          "link": "https://microservices.io/patterns/service-discovery.html",
          "priority_percent": 0.8
        },
        {
          "name": "Containerization",
          "icon": "fas fa-boxes text-indigo-600",
          "tooltip_desc": "Packaging applications with dependencies for consistency across environments.",
          "link": "https://www.docker.com/resources/what-container/",
          "priority_percent": 0.9
        },
        {
          "name": "Orchestration",
          "icon": "fas fa-network-wired text-cyan-500",
          "tooltip_desc": "Managing container lifecycle, scaling, and networking using orchestrators like Kubernetes.",
          "link": "https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/",
          "priority_percent": 0.88
        },
        {
          "name": "Versioning & Dependency Mgmt",
          "icon": "fas fa-code-branch text-fuchsia-500",
          "tooltip_desc": "Controlling and tracking system evolution and dependency alignment.",
          "link": "https://semver.org/",
          "priority_percent": 0.85
        },
        {
          "name": "Background Processing",
          "icon": "fas fa-tasks text-gray-600",
          "tooltip_desc": "Designing systems to handle async jobs, scheduled tasks, and queue workers.",
          "link": "https://en.wikipedia.org/wiki/Job_scheduling",
          "priority_percent": 0.8
        },
        {
          "name": "Configuration Management",
          "icon": "fas fa-cogs text-emerald-500",
          "tooltip_desc": "Managing service configuration through environment variables, secrets, and toggles.",
          "link": "https://12factor.net/config",
          "priority_percent": 0.78
        },
        {
          "name": "System Integration",
          "icon": "fas fa-puzzle-piece text-sky-500",
          "tooltip_desc": "Connecting systems through APIs, data exchange layers, or service buses.",
          "link": "https://en.wikipedia.org/wiki/System_integration",
          "priority_percent": 0.82
        },
            
      {
        "name": "SQL",
        "icon": "devicon-sqldeveloper-plain colored",
        "tooltip_desc": "Declarative language for querying and managing relational databases.",
        "link": "https://en.wikipedia.org/wiki/SQL",
        "priority_percent": 0.88
      },
      {
        "name": "Laravel",
        "icon": "devicon-laravel-plain colored",
        "tooltip_desc": "PHP web framework with expressive, elegant syntax and built‑in tools for common tasks.",
        "link": "https://laravel.com/",
        "priority_percent": 0.82
      },
      {
        "name": "Django",
        "icon": "devicon-django-plain",
        "tooltip_desc": "High‑level Python web framework encouraging rapid development and clean design.",
        "link": "https://www.djangoproject.com/",
        "priority_percent": 0.85
      },
      {
        "name": "Spring Boot",
        "icon": "devicon-spring-plain colored",
        "tooltip_desc": "Java framework for building production‑ready standalone Spring applications.",
        "link": "https://spring.io/projects/spring-boot",
        "priority_percent": 0.77
      },
      {
        "name": "GraphQL",
        "icon": "devicon-graphql-plain colored",
        "tooltip_desc": "Query language for APIs enabling clients to request exactly the data they need.",
        "link": "https://graphql.org/",
        "priority_percent": 0.8
      },   
      {
        "name": "Node.js",
        "icon": "devicon-nodejs-plain colored",
        "tooltip_desc": "JavaScript runtime built on Chrome’s V8 engine for scalable network applications.",
        "link": "https://nodejs.org/",
        "priority_percent": 0.4
      },
      {
        "name": "Vue.js",
        "icon": "devicon-vuejs-plain colored",
        "tooltip_desc": "Progressive JavaScript framework for building user interfaces.",
        "link": "https://vuejs.org/",
        "priority_percent": 0.85
      },
      {
        "name": "Nuxt.js",
        "icon": "devicon-nuxtjs-plain colored",
        "tooltip_desc": "Framework for creating Vue.js applications with server‑side rendering and static generation.",
        "link": "https://nuxtjs.org/",
        "priority_percent": 0.8
      },
      {
        "name": "Flutter",
        "icon": "devicon-flutter-plain colored",
        "tooltip_desc": "UI toolkit for crafting natively compiled applications for mobile, web, and desktop from a single codebase.",
        "link": "https://flutter.dev/",
        "priority_percent": 0.84
      },
      {
        "name": "Docker",
        "icon": "devicon-docker-plain colored",
        "tooltip_desc": "Platform for containerizing applications to ensure consistency across environments.",
        "link": "https://www.docker.com/",
        "priority_percent": 0.9
      },
      {
        "name": "PostgreSQL",
        "icon": "devicon-postgresql-plain colored",
        "tooltip_desc": "Advanced open‑source relational database emphasizing extensibility and standards compliance.",
        "link": "https://www.postgresql.org/",
        "priority_percent": 0.5
      },
      {
        "name": "MongoDB",
        "icon": "devicon-mongodb-plain colored",
        "tooltip_desc": "Document‑oriented NoSQL database for high volume data storage.",
        "link": "https://www.mongodb.com/",
        "priority_percent": 0.5
      },
      {
        "name": "Redis",
        "icon": "devicon-redis-plain colored",
        "tooltip_desc": "In‑memory data structure store used as database, cache, and message broker.",
        "link": "https://redis.io/",
        "priority_percent": 0.5
      },
      {
        "name": "GitHub",
        "icon": "devicon-github-original",
        "tooltip_desc": "Platform for version control and collaboration.",
        "link": "https://github.com/",
        "priority_percent": 0.95
      },

      {
        "name": "Git",
        "icon": "devicon-git-plain-wordmark colored",
        "tooltip_desc": "Platform for version control and collaboration.",
        "link": "https://git-scm.com/",
        "priority_percent": 0.9
      },

      
      {
        "name": "SQL",
        "icon": "devicon-mysql-plain colored",
        "tooltip_desc": "Language for managing and querying relational databases.",
        "link": "https://en.wikipedia.org/wiki/SQL",
        "priority_percent": 0.4
      },
      {
        "name": "RabbitMQ",
        "icon": "devicon-rabbitmq-original colored",
        "tooltip_desc": "Rabbitmq Open-source message broker for asynchronous communication.",
        "link": "https://www.rabbitmq.com/",
        "priority_percent": 0.6
      },
      {
        "name": "Postman",
        "icon": "devicon-postman-plain colored",
        "tooltip_desc": "API platform for building and using APIs.",
        "link": "https://www.postman.com/",
        "priority_percent": 0.3
      },
      {
        "name": "Nginx",
        "icon": "devicon-nginx-original colored",
        "tooltip_desc": "Nginx",
        "link": "https://nginx.org/",
        "priority_percent": 0.9
      },
      {

        "name":"Swagger",
        "icon":"devicon-swagger-plain colored",
        "tooltip_desc": "Swagger",
        "link": "https://swagger.io/",
        "priority_percent": 0.3
      },
      {
        "name": "Grafana",
        "icon": "devicon-grafana-plain colored",
        "tooltip_desc": "Open-source analytics and monitoring platform.",
        "link": "https://grafana.com/",
        "priority_percent": 0.5
      },
      {
        "name": "Penthouse",
        "icon": "devicon-prometheus-original colored",
        "tooltip_desc": "prometheus",
        "link": "https://prometheus.io/",
        "priority_percent": 0.4
      },
    ],
    "ar": [
      {
        "name": "PHP",
        "icon": "devicon-php-plain colored",
        "tooltip_desc": "General-purpose scripting language especially suited to web development.",
        "link": "https://www.php.net/",
        "priority_percent": 0.7
      },
      {
        "name": "Python",
        "icon": "devicon-python-plain colored",
        "tooltip_desc": "High‑level, general‑purpose programming language emphasizing readability and rapid development.",
        "link": "https://www.python.org/",
        "priority_percent": 0.9
      },

      {
        "name": "Flask",
        "icon": "devicon-flask-plain colored",
        "tooltip_desc": "High‑level, general‑purpose programming language emphasizing readability and rapid development.",
        "link": "https://www.python.org/",
        "priority_percent": 0.9
      },
      
      {
        "name": "Java",
        "icon": "devicon-java-plain colored",
        "tooltip_desc": "Object‑oriented, platform‑independent language used widely for enterprise applications.",
        "link": "https://www.java.com/",
        "priority_percent": 0.75
      },
      {
        "name": "C++",
        "icon": "devicon-cplusplus-plain colored",
        "tooltip_desc": "General‑purpose language with low‑level memory manipulation and high performance.",
        "link": "https://isocpp.org/",
        "priority_percent": 0.7
      },
      {
        "name": "C#",
        "icon": "devicon-csharp-plain colored",
        "tooltip_desc": "Modern, type‑safe, object‑oriented language on the .NET platform.",
        "link": "https://learn.microsoft.com/dotnet/csharp/",
        "priority_percent": 0.72
      },
      {
        "name": "TypeScript",
        "icon": "devicon-typescript-plain colored",
        "tooltip_desc": "Superset of JavaScript adding optional static types for large‑scale applications.",
        "link": "https://www.typescriptlang.org/",
        "priority_percent": 0.95
      },

      {
        "name": "JavaScript",
        "icon": "devicon-javascript-plain colored",
        "tooltip_desc": "Superset of JavaScript adding optional static types for large‑scale applications.",
        "link": "https://www.typescriptlang.org/",
        "priority_percent": 0.95
      },
      
        {
          "name": "System Architecture",
          "icon": "fas fa-project-diagram text-purple-600",
          "tooltip_desc": "Designing scalable and maintainable system structures including modules, data flow, and service interactions.",
          "link": "https://en.wikipedia.org/wiki/Software_architecture",
          "priority_percent": 0.95
        },
        {
          "name": "Microservices",
          "icon": "fas fa-cubes text-indigo-500",
          "tooltip_desc": "Building distributed systems with independently deployable services communicating over lightweight protocols.",
          "link": "https://martinfowler.com/microservices/",
          "priority_percent": 0.9
        },
        {
          "name": "Load Balancing",
          "icon": "fas fa-server text-blue-500",
          "tooltip_desc": "Distributing client requests across servers to optimize resource use and ensure availability.",
          "link": "https://en.wikipedia.org/wiki/Load_balancing_(computing)",
          "priority_percent": 0.9
        },
        {
          "name": "Event-Driven Design",
          "icon": "fas fa-exchange-alt text-pink-500",
          "tooltip_desc": "Architecting systems to react to asynchronous events, enabling decoupling and responsiveness.",
          "link": "https://microservices.io/patterns/data/event-driven-architecture.html",
          "priority_percent": 0.85
        },
        {
          "name": "Service Communication",
          "icon": "fas fa-random text-amber-600",
          "tooltip_desc": "Designing efficient inter-service communication strategies like REST, gRPC, and message queues.",
          "link": "https://grpc.io/docs/what-is-grpc/introduction/",
          "priority_percent": 0.82
        },
        {
          "name": "Data Modeling",
          "icon": "fas fa-database text-teal-500",
          "tooltip_desc": "Structuring relational and NoSQL schemas to support performance, scaling, and business logic.",
          "link": "https://en.wikipedia.org/wiki/Data_model",
          "priority_percent": 0.88
        },
        {
          "name": "Model Serving",
          "icon": "fas fa-rocket text-purple-500",
          "tooltip_desc": "Deploying and scaling machine learning models through REST/gRPC APIs or model servers like TensorFlow Serving or TorchServe.",
          "link": "https://www.tensorflow.org/tfx/serving/serving_basic",
          "priority_percent": 0.7
        },
        {
          "name": "AI API Development",
          "icon": "fas fa-code text-blue-600",
          "tooltip_desc": "Building robust APIs to expose AI/ML models for integration with other systems and services.",
          "link": "https://fastapi.tiangolo.com/",
          "priority_percent": 0.4
        },
        {
          "name": "Open Source AI Integration",
          "icon": "fas fa-code-branch text-green-600",
          "tooltip_desc": "Leveraging and integrating open-source AI libraries, models, and platforms to accelerate solution development.",
          "link": "https://huggingface.co/models",
          "priority_percent": 0.4
        },
        {
          "name": "Inference Optimization",
          "icon": "fas fa-microchip text-rose-600",
          "tooltip_desc": "Improving model inference speed and resource usage via quantization, batching, and model distillation.",
          "link": "https://developer.nvidia.com/tensorrt",
          "priority_percent": 0.4
        },
        {
          "name": "Message Queuing",
          "icon": "fas fa-stream text-pink-600",
          "tooltip_desc": "Using brokers for async communication, decoupling, and load buffering between services.",
          "link": "https://www.rabbitmq.com/tutorials/amqp-concepts.html",
          "priority_percent": 0.8
        },
        {
          "name": "Caching Strategies",
          "icon": "fas fa-bolt text-yellow-500",
          "tooltip_desc": "Improving performance with memory-based data stores and content delivery networks.",
          "link": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching",
          "priority_percent": 0.83
        },
        {
          "name": "Resilience & Fault Tolerance",
          "icon": "fas fa-shield-alt text-red-500",
          "tooltip_desc": "Building systems that gracefully handle failure using retries, circuit breakers, and backups.",
          "link": "https://www.geeksforgeeks.org/microservices-resilience-patterns",
          "priority_percent": 0.87
        },
        {
          "name": "Observability",
          "icon": "fas fa-chart-line text-green-500",
          "tooltip_desc": "Implementing metrics, logs, and traces to monitor and debug complex systems.",
          "link": "https://opentelemetry.io/docs/concepts/observability-primer/",
          "priority_percent": 0.85
        },
        {
          "name": "CI/CD in Architecture",
          "icon": "fas fa-sync-alt text-blue-600",
          "tooltip_desc": "Designing systems to support continuous integration, delivery, and deployment pipelines.",
          "link": "https://www.redhat.com/en/topics/devops/what-is-ci-cd",
          "priority_percent": 0.84
        },
        {
          "name": "Service Discovery",
          "icon": "fas fa-sitemap text-lime-500",
          "tooltip_desc": "Enabling dynamic detection of service endpoints in distributed systems.",
          "link": "https://microservices.io/patterns/service-discovery.html",
          "priority_percent": 0.8
        },
        {
          "name": "Containerization",
          "icon": "fas fa-boxes text-indigo-600",
          "tooltip_desc": "Packaging applications with dependencies for consistency across environments.",
          "link": "https://www.docker.com/resources/what-container/",
          "priority_percent": 0.9
        },
        {
          "name": "Orchestration",
          "icon": "fas fa-network-wired text-cyan-500",
          "tooltip_desc": "Managing container lifecycle, scaling, and networking using orchestrators like Kubernetes.",
          "link": "https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/",
          "priority_percent": 0.88
        },
        {
          "name": "Versioning & Dependency Mgmt",
          "icon": "fas fa-code-branch text-fuchsia-500",
          "tooltip_desc": "Controlling and tracking system evolution and dependency alignment.",
          "link": "https://semver.org/",
          "priority_percent": 0.85
        },
        {
          "name": "Background Processing",
          "icon": "fas fa-tasks text-gray-600",
          "tooltip_desc": "Designing systems to handle async jobs, scheduled tasks, and queue workers.",
          "link": "https://en.wikipedia.org/wiki/Job_scheduling",
          "priority_percent": 0.8
        },
        {
          "name": "Configuration Management",
          "icon": "fas fa-cogs text-emerald-500",
          "tooltip_desc": "Managing service configuration through environment variables, secrets, and toggles.",
          "link": "https://12factor.net/config",
          "priority_percent": 0.78
        },
        {
          "name": "System Integration",
          "icon": "fas fa-puzzle-piece text-sky-500",
          "tooltip_desc": "Connecting systems through APIs, data exchange layers, or service buses.",
          "link": "https://en.wikipedia.org/wiki/System_integration",
          "priority_percent": 0.82
        },
            
      {
        "name": "SQL",
        "icon": "devicon-sqldeveloper-plain colored",
        "tooltip_desc": "Declarative language for querying and managing relational databases.",
        "link": "https://en.wikipedia.org/wiki/SQL",
        "priority_percent": 0.88
      },
      {
        "name": "Laravel",
        "icon": "devicon-laravel-plain colored",
        "tooltip_desc": "PHP web framework with expressive, elegant syntax and built‑in tools for common tasks.",
        "link": "https://laravel.com/",
        "priority_percent": 0.82
      },
      {
        "name": "Django",
        "icon": "devicon-django-plain",
        "tooltip_desc": "High‑level Python web framework encouraging rapid development and clean design.",
        "link": "https://www.djangoproject.com/",
        "priority_percent": 0.85
      },
      {
        "name": "Spring Boot",
        "icon": "devicon-spring-plain colored",
        "tooltip_desc": "Java framework for building production‑ready standalone Spring applications.",
        "link": "https://spring.io/projects/spring-boot",
        "priority_percent": 0.77
      },
      {
        "name": "GraphQL",
        "icon": "devicon-graphql-plain colored",
        "tooltip_desc": "Query language for APIs enabling clients to request exactly the data they need.",
        "link": "https://graphql.org/",
        "priority_percent": 0.8
      },   
      {
        "name": "Node.js",
        "icon": "devicon-nodejs-plain colored",
        "tooltip_desc": "JavaScript runtime built on Chrome’s V8 engine for scalable network applications.",
        "link": "https://nodejs.org/",
        "priority_percent": 0.4
      },
      {
        "name": "Vue.js",
        "icon": "devicon-vuejs-plain colored",
        "tooltip_desc": "Progressive JavaScript framework for building user interfaces.",
        "link": "https://vuejs.org/",
        "priority_percent": 0.85
      },
      {
        "name": "Nuxt.js",
        "icon": "devicon-nuxtjs-plain colored",
        "tooltip_desc": "Framework for creating Vue.js applications with server‑side rendering and static generation.",
        "link": "https://nuxtjs.org/",
        "priority_percent": 0.8
      },
      {
        "name": "Flutter",
        "icon": "devicon-flutter-plain colored",
        "tooltip_desc": "UI toolkit for crafting natively compiled applications for mobile, web, and desktop from a single codebase.",
        "link": "https://flutter.dev/",
        "priority_percent": 0.84
      },
      {
        "name": "Docker",
        "icon": "devicon-docker-plain colored",
        "tooltip_desc": "Platform for containerizing applications to ensure consistency across environments.",
        "link": "https://www.docker.com/",
        "priority_percent": 0.9
      },
      {
        "name": "PostgreSQL",
        "icon": "devicon-postgresql-plain colored",
        "tooltip_desc": "Advanced open‑source relational database emphasizing extensibility and standards compliance.",
        "link": "https://www.postgresql.org/",
        "priority_percent": 0.5
      },
      {
        "name": "MongoDB",
        "icon": "devicon-mongodb-plain colored",
        "tooltip_desc": "Document‑oriented NoSQL database for high volume data storage.",
        "link": "https://www.mongodb.com/",
        "priority_percent": 0.5
      },
      {
        "name": "Redis",
        "icon": "devicon-redis-plain colored",
        "tooltip_desc": "In‑memory data structure store used as database, cache, and message broker.",
        "link": "https://redis.io/",
        "priority_percent": 0.5
      },
      {
        "name": "GitHub",
        "icon": "devicon-github-original",
        "tooltip_desc": "Platform for version control and collaboration.",
        "link": "https://github.com/",
        "priority_percent": 0.95
      },

      {
        "name": "Git",
        "icon": "devicon-git-plain-wordmark colored",
        "tooltip_desc": "Platform for version control and collaboration.",
        "link": "https://git-scm.com/",
        "priority_percent": 0.9
      },

      
      {
        "name": "SQL",
        "icon": "devicon-mysql-plain colored",
        "tooltip_desc": "Language for managing and querying relational databases.",
        "link": "https://en.wikipedia.org/wiki/SQL",
        "priority_percent": 0.4
      },
      {
        "name": "RabbitMQ",
        "icon": "devicon-rabbitmq-original colored",
        "tooltip_desc": "Rabbitmq Open-source message broker for asynchronous communication.",
        "link": "https://www.rabbitmq.com/",
        "priority_percent": 0.6
      },
      {
        "name": "Postman",
        "icon": "devicon-postman-plain colored",
        "tooltip_desc": "API platform for building and using APIs.",
        "link": "https://www.postman.com/",
        "priority_percent": 0.3
      },
      {
        "name": "Nginx",
        "icon": "devicon-nginx-original colored",
        "tooltip_desc": "Nginx",
        "link": "https://nginx.org/",
        "priority_percent": 0.9
      },
      {

        "name":"Swagger",
        "icon":"devicon-swagger-plain colored",
        "tooltip_desc": "Swagger",
        "link": "https://swagger.io/",
        "priority_percent": 0.3
      },
      {
        "name": "Grafana",
        "icon": "devicon-grafana-plain colored",
        "tooltip_desc": "Open-source analytics and monitoring platform.",
        "link": "https://grafana.com/",
        "priority_percent": 0.5
      },
      {
        "name": "Penthouse",
        "icon": "devicon-prometheus-original colored",
        "tooltip_desc": "prometheus",
        "link": "https://prometheus.io/",
        "priority_percent": 0.4
      },
    ]
  }



// Experience data
export const experienceData = {
  en:[
    {
      year: "2023 – Present",
      company: "FinTechSys",
      position: "Software Engineer → Senior Software Development Engineer",
      link: "https://fintechsys.net",
      achievements: [
        "Participated in the development of an electronic payment platform connecting multiple digital wallets under a single merchant interface",
        "Contributed to the development of financial systems using microservices and orchestration to execute transactions across multiple remittance networks",
        "Developed the KYC (Trust System) platform, supervised the development team, and collaborated with AI engineers to deploy ML models as API services",
        "Built high-performance management interfaces for financial systems",
        "Contributed to the development of an e-wallet application",
        "Key contributor to the blockchain-based payment network management system, responsible for maintenance and enhancements",
        "Provided technical consultancy and guidance to development and operations teams"
      ]
    },
    {
      year: "2023 – Present",
      company: "Partner-Cons (Contract)",
      position: "Software Engineer / Technical Consultant",
      link: "https://partner-cons.com/",
      achievements: [
        "Participated in the implementation and customization of the SuiteCRM system for the Yemeni Chambers of Commerce",
        "Contributed to the development of HR module applications in ERPNext",
        "Provided technical solutions and consulting to the deployment team"
      ]
    },
    {
      year: "2024 – Present",
      company: "AphaCode",
      position: "Senior Software Engineer / Consultant",
      link: "#",
      achievements: [
        "Led a team in developing a comprehensive e-commerce system (Flutter/Laravel/React)",
        "Established deployment pipelines, including source code and release management",
        "Implemented system architecture and workflow processes"
      ]
    },
    {
      year: "2019 – Present",
      company: "Freelance",
      position: "Full-Stack Developer & Consultant",
      link: "#",
      achievements: [
        "Developed a 'Recharge Station' digital card system (Laravel/GraphQL/Flutter) including:\n  - Implementation of synchronization processes\n  - Integrations with external providers\n  - Management of backend operations",
        "Contributed to building corporate websites using Laravel",
        "Provided consultancy on system development and architecture"
      ]
    }
  ],
  ar: [
    {
      year: "2023 - الوقت الحالي",
      company: "FinTechSys",
      position: "مهندس برمجيات → مهندس تطوير برمجيات أول",
      link: "https://fintechsys.net",
         achievements: [
        "شاركت في تطوير نظام  منصة دفع إلكتروني يربط بين عدة محافظ رقمية تحت منصة تاجر واحدة",
        "شاركت في تطوير أنظمة مالية باستخدام ميكروسيرفيس وأوركستريشن لتنفيذ المعاملات عبر شبكات حوالات متعددة",
        "شاركت في تطوير منصة (KYC - نظام ثقة) والإشراف على فريق التطوير , وشاركت مع مطوري الذكاء الاصطناعي لنشر نماذج ML كخدمات API",
        "طورت واجهات إدارة أنظمة مالية عالية الكفاءة",
        "شاركت في تطوير تطبيق محفظة إلكترونية ",
        "مساهم رئيسي في نظام إدارة شبكات الدفع (Blockchain) - صيانة وتطوير النظام الحالي",
        "قدمت استشارات تقنية وتوجيه لفرق التطوير والتشغيل"
      ]
    },
    {
      year: "2023 - الوقت الحالي",
      company: "Partner-Cons (Contract) ",
      position: "مهندس برمجيات / مستشار تقني",
      link: "https://partner-cons.com/",
      achievements: [
        "شاركت في تنفيذ وتخصيص نظام SuiteCRM للغرف التجارية اليمنية",
        "ساهمت في تطوير تطبيقات وحدة الموارد البشرية في ERPNext",
        "قدمت حلولاً تقنية واستشارات لفريق التنفيذ"
      ]
    },
    {
      year: "2024 - الوقت الحالي",
      company: "AphaCode",
      position: "مهندس برمجيات أول / مستشار",
      link: "#",
      achievements: [
        "قادت فريقاً في تطوير نظام متجر إلكتروني متكامل (Flutter/Laravel/React)",
        "أنشأت آليات النشر بما في ذلك ادارة السورس كود والاصدارات",
        "نفذت بنية النظام ومسارات العمل"
      ]
    },
    {
      year: "2019 - الوقت الحالي",
      company: "أعمال حرة",
      position: "مطور شامل ومستشار",
      link: "#",
      achievements: [
        "تظوير نظام 'محطة شحن' للبطاقات الرقمية (Laravel/GraphQL/Flutter) شمل:",
        "- تنفيذ عمليات المزامنة",
        "- تكاملات مع مزودين خارجيين",
        "- إدارة العمليات الخلفية",
        "ساهمت في تطوير مواقع إلكترونية للشركات باستخدام لارافيل",
        "قدمت استشارات في تطوير الأنظمة"
      ]
    }
  ]
};

// Projects data
export const projectsData = {
  en: [
    {
      title: "Enterprise Cloud Platform",
      description: "Microservices-based platform managing cloud resources across AWS, Azure and GCP with unified interface and automated cost optimization.",
      image: "/placeholder.svg",
      technologies: ["TypeScript", "React", "Node.js", "GraphQL", "Docker", "Kubernetes"]
    },
    {
      title: "Financial Analytics Dashboard",
      description: "Real-time analytics dashboard processing market data with advanced visualizations and predictive insights for institutional investors.",
      image: "/placeholder.svg",
      technologies: ["Python", "D3.js", "TensorFlow", "AWS Lambda", "DynamoDB"]
    },
    {
      title: "Healthcare Management System",
      description: "HIPAA-compliant patient management platform with scheduling, medical records, and integrated billing modules.",
      image: "/placeholder.svg",
      technologies: ["PHP", "Laravel", "MySQL", "Vue.js", "Docker"]
    },
    {
      title: "IoT Monitoring Solution",
      description: "Real-time monitoring system for industrial equipment with predictive maintenance features and mobile alerts.",
      image: "/placeholder.svg",
      technologies: ["Node.js", "MQTT", "React Native", "MongoDB", "InfluxDB"]
    }
  ],
  ar: [
    {
      title: "منصة سحابية للمؤسسات",
      description: "منصة قائمة على الخدمات المصغرة تدير موارد السحابة عبر AWS وAzure وGCP بواجهة موحدة وتحسين تكلفة آلي.",
      image: "/placeholder.svg",
      technologies: ["TypeScript", "React", "Node.js", "GraphQL", "Docker", "Kubernetes"]
    },
    {
      title: "لوحة معلومات التحليلات المالية",
      description: "لوحة تحليلات في الوقت الحقيقي لمعالجة بيانات السوق مع تصورات متقدمة ورؤى تنبؤية للمستثمرين المؤسسيين.",
      image: "/placeholder.svg",
      technologies: ["Python", "D3.js", "TensorFlow", "AWS Lambda", "DynamoDB"]
    },
    {
      title: "نظام إدارة الرعاية الصحية",
      description: "منصة إدارة المرضى المتوافقة مع HIPAA مع وحدات الجدولة والسجلات الطبية والفواتير المتكاملة.",
      image: "/placeholder.svg",
      technologies: ["PHP", "Laravel", "MySQL", "Vue.js", "Docker"]
    },
    {
      title: "حل مراقبة إنترنت الأشياء",
      description: "نظام مراقبة في الوقت الحقيقي للمعدات الصناعية مع ميزات الصيانة التنبؤية وتنبيهات الهاتف المحمول.",
      image: "/placeholder.svg",
      technologies: ["Node.js", "MQTT", "React Native", "MongoDB", "InfluxDB"]
    }
  ]
};
