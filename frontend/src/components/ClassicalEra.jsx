// ClassicalEra.jsx
import React from 'react';
import '../styles/ClassicalEra.css';

const ClassicalEra = () => {
  return (
    <div className="cls-era-container">
      <div className="cls-era-scroll-indicator" id="cls-era-scroll-indicator"></div>

      <div className="cls-era-scroll-indicator">
        <div className="cls-era-scroll-progress" id="clsEraScrollProgress"></div>
      </div>

      <div className="cls-era-header">
        <div className="cls-era-container-inner">
          <h1 className="cls-era-title">The Classical Era</h1>
          <p className="cls-era-subtitle">Foundations of Human Civilization</p>
          <p className="cls-era-hero-period">8th Century BCE - 6th Century CE</p>
        </div>
      </div>

      <div className="cls-era-nav">
        <div className="cls-era-container-inner">
          <div className="cls-era-nav-links">
            <a href="#introduction">Introduction</a>
            <a href="#stages">Major Stages</a>
            <a href="#achievements">Key Achievements</a>
            <a href="#relevance">Modern Relevance</a>
          </div>
        </div>
      </div>

      <div className="cls-era-main">
        <div className="cls-era-container-inner">
          <div className="cls-era-section" id="introduction">
            <h2>Introduction</h2>
            <div className="cls-era-intro-highlight">
              The Classical Era represents one of humanity's most transformative periods, laying the intellectual, political, and cultural foundations that continue to shape our world today.
            </div>
            
            <p>The Classical Era, spanning roughly from the 8th century BCE to the 6th century CE, marks a pivotal period in human history when civilizations across the globe reached unprecedented heights of cultural, intellectual, and political achievement. This era witnessed the rise of philosophy, democracy, literature, and scientific inquiry that would influence human thought for millennia.</p>

            <p>During this remarkable period, great empires flourished from the Mediterranean to East Asia, each contributing unique innovations to the tapestry of human civilization. The Greeks gave us philosophy and democracy, the Romans perfected law and engineering, while civilizations in China, India, and Persia developed their own sophisticated systems of thought, governance, and culture.</p>

            <div className="cls-era-image-grid">
              <div className="cls-era-image-card">
                <div className="cls-era-image-placeholder"><img src='images/parthenon.jpeg'></img></div>
                <h4>Greek Architecture</h4>
                <p>Timeless principles of beauty and proportion</p>
              </div>
              <div className="cls-era-image-card">
                <div className="cls-era-image-placeholder"><img src='images/roman_forum.jpeg'></img></div>
                <h4>Roman Engineering</h4>
                <p>Monumental construction and urban planning</p>
              </div>
              <div className="cls-era-image-card">
                <div className="cls-era-image-placeholder"><img src='images/chinese_tera.jpeg'></img></div>
                <h4>Eastern Civilizations</h4>
                <p>Sophisticated art and military organization</p>
              </div>
            </div>

            <p>What makes the Classical Era truly remarkable is not just the individual achievements of these civilizations, but how their ideas, technologies, and cultural practices spread and influenced each other through trade, conquest, and cultural exchange. This interconnectedness created a foundation of shared human knowledge that transcends any single culture or region.</p>
          </div>

          <div className="cls-era-section" id="stages">
            <h2>Major Stages</h2>
            <p>The Classical Era unfolded through distinct phases, each marked by significant political, cultural, and intellectual developments that built upon previous achievements while introducing revolutionary new concepts.</p>

            <div className="cls-era-timeline">
              <div className="cls-era-timeline-item">
                <div className="cls-era-timeline-date">8th - 6th Century BCE</div>
                <h3>Archaic Period & Early Classical Formation</h3>
                <p>The emergence of Greek city-states, the founding of Rome, and the establishment of major philosophical schools. This period saw the codification of laws, the development of early democratic institutions, and the flourishing of epic poetry with works like Homer's Iliad and Odyssey.</p>
              </div>

              <div className="cls-era-timeline-item">
                <div className="cls-era-timeline-date">5th - 4th Century BCE</div>
                <h3>High Classical Period</h3>
                <p>The golden age of Athens under Pericles, the height of Greek philosophy with Socrates, Plato, and Aristotle, and the conquests of Alexander the Great. This era produced timeless works of art, literature, and established fundamental principles of Western thought and governance.</p>
              </div>

              <div className="cls-era-timeline-item">
                <div className="cls-era-timeline-date">3rd Century BCE - 2nd Century CE</div>
                <h3>Hellenistic and Early Imperial Period</h3>
                <p>The spread of Greek culture across the known world, the rise of the Roman Republic and early Empire, and significant developments in science, mathematics, and engineering. This period saw unprecedented cultural synthesis and technological advancement.</p>
              </div>

              <div className="cls-era-timeline-item">
                <div className="cls-era-timeline-date">3rd - 6th Century CE</div>
                <h3>Late Classical and Transitional Period</h3>
                <p>The later Roman Empire, the rise of Christianity, and the emergence of new political and cultural forms. This period bridges the classical world with the medieval era, preserving and transmitting classical knowledge while adapting to new religious and social realities.</p>
              </div>
            </div>

            <p>Throughout these stages, parallel developments occurred in other parts of the world. China experienced its own classical flowering during the Han Dynasty, India saw the rise of great empires and religious movements, while Persia maintained its role as a bridge between East and West, facilitating cultural and commercial exchange.</p>
          </div>

          <div className="cls-era-section" id="achievements">
            <h2>Key Achievements</h2>
            <p>The Classical Era produced achievements that fundamentally changed human civilization, establishing principles and innovations that continue to influence our world today.</p>

            <div className="cls-era-achievement-grid">
              <div className="cls-era-achievement-card">
                <div className="cls-era-achievement-icon">🏛️</div>
                <h3>Democracy & Governance</h3>
                <p>The development of democratic principles in Athens, the Roman concept of republicanism, and sophisticated legal systems that established the foundation for modern political thought and constitutional government.</p>
              </div>

              <div className="cls-era-achievement-card">
                <div className="cls-era-achievement-icon">🧠</div>
                <h3>Philosophy & Ethics</h3>
                <p>Revolutionary thinking about the nature of reality, ethics, and human existence. Philosophers like Socrates, Plato, Aristotle, Confucius, and Buddha established frameworks for understanding morality, knowledge, and the good life.</p>
              </div>

              <div className="cls-era-achievement-card">
                <div className="cls-era-achievement-icon">📚</div>
                <h3>Literature & Arts</h3>
                <p>Timeless works of literature including epic poetry, drama, and historical writing. The development of artistic principles that emphasized harmony, proportion, and the idealization of human form in sculpture and architecture.</p>
              </div>

              <div className="cls-era-achievement-card">
                <div className="cls-era-achievement-icon">🔬</div>
                <h3>Science & Mathematics</h3>
                <p>Fundamental advances in geometry, astronomy, medicine, and natural philosophy. Figures like Euclid, Archimedes, and Ptolemy established scientific methods and mathematical principles still used today.</p>
              </div>

              <div className="cls-era-achievement-card">
                <div className="cls-era-achievement-icon">🏗️</div>
                <h3>Engineering & Architecture</h3>
                <p>Revolutionary architectural and engineering achievements including the development of concrete, advanced road systems, aqueducts, and monumental buildings that showcased both technical skill and aesthetic vision.</p>
              </div>

              <div className="cls-era-achievement-card">
                <div className="cls-era-achievement-icon">⚖️</div>
                <h3>Law & Justice</h3>
                <p>The codification of legal principles, including Roman law, which became the foundation for legal systems throughout Europe and beyond. The establishment of concepts like due process and legal representation.</p>
              </div>
            </div>

            <h3>Cultural Synthesis and Exchange</h3>
            <p>Perhaps most remarkably, the Classical Era achieved unprecedented levels of cultural synthesis. The conquests of Alexander the Great created a Hellenistic world where Greek, Persian, Egyptian, and Indian cultures merged. Roman expansion further facilitated this exchange, while the Silk Road connected East and West in ways that would shape global culture.</p>

            <p>This period established the concept of cosmopolitanism—the idea that all human beings belong to a single community. This philosophical breakthrough, combined with practical achievements in governance, law, and technology, created a template for civilization that continues to influence human development.</p>
          </div>

          <div className="cls-era-section" id="relevance">
            <h2>Why It Matters Today</h2>
            <p>The Classical Era's influence extends far beyond historical curiosity—it provides the intellectual, political, and cultural DNA of modern civilization.</p>

            <div className="cls-era-relevance-grid">
              <div className="cls-era-relevance-card">
                <h3>Democratic Ideals</h3>
                <p>Modern democratic institutions, concepts of citizenship, and political participation directly trace their origins to classical Greek and Roman innovations in governance and civic engagement.</p>
              </div>

              <div className="cls-era-relevance-card">
                <h3>Legal Foundations</h3>
                <p>Contemporary legal systems worldwide are built upon Roman legal principles, including concepts of justice, legal procedure, and the rule of law that remain central to modern jurisprudence.</p>
              </div>

              <div className="cls-era-relevance-card">
                <h3>Philosophical Framework</h3>
                <p>Classical philosophical inquiries into ethics, politics, metaphysics, and logic continue to shape how we think about fundamental questions of human existence and moral behavior.</p>
              </div>

              <div className="cls-era-relevance-card">
                <h3>Scientific Method</h3>
                <p>The systematic approach to understanding the natural world, developed by classical thinkers, laid the groundwork for modern scientific inquiry and technological advancement.</p>
              </div>

              <div className="cls-era-relevance-card">
                <h3>Cultural Values</h3>
                <p>Classical ideals of beauty, harmony, and human dignity continue to influence art, literature, and cultural expression, providing timeless standards for aesthetic and moral excellence.</p>
              </div>

              <div className="cls-era-relevance-card">
                <h3>Educational Principles</h3>
                <p>The classical emphasis on well-rounded education, critical thinking, and the development of virtue remains central to educational philosophy and practice worldwide.</p>
              </div>
            </div>

            <h3>Contemporary Challenges and Classical Wisdom</h3>
            <p>In our globalized world, classical insights about governance, ethics, and human nature remain remarkably relevant. The challenge of balancing individual freedom with collective responsibility, the tension between local identity and universal values, and the quest for justice in diverse societies—these were central concerns of classical thinkers whose wisdom continues to inform contemporary debates.</p>

            <div className="cls-era-intro-highlight">
              The Classical Era reminds us that human civilization is not inevitable but requires constant cultivation of virtue, wisdom, and civic engagement. Its legacy challenges us to build upon the foundation it provided while addressing the unique challenges of our time.
            </div>

            <p>Understanding the Classical Era is not merely an academic exercise—it's essential for anyone seeking to comprehend the origins of our political systems, legal frameworks, philosophical traditions, and cultural values. In studying this period, we discover not just where we came from, but insights into who we might become as we continue the great human project of building just, beautiful, and sustainable societies.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassicalEra;