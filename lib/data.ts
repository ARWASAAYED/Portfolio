/* ── PROJECTS DATA SOURCE ────────────────────────────────────────────────── */
export interface Project {
  id: string;
  name: string;
  description: string;
  tags: ("all" | "full-stack" | "live" | "frontend")[];
  tech: string[];
  github: string | null;
  live: string | null;
  featured: boolean;
  icon: "building" | "shield" | "heart" | "calendar" | "laptop";
  color: "purple" | "teal" | "coral";
  period: string;
  image?: string | null;
}

export const projects: Project[] = [
  {
    id: "businessnet",
    name: "Business Net",
    description:
      "A comprehensive, enterprise-tier social networking ecosystem tailored for businesses. Combines professional social graphs with AI content parsing metrics, multi-channel real-time socket communication, complex gamification mechanics, and detailed ad-promotion tracking analytics.",
    tags: ["full-stack", "live"],
    tech: [
      "Next.js", 
      "TypeScript", 
      "Socket.io", 
      "Redux Toolkit", 
      "Stripe Payments", 
      "JWT Auth", 
      "Node.js", 
      "MongoDB", 
      "Mongoose ORM", 
      "Tailwind CSS", 
      "Framer Motion", 
      "Express.js", 
      "Bcrypt", 
      "Node-Mailer", 
      "Postman API Testing"
    ],
    github: "https://github.com/ARWASAAYED/BusinessNet_NTI_GP",
    live: null,
    featured: true,
    icon: "building",
    color: "purple",
    period: "Dec 2025 – Jan 2026",
    image: "/businessNet.png"
  },
  {
    id: "trustzone",
    name: "Trust Zone",
    description:
      "High-reliability service marketplace and graduation project. Features geospatial map integrations with location access status overlays, asynchronous provider reviews, instant bidirectional chat modules, and a dedicated context-aware AI assistant drawer.",
    tags: ["frontend", "live"],
    tech: [
      "React.js", 
      "Google Maps JavaScript API", 
      "Google Places API",
      "Google Maps Directions API",
      "Socket.io-client", 
      "Natural Language Processing / AI Integration", 
      "Node.js", 
      "Express.js", 
      "MongoDB", 
      "Mongoose", 
      "Tailwind CSS", 
      "Framer Motion", 
      "CSS Modules",
      "Geospatial Indexing"
    ],
    github: "https://github.com/ARWASAAYED/Trust-Zone-GP",
    live: "https://trust-zone-gp.vercel.app/",
    featured: true,
    icon: "shield",
    color: "teal",
    period: "2025",
    image: '/trustzone.png'
  },
  {
    id: "medicare",
    name: "MediCare",
    description:
      "Multi-tenant hospital infrastructure driven by complex role-guards. Features parallel administrative analytics views, self-service patient booking controls, individual doctor schedule trackers, and concurrent transactional slot-locking routines over Firebase.",
    tags: ["frontend", "live"],
    tech: [
      "React.js", 
      "Redux Toolkit", 
      "Firebase Web SDK", 
      "Cloud Firestore (NoSQL DB)", 
      "Firebase Authentication", 
      "Tailwind CSS", 
      "Axios REST Client", 
      "Vercel Deployment", 
      "HTML5 / CSS3", 
      "React Router DOM v6",
      "Lucide Icons"
    ],
    github: "https://github.com/ARWASAAYED/MediCare_Project",
    live: "https://medi-care-project-ten.vercel.app/",
    featured: false,
    icon: "heart",
    color: "coral",
    period: "Aug 2025 – Oct 2025",
    image: '/medicare.png'
  },
  {
    id: "eventchamp",
    name: "EventChamp",
    description:
      "Dynamic ticketing matrix featuring multi-tier administrative dashboards. Includes automated calendar scheduling models, programmatic tracking for speakers and venues, sandbox payment simulators, and multi-parameter discovery filtering layers.",
    tags: ["full-stack"],
    tech: [
      "React.js", 
      "Redux Toolkit", 
      "Bootstrap 5", 
      "SASS / SCSS", 
      "RESTful API Integration", 
      "Sandbox Payment Gateway Simulator", 
      "Git / GitHub Workflow", 
      "JavaScript (ES6+)", 
      "Context API", 
      "Custom Date-Fns Timeline Engine"
    ],
    github: "https://github.com/ARWASAAYED/ATC_01063072720/tree/master",
    live: null,
    featured: false,
    icon: "calendar",
    color: "purple",
    period: "May 2025",
    image: '/eventcamp.png'
  },
  {
    id: "digitic",
    name: "Digitic E-commerce",
    description:
      "Full-scale electronic marketplace featuring multi-layered product filtration, secure JWT-refresh architectures, automated Cloudinary storage nodes, dynamic user reviews, and comprehensive admin dashboard managers handling catalogs and user rosters.",
    tags: ["full-stack"],
    tech: [
      "React.js", 
      "Redux Toolkit", 
      "JWT Secure Token Rotation", 
      "Cloudinary Media Upload API", 
      "Bootstrap UI Framework", 
      "Node.js Backend", 
      "Express.js Server", 
      "MongoDB Database", 
      "Mongoose Schemas", 
      "Bcrypt Hashing", 
      "Axios Interceptors", 
      "Morgan Logger"
    ],
    github: "https://github.com/ARWASAAYED/Digitic-Ecommerce",
    live: null,
    featured: false,
    icon: "laptop",
    color: "teal",
    period: "Jan 2025 – Mar 2025",
    image: '/digitic.png'
  }
];

