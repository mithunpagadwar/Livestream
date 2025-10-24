# AI Companion App

## Overview
यह एक real-time voice conversation AI app है जो ElevenLabs Conversational AI SDK का उपयोग करता है। User अपनी photo के साथ एक AI companion से live बात कर सकते हैं, जैसे South Indian movie "Iru Mugan" में दिखाया गया है।

## Tech Stack
- **Frontend**: React + Vite
- **AI Voice**: ElevenLabs Conversational AI SDK
- **Styling**: Custom CSS with animations
- **Language**: JavaScript/JSX

## Features
- ✅ Real-time voice conversation with AI
- ✅ User's photo as AI avatar
- ✅ Visual effects when AI is speaking (glow, pulse animations)
- ✅ Hindi/Devanagari interface
- ✅ Status indicators for connection and speaking
- ✅ Mobile-responsive design

## Project Structure
```
ai-companion/
├── src/
│   ├── assets/
│   │   └── user-photo.jpg      # User's photo
│   ├── App.jsx                  # Main application component
│   ├── App.css                  # Styling with animations
│   └── main.jsx                 # Entry point
├── vite.config.js               # Vite configuration
└── package.json
```

## Setup Instructions

### 1. ElevenLabs Account Setup
1. https://elevenlabs.io पर जाएं
2. Free account बनाएं
3. Dashboard → Conversational AI section में जाएं
4. नया Agent बनाएं और configure करें
5. Agent ID को copy करें

### 2. API Key Configuration
- Environment variable `ELEVENLABS_API_KEY` पहले से configured है
- यह automatically app में use होगी

### 3. Agent ID Setup
- App को open करने पर setup screen दिखेगा
- ElevenLabs से copy किया हुआ Agent ID paste करें
- "जारी रखें" button दबाएं

## How to Use
1. Setup screen पर Agent ID डालें
2. "बात शुरू करें" button click करें
3. माइक permission दें (browser में)
4. AI से बात करें - वह सुनेगा और जवाब देगा
5. जब बात बंद करनी हो, "बात बंद करें" दबाएं

## Visual Effects
- **Connection Status**: Green (connected) / Red (disconnected)
- **Speaking Indicator**: Purple badge shows when AI is speaking
- **Avatar Glow**: Photo glows with purple hue when AI speaks
- **Pulse Rings**: Animated rings appear around photo during speech

## Environment Variables
- `ELEVENLABS_API_KEY`: ElevenLabs API key (required)

## Recent Changes (October 23, 2025)
- Initial project setup
- Integrated ElevenLabs React SDK
- Created voice-controlled AI companion interface
- Added visual effects and animations
- Configured Vite for Replit environment (port 5000, allowed hosts)

## User Preferences
- Language: Hindi (हिंदी) interface preferred
- Feature inspiration: South Indian movie "Iru Mugan" AI companion concept
- Visual style: Modern, gradient backgrounds, animated effects
