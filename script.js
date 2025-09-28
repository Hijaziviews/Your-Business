// Business data with AI-focused ideas
const businessIdeas = [
    {
        id: 1,
        title: "AI Content Creation Agency",
        description: "Help businesses create engaging content using AI writing tools and automation.",
        icon: "✍️",
        tag: "Content & Marketing",
        content: `
            <h3>AI Content Creation Agency</h3>
            <img src="https://via.placeholder.com/400x200/4facfe/ffffff?text=AI+Content+Agency" alt="AI Content Agency" style="width: 100%; border-radius: 10px; margin: 15px 0;">
            <p><strong>Business Model:</strong> Offer content creation services using AI tools like GPT, Jasper, and Copy.ai to help businesses scale their content marketing efforts.</p>
            
            <h4>Services to Offer:</h4>
            <ul>
                <li>Blog post writing and optimization</li>
                <li>Social media content creation</li>
                <li>Email marketing campaigns</li>
                <li>Product descriptions</li>
                <li>SEO-optimized web copy</li>
            </ul>
            
            <h4>Getting Started:</h4>
            <ol>
                <li>Master AI writing tools (ChatGPT, Jasper, Copy.ai)</li>
                <li>Build a portfolio with sample content</li>
                <li>Set up a professional website</li>
                <li>Start with small local businesses</li>
                <li>Scale to larger clients</li>
            </ol>
            
            <h4>Revenue Potential:</h4>
            <p>$50-200 per blog post, $500-2000 per month for ongoing content packages. Potential to reach $5K-20K monthly revenue within 6-12 months.</p>
        `
    },
    {
        id: 2,
        title: "AI Chatbot Development",
        description: "Build custom chatbots for businesses to automate customer service and sales.",
        icon: "🤖",
        tag: "Automation",
        content: `
            <h3>AI Chatbot Development Service</h3>
            <img src="https://via.placeholder.com/400x200/4ecdc4/ffffff?text=AI+Chatbot+Service" alt="AI Chatbot Service" style="width: 100%; border-radius: 10px; margin: 15px 0;">
            <p><strong>Business Model:</strong> Create custom AI chatbots for businesses to handle customer inquiries, lead generation, and sales automation 24/7.</p>
            
            <h4>Services to Offer:</h4>
            <ul>
                <li>Custom chatbot development</li>
                <li>Integration with existing websites/systems</li>
                <li>Training and optimization</li>
                <li>Monthly maintenance and updates</li>
                <li>Analytics and performance reporting</li>
            </ul>
            
            <h4>Tools & Platforms:</h4>
            <ul>
                <li>OpenAI API for intelligent responses</li>
                <li>Dialogflow for conversation management</li>
                <li>Botpress for custom development</li>
                <li>Integration with CRM systems</li>
            </ul>
            
            <h4>Target Markets:</h4>
            <p>E-commerce stores, service businesses, healthcare providers, educational institutions, and SaaS companies.</p>
            
            <h4>Revenue Model:</h4>
            <p>$2,000-10,000 setup fee + $200-1,000 monthly maintenance. Enterprise solutions can command $20K+ setup fees.</p>
        `
    },
    {
        id: 3,
        title: "AI-Powered Data Analytics",
        description: "Offer data analysis and insights using AI tools for small to medium businesses.",
        icon: "📊",
        tag: "Analytics",
        content: `
            <h3>AI-Powered Data Analytics Service</h3>
            <img src="https://via.placeholder.com/400x200/a8edea/333333?text=Data+Analytics+AI" alt="Data Analytics AI" style="width: 100%; border-radius: 10px; margin: 15px 0;">
            <p><strong>Business Model:</strong> Help businesses make data-driven decisions by providing AI-powered analytics, reporting, and predictive insights.</p>
            
            <h4>Services to Offer:</h4>
            <ul>
                <li>Automated reporting dashboards</li>
                <li>Predictive analytics for sales/trends</li>
                <li>Customer behavior analysis</li>
                <li>Inventory optimization</li>
                <li>Marketing ROI analysis</li>
            </ul>
            
            <h4>AI Tools & Technologies:</h4>
            <ul>
                <li>Python with pandas, scikit-learn</li>
                <li>Tableau or PowerBI for visualization</li>
                <li>Google Analytics API</li>
                <li>Machine learning models for prediction</li>
                <li>Cloud platforms (AWS, Google Cloud)</li>
            </ul>
            
            <h4>Getting Started:</h4>
            <ol>
                <li>Learn data analysis and AI/ML basics</li>
                <li>Create sample dashboards and case studies</li>
                <li>Offer free analysis to first few clients</li>
                <li>Build templates for common industries</li>
                <li>Scale with recurring monthly reports</li>
            </ol>
            
            <h4>Revenue Potential:</h4>
            <p>$1,500-5,000 for initial setup + $500-2,000 monthly for ongoing analytics. Enterprise clients: $10K-50K projects.</p>
        `
    },
    {
        id: 4,
        title: "AI Personal Assistant Service",
        description: "Create AI-powered virtual assistants for busy professionals and entrepreneurs.",
        icon: "🎯",
        tag: "Productivity",
        content: `
            <h3>AI Personal Assistant Service</h3>
            <img src="https://via.placeholder.com/400x200/ff9a9e/ffffff?text=AI+Personal+Assistant" alt="AI Personal Assistant" style="width: 100%; border-radius: 10px; margin: 15px 0;">
            <p><strong>Business Model:</strong> Provide AI-powered personal assistant services to help professionals manage tasks, scheduling, email, and daily operations.</p>
            
            <h4>Services to Offer:</h4>
            <ul>
                <li>Email management and responses</li>
                <li>Calendar scheduling and coordination</li>
                <li>Research and information gathering</li>
                <li>Travel planning and booking</li>
                <li>Task prioritization and reminders</li>
                <li>Social media management</li>
            </ul>
            
            <h4>AI Implementation:</h4>
            <ul>
                <li>GPT-4 for intelligent email responses</li>
                <li>Calendar APIs for scheduling</li>
                <li>Web scraping for research</li>
                <li>Task management integrations</li>
                <li>Voice-to-text for meeting notes</li>
            </ul>
            
            <h4>Target Clients:</h4>
            <p>Entrepreneurs, executives, real estate agents, consultants, coaches, and other busy professionals who value their time.</p>
            
            <h4>Pricing Structure:</h4>
            <p>$500-2,000 per month per client, depending on service level. Premium packages can reach $3,000-5,000 monthly.</p>
        `
    },
    {
        id: 5,
        title: "AI SEO Optimization Service",
        description: "Use AI tools to help businesses improve their search engine rankings and organic traffic.",
        icon: "🔍",
        tag: "SEO & Marketing",
        content: `
            <h3>AI SEO Optimization Service</h3>
            <img src="https://via.placeholder.com/400x200/667eea/ffffff?text=AI+SEO+Service" alt="AI SEO Service" style="width: 100%; border-radius: 10px; margin: 15px 0;">
            <p><strong>Business Model:</strong> Leverage AI tools to provide comprehensive SEO services that help businesses rank higher in search results and increase organic traffic.</p>
            
            <h4>AI-Powered Services:</h4>
            <ul>
                <li>Keyword research using AI analytics</li>
                <li>Content optimization with AI writing</li>
                <li>Technical SEO audits via AI tools</li>
                <li>Competitor analysis automation</li>
                <li>Link building strategy with AI prospecting</li>
                <li>Local SEO optimization</li>
            </ul>
            
            <h4>AI Tools to Use:</h4>
            <ul>
                <li>Surfer SEO for content optimization</li>
                <li>Clearscope for keyword analysis</li>
                <li>GPT-4 for content creation</li>
                <li>Screaming Frog for technical audits</li>
                <li>Ahrefs API for competitive analysis</li>
            </ul>
            
            <h4>Service Packages:</h4>
            <ol>
                <li><strong>Basic:</strong> Keyword research + content optimization ($500-1,000/month)</li>
                <li><strong>Standard:</strong> Full SEO audit + ongoing optimization ($1,500-3,000/month)</li>
                <li><strong>Premium:</strong> Complete SEO management + content creation ($3,000-8,000/month)</li>
            </ol>
            
            <h4>Results to Deliver:</h4>
            <p>20-100% increase in organic traffic within 3-6 months, improved keyword rankings, and higher conversion rates.</p>
        `
    },
    {
        id: 6,
        title: "AI Course Creation Platform",
        description: "Build and sell online courses using AI to create content, quizzes, and interactive elements.",
        icon: "🎓",
        tag: "Education",
        content: `
            <h3>AI Course Creation Platform</h3>
            <img src="https://via.placeholder.com/400x200/f093fb/ffffff?text=AI+Course+Platform" alt="AI Course Platform" style="width: 100%; border-radius: 10px; margin: 15px 0;">
            <p><strong>Business Model:</strong> Create and sell online courses using AI to generate content, assessments, and personalized learning experiences.</p>
            
            <h4>AI-Enhanced Features:</h4>
            <ul>
                <li>Automated course content generation</li>
                <li>Personalized learning paths</li>
                <li>AI-generated quizzes and assessments</li>
                <li>Intelligent tutoring and feedback</li>
                <li>Voice-over generation for videos</li>
                <li>Translation for global markets</li>
            </ul>
            
            <h4>Course Topics to Create:</h4>
            <ul>
                <li>AI and machine learning basics</li>
                <li>Digital marketing automation</li>
                <li>Business process optimization</li>
                <li>Data analysis for beginners</li>
                <li>AI tools for productivity</li>
            </ul>
            
            <h4>Technology Stack:</h4>
            <ul>
                <li>Learning Management System (LMS)</li>
                <li>GPT-4 for content generation</li>
                <li>Text-to-speech AI for narration</li>
                <li>Video editing AI tools</li>
                <li>Payment processing integration</li>
            </ul>
            
            <h4>Revenue Streams:</h4>
            <p>Course sales ($49-$497 per course), subscription model ($29-$99/month), corporate training packages ($5K-$50K), and affiliate commissions.</p>
        `
    },
    {
        id: 7,
        title: "AI Social Media Management",
        description: "Automate social media posting, engagement, and analytics using AI-powered tools.",
        icon: "📱",
        tag: "Social Media",
        content: `
            <h3>AI Social Media Management Service</h3>
            <img src="https://via.placeholder.com/400x200/4facfe/ffffff?text=AI+Social+Media" alt="AI Social Media" style="width: 100%; border-radius: 10px; margin: 15px 0;">
            <p><strong>Business Model:</strong> Manage social media accounts for businesses using AI tools for content creation, scheduling, engagement, and performance analysis.</p>
            
            <h4>AI-Powered Services:</h4>
            <ul>
                <li>Automated content creation and curation</li>
                <li>Optimal posting time analysis</li>
                <li>Hashtag research and optimization</li>
                <li>Automated responses to comments/DMs</li>
                <li>Influencer identification and outreach</li>
                <li>Performance analytics and reporting</li>
            </ul>
            
            <h4>AI Tools & Platforms:</h4>
            <ul>
                <li>Buffer/Hootsuite for scheduling</li>
                <li>GPT-4 for content generation</li>
                <li>Canva AI for image creation</li>
                <li>Social listening tools</li>
                <li>Analytics platforms (Sprout Social)</li>
            </ul>
            
            <h4>Service Packages:</h4>
            <ol>
                <li><strong>Starter:</strong> 3 platforms, 15 posts/week ($800-1,200/month)</li>
                <li><strong>Growth:</strong> 5 platforms, 25 posts/week + engagement ($1,500-2,500/month)</li>
                <li><strong>Enterprise:</strong> Full management + ads + reporting ($3,000-8,000/month)</li>
            </ol>
            
            <h4>Client Results:</h4>
            <p>50-200% increase in engagement, 30-100% growth in followers, improved brand awareness, and higher conversion rates from social traffic.</p>
        `
    },
    {
        id: 8,
        title: "AI-Powered E-commerce Tools",
        description: "Develop AI solutions for online stores: product recommendations, pricing, inventory management.",
        icon: "🛒",
        tag: "E-commerce",
        content: `
            <h3>AI-Powered E-commerce Tools</h3>
            <img src="https://via.placeholder.com/400x200/43e97b/ffffff?text=AI+E-commerce+Tools" alt="AI E-commerce Tools" style="width: 100%; border-radius: 10px; margin: 15px 0;">
            <p><strong>Business Model:</strong> Create AI-powered tools and solutions to help e-commerce businesses optimize their operations, increase sales, and improve customer experience.</p>
            
            <h4>AI Solutions to Offer:</h4>
            <ul>
                <li>Personalized product recommendations</li>
                <li>Dynamic pricing optimization</li>
                <li>Inventory management and forecasting</li>
                <li>Customer service chatbots</li>
                <li>Review analysis and insights</li>
                <li>Fraud detection systems</li>
            </ul>
            
            <h4>Target Platforms:</h4>
            <ul>
                <li>Shopify stores</li>
                <li>WooCommerce websites</li>
                <li>Amazon sellers</li>
                <li>Custom e-commerce platforms</li>
                <li>Marketplace sellers (eBay, Etsy)</li>
            </ul>
            
            <h4>Technology Implementation:</h4>
            <ul>
                <li>Machine learning for recommendations</li>
                <li>API integrations with platforms</li>
                <li>Real-time data processing</li>
                <li>Cloud-based solutions (AWS/Google)</li>
                <li>Dashboard analytics interfaces</li>
            </ul>
            
            <h4>Revenue Models:</h4>
            <p>SaaS subscriptions ($99-$999/month), custom development projects ($5K-$50K), revenue sharing (2-5% of increased sales), and enterprise licenses.</p>
        `
    },
    {
        id: 9,
        title: "AI Writing & Translation Service",
        description: "Offer professional writing and translation services enhanced by AI for speed and accuracy.",
        icon: "🌍",
        tag: "Language Services",
        content: `
            <h3>AI Writing & Translation Service</h3>
            <img src="https://via.placeholder.com/400x200/fa709a/ffffff?text=AI+Writing+Translation" alt="AI Writing Translation" style="width: 100%; border-radius: 10px; margin: 15px 0;">
            <p><strong>Business Model:</strong> Provide high-quality writing and translation services using AI tools to deliver faster, more accurate, and cost-effective solutions for businesses and individuals.</p>
            
            <h4>Services to Offer:</h4>
            <ul>
                <li>Document translation (50+ languages)</li>
                <li>Website localization</li>
                <li>Technical writing and documentation</li>
                <li>Creative writing for marketing</li>
                <li>Academic and research writing</li>
                <li>Proofreading and editing</li>
            </ul>
            
            <h4>AI Tools & Process:</h4>
            <ul>
                <li>GPT-4 for initial translations/writing</li>
                <li>DeepL for accurate translations</li>
                <li>Grammarly for editing and proofreading</li>
                <li>Human review for quality assurance</li>
                <li>CAT tools for consistency</li>
            </ul>
            
            <h4>Competitive Advantages:</h4>
            <ul>
                <li>50-70% faster delivery than traditional services</li>
                <li>30-50% lower costs while maintaining quality</li>
                <li>24/7 availability for urgent projects</li>
                <li>Consistency across large projects</li>
                <li>Scalability for enterprise clients</li>
            </ul>
            
            <h4>Pricing Structure:</h4>
            <p>Translation: $0.10-0.25 per word, Writing: $50-150 per page, Rush jobs: 50% premium, Volume discounts: 20-40% off.</p>
        `
    },
    {
        id: 10,
        title: "AI Consulting & Training",
        description: "Help businesses adopt AI technologies through consulting, training, and implementation services.",
        icon: "💡",
        tag: "Consulting",
        content: `
            <h3>AI Consulting & Training Service</h3>
            <img src="https://via.placeholder.com/400x200/a8caba/ffffff?text=AI+Consulting+Training" alt="AI Consulting Training" style="width: 100%; border-radius: 10px; margin: 15px 0;">
            <p><strong>Business Model:</strong> Help businesses understand, adopt, and implement AI technologies through strategic consulting, hands-on training, and custom implementation services.</p>
            
            <h4>Consulting Services:</h4>
            <ul>
                <li>AI readiness assessment</li>
                <li>AI strategy development</li>
                <li>Technology selection and implementation</li>
                <li>Process automation identification</li>
                <li>ROI analysis and measurement</li>
                <li>Change management support</li>
            </ul>
            
            <h4>Training Programs:</h4>
            <ul>
                <li>AI fundamentals for executives</li>
                <li>Hands-on AI tools workshops</li>
                <li>Custom team training sessions</li>
                <li>Online certification courses</li>
                <li>Industry-specific AI applications</li>
            </ul>
            
            <h4>Target Markets:</h4>
            <ul>
                <li>Small to medium businesses (SMBs)</li>
                <li>Professional service firms</li>
                <li>Manufacturing companies</li>
                <li>Healthcare organizations</li>
                <li>Educational institutions</li>
            </ul>
            
            <h4>Revenue Streams:</h4>
            <p>Hourly consulting ($150-500/hour), project-based work ($5K-100K), training programs ($1K-10K per session), retainer agreements ($5K-25K/month).</p>
        `
    }
];

