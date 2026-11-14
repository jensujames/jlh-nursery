import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';
import LuxuryPageHero from '../components/LuxuryPageHero';
import LuxuryClosingCta from '../components/LuxuryClosingCta';
import useSEO from '../hooks/useSEO';
import {
  Camera, Calendar, X, ChevronLeft, ChevronRight,
  Sparkles, ArrowRight, Info, Compass, Building2, Heart,
  ZoomIn, MessageCircle, Clock, ShieldCheck, CheckCircle2
} from 'lucide-react';

const FILTER_CONFIG = [
  { id: 'all', label: 'All Photos' },
  { id: 'facilities', label: 'Campus & Facilities' },
  { id: 'eyfs', label: 'Early Years Foundation' },
  { id: 'nursery', label: 'Nursery Program' },
  { id: 'preschool', label: 'Preschool' },
  { id: 'school-readiness', label: 'School Readiness' },
  { id: 'arabic', label: 'Arabic Immersion' },
  { id: 'art-creativity', label: 'Art & Atelier' },
  { id: 'early-numeracy', label: 'Numeracy & STEM' },
  { id: 'phonics-literacy', label: 'Phonics & Literacy' },
  { id: 'physical-play', label: 'Physical & Outdoor Play' },
  { id: 'life-skills', label: 'Life Skills & Independence' },
  { id: 'music-stories', label: 'Music & Stories' },
  { id: 'daycare', label: 'Daycare & Rest' },
  { id: 'send', label: 'Inclusive Support' }
];

