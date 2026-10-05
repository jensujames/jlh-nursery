import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { 
  Sparkles, Calendar, Eye, RotateCcw, 
  ShieldCheck, Video, Lock, Trees, Sun, 
  Moon, CloudMoon, Heart, HeartPulse, Stethoscope, 
  ArrowRight, Shield, Award, CheckCircle2, ChevronRight, Activity, Footprints,
  ChevronLeft, Play, Star, Rocket, Clock
} from 'lucide-react';
import FullWidthCurvedGallery from './FullWidthCurvedGallery';
import FactCarousel from './FactCarousel';
import { Link } from 'react-router-dom';

const ACTIVITY_BOXES = [
  {
    id: 'creative-play',
    title: 'Creative Play Lab',
    desc: 'Kids learn teamwork & imagination through hands-on play, building creativity, problem-solving, & friendships.',
    image: '/images/activity-creative-play.jpg',
    colorTheme: 'blue',
    tag: 'Teamwork & Play',
    ageBadge: '18m – 4y',
    highlights: ['Sensory Magnetic Tiles', 'Creative Spatial Geometry', 'Cooperative Peer Building']
  },
  {
    id: 'little-artists',
    title: 'Little Artists Workshop',
    desc: 'A colorful journey into painting, crafts, & self-expression, sparking confidence, original, & discovery.',
    image: '/images/activity-little-artists.jpg',
    colorTheme: 'green',
    tag: 'Art & Self-Expression',
    ageBadge: '2y – 4.5y',
    highlights: ['Washable Finger Paints', 'Montessori Wooden Easels', 'Eco-Clay Tactile Crafts']
  },
  {
    id: 'mini-stem',
    title: 'Mini STEM Explorers',
    desc: 'Fun experiments introducing science, numbers, & discovery, inspiring curiosity, innovation, and learning.',
    image: '/images/activity-mini-stem.jpg',
    colorTheme: 'peach',
    tag: 'Mini STEM & Inquiry',
    ageBadge: '2.5y – 4y',
    highlights: ['Preschool Microscope Lab', 'Nature Specimen Sorting', 'Early Numbers & Discovery']
  }
];

const FACILITY_SLIDES = [
  {
    id: 'safety-cctv',
    tabLabel: 'Safe Classrooms & CCTV',
    tabIcon: ShieldCheck,
    tag: 'Learning Made Joyful & Secure',
    tagIcon: ShieldCheck,
    themeColor: '#e11d48',
    gradientText: 'linear-gradient(135deg, #e11d48 0%, #f43f5e 50%, #fb7185 100%)',
    headingStart: 'Where Little Minds',
    headingHighlight: 'Grow With Total Safety',
    desc: 'Monitored learning spaces with secure controlled reception, rounded child-safe fittings, and continuous observation for total peace of mind.',
    features: [
      { icon: Video, label: '12 Smart Zones' },
      { icon: ShieldCheck, label: '24/7 HD Feed' },
      { icon: Lock, label: 'Controlled Entry' }
    ],
    metricLabel: 'Inspection & Safety Rating',
    metricValue: '100% Certified',
    metricPercent: 100,
    footerTag: 'Villa 47 Security Core',
    primaryCta: 'Explore Facility',
    secondaryCta: 'See How It Works',
    image: '/images/classroom.jpg',
    blobColor: 'rgba(254, 205, 211, 0.45)',
    accentBadgeBg: 'linear-gradient(135deg, #fff1f2, #ffe4e6)',
    accentBadgeColor: '#be123c',
    primaryBtnBg: 'linear-gradient(135deg, #e11d48, #be123c)',
    floatingCard1: {
      title: "Today's Safety",
      sub: 'Smart Monitoring',
      metric: '100%',
      progressLabel: 'Active Stream',
      progressWidth: '100%',
      icon: ShieldCheck,
      iconColor: '#e11d48',
      iconBg: '#ffe4e6'
    },
    floatingCard2: {
      tag: 'Great Job! 🛡️',
      sub: '100% Safety Verified',
      icon: Award,
      iconColor: '#f59e0b'
    },
    floatingCard3: {
      category: 'Smart Protection',
      title: 'Biometric Check-In',
      icon: Video,
      iconColor: '#e11d48'
    }
  },
  {
    id: 'outdoor-play',
    tabLabel: 'Indoor & Outdoor Play',
    tabIcon: Trees,
    tag: 'Active Gross Motor Discovery',
    tagIcon: Sun,
    themeColor: '#0284c7',
    gradientText: 'linear-gradient(135deg, #0284c7 0%, #0ea5e9 50%, #38bdf8 100%)',
    headingStart: 'Boundless Energy in',
    headingHighlight: 'Joyful Shaded Playgrounds',
    desc: 'Equipped spaces for energetic gross motor play, soft shock-absorbing turf loops, and plenty of fresh air beneath UV protective canopies.',
    features: [
      { icon: Sun, label: 'UV Shade Canopy' },
      { icon: Trees, label: 'Padded Turf' },
      { icon: Footprints, label: 'Active Loops' }
    ],
    metricLabel: 'Daily Play & Movement Goal',
    metricValue: '90 Min / Day',
    metricPercent: 90,
    footerTag: 'UV-Protected Shaded Area',
    primaryCta: 'Explore Play Yards',
    secondaryCta: 'See Outdoor Tour',
    image: '/images/outdoor.jpg',
    blobColor: 'rgba(186, 230, 253, 0.45)',
    accentBadgeBg: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
    accentBadgeColor: '#0284c7',
    primaryBtnBg: 'linear-gradient(135deg, #0284c7, #0369a1)',
    floatingCard1: {
      title: 'Daily Movement',
      sub: 'Outdoor Exercise',
      metric: '90 Min',
      progressLabel: 'Active Movement',
      progressWidth: '90%',
      icon: Sun,
      iconColor: '#0284c7',
      iconBg: '#e0f2fe'
    },
    floatingCard2: {
      tag: 'Well Done! 🏃‍♂️',
      sub: 'Gross motor goal met',
      icon: Star,
      iconColor: '#f59e0b'
    },
    floatingCard3: {
      category: 'Next Session',
      title: 'Sensory Obstacle Course',
      icon: Trees,
      iconColor: '#0284c7'
    }
  },
  {
    id: 'baby-care',
    tabLabel: 'Baby Care & Quiet Room',
    tabIcon: Moon,
    tag: 'Tender Care & Serene Rest',
    tagIcon: Heart,
    themeColor: '#d97706',
    gradientText: 'linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #fbbf24 100%)',
    headingStart: 'Gentle Resting in',
    headingHighlight: 'Calm Soothing Spaces',
    desc: 'Crib-safe, noise-damped, temperature-controlled calm spaces designed for age-appropriate resting routines with dedicated caregivers.',
    features: [
      { icon: CloudMoon, label: '22°C Climate Safe' },
      { icon: Moon, label: 'Acoustic Soothing' },
      { icon: Heart, label: 'Individual Cribs' }
    ],
    metricLabel: 'Quiet Rest Environment',
    metricValue: '100% Calibrated',
    metricPercent: 100,
    footerTag: 'Calm Ambient Climate',
    primaryCta: 'View Baby Care',
    secondaryCta: 'Schedule A Visit',
    image: '/images/nurturing-hero.jpg',
    blobColor: 'rgba(254, 243, 199, 0.55)',
    accentBadgeBg: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
    accentBadgeColor: '#b45309',
    primaryBtnBg: 'linear-gradient(135deg, #d97706, #b45309)',
    floatingCard1: {
      title: 'Sleep Comfort',
      sub: 'Climate Controlled',
      metric: '22°C',
      progressLabel: 'Ambient Sound Damped',
      progressWidth: '100%',
      icon: Moon,
      iconColor: '#d97706',
      iconBg: '#fef3c7'
    },
    floatingCard2: {
      tag: 'Sweet Dreams! 🌙',
      sub: 'Peaceful rest time completed',
      icon: Heart,
      iconColor: '#f59e0b'
    },
    floatingCard3: {
      category: 'Quiet Suite',
      title: 'Individual Sleep Pods',
      icon: CloudMoon,
      iconColor: '#d97706'
    }
  },
  {
    id: 'clinic-visits',
    tabLabel: 'First-Aid Clinic & Visits',
    tabIcon: HeartPulse,
    tag: 'Licensed Pediatric Support',
    tagIcon: Stethoscope,
    themeColor: '#16a34a',
    gradientText: 'linear-gradient(135deg, #16a34a 0%, #22c55e 50%, #4ade80 100%)',
    headingStart: 'Health & Wellness with',
    headingHighlight: 'Licensed On-Site Care',
    desc: 'Equipped first-aid facility with regular pediatric check-ups, sanitized supplies, and certified first-aid staff for every child.',
    features: [
      { icon: HeartPulse, label: 'Nurse On-Site' },
      { icon: Stethoscope, label: 'Doctor Visits' },
      { icon: Activity, label: 'Sterile First-Aid' }
    ],
    metricLabel: 'Pediatric Compliance',
    metricValue: 'MOH Verified Active',
    metricPercent: 100,
    footerTag: 'Villa 47 Medical Suite',
    primaryCta: 'View Protocols',
    secondaryCta: 'Meet Our Nurse',
    image: '/images/hero.jpg',
    blobColor: 'rgba(220, 252, 231, 0.55)',
    accentBadgeBg: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
    accentBadgeColor: '#15803d',
    primaryBtnBg: 'linear-gradient(135deg, #16a34a, #15803d)',
    floatingCard1: {
      title: 'Health Check',
      sub: 'Daily Wellness Vitals',
      metric: 'Normal',
      progressLabel: 'MOH Compliant 100%',
      progressWidth: '100%',
      icon: HeartPulse,
      iconColor: '#16a34a',
      iconBg: '#dcfce7'
    },
    floatingCard2: {
      tag: '100% Healthy! 🩺',
      sub: 'Clean bill of health logged',
      icon: CheckCircle2,
      iconColor: '#16a34a'
    },
    floatingCard3: {
      category: 'Medical Wing',
      title: 'Pediatric Health Check',
      icon: Stethoscope,
      iconColor: '#16a34a'
    }
  }
];