// Application state
let clicksRemaining = 20;
let isMember = false;

// DOM elements
const tileGrid = document.getElementById('tileGrid');
const clicksRemainingElement = document.getElementById('clicksRemaining');
const contentModal = document.getElementById('contentModal');
const membershipModal = document.getElementById('membershipModal');
const paymentModal = document.getElementById('paymentModal');

// Initialize the application
function init() {
    loadClicksFromStorage();
    renderTiles();
    updateClickCounter();
    setupEventListeners();
}

// Load clicks from localStorage
function loadClicksFromStorage() {
    const savedClicks = localStorage.getItem('businessApp_clicksRemaining');
    const memberStatus = localStorage.getItem('businessApp_isMember');
    
    if (savedClicks !== null) {
        clicksRemaining = parseInt(savedClicks);
    }
    
    if (memberStatus === 'true') {
        isMember = true;
        clicksRemaining = 999; // Unlimited for members
    }
}

// Save clicks to localStorage
function saveClicksToStorage() {
    localStorage.setItem('businessApp_clicksRemaining', clicksRemaining.toString());
    localStorage.setItem('businessApp_isMember', isMember.toString());
}

// Render business tiles
function renderTiles() {
    tileGrid.innerHTML = '';
    
    businessIdeas.forEach(idea => {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.innerHTML = `
            <div class="tile-image">
                ${idea.icon}
            </div>
            <div class="tile-content">
                <div class="tile-title">${idea.title}</div>
                <div class="tile-description">${idea.description}</div>
                <div class="tile-tag">${idea.tag}</div>
            </div>
        `;
        
        tile.addEventListener('click', () => handleTileClick(idea));
        tileGrid.appendChild(tile);
    });
}

