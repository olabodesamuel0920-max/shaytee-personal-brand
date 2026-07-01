export interface BusinessInfo {
  id: string;
  name: string;
  subName?: string;
  description: string;
  longDescription: string;
  proof: {
    handle: string;
    followers: string;
    likes: string;
    location: string;
    additionalStats?: string;
  };
  offerings: string[];
  ctaText: string;
  ctaUrl: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  status: "completed" | "ongoing" | "concept";
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "treats" | "beauty" | "studio" | "events" | "lifestyle" | "founder";
  aspectRatio: "portrait" | "landscape" | "square";
  placeholderText: string;
  notes: string;
}

export interface ChecklistItem {
  id: string;
  label: string;
  category: string;
  description: string;
  status: "pending" | "approved";
}

export const founderData = {
  founder: {
    name: "Shaytee",
    title: "Founder & Creative Director",
    bioDraft: "Building a premier lifestyle brand in Akure by blending custom confectionery artistry with high-end beauty transformations. Driven by a passion for client styling, celebration, and premium guest experiences.",
    location: "Akure, Nigeria (FUTA South Gate / Atolagbe Complex)",
    tagline: "Building a lifestyle brand around sweet moments, beauty, confidence, and unforgettable experiences in Akure.",
    statusDisclaimer: "Concept demo pending owner confirmation.",
  },
  businesses: {
    treat: {
      id: "treats",
      name: "Shaytee’s Treat",
      subName: "Sweet Moments & Event Catering",
      description: "Akure’s sweet treat plug for ice cream, gourmet popcorn, custom treats, birthdays, hangouts, parties, and events.",
      longDescription: "A premium confectionery brand offering artisanal ice cream, custom popcorn blends, and sweet treats customized for Akure's events. Specializing in birthdays, get-togethers, and weddings, Shaytee’s Treat brings a sweet touch of celebration to every gathering.",
      proof: {
        handle: "@shaytee.s.treat",
        followers: "2.6K+",
        likes: "199.5K+",
        location: "FUTA Southgate / Atolagbe Shopping Complex, Akure",
        additionalStats: "100+ events catered"
      },
      offerings: [
        "Artisanal Ice Cream Bar",
        "Gourmet Popcorn Station",
        "Custom Candy & Sweet Boards",
        "Event Treat Buffets",
        "Birthday Party Catering",
        "Hangout Sweet Hampers"
      ],
      ctaText: "Explore Treat Brand",
      ctaUrl: "/brands#treats"
    } as BusinessInfo,
    beauty: {
      id: "beauty",
      name: "Shaytee Beauty Studio",
      subName: "Hair by Shaytee",
      description: "Luxury beauty studio offering professional hair styling, wigs, lash extensions, piercings, and premium pedicures.",
      longDescription: "A comprehensive feminine style experience specializing in customized wig installations, flawless lash artistry, professional piercings, and relaxing spa pedicures. Located around FUTA South Gate, we cultivate a space where clients feel pampered, confident, and beautiful.",
      proof: {
        handle: "@hairbyshaytee",
        followers: "1K+",
        likes: "36.9K+",
        location: "FUTA South Gate Area, Akure",
        additionalStats: "Premium Hair & Lash Tech"
      },
      offerings: [
        "Wig Styling & Custom Installations",
        "Professional Lash Artistry",
        "Feminine Piercings",
        "Spa Pedicure Treatments",
        "Custom Hair Coloring & Extensions",
        "Bridal Hair & Glam Packages"
      ],
      ctaText: "Explore Beauty Studio",
      ctaUrl: "/brands#beauty"
    } as BusinessInfo
  },
  experienceConcept: {
    title: "The Shaytee Experience",
    description: "One founder. Two lifestyle worlds. Sweet treats for celebrations and luxury beauty services for confident looks.",
    tagline: "Bridging the gap between flavor and fashion. Whether preparing for a birthday photoshoot, ordering premium cupcakes, or installing a flawless wig, Shaytee coordinates Akure’s premier lifestyle experience.",
    crossPromotions: [
      {
        title: "All-in-One Glam Day",
        description: "Book your luxury hair and lash appointment, and enjoy custom sweet treats served fresh during your session."
      },
      {
        title: "Event Celebration Package",
        description: "Get full event glam styling at Shaytee Beauty Studio and coordinate a custom popcorn or ice cream cart for your party guests."
      },
      {
        title: "Birthday & Photoshoot Styling",
        description: "Flawless aesthetics meet delicious treat boxes, ensuring your milestone moments look stunning and taste unforgettable."
      },
      {
        title: "Unified Luxury Lifestyle",
        description: "A singular standard of premium quality in customer service, styling detail, and sweet event catering."
      }
    ]
  },
  socialProof: [
    { value: "199.5K+", label: "Treat Brand Likes", platform: "TikTok" },
    { value: "36.9K+", label: "Beauty Brand Likes", platform: "TikTok / Instagram" },
    { value: "3K+", label: "Combined Followers", platform: "Social Channels" },
    { value: "100%", label: "Akure Presence", platform: "FUTA South Gate / Atolagbe" }
  ],
  timeline: [
    {
      year: "Phase 1",
      title: "Shaytee’s Treat Launch",
      description: "Founded and scaled a premier confectionery option in Akure, serving custom ice cream and popcorn at local hangouts and student celebrations.",
      status: "completed"
    },
    {
      year: "Phase 2",
      title: "Hair by Shaytee & Beauty Services",
      description: "Launched hair styling and lash extensions, creating a dedicated following for quality installations and precise lash work.",
      status: "completed"
    },
    {
      year: "Phase 3",
      title: "Shaytee Beauty Studio Expansion",
      description: "Opened our official physical beauty studio hub at FUTA South Gate, adding pedicure packages and professional piercings.",
      status: "completed"
    },
    {
      year: "Phase 4",
      title: "The Shaytee Experience Ecosystem",
      description: "Unifying both worlds under a singular premium luxury brand identity with cross-package loyalty perks and combined celebration packages.",
      status: "concept"
    }
  ] as TimelineEvent[],
  gallery: [
    {
      id: "gm-1",
      title: "Signature Treat Bar Setup",
      category: "treats",
      aspectRatio: "portrait",
      placeholderText: "Treat Moments",
      notes: "Showcasing the ice cream and event setups."
    },
    {
      id: "gm-2",
      title: "Flawless Lace Installation",
      category: "beauty",
      aspectRatio: "portrait",
      placeholderText: "Beauty Looks",
      notes: "Before/after of wig styling and lash extensions."
    },
    {
      id: "gm-3",
      title: "Studio Aesthetics & Vibe",
      category: "studio",
      aspectRatio: "landscape",
      placeholderText: "Studio Days",
      notes: "Interior and client relaxation moments."
    },
    {
      id: "gm-4",
      title: "Gourmet Event Popcorn Station",
      category: "events",
      aspectRatio: "square",
      placeholderText: "Event Orders",
      notes: "Custom branding for wedding and birthday tables."
    },
    {
      id: "gm-5",
      title: "Wig Coloring Client Transformation",
      category: "beauty",
      aspectRatio: "portrait",
      placeholderText: "Client Transformations",
      notes: "Hair transitions, styling and pedicures."
    },
    {
      id: "gm-6",
      title: "Shaytee Editorial Shoot",
      category: "founder",
      aspectRatio: "portrait",
      placeholderText: "Founder Moments",
      notes: "Editorial, creative planning, and branding portraits."
    }
  ] as GalleryItem[],
  contact: {
    phone: "2348069621919",
    disclaimer: "WhatsApp number is temporary and pending official owner confirmation.",
    template: `HELLO SHAYTEE TEAM

Name:
Reason for Contact:
Brand Interest:
Message:

Please get back to me.`,
    options: [
      { value: "treat-order", label: "Treat Order (Ice cream, popcorn, event treats)" },
      { value: "beauty-app", label: "Beauty Appointment (Hair, lashes, pedicure, piercings)" },
      { value: "collab", label: "Brand Collaboration & Sponsorship" },
      { value: "general", label: "General Enquiry" }
    ]
  },
  ownerChecklist: [
    {
      id: "chk-1",
      label: "Confirm official founder name/title",
      category: "Personal Brand",
      description: "Is 'Shaytee' the preferred public name, or should we use a full name (e.g. Folashade)? Is 'Founder & Creative Director' the correct title?",
      status: "pending"
    },
    {
      id: "chk-2",
      label: "Confirm if 'The Shaytee Experience' branding should be used",
      category: "Brand Concept",
      description: "Should the combined brand be named 'The Shaytee Experience' or something else (e.g., 'Shaytee Brands', 'Shaytee Lifestyle')?",
      status: "pending"
    },
    {
      id: "chk-3",
      label: "Confirm official WhatsApp phone number",
      category: "Contact Info",
      description: "Provide the correct phone number for routing order and appointment requests. Currently using temporary: 2348069621919.",
      status: "pending"
    },
    {
      id: "chk-4",
      label: "Confirm official social media links",
      category: "Social Proof",
      description: "Confirm handles and follower numbers for @shaytee.s.treat and @hairbyshaytee / @shayteebeautystudio.",
      status: "pending"
    },
    {
      id: "chk-5",
      label: "Provide approved personal/business photos",
      category: "Media",
      description: "High-resolution photos of Shaytee, the treats, the studio, and clients to replace media placeholder slots.",
      status: "pending"
    },
    {
      id: "chk-6",
      label: "Review and approve founder biography",
      category: "Personal Brand",
      description: "Review current placeholder copy for the biography and founder story on the homepage and about page.",
      status: "pending"
    },
    {
      id: "chk-7",
      label: "Confirm exact business names",
      category: "Corporate",
      description: "Confirm if 'Shaytee's Treat' and 'Shaytee Beauty Studio' / 'Hair by Shaytee' are the correct names to display.",
      status: "pending"
    },
    {
      id: "chk-8",
      label: "Determine website linking behavior",
      category: "Technical Integration",
      description: "Should this site serve as a portal linking to separate dedicated websites, or merge appointments/ordering directly?",
      status: "pending"
    }
  ] as ChecklistItem[]
};