/* ── TECH STACK & EXPERTISE ──────────────────────────────────────────────── */
export const skills = [
  {
    category: "Frontend System Design",
    items: ["React.js", "Next.js (App Router)", "TypeScript", "JavaScript (ES6+)", "HTML5 / Semantic DOM"],
  },
  {
    category: "State Engines & Caching",
    items: ["Redux Toolkit", "RTK Query", "Asynchronous Cache Invalidation", "Optimistic UI Updates"],
  },
  {
    category: "Layout Frameworks & Animation",
    items: ["Tailwind CSS", "Framer Motion Animations", "CSS Modules", "SASS / SCSS Engineering", "Bootstrap Grid"],
  },
  {
    category: "Backend & Data Architectures",
    items: ["Node.js Framework", "Express.js Core", "RESTful API Design", "MongoDB (Mongoose)", "MySQL Relational Schemas"],
  },
  {
    category: "Real-time Protocols & Gateways",
    items: ["Socket.io (WebSockets)", "JWT Security (Refresh Rotations)", "Stripe Payments Integration", "Cloudinary Media Optimization", "Firebase Web SDK"],
  },
  {
    category: "Workflow & Engineering Tools",
    items: ["Git / Advanced GitHub CI", "Postman API Testing", "Jest Component Unit Testing", "Lighthouse Performance Tuning", "Agile Execution Architecture"],
  },
];

/* ── CAREER ARCHIVE (EXPERIENCE) ─────────────────────────────────────────── */
export const experience = [
  {
    role: "Full-Stack Developer Intern",
    company: "Petra Software Company",
    period: "Feb 2026 – Mar 2026",
    type: "work",
    bullets: [
      "Engineered a comprehensive multi-portal system (Admin, Provider, and Customer channels) leveraging React.js, Node.js, and complex MySQL relational databases.",
      "Architected and integrated 25+ robust RESTful API endpoints for authentication, state machine order tracking, and core product services.",
      "Reduced overall network packet overhead and redundant API operations by 40% using strategic Client-side caching configurations.",
      "Achieved stable production Lighthouse scores above 90 through radical route lazy loading, dynamic code splitting, and strict global Redux state management.",
      "Optimized server response latency down below a 250ms threshold by executing normalized indexing and restructuring backend middleware layers."
    ],
  },
  {
    role: "Open-Source Applications Developer",
    company: "DEY HireReady NTI",
    period: "Oct 2025 – Jan 2026",
    type: "work",
    bullets: [
      "Completed rigorous engineering training intensive encompassing full-stack web software, advanced real-time networking protocols, database normalization, and secure hosting deployments."
    ],
  },
  {
    role: "React Web Developer",
    company: "Digital Egypt Pioneers Initiative",
    period: "Apr 2024 – Oct 2024",
    type: "work",
    bullets: [
      "Focused on programmatic component lifecycles, advanced hooks, complex form processing, and custom state synchronization utilities."
    ],
  },
  {
    role: "B.Sc. Computer Science",
    company: "Faculty of Computers & Information, Minya University",
    period: "2021 – 2025",
    type: "education",
    bullets: [
      "Graduation Project: Trust Zone — A full production ecosystem delivering contextual interactive maps, real-time message rooms, custom filters, and embedded AI microservices."
    ],
  }
];