// Handle tile click
function handleTileClick(idea) {
    if (!isMember && clicksRemaining <= 0) {
        showMembershipModal();
        return;
    }
    
    if (!isMember) {
        clicksRemaining--;
        updateClickCounter();
        saveClicksToStorage();
        
        if (clicksRemaining === 4) {
            showLimitWarning();
        }
    }
    
    showContentModal(idea);
}

// Update click counter display
function updateClickCounter() {
    if (isMember) {
        clicksRemainingElement.parentElement.innerHTML = '<span style="color: #48bb78;">✓ Premium Member</span>';
    } else {
        clicksRemainingElement.textContent = clicksRemaining;
        
        if (clicksRemaining <= 5) {
            clicksRemainingElement.parentElement.style.background = '#e53e3e';
        } else if (clicksRemaining <= 10) {
            clicksRemainingElement.parentElement.style.background = '#ff8c00';
        }
    }
}

// Show warning when approaching limit
function showLimitWarning() {
    const warning = document.createElement('div');
    warning.innerHTML = `
        <div style="position: fixed; top: 20px; right: 20px; background: #ff8c00; color: white; padding: 15px; border-radius: 10px; z-index: 2000; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
            <strong>Warning!</strong> Only ${clicksRemaining} clicks remaining. <a href="#" onclick="showMembershipModal(); this.parentElement.parentElement.remove();" style="color: white; text-decoration: underline;">Become a member</a> for unlimited access.
        </div>
    `;
    document.body.appendChild(warning);
    
    setTimeout(() => {
        if (warning.parentElement) {
            warning.remove();
        }
    }, 5000);
}

