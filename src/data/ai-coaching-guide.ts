// AI Coaching Platforms buyer's guide. Copy from the JazzHQ brief
// "AI Coaching Platforms | JazzHQ Buyer's Guide" (Nov 2026), lightly edited
// for grammar and US spelling to match the other guides.
export const route = "/buyers-guide/ai-coaching-platforms";
export const title = "10 Best AI Coaching Platforms for Sales Teams in 2026 (Compared for Features, Pricing & Fit)";
export const seoTitle = "The Best AI Coaching Platforms for Sales Teams in 2026 | JazzHQ";
export const description = "Compare the best AI coaching platforms for sales teams in 2026. Explore features, pricing, strengths, and the best use cases to find the right fit for your team.";

export const hero = {
  eyebrow: ["BUYER’S GUIDE", "·", "2026"],
  heading: "10 Best AI Coaching Platforms for Sales Teams in 2026",
  subheading: "(Compared for Features, Pricing & Fit)",
  button: "Compare platforms",
  readTimeSuffix: "min read",
  asideLabel: "About this guide",
  asideEyebrow: "A quick note before you start",
  stats: [["10", "AI coaching platforms"], ["07", "Things we looked at"]],
} as const;

export const intro = [
  "You usually don’t know how you’ll handle an objection until you’re in the conversation. It’s only afterwards that you realize what you should have said. That’s useful for the next call, but it doesn’t help the one you just lost. AI coaching platforms solve this by giving you a place to practice real conversations, receive instant coaching, and improve before every customer call.",
  "Don’t start by asking which platform is the “best.” Start by asking what you want to get better at. Once you know that, narrowing down your options becomes much easier.",
];

export const disclosure = "You’ll find Rehearse, JazzHQ’s own AI coaching platform, alongside other great AI coaching tools. We believe it belongs in the conversation, but the best platform depends on your goals and how you coach. This isn’t a ranked list, so take a look at each option and choose the one that feels right for you and your team.";

export const contentsLabel = "In this guide";
export const sections = [
  ["at-a-glance", "At a glance"], ["what-we-looked-at", "What we looked at"], ["platforms", "The platforms"],
  ["compare", "Compare"], ["what-to-look-for", "What to look for"], ["recommendations", "Which is right for you"], ["faq", "FAQs"],
] as const;

export const criteria = [
  "How realistic are the AI roleplays?",
  "Does the coaching actually help reps improve?",
  "Does it take days to set up, and is it easy to use?",
  "Can you customize scenarios, personas, and feedback?",
  "Does it provide useful insights and analytics?",
  "Does it integrate with your existing tech stack?",
  "Will it scale as your coaching needs grow?",
];

type Feature = readonly [label: string, detail: string];
type Image = { alt: string; width: number; height: number };
export type Product = {
  id: string;
  name: string;
  url: string;
  fit: string;
  knownFor: string;
  intro: readonly string[];
  image: Image;
  features: readonly Feature[];
  pros: readonly string[];
  cons: readonly string[];
  pricing: readonly string[];
  table: { bestFor: string; standout: string; price: string };
};