/* ── STATS SUMMARY ───────────────────────────────────────────────────────── */
export const stats = [
  { num: "5+", label: "Engineered Platforms" },
  { num: "25+", label: "Production APIs Deployed" },
  { num: "94", label: "Peak Lighthouse Metrics" },
  { num: "40%", label: "API Overhead Reduction" },
];

/* ── DETAILED EXTENDED PROJECT ARCHIVE ────────────────────────────────────── */
export const projectDetails: Record<
  string,
  { 
    overview: string; 
    challenge: string; 
    solution: string; 
    keyHighlights: string[]; 
    features: Record<string, string[]>;
  }
> = {
  businessnet: {
    overview: "Business Net is an end-to-end, multi-tenant social ecosystem built specifically for enterprise operations, business entities, and solo entrepreneurs. The platform smoothly scales interactions by combining professional social graphs with real-time webhooks, automated media routing grids, and asynchronous analytics processors.",
    challenge: "Synchronizing high-density, multi-user real-time event streams (messaging, presence tags, typing loops) across deep nested community scopes while strictly guaranteeing absolute transactional safety and avoiding race conditions during high-volume Stripe webhook callback actions.",
    solution: "Divided live state scopes into isolated WebSocket rooms via Socket.io channels, centralized transactional mutations through normalized Redux Toolkit slices to implement instantaneous UI state feedback, and engineered a fail-safe Express.js verification gateway processing webhook event logs against MongoDB document references.",
    keyHighlights: [
      "🤖 AI-Powered: Intelligent contextual post analysis, sentiment boundary tracking, and automated personalized recommendations.",
      "⚡ Real-Time: Sub-100ms persistent instant messaging channels, transactional live alerts, and stateful presence/online detection loops.",
      "📊 Performance Analytics: Comprehensive data visibility tracking consumer profiles, content performance metrics, and monetization logs.",
      "🎯 Targeted Promotion: Scalable contextual advertising framework with click-through rate calculations and geographic positioning maps.",
      "🏆 Advanced Gamification: Complex achievement tier badges and real-time computation of reputation scoring vectors to maximize user retention.",
      "🌐 Community-Driven Architectural Hubs: Public and private dynamic micro-networks arranged cleanly around discovery metadata tags."
    ],
    features: {
      "Authentication & Multi-Tenant Roles": [
        "Robust JWT-based secure authentication featuring silent refresh token rotation modules.",
        "Granular Role-Based Access Control (RBAC) separating features and data schemas between Individual Users and Registered Corporate Businesses.",
        "OAuth2 social login pipelines (Google, LinkedIn) coupled with background SMTP email confirmation routines."
      ],
      "Content Feed & Advanced Interaction Matrix": [
        "Rich text post creator allowing users and companies to attach images, documents, write professional updates, and parse hashtag indexing grids.",
        "Custom Reaction Core: Interactive system allowing users to express multi-parameter evaluation feedback (Like, Celebrate, Insightful, Love) on timeline posts.",
        "Multi-Nested Relational Comments: Multi-level comment trees that let users branch deep structured conversation threads with real-time optimistic UI updates."
      ],
      "Corporate & Business Profiles": [
        "Data-dense dashboards exposing business catalogs, follower lists, and verification systems.",
        "Verified badges distribution engines tied directly to algorithmic reputation scoring values."
      ],
      "Paid Post Promotion & Ad Infrastructure": [
        "End-to-end paid campaign creation wizard enabling Corporate Businesses to pay for specific posts to get boosted or pinned across target user demographics.",
        "Secure Stripe checkout gateway running async webhook handlers to verify successful transactions before updating feed distribution visibility rules.",
        "Real-time corporate back-office analytical charts mapping total impressions, clicks, click-through-rates (CTR), and deep campaign ROI metrics."
      ],
      "Real-Time Message Core": [
        "Bi-directional peer-to-peer message streams utilizing persistent Socket state parameters.",
        "Visual typing indicator states, message delivery/read confirmations, text search arrays, and contextual emoji reaction maps."
      ],
      "Notifications & Trends Framework": [
        "In-app Notification Center matching preferences with instant background push updates.",
        "Discovery models tracking keyword velocity, trending metadata, and sentiment direction changes."
      ]
    }
  },
  trustzone: {
    overview: "Trust Zone is an advanced local service delivery ecosystem engineered as a comprehensive university graduation platform. It targets operational friction in local professional discovery by synthesizing precise geolocation spatial vectors with instantaneous multi-user communication frameworks.",
    challenge: "Maintaining accurate state coordination across active geographic map modules, real-time message instances, and heavy background natural language calculations without triggering layout shifts or browser execution bottlenecks.",
    solution: "Developed integrated marker memoization tables caching map nodes, isolated socket connections into dedicated hooks with clean teardown cycles, and managed the AI sidebar model asynchronously using isolated web layouts.",
    keyHighlights: [
      "🗺️ Location Access Diagnostics: Features explicit map geolocation checks with automated safe fallbacks if access permissions are disabled.",
      "♿ Accessibility Safeguards: Specifically built to allow people with disabilities to view physical access status indicators and quickly find out if a venue is accessible.",
      "💬 Bidirectional Communications: Delivers reliable sub-50ms instant text rooms matching consumers directly with local field operators.",
      "🧠 On-Demand AI Companion: Integrates an embedded sidebar AI drawer built to generate localized service options from natural text inputs.",
      "📍 Geolocation Filtering: Allows consumers to perform deep parametric searches across service providers based on active geographic coordinates.",
      "⭐️ Verified Feedback Aggregation: Incorporates an immutable provider review scoring engine tracking ratings, text feedback, and verified provider logs."
    ],
    features: {
      "Geospatial Map Operations": [
        "Interactive Google Maps API engine rendering tailored location coordinates dynamically.",
        "Stateful tracking of device geolocation prompts with inline UI alerts explaining permission recovery states when disabled."
      ],
      "Accessibility & Provider Discovery": [
        "Algorithmic filtering logic sorting provider records by exact locality parameters, consumer star scores, accessibility categories, and market sectors.",
        "Dedicated UI tags showing access configurations (wheelchair access, sensory accommodations) explicitly configured to support individuals with disabilities."
      ],
      "Real-Time Chat & AI Engine": [
        "Full peer-to-peer real-time text conduits operating on dedicated WebSocket state nodes for live communication.",
        "Asynchronous AI recommendation assistant available via an overlay sliding layout container to parse complex accessibility search queries instantly."
      ]
    }
  },
  medicare: {
    overview: "MediCare is a role-guarded, multi-tenant healthcare administration dashboard platform designed to manage critical clinical workflows, including patient scheduling metrics, physician availability trackers, and core corporate data pipelines.",
    challenge: "Preventing medical appointment double-bookings and data leakage across distinct user groups while keeping data synced under concurrent operations.",
    solution: "Implemented strict Firestore transaction rules executing atomic verification checks during the slot allocation process, wrapped client routing layouts in functional higher-order logic guards, and managed global dashboard data states using Redux Toolkit.",
    keyHighlights: [
      "📅 Patient Appointment Suite: Self-service patient booking portal allowing real-time selection of available time slots.",
      "🩺 Doctor Telemetry Dashboard: Specialized clinical workspace enabling physicians to view daily schedules, manage incoming patient appointments, and set active office hours.",
      "🛡️ Unified Admin Hub: High-level corporate dashboard allowing managers to supervise the entire user directory, manage operational medical tiers, and audit total system registrations.",
      "⚡ Real-Time Booking Sync: Leverages low-latency Firebase socket paths to lock clinical time options instantly during booking, preventing scheduling conflicts."
    ],
    features: {
      "Patient Operations Engine": [
        "Self-service workflow enabling patients to book appointments across individual clinics and specialties.",
        "Interactive patient profiles tracking upcoming medical appointments, appointment cancellations, and historical review notes.",
        "Asynchronous review feedback forms where patients can submit text evaluations and star ratings for specific doctors."
      ],
      "Physician Management Portal": [
        "Dynamic calendar workspace rendering real-time incoming appointment requests and patient profiles.",
        "Interactive controls enabling doctors to dynamically open, close, or reallocate appointment blocks based on availability parameters."
      ],
      "Administrative Supervision Hub": [
        "Comprehensive administrative user dashboard layout rendering lists of all registered users (patients, doctors, administrators).",
        "Centralized configuration panels for creating, updates, and archiving medical categories, departmental divisions, and clinic locations."
      ]
    }
  },
  eventchamp: {
    overview: "EventChamp is a full-featured event cataloging and transactional ticketing platform built to optimize asset allocation for corporate conferences, speaker summits, and large-scale public venues.",
    challenge: "Handling multi-tier ticketing balances and calendar layout conflicts on the client side without relying on complex, resource-heavy backend validation checks.",
    solution: "Designed structural indexing structures within Redux to perform immediate scheduling validation, and built an internal mock payment API executing isolated validation states.",
    keyHighlights: [
      "🎙️ Speaker & Venue Directories: Comprehensive public indexing modules mapping profiles, presentation agendas, and physical arena capacities.",
      "💳 Sandbox Payment Simulation: Fully functional testing payment interface processing fake currency cards with descriptive status code logs.",
      "⚙️ Admin Lifecycle Controls: Administrative panel enabling management personnel to dynamically configure new event timelines, link venues, register speakers, and monitor registered attendee logs.",
      "🔍 Multi-Parameter Search: Deep filtering components allowing users to isolate events by active dates, specific venues, or specialized topics."
    ],
    features: {
      "Administrative Event Control Panel": [
        "Comprehensive dashboard views allowing administrators to manage structural listings, register speakers, and allocate specific physical venues.",
        "User administration roster mapping registered attendee lists, ticket types, and user confirmation states."
      ],
      "Ticketing & Checkout Core": [
        "Multi-step checkout workflow with dynamic pricing modifications based on ticket tiers.",
        "Sandbox transaction processing engine simulating fake payment approval and failure outcomes to validate state updates safely on the frontend."
      ]
    }
  },
  digitic: {
    overview: "Digitic is a robust, full-scale electronics e-commerce platform featuring an extensive multi-layered product filtration system, reliable media processing nodes, secure authorization layers, and a decoupled operational back-office administration board.",
    challenge: "Rendering dense product catalogs with complex multi-parameter filter arrays while keeping layout performance high and data synchronization smooth across both client and admin dashboards.",
    solution: "Centralized complex search operations inside high-performance Redux matrices, designed reusable data table configurations for admin asset management, and offloaded media processing tasks to Cloudinary pipelines.",
    keyHighlights: [
      "🎛️ Multi-Layer Product Sorting: Powerful client-side navigation filters enabling users to sort large inventories by category, price bounds, brands, and rating scores.",
      "📝 Stateful Review Infrastructure: Customer review submission system allowing buyers to post product star ratings and text feedback after purchase validation.",
      "📦 Automated Media Pipeline: Integrates Cloudinary media transformations to optimize and serve product imagery efficiently across the site.",
      "👑 Back-Office Admin Engine: Central administration platform giving team members full control over the product catalog, order fulfillments, discount voucher distribution, and total user directory profiles."
    ],
    features: {
      "Consumer Experience Layer": [
        "Responsive grid interface supporting dynamic inventory filtering, detailed item specification views, and product image galleries.",
        "Interactive customer feedback modules executing live star calculations and appending public review logs to specific product records."
      ],
      "Back-Office Administration Panel": [
        "Robust management interface providing complete controls (Create, Read, Update, Delete) for products, inventory metrics, categories, and coupons.",
        "Order lifecycle monitoring grid displaying fulfillment updates, invoice details, and customer account registration lists."
      ]
    }
  }
};