const GALLERY_IMAGES = [
  // 0. Campus Spaces & Facilities (Featured)
  {
    src: '/images/outdoor.jpg',
    category: 'facilities',
    title: '55,000 Sq. Ft. Secure Shaded Play Campus',
    caption: 'Expansive outdoor campus in Al Rashidiya 2 featuring green turf, full UV sunshade canopies, climbing structures, and garden swings.',
    alt: 'Outdoor shaded play park at Just Like Home Nursery Al Rashidiya Ajman',
    badge: 'Campus Grounds',
    ageGroup: 'All Ages'
  },
  {
    src: '/images/classroom.jpg',
    category: 'facilities',
    title: 'Sunlit Reggio-Inspired Early Learning Classrooms',
    caption: 'Naturally illuminated interior learning spaces with child-accessible wooden shelving, sensory exploration corners, and non-toxic materials.',
    alt: 'Sunlit learning classrooms at Just Like Home Nursery Ajman',
    badge: 'Learning Spaces',
    ageGroup: '18 Months – 4 Years'
  },
  {
    src: '/images/hero-facilities.jpg',
    category: 'facilities',
    title: 'Standalone Private Villa Campus & Security',
    caption: 'Dedicated standalone campus with 24/7 CCTV surveillance, on-site certified pediatric clinic, and secure gated access for complete safety.',
    alt: 'Private villa campus and on-site clinic safety at Just Like Home Nursery Ajman',
    badge: 'Campus Safety',
    ageGroup: 'All Ages'
  },
  {
    src: '/images/activity-creative-play.jpg',
    category: 'facilities',
    title: 'Indoor Creative & Sensory Play Studio',
    caption: 'Vibrant indoor play area designed for sensory activities, motor development games, and imaginative group exploration.',
    alt: 'Indoor creative play studio at Just Like Home Nursery Ajman',
    badge: 'Play Studio',
    ageGroup: '2 – 4 Years'
  },

  // 1. Early Years Foundation (EYFS)
  {
    src: '/media/eyfs/eyfs-1.jpg',
    category: 'eyfs',
    title: 'Sensory Number Hunt Tuff Tray Activity',
    caption: 'Teacher in hijab and blazer guiding preschoolers searching through red sensory rice with magnifying glasses to uncover hidden number cards.',
    alt: 'Sensory number hunt tuff tray with educator at Just Like Home Nursery',
    badge: 'Sensory Discovery',
    ageGroup: '18 Months – 3 Years'
  },
  {
    src: '/media/eyfs/eyfs-2.jpg',
    category: 'eyfs',
    title: 'Collaborative Number Discovery Circle',
    caption: 'Toddlers gathered around the sensory tray on colorful puzzle mats, practicing early observation and tactile discovery with their educator.',
    alt: 'Toddlers exploring sensory rice and number cards together in circle',
    badge: 'Social Learning',
    ageGroup: '2 – 3.5 Years'
  },
  {
    src: '/media/eyfs/eyfs-3.jpg',
    category: 'eyfs',
    title: 'Curiosity & Magnifying Glass Exploration',
    caption: 'Preschooler inspecting red sensory rice up close with a child-safe magnifying glass to spot small hidden number shapes.',
    alt: 'Child using magnifying glass for sensory exploration at nursery',
    badge: 'Fine Observation',
    ageGroup: '2 – 3.5 Years'
  },
  {
    src: '/media/eyfs/eyfs-4.jpg',
    category: 'eyfs',
    title: 'Numeral Recognition & Guided Discovery',
    caption: 'Teacher presenting numeral cards found during the sensory hunt, helping children connect digits with spoken numbers.',
    alt: 'Teacher showing numeral cards to toddlers during sensory play',
    badge: 'Early Cognition',
    ageGroup: '2 – 3.5 Years'
  },
  {
    src: '/media/eyfs/eyfs-5.jpg',
    category: 'eyfs',
    title: 'Active Participation & Card Matching',
    caption: 'Engaged little hands carefully placing discovered number cards onto the matching activity sheet in the center of the tray.',
    alt: 'Children placing number cards onto activity sheet in sensory tray',
    badge: 'Hands-On Math',
    ageGroup: '2 – 3.5 Years'
  },
  {
    src: '/media/eyfs/eyfs-6.jpg',
    category: 'eyfs',
    title: 'Seashell & Sensory Rice Scooping',
    caption: 'Educator introducing natural seashells and red sensory rice, guiding children in scooping, sorting, and collecting into cups.',
    alt: 'Children and educator scooping seashells and sensory rice into cups',
    badge: 'Tactile Play',
    ageGroup: '18 Months – 3 Years'
  },
  {
    src: '/media/eyfs/eyfs-7.jpg',
    category: 'eyfs',
    title: 'Fine-Motor Scooping & Pouring Practice',
    caption: 'Developing hand-eye coordination and pincer control by using spoons and cups to scoop textured sensory rice.',
    alt: 'Toddler practicing scooping sensory rice with spoon into cup',
    badge: 'Motor Skills',
    ageGroup: '18 Months – 3 Years'
  },
  {
    src: '/media/eyfs/eyfs-8.jpg',
    category: 'eyfs',
    title: 'Color Cups & Seashell Sorting',
    caption: 'Children filling vibrant sorting cups with smooth seashells, exploring natural shapes and textured contrasts.',
    alt: 'Toddlers sorting seashells into colorful cups at sensory table',
    badge: 'Sensory Sorting',
    ageGroup: '18 Months – 3 Years'
  },
  {
    src: '/media/eyfs/eyfs-9.jpg',
    category: 'eyfs',
    title: 'Nurturing 1-on-1 Educator Guidance',
    caption: 'Attentive teacher interaction supporting each child rhythm, encouraging sensory confidence and gentle social sharing.',
    alt: 'Educator gently helping toddler scoop sensory materials at nursery',
    badge: 'Nurturing Care',
    ageGroup: '18 Months – 3 Years'
  },
  {
    src: '/media/eyfs/eyfs-10.jpg',
    category: 'eyfs',
    title: 'Praise & Milestone Encouragement',
    caption: 'Warm educator praise cheering children focus and accomplishments, fostering joyful confidence and high self-esteem.',
    alt: 'Teacher giving thumbs up encouraging children at sensory tray',
    badge: 'Confidence Building',
    ageGroup: '18 Months – 3 Years'
  },

  // 2. Nursery Program
  {
    src: '/media/nursery/nursery-1.jpg',
    category: 'nursery',
    title: 'Indoor Soft-Play Cottage & Slide Adventure',
    caption: 'Toddlers exploring our cushioned indoor play lab featuring a cottage playhouse, mini slide, and interlocking safety puzzle mats.',
    alt: 'Indoor soft-play cottage slide and safety puzzle flooring at JLH Nursery',
    badge: 'Indoor Play Lab',
    ageGroup: '2 – 3.5 Years'
  },
  {
    src: '/media/nursery/nursery-2.jpg',
    category: 'nursery',
    title: 'Indoor Cottage Lookout & Friendly Smiles',
    caption: 'Preschoolers smiling together from inside the indoor cottage playhouse, building gross motor confidence and social bonds.',
    alt: 'Children smiling from indoor cottage playhouse at nursery',
    badge: 'Social Play',
    ageGroup: '2 – 3.5 Years'
  },
  {
    src: '/media/nursery/nursery-3.jpg',
    category: 'nursery',
    title: 'Rocking Seesaws & Cooperative Balance',
    caption: 'Two little friends enjoying the yellow rocking seesaw together on soft cushioned foam flooring, developing balance and rhythm.',
    alt: 'Two toddlers playing on yellow rocking seesaw in indoor play room',
    badge: 'Motor Balance',
    ageGroup: '2 – 3.5 Years'
  },
  {
    src: '/media/nursery/nursery-4.jpg',
    category: 'nursery',
    title: 'Indoor Ride-On Toys & Toddler Mobility',
    caption: 'Toddlers having fun with colorful ride-on animal toys and scooters inside our air-conditioned soft-play gym.',
    alt: 'Toddlers riding colorful animal ride-on toys in soft play area',
    badge: 'Active Agility',
    ageGroup: '2 – 3.5 Years'
  },
  {
    src: '/media/nursery/nursery-5.jpg',
    category: 'nursery',
    title: 'Friendship Train & Outdoor Campus Smiles',
    caption: 'Four preschool friends in smart nursery uniforms posing happily on our shaded outdoor green lawn.',
    alt: 'Preschool children smiling together in uniform on outdoor lawn',
    badge: 'Nursery Friendships',
    ageGroup: '2.5 – 4 Years'
  },
  {
    src: '/media/nursery/nursery-6.jpg',
    category: 'nursery',
    title: 'Outdoor Spiral Tube Slide Joy',
    caption: 'Smiling child sliding down the covered spiral slide onto soft artificial turf under protective sunshade canopies.',
    alt: 'Preschooler smiling at base of outdoor spiral tube slide',
    badge: 'Outdoor Play',
    ageGroup: '2 – 4 Years'
  },
  {
    src: '/media/nursery/nursery-7.jpg',
    category: 'nursery',
    title: 'Garden Swings by the Rainbow Fence',
    caption: 'Two smiling friends enjoying the outdoor garden swings beside our vibrant multi-colored rainbow picket fence.',
    alt: 'Two preschool girls smiling on outdoor garden swings',
    badge: 'Garden Swings',
    ageGroup: '2 – 4 Years'
  },
  {
    src: '/media/nursery/nursery-8.jpg',
    category: 'nursery',
    title: 'Playhouse Fort & Cheerful Waves',
    caption: 'Children waving cheerfully from the outdoor climbing playhouse decorated with whimsical sun and flower roof toppers.',
    alt: 'Children waving from outdoor playground playhouse in Ajman',
    badge: 'Playground Fun',
    ageGroup: '2.5 – 4 Years'
  },
  {
    src: '/media/nursery/nursery-9.jpg',
    category: 'nursery',
    title: 'Interactive Storytime & Language Skills',
    caption: 'Building communication and language skills through interactive storytime.',
    alt: 'Building communication and language skills through interactive storytime at Just Like Home Nursery',
    badge: 'Storytime & Language',
    ageGroup: '2 – 4 Years'
  },

  // 3. Preschool Program (FS1 & FS2)
  {
    src: '/media/preschool/preschool-1.jpg',
    category: 'preschool',
    title: 'Early Numeracy & Number Tracing',
    caption: 'Early numeracy and number tracing for school readiness.',
    alt: 'Early numeracy and number tracing for school readiness',
    badge: 'Early Numeracy',
    ageGroup: '3 – 4 Years'
  },
  {
    src: '/media/preschool/preschool-2.jpg',
    category: 'preschool',
    title: 'Numeral Formation & Repetitive Practice',
    caption: 'Focused table work tracing sequential digits 1 to 5, building hand strength and fine-motor control for primary school.',
    alt: 'Child tracing dotted numbers 1 through 5 on preschool worksheet',
    badge: 'Pencil Control',
    ageGroup: '3 – 4 Years'
  },
  {
    src: '/media/preschool/preschool-3.jpg',
    category: 'preschool',
    title: 'Concentration & Dedicated Tabletop Learning',
    caption: 'A preschool girl concentrating on neat number formation, developing early spatial awareness on lined activity pages.',
    alt: 'Preschool girl writing numbers on worksheet at child-sized table',
    badge: 'Early Numeracy',
    ageGroup: '3 – 4 Years'
  },
  {
    src: '/media/preschool/preschool-4.jpg',
    category: 'preschool',
    title: 'CVC Rhyming Words: The -at Word Family',
    caption: 'Sounding out and tracing early phonetic words: cat, hat, bat, mat, rat, and sat to connect letter sounds with whole words.',
    alt: 'Preschooler tracing CVC rhyming words -at family on phonics worksheet',
    badge: 'Phonics & Reading',
    ageGroup: '3 – 4.5 Years'
  },
  {
    src: '/media/preschool/preschool-5.jpg',
    category: 'preschool',
    title: 'Pre-Writing Patterns & Creative Drawing',
    caption: 'Tracing undulating waves and drawing a teddy bear to develop fine-motor wrist flexibility and pre-writing pencil fluency.',
    alt: 'Child tracing pre-writing pattern waves and teddy bear outline',
    badge: 'Pre-Writing Skills',
    ageGroup: '3 – 4 Years'
  },
  {
    src: '/media/preschool/preschool-6.jpg',
    category: 'preschool',
    title: 'Independent Number Writing Milestone',
    caption: 'Preschool boy proudly practicing his 1 to 5 number rows, demonstrating growing focus and pencil mastery.',
    alt: 'Preschool boy practicing number writing on worksheet',
    badge: 'Math Milestone',
    ageGroup: '3 – 4 Years'
  },

  // 4. School Readiness
  {
    src: '/media/school-readiness/school-readiness-1.jpg',
    category: 'school-readiness',
    title: 'Small Group Tabletop Focus & Instruction',
    caption: 'Educator guiding a structured small-group coloring session, preparing children for primary classroom routines and attentive listening.',
    alt: 'Educator guiding small group coloring session for school readiness',
    badge: 'Classroom Readiness',
    ageGroup: '3.5 – 4.5 Years'
  },
  {
    src: '/media/school-readiness/school-readiness-2.jpg',
    category: 'school-readiness',
    title: 'Teacher Guidance on Pencil Technique & Posture',
    caption: 'Teacher providing personalized support on hand positioning and pencil pressure, essential for smooth KG1/Year 1 transition.',
    alt: 'Teacher assisting preschooler with pencil grip during school readiness class',
    badge: 'Fine Motor Prep',
    ageGroup: '3.5 – 4.5 Years'
  },
  {
    src: '/media/school-readiness/school-readiness-3.jpg',
    category: 'school-readiness',
    title: 'Coloring Within Borders & Hand-Eye Coordination',
    caption: 'Preschool girl practicing careful pencil control to color inside the lines, building visual-motor integration for writing.',
    alt: 'Preschool girl practicing boundary coloring with yellow pencil',
    badge: 'Visual-Motor Control',
    ageGroup: '3.5 – 4.5 Years'
  },
  {
    src: '/media/school-readiness/school-readiness-4.jpg',
    category: 'school-readiness',
    title: 'Peer Collaboration at Shared Learning Tables',
    caption: 'Children sitting respectfully side-by-side sharing coloring materials, building cooperative social stamina for big school.',
    alt: 'Preschool peers working together at shared coloring table',
    badge: 'Social Readiness',
    ageGroup: '3.5 – 4.5 Years'
  },
  {
    src: '/media/school-readiness/school-readiness-5.jpg',
    category: 'school-readiness',
    title: 'Sustained Attention & Task Completion',
    caption: 'Developing academic endurance and patient concentration by focusing on completing their artwork from start to finish.',
    alt: 'Child showing sustained focus during tabletop activity',
    badge: 'Task Concentration',
    ageGroup: '3.5 – 4.5 Years'
  },
  {
    src: '/media/school-readiness/school-readiness-6.jpg',
    category: 'school-readiness',
    title: 'Independent Creative Confidence',
    caption: 'Two young learners demonstrating independent work habits, selecting their colored pencils and working without disruption.',
    alt: 'Preschool girls working independently with colored pencils',
    badge: 'Academic Autonomy',
    ageGroup: '3.5 – 4.5 Years'
  },
  {
    src: '/media/school-readiness/school-readiness-7.jpg',
    category: 'school-readiness',
    title: 'Mature Tripod Grip & Detail Precision',
    caption: 'Close-up showing proper tripod pencil hold and dedicated focus, vital foundation skills for early primary writing success.',
    alt: 'Close-up of preschooler using tripod pencil grip during class',
    badge: 'Pencil Mastery',
    ageGroup: '3.5 – 4.5 Years'
  },
  {
    src: '/media/school-readiness/school-readiness-8.jpg',
    category: 'school-readiness',
    title: 'Proud Achievement & Finished Artwork',
    caption: 'Joy of accomplishment as children admire their colored duckling pictures, building genuine pride in their learning efforts.',
    alt: 'Preschool girl completing her duckling coloring artwork',
    badge: 'Learning Pride',
    ageGroup: '3.5 – 4.5 Years'
  },

  // 5. Arabic Immersion
  {
    src: '/media/arabic/arabic-1.jpg',
    category: 'arabic',
    title: 'Arabic Alphabet Flower Paddle: Letter Baa (ب)',
    caption: 'Preschool girl proudly showing her matched Arabic letter Baa (ب) flower paddle and labeled cup, making early phonics fun and interactive.',
    alt: 'Child holding Arabic letter Baa flower paddle and cup at JLH Nursery',
    badge: 'Arabic Phonics',
    ageGroup: '2.5 – 4.5 Years'
  },
  {
    src: '/media/arabic/arabic-2.jpg',
    category: 'arabic',
    title: 'Arabic Letter Taa (ت) Recognition & Sound',
    caption: 'Hands-on alphabet matching where children associate Arabic letter shapes with their phonological sounds through tactile paddle props.',
    alt: 'Preschool girl displaying Arabic letter Taa paddle and cup',
    badge: 'Tactile Arabic',
    ageGroup: '2.5 – 4.5 Years'
  },
  {
    src: '/media/arabic/arabic-3.jpg',
    category: 'arabic',
    title: 'Sorting Arabic Alphabet Sticks into Cups',
    caption: 'Active sorting game placing letter sticks (Alif أ, Baa ب, Taa ت, Jeem ج, Haa ح) into corresponding cups to embed alphabet mastery.',
    alt: 'Child sorting Arabic letter flower sticks into matching cups',
    badge: 'Interactive Arabic',
    ageGroup: '2.5 – 4.5 Years'
  },
  {
    src: '/media/arabic/arabic-4.jpg',
    category: 'arabic',
    title: 'Comprehensive Arabic Letter Station Tabletop',
    caption: 'Color-coded Arabic learning station set up with letter paddles and sorting cups, nurturing love for the Arabic language.',
    alt: 'Tabletop Arabic alphabet matching station at Just Like Home Nursery',
    badge: 'Language Station',
    ageGroup: '2.5 – 4.5 Years'
  },
  {
    src: '/media/arabic/arabic-5.jpg',
    category: 'arabic',
    title: 'Right-to-Left Arabic Letter Tracing Worksheets',
    caption: 'Preschool child tracing dotted Arabic letterforms (Alif أ and Baa ب) with pencil, learning right-to-left stroke mechanics.',
    alt: 'Preschooler tracing Arabic letters on worksheet with pencil',
    badge: 'Arabic Handwriting',
    ageGroup: '3 – 4.5 Years'
  },
  {
    src: '/media/arabic/arabic-6.jpg',
    category: 'arabic',
    title: 'Arabic Letter Formation & Fine-Motor Control',
    caption: 'Practicing smooth Arabic curved strokes and dot placements on daily handwriting sheets with educator support.',
    alt: 'Child practicing Arabic letter strokes and dot placements',
    badge: 'Arabic Writing',
    ageGroup: '3 – 4.5 Years'
  },
  {
    src: '/media/arabic/arabic-horizontal.jpg',
    category: 'arabic',
    title: 'Proud Arabic Learner with Letter Baa (ب) Match',
    caption: 'Celebrating personal milestones as children identify and pronounce foundational Arabic letters with joyful confidence.',
    alt: 'Preschool girl smiling with Arabic letter Baa matching paddle and cup',
    badge: 'Arabic Milestones',
    ageGroup: '2.5 – 4.5 Years'
  },

  // 6. Art & Atelier
  {
    src: '/media/art-creativity/art-1.jpg',
    category: 'art-creativity',
    title: 'Guided Tabletop Coloring Atelier',
    caption: 'Educator introducing cheerful animal illustration coloring pages to preschoolers at colorful activity tables.',
    alt: 'Educator introducing animal coloring sheets to children at art table',
    badge: 'Art Atelier',
    ageGroup: '2 – 4.5 Years'
  },
  {
    src: '/media/art-creativity/art-2.jpg',
    category: 'art-creativity',
    title: 'Teacher Guidance in Color Selection',
    caption: 'Teacher supporting children as they choose colored pencils and learn gentle pencil control and shading techniques.',
    alt: 'Teacher guiding preschooler choosing colored pencils',
    badge: 'Guided Art',
    ageGroup: '2 – 4.5 Years'
  },
  {
    src: '/media/art-creativity/art-3.jpg',
    category: 'art-creativity',
    title: 'Baby Duckling Pencil Coloring',
    caption: 'Young child carefully filling in a cheerful duckling illustration using bright yellow colored pencils.',
    alt: 'Young child coloring duckling illustration with yellow pencil',
    badge: 'Coloring Fun',
    ageGroup: '2 – 4.5 Years'
  },
  {
    src: '/media/art-creativity/art-4.jpg',
    category: 'art-creativity',
    title: 'Focused Coloring & Creative Expression',
    caption: 'Little artist holding her pencil with concentration, practicing neat strokes and creative coloring.',
    alt: 'Preschool girl focused on coloring baby chick illustration',
    badge: 'Creative Focus',
    ageGroup: '2 – 4.5 Years'
  },
  {
    src: '/media/art-creativity/art-5.jpg',
    category: 'art-creativity',
    title: 'Fine-Motor Shading & Wrist Movement',
    caption: 'Preschooler practicing smooth back-and-forth pencil shading, strengthening wrist and finger muscles.',
    alt: 'Preschooler practicing pencil shading on coloring page',
    badge: 'Fine Motor Art',
    ageGroup: '2 – 4.5 Years'
  },
  {
    src: '/media/art-creativity/art-6.jpg',
    category: 'art-creativity',
    title: 'Side-by-Side Creative Coloring Fun',
    caption: 'Friends coloring their baby chick pictures together, sharing colors and enjoying creative peer time.',
    alt: 'Friends coloring baby chick pictures together at nursery',
    badge: 'Peer Art',
    ageGroup: '2 – 4.5 Years'
  },
  {
    src: '/media/art-creativity/art-7.jpg',
    category: 'art-creativity',
    title: 'Quiet Focus & Daily Drawing',
    caption: 'Quiet focus during daily drawing and pencil work.',
    alt: 'Quiet focus during daily drawing and pencil work at Just Like Home Nursery',
    badge: 'Drawing & Pencil Work',
    ageGroup: '2 – 4.5 Years'
  },
  {
    src: '/media/art-creativity/art-8.jpg',
    category: 'art-creativity',
    title: 'Adding Colorful Touches to Artwork',
    caption: 'Child selecting vibrant orange and yellow pencils to bring the baby duckling character to life.',
    alt: 'Child adding bright color details to duckling drawing',
    badge: 'Color Expression',
    ageGroup: '2 – 4.5 Years'
  },

  // 7. Numeracy & STEM
  {
    src: '/media/early-numeracy/numeracy-1.jpg',
    category: 'early-numeracy',
    title: 'Sensory Number Hunt Tuff Tray Activity',
    caption: 'Teacher in hijab and blazer guiding children as they explore red sensory rice with magnifying glasses to hunt for numbers.',
    alt: 'Teacher guiding sensory number hunt tuff tray activity at JLH Nursery',
    badge: 'Sensory Math',
    ageGroup: '2 – 3.5 Years'
  },
  {
    src: '/media/early-numeracy/numeracy-2.jpg',
    category: 'early-numeracy',
    title: 'Digging for Digits: Tactile Math Discovery',
    caption: 'Children sifting through colored rice grains to uncover hidden number cards, combining sensory tactile play with early math.',
    alt: 'Toddlers searching for number cards in sensory rice tray',
    badge: 'Tactile Math',
    ageGroup: '2 – 3.5 Years'
  },
  {
    src: '/media/early-numeracy/numeracy-3.jpg',
    category: 'early-numeracy',
    title: 'Magnifying Glass Inspection & Number Shapes',
    caption: 'Using child-safe magnifying glasses to inspect details and identify numbers hidden beneath the sensory rice.',
    alt: 'Child inspecting sensory rice with magnifying glass',
    badge: 'STEM Discovery',
    ageGroup: '2 – 3.5 Years'
  },
  {
    src: '/media/early-numeracy/numeracy-4.jpg',
    category: 'early-numeracy',
    title: 'Teacher Demonstrating Numeral Cards',
    caption: 'Educator holding up discovered numeral cards, asking children to count along and name each number aloud.',
    alt: 'Educator showing number cards to toddlers in circle',
    badge: 'Numeral Naming',
    ageGroup: '2 – 3.5 Years'
  },
  {
    src: '/media/early-numeracy/numeracy-5.jpg',
    category: 'early-numeracy',
    title: 'Number Hunt Board Completion',
    caption: 'Collaboratively placing all recovered number cards onto the master sheet, celebrating a successful group math hunt.',
    alt: 'Children completing number hunt activity sheet together',
    badge: 'Team Discovery',
    ageGroup: '2 – 3.5 Years'
  },
  {
    src: '/media/early-numeracy/numeracy-6.jpg',
    category: 'early-numeracy',
    title: 'Preschool Numeracy: Frog & Flower Counting',
    caption: 'Tracing numbers in math workbooks while counting illustrated frogs and flowers to link numbers with physical quantities.',
    alt: 'Preschool math workbook counting frogs and flowers',
    badge: 'Counting Worksheets',
    ageGroup: '3 – 4 Years'
  },
  {
    src: '/media/early-numeracy/numeracy-7.jpg',
    category: 'early-numeracy',
    title: 'Dotted Number Tracing: Numbers 1 to 5',
    caption: 'Guiding pencil along dotted lines to write numbers 1 through 5, reinforcing correct digit strokes and number sequence.',
    alt: 'Child tracing dotted numbers 1 through 5 in workbook',
    badge: 'Number Formation',
    ageGroup: '3 – 4 Years'
  },
  {
    src: '/media/early-numeracy/numeracy-8.jpg',
    category: 'early-numeracy',
    title: 'Counting 5 Flowers & Tracing Number 5',
    caption: 'Child counting five flowers with a pink pencil and completing the row of traced number 5s on her workbook page.',
    alt: 'Child counting flowers and tracing number 5 with pencil',
    badge: 'Quantity Association',
    ageGroup: '3 – 4 Years'
  },
  {
    src: '/media/early-numeracy/numeracy-9.jpg',
    category: 'early-numeracy',
    title: 'Bottle Cap Counting on Numbered Paper Plates',
    caption: 'Hands-on math matching 1 to 5 bottle caps onto paper plates (1 green cap for 1, 2 for 2, 3 for 3) next to purple kinetic sand.',
    alt: 'Child matching bottle caps to numbered paper plates at nursery',
    badge: 'Concrete Math',
    ageGroup: '2.5 – 4 Years'
  },
  {
    src: '/media/early-numeracy/numeracy-10.jpg',
    category: 'early-numeracy',
    title: 'Plastic Numeral Tiles & Kinetic Sand Play',
    caption: 'Placing colorful numeral tiles onto plates 1 to 5, combining tactile kinetic sand exploration with quantity sorting.',
    alt: 'Child placing plastic numeral tiles on numbered plates',
    badge: 'Kinetic Math',
    ageGroup: '2.5 – 4 Years'
  },

  // 8. Phonics & Literacy
  {
    src: '/media/phonics-literacy/phonics-1.jpg',
    category: 'phonics-literacy',
    title: 'Alphabet Letter Formation: Letters K, L, M, N',
    caption: 'Preschooler practicing guided pencil tracing for letters K, L, M, and N in our structured early phonics workbook.',
    alt: 'Preschooler tracing letters K L M N in phonics workbook',
    badge: 'Letter Formation',
    ageGroup: '3 – 4.5 Years'
  },
  {
    src: '/media/phonics-literacy/phonics-2.jpg',
    category: 'phonics-literacy',
    title: 'Sound Association: Lion, Mouse & Nose',
    caption: 'Connecting letter shapes to everyday vocabulary: L for lion, M for mouse, and N for nose with colorful illustrations.',
    alt: 'Early phonics workbook connecting letters with animals and objects',
    badge: 'Phonics Sounds',
    ageGroup: '3 – 4.5 Years'
  },
  {
    src: '/media/phonics-literacy/phonics-3.jpg',
    category: 'phonics-literacy',
    title: 'Pencil Grip & Early Handwriting Fluency',
    caption: 'Developing proper pencil grip and steady hand-eye control while tracing upper and lowercase letter pairs.',
    alt: 'Young girl tracing alphabet letters in preschool workbook',
    badge: 'Pencil Grip',
    ageGroup: '3 – 4.5 Years'
  },
  {
    src: '/media/phonics-literacy/phonics-4.jpg',
    category: 'phonics-literacy',
    title: 'Dedicated Tabletop Literacy Practice',
    caption: 'Focused individual handwriting time where children build stamina and confidence writing letters across lined grids.',
    alt: 'Child focusing on letter tracing practice in workbook',
    badge: 'Handwriting Skills',
    ageGroup: '3 – 4.5 Years'
  },
  {
    src: '/media/phonics-literacy/phonics-5.jpg',
    category: 'phonics-literacy',
    title: 'Alphabet Sequencing & Mark Making',
    caption: 'Tracing repetitive dotted lines for letterforms, establishing strong muscle memory for independent alphabet writing.',
    alt: 'Preschooler practicing repetitive alphabet tracing strokes',
    badge: 'Alphabet Writing',
    ageGroup: '3 – 4.5 Years'
  },
  {
    src: '/media/phonics-literacy/phonics-6.jpg',
    category: 'phonics-literacy',
    title: 'N is for Nose Phonics Craft & Sound Play',
    caption: 'Children proudly holding handcrafted N is for Nose paper masks over their faces, reinforcing phonemic letter sounds through playful craft.',
    alt: 'Two preschool children holding N is for Nose paper craft masks',
    badge: 'Phonics Craft',
    ageGroup: '3 – 4.5 Years'
  },
  {
    src: '/media/phonics-literacy/phonics-horizontal.jpg',
    category: 'phonics-literacy',
    title: 'Alphabet Phonics Workbook Studio',
    caption: 'Wide view of early phonics practice connecting uppercase and lowercase letter strokes with illustrative visual vocabulary.',
    alt: 'Child working on uppercase and lowercase letter tracing workbook',
    badge: 'Literacy Foundation',
    ageGroup: '3 – 4.5 Years'
  },

  // 9. Physical & Outdoor Play
  {
    src: '/media/physical-play/physical-1.jpg',
    category: 'physical-play',
    title: 'Indoor Soft-Play Cottage & Slide Gym',
    caption: 'Children enjoying safe indoor climbing and sliding on colorful cushioned puzzle mat flooring inside our air-conditioned play lab.',
    alt: 'Indoor soft-play cottage slide and foam puzzle mat flooring',
    badge: 'Indoor Soft-Play',
    ageGroup: '2 – 4 Years'
  },
  {
    src: '/media/physical-play/physical-2.jpg',
    category: 'physical-play',
    title: 'Indoor Playhouse Climbing & Peekaboo',
    caption: 'Preschoolers climbing the cottage playhouse steps and peeking out with cheerful smiles in the indoor gross-motor room.',
    alt: 'Children climbing indoor playhouse steps and smiling',
    badge: 'Climbing Agility',
    ageGroup: '2 – 4 Years'
  },
  {
    src: '/media/physical-play/physical-3.jpg',
    category: 'physical-play',
    title: 'Rocking Seesaw Fun in Indoor Play Lab',
    caption: 'Two toddlers rocking together on the yellow caterpillar seesaw, building cooperative rhythm and core body balance.',
    alt: 'Two toddlers playing on yellow rocking seesaw caterpillar',
    badge: 'Balance & Rhythm',
    ageGroup: '2 – 3.5 Years'
  },
  {
    src: '/media/physical-play/physical-4.jpg',
    category: 'physical-play',
    title: 'Indoor Slide & Soft-Floor Play',
    caption: 'Active slide play, climbing frames, and soft-floor fun indoors.',
    alt: 'Active slide play, climbing frames, and soft-floor fun indoors at Just Like Home Nursery',
    badge: 'Indoor Soft-Play',
    ageGroup: '2 – 4 Years'
  },
  {
    src: '/media/physical-play/physical-5.jpg',
    category: 'physical-play',
    title: 'Outdoor Turf Smiles & Nursery Friendships',
    caption: 'Four preschool friends in smart uniform posing together on our shaded outdoor green lawn under full UV sun protection.',
    alt: 'Preschool friends posing together on outdoor artificial turf',
    badge: 'Outdoor Campus',
    ageGroup: '2.5 – 4.5 Years'
  },
  {
    src: '/media/physical-play/physical-6.jpg',
    category: 'physical-play',
    title: 'Outdoor Red Spiral Tube Slide Adventure',
    caption: 'Smiling toddler gliding down our outdoor spiral tube slide onto soft green turf under high-grade UV sun canopies.',
    alt: 'Smiling child sliding down outdoor red spiral tube slide',
    badge: 'Slide Adventures',
    ageGroup: '2 – 4.5 Years'
  },
  {
    src: '/media/physical-play/physical-7.jpg',
    category: 'physical-play',
    title: 'Garden Swings & Rainbow Picket Fence',
    caption: 'Two smiling preschool girls enjoying the garden swings beside our cheerful multi-colored rainbow boundary fence.',
    alt: 'Preschool girls smiling beside outdoor swings and rainbow fence',
    badge: 'Garden Swings',
    ageGroup: '2 – 4.5 Years'
  },
  {
    src: '/media/physical-play/physical-8.jpg',
    category: 'physical-play',
    title: 'Outdoor Playhouse Lookout & Joyful Waves',
    caption: 'Children peeking out and waving happily from the outdoor garden climbing playhouse topped with sun and flower ornaments.',
    alt: 'Children waving from window of outdoor playground playhouse',
    badge: 'Playhouse Lookout',
    ageGroup: '2.5 – 4.5 Years'
  },

  // 10. Life Skills & Independence
  {
    src: '/media/life-skills/life-skills-1.jpg',
    category: 'life-skills',
    title: 'Hands-On Sensory Tray Exploration',
    caption: 'Hands-on sensory tray exploration, scooping, and pouring.',
    alt: 'Hands-on sensory tray exploration, scooping, and pouring at Just Like Home Nursery',
    badge: 'Sensory Exploration',
    ageGroup: '2 – 4 Years'
  },
  {
    src: '/media/life-skills/life-skills-2.jpg',
    category: 'life-skills',
    title: 'Guided Tactile Sensory Play',
    caption: 'Guided tactile play around the sensory table.',
    alt: 'Guided tactile play around the sensory table at Just Like Home Nursery',
    badge: 'Sensory Play',
    ageGroup: '2 – 4 Years'
  },
  {
    src: '/media/life-skills/life-skills-3.jpg',
    category: 'life-skills',
    title: 'Sunny Outdoor Courtyard Play',
    caption: 'Sunny outdoor courtyard play and happy milestones.',
    alt: 'Sunny outdoor courtyard play and happy milestones at Just Like Home Nursery',
    badge: 'Outdoor Milestones',
    ageGroup: '2.5 – 4.5 Years'
  },
  {
    src: '/media/life-skills/life-skills-4.jpg',
    category: 'life-skills',
    title: 'Gated Courtyard Outdoor Play',
    caption: 'Bright, safe outdoor play in our gated courtyard.',
    alt: 'Bright, safe outdoor play in our gated courtyard at Just Like Home Nursery',
    badge: 'Gated Courtyard',
    ageGroup: '2.5 – 4.5 Years'
  },

  // 11. Music, Rhymes & Stories
  {
    src: '/media/music-stories/music-1.jpg',
    category: 'music-stories',
    title: 'Storytime Circle: The Very Hungry Caterpillar',
    caption: 'Educator reading The Very Hungry Caterpillar to toddlers seated on the story mat beneath our Arabic alphabet wall chart.',
    alt: 'Teacher reading The Very Hungry Caterpillar during circle storytime',
    badge: 'Storytime Circle',
    ageGroup: 'All Ages'
  },
  {
    src: '/media/music-stories/music-horizontal.jpg',
    category: 'music-stories',
    title: 'Interactive Storytelling & Picture Discussion',
    caption: 'Children captivated by colorful story character cards, discussing healthy fruits, counting foods, and learning story vocabulary.',
    alt: 'Interactive storytelling circle with children and educator at JLH Nursery',
    badge: 'Interactive Stories',
    ageGroup: 'All Ages'
  },

  // 12. Daycare & Care
  {
    src: '/media/daycare/daycare-1.jpg',
    category: 'daycare',
    title: 'Loving Infant Care & Floor Play Sanctuary',
    caption: 'Trained caregiver providing tender 1-on-1 attention, sensory ball play, and warm nurturing in our dedicated baby care room.',
    alt: 'Caregiver gently interacting with infant in nursery baby room',
    badge: 'Infant Care',
    ageGroup: '45 Days – 2 Years'
  },
  {
    src: '/media/daycare/daycare-2.jpg',
    category: 'daycare',
    title: 'Soft Floor Play & Block Exploration',
    caption: 'Safe floor play with non-toxic soft blocks and toys on cushioned nursery mats, supervised by caring full-time practitioners.',
    alt: 'Toddler playing with soft blocks under caregiver supervision',
    badge: 'Nurturing Care',
    ageGroup: '45 Days – 2 Years'
  },
  {
    src: '/media/daycare/daycare-3.jpg',
    category: 'daycare',
    title: 'Quiet Snooze Suite with Sanitized Baby Cots',
    caption: 'Temperature-controlled sleep sanctuary equipped with private white wooden cots, fresh linens, and continuous caregiver monitoring.',
    alt: 'Quiet snooze room with white wooden baby cots at Just Like Home Nursery',
    badge: 'Rest Sanctuary',
    ageGroup: '45 Days – 3 Years'
  },

  // 13. Inclusive SEND Support
  {
    src: '/media/send/send-1.jpg',
    category: 'send',
    title: 'Individualized 1-on-1 Sensory Learning Support',
    caption: 'Dedicated educator providing gentle, individualized scaffolding with tactile sensory bins, colorful pop-its, and stacking manipulatives.',
    alt: 'Teacher providing 1-on-1 inclusive learning support with sensory bin',
    badge: 'Inclusive Support',
    ageGroup: 'All Ages'
  },
  {
    src: '/media/send/send-2.jpg',
    category: 'send',
    title: 'Magnetic Fishing & Fine-Motor Skill Development',
    caption: 'Interactive magnetic fishing activity designed to build focused concentration, hand-eye tracking, and motor precision in a calm setting.',
    alt: 'Educator guiding child through magnetic fishing fine-motor game',
    badge: 'Sensory Guidance',
    ageGroup: 'All Ages'
  }
];