// Show content modal
function showContentModal(idea) {
    document.getElementById('modalTitle').textContent = idea.title;
    document.getElementById('modalBody').innerHTML = idea.content;
    contentModal.style.display = 'block';
}

// Show membership modal
function showMembershipModal() {
    membershipModal.style.display = 'block';
}

// Show payment modal
function showPaymentModal(plan) {
    paymentModal.style.display = 'block';
    document.getElementById('paymentStatus').textContent = `Processing ${plan} membership payment...`;
}

// Setup event listeners
function setupEventListeners() {
    // Close modal events
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('close')) {
            contentModal.style.display = 'none';
            membershipModal.style.display = 'none';
            paymentModal.style.display = 'none';
        }
        
        if (e.target === contentModal) {
            contentModal.style.display = 'none';
        }
        
        if (e.target === membershipModal) {
            membershipModal.style.display = 'none';
        }
        
        if (e.target === paymentModal) {
            paymentModal.style.display = 'none';
        }
    });
    
    // Payment button events
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('pay-btn')) {
            const plan = e.target.getAttribute('data-plan');
            if (plan) {
                membershipModal.style.display = 'none';
                showPaymentModal(plan);
            }
        }
    });
    
    // Simulate payment success
    document.getElementById('simulatePayment').addEventListener('click', () => {
        document.getElementById('paymentStatus').innerHTML = `
            <div class="success-message">
                <strong>Payment Successful!</strong><br>
                Welcome to Premium Membership! You now have unlimited access to all business ideas and content.
            </div>
        `;
        
        // Update membership status
        isMember = true;
        clicksRemaining = 999;
        updateClickCounter();
        saveClicksToStorage();
        
        setTimeout(() => {
            paymentModal.style.display = 'none';
        }, 3000);
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            contentModal.style.display = 'none';
            membershipModal.style.display = 'none';
            paymentModal.style.display = 'none';
        }
    });
}

// Make showMembershipModal globally available for onclick
window.showMembershipModal = showMembershipModal;

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);