export default function ThreeMascotHero({ onBookVisitClick }) {
  const containerRef = useRef(null);
  const heroCanvasRef = useRef(null);
  const blocksCanvasRef = useRef(null);
  const heroSectionRef = useRef(null);

  const [isTrackingEnabled, setIsTrackingEnabled] = useState(true);
  const [activePillar, setActivePillar] = useState(0);
  const [archSlideIdx, setArchSlideIdx] = useState(0);
  const [selectedActivityId, setSelectedActivityId] = useState(null);
  const [activeFacilityIdx, setActiveFacilityIdx] = useState(0);
  const [isFacAutoPlayPaused, setIsFacAutoPlayPaused] = useState(false);

  useEffect(() => {
    if (isFacAutoPlayPaused) return;
    const facTimer = setInterval(() => {
      setActiveFacilityIdx((prev) => (prev + 1) % FACILITY_SLIDES.length);
    }, 6000);
    return () => clearInterval(facTimer);
  }, [isFacAutoPlayPaused]);

  // Sound effects removed
  const playMusicalBoing = () => {};
  const playPopSound = () => {};

  // Pillars Data with Asymmetric Collage Content
  const pillarShowcaseData = [
    {
      pillarName: "WARMTH",
      title: "Motherly Care & Warm Attention",
      counter: "01 / 04",
      desc: "Dedicated caregivers who know every child by name, creating a gentle and loving home away from home.",
      tagColor: "#F15A29",
      highlights: ["Dedicated 1:4 Care", "Gentle Acclimatization", "Warm Loving Environment"],
      infoCard: {
        title: "Working Hours",
        line1: "Mon - Fri: 07:30 AM to 05:30 PM",
        line2: "Sat: 08:30 AM to 01:00 PM",
        line3: "Sunday: Closed",
        bg: "#edf7e8",
        accent: "#2e7d32"
      },
      smallImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&crop=faces,top&w=600&h=450&q=85",
      smallAlt: "Smiling teacher holding learning materials",
      smallImgPos: "center 10%",
      tallImgPos: "center 20%",
      tallImage: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=85",
      tallAlt: "Loving mother and smiling baby experiencing gentle warmth"
    },
    {
      pillarName: "TRUST",
      title: "Transparent & Safe Partnership",
      counter: "02 / 04",
      desc: "Equipped child-safe security, monitored reception, and daily open communication giving parents peace of mind.",
      tagColor: "#0284c7",
      highlights: ["24/7 Monitored Campus", "Daily Parent Updates", "Certified Child-Safety"],
      infoCard: {
        title: "Villa 47 Security",
        line1: "24/7 CCTV In All Rooms",
        line2: "MOH Licensed Pediatric Nurse",
        line3: "Guarded Biometric Access",
        bg: "#e0f2fe",
        accent: "#0369a1"
      },
      smallImage: "/images/classroom.jpg",
      smallAlt: "Sunlit safe Scandinavian classroom in Villa 47",
      tallImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=85",
      tallAlt: "Caring educator with young child building trust"
    },
    {
      pillarName: "GROWTH",
      title: "Holistic EYFS Development",
      counter: "03 / 04",
      desc: "Fine & gross motor development, sensory discovery tables, and active child-led milestones every week.",
      tagColor: "#16a34a",
      highlights: ["Early EYFS Milestones", "Sensory Discovery", "Confidence & Independence"],
      infoCard: {
        title: "British EYFS Core",
        line1: "7 Developmental Milestones",
        line2: "Daily Phonics & Arabic",
        line3: "Tactile STEM & Motor Play",
        bg: "#f0fdf4",
        accent: "#15803d"
      },
      smallImage: "/images/activity-mini-stem.jpg",
      smallAlt: "Child exploring wooden gear toys and STEM ramps",
      tallImage: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=800&q=85",
      tallAlt: "Curious child joyfully learning through active play"
    },
    {
      pillarName: "JOY",
      title: "Joyful Childhood Memories",
      counter: "04 / 04",
      desc: "Laughter, creative messy art, phonics songs, and playful curiosity inspiring a lifelong love of learning.",
      tagColor: "#be123c",
      highlights: ["Creative Messy Art", "Music & Phonics Fun", "Happy Lifelong Memories"],
      infoCard: {
        title: "Creative Arts & Fun",
        line1: "Messy Paint & Sensory Dough",
        line2: "UV-Shaded Play Garden",
        line3: "Music & Rhythmic Circle",
        bg: "#ffe4e6",
        accent: "#9f1239"
      },
      smallImage: "/images/activity-creative-play.jpg",
      smallAlt: "Child happily painting with non-toxic colors",
      tallImage: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=85",
      tallAlt: "Children laughing and sharing joyful memories"
    }
  ];

  const archPhotos = [
    { src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=400&q=80", alt: "Joyful girl smiling" },
    { src: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80", alt: "Child exploring books" },
    { src: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=400&q=80", alt: "Sensory play" },
    { src: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=400&q=80", alt: "Children playing with blocks" }
  ];

  const triggerBlinkRef = useRef(null);
  const triggerDropRef = useRef(null);
  const triggerCubeActionRef = useRef(null);

  // Synchronized Scroll & Manual Pillar Selection
  const activePillarRef = useRef(activePillar);
  activePillarRef.current = activePillar;
  const isInteractingRef = useRef(false);
  const interactionTimerRef = useRef(null);

  const handlePillarSelect = (idx) => {
    setActivePillar(idx);
    activePillarRef.current = idx;
    if (triggerCubeActionRef.current) {
      triggerCubeActionRef.current(idx);
    }
    isInteractingRef.current = true;
    if (interactionTimerRef.current) clearTimeout(interactionTimerRef.current);
    interactionTimerRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 750);
  };

  // Scroll Progress Synchronizer for 4 Pillars (Warmth -> Trust -> Growth -> Joy)
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        if (isInteractingRef.current) return;

        const stack = document.getElementById('pillars-stack');
        if (!stack) return;

        const vh = window.innerHeight;
        // Focal point slightly above center for natural reading eye-level
        const focalY = vh * 0.46;

        let closestIdx = 0;
        let minDiff = Infinity;

        for (let i = 0; i < 4; i++) {
          const card = document.getElementById(`pillar-card-${i}`);
          if (card) {
            const cRect = card.getBoundingClientRect();
            const cardCenterY = cRect.top + cRect.height / 2;
            const diff = Math.abs(cardCenterY - focalY);
            if (diff < minDiff) {
              minDiff = diff;
              closestIdx = i;
            }
          }
        }

        const currentCard = document.getElementById(`pillar-card-${activePillarRef.current}`);
        let currentDiff = Infinity;
        if (currentCard) {
          const cRect = currentCard.getBoundingClientRect();
          currentDiff = Math.abs(cRect.top + cRect.height / 2 - focalY);
        }

        // Hysteresis of 20px prevents any micro-jitter at scroll boundary
        if (closestIdx !== activePillarRef.current && (currentDiff - minDiff > 20)) {
          activePillarRef.current = closestIdx;
          setActivePillar(closestIdx);
          if (triggerCubeActionRef.current) {
            triggerCubeActionRef.current(closestIdx);
          }
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (interactionTimerRef.current) clearTimeout(interactionTimerRef.current);
    };
  }, []);

  // Detect mobile device once at mount
  const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  // Cycle arch kids photo carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setArchSlideIdx(prev => (prev + 1) % archPhotos.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [archPhotos.length]);

  useEffect(() => {
    if (!heroCanvasRef.current || !blocksCanvasRef.current || !heroSectionRef.current) return;

    const heroCanvas = heroCanvasRef.current;
    const blocksCanvas = blocksCanvasRef.current;
    const heroElement = heroSectionRef.current;

    const pixelRatio = Math.min(window.devicePixelRatio || 1, isMobileDevice ? 1.5 : 2.0);

    // 1. Hero Renderer (Mascot & Room)
    const heroRenderer = new THREE.WebGLRenderer({
      canvas: heroCanvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    heroRenderer.setPixelRatio(pixelRatio);
    heroRenderer.setSize(window.innerWidth, window.innerHeight);
    heroRenderer.outputColorSpace = THREE.SRGBColorSpace;
    heroRenderer.toneMapping = THREE.ACESFilmicToneMapping;
    heroRenderer.toneMappingExposure = 1.15;
    heroRenderer.shadowMap.enabled = true;
    heroRenderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // 2. Blocks Renderer (4 Tumbling Kid Blocks)
    const blocksRenderer = new THREE.WebGLRenderer({
      canvas: blocksCanvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    blocksRenderer.setPixelRatio(pixelRatio);
    blocksRenderer.setSize(window.innerWidth, window.innerHeight);
    blocksRenderer.outputColorSpace = THREE.SRGBColorSpace;
    blocksRenderer.toneMapping = THREE.ACESFilmicToneMapping;
    blocksRenderer.toneMappingExposure = 1.15;
    blocksRenderer.shadowMap.enabled = true;
    blocksRenderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xffd8bf, 0.018);

    const blocksScene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(52, window.innerWidth / window.innerHeight, 0.05, 80.0);
    const defaultTarget = new THREE.Vector3(0.0, 0.15, 0);
    const defaultCamPos = new THREE.Vector3(0.0, 0.45, 6.2);
    camera.position.copy(defaultCamPos);

    const isMobileInitial = window.innerWidth <= 880 || isMobileDevice;

    const controls = new OrbitControls(camera, heroElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.maxPolarAngle = Math.PI / 2 + 0.04;
    controls.minDistance = 1.8;
    controls.maxDistance = 14.0;
    controls.target.copy(defaultTarget);

    // Disable OrbitControls touch hijacking on mobile devices so user can scroll page smoothly
    if (isMobileInitial) {
      controls.enabled = false;
      controls.enableRotate = false;
    }

    // Explicitly guarantee touchAction is pan-y so mobile swipes trigger page scroll
    heroElement.style.touchAction = 'pan-y';
    if (heroCanvas) heroCanvas.style.touchAction = 'pan-y';
    if (blocksCanvas) blocksCanvas.style.touchAction = 'pan-y';

    const section1Group = new THREE.Group();
    scene.add(section1Group);

    const characterRoot = new THREE.Group();
    section1Group.add(characterRoot);

    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.52, 0);
    characterRoot.add(headGroup);

    function generateFluffyDensityMap(size = 512) {
      const cvs = document.createElement('canvas');
      cvs.width = size;
      cvs.height = size;
      const ctx = cvs.getContext('2d');
      const img = ctx.createImageData(size, size);
      const d = img.data;

      for (let i = 0; i < d.length; i += 4) {
        const n1 = Math.random();
        const n2 = Math.random();
        const clump = (Math.pow(n1, 2.0) * 0.75 + n2 * 0.25);
        const v = clump > 0.36 ? Math.floor(clump * 255) : 0;
        d[i] = v;
        d[i + 1] = v;
        d[i + 2] = v;
        d[i + 3] = 255;
      }
      ctx.putImageData(img, 0, 0);
      const tex = new THREE.CanvasTexture(cvs);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(16, 16);
      return tex;
    }
    const furDensityTexture = generateFluffyDensityMap();

    const FluffyShader = {
      vertexShader: `
        uniform float uLayer;
        uniform float uMaxLayers;
        uniform float uFurLength;
        uniform vec3 uWind;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        varying vec3 vLocalPos;
        varying float vLayerDepth;

        void main() {
          vUv = uv;
          vLocalPos = position;
          vNormal = normalize(normalMatrix * normal);
          vLayerDepth = uLayer / uMaxLayers;

          float displacement = pow(vLayerDepth, 0.82) * uFurLength;
          vec3 displaced = position + normal * displacement;
          displaced += uWind * (vLayerDepth * vLayerDepth * 0.038);

          vec4 worldPos = modelMatrix * vec4(displaced, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: `
        uniform sampler2D uFurTexture;
        uniform vec3 uBaseColor;
        uniform vec3 uTipColor;
        uniform float uLayer;
        uniform vec3 uLightDir;
        uniform vec3 uLightColor;
        uniform bool uIsHood;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        varying vec3 vLocalPos;
        varying float vLayerDepth;

        void main() {
          if (uIsHood) {
            float dx = vLocalPos.x / 0.86;
            float dy = (vLocalPos.y + 0.02) / 0.74;
            if (vLocalPos.z > 0.08 && (dx * dx + dy * dy < 1.02)) {
              discard;
            }
          }

          vec4 furTex = texture2D(uFurTexture, vUv);
          float alphaCutoff = vLayerDepth * 0.74;
          if (uLayer > 0.0 && furTex.r < alphaCutoff) {
            discard;
          }

          float ao = mix(0.46, 1.0, vLayerDepth);
          vec3 norm = normalize(vNormal);

          float NdotL = max(dot(norm, uLightDir), 0.0);
          float wrapLight = pow(NdotL * 0.5 + 0.5, 1.35);

          vec3 col = mix(uBaseColor, uTipColor, vLayerDepth);
          vec3 finalColor = col * ao * (uLightColor * wrapLight + vec3(0.38, 0.26, 0.28));

          vec3 viewDir = normalize(cameraPosition - vWorldPosition);
          float rim = pow(1.0 - max(dot(viewDir, norm), 0.0), 2.8) * 0.45 * vLayerDepth;
          finalColor += vec3(1.0, 0.95, 0.92) * rim;

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `
    };

    function createVolumetricFluff(geometry, layers = 18, furLength = 0.095, isHood = false) {
      const group = new THREE.Group();
      // Terracotta Mascot Matching Logo
      const baseColor = new THREE.Color(0xF15A29);
      const tipColor = new THREE.Color(0xffd5c4);
      const effectiveLayers = isMobileDevice ? Math.min(layers, 12) : layers;

      for (let i = 0; i < effectiveLayers; i++) {
        const mat = new THREE.ShaderMaterial({
          vertexShader: FluffyShader.vertexShader,
          fragmentShader: FluffyShader.fragmentShader,
          uniforms: {
            uLayer: { value: i },
            uMaxLayers: { value: effectiveLayers },
            uFurLength: { value: furLength },
            uWind: { value: new THREE.Vector3(0.0, -0.014, 0.0) },
            uFurTexture: { value: furDensityTexture },
            uBaseColor: { value: baseColor },
            uTipColor: { value: tipColor },
            uLightDir: { value: new THREE.Vector3(0.4, 0.8, 0.6).normalize() },
            uLightColor: { value: new THREE.Vector3(1.15, 1.05, 1.02) },
            uIsHood: { value: isHood }
          },
          transparent: i > 0,
          depthWrite: i === 0
        });

        const shell = new THREE.Mesh(geometry, mat);
        shell.castShadow = (i === 0);
        shell.receiveShadow = (i === 0);
        group.add(shell);
      }
      return group;
    }

    function generateEyeCanvasTexture(isLeftEye = true) {
      const size = 512;
      const cvs = document.createElement('canvas');
      cvs.width = size;
      cvs.height = size;
      const ctx = cvs.getContext('2d');
      const cx = size / 2;
      const cy = size / 2;
      const r = 225;

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#1c1719';
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.95, 0, Math.PI * 2);
      ctx.fill();

      const irisGrad = ctx.createLinearGradient(cx, cy - 120, cx, cy + 210);
      irisGrad.addColorStop(0.0, '#10252c');
      irisGrad.addColorStop(0.55, '#1b5b69');
      irisGrad.addColorStop(0.82, '#72C5E8');
      irisGrad.addColorStop(1.0, '#b8ecff');
      ctx.fillStyle = irisGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.89, 0, Math.PI * 2);
      ctx.fill();

      const pupilR = r * 0.68;
      ctx.fillStyle = '#070b0e';
      ctx.beginPath();
      ctx.arc(cx, cy - 11, pupilR, 0, Math.PI * 2);
      ctx.fill();

      const specX = isLeftEye ? cx - 48 : cx - 55;
      const specY = cy - 52;
      const specGrad1 = ctx.createRadialGradient(specX, specY, 8, specX, specY, 68);
      specGrad1.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
      specGrad1.addColorStop(0.7, 'rgba(255, 255, 255, 0.96)');
      specGrad1.addColorStop(0.9, 'rgba(255, 255, 255, 0.4)');
      specGrad1.addColorStop(1.0, 'rgba(255, 255, 255, 0.0)');
      ctx.fillStyle = specGrad1;
      ctx.beginPath();
      ctx.arc(specX, specY, 68, 0, Math.PI * 2);
      ctx.fill();

      const tex = new THREE.CanvasTexture(cvs);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.needsUpdate = true;
      return tex;
    }

    function generateCheekTexture() {
      const cvs = document.createElement('canvas');
      cvs.width = 128;
      cvs.height = 128;
      const ctx = cvs.getContext('2d');
      const grad = ctx.createRadialGradient(64, 64, 5, 64, 64, 58);
      grad.addColorStop(0, 'rgba(241, 90, 41, 0.88)');
      grad.addColorStop(0.55, 'rgba(241, 130, 80, 0.40)');
      grad.addColorStop(1, 'rgba(255, 180, 150, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 128, 128);
      const tex = new THREE.CanvasTexture(cvs);
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    }

    // Floor and shadow
    const floorGeo = new THREE.PlaneGeometry(65, 65);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0xf5b59a,
      roughness: 0.65,
      metalness: 0.04
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.98;
    floor.receiveShadow = true;
    section1Group.add(floor);

    const shadowGeo = new THREE.PlaneGeometry(3.0, 3.0);
    const sCvs = document.createElement('canvas');
    sCvs.width = 128;
    sCvs.height = 128;
    const sCtx = sCvs.getContext('2d');
    const sGrad = sCtx.createRadialGradient(64, 64, 8, 64, 64, 60);
    sGrad.addColorStop(0, 'rgba(160, 45, 20, 0.48)');
    sGrad.addColorStop(0.5, 'rgba(170, 60, 30, 0.18)');
    sGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    sCtx.fillStyle = sGrad;
    sCtx.fillRect(0, 0, 128, 128);
    const shadowMesh = new THREE.Mesh(
      shadowGeo,
      new THREE.MeshBasicMaterial({
        map: new THREE.CanvasTexture(sCvs),
        transparent: true,
        depthWrite: false
      })
    );
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.set(0.0, -0.975, 0);
    section1Group.add(shadowMesh);

    // Body
    const bodyGeo = new THREE.SphereGeometry(0.85, 32, 32);
    bodyGeo.scale(1.05, 0.95, 0.88);
    const body = createVolumetricFluff(bodyGeo, 16, 0.085, false);
    body.position.set(0, -0.26, 0);
    characterRoot.add(body);

    // Feet
    const footGeo = new THREE.SphereGeometry(0.29, 24, 24);
    footGeo.scale(1.25, 0.68, 1.4);

    const footLeft = createVolumetricFluff(footGeo, 10, 0.07);
    footLeft.position.set(-0.46, -0.90, 0.35);
    footLeft.rotation.y = 0.2;
    characterRoot.add(footLeft);

    const footRight = createVolumetricFluff(footGeo, 10, 0.07);
    footRight.position.set(0.46, -0.90, 0.35);
    footRight.rotation.y = -0.2;
    characterRoot.add(footRight);

    // Arms
    const armGeo = new THREE.SphereGeometry(0.27, 20, 20);
    armGeo.scale(0.85, 1.35, 0.85);

    const armLeft = createVolumetricFluff(armGeo, 10, 0.07);
    armLeft.position.set(-0.86, -0.36, 0.08);
    armLeft.rotation.z = 0.32;
    armLeft.rotation.x = -0.15;
    characterRoot.add(armLeft);

    const armRight = createVolumetricFluff(armGeo, 10, 0.07);
    armRight.position.set(0.86, -0.36, 0.08);
    armRight.rotation.z = -0.32;
    armRight.rotation.x = -0.15;
    characterRoot.add(armRight);

    // Head & Hood
    const hoodGeo = new THREE.SphereGeometry(1.22, 36, 36);
    hoodGeo.scale(1.15, 0.98, 1.05);
    const hood = createVolumetricFluff(hoodGeo, 18, 0.105, true);
    headGroup.add(hood);

    const trimCurve = new THREE.EllipseCurve(0, 0, 0.84, 0.72, 0, 2 * Math.PI, false, 0);
    const trimPoints = trimCurve.getPoints(40).map(p => new THREE.Vector3(p.x, p.y, 0.86));
    const trimPath = new THREE.CatmullRomCurve3(trimPoints, true);
    const trimGeo = new THREE.TubeGeometry(trimPath, 40, 0.11, 14, true);
    const cowlTrim = new THREE.Mesh(trimGeo, new THREE.MeshStandardMaterial({
      color: 0xfff0ea,
      roughness: 0.78,
      metalness: 0.0
    }));
    headGroup.add(cowlTrim);

    // Ears
    const earGeo = new THREE.SphereGeometry(0.52, 24, 24);
    earGeo.scale(1.0, 0.9, 0.7);

    const earLeft = createVolumetricFluff(earGeo, 14, 0.095);
    earLeft.position.set(-0.95, 0.72, -0.15);
    earLeft.rotation.z = -0.35;
    earLeft.rotation.x = -0.15;
    headGroup.add(earLeft);

    const earRight = createVolumetricFluff(earGeo, 14, 0.095);
    earRight.position.set(0.95, 0.72, -0.15);
    earRight.rotation.z = 0.35;
    earRight.rotation.x = -0.15;
    headGroup.add(earRight);

    // Face
    const faceGeo = new THREE.SphereGeometry(1.04, 36, 36);
    faceGeo.scale(1.05, 0.88, 0.85);
    const faceMat = new THREE.MeshStandardMaterial({
      color: 0xfff6f0,
      roughness: 0.28,
      metalness: 0.01,
      clearcoat: 0.2
    });
    const face = new THREE.Mesh(faceGeo, faceMat);
    face.position.set(0, 0, 0.18);
    headGroup.add(face);

    const eyelidMat = new THREE.MeshStandardMaterial({
      color: 0xffe8df,
      roughness: 0.35,
      side: THREE.DoubleSide
    });

    function createCurveTube(pts, radius = 0.011, color = 0x221a1d) {
      const curve = new THREE.CatmullRomCurve3(pts);
      const geo = new THREE.TubeGeometry(curve, 20, radius, 8, false);
      const mat = new THREE.MeshBasicMaterial({ color });
      return new THREE.Mesh(geo, mat);
    }

    // Eyes
    const eyeLeftGroup = new THREE.Group();
    eyeLeftGroup.position.set(-0.35, 0.08, 1.01);
    headGroup.add(eyeLeftGroup);

    const eyeGeo = new THREE.SphereGeometry(0.32, 32, 32);
    eyeGeo.scale(1.0, 1.04, 0.45);

    const eyeMatLeft = new THREE.MeshPhysicalMaterial({
      map: generateEyeCanvasTexture(true),
      roughness: 0.03,
      clearcoat: 1.0
    });
    const eyeLeftMesh = new THREE.Mesh(eyeGeo, eyeMatLeft);
    eyeLeftMesh.rotation.set(-0.06, -0.22, 0.02);
    eyeLeftGroup.add(eyeLeftMesh);

    const eyelidLGroup = new THREE.Group();
    eyeLeftGroup.add(eyelidLGroup);

    const lidGeoL = new THREE.SphereGeometry(0.328, 28, 14, 0, Math.PI * 2, 0, Math.PI * 0.48);
    lidGeoL.scale(1.02, 1.06, 0.48);
    const eyelidLMesh = new THREE.Mesh(lidGeoL, eyelidMat);
    eyelidLMesh.rotation.x = -Math.PI * 0.48;
    eyelidLGroup.add(eyelidLMesh);

    const lashL1 = createCurveTube([
      new THREE.Vector3(-0.19, 0.11, 0.0),
      new THREE.Vector3(-0.11, 0.18, 0.03),
      new THREE.Vector3(0.00, 0.21, 0.07)
    ], 0.016, 0x1c1719);
    eyelidLGroup.add(lashL1);

    const eyeRightGroup = new THREE.Group();
    eyeRightGroup.position.set(0.35, 0.08, 1.01);
    headGroup.add(eyeRightGroup);

    const eyeMatRight = new THREE.MeshPhysicalMaterial({
      map: generateEyeCanvasTexture(false),
      roughness: 0.03,
      clearcoat: 1.0
    });
    const eyeRightMesh = new THREE.Mesh(eyeGeo, eyeMatRight);
    eyeRightMesh.rotation.set(-0.06, 0.22, -0.02);
    eyeRightGroup.add(eyeRightMesh);

    const eyelidRGroup = new THREE.Group();
    eyeRightGroup.add(eyelidRGroup);

    const lidGeoR = new THREE.SphereGeometry(0.328, 28, 14, 0, Math.PI * 2, 0, Math.PI * 0.48);
    lidGeoR.scale(1.02, 1.06, 0.48);
    const eyelidRMesh = new THREE.Mesh(lidGeoR, eyelidMat);
    eyelidRMesh.rotation.x = -Math.PI * 0.48;
    eyelidRGroup.add(eyelidRMesh);

    const lashR1 = createCurveTube([
      new THREE.Vector3(0.00, 0.21, 0.07),
      new THREE.Vector3(0.11, 0.18, 0.03),
      new THREE.Vector3(0.19, 0.11, 0.0)
    ], 0.016, 0x1c1719);
    eyelidRGroup.add(lashR1);

    // Nose & Mouth
    const noseGeo = new THREE.SphereGeometry(0.025, 16, 16);
    const nose = new THREE.Mesh(noseGeo, new THREE.MeshStandardMaterial({
      color: 0xF15A29,
      roughness: 0.4
    }));
    nose.position.set(0.0, -0.085, 1.08);
    headGroup.add(nose);

    const mouthCurve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-0.11, -0.14, 1.05),
      new THREE.Vector3(0.0, -0.23, 1.07),
      new THREE.Vector3(0.11, -0.14, 1.05)
    );
    const mouthGeo = new THREE.TubeGeometry(mouthCurve, 20, 0.012, 10, false);
    const mouth = new THREE.Mesh(mouthGeo, new THREE.MeshBasicMaterial({ color: 0x481b25 }));
    headGroup.add(mouth);

    // Cheeks
    const cheekGeo = new THREE.PlaneGeometry(0.38, 0.26);
    const cheekMat = new THREE.MeshBasicMaterial({
      map: generateCheekTexture(),
      transparent: true,
      depthWrite: false
    });

    const cheekL = new THREE.Mesh(cheekGeo, cheekMat);
    cheekL.position.set(-0.52, -0.19, 1.03);
    cheekL.rotation.y = -0.32;
    headGroup.add(cheekL);

    const cheekR = new THREE.Mesh(cheekGeo, cheekMat);
    cheekR.position.set(0.52, -0.19, 1.03);
    cheekR.rotation.y = 0.32;
    headGroup.add(cheekR);

    // ==========================================
    // 4 INTERACTIVE FLOOR TOYS
    // ==========================================
    const interactiveToys = [];

    function createToyContactShadow(size = 0.8, x = 0, z = 0, opacity = 0.45) {
      const sMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(size, size),
        new THREE.MeshBasicMaterial({
          map: new THREE.CanvasTexture(sCvs),
          transparent: true,
          depthWrite: false,
          opacity: opacity
        })
      );
      sMesh.rotation.x = -Math.PI / 2;
      sMesh.position.set(x, -0.975, z);
      section1Group.add(sMesh);
      return sMesh;
    }

    // Toy 1: Stacker
    const stackerGroup = new THREE.Group();
    stackerGroup.position.set(-1.65, -0.98, 0.45);
    stackerGroup.rotation.y = 0.25;
    section1Group.add(stackerGroup);

    const stackerBaseMat = new THREE.MeshStandardMaterial({ color: 0xe6b894, roughness: 0.55 });
    const stackerBase = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.40, 0.08, 32), stackerBaseMat);
    stackerBase.position.y = 0.04;
    stackerBase.castShadow = true;
    stackerBase.receiveShadow = true;
    stackerGroup.add(stackerBase);

    const stackerPeg = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.05, 0.72, 16), stackerBaseMat);
    stackerPeg.position.y = 0.40;
    stackerPeg.castShadow = true;
    stackerGroup.add(stackerPeg);

    const ringColors = [0xF15A29, 0xFFE600, 0x83C441, 0x72C5E8, 0xA855F7];
    const ringRadii = [0.30, 0.26, 0.22, 0.18, 0.14];
    const ringTubes = [0.065, 0.060, 0.055, 0.050, 0.045];
    let curStackY = 0.12;

    for (let i = 0; i < ringColors.length; i++) {
      const ringMat = new THREE.MeshStandardMaterial({
        color: ringColors[i],
        roughness: 0.35,
        metalness: 0.02
      });
      const ringMesh = new THREE.Mesh(
        new THREE.TorusGeometry(ringRadii[i], ringTubes[i], 16, 32),
        ringMat
      );
      ringMesh.rotation.x = Math.PI / 2;
      ringMesh.rotation.z = i * 0.35;
      ringMesh.position.set((i % 2 === 0 ? 0.005 : -0.005), curStackY, 0);
      ringMesh.castShadow = true;
      ringMesh.receiveShadow = true;
      stackerGroup.add(ringMesh);
      curStackY += ringTubes[i] * 2.05;
    }

    const topFinialMat = new THREE.MeshStandardMaterial({ color: 0xC62828, roughness: 0.28, metalness: 0.02 });
    const topFinial = new THREE.Mesh(new THREE.SphereGeometry(0.09, 24, 24), topFinialMat);
    topFinial.position.y = curStackY + 0.02;
    topFinial.castShadow = true;
    stackerGroup.add(topFinial);

    const stackerShadow = createToyContactShadow(0.95, -1.65, 0.45, 0.52);
    interactiveToys.push({
      group: stackerGroup,
      shadow: stackerShadow,
      basePos: stackerGroup.position.clone(),
      wobbleVal: 0,
      soundFreq: 520,
      name: 'Stacker'
    });

    // Toy 2: Locomotive Train
    const trainGroup = new THREE.Group();
    trainGroup.position.set(1.68, -0.98, 0.42);
    trainGroup.rotation.y = -0.38;
    section1Group.add(trainGroup);

    const trainBodyMat = new THREE.MeshStandardMaterial({ color: 0x72C5E8, roughness: 0.42, metalness: 0.04 });
    const trainCabMat = new THREE.MeshStandardMaterial({ color: 0xF15A29, roughness: 0.45, metalness: 0.02 });
    const trainRoofMat = new THREE.MeshStandardMaterial({ color: 0xFFE600, roughness: 0.4 });
    const trainWoodMat = new THREE.MeshStandardMaterial({ color: 0xd49b6a, roughness: 0.6 });

    const trainChassis = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.08, 0.32), trainWoodMat);
    trainChassis.position.set(0, 0.12, 0);
    trainChassis.castShadow = true;
    trainGroup.add(trainChassis);

    const trainBoiler = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.38, 24), trainBodyMat);
    trainBoiler.rotation.z = Math.PI / 2;
    trainBoiler.position.set(0.12, 0.28, 0);
    trainBoiler.castShadow = true;
    trainGroup.add(trainBoiler);

    const trainBoilerFront = new THREE.Mesh(
      new THREE.SphereGeometry(0.13, 20, 20, 0, Math.PI * 2, 0, Math.PI / 2),
      new THREE.MeshStandardMaterial({ color: 0xFFE600, roughness: 0.3 })
    );
    trainBoilerFront.rotation.z = -Math.PI / 2;
    trainBoilerFront.position.set(0.31, 0.28, 0);
    trainBoilerFront.castShadow = true;
    trainGroup.add(trainBoilerFront);

    const chimney = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.04, 0.16, 16), new THREE.MeshStandardMaterial({ color: 0x3F3F3F, roughness: 0.5 }));
    chimney.position.set(0.22, 0.46, 0);
    chimney.castShadow = true;
    trainGroup.add(chimney);

    const chimneyRim = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.06, 0.035, 16), new THREE.MeshStandardMaterial({ color: 0xF15A29, roughness: 0.4 }));
    chimneyRim.position.set(0.22, 0.54, 0);
    trainGroup.add(chimneyRim);

    const trainCab = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.32, 0.30), trainCabMat);
    trainCab.position.set(-0.20, 0.32, 0);
    trainCab.castShadow = true;
    trainGroup.add(trainCab);

    const trainRoof = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.30, 20, 1, false, 0, Math.PI), trainRoofMat);
    trainRoof.rotation.y = Math.PI / 2;
    trainRoof.position.set(-0.20, 0.48, 0);
    trainRoof.castShadow = true;
    trainGroup.add(trainRoof);

    const winMat = new THREE.MeshStandardMaterial({ color: 0xfff6f0, roughness: 0.2 });
    [-0.155, 0.155].forEach(zPos => {
      const cabWindow = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.02, 16), winMat);
      cabWindow.rotation.x = Math.PI / 2;
      cabWindow.position.set(-0.20, 0.35, zPos);
      trainGroup.add(cabWindow);
    });

    const wheelGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.05, 20);
    const hubcapGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.065, 16);
    const hubMat = new THREE.MeshStandardMaterial({ color: 0xffdecb, roughness: 0.4 });

    const wheelCoords = [
      { x: -0.22, z: 0.17 },
      { x: -0.22, z: -0.17 },
      { x: 0.18, z: 0.17 },
      { x: 0.18, z: -0.17 }
    ];

    wheelCoords.forEach(wc => {
      const wheel = new THREE.Mesh(wheelGeo, hubMat);
      wheel.rotation.x = Math.PI / 2;
      wheel.position.set(wc.x, 0.09, wc.z);
      wheel.castShadow = true;
      trainGroup.add(wheel);

      const hub = new THREE.Mesh(hubcapGeo, hubMat);
      hub.rotation.x = Math.PI / 2;
      hub.position.set(wc.x, 0.09, wc.z);
      trainGroup.add(hub);
    });

    const trainShadow = createToyContactShadow(1.1, 1.68, 0.42, 0.55);
    interactiveToys.push({
      group: trainGroup,
      shadow: trainShadow,
      basePos: trainGroup.position.clone(),
      wobbleVal: 0,
      soundFreq: 340,
      name: 'Train'
    });

    // Toy 3: Beach Ball
    const ballGroup = new THREE.Group();
    ballGroup.position.set(-1.20, -0.78, 1.15);
    ballGroup.rotation.set(0.35, 0.6, -0.2);
    section1Group.add(ballGroup);

    function createBeachBallTexture() {
      const bCvs = document.createElement('canvas');
      bCvs.width = 512;
      bCvs.height = 256;
      const bCtx = bCvs.getContext('2d');
      const colors = ['#F15A29', '#ffffff', '#72C5E8', '#ffffff', '#83C441', '#FFE600'];
      const stripW = bCvs.width / colors.length;
      colors.forEach((col, idx) => {
        bCtx.fillStyle = col;
        bCtx.fillRect(idx * stripW, 0, stripW, bCvs.height);
      });
      bCtx.fillStyle = '#C62828';
      bCtx.fillRect(0, 0, bCvs.width, 18);
      bCtx.fillRect(0, bCvs.height - 18, bCvs.width, 18);

      const tex = new THREE.CanvasTexture(bCvs);
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    }

    const ballMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.20, 32, 32),
      new THREE.MeshStandardMaterial({
        map: createBeachBallTexture(),
        roughness: 0.22,
        metalness: 0.02,
        clearcoat: 0.4
      })
    );
    ballMesh.castShadow = true;
    ballGroup.add(ballMesh);

    const ballShadow = createToyContactShadow(0.55, -1.20, 1.15, 0.6);
    interactiveToys.push({
      group: ballGroup,
      shadow: ballShadow,
      basePos: ballGroup.position.clone(),
      wobbleVal: 0,
      soundFreq: 640,
      name: 'Ball'
    });

    // Toy 4: Rolling Yellow Duck
    const duckGroup = new THREE.Group();
    duckGroup.position.set(1.25, -0.98, 1.05);
    duckGroup.rotation.y = -0.55;
    section1Group.add(duckGroup);

    const duckBodyMat = new THREE.MeshStandardMaterial({ color: 0xFFE600, roughness: 0.35, metalness: 0.01 });
    const duckBeakMat = new THREE.MeshStandardMaterial({ color: 0xF15A29, roughness: 0.38 });

    const duckBody = new THREE.Mesh(new THREE.SphereGeometry(0.14, 24, 24), duckBodyMat);
    duckBody.scale.set(1.2, 0.95, 0.85);
    duckBody.position.set(0, 0.16, 0);
    duckBody.castShadow = true;
    duckGroup.add(duckBody);

    const duckHead = new THREE.Mesh(new THREE.SphereGeometry(0.09, 20, 20), duckBodyMat);
    duckHead.position.set(0.12, 0.28, 0);
    duckHead.castShadow = true;
    duckGroup.add(duckHead);

    const duckBeak = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.10, 16), duckBeakMat);
    duckBeak.rotation.z = -Math.PI / 2;
    duckBeak.position.set(0.24, 0.27, 0);
    duckBeak.castShadow = true;
    duckGroup.add(duckBeak);

    const eyeDotMat = new THREE.MeshBasicMaterial({ color: 0x221a1d });
    [-0.075, 0.075].forEach(zSide => {
      const eyeDot = new THREE.Mesh(new THREE.SphereGeometry(0.015, 12, 12), eyeDotMat);
      eyeDot.position.set(0.15, 0.30, zSide);
      duckGroup.add(eyeDot);
    });

    [-0.12, 0.12].forEach(zSide => {
      const wing = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), new THREE.MeshStandardMaterial({ color: 0xffd54f, roughness: 0.4 }));
      wing.scale.set(1.1, 0.6, 0.3);
      wing.rotation.z = 0.25;
      wing.position.set(-0.02, 0.17, zSide);
      duckGroup.add(wing);
    });

    const duckWheelMat = new THREE.MeshStandardMaterial({ color: 0x83C441, roughness: 0.35 });
    const duckWheelCoords = [
      { x: -0.09, z: 0.11 },
      { x: -0.09, z: -0.11 },
      { x: 0.08, z: 0.11 },
      { x: 0.08, z: -0.11 }
    ];
    duckWheelCoords.forEach(dw => {
      const dWheel = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.03, 16), duckWheelMat);
      dWheel.rotation.x = Math.PI / 2;
      dWheel.position.set(dw.x, 0.055, dw.z);
      dWheel.castShadow = true;
      duckGroup.add(dWheel);
    });

    const duckShadow = createToyContactShadow(0.65, 1.25, 1.05, 0.48);
    interactiveToys.push({
      group: duckGroup,
      shadow: duckShadow,
      basePos: duckGroup.position.clone(),
      wobbleVal: 0,
      soundFreq: 580,
      name: 'Duck'
    });

    // ==========================================
    // 4 MULTI-SIDED KID BLOCKS
    // ==========================================
    function drawCanvasRoundedRect(ctx, x, y, width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    }

    function drawCubeVectorIcon(ctx, iconType, cx, cy, size, color) {
      ctx.save();
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.lineWidth = Math.max(3, size * 0.08);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      if (iconType === 'heart') {
        ctx.translate(cx, cy - size * 0.42);
        ctx.beginPath();
        const w = size * 0.95;
        const h = size * 0.92;
        ctx.moveTo(0, h * 0.35);
        ctx.bezierCurveTo(0, 0, -w * 0.5, 0, -w * 0.5, h * 0.35);
        ctx.bezierCurveTo(-w * 0.5, h * 0.65, 0, h * 0.85, 0, h);
        ctx.bezierCurveTo(0, h * 0.85, w * 0.5, h * 0.65, w * 0.5, h * 0.35);
        ctx.bezierCurveTo(w * 0.5, 0, 0, 0, 0, h * 0.35);
        ctx.fill();
      } else if (iconType === 'handshake') {
        ctx.translate(cx, cy);
        const r = size * 0.38;
        ctx.beginPath();
        ctx.arc(-r * 0.35, 0, r * 0.62, -0.4, Math.PI * 0.75);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(r * 0.35, 0, r * 0.62, Math.PI * 0.55, Math.PI * 1.7);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.38, 0, Math.PI * 2);
        ctx.fill();
      } else if (iconType === 'sprout') {
        ctx.translate(cx, cy);
        const h = size * 0.45;
        ctx.beginPath();
        ctx.moveTo(0, h);
        ctx.quadraticCurveTo(0, 0, -size * 0.1, -h * 0.2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-size * 0.1, -h * 0.2);
        ctx.quadraticCurveTo(-size * 0.5, -h * 0.7, -size * 0.15, -h * 0.85);
        ctx.quadraticCurveTo(-size * 0.05, -h * 0.4, -size * 0.1, -h * 0.2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(-size * 0.08, -h * 0.2);
        ctx.quadraticCurveTo(size * 0.45, -h * 0.65, size * 0.25, -h * 0.95);
        ctx.quadraticCurveTo(size * 0.05, -h * 0.45, -size * 0.08, -h * 0.2);
        ctx.fill();
      } else if (iconType === 'sparkles') {
        ctx.translate(cx, cy);
        function drawStar(sx, sy, rad) {
          ctx.beginPath();
          for (let i = 0; i < 8; i++) {
            const r = (i % 2 === 0) ? rad : rad * 0.35;
            const angle = (i * Math.PI) / 4;
            const x = sx + Math.cos(angle) * r;
            const y = sy + Math.sin(angle) * r;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.fill();
        }
        drawStar(0, 0, size * 0.48);
        drawStar(-size * 0.38, -size * 0.32, size * 0.22);
        drawStar(size * 0.38, size * 0.28, size * 0.20);
      } else if (iconType === 'balloon') {
        ctx.translate(cx, cy);
        ctx.beginPath();
        ctx.ellipse(0, -size * 0.1, size * 0.34, size * 0.42, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(-size * 0.08, size * 0.32);
        ctx.lineTo(size * 0.08, size * 0.32);
        ctx.lineTo(0, size * 0.42);
        ctx.closePath();
        ctx.fill();
      } else if (iconType === 'book') {
        ctx.translate(cx, cy);
        const bw = size * 0.44;
        const bh = size * 0.32;
        ctx.beginPath();
        ctx.moveTo(0, bh * 0.8);
        ctx.quadraticCurveTo(-bw * 0.5, bh * 0.5, -bw, bh * 0.7);
        ctx.lineTo(-bw, -bh * 0.6);
        ctx.quadraticCurveTo(-bw * 0.5, -bh * 0.9, 0, -bh * 0.6);
        ctx.quadraticCurveTo(bw * 0.5, -bh * 0.9, bw, -bh * 0.6);
        ctx.lineTo(bw, bh * 0.7);
        ctx.quadraticCurveTo(bw * 0.5, bh * 0.5, 0, bh * 0.8);
        ctx.fill();
      } else if (iconType === 'palette') {
        ctx.translate(cx, cy);
        ctx.beginPath();
        ctx.ellipse(0, 0, size * 0.44, size * 0.32, -0.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(size * 0.2, size * 0.08, size * 0.08, 0, Math.PI * 2);
        ctx.fill();
      } else if (iconType === 'star') {
        ctx.translate(cx, cy);
        ctx.beginPath();
        for (let i = 0; i < 10; i++) {
          const r = (i % 2 === 0) ? size * 0.45 : size * 0.20;
          const angle = (i * Math.PI) / 5 - Math.PI / 2;
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    }

    function createKidCubeTexture({
      letter,
      word,
      iconType = 'heart',
      bgColor = '#72C5E8',
      textColor = '#1e3a8a',
      subText = 'JLH Ajman'
    }) {
      const size = 512;
      const cvs = document.createElement('canvas');
      cvs.width = size;
      cvs.height = size;
      const ctx = cvs.getContext('2d');

      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, size, size);

      ctx.lineWidth = 16;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.strokeRect(26, 26, size - 52, size - 52);

      ctx.fillStyle = textColor;
      ctx.font = 'bold 28px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(subText, size / 2, 68);

      ctx.font = '900 185px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.12)';
      ctx.fillText(letter, size / 2 + 3, 205 + 3);
      ctx.fillStyle = textColor;
      ctx.fillText(letter, size / 2, 205);

      drawCubeVectorIcon(ctx, iconType, size / 2, 310, 84, textColor);

      const pillW = 380;
      const pillH = 76;
      const pillX = (size - pillW) / 2;
      const pillY = 380;
      const radius = 38;

      ctx.fillStyle = '#ffffff';
      drawCanvasRoundedRect(ctx, pillX, pillY, pillW, pillH, radius);
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.strokeStyle = textColor;
      ctx.stroke();

      ctx.fillStyle = textColor;
      ctx.font = '900 34px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText(`${word}`, size / 2, pillY + pillH / 2 + 1);

      const tex = new THREE.CanvasTexture(cvs);
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    }

    const blocksGroup = new THREE.Group();
    blocksScene.add(blocksGroup);

    function createMultiSidedKidBlock(size, s1Config, s2Config, sideAConfig, sideBConfig) {
      const matS1 = new THREE.MeshStandardMaterial({ map: createKidCubeTexture(s1Config), roughness: 0.5 });
      const matS2 = new THREE.MeshStandardMaterial({ map: createKidCubeTexture(s2Config), roughness: 0.5 });
      const matSideA = new THREE.MeshStandardMaterial({ map: createKidCubeTexture(sideAConfig), roughness: 0.5 });
      const matSideB = new THREE.MeshStandardMaterial({ map: createKidCubeTexture(sideBConfig), roughness: 0.5 });
      const plainTop = new THREE.MeshStandardMaterial({ color: s1Config.bgColor, roughness: 0.5 });
      const plainBottom = new THREE.MeshStandardMaterial({ color: s2Config.bgColor, roughness: 0.5 });

      const materials = [matSideA, plainTop, plainBottom, matSideB, matS1, matS2];
      const geo = new THREE.BoxGeometry(size, size, size);
      const mesh = new THREE.Mesh(geo, materials);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      return mesh;
    }

    function createBlockContactShadow(size = 0.65) {
      const sMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(size, size),
        new THREE.MeshBasicMaterial({
          map: new THREE.CanvasTexture(sCvs),
          transparent: true,
          depthWrite: false,
          opacity: 0.8
        })
      );
      sMesh.rotation.x = -Math.PI / 2;
      sMesh.position.y = -0.974;
      blocksScene.add(sMesh);
      return sMesh;
    }

    const block0 = createMultiSidedKidBlock(
      0.46,
      { letter: 'P', word: 'PLAY', iconType: 'balloon', bgColor: '#72C5E8', textColor: '#0f4c6e', subText: 'EYFS Discovery' },
      { letter: 'W', word: 'WARMTH', iconType: 'heart', bgColor: '#F15A29', textColor: '#ffffff', subText: 'Motherly Care' },
      { letter: 'H', word: 'HOME', iconType: 'heart', bgColor: '#ffdecb', textColor: '#8b2b07', subText: 'Just Like Home' },
      { letter: 'A', word: 'AJMAN', iconType: 'balloon', bgColor: '#FFE600', textColor: '#8b2b07', subText: 'Al Rashidiya 2' }
    );
    blocksGroup.add(block0);
    const shadow0 = createBlockContactShadow(0.68);

    const block1 = createMultiSidedKidBlock(
      0.46,
      { letter: 'L', word: 'LEARN', iconType: 'book', bgColor: '#F15A29', textColor: '#ffffff', subText: 'Curious Minds' },
      { letter: 'T', word: 'TRUST', iconType: 'handshake', bgColor: '#72C5E8', textColor: '#0f4c6e', subText: 'Family Trust' },
      { letter: 'C', word: 'CARE', iconType: 'heart', bgColor: '#83C441', textColor: '#ffffff', subText: 'Safe & Clean' },
      { letter: 'E', word: 'EYFS', iconType: 'book', bgColor: '#fff0a8', textColor: '#713f12', subText: 'Early Years' }
    );
    blocksGroup.add(block1);
    const shadow1 = createBlockContactShadow(0.68);

    const block2 = createMultiSidedKidBlock(
      0.46,
      { letter: 'A', word: 'ART', iconType: 'palette', bgColor: '#FFE600', textColor: '#8b2b07', subText: 'Arabic & Creative' },
      { letter: 'G', word: 'GROWTH', iconType: 'sprout', bgColor: '#83C441', textColor: '#ffffff', subText: 'Whole-Child' },
      { letter: 'R', word: 'READ', iconType: 'book', bgColor: '#72C5E8', textColor: '#0f4c6e', subText: 'Phonics Skills' },
      { letter: 'M', word: 'MUSIC', iconType: 'palette', bgColor: '#ffd5c4', textColor: '#C62828', subText: 'Rhymes & Joy' }
    );
    blocksGroup.add(block2);
    const shadow2 = createBlockContactShadow(0.68);

    const block3 = createMultiSidedKidBlock(
      0.46,
      { letter: 'Y', word: 'YAY', iconType: 'star', bgColor: '#83C441', textColor: '#ffffff', subText: 'Confidence' },
      { letter: 'J', word: 'JOY', iconType: 'sparkles', bgColor: '#C62828', textColor: '#ffffff', subText: 'Happy Moments' },
      { letter: 'S', word: 'SCHOOL', iconType: 'star', bgColor: '#FFE600', textColor: '#8b2b07', subText: 'Readiness Prep' },
      { letter: 'K', word: 'KIND', iconType: 'heart', bgColor: '#72C5E8', textColor: '#0f4c6e', subText: 'Good Manners' }
    );
    blocksGroup.add(block3);
    const shadow3 = createBlockContactShadow(0.68);

    const blockRig = [
      {
        mesh: block0,
        shadow: shadow0,
        size: 0.46,
        delay: 0.05,
        scatter: { x: -0.84, y: -0.78, z: 0.65, rx: 0.0, ry: 0.05, rz: 0.0 },
        section2Target: new THREE.Vector3(0, 0, 0.15),
        tumbleAxis: new THREE.Vector3(0.8, 1.0, 0.4).normalize(),
        dropSpin: 4.8,
        noteFreq: 261.63,
        squishAnim: 0
      },
      {
        mesh: block1,
        shadow: shadow1,
        size: 0.46,
        delay: 0.22,
        scatter: { x: -0.28, y: -0.78, z: 0.72, rx: 0.0, ry: -0.06, rz: 0.0 },
        section2Target: new THREE.Vector3(0, 0, 0.15),
        tumbleAxis: new THREE.Vector3(-0.6, 1.0, 0.8).normalize(),
        dropSpin: 5.4,
        noteFreq: 329.63,
        squishAnim: 0
      },
      {
        mesh: block2,
        shadow: shadow2,
        size: 0.46,
        delay: 0.38,
        scatter: { x: 0.28, y: -0.78, z: 0.72, rx: 0.0, ry: 0.06, rz: 0.0 },
        section2Target: new THREE.Vector3(0, 0, 0.15),
        tumbleAxis: new THREE.Vector3(1.0, 0.4, -0.6).normalize(),
        dropSpin: 6.0,
        noteFreq: 392.00,
        squishAnim: 0
      },
      {
        mesh: block3,
        shadow: shadow3,
        size: 0.46,
        delay: 0.54,
        scatter: { x: 0.84, y: -0.78, z: 0.65, rx: 0.0, ry: -0.05, rz: 0.0 },
        section2Target: new THREE.Vector3(0, 0, 0.15),
        tumbleAxis: new THREE.Vector3(-0.8, 0.8, 0.4).normalize(),
        dropSpin: 6.5,
        noteFreq: 523.25,
        squishAnim: 0
      }
    ];

    // Lighting
    const blocksAmbLight = new THREE.AmbientLight(0xfff7f2, 1.3);
    blocksScene.add(blocksAmbLight);
    const blocksKeyLight = new THREE.DirectionalLight(0xfff5ee, 3.0);
    blocksKeyLight.position.set(4.5, 6.0, 5.5);
    blocksKeyLight.castShadow = true;
    blocksScene.add(blocksKeyLight);
    const blocksFillLight = new THREE.DirectionalLight(0xffe0d0, 1.5);
    blocksFillLight.position.set(-4.5, 3.0, 5.0);
    blocksScene.add(blocksFillLight);

    const ambLight = new THREE.AmbientLight(0xfff7f2, 1.3);
    scene.add(ambLight);
    const keyLight = new THREE.DirectionalLight(0xfff5ee, 3.0);
    keyLight.position.set(4.5, 6.0, 5.5);
    keyLight.castShadow = true;
    scene.add(keyLight);
    const fillLight = new THREE.DirectionalLight(0xffe0d0, 1.5);
    fillLight.position.set(-4.5, 3.0, 5.0);
    scene.add(fillLight);

    let entranceTime = 0;
    const dropDuration = 1.4;

    function easeOutBounce(x) {
      const n1 = 7.5625;
      const d1 = 2.75;
      if (x < 1 / d1) return n1 * x * x;
      else if (x < 2 / d1) return n1 * (x -= 1.5 / d1) * x + 0.75;
      else if (x < 2.5 / d1) return n1 * (x -= 2.25 / d1) * x + 0.9375;
      else return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }

    triggerDropRef.current = () => {
      entranceTime = 0;
      playMusicalBoing(380, 0.4);
    };

    triggerCubeActionRef.current = (idx) => {
      const item = blockRig[idx];
      if (item) {
        item.squishAnim = 1.0;
        playMusicalBoing(item.noteFreq, 0.38, 'triangle');
        setActivePillar(idx);
      }
    };

    function updateCardDockTargets() {
      blockRig.forEach((b, idx) => {
        const slot = document.getElementById(`cube-slot-${idx}`);
        if (!slot) return;

        const rect = slot.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const ndcX = (cx / window.innerWidth) * 2 - 1;
        const ndcY = -(cy / window.innerHeight) * 2 + 1;

        const vec = new THREE.Vector3(ndcX, ndcY, 0.5);
        vec.unproject(camera);
        vec.sub(camera.position).normalize();
        const targetZ = 0.15;
        const dist = (targetZ - camera.position.z) / vec.z;
        const worldPos = camera.position.clone().add(vec.multiplyScalar(dist));

        b.section2Target.copy(worldPos);
      });
    }

    function updateResponsiveLayout() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspect = width / height;

      camera.aspect = aspect;

      if (aspect < 0.85) {
        const aspectFactor = Math.max(0.42, aspect) / 0.85;
        camera.fov = Math.min(68, 54 + (1.0 - aspectFactor) * 16);
        defaultCamPos.set(0.0, 0.38, 6.5 + (1.0 - aspectFactor) * 1.6);
        defaultTarget.set(0.0, 0.08, 0.0);

        characterRoot.position.set(0.0, 0.05, 0.0);
        characterRoot.scale.setScalar(0.78);
        shadowMesh.position.set(0.0, -0.975, 0.0);
        shadowMesh.scale.setScalar(0.78);

        blockRig[0].scatter.x = -0.66; blockRig[0].scatter.z = 0.55;
        blockRig[1].scatter.x = -0.22; blockRig[1].scatter.z = 0.62;
        blockRig[2].scatter.x =  0.22; blockRig[2].scatter.z = 0.62;
        blockRig[3].scatter.x =  0.66; blockRig[3].scatter.z = 0.55;

        stackerGroup.position.set(-1.25, -0.98, 0.45);
        stackerShadow.position.set(-1.25, -0.975, 0.45);
        trainGroup.position.set(1.25, -0.98, 0.42);
        trainShadow.position.set(1.25, -0.975, 0.42);
        ballGroup.position.set(-0.95, -0.78, 1.05);
        ballShadow.position.set(-0.95, -0.975, 1.05);
        duckGroup.position.set(0.95, -0.98, 0.95);
        duckShadow.position.set(0.95, -0.975, 0.95);
      } else if (aspect < 1.25) {
        camera.fov = 54;
        defaultCamPos.set(0.0, 0.38, 6.0);
        defaultTarget.set(0.0, 0.10, 0.0);

        characterRoot.position.set(0.0, -0.05, 0.0);
        characterRoot.scale.setScalar(1.0);
        shadowMesh.position.set(0.0, -0.975, 0.0);
        shadowMesh.scale.setScalar(1.0);

        blockRig[0].scatter.x = -0.78; blockRig[0].scatter.z = 0.62;
        blockRig[1].scatter.x = -0.26; blockRig[1].scatter.z = 0.70;
        blockRig[2].scatter.x =  0.26; blockRig[2].scatter.z = 0.70;
        blockRig[3].scatter.x =  0.78; blockRig[3].scatter.z = 0.62;

        stackerGroup.position.set(-1.45, -0.98, 0.45);
        stackerShadow.position.set(-1.45, -0.975, 0.45);
        trainGroup.position.set(1.45, -0.98, 0.42);
        trainShadow.position.set(1.45, -0.975, 0.42);
        ballGroup.position.set(-1.08, -0.78, 1.10);
        ballShadow.position.set(-1.08, -0.975, 1.10);
        duckGroup.position.set(1.10, -0.98, 1.00);
        duckShadow.position.set(1.10, -0.975, 1.00);
      } else {
        camera.fov = 50;
        defaultCamPos.set(0.0, 0.40, 5.8);
        defaultTarget.set(0.0, 0.10, 0.0);

        characterRoot.position.set(0.0, -0.05, 0.0);
        characterRoot.scale.setScalar(1.06);
        shadowMesh.position.set(0.0, -0.975, 0.0);
        shadowMesh.scale.setScalar(1.06);

        blockRig[0].scatter.x = -0.84; blockRig[0].scatter.z = 0.65;
        blockRig[1].scatter.x = -0.28; blockRig[1].scatter.z = 0.72;
        blockRig[2].scatter.x =  0.28; blockRig[2].scatter.z = 0.72;
        blockRig[3].scatter.x =  0.84; blockRig[3].scatter.z = 0.65;

        stackerGroup.position.set(-1.65, -0.98, 0.45);
        stackerShadow.position.set(-1.65, -0.975, 0.45);
        trainGroup.position.set(1.68, -0.98, 0.42);
        trainShadow.position.set(1.68, -0.975, 0.42);
        ballGroup.position.set(-1.20, -0.78, 1.15);
        ballShadow.position.set(-1.20, -0.975, 1.15);
        duckGroup.position.set(1.25, -0.98, 1.05);
        duckShadow.position.set(1.25, -0.975, 1.05);
      }

      camera.updateProjectionMatrix();
      controls.target.copy(defaultTarget);
      heroRenderer.setSize(width, height);
      blocksRenderer.setSize(width, height);
      updateCardDockTargets();

      const isMobileNow = width <= 880 || isMobileDevice;
      controls.enabled = !isMobileNow;
      controls.enableRotate = !isMobileNow;
      heroElement.style.touchAction = 'pan-y';
      if (heroCanvas) heroCanvas.style.touchAction = 'pan-y';
      if (blocksCanvas) blocksCanvas.style.touchAction = 'pan-y';
    }

    updateResponsiveLayout();
    camera.position.copy(defaultCamPos);
    controls.update();

    // Mouse Tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouse.targetX = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        mouse.targetY = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Raycasting for interactive clicks
    const raycaster = new THREE.Raycaster();
    const touchVector = new THREE.Vector2();

    const handlePointerDown = (event) => {
      if (event.target.closest('button, a, input, select, textarea, .modal-content, .announcement-bar, #ui-mascot-controls, .scramble-card, .fac-btn')) {
        return;
      }

      touchVector.x = (event.clientX / window.innerWidth) * 2 - 1;
      touchVector.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(touchVector, camera);

      const blockMeshes = blockRig.map(b => b.mesh);
      const blockHits = raycaster.intersectObjects(blockMeshes);
      if (blockHits.length > 0) {
        const hitMesh = blockHits[0].object;
        const rigIdx = blockRig.findIndex(b => b.mesh === hitMesh);
        if (rigIdx !== -1) {
          triggerCubeActionRef.current(rigIdx);
          return;
        }
      }

      for (const toy of interactiveToys) {
        const toyHits = raycaster.intersectObjects(toy.group.children, true);
        if (toyHits.length > 0) {
          toy.wobbleVal = 1.0;
          playMusicalBoing(toy.soundFreq, 0.4, 'sine');
          return;
        }
      }
    };
    window.addEventListener('pointerdown', handlePointerDown);

    // Blinking
    let blinkTimer = 0;
    let nextBlinkInterval = 3.2;
    let blinkProgress = 0;
    let isBlinking = false;

    triggerBlinkRef.current = () => {
      if (!isBlinking) {
        isBlinking = true;
        blinkProgress = 0;
        playPopSound(720);
      }
    };

    // Scroll & Section 3 Scramble Animation
    let targetScrollY = 0;
    let smoothedScrollY = 0;
    let scrollProgress = 0;

    const handleScroll = () => {
      targetScrollY = window.scrollY || window.pageYOffset;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const scrambleCardConfigs = [
      { id: 'scramble-card-0', pileX: 280,  pileY: 10,  rot: -13.5, scale: 0.94, z: 4 },
      { id: 'scramble-card-1', pileX: -20,  pileY: 90,  rot: 11.2,  scale: 0.96, z: 3 },
      { id: 'scramble-card-2', pileX: 30,   pileY: -90, rot: -8.0,  scale: 0.95, z: 2 },
      { id: 'scramble-card-3', pileX: -270, pileY: 5,   rot: 14.5,  scale: 0.93, z: 1 }
    ];

    function updateSection3Scramble(trackProgress) {
      const p = Math.min(Math.max(trackProgress, 0), 1);
      const ease = p < 0.5
        ? 4 * p * p * p
        : 1 - Math.pow(-2 * p + 2, 3) / 2;

      const progressText = document.getElementById('scramble-progress-text');
      const barFill = document.getElementById('scramble-bar-fill');
      if (progressText) progressText.textContent = `${(p * 100).toFixed(1)}%`;
      if (barFill) barFill.style.width = `${(p * 100).toFixed(1)}%`;

      const isMobile = window.innerWidth <= 920;
      const mobileFactor = isMobile ? 0.35 : 1.0;

      scrambleCardConfigs.forEach((cfg) => {
        const cardEl = document.getElementById(cfg.id);
        if (!cardEl) return;

        const currentX = (cfg.pileX * mobileFactor) * (1 - ease);
        const currentY = (cfg.pileY * mobileFactor) * (1 - ease);
        const currentRot = cfg.rot * (1 - ease);
        const currentScale = cfg.scale + (1.0 - cfg.scale) * ease;
        const currentShadowBlur = 14 + (28 - 14) * (1 - ease);

        cardEl.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0px) rotate(${currentRot.toFixed(2)}deg) scale(${currentScale.toFixed(3)})`;
        cardEl.style.zIndex = ease > 0.85 ? '1' : cfg.z.toString();
        cardEl.style.boxShadow = `0 ${currentShadowBlur.toFixed(1)}px 38px rgba(241, 90, 41, ${(0.10 + (1 - ease) * 0.12).toFixed(2)})`;
      });
    }

    window.addEventListener('resize', updateResponsiveLayout);

    // Animation Loop
    const clock = new THREE.Clock();
    let reqId;

    function animate() {
      reqId = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.1);
      const t = clock.getElapsedTime();

      entranceTime += delta;
      const skyDropHeight = 5.2;
      const heroHeight = window.innerHeight;

      smoothedScrollY += (targetScrollY - smoothedScrollY) * 0.082;
      scrollProgress = Math.min(Math.max(smoothedScrollY / heroHeight, 0), 1);

      updateCardDockTargets();

      // Update Section 3 Scramble Runway
      const programsTrackEl = document.getElementById('programs-track');
      if (programsTrackEl) {
        const rect = programsTrackEl.getBoundingClientRect();
        const totalDistance = programsTrackEl.offsetHeight - window.innerHeight;
        if (totalDistance > 0) {
          const traveled = -rect.top;
          const trackProgress = traveled / totalDistance;
          updateSection3Scramble(trackProgress);
        }
      }

      // Exit transition for Section 1 overlay
      const exitProgress = Math.min(Math.max(scrollProgress / 0.42, 0), 1);
      const blurAmount = exitProgress * 20;
      const controlsOpacity = Math.max(0, 1 - exitProgress * 1.35);
      const controlsTranslateY = exitProgress * 36;

      const heroStageOverlay = document.querySelector('.hero-stage-overlay');
      const heroGiantText = document.getElementById('hero-giant-bg-text');
      const heroBottomControls = document.getElementById('hero-bottom-controls');
      const uiControls = document.getElementById('ui-mascot-controls');

      if (heroStageOverlay) {
        heroStageOverlay.style.filter = `blur(${blurAmount.toFixed(1)}px)`;
        heroStageOverlay.style.opacity = controlsOpacity.toFixed(3);
        heroStageOverlay.style.transform = `translate3d(0, ${controlsTranslateY.toFixed(1)}px, 0)`;
        heroStageOverlay.style.pointerEvents = controlsOpacity < 0.05 ? 'none' : 'auto';
      }
      if (heroGiantText) {
        heroGiantText.style.opacity = Math.max(0, (1 - exitProgress * 1.4) * 0.75).toFixed(3);
        heroGiantText.style.transform = `translate(-50%, calc(-50% + ${(-exitProgress * 50).toFixed(1)}px)) scale(${(1 - exitProgress * 0.1).toFixed(3)})`;
      }
      if (heroBottomControls) {
        heroBottomControls.style.filter = `blur(${blurAmount.toFixed(1)}px)`;
        heroBottomControls.style.opacity = controlsOpacity.toFixed(3);
        heroBottomControls.style.transform = `translate3d(0, ${controlsTranslateY.toFixed(1)}px, 0)`;
        heroBottomControls.style.pointerEvents = controlsOpacity < 0.05 ? 'none' : 'auto';
      }
      if (uiControls) {
        uiControls.style.opacity = controlsOpacity.toFixed(3);
        uiControls.style.pointerEvents = controlsOpacity < 0.05 ? 'none' : 'auto';
      }

      // Lift Section 1 on scroll
      const s1LiftY = THREE.MathUtils.lerp(0.0, 0.75, THREE.MathUtils.clamp(scrollProgress / 0.8, 0, 1));
      section1Group.position.set(0, s1LiftY, 0.0);
      section1Group.visible = (scrollProgress < 0.98);

      // Animate interactive floor toys
      interactiveToys.forEach((toy, i) => {
        const idleWobble = Math.sin(t * 1.6 + i * 1.2) * 0.02;
        toy.group.rotation.z = idleWobble;

        if (toy.name === 'Ball') {
          ballMesh.rotation.y = t * 0.35;
          ballMesh.rotation.x = Math.sin(t * 0.5) * 0.15;
        }

        if (toy.wobbleVal > 0) {
          toy.wobbleVal = Math.max(0, toy.wobbleVal - delta * 3.0);
          const hop = Math.sin(toy.wobbleVal * Math.PI) * 0.18;
          const tilt = Math.sin(toy.wobbleVal * Math.PI * 3.5) * 0.16 * toy.wobbleVal;
          toy.group.position.y = toy.basePos.y + hop;
          toy.group.rotation.z = tilt;
          if (toy.shadow) {
            toy.shadow.scale.setScalar(Math.max(0.2, 1.0 - hop * 1.5));
          }
        } else {
          toy.group.position.y = toy.basePos.y;
          if (toy.shadow) toy.shadow.scale.setScalar(1.0);
        }
      });

      // Animate 4 blocks tumbling and jumping into pedestal slots
      blockRig.forEach((item, idx) => {
        const tDrop = Math.min(Math.max((entranceTime - item.delay) / dropDuration, 0), 1);
        const bounceVal = easeOutBounce(tDrop);
        const floorDropY = THREE.MathUtils.lerp(skyDropHeight + idx * 0.6, item.scatter.y, bounceVal);
        const dropSpinRemaining = (1.0 - bounceVal) * item.dropSpin;

        const jumpStagger = idx * 0.06;
        const localJumpP = THREE.MathUtils.clamp((scrollProgress - jumpStagger) / (0.88 - jumpStagger), 0, 1);

        const easeJump = localJumpP < 0.5
          ? 4 * Math.pow(localJumpP, 3)
          : 1 - Math.pow(-2 * localJumpP + 2, 3) / 2;

        const jumpArcHeight = 2.4 + idx * 0.25;
        const jumpArcY = Math.sin(localJumpP * Math.PI) * jumpArcHeight;

        const targetX = THREE.MathUtils.lerp(item.scatter.x, item.section2Target.x, easeJump);
        const targetZ = THREE.MathUtils.lerp(item.scatter.z, item.section2Target.z, easeJump);
        const baseGroundY = THREE.MathUtils.lerp(floorDropY, item.section2Target.y, easeJump);

        const finalY = baseGroundY + jumpArcY;
        item.mesh.position.set(targetX, finalY, targetZ);

        const flightSpin = Math.sin(localJumpP * Math.PI) * 3.6;
        const targetRotX = THREE.MathUtils.lerp(item.scatter.rx, 0, easeJump)
          + (dropSpinRemaining * item.tumbleAxis.x)
          + (flightSpin * item.tumbleAxis.x * 0.35);

        const targetRotY = THREE.MathUtils.lerp(item.scatter.ry, Math.PI, easeJump)
          + (dropSpinRemaining * item.tumbleAxis.y)
          + (flightSpin * item.tumbleAxis.y * 0.6);

        const targetRotZ = THREE.MathUtils.lerp(item.scatter.rz, 0, easeJump)
          + (dropSpinRemaining * item.tumbleAxis.z)
          + (flightSpin * item.tumbleAxis.z * 0.35);

        item.mesh.rotation.set(targetRotX, targetRotY, targetRotZ);

        const baseScale = THREE.MathUtils.lerp(1.0, 0.74, easeJump);

        if (item.squishAnim > 0) {
          item.squishAnim = Math.max(0, item.squishAnim - delta * 3.5);
          const sFactor = Math.sin(item.squishAnim * Math.PI * 3) * 0.22 * item.squishAnim;
          item.mesh.scale.set(baseScale * (1 + sFactor), baseScale * (1 - sFactor * 1.5), baseScale * (1 + sFactor));
        } else {
          item.mesh.scale.set(baseScale, baseScale, baseScale);
        }

        if (item.shadow) {
          if (scrollProgress < 0.6) {
            item.shadow.visible = section1Group.visible;
            item.shadow.position.x = targetX;
            item.shadow.position.z = targetZ;
            item.shadow.position.y = -0.974 + s1LiftY;
            const heightAboveGround = Math.max(0, finalY - (item.scatter.y + s1LiftY));
            const shadowScale = Math.max(0.12, 1.0 - heightAboveGround * 0.16);
            const shadowAlpha = Math.max(0.0, (1.0 - scrollProgress) * (0.75 / (1.0 + heightAboveGround * 2.2)));
            item.shadow.scale.setScalar(shadowScale);
            item.shadow.material.opacity = shadowAlpha;
          } else {
            item.shadow.visible = true;
            item.shadow.position.x = targetX;
            item.shadow.position.z = targetZ;
            item.shadow.position.y = item.section2Target.y - (item.size * baseScale) / 2 + 0.008;
            const landAlpha = Math.min(1.0, (scrollProgress - 0.6) * 2.5) * 0.45;
            item.shadow.scale.setScalar(0.48);
            item.shadow.material.opacity = landAlpha;
          }
        }
      });

      // Mouse tracking
      const lerpSpeed = 0.06;
      mouse.x += (mouse.targetX - mouse.x) * lerpSpeed;
      mouse.y += (mouse.targetY - mouse.y) * lerpSpeed;

      blinkTimer += delta;
      if (blinkTimer > nextBlinkInterval) {
        if (!isBlinking) {
          isBlinking = true;
          blinkProgress = 0;
        }
        blinkTimer = 0;
        nextBlinkInterval = 2.5 + Math.random() * 3.5;
      }

      if (isBlinking) {
        blinkProgress += delta * 7.5;
        if (blinkProgress >= 1.0) {
          isBlinking = false;
          blinkProgress = 0;
        }
      }
      const blinkWeight = isBlinking ? Math.sin(blinkProgress * Math.PI) : 0;

      if (isTrackingEnabled && section1Group.visible) {
        headGroup.rotation.y = mouse.x * 0.44;
        headGroup.rotation.x = -mouse.y * 0.28;
        headGroup.rotation.z = -mouse.x * 0.10;

        const eyeTargetRotY = mouse.x * 0.32;
        const eyeTargetRotX = -mouse.y * 0.25;

        eyeLeftGroup.rotation.y = eyeTargetRotY;
        eyeLeftGroup.rotation.x = eyeTargetRotX;

        eyeRightGroup.rotation.y = eyeTargetRotY;
        eyeRightGroup.rotation.x = eyeTargetRotX;

        const gazeDownLidLower = Math.max(0, -mouse.y) * 0.32;
        const gazeUpLidRetract = Math.max(0, mouse.y) * 0.08;
        const lidTiltZ = mouse.x * 0.14;

        const openBaseAngle = -Math.PI * 0.48;
        const closedAngle = 0.0;
        const lidTargetAngle = THREE.MathUtils.lerp(
          openBaseAngle + gazeDownLidLower - gazeUpLidRetract,
          closedAngle,
          blinkWeight
        );

        eyelidLMesh.rotation.x = lidTargetAngle;
        eyelidRMesh.rotation.x = lidTargetAngle;

        eyelidLGroup.rotation.y = eyeTargetRotY * 0.45;
        eyelidLGroup.rotation.z = lidTiltZ;

        eyelidRGroup.rotation.y = eyeTargetRotY * 0.45;
        eyelidRGroup.rotation.z = lidTiltZ;

        characterRoot.rotation.y = mouse.x * 0.16;
      } else {
        headGroup.rotation.set(0, 0, 0);
        eyeLeftGroup.rotation.set(0, 0, 0);
        eyeRightGroup.rotation.set(0, 0, 0);
        eyelidLMesh.rotation.x = THREE.MathUtils.lerp(-Math.PI * 0.48, 0, blinkWeight);
        eyelidRMesh.rotation.x = THREE.MathUtils.lerp(-Math.PI * 0.48, 0, blinkWeight);
        characterRoot.rotation.y = Math.sin(t * 0.65) * 0.15;
      }

      const breath = Math.sin(t * 1.8) * 0.015;
      characterRoot.position.y = breath;
      characterRoot.scale.set(1 + breath * 0.25, 1 - breath * 0.25, 1 + breath * 0.25);

      controls.update();
      heroRenderer.render(scene, camera);
      blocksRenderer.render(blocksScene, camera);
    }

    animate();

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateResponsiveLayout);
      heroRenderer.dispose();
      blocksRenderer.dispose();
      controls.dispose();
    };
  }, [isMobileDevice]);

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', overflowX: 'clip', backgroundColor: '#ffd8bf' }}>
      
      {/* Giant 3D Watermark Background Text: Behind the doll (z-index: 8 < 10) */}
      <div className="hero-giant-bg-text-wrapper" aria-hidden="true">
        <div className="hero-giant-bg-text" id="hero-giant-bg-text">
          JLH NURSERY
        </div>
      </div>

      {/* 3D WebGL Canvases (Hero canvas doll has z-index: 10) */}
      <canvas ref={heroCanvasRef} id="webgl-hero-canvas" />
      <canvas ref={blocksCanvasRef} id="webgl-blocks-canvas" />

      {/* Scrollable Container (z-index: 25) */}
      <div id="scroll-container">
        
        {/* SECTION 1: 3D Hero Stage */}
        <section className="hero-section" ref={heroSectionRef} id="section-1">

          {/* Hero Stage Floating Overlay */}
          <div className="hero-stage-overlay">
            
            {/* Left: Exterior Spine + Action Card (Enters from Left) */}
            <div className="hero-actions-container animate-entrance-left" id="hero-actions-container">
              <div className="hero-spine-outer" aria-hidden="true">
                <span className="hero-spine-num">2026</span>
                <div className="hero-spine-line" />
                <span className="hero-spine-vertical-text">ADMISSIONS</span>
              </div>

              <div className="hero-card-main">
                {/* Top Group: Admissions pill + 2-line heading */}
                <div className="hero-header-top-group">
                  <div className="hero-mobile-app-pill" aria-label="2026 Admissions Open">
                    <span className="hero-mobile-app-dot" />
                    <span>2026 Admissions Open &bull; Villa 47, Ajman</span>
                  </div>

                  <h1 className="hero-actions-title">
                    Where Little Hearts <br />
                    Feel at Home
                  </h1>
                </div>

                {/* Bottom Group: Sub-content & Buttons positioned cleanly below the 3D cubes */}
                <div className="hero-bottom-actions-group">
                  <p className="hero-actions-desc">EYFS British curriculum &amp; motherly care in Al Rashidiya 2, Ajman.</p>

                  <div className="hero-buttons-wrap">
                    <button 
                      className="hero-cta-btn hero-btn-book" 
                      type="button" 
                      id="hero-book-now-btn"
                      onClick={() => {
                        playPopSound(580);
                        onBookVisitClick();
                      }}
                    >
                      <svg className="hero-btn-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      <span>Book Now</span>
                    </button>
                    
                    <a 
                      href="https://wa.me/971502005346?text=Hello%20Just%20Like%20Home%20Nursery%2C%20I%20would%20like%20to%20enquire%20about%20admissions." 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hero-cta-btn hero-btn-contact" 
                      id="hero-contact-us-btn"
                      onClick={() => playPopSound(540)}
                    >
                      <svg className="hero-btn-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                      </svg>
                      <span>Contact Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Floating Pill Badge (Enters from Top) */}
            <div className="hero-friends-pill animate-entrance-down delay-150" id="hero-friends-badge">
              <div className="friends-avatar-cluster">
                <div className="friend-avatar-mini" />
                <div className="friend-avatar-mini" />
                <div className="friend-avatar-mini" />
              </div>
              <div className="friends-counter-text">
                <span className="friends-count">100%</span>
                <span className="friends-sub">Happy Smiles</span>
              </div>
            </div>

            {/* Right: Arched Showcase Card with Carousel (Enters from Right) */}
            <div className="hero-card-right-arch animate-entrance-right delay-200">
              <div 
                className="globe-sphere-wrap" 
                id="arch-kids-carousel" 
                title="Happy Children at Just Like Home Nursery"
                onClick={() => {
                  setArchSlideIdx(prev => (prev + 1) % archPhotos.length);
                  playPopSound(540);
                }}
              >
                {archPhotos.map((photo, idx) => (
                  <div 
                    key={idx} 
                    className={`arch-carousel-slide ${idx === archSlideIdx ? 'active' : ''}`}
                  >
                    <img src={photo.src} alt={photo.alt} />
                  </div>
                ))}
                
                <div className="arch-carousel-overlay" />
                <div className="arch-carousel-dots">
                  {archPhotos.map((_, idx) => (
                    <span 
                      key={idx} 
                      className={`arch-dot ${idx === archSlideIdx ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setArchSlideIdx(idx);
                        playPopSound(560);
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="arch-card-content">
                <h4 className="arch-card-title">Little Hearts Thrive</h4>
                <p className="arch-card-body">
                  A gentle haven of purposeful play, phonics, Arabic literacy, warm caregivers, and child-safe exploration designed for early years development in Ajman.
                </p>
                <div 
                  className="arch-card-link"
                  onClick={() => {
                    playPopSound(580);
                    onBookVisitClick();
                  }}
                >
                  <span>Explore Classrooms</span>
                  <span>&rarr;</span>
                </div>
              </div>

              <svg className="arch-sparkle" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"/>
              </svg>
            </div>
          </div>

          {/* Bottom Scroll Indicator */}
          <div className="hero-bottom-controls" id="hero-bottom-controls">
            <div 
              className="scroll-indicator" 
              id="scroll-arrow-btn"
              onClick={() => {
                if (window.lenis) {
                  window.lenis.scrollTo(window.innerHeight, { duration: 1.2 });
                } else {
                  window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
                }
                playPopSound(480);
              }}
            >
              <div className="scroll-mouse-icon">
                <div className="scroll-wheel-dot" />
              </div>
              <span className="scroll-text">Scroll to Explore</span>
            </div>
          </div>
        </section>

        {/* Minimal Fact Carousel (Matching Reference Design) */}
        <FactCarousel />

        {/* SECTION 2: 4 Core Nursery Pillars & Synchronized 3D Pedestals */}
        <section className="content-section" id="section-2">
          <div className="section2-transition-overlay" id="transition-overlay" />

          <div className="content-wrapper">
            <div className="content-header" data-reveal="top">
              <span className="badge-pill">Nurturing &bull; Learning &bull; Growing in Ajman</span>
              <h2>
                Where Little Hearts{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #F15A29 0%, #ec4899 50%, #c9a84c 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Feel at Home
                </span>
              </h2>
              <p>
                At <b>Just Like Home Nursery</b>, we combine early-years education with the motherly care, patience, and personal warmth of home. Children are encouraged to discover the world through purposeful play, movement, and hands-on experiences at their own pace.
              </p>
            </div>

            <div className="pillars-interactive-split">
              
              {/* Left Column: 4 Pillar Cards with Pedestal Slots (Enters from Left) */}
              <div className="pillars-stack-container" id="pillars-stack" data-reveal="left">
                
                {/* Pillar 0: WARMTH */}
                <div 
                  className={`pillar-stack-card ${activePillar === 0 ? 'active' : ''}`}
                  id="pillar-card-0"
                  onClick={() => handlePillarSelect(0)}
                >
                  <div className="pillar-cube-slot" id="cube-slot-0">
                    <div className="slot-pedestal-ring" />
                  </div>
                  <div className="pillar-card-text">
                    <h4>WARMTH</h4>
                    <p>Motherly care, patience, and genuine personal attention at the heart of every daily interaction.</p>
                  </div>
                </div>

                {/* Pillar 1: TRUST */}
                <div 
                  className={`pillar-stack-card ${activePillar === 1 ? 'active' : ''}`}
                  id="pillar-card-1"
                  onClick={() => handlePillarSelect(1)}
                >
                  <div className="pillar-cube-slot" id="cube-slot-1">
                    <div className="slot-pedestal-ring" />
                  </div>
                  <div className="pillar-card-text">
                    <h4>TRUST</h4>
                    <p>A secure, transparent partnership with families built on mutual respect and daily open communication.</p>
                  </div>
                </div>

                {/* Pillar 2: GROWTH */}
                <div 
                  className={`pillar-stack-card ${activePillar === 2 ? 'active' : ''}`}
                  id="pillar-card-2"
                  onClick={() => handlePillarSelect(2)}
                >
                  <div className="pillar-cube-slot" id="cube-slot-2">
                    <div className="slot-pedestal-ring" />
                  </div>
                  <div className="pillar-card-text">
                    <h4>GROWTH</h4>
                    <p>Nurturing whole-child social, emotional, motor, cognitive, and early academic milestones.</p>
                  </div>
                </div>

                {/* Pillar 3: JOY */}
                <div 
                  className={`pillar-stack-card ${activePillar === 3 ? 'active' : ''}`}
                  id="pillar-card-3"
                  onClick={() => handlePillarSelect(3)}
                >
                  <div className="pillar-cube-slot" id="cube-slot-3">
                    <div className="slot-pedestal-ring" />
                  </div>
                  <div className="pillar-card-text">
                    <h4>JOY</h4>
                    <p>Play-based learning that protects the natural wonder, curiosity, and joyful laughter of childhood.</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Sticky Media Showcase with Smooth Sliding Track */}
              {(() => {
                const currentPillar = pillarShowcaseData[activePillar];
                const nextPillar = () => {
                  const nextIdx = (activePillar + 1) % pillarShowcaseData.length;
                  handlePillarSelect(nextIdx);
                };
                const prevPillar = () => {
                  const prevIdx = (activePillar - 1 + pillarShowcaseData.length) % pillarShowcaseData.length;
                  handlePillarSelect(prevIdx);
                };

                return (
                  <div 
                    className="pillars-media-showcase" 
                    id="pillars-media-showcase" 
                    data-reveal="right"
                    style={{
                      borderColor: `${currentPillar.tagColor}40`,
                      boxShadow: `0 24px 60px -15px ${currentPillar.tagColor}28, 0 4px 16px rgba(0, 0, 0, 0.04)`,
                      paddingBottom: '36px'
                    }}
                  >
                    {/* Top Bar: Scroll Progress & Pillar Identity */}
                    <div 
                      className="pillars-showcase-progress-bar"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '16px',
                        paddingBottom: '12px',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.06)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span 
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '4px 12px',
                            borderRadius: '999px',
                            fontSize: '0.78rem',
                            fontWeight: '800',
                            backgroundColor: `${currentPillar.tagColor}15`,
                            color: currentPillar.tagColor,
                            border: `1px solid ${currentPillar.tagColor}30`,
                            letterSpacing: '0.5px',
                            transition: 'all 0.35s ease'
                          }}
                        >
                          <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: currentPillar.tagColor }} />
                          <span>{currentPillar.counter} &bull; {currentPillar.pillarName}</span>
                        </span>
                        <span style={{ fontSize: '0.82rem', fontWeight: '700', color: '#64748b' }} className="pillars-desktop-title-snippet">
                          {currentPillar.title}
                        </span>
                      </div>

                      {/* 4 Segmented Scroll Progress Indicators */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }} title="Scroll progress through 4 Pillars">
                        {pillarShowcaseData.map((p, pIdx) => {
                          const isPastOrCurrent = pIdx <= activePillar;
                          const isCurrent = pIdx === activePillar;
                          return (
                            <button
                              key={pIdx}
                              type="button"
                              onClick={() => handlePillarSelect(pIdx)}
                              aria-label={`Jump to ${p.pillarName}`}
                              style={{
                                height: '7px',
                                width: isCurrent ? '28px' : '16px',
                                borderRadius: '999px',
                                backgroundColor: isCurrent ? p.tagColor : (isPastOrCurrent ? `${p.tagColor}80` : '#e2e8f0'),
                                border: 'none',
                                padding: 0,
                                cursor: 'pointer',
                                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                boxShadow: isCurrent ? `0 2px 8px ${p.tagColor}60` : 'none'
                              }}
                            />
                          );
                        })}
                      </div>
                    </div>

                    {/* Sliding Viewport & Track: Slides smoothly between WARMTH, TRUST, GROWTH, JOY */}
                    <div 
                      className="pillars-showcase-slider-viewport"
                      style={{
                        width: '100%',
                        overflow: 'hidden',
                        borderRadius: '26px',
                        position: 'relative'
                      }}
                    >
                      <div 
                        className="pillars-showcase-slider-track"
                        style={{
                          display: 'flex',
                          width: '100%',
                          transform: `translate3d(-${activePillar * 100}%, 0, 0)`,
                          transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
                          willChange: 'transform'
                        }}
                      >
                        {pillarShowcaseData.map((item, idx) => (
                          <div 
                            key={idx}
                            className="pillars-showcase-slide-item"
                            style={{
                              minWidth: '100%',
                              maxWidth: '100%',
                              width: '100%',
                              flexShrink: 0,
                              boxSizing: 'border-box'
                            }}
                          >
                            <div 
                              className="media-collage-grid pillars-collage-grid"
                              style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '14px',
                                width: '100%',
                                height: '340px',
                                borderRadius: '26px'
                              }}
                            >
                              {/* Left Column: Working Hours Card on Top + Infant Photo on Bottom */}
                              <div className="pillars-left-col" style={{ display: 'flex', flexDirection: 'column', gap: '14px', height: '100%', width: '100%' }}>
                                {/* Top: Working Hours / Info Card */}
                                <div 
                                  className="pillars-info-card"
                                  style={{
                                    backgroundColor: item.infoCard?.bg || '#edf7e8',
                                    borderRadius: '18px',
                                    padding: '0.9rem 1.1rem',
                                    border: '1px solid rgba(0, 0, 0, 0.04)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.02)',
                                    flexShrink: 0,
                                    height: '140px',
                                    boxSizing: 'border-box'
                                  }}
                                >
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.45rem' }}>
                                    <div style={{
                                      width: '28px',
                                      height: '28px',
                                      borderRadius: '50%',
                                      backgroundColor: '#ffffff',
                                      color: item.infoCard?.accent || '#2e7d32',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.06)'
                                    }}>
                                      <Clock size={15} strokeWidth={2.4} />
                                    </div>
                                    <span style={{
                                      fontSize: '0.88rem',
                                      fontWeight: '800',
                                      color: '#1e293b'
                                    }}>
                                      {item.infoCard?.title}
                                    </span>
                                  </div>

                                  <div style={{
                                    fontSize: '0.78rem',
                                    color: '#334155',
                                    lineHeight: 1.45,
                                    fontWeight: '600'
                                  }}>
                                    <div style={{ paddingBottom: '0.25rem', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                                      {item.infoCard?.line1}
                                    </div>
                                    <div style={{ padding: '0.25rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                                      {item.infoCard?.line2}
                                    </div>
                                    <div style={{ paddingTop: '0.25rem', color: '#64748b' }}>
                                      {item.infoCard?.line3}
                                    </div>
                                  </div>
                                </div>

                                {/* Bottom: Playful Child / Infant Photo */}
                                <div 
                                  className="pillars-small-img-wrap"
                                  style={{
                                    borderRadius: '18px',
                                    overflow: 'hidden',
                                    height: '186px',
                                    width: '100%',
                                    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.06)',
                                    position: 'relative',
                                    boxSizing: 'border-box'
                                  }}
                                >
                                  <img
                                    src={item.smallImage}
                                    alt={item.smallAlt || item.title}
                                    loading={idx === 0 ? 'eager' : 'lazy'}
                                    style={{
                                      width: '100%',
                                      height: '100%',
                                      objectFit: 'cover',
                                      objectPosition: item.smallImgPos || (idx === 0 ? 'center 10%' : 'center'),
                                      display: 'block'
                                    }}
                                  />
                                </div>
                              </div>

                              {/* Right Column: Tall Portrait Photo + Floating Badge (Fixed Height) */}
                              <div 
                                className="pillars-right-col"
                                style={{
                                  borderRadius: '22px',
                                  overflow: 'hidden',
                                  height: '340px',
                                  width: '100%',
                                  position: 'relative',
                                  boxShadow: '0 10px 24px rgba(0, 0, 0, 0.08)',
                                  boxSizing: 'border-box'
                                }}
                              >
                                <img
                                  src={item.tallImage}
                                  alt={item.tallAlt || item.title}
                                  loading={idx === 0 ? 'eager' : 'lazy'}
                                  className="pillars-tall-img"
                                  style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: item.tallImgPos || (idx === 0 ? 'center 20%' : 'center'),
                                    display: 'block'
                                  }}
                                />

                                {/* Floating Pillar Badge */}
                                <div 
                                  className="pillars-floating-badge"
                                  style={{
                                    position: 'absolute',
                                    top: '12px',
                                    left: '12px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.94)',
                                    backdropFilter: 'blur(8px)',
                                    padding: '0.35rem 0.85rem',
                                    borderRadius: '999px',
                                    fontSize: '0.78rem',
                                    fontWeight: '800',
                                    color: '#1e293b',
                                    boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    zIndex: 2
                                  }}
                                >
                                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.tagColor }} />
                                  <span>Pillar: {item.pillarName}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Captions & Highlights Area (Visible on mobile only; on desktop, 4 pillars stack on left handles all descriptions) */}
                    <div className="media-caption-area pillars-caption-area pillars-desktop-hide">
                      <div className="media-caption-title pillars-caption-title" id="media-caption-title">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <h4>{currentPillar.title}</h4>
                        </div>
                        <div className="pillars-controls-cluster" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span 
                            className="media-counter-pill"
                            style={{
                              color: currentPillar.tagColor,
                              borderColor: `${currentPillar.tagColor}35`,
                              background: `${currentPillar.tagColor}12`
                            }}
                          >
                            {currentPillar.counter}
                          </span>
                          {/* Navigation arrow buttons */}
                          <button
                            type="button"
                            onClick={prevPillar}
                            className="media-nav-arrow-btn"
                            aria-label="Previous Pillar"
                          >
                            <ChevronLeft size={15} />
                          </button>
                          <button
                            type="button"
                            onClick={nextPillar}
                            className="media-nav-arrow-btn"
                            aria-label="Next Pillar"
                          >
                            <ChevronRight size={15} />
                          </button>
                        </div>
                      </div>

                      <p className="media-caption-desc" id="media-caption-desc">
                        {currentPillar.desc}
                      </p>

                      {/* Feature Chips */}
                      {currentPillar.highlights && (
                        <div className="media-feature-chips">
                          {currentPillar.highlights.map((h, hIdx) => (
                            <span key={hIdx} className="media-chip-item">
                              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: currentPillar.tagColor }} />
                              <span>{h}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Indicators (Visible on mobile only) */}
                    <div className="media-indicators pillars-desktop-hide">
                      {pillarShowcaseData.map((item, idx) => (
                        <div 
                          key={idx}
                          className={`media-indicator-pill ${idx === activePillar ? 'active' : ''}`}
                          style={idx === activePillar ? { background: item.tagColor, boxShadow: `0 2px 8px ${item.tagColor}50` } : {}}
                          onClick={() => handlePillarSelect(idx)}
                        />
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </section>

        {/* SECTION 3: Full Width 3D Curved Perspective Gallery */}
        <FullWidthCurvedGallery onBookVisitClick={onBookVisitClick} />

        {/* SECTION 4: Villa 47 Campus Facilities & Activities */}
        <section className="content-section" id="section-facilities" style={{ paddingTop: '60px' }}>
          <div className="content-wrapper">

            {/* Interactive Activities Section (3 Interactive Image Boxes Matching Reference Design) */}
            <div className="activity-boxes-section" id="activities-overview">
              <div className="section-title-wrap" data-reveal="top">
                <div className="fac-section-tag" style={{ background: 'rgba(241, 90, 41, 0.1)', color: '#ea580c', borderColor: '#fed7aa' }}>
                  <Sparkles size={14} className="fac-tag-icon" />
                  <span>JOYFUL DAILY DISCOVERIES</span>
                </div>
                <h3 style={{ color: '#1e293b' }}>
                  Little Hands.{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, #F15A29 0%, #e11d48 50%, #c9a84c 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    Big Discoveries.
                  </span>
                </h3>
                <p>Meaningful daily activities that encourage children to explore, experiment, communicate, and solve problems.</p>
              </div>

              {/* 3 Interactive Image Boxes with Left, Bottom, Right Entrances */}
              <div className="activity-boxes-grid">
                {ACTIVITY_BOXES.map((box, bIdx) => {
                  const isSelected = selectedActivityId === box.id;
                  const boxDir = bIdx === 0 ? 'left' : bIdx === 1 ? 'bottom' : 'right';
                  return (
                    <div 
                      key={box.id}
                      data-reveal={boxDir}
                      className={`activity-image-card activity-card-${box.colorTheme} ${isSelected ? 'is-selected' : ''}`}
                      onClick={() => {
                        setSelectedActivityId(prev => prev === box.id ? null : box.id);
                        playPopSound();
                      }}
                    >
                      {/* Top Image Box */}
                      <div className="activity-card-img-wrap">
                        <img 
                          src={box.image} 
                          alt={box.title} 
                          className="activity-card-img"
                          loading="lazy" 
                        />
                        <div className="activity-card-tag-pill">
                          <span>{box.tag}</span>
                        </div>
                      </div>

                      {/* Content Info */}
                      <div className="activity-card-body">
                        <div className="activity-card-header-row">
                          <h4 className="activity-card-title">{box.title}</h4>
                          <span className="activity-card-age">{box.ageBadge}</span>
                        </div>

                        <p className="activity-card-desc">{box.desc}</p>

                        {/* Interactive Highlights Row */}
                        <div className="activity-card-highlights">
                          {box.highlights.map((h, i) => (
                            <span key={i} className="activity-highlight-chip">
                              <span className="chip-dot" /> {h}
                            </span>
                          ))}
                        </div>

                        {/* Footer Action */}
                        <div className="activity-card-footer">
                          <Link 
                            to="/activities" 
                            className="activity-card-cta"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>Explore Activities</span>
                            <ArrowRight size={14} className="activity-cta-arrow" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Facilities Section: Clean Minimal Campus Showcase */}
            <div className="facilities-section" id="facilities-grid">
              <div className="section-title-wrap" data-reveal="top" style={{ marginBottom: '24px' }}>
                <div className="fac-section-tag" style={{ background: 'rgba(2, 132, 199, 0.08)', color: '#0284c7', borderColor: '#bae6fd' }}>
                  <ShieldCheck size={14} className="fac-tag-icon" />
                  <span>VILLA 47 CAMPUS</span>
                </div>
                <h3 style={{ color: '#1e293b', fontSize: 'clamp(1.8rem, 2.8vw, 2.3rem)', margin: '10px 0 8px' }}>
                  Where Little Minds Flourish
                </h3>
                <p style={{ maxWidth: '520px', margin: '0 auto', color: '#64748b', fontSize: '0.96rem' }}>
                  Purpose-built, climate-controlled, and equipped for joyful sensory discovery in Al Rashidiya 2.
                </p>
              </div>
              
              {/* Facility Tabs Bar */}
              <div 
                className="fac-tabs-bar"
                data-reveal="top"
                onMouseEnter={() => setIsFacAutoPlayPaused(true)}
                onMouseLeave={() => setIsFacAutoPlayPaused(false)}
              >
                {FACILITY_SLIDES.map((slide, sIdx) => {
                  const IconComp = slide.tabIcon;
                  const isActive = sIdx === activeFacilityIdx;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      className={`fac-tab-pill ${isActive ? 'is-active' : ''}`}
                      onClick={() => setActiveFacilityIdx(sIdx)}
                      style={isActive ? { background: slide.primaryBtnBg, borderColor: slide.themeColor } : {}}
                    >
                      <IconComp size={16} style={{ color: isActive ? '#ffffff' : slide.themeColor }} />
                      <span>{slide.tabLabel}</span>
                    </button>
                  );
                })}
              </div>

              {/* Main Split Showcase Container */}
              {(() => {
                const cur = FACILITY_SLIDES[activeFacilityIdx];
                const TagIcon = cur.tagIcon;
                const nextSlide = () => setActiveFacilityIdx((prev) => (prev + 1) % FACILITY_SLIDES.length);
                const prevSlide = () => setActiveFacilityIdx((prev) => (prev - 1 + FACILITY_SLIDES.length) % FACILITY_SLIDES.length);

                return (
                  <div 
                    className="fac-showcase-container"
                    onMouseEnter={() => setIsFacAutoPlayPaused(true)}
                    onMouseLeave={() => setIsFacAutoPlayPaused(false)}
                    style={{
                      background: '#ffffff',
                      borderRadius: '28px',
                      border: '1.5px solid #f1f5f9',
                      boxShadow: '0 12px 36px rgba(0, 0, 0, 0.04)',
                      overflow: 'hidden'
                    }}
                  >
                    <div 
                      className="fac-showcase-grid"
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1.08fr 1fr',
                        gap: '2.5rem',
                        alignItems: 'center',
                        padding: '2.5rem 3rem',
                        position: 'relative'
                      }}
                    >
                      {/* LEFT COLUMN: Clean Minimal Content */}
                      <div 
                        key={`${cur.id}-content`} 
                        style={{ animation: 'facContentSlide 0.4s ease forwards' }}
                      >
                        {/* Tag Pill Badge */}
                        <div 
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '5px 14px',
                            borderRadius: '999px',
                            background: cur.accentBadgeBg,
                            color: cur.accentBadgeColor,
                            fontWeight: 700,
                            fontSize: '0.8rem',
                            marginBottom: '1rem'
                          }}
                        >
                          <TagIcon size={14} />
                          <span>{cur.tag}</span>
                        </div>

                        {/* Clean Heading */}
                        <h2 
                          style={{
                            fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
                            fontWeight: 800,
                            color: '#0f172a',
                            lineHeight: 1.25,
                            margin: '0 0 1rem 0',
                            letterSpacing: '-0.02em'
                          }}
                        >
                          {cur.headingStart}{' '}
                          <span style={{ color: cur.themeColor }}>
                            {cur.headingHighlight}
                          </span>
                        </h2>

                        {/* Refined Description */}
                        <p 
                          style={{
                            fontSize: '0.96rem',
                            color: '#64748b',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem',
                            maxWidth: '480px'
                          }}
                        >
                          {cur.desc}
                        </p>

                        {/* Feature Pills */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '2rem' }}>
                          {cur.features.map((feat, fIdx) => {
                            const FeatIcon = feat.icon;
                            return (
                              <div
                                key={fIdx}
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '6px',
                                  padding: '6px 14px',
                                  borderRadius: '999px',
                                  background: '#f8fafc',
                                  border: '1px solid #e2e8f0',
                                  fontSize: '0.82rem',
                                  fontWeight: 600,
                                  color: '#334155'
                                }}
                              >
                                <FeatIcon size={14} style={{ color: cur.themeColor }} />
                                <span>{feat.label}</span>
                              </div>
                            );
                          })}
                        </div>

                        {/* Minimal Controls Row: Book a Tour CTA + Slide Counter & Arrows */}
                        <div 
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            borderTop: '1px solid #f1f5f9',
                            paddingTop: '1.25rem',
                            gap: '16px',
                            flexWrap: 'wrap'
                          }}
                        >
                          <button
                            type="button"
                            onClick={onBookVisitClick}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '8px',
                              padding: '11px 24px',
                              borderRadius: '999px',
                              background: cur.primaryBtnBg,
                              color: '#ffffff',
                              fontWeight: 700,
                              fontSize: '0.9rem',
                              border: 'none',
                              cursor: 'pointer',
                              boxShadow: `0 8px 20px -4px ${cur.themeColor}40`,
                              transition: 'all 0.25s ease'
                            }}
                          >
                            <span>Book a Tour</span>
                            <ArrowRight size={15} />
                          </button>

                          {/* Minimal Slider Navigation Arrows */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#94a3b8', marginRight: '4px' }}>
                              0{activeFacilityIdx + 1} / 0{FACILITY_SLIDES.length}
                            </span>
                            <button
                              type="button"
                              onClick={prevSlide}
                              aria-label="Previous Slide"
                              style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                border: '1px solid #e2e8f0',
                                background: '#ffffff',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#64748b',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                              }}
                            >
                              <ChevronLeft size={15} />
                            </button>
                            <button
                              type="button"
                              onClick={nextSlide}
                              aria-label="Next Slide"
                              style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                border: '1px solid #e2e8f0',
                                background: '#ffffff',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#64748b',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                              }}
                            >
                              <ChevronRight size={15} />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* RIGHT COLUMN: Clean, Unobstructed Photography */}
                      <div 
                        key={`${cur.id}-image`}
                        style={{
                          position: 'relative',
                          borderRadius: '24px',
                          overflow: 'hidden',
                          boxShadow: '0 16px 36px -10px rgba(0, 0, 0, 0.12)',
                          animation: 'facImageSlide 0.4s ease forwards'
                        }}
                      >
                        <img
                          src={cur.image}
                          alt={cur.tabLabel}
                          className="fac-slide-main-img"
                          style={{
                            width: '100%',
                            height: '380px',
                            objectFit: 'cover',
                            display: 'block'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