export const products: Product[] = [
  {
    id: "rehearse", name: "Rehearse by JazzHQ", url: "https://www.rehearsehq.ai/",
    fit: "Sales, CS, and partner reps who want to rehearse a tough buyer objection live against a voice-led AI stakeholder, then get evidence-backed feedback quoting their exact words before the actual sales call.",
    knownFor: "AI sales coaching platform for practicing sales and customer success conversations in a simulated environment, helping reps rehearse before real customer calls.",
    intro: [
      "Rehearse is JazzHQ’s AI coaching platform that helps you practice high-stakes sales, customer success, and partner conversations before they happen. You can choose from ready-made scenarios covering discovery calls, objection handling, pricing discussions, renewals, and partner negotiations, then rehearse with a voice-based AI buyer or stakeholder that responds with realistic questions and pushback.",
      "Every session gives you a score, conversation insights, and clear, evidence-backed feedback so you know exactly what to improve before your next customer conversation. If you’re coaching a team, managers can also track progress, identify coaching opportunities, and measure readiness from a single dashboard.",
    ],
    image: { alt: "Rehearse home page with voice-led AI buyer personas such as a VP of Operations, Procurement Head, Solutions Architect and Finance Director", width: 2048, height: 1125 },
    features: [
      ["Scenario library", "Start practicing right away with ready-made sales, customer success, and partner scenarios. You’ll see the persona, difficulty level, and session duration before you begin."],
      ["Live AI roleplays", "Practice with voice-based AI buyers and stakeholders that ask questions, handle objections, and respond like real people."],
      ["AI coaching and feedback", "Get instant scores along with your talk ratio, pacing, and filler-word analysis. You’ll also receive evidence-backed feedback with quotes from your conversation."],
      ["Manager dashboard", "Track completed roleplays, scores, readiness, and coaching opportunities. You can also use leaderboards, filters, and exportable reports to keep everything organized."],
    ],
    pros: [
      "Voice-based roleplays feel natural and are well suited for practicing customer conversations.",
      "Feedback includes examples from your rehearsal, making it easier to understand what worked and what to improve.",
      "Ready-made scenarios help you get started quickly without building every roleplay yourself.",
    ],
    cons: [
      "Focuses primarily on sales, customer success, and partner conversations rather than presentation or public speaking skills.",
      "If you’re looking for broader learning management features, you may need additional enablement tools.",
    ],
    // TODO(content): confirm starting price and free-trial availability with JazzHQ.
    pricing: ["Custom pricing. Contact JazzHQ for a quote."],
    table: { bestFor: "Sales, CS & partner conversation rehearsal", standout: "Voice-based AI roleplay + manager readiness dashboard", price: "Custom quote" },
  },
  {
    id: "hyperbound", name: "Hyperbound", url: "https://www.hyperbound.ai/",
    fit: "Sales orgs that want AI buyer bots trained on real call data, plus an AI agent that flags stuck deals.",
    knownFor: "AI buyer bots trained on 2M+ hours of real B2B calls, with discovery-specific scorecards and practice linked to real-call scoring.",
    intro: ["Hyperbound turns your sales calls into AI roleplays using conversation intelligence. The company positions itself as a “Revenue Activation Platform” that scores real calls, offers AI roleplays for practice, and uses an AI agent called Kota to help close the loop on deals."],
    image: { alt: "Hyperbound home page promoting enterprise-grade AI sales coaching", width: 2048, height: 1004 },
    features: [
      ["Hyperbound Practice", "Their AI roleplay and practice layer creates multi-party simulations based on your ICP, builds a scorecard that evaluates your practice, and integrates with your LMS/CMS."],
      ["Kota Activate", "A Slack-native agent that answers questions about pipeline and deals in plain language and runs automations (e.g., flagging a stuck deal, assigning targeted practice) without a human digging through dashboards."],
      ["Hyperbound Perform (Live Deal Execution)", "Brings call recording, an AI deal coach, automatic CRM fill, and conversation intelligence into one view, so managers can spot at-risk deals while they’re still in motion."],
      ["Custom scorecards and AI personas", "Create roleplays, scorecards, and AI buyers that match your sales methodology, messaging, and certification process."],
    ],
    pros: [
      "Easy-to-use interface for both reps and admins, according to multiple G2 reviewers.",
      "It takes less than 15 minutes to set up your first bot or scorecard.",
    ],
    cons: [
      "Some users report AI response delays and occasional call lag during roleplays.",
      "The platform can feel a bit overwhelming for new users because of its broad feature set.",
    ],
    pricing: ["You can try the platform for free.", "Pricing is custom, based on the features you need and your sales process."],
    table: { bestFor: "Revenue teams wanting practice tied to real-call scoring", standout: "AI buyer bots + Kota AI agent for deal automation", price: "Custom quote" },
  },
  {
    id: "second-nature", name: "Second Nature", url: "https://secondnature.ai/",
    fit: "Global teams that need to turn existing decks and call recordings into roleplays in minutes, across 30+ languages.",
    knownFor: "Converts decks, playbooks, and call recordings into AI roleplays in minutes, with certification-style training across 30+ languages.",
    intro: ["Second Nature is an AI roleplay and coaching platform that turns training into go-to-market execution. You can practice sales, support, and other conversations against human-like AI personas and convert existing resources into customizable roleplays in 30+ languages."],
    image: { alt: "Second Nature home page showing AI role play scenarios such as a discovery call and objection handling", width: 2048, height: 1056 },
    features: [
      ["AI roleplay scenarios", "Practice discovery calls, cold calls, objection handling, and multi-persona meetings (B2B and B2C), including a newer video-avatar format. Simulations can be built in minutes from prompts or by uploading existing training materials, decks, or call recordings."],
      ["Deal Coach", "Get targeted AI-driven coaching on live deals with interactive, human-like AI roleplays and on-demand personalized training."],
      ["Manager dashboards", "Managers can see seller performance, keep an eye on progress, and track suggested improvements to customize training programs."],
      ["LMS/CRM integration", "Fits into your workflow, integrating with any LMS via SCORM or LTI, plus many CRMs, SAML, and conferencing tools."],
    ],
    pros: [
      "Helps improve rep performance and reduce onboarding time, according to multiple G2 reviewers.",
      "Easy to use, with an intuitive interface for creating and running roleplays.",
      "Simulations in 30+ languages, including Portuguese, Spanish, Hebrew, Dutch, German, French, and Japanese.",
    ],
    cons: [
      "Some users on G2 mention inaccuracies, and that the AI coach sometimes changes the perspective of the conversation.",
      "The learning curve can be steep for beginners. Building custom scenarios can take time for first-time users.",
    ],
    pricing: ["Pricing is not publicly disclosed. Book a demo to get a quote."],
    table: { bestFor: "Global GTM teams needing multilingual roleplay", standout: "Converts existing decks/calls into roleplays in minutes", price: "Custom quote" },
  },
  {
    id: "yoodli", name: "Yoodli", url: "https://yoodli.ai/",
    fit: "Anyone who wants delivery-focused coaching (filler words, pacing, tone), practicing solo or across a multi-persona panel roleplay.",
    knownFor: "AI communication coach that improves delivery by analyzing filler words, pacing, eye contact, talk ratio, and speaking confidence.",
    intro: ["Yoodli started as a broader speech-coaching tool (filler words, pacing, clarity) and has since expanded into enterprise roleplay for GTM, L&D, and partner enablement. It supports onboarding and certification by helping you practice with content built around your team’s messaging."],
    image: { alt: "Yoodli home page promoting interactive AI roleplays with real-time feedback", width: 2048, height: 1021 },
    features: [
      ["AI roleplays with multi-persona simulations", "Practice one-on-one conversations or simulate a group presentation, buying-committee pitch, or interview panel with multiple AI personas at once, each with distinct characteristics."],
      ["Delivery and content feedback", "Choose a roleplay, practice, and get real-time analysis of pacing, filler words, clarity, and tone, plus AI-powered follow-up questions during the roleplay, just as a real audience would push back."],
      ["Custom content and certification workflows", "Upload your own methodology, brand voice, and best practices. Yoodli auto-updates roleplays as that content changes and supports certification and pass/fail tracking for onboarding reps or partners."],
      ["Enterprise integrations", "Yoodli is SOC 2 Type 2 certified and GDPR compliant, and integrates with tools like Slack, Microsoft Teams, Gong, and Snowflake to assign roleplays and sync progress data automatically."],
    ],
    pros: [
      "AI onboarding and certification make it easier to certify reps on new messaging without relying on live manager roleplays.",
      "Sellers can run real-time conversations with AI avatars built around actual personas and objections.",
    ],
    cons: [
      "Yoodli’s feedback focuses on how you deliver your message rather than on what you say.",
      "While not disruptive, customers report slightly noticeable lags in AI responses.",
    ],
    pricing: [
      "There is a free trial to get started.",
      "The Pro plan for individuals starts at $9/month (billed annually), with up to 10 roleplays a week.",
      "The Advanced plan is $20/month (billed annually).",
    ],
    table: { bestFor: "Individuals & teams focused on delivery/communication skills", standout: "Multi-persona simulations with real-time delivery feedback", price: "$9/month (Pro)" },
  },
  {
    id: "kendo", name: "Kendo", url: "https://kendo.ai/",
    fit: "Lean sales teams that want an AI manager auto-building a roleplay straight from a rep’s actual last call with a real prospect.",
    knownFor: "Realistic, low-latency AI roleplay for discovery calls and objection handling, with transparent self-serve pricing.",
    intro: ["Kendo works like an AI sales manager, combining AI roleplay practice, automatic call review and scoring, and rep management into one flywheel. It reviews every call, identifies where you’re falling short, assigns targeted roleplay training, and then repeats the cycle."],
    image: { alt: "Kendo home page describing itself as the AI sales manager that makes your humans better", width: 2048, height: 1021 },
    features: [
      ["End-to-end sales enablement", "With a single prompt, you can fully customize AI prospects by personality, call type, product or offer, and common objections. It can auto-generate a roleplay based on a rep’s actual last call with a specific prospect."],
      ["AI Call Review", "Automatically scores every real sales call against custom scorecards or preset methodologies (BANT, MEDDPICC, NEPQ), with call summaries, sentiment, and strengths and weaknesses flagged without a manager listening in."],
      ["Context system", "All historical data, including your calls, company information, scripts, and frameworks, is saved in one place and used as context for roleplays."],
      ["Kendo Agent", "The AI sales manager you or your manager can use. The agent watches your calls, spots exactly where you’re falling short, and assigns the roleplay training you need."],
    ],
    pros: ["It has a clean interface.", "Based on G2 reviews, Kendo handles off-script conversations well."],
    cons: ["A few customers report unresponsive support.", "Reported to raise unrealistic objections at times."],
    pricing: ["You can get started for free.", "The Pro plan costs $55/seat/month.", "The Max plan is $100/seat/month.", "Enterprise pricing is custom."],
    table: { bestFor: "Teams wanting an AI sales manager that assigns training", standout: "Auto-generates roleplays from a rep’s actual last call", price: "Free (Pro: $55/seat/mo)" },
  },
  {
    id: "mindtickle", name: "Mindtickle", url: "https://www.mindtickle.com/",
    fit: "Large enterprises that need roleplay built into a bigger system of onboarding, content, and a readiness index tracking skill gaps across hundreds of reps.",
    knownFor: "Enterprise-ready AI roleplay within a broader sales readiness platform, featuring multi-persona simulations and system-navigation practice.",
    intro: ["Mindtickle is a revenue enablement platform built around its agentic operating system, ElevateOS™. The AI layer combines sales training and onboarding, content management, coaching, digital sales rooms, conversation intelligence, and AI roleplay in a single system."],
    image: { alt: "Mindtickle home page with the headline “Your AI teammate for every deal”", width: 2048, height: 1005 },
    features: [
      ["AI sales roleplay", "Create and practice hyper-realistic scenarios, and receive immediate feedback on your pitch, objection handling, and other areas for improvement."],
      ["Sales training", "Access bite-size training on any device, connect the platform to more than 100 integrations, and measure the effectiveness of enablement programs with the readiness index."],
      ["Content management", "AI-powered search helps you find answers to your questions. Granular engagement data shows which pieces perform best, so you can rank top content and keep it fresh."],
      ["Analytics and readiness index", "Identify your best performers through dashboards that track completion rates, readiness scores, and skill gaps across large teams. It’s built for enterprise-scale visibility rather than individual rep practice."],
    ],
    pros: ["Combines training, coaching, and call reviews in one platform.", "Makes it easy to build structured onboarding and certification programs."],
    cons: [
      "Some users on G2 report gaps in CRM and LMS integrations.",
      "There are also a few mentions of occasional slow loading times and minor bugs.",
      "While it supports individual coaching, it’s built with enterprise teams in mind.",
    ],
    pricing: ["Book a demo and contact the team for a detailed quote."],
    table: { bestFor: "Large enterprises needing full onboarding + enablement suite", standout: "ElevateOS agentic layer unifying training, coaching & CI", price: "Custom quote" },
  },
  {
    id: "retorio", name: "Retorio", url: "https://www.retorio.com/",
    fit: "Regulated-industry teams that need feedback grounded in Big Five behavioral science.",
    knownFor: "Video-based AI coaching that evaluates tone, facial expressions, and body language for behavioral and emotional intelligence development.",
    intro: [
      "Retorio is a video-based AI coaching platform that combines AI with behavioral science to help you improve customer conversations. You can practice sales, leadership, and customer service scenarios with lifelike AI avatars that respond using realistic voice, tone, and facial expressions.",
      "The tool also analyzes how you communicate through behavioral insights based on the Big Five personality model. It’s designed primarily for enterprise organizations, particularly those in regulated industries.",
    ],
    image: { alt: "Retorio home page promoting AI sales coaching for the enterprise", width: 2048, height: 950 },
    features: [
      ["Photorealistic avatars", "Choose from 93 photorealistic avatars with 38 voices in more than 10 languages to localize your experience."],
      ["Behavioral analysis via the Big Five model", "Feedback is grounded in observable behavior (not self-reported traits), scoring communication style and personality-relevant behaviors."],
      ["Session Generator", "Set up a new coaching program from scratch in a few minutes using AI. You can also bring existing training material into sessions."],
      ["Context-aware, dynamic conversations", "Add product details, competitor analysis, or industry-specific glossaries to a session and practice against AI personas built around your ICP."],
    ],
    pros: ["Flexible scenario creation using your own content.", "Behavioral feedback goes beyond basic conversation analysis and gives you tactical feedback."],
    cons: [
      "Avatar responses can occasionally feel a little slow, although reviewers note this has improved over time.",
      "Some users would like more natural avatar gestures and movement for an even more realistic experience.",
    ],
    pricing: ["Priced per user, per year or per month, depending on the license type you choose for your team."],
    table: { bestFor: "Regulated industries (insurance, banking, healthcare)", standout: "Big Five behavioral analysis + photorealistic avatars", price: "Custom (per user/mo or /yr)" },
  },
  {
    id: "rehearsal-elb", name: "Rehearsal by ELB Learning", url: "https://www.elblearning.com/rehearsal",
    fit: "Teams that want both async video practice with mentor feedback and a transcript-first AI roleplay that filters out accent or tone bias.",
    knownFor: "Asynchronous video coaching combined with real-time AI roleplay, widely used for leadership and customer service training.",
    intro: ["Rehearsal is a video-based practice and coaching platform built by ELB Learning. With its audio and video AI roleplay feature, you can practice one-take scenarios for high-pressure situations. It can also analyze call transcripts in more than 50 languages."],
    image: { alt: "Rehearsal by ELB Learning home page promoting AI-powered coaching for real-world practice", width: 2048, height: 937 },
    features: [
      ["Asynchronous video roleplay", "Record responses to a scenario on any device and re-record as many times as you want before submitting. Mentors leave timeline-based comments or grades."],
      ["AI Roleplay (real-time)", "A live practice engine with an AI avatar that adapts conversationally. It’s transcript-first: it evaluates only the text transcript, not voice or biometric data, specifically to reduce bias based on accent, tone, or gender."],
      ["Multilingual support", "More than 50 languages supported, including Spanish, French, Chinese, and many more."],
      ["Channels for peer collaboration", "A social-style space where teams post, share, and comment on each other’s rehearsals and best practices."],
    ],
    pros: [
      "Strong coaching and reporting tools help managers review progress and provide targeted feedback.",
      "Flexible enough for sales, onboarding, leadership training, presentations, and customer service scenarios.",
    ],
    cons: [
      "Getting the most value depends on how well you create practice scenarios and assignments.",
      "New users may need a little time to get familiar with the layered structure and the different learner and admin workflows.",
    ],
    pricing: ["You can try the platform for free.", "Rehearsal starts at $5,268/year.", "Rehearsal + AI Roleplay starts at $7,768/year."],
    table: { bestFor: "Leadership, onboarding & customer-service training", standout: "Async video roleplay + new real-time AI Roleplay layer", price: "$5,268/year" },
  },
  {
    id: "trellus", name: "Trellus", url: "https://www.trellus.ai/",
    fit: "Outbound reps who want live objection prompts inside their existing dialer while they’re mid-call, not after it ends.",
    knownFor: "Real-time in-call AI coaching that provides live prompts, objection-handling guidance, and coaching during active sales conversations.",
    intro: ["Trellus is an AI sales coaching platform built for reps who spend a large part of their day on cold calls. It’s an AI copilot layered on top of your existing sales stack (Salesloft, Outreach, HubSpot, Salesforce, Apollo, etc.), built around a parallel/power dialer to multiply call volume, real-time in-call AI coaching, and post-call automation."],
    image: { alt: "Trellus home page promoting power and parallel dialing inside existing sales tools", width: 2048, height: 937 },
    features: [
      ["Parallel/power dialer", "Dial up to 5 lines simultaneously inside your existing sales engagement platform (no separate tool to log into), automate voicemail drops, and dial from Google Sheets or Clay without loading everything into a CRM first."],
      ["AI practice/voice bots", "Create voice agents from your own past calls that act like real prospects, for onboarding and skill practice."],
      ["Real-time call coaching", "Live, adaptive guidance during actual calls, with objection-handling prompts and competitor-positioning cues that appear as the prospect is speaking. It’s all built from prebuilt scenarios or your team’s own talk tracks."],
      ["Automated call analytics and QA", "Set your own coaching standards, then let AI score every call, create call summaries, and draft follow-up emails automatically."],
    ],
    pros: [
      "Integrates with Salesforce, HubSpot, Google Sheets, Clay, and other sales tools.",
      "Reviews frequently mention responsive customer support and regular product improvements.",
    ],
    cons: [
      "Best suited for outbound sales teams that rely on high call volumes.",
      "Focuses primarily on live cold calling rather than structured roleplay or sales certification programs.",
    ],
    pricing: ["The Power plan for individuals costs $99.99/month.", "The Parallel plan for individuals is $149.99/month."],
    table: { bestFor: "High-volume outbound/cold-calling teams", standout: "Parallel dialer + live in-call coaching", price: "$99.99/month" },
  },
  {
    id: "outdoo", name: "Outdoo (formerly MeetRecord)", url: "https://www.outdoo.ai/",
    fit: "Teams that want real sales calls automatically turned into practice scenarios, scored against their own methodology like MEDDICC or Challenger.",
    knownFor: "Conversation intelligence platform that analyzes real sales calls, scores them against sales methodologies, and uses AI roleplay to address identified coaching gaps.",
    intro: ["Outdoo (formerly MeetRecord) started in 2022 as a conversation intelligence tool for recording, transcribing, and scoring real sales calls. It has since expanded into a full closed-loop platform with AI roleplay, real-call scoring, coaching, and revenue intelligence."],
    image: { alt: "Outdoo home page promoting AI roleplay and training built for behavior change", width: 2048, height: 937 },
    features: [
      ["Multi-persona roleplays", "Create lifelike AI personas from real call data or LinkedIn profiles (via a Chrome extension) to practice objections, discovery, and post-sale conversations."],
      ["Conversation intelligence and call scoring", "Automatically records, transcribes, and scores real calls, turning them into practice scenarios in one click. This closes the loop between what actually happened on a call and what to practice next."],
      ["Micro-learning", "AI analyzes your toughest calls and automatically creates bite-sized micro-courses."],
      ["Methodology alignment", "Align scorecards with your existing sales methodology, including BANT, MEDDICC, SPICED, Challenger, or your own framework, so AI coaching stays consistent across practice sessions and live customer calls."],
    ],
    pros: [
      "You can create a bot with a single click.",
      "Methodology-based scoring helps keep coaching consistent across practice sessions and real customer calls.",
    ],
    cons: [
      "Advanced features are a better fit for growing sales organizations than for individuals looking for a lightweight coaching tool.",
      "Some users have reported inaccuracies in call summaries and generic responses at times.",
    ],
    pricing: ["You can try the platform for free.", "For other plans, request a quote or book a demo."],
    table: { bestFor: "Teams wanting roleplay tied to real-call conversation intelligence", standout: "Turns real calls into roleplays in one click", price: "Custom quote" },
  },
];