export default function GalleryPage({ onBookVisitClick }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useSEO({
    title: "Campus Photo Gallery | Just Like Home Nursery Ajman",
    description: "Explore genuine photos of our 55,000 sq. ft. campus, classrooms, shaded play parks, sensory rooms, and daily EYFS activities in Al Rashidiya 2, Ajman.",
    path: "/gallery",
    breadcrumbs: [{ name: "Photo Gallery", path: "/gallery" }]
  });

  const filteredImages = activeFilter === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeFilter);

  const openLightbox = (index) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1));
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0));
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredImages.length]);

  const selectedItem = selectedImageIndex !== null ? filteredImages[selectedImageIndex] : null;

  return (
    <div className="gallery-page" style={{ backgroundColor: '#FFFDF7', color: '#2d1f22', minHeight: '100vh' }}>

      {/* 1. LUXURY HERO BANNER */}
      <LuxuryPageHero
        title="A Little Look Inside Our Nursery"
        description="Explore authentic moments from our 55,000 sq. ft. standalone villa campus in Ajman—from sunlit British EYFS classrooms and soft-play labs to shaded outdoor parks and sensory ateliers."
        image="/images/outdoor.jpg"
        imageAlt="Gallery of Just Like Home Nursery campus in Ajman"
        imageBadgeTitle="55,000 Sq. Ft. Standalone Campus"
        imageBadgeSubtitle="Villa No. 47, Al Rashidiya 2"
        primaryCtaText="Book a Campus Tour"
        onPrimaryClick={onBookVisitClick}
        primaryLink={!onBookVisitClick ? "/contact" : undefined}
        secondaryCtaText="Get Location & Directions"
        secondaryLink="/contact"
        whatsappText="Hello Just Like Home Nursery, I viewed your campus gallery online and would love to book a tour of your nursery."
      />

      {/* 2. GALLERY INTRO CARDS & PHOTO GRID */}
      <section
        style={{
          padding: 'clamp(56px, 6vw, 84px) 20px',
          backgroundColor: '#fbfaf7',
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(225, 29, 72, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(5, 150, 105, 0.04) 0%, transparent 40%)',
          borderBottom: '1px solid #f1f5f9',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

          {/* 3 Overview Highlights */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
              marginBottom: '42px'
            }}
          >
            <RevealOnScroll>
              <div
                className="luxury-creative-card"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  borderRadius: '1.75rem',
                  padding: '2rem 1.8rem',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                  height: '100%',
                  boxSizing: 'border-box',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #721024, #F15A29)' }} />
                <div
                  className="luxury-icon-box luxury-icon-burgundy"
                  style={{ width: '54px', height: '54px', marginBottom: '16px' }}
                >
                  <Building2 size={24} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                    fontSize: '20px',
                    fontWeight: '850',
                    color: '#721024',
                    marginBottom: '8px'
                  }}
                >
                  Our Campus Spaces
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#475569', margin: 0 }}>
                  A safe, spacious 55,000 sq. ft. standalone villa featuring sunlit learning classrooms, baby quiet suite, certified clinic, and shaded outdoor gardens.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={50}>
              <div
                className="luxury-creative-card"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  borderRadius: '1.75rem',
                  padding: '2rem 1.8rem',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                  height: '100%',
                  boxSizing: 'border-box',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #d97706, #f59e0b)' }} />
                <div
                  className="luxury-icon-box luxury-icon-gold"
                  style={{ width: '54px', height: '54px', marginBottom: '16px' }}
                >
                  <Sparkles size={24} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                    fontSize: '20px',
                    fontWeight: '850',
                    color: '#721024',
                    marginBottom: '8px'
                  }}
                >
                  Learning in Action
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#475569', margin: 0 }}>
                  Witness purposeful play: Jolly Phonics, early numeracy, hands-on STEM discovery, Arabic immersion, and multi-sensory ateliers in motion.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div
                className="luxury-creative-card"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  borderRadius: '1.75rem',
                  padding: '2rem 1.8rem',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 12px 34px rgba(74, 14, 26, 0.05), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                  height: '100%',
                  boxSizing: 'border-box',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #e11d48, #fb7185)' }} />
                <div
                  className="luxury-icon-box luxury-icon-coral"
                  style={{ width: '54px', height: '54px', marginBottom: '16px' }}
                >
                  <Heart size={24} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                    fontSize: '20px',
                    fontWeight: '850',
                    color: '#721024',
                    marginBottom: '8px'
                  }}
                >
                  Nurturing & Smiles
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#475569', margin: 0 }}>
                  Authentic smiles, caring educator guidance, friendship milestones, and cultural celebrations where every little heart feels safe at home.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          {/* Interactive Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: '38px'
            }}
          >
            {FILTER_CONFIG.map((f) => {
              const isActive = activeFilter === f.id;
              const count = f.id === 'all'
                ? GALLERY_IMAGES.length
                : GALLERY_IMAGES.filter(img => img.category === f.id).length;

              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  style={{
                    padding: '9px 18px',
                    borderRadius: '999px',
                    fontSize: '13.5px',
                    fontWeight: '750',
                    cursor: 'pointer',
                    transition: 'all 0.22s ease',
                    border: isActive ? '1.5px solid #721024' : '1.5px solid rgba(114, 16, 36, 0.12)',
                    backgroundColor: isActive ? '#721024' : '#ffffff',
                    color: isActive ? '#FAF5EB' : '#475569',
                    boxShadow: isActive ? '0 6px 18px rgba(114, 16, 36, 0.22)' : '0 2px 6px rgba(0,0,0,0.03)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = '#721024';
                      e.currentTarget.style.color = '#721024';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = 'rgba(114, 16, 36, 0.12)';
                      e.currentTarget.style.color = '#475569';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  <span>{f.label}</span>
                  <span
                    style={{
                      fontSize: '11px',
                      padding: '2px 7px',
                      borderRadius: '999px',
                      backgroundColor: isActive ? 'rgba(255,255,255,0.22)' : 'rgba(114, 16, 36, 0.08)',
                      color: isActive ? '#ffffff' : '#721024'
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Image Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {filteredImages.map((img, index) => (
              <div
                key={`${img.src}-${index}`}
                onClick={() => openLightbox(index)}
                style={{
                  position: 'relative',
                  borderRadius: '1.75rem',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  aspectRatio: '4 / 3',
                  backgroundColor: '#f1f5f9',
                  boxShadow: '0 8px 24px rgba(74, 14, 26, 0.06)',
                  border: '3px solid #ffffff',
                  transition: 'all 0.32s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="group"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px) scale(1.015)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(114, 16, 36, 0.18)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(74, 14, 26, 0.06)';
                }}
              >
                {/* Background Image */}
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease'
                  }}
                  loading="lazy"
                />

                {/* Top Badge: Category & Age Tag */}
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    zIndex: 2
                  }}
                >
                  <span
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.92)',
                      backdropFilter: 'blur(8px)',
                      color: '#721024',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      fontSize: '11.5px',
                      fontWeight: '800',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
                    }}
                  >
                    {img.badge || 'Early Learning'}
                  </span>
                  {img.ageGroup && (
                    <span
                      style={{
                        backgroundColor: 'rgba(114, 16, 36, 0.88)',
                        backdropFilter: 'blur(8px)',
                        color: '#ffffff',
                        padding: '4px 9px',
                        borderRadius: '999px',
                        fontSize: '11px',
                        fontWeight: '700'
                      }}
                    >
                      {img.ageGroup}
                    </span>
                  )}
                </div>

                {/* Zoom Icon Indicator */}
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 0, 0, 0.45)',
                    backdropFilter: 'blur(6px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    zIndex: 2
                  }}
                >
                  <ZoomIn size={16} />
                </div>

                {/* Bottom Content Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(114, 16, 36, 0.94) 0%, rgba(114, 16, 36, 0.55) 40%, transparent 72%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '20px 22px',
                    color: '#ffffff',
                    zIndex: 1
                  }}
                >
                  <h4
                    style={{
                      margin: '0 0 6px 0',
                      fontSize: '16px',
                      fontWeight: '800',
                      lineHeight: 1.3,
                      fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                      textShadow: '0 2px 6px rgba(0,0,0,0.4)'
                    }}
                  >
                    {img.title || img.caption}
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '13px',
                      fontWeight: '500',
                      lineHeight: 1.5,
                      color: 'rgba(255, 255, 255, 0.92)',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. CAMPUS VERIFICATION & PRIVACY NOTE */}
      <section
        style={{
          padding: 'clamp(44px, 5vw, 64px) 20px',
          backgroundColor: '#FFFDF9',
          backgroundImage: 'radial-gradient(circle at 85% 15%, rgba(241, 90, 41, 0.04) 0%, transparent 45%), radial-gradient(circle at 15% 85%, rgba(114, 16, 36, 0.03) 0%, transparent 45%)'
        }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <RevealOnScroll>
            <div
              className="luxury-creative-card"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                padding: '24px 30px',
                borderRadius: '1.75rem',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1.5px solid rgba(255, 255, 255, 0.95)',
                boxShadow: '0 12px 34px rgba(74, 14, 26, 0.04), 0 2px 10px rgba(255, 255, 255, 0.85) inset',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #721024, #F15A29)' }} />

              <div
                className="luxury-icon-box luxury-icon-burgundy"
                style={{ width: '48px', height: '48px', flexShrink: 0 }}
              >
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4
                  style={{
                    fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                    fontSize: '17px',
                    fontWeight: '850',
                    color: '#721024',
                    margin: '0 0 6px 0'
                  }}
                >
                  Authentic Campus Photography & Child Privacy Standards
                </h4>
                <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: '#475569', margin: 0 }}>
                  All photographs reflect daily life at Just Like Home Nursery in Al Rashidiya 2, Ajman. We follow rigorous child safeguarding and publication consent protocols under UAE Ministry guidelines. To tour our full campus in person, please arrange a scheduled family visit.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 4. CLOSING CTA BANNER */}
      <LuxuryClosingCta
        badge="EXPERIENCE JUST LIKE HOME"
        title="Come See Why It Feels Just Like Home"
        subtitle="Photographs capture moments, but experiencing the warmth, scent, laughter, and loving care in person will assure your heart."
        primaryText="BOOK A CAMPUS TOUR"
        onPrimaryClick={onBookVisitClick}
        primaryLink={!onBookVisitClick ? "/contact" : undefined}
        secondaryText="CONTACT & DIRECTIONS"
        secondaryLink="/contact"
        tagline="Where Little Hearts Feel at Home."
      />

      {/* 5. ENHANCED LUXURY LIGHTBOX MODAL */}
      {selectedItem && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(15, 2, 6, 0.94)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              color: '#ffffff',
              backgroundColor: 'rgba(255,255,255,0.18)',
              border: 'none',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'background-color 0.2s ease'
            }}
            aria-label="Close"
          >
            <X size={24} />
          </button>

          {/* Left Arrow Navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            style={{
              position: 'absolute',
              left: '20px',
              color: '#ffffff',
              backgroundColor: 'rgba(255,255,255,0.18)',
              border: 'none',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'background-color 0.2s ease'
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Right Arrow Navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            style={{
              position: 'absolute',
              right: '20px',
              color: '#ffffff',
              backgroundColor: 'rgba(255,255,255,0.18)',
              border: 'none',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'background-color 0.2s ease'
            }}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

          {/* Lightbox Content Card */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '940px',
              width: '100%',
              maxHeight: '90vh',
              backgroundColor: '#ffffff',
              borderRadius: '2rem',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Top Image Display */}
            <div
              style={{
                position: 'relative',
                backgroundColor: '#0a0a0a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                maxHeight: '62vh',
                overflow: 'hidden'
              }}
            >
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                style={{
                  width: '100%',
                  maxHeight: '62vh',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
              {/* Counter Pill */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '14px',
                  right: '16px',
                  backgroundColor: 'rgba(0,0,0,0.65)',
                  backdropFilter: 'blur(6px)',
                  color: '#ffffff',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  fontSize: '12px',
                  fontWeight: '700'
                }}
              >
                {selectedImageIndex + 1} of {filteredImages.length}
              </div>
            </div>

            {/* Bottom Details & Direct Conversion Actions */}
            <div
              style={{
                padding: '24px 28px',
                backgroundColor: '#ffffff'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  marginBottom: '10px',
                  flexWrap: 'wrap'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      backgroundColor: '#ffe4e6',
                      color: '#9f1239',
                      padding: '4px 12px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      fontWeight: '800'
                    }}
                  >
                    {selectedItem.badge || 'Campus Moment'}
                  </span>
                  {selectedItem.ageGroup && (
                    <span
                      style={{
                        backgroundColor: '#f1f5f9',
                        color: '#475569',
                        padding: '4px 10px',
                        borderRadius: '999px',
                        fontSize: '12px',
                        fontWeight: '700'
                      }}
                    >
                      Ages: {selectedItem.ageGroup}
                    </span>
                  )}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                    onClick={() => {
                      closeLightbox();
                      if (onBookVisitClick) onBookVisitClick();
                    }}
                    style={{
                      padding: '8px 18px',
                      borderRadius: '999px',
                      backgroundColor: '#721024',
                      color: '#ffffff',
                      fontSize: '13px',
                      fontWeight: '800',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Calendar size={14} />
                    <span>Book a Tour</span>
                  </button>

                  <a
                    href={`https://wa.me/971502005346?text=${encodeURIComponent(`Hello Just Like Home Nursery, I saw "${selectedItem.title}" in your gallery and would like to know more.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '8px 16px',
                      borderRadius: '999px',
                      backgroundColor: '#25D366',
                      color: '#ffffff',
                      fontSize: '13px',
                      fontWeight: '800',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
                  fontSize: '19px',
                  fontWeight: '850',
                  color: '#721024',
                  margin: '0 0 6px 0'
                }}
              >
                {selectedItem.title}
              </h3>
              <p
                style={{
                  fontSize: '14.5px',
                  lineHeight: 1.6,
                  color: '#475569',
                  margin: 0
                }}
              >
                {selectedItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
