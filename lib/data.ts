export const classes = [
  {
    id: "1",
    name: "Power Yoga",
    description:
      "Strengthen your body and calm your mind with our dynamic yoga sessions. Perfect for all fitness levels.",
    image: "/yoga-class-with-people-stretching.jpg",
    trainer: "Sarah Johnson",
    timing: "Mon, Wed, Fri - 6:00 AM",
    duration: "60 min",
    category: "yoga",
  },
  {
    id: "2",
    name: "Zumba Dance",
    description:
      "High-energy dance workout that combines Latin rhythms with easy-to-follow moves for maximum fun and calorie burn.",
    image: "/zumba-dance-fitness-class.jpg",
    trainer: "Maria Garcia",
    timing: "Tue, Thu - 7:00 PM",
    duration: "45 min",
    category: "zumba",
  },
  {
    id: "3",
    name: "Strength Training",
    description:
      "Build muscle, increase strength, and boost metabolism with our comprehensive weight training program.",
    image: "/strength-training-gym-weights.jpg",
    trainer: "Mike Thompson",
    timing: "Mon-Sat - 5:00 PM",
    duration: "75 min",
    category: "strength",
  },
  {
    id: "4",
    name: "Cardio Blast",
    description:
      "Intense cardiovascular workout designed to improve endurance, burn fat, and boost your energy levels.",
    image: "/cardio-workout-treadmill-running.jpg",
    trainer: "Jessica Lee",
    timing: "Daily - 8:00 AM",
    duration: "50 min",
    category: "cardio",
  },
  {
    id: "5",
    name: "HIIT Circuit",
    description:
      "High-Intensity Interval Training for maximum results in minimum time. Push your limits and see rapid transformation.",
    image: "/hiit-workout-circuit-training.jpg",
    trainer: "Chris Walker",
    timing: "Mon, Wed, Fri - 6:00 PM",
    duration: "40 min",
    category: "hiit",
  },
  {
    id: "6",
    name: "Boxing Fitness",
    description: "Learn boxing techniques while getting an incredible full-body workout. No experience necessary.",
    image: "/boxing-fitness-training-gym.jpg",
    trainer: "David Chen",
    timing: "Tue, Thu, Sat - 4:00 PM",
    duration: "60 min",
    category: "boxing",
  },
]