/* ── DECOUPLED TECHNICAL ESSAYS (BLOG) ───────────────────────────────────── */
export const blogPosts = [
  {
    slug: "react-performance-optimization",
    title: "5 React Performance Optimizations I Use in Every Project",
    excerpt: "From lazy loading architectures to structural memoization vectors — the exact patterns that took my applications to a 94+ Lighthouse threshold.",
    date: "2026-05-10",
    readTime: "6 min read",
    tags: ["React", "Performance", "Frontend"],
    content: `
## Why Performance Matters

Every millisecond counts. In high-stakes production software, engineering layout responsiveness is directly proportional to user retention. During my time building systems at Petra Software Company, implementing optimized request management reduced network overhead by 40%. Here is the exact programmatic blueprint.

## 1. Lazy Loading Routes

\`\`\`tsx
const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Dashboard />
    </Suspense>
  );
}
\`\`\`

Splitting component scopes ensures that secondary view assets only hydrate upon direct intent, cutting down initial payload sizes.

## 2. useMemo for Expensive Computations

\`\`\`tsx
const filteredProducts = useMemo(() => {
  return products.filter(p => p.category === activeCategory && p.price <= maxPrice);
}, [products, activeCategory, maxPrice]);
\`\`\`

Using explicit dependency indices ensures filter calculations only evaluate when their specific reference changes, preventing computational strain on global state updates.

## 3. useCallback for Stable Event Handlers

\`\`\`tsx
const handleSearch = useCallback((query: string) => {
  dispatch(setSearchQuery(query));
}, [dispatch]);
\`\`\`

Maintains single reference coordinates for function declarations, avoiding unnecessary virtual DOM rendering tasks on lower component fragments.

## 4. Virtualization for Long Lists

When handling high-volume arrays containing hundreds of nodes, bypass standard maps processing and utilize virtualization engines:

\`\`\`tsx
import { FixedSizeList } from 'react-window';

<FixedSizeList height={600} itemCount={products.length} itemSize={80}>
  {({ index, style }) => <ProductRow style={style} product={products[index]} />}
</FixedSizeList>
\`\`\`

## 5. Automated Next.js Media Optimizations

\`\`\`tsx
import Image from 'next/image';

<Image src="/hero.jpg" width={800} height={400} priority alt="Hero" />
\`\`\`

Leverage integrated pipeline parameters to serve layouts via automated WebP compression channels while avoiding core layout shifts.`
  },
  {
    slug: "redux-toolkit-real-world",
    title: "Redux Toolkit in Real Projects: What Nobody Tells You",
    excerpt: "Insights derived across 4+ complex applications — how to manage data normalization, leverage RTK Query, and eliminate boilerplate efficiently.",
    date: "2026-04-18",
    readTime: "8 min read",
    tags: ["Redux", "React", "State Management"],
    content: `
## Overcoming Traditional Redux Overhead

Classic state configurations forced developers to manually outline multiple cascading constants, reducers, and action frameworks. Redux Toolkit streamlines this workflow by integrating structural immutability patterns by default.

## createSlice Architecture

\`\`\`ts
const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], total: 0 },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload); // Immer handles underlying state safety implicitly
      state.total += action.payload.price;
    }
  },
});
\`\`\`

## RTK Query: Abstracting API Infrastructure

During the refactoring loop of my Digitic platform, substituting custom fetching implementations with clean automated RTK endpoints eliminated hundreds of redundant operational lines:

\`\`\`ts
const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], Filters>({
      query: (filters) => ({ url: '/products', params: filters }),
    }),
  }),
});
\`\`\`

This pattern delivers integrated caching structures, loading tracks, and cache invalidation mechanics without requiring nested hooks.`
  }
];