// Second Rehearse screenshot and the in-card call to action.
export const rehearseExtras = {
  feedbackImage: { src: "rehearse-feedback.webp", alt: "Rehearse roleplay results with a score, talk ratio, words per minute, filler words, insights and quoted evidence from the conversation", width: 1564, height: 894 },
  ctaText: "Sometimes, the best way to know if a tool works for you is to use it. Rehearse is no different. Try it out, and it may turn out to be the coach you’ve been looking for all along.",
  ctaLabel: "Rehearse now",
  ctaHref: "https://www.rehearsehq.ai/",
} as const;

export const lookFor = {
  intro: [
    "On the surface, every AI sales coaching platform looks pretty much the same. Spend a little more time and you’ll start seeing the differences. The most important step of all is to try them and see which one adapts to your style.",
    "Here’s what we think is worth paying attention to before making a decision.",
  ],
  items: [
    ["Roleplay realism and training format", [
      "Nearly every tool claims to offer realistic AI roleplays, but realism means very different things depending on the platform.",
      "Some tools rely on text-based chats, while others simulate live voice or video conversations that feel much closer to speaking with a real buyer. When you simply wait for scripted responses, practice doesn’t sharpen your skills.",
      "Look for a platform that can interrupt, ask follow-up questions, challenge assumptions, and change direction based on what you say. It’s also worth checking how easy it is to build new scenarios.",
    ]],
    ["Quality and specificity of AI feedback", [
      "You’ll get a score at the end of the session; almost every tool does that. But it shouldn’t be a number with no evidence. A score of 72 out of 100 means nothing until it’s broken down into actionable feedback.",
      "You need coaching that points to specific moments in the conversation, highlights what went well, identifies missed opportunities, and suggests what to improve before your next customer call.",
    ]],
    ["Data privacy and AI training practices", [
      "Sales conversations often include pricing discussions, customer information, competitive positioning, and confidential business details.",
      "Look for clear answers about where conversation data is stored, who owns it, how long it’s retained, and whether it’s ever used to train AI models. If a vendor isn’t transparent, ask more questions before rolling the platform out across your team.",
    ]],
    ["Time to first practice session", [
      "Consider how long it takes to go from signing up to completing your first realistic roleplay. The easier it is to start practicing, the more likely you’ll keep doing it.",
      "Look for platforms with ready-made scenarios, simple setup, and as little friction as possible between choosing a roleplay and starting a conversation. If every practice session takes several minutes to configure, adoption usually suffers over time.",
    ]],
  ] as const,
  closing: [
    "The platform you choose should also go beyond your practice session. It should be easy for your manager to act on.",
    "At a team level, managers need a clear view of who’s practicing consistently, who’s improving, and where coaching time should be spent. Dashboards that bring together roleplay activity, scores, coaching trends, and readiness make it much easier to support individual reps without reviewing every conversation manually.",
  ],
};