export const trainers = [
  {
    id: "1",
    name: "Mike Thompson",
    role: "Head Strength Coach",
    image: "/male-fitness-trainer-muscular-professional.jpg",
    experience: "12 years",
    specialization: "Strength & Conditioning",
    certifications: ["NSCA-CSCS", "ACE Personal Trainer", "CrossFit L3"],
    bio: "Former professional athlete with a passion for helping others achieve their strength goals. Specializes in progressive overload and functional fitness.",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: "2",
    name: "Sarah Johnson",
    role: "Yoga & Wellness Director",
    image: "/female-yoga-instructor-fitness-professional.jpg",
    experience: "10 years",
    specialization: "Yoga & Mindfulness",
    certifications: ["RYT-500", "Meditation Teacher", "Wellness Coach"],
    bio: "Certified yoga instructor with expertise in vinyasa and restorative yoga. Believes in the mind-body connection for holistic wellness.",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: "3",
    name: "Maria Garcia",
    role: "Group Fitness Lead",
    image: "/female-zumba-instructor-dance-fitness.jpg",
    experience: "8 years",
    specialization: "Dance & Aerobics",
    certifications: ["Zumba Instructor", "AFAA Group Fitness", "Les Mills"],
    bio: "Energetic instructor who brings the party to every class. Makes fitness fun and accessible for everyone.",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: "4",
    name: "Chris Walker",
    role: "HIIT & Performance Coach",
    image: "/male-hiit-trainer-athletic-professional.jpg",
    experience: "9 years",
    specialization: "HIIT & Athletic Performance",
    certifications: ["NASM-CPT", "TRX Trainer", "Kettlebell Specialist"],
    bio: "Specialized in high-intensity training and sports performance. Helps athletes and fitness enthusiasts reach peak performance.",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: "5",
    name: "Jessica Lee",
    role: "Cardio & Nutrition Coach",
    image: "/female-cardio-trainer-running-fitness.jpg",
    experience: "7 years",
    specialization: "Cardio & Weight Management",
    certifications: ["ACE Fitness", "Precision Nutrition L1", "Running Coach"],
    bio: "Combines cardio training with nutrition guidance for sustainable weight management and improved cardiovascular health.",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: "6",
    name: "David Chen",
    role: "Combat Sports Trainer",
    image: "/male-boxing-trainer-martial-arts-professional.jpg",
    experience: "15 years",
    specialization: "Boxing & MMA",
    certifications: ["USA Boxing Coach", "Muay Thai Kru", "BJJ Purple Belt"],
    bio: "Former competitive boxer now dedicated to teaching boxing fundamentals and combat fitness to all skill levels.",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
]

export const pricingPlans = [
  {
    id: "1",
    name: "Monthly",
    price: 49,
    period: "month",
    description: "Perfect for trying out our facilities",
    features: [
      "Full gym access",
      "Locker room access",
      "2 group classes per week",
      "Fitness assessment",
      "Mobile app access",
    ],
    popular: false,
  },
  {
    id: "2",
    name: "Quarterly",
    price: 129,
    period: "3 months",
    originalPrice: 147,
    description: "Most popular choice for committed members",
    features: [
      "Full gym access",
      "Locker room access",
      "Unlimited group classes",
      "1 personal training session",
      "Nutrition consultation",
      "Mobile app access",
      "Guest passes (2/month)",
    ],
    popular: true,
  },
  {
    id: "3",
    name: "Yearly",
    price: 449,
    period: "year",
    originalPrice: 588,
    description: "Best value for long-term commitment",
    features: [
      "Full gym access",
      "Locker room access",
      "Unlimited group classes",
      "4 personal training sessions",
      "Monthly nutrition check-ins",
      "Mobile app access",
      "Unlimited guest passes",
      "Free merchandise",
      "Priority class booking",
    ],
    popular: false,
  },
]

export const testimonials = [
  {
    id: "1",
    name: "Jennifer Martinez",
    role: "Software Engineer",
    image: "/professional-woman-headshot.png",
    content:
      "PowerFit completely transformed my fitness journey. The trainers are incredibly knowledgeable and the community is so supportive. I've lost 30 pounds and gained so much confidence!",
    rating: 5,
  },
  {
    id: "2",
    name: "Robert Kim",
    role: "Business Owner",
    image: "/man-professional-headshot-business.jpg",
    content:
      "As a busy entrepreneur, I needed a gym that fits my schedule. PowerFit's 24/7 access and variety of classes made it easy to stay consistent. Best investment in my health!",
    rating: 5,
  },
  {
    id: "3",
    name: "Amanda Foster",
    role: "Teacher",
    image: "/woman-teacher-professional.jpg",
    content:
      "The group classes are amazing! Maria's Zumba sessions are the highlight of my week. I've made so many friends here and actually look forward to working out now.",
    rating: 5,
  },
  {
    id: "4",
    name: "James Wilson",
    role: "Retired Veteran",
    image: "/man-veteran-mature-professional.jpg",
    content:
      "At 58, I was skeptical about joining a gym. But the trainers here adapted workouts to my needs perfectly. I'm in the best shape of my life thanks to PowerFit!",
    rating: 5,
  },
]

export const faqs = [
  {
    question: "What are your operating hours?",
    answer: "We're open 24/7 for members! Our staffed hours are Monday-Friday 6AM-10PM and Saturday-Sunday 8AM-8PM.",
  },
  {
    question: "Do you offer free trials?",
    answer:
      "Yes! We offer a complimentary 3-day trial pass for new members. This includes full gym access and one group class.",
  },
  {
    question: "Can I freeze my membership?",
    answer:
      "Yes, members can freeze their membership for up to 3 months per year for medical reasons or extended travel.",
  },
  {
    question: "What should I bring for my first visit?",
    answer:
      "Bring comfortable workout clothes, athletic shoes, a water bottle, and a towel. We provide lockers and showers.",
  },
  {
    question: "Do you have personal trainers?",
    answer:
      "We have certified personal trainers available for one-on-one sessions. Sessions can be purchased individually or in packages.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes, we have a large free parking lot available for all members, plus designated spots for accessible parking.",
  },
]
