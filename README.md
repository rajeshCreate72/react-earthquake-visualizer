# Earthquake Visualizer

A simple interactive earthquake visualizer built with **React**, **TypeScript**, **Vite**, and **React-Leaflet**.  
It fetches live earthquake data from the USGS GeoJSON API and displays earthquake locations on a map with dynamic markers based on magnitude.

---

## 🚀 Features

- Interactive Leaflet map with zoom and pan functionality  
- Displays earthquake markers dynamically from live USGS GeoJSON API  
- Marker size and color reflect earthquake magnitude  
- Popups show earthquake details (location, magnitude, time)  
- Scroll wheel zoom enabled via `whenCreated`

---

## ⚡ Tech Stack

- React + TypeScript  
- Vite for fast build & development  
- React-Leaflet (Leaflet bindings for React)  
- USGS Earthquake GeoJSON API

---

## ⚙️ Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/earthquake-visualizer.git
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```

---

## 🌐 Earthquake Data API

Data is fetched from the USGS GeoJSON feed (all earthquakes in the past day):


---

## 📁 Project Structure

src/
├── components/
│ └── Map.tsx # Main map component with earthquake logic
├── App.tsx # Entry point of the app
├── main.tsx # Vite entry file
└── index.css # Global styles


---

## ⚡ Notes

- Uses `whenCreated` prop to configure map behavior (e.g., scroll wheel zoom)  
- Markers are dynamically sized and colored based on magnitude  
- Suitable starting point for adding filters, legends, or animations