export const recommendations = {
  lede: "There’s no single best choice or easy way out here. You have to try these tools yourself to find out. What you can do is shortlist the ones that match your specific requirements, then give them a try.",
  items: [
    ["Rehearse (JazzHQ)", "If your goal is to practice sales, customer success, or partner conversations with realistic voice roleplays and detailed coaching, Rehearse is the place to start."],
    ["Hyperbound", "If you’re focused on outbound sales practice and want AI buyers with coaching tailored to prospecting conversations, Hyperbound is a strong choice."],
    ["Second Nature, Mindtickle & Outdoo", "If you’re looking for a broader enablement platform that combines AI coaching with onboarding, learning, and conversation intelligence, these are worth exploring."],
    ["Trellus", "If cold calling is a big part of your day, Trellus stands out with live AI coaching during calls."],
    ["Yoodli", "If you want to improve how you communicate, whether that’s sales pitches, presentations, or interviews, Yoodli is designed with that in mind."],
    ["Retorio", "If you’re interested in behavioral coaching and understanding how your communication style comes across, Retorio offers a different approach from most AI sales coaching platforms."],
    ["Rehearsal (ELB Learning)", "If your role goes beyond sales and includes leadership, onboarding, or customer service, Rehearsal gives you more flexibility."],
  ] as [string, string][],
  closing: "There you have it. Pick a platform that makes practice feel realistic, feedback worth acting on, and improvement easy to measure. The rest usually follows.",
};

