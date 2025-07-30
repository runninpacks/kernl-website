Convert the below HTML/CSS code into React components:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Novan.ai - AI Solutions for the modern team</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script type="module">
        import { Zap, Plus, TrendingUp, ThumbsUp } from 'lucide-react';
    </script>
</head>
<body class="bg-black text-white min-h-screen">
    <!-- Header Navigation -->
    <header class="flex items-center justify-between px-8 py-6">
        <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded flex items-center justify-center">
                <span class="text-white font-bold text-sm">N</span>
            </div>
            <span class="text-white font-semibold text-xl">novan.ai</span>
        </div>
        
        <nav class="flex items-center space-x-8">
            <a href="#" class="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#" class="text-gray-300 hover:text-white transition-colors">Integration</a>
            <a href="#" class="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#" class="text-gray-300 hover:text-white transition-colors">Resources</a>
            <a href="#" class="text-gray-300 hover:text-white transition-colors">Contact us</a>
            <a href="#" class="text-gray-300 hover:text-white transition-colors">Reviews</a>
            <a href="#" class="text-gray-300 hover:text-white transition-colors">Tokenomics</a>
        </nav>
        
        <button class="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Sign up
        </button>
    </header>

    <!-- Main Content -->
    <main class="flex flex-col items-center justify-center px-8 py-16">
        <!-- Trial Banner -->
        <div class="mb-12">
            <div class="border border-gray-700 rounded-full px-4 py-2 flex items-center space-x-2">
                <span class="text-gray-300">14 days free trial</span>
                <span class="text-orange-500">Grab it now</span>
            </div>
        </div>

        <!-- Hero Section -->
        <div class="text-center max-w-4xl mb-16">
            <h1 class="text-6xl font-bold mb-8 leading-tight">
                AI Solutions for the<br>
                modern team
            </h1>
            <p class="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Empower your business with intelligent tools for content, automation, and decision-making—all in one platform.
            </p>
            <button class="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25">
                Try it for free
            </button>
        </div>

        <!-- Dashboard Preview -->
        <div class="flex space-x-4 max-w-6xl w-full">
            <!-- Left Panel -->
            <div class="bg-white rounded-2xl p-6 flex-1 text-black">
                <!-- Chart Section -->
                <div class="mb-6">
                    <div class="space-y-4">
                        <div class="flex items-center justify-between">
                            <span class="text-gray-600">Lower</span>
                            <div class="flex-1 mx-4 bg-gray-200 rounded-full h-2 relative">
                                <div class="absolute right-4 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full"></div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-gray-600">Medium</span>
                            <div class="flex-1 mx-4 bg-gray-200 rounded-full h-2 relative">
                                <div class="absolute left-8 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-white bg-blue-500 px-4 py-2 rounded-full">Lower</span>
                            <div class="flex-1 mx-4 bg-blue-500 rounded-full h-8 relative">
                                <div class="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-white bg-orange-500 px-4 py-2 rounded-full">Upper</span>
                            <div class="flex-1 mx-4 bg-orange-500 rounded-full h-8 relative">
                                <div class="absolute right-8 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Achievement Section -->
                <div class="bg-gray-50 rounded-xl p-4 flex items-start space-x-3">
                    <div class="w-8 h-8 bg-blue-500 rounded flex items-center justify-center flex-shrink-0">
                        <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/>
                        </svg>
                    </div>
                    <div>
                        <p class="text-gray-800 font-medium">
                            You're outranking 83% of the companies in your cohort. great jobs!
                        </p>
                    </div>
                </div>
            </div>

            <!-- Right Panel -->
            <div class="flex flex-col space-y-4 flex-1">
                <!-- KPI Card -->
                <div class="bg-white rounded-2xl p-6 text-black">
                    <h3 class="text-gray-600 mb-2">Team KPIs rate</h3>
                    <div class="flex items-center justify-between">
                        <span class="text-2xl font-bold bg-gray-100 px-3 py-1 rounded">6.5%</span>
                        <div class="flex space-x-2">
                            <div class="w-6 h-6 bg-orange-500 rounded"></div>
                            <div class="w-6 h-6 bg-blue-500 rounded"></div>
                        </div>
                    </div>
                </div>

                <!-- Status Cards -->
                <div class="bg-white rounded-2xl p-6 text-black">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center space-x-2">
                            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                            </svg>
                            <span class="text-gray-600 italic">New Onboard</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                                </svg>
                            </div>
                            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                            </svg>
                            <span class="text-gray-600 italic">Hiring</span>
                        </div>
                    </div>
                    
                    <div class="flex items-center justify-center mb-4">
                        <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                            </svg>
                        </div>
                    </div>
                    
                    <div class="flex items-center space-x-2">
                        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                        <span class="text-gray-600 italic">Productivity</span>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>
</html>
```