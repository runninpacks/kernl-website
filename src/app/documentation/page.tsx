'use client';

import Navigation from '@/components/Navigation';

export default function DocumentationPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />

      {/* Main Content */}
      <main className="px-4 sm:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Documentation
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            KERNL Whitepaper - The Protocol for On-Chain Community Management
          </p>
        </div>

        {/* Documentation Content */}
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 mb-8 border border-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-orange-500">
              KERNL: The Protocol for On-Chain Community Management
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-400 mb-6">
              <span>Date: July 12, 2025</span>
              <span>Version: 1.0</span>
            </div>
          </div>

          {/* Abstract */}
          <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 mb-8 border border-gray-800">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">Abstract</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              This whitepaper presents KERNL, a crypto-native Customer Relationship Management (CRM) platform engineered specifically for the unique demands of token teams and Decentralized Autonomous Organizations (DAOs). Unlike traditional Web2 CRMs, KERNL operates as a self-contained, trustless system that leverages real-time on-chain data streams to provide comprehensive insights into token holder behavior, reputation, and engagement. The platform's core architecture facilitates advanced holder segmentation, dynamic reputation scoring (Symbol Score), and highly targeted airdrop campaigns, all without relying on off-chain dependencies. KERNL's mission is to empower on-chain communities with the tools required to foster sustainable growth, enhance governance, and drive meaningful participant engagement.
            </p>
          </div>

          {/* Section 1: Introduction */}
          <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 mb-8 border border-gray-800">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">1. Introduction: The Evolving Challenge of On-Chain Engagement</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              The proliferation of digital assets and decentralized protocols has given rise to a new paradigm of community interaction. Token teams and DAOs face a critical challenge: managing and engaging a community whose identity and activity are primarily defined by a series of cryptographic transactions on a public ledger. Traditional community management tools are fundamentally ill-equipped to address this, as they rely on centralized, off-chain data that is siloed and often incomplete.
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              The need for a sophisticated, data-driven solution is paramount. A system is required that can:
            </p>
            <ol className="list-decimal list-inside text-gray-300 text-sm sm:text-base space-y-2 ml-4">
              <li>Ingest and interpret raw on-chain data in real-time.</li>
              <li>Translate granular wallet activity into actionable community insights.</li>
              <li>Assign meaningful reputation scores to participants based on their contributions.</li>
              <li>Automate community-centric actions, such as airdrops and rewards, with precision.</li>
            </ol>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-4">
              KERNL is designed to meet these needs, bridging the gap between raw blockchain data and strategic community management.
            </p>
          </div>

          {/* Section 2: The KERNL Solution */}
          <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 mb-8 border border-gray-800">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">2. The KERNL Solution: Crypto-native CRM</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              KERNL is a crypto-native CRM platform that provides a unified dashboard for token teams and DAOs to manage their communities. By directly analyzing immutable on-chain data, KERNL eliminates the need for manual data aggregation and subjective metrics. The platform's architecture is built on three core pillars:
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-2 ml-4">
              <li><strong>On-Chain Data Ingestion:</strong> A robust data pipeline continuously monitors blockchain activity, capturing every relevant transaction, including token transfers, staking events, and governance votes.</li>
              <li><strong>Analytical Engine:</strong> The ingested data is processed through a proprietary engine that applies advanced algorithms to identify patterns, segment cohorts, and calculate reputation scores.</li>
              <li><strong>User-Centric Interface:</strong> A clean, intuitive dashboard provides a real-time overview of community health, offering a granular view of wallet activity and holder profiles.</li>
            </ul>
          </div>

          {/* Section 3: Core Architectural Framework */}
          <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 mb-8 border border-gray-800">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">3. Core Architectural Framework</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              The KERNL platform's operational model can be conceptualized as a feedback loop.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-orange-500">1. Data Ingestion:</h4>
                <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-2 ml-4">
                  <li>The system utilizes a low-latency, multi-chain data synchronization protocol to pull raw transaction data from supported blockchains (e.g., Solana, Ethereum).</li>
                  <li>Data is stored in a non-relational, distributed database optimized for high-throughput query processing.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-orange-500">2. Reputation and Scoring Engine:</h4>
                <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-2 ml-4">
                  <li>This component is the intellectual core of KERNL. It calculates a quantitative metric, the Symbol Score, for each wallet address.</li>
                  <li>The Symbol Score is a weighted aggregate of multiple behavioral vectors, defined by the formula:</li>
                </ul>
                <div className="bg-gray-800 rounded-lg p-4 my-4 font-mono text-sm overflow-x-auto">
                  <code className="text-orange-500">
                    Symbol Score = Σ(i=1 to n) w_i · V_i
                  </code>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  where V_i represents a behavioral vector (e.g., holding duration, voting frequency, staking amount) and w_i is its corresponding weighting coefficient. The weights are adjustable by the token team to align with specific community values.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-orange-500">3. Segmentation and Targeting Layer:</h4>
                <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-2 ml-4">
                  <li>Based on the output of the Analytical Engine, this layer automatically groups wallets into distinct behavioral cohorts. Examples include:</li>
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    <li><strong>Whales:</strong> Top holders by token balance.</li>
                    <li><strong>Diamond Hands:</strong> Holders with long-term, non-selling behavior.</li>
                    <li><strong>Voters:</strong> Wallets actively participating in governance proposals.</li>
                  </ul>
                  <li>This segmentation provides the foundation for executing targeted campaigns.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4: Key Functionalities */}
          <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 mb-8 border border-gray-800">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">4. Key Functionalities</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-orange-500">4.1. Wallet Behavior Tracking</h4>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  KERNL provides a real-time stream of wallet activity, allowing teams to monitor buying, selling, staking, and governance participation. This granular data is presented in a clear, interactive dashboard, enabling immediate identification of active community members versus passive spectators.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-orange-500">4.2. Holder Segmentation</h4>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-2">
                  The platform's segmentation engine allows for the creation of custom holder cohorts based on a wide range of on-chain data points. This functionality goes beyond simple token balances to include:
                </p>
                <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-1 ml-4">
                  <li>Holding duration</li>
                  <li>Voting activity</li>
                  <li>Staking volume</li>
                  <li>Interaction with other ecosystem protocols</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-orange-500">4.3. Symbol Score: The On-Chain Reputation Metric</h4>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  The Symbol Score is a non-financial reputation metric that quantifies a wallet's value to the community. By assigning a score based on verifiable on-chain actions, KERNL provides a transparent and objective measure of contribution, engagement, and loyalty.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-orange-500">4.4. Airdrop Targeting & Automation</h4>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-2">
                  KERNL automates the process of targeted airdrops, ensuring that rewards are distributed to the most valuable community members. Teams can define precise eligibility criteria using the Symbol Score and other segmentation metrics. For example, an airdrop could be configured to target:
                </p>
                <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-1 ml-4">
                  <li>Wallets in the top 15% by Symbol Score.</li>
                  <li>Addresses that have participated in at least two governance votes.</li>
                  <li>Long-term holders ("Diamond Hands").</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-orange-500">4.5. DAO Governance Tracking</h4>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  KERNL offers dedicated tools for monitoring and visualizing DAO governance activities. It tracks proposal creation, voting patterns, and voter turnout, providing insights into the health and decentralization of the governance process.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-orange-500">4.6. Engagement Funnels</h4>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  This feature visualizes the user journey from an initial interaction (e.g., minting an NFT) to a desired end-state (e.g., staking tokens). It provides detailed conversion tracking, allowing teams to optimize community initiatives and identify friction points.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Conclusion */}
          <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 mb-8 border border-gray-800">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">5. Conclusion</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              KERNL represents a significant leap forward in on-chain community management. By providing a crypto-native CRM that operates entirely on trustless, verifiable data, KERNL empowers token teams and DAOs to build stronger, more engaged, and more transparent communities. As the Web3 ecosystem matures, platforms like KERNL will become an indispensable tool for anyone seeking to understand, grow, and reward their on-chain community with unparalleled precision and effectiveness.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 