export const faqs: [string, string][] = [
  ["What is an AI sales coaching platform?", "An AI sales coaching platform is software that lets you practice and prepare for customer conversations before you get on sales calls. You rehearse with an AI buyer, receive instant coaching, and repeat the conversation until you’re more confident. Some platforms also give you feedback on real calls. Most give you a score and actionable feedback that show where you need to improve, and let your managers track progress."],
  ["How is an AI coaching platform different from call recording software?", "Look at it this way: call recording software looks backwards. It records and analyzes conversations you’ve already had. An AI coaching platform looks forwards. It helps you practice conversations before they happen, so you’re better prepared when you speak to a real customer. Some platforms combine both capabilities, but they’re solving different problems. One analyzes performance. The other helps improve it."],
  ["What should I look for in an AI coaching platform?", "Start with the quality of practice. Look for roleplays that are realistic and coaching backed by evidence; a score without actionable insights is still just a number. Look for built-in scenarios that reflect the conversations you actually have on sales calls. It’s also worth checking how easy it is to create new roleplays, whether coaching can follow your sales methodology, and how much visibility managers get into progress. Those factors usually have a much bigger impact than the length of a feature list."],
  ["Can AI coaching platforms replace manager coaching?", "No, and they shouldn’t. AI is excellent at giving instant, consistent feedback after every practice session, but managers bring context, judgment, and experience that AI can’t replicate. A strong coaching program uses both. AI handles repetitive coaching and helps you improve between sessions, while managers focus on strategy, deal coaching, and more nuanced conversations."],
  ["What is the best AI coaching platform for sales reps specifically?", "That depends entirely on what you’re trying to work on. If your priority is practicing realistic customer conversations with actionable feedback, look for a platform with strong voice roleplays, detailed coaching, and scenarios that match your day-to-day sales process. If you also need onboarding, conversation intelligence, or revenue enablement, a broader platform may be a better fit."],
];

export const sectionCopy = {
  glance: { label: "01 / Key takeaways", title: "Best AI Coaching Platforms at a Glance", lede: "What each platform is best known for. Select a name to jump to its full breakdown." },
  method: { label: "02 / Our approach", title: "What We Looked At", lede: "Here are the key things we considered while putting this guide together. We look at several of them in more detail in “What to look for” below." },
  platforms: { label: "03 / Product breakdown", title: "Best AI Coaching Platforms for Sales Teams (Detailed Breakdown)", lede: "Here’s what each platform offers, where it stands out, and what to keep in mind before you book a demo." },
  compare: { label: "04 / Side by side", title: "Side-by-Side Comparison Table", lede: "Line up fit, standout features and starting prices. Confirm current pricing with each vendor." },
  lookFor: { label: "05 / Buyer checklist", title: "What to Look for in an AI Coaching Platform" },
  recommendations: { label: "06 / Shortlist", title: "So, Which AI Coaching Platform Is Right for You?" },
  faq: { label: "07 / FAQs", title: "Frequently Asked Questions" },
} as const;

export const scrollHint = "Swipe or scroll to see all columns.";
export const tableHeaders = {
  glance: ["AI coaching platform", "Best known for"],
  compare: ["Platform", "Best for", "Standout feature", "Starting price"],
} as const;
export const productLabels = { bestFor: "Best for:", website: "Visit website", features: "Key features", pros: "Pros", cons: "Cons", pricing: "Pricing", badge: "JazzHQ’s product", captionSuffix: "· Vendor website capture" } as const;

export const cta = {
  title: "Starting your first trial today?",
  text: "Why not start with Rehearse? Take it for a spin and see how it goes.",
  label: "Try Rehearse",
  href: "https://www.rehearsehq.ai/",
} as const;
