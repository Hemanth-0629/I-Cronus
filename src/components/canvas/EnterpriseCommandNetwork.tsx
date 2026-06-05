"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Database, BrainCircuit, Cloud, Activity } from "lucide-react";

const LAYERS = [
  { id: 'data', name: 'ENTERPRISE DATA LAKE', color: '#00D4FF', icon: Database, zIndex: 0 },
  { id: 'ai', name: 'AI ORCHESTRATION LAYER', color: '#A78BFA', icon: BrainCircuit, zIndex: 120 },
  { id: 'cloud', name: 'GLOBAL CLOUD EDGE', color: '#10B981', icon: Cloud, zIndex: 240 }
];

const NODES = [
  { id: 'd1', layer: 0, x: 20, y: 30, type: 'database', label: 'Snowflake' },
  { id: 'd2', layer: 0, x: 70, y: 40, type: 'stream', label: 'Kafka' },
  { id: 'd3', layer: 0, x: 40, y: 70, type: 'lake', label: 'Databricks' },
  
  { id: 'a1', layer: 1, x: 30, y: 30, type: 'agent', label: 'Agent 01' },
  { id: 'a2', layer: 1, x: 80, y: 60, type: 'agent', label: 'Agent 02' },
  { id: 'a3', layer: 1, x: 50, y: 50, type: 'vector', label: 'Vector DB' },

  { id: 'c1', layer: 2, x: 20, y: 20, type: 'region', label: 'us-east-1' },
  { id: 'c2', layer: 2, x: 70, y: 30, type: 'region', label: 'eu-central-1' },
  { id: 'c3', layer: 2, x: 40, y: 80, type: 'region', label: 'ap-south-1' },
];

const CONNECTIONS = [
  { from: 'd1', to: 'a3' },
  { from: 'd2', to: 'a1' },
  { from: 'd3', to: 'a2' },
  { from: 'a3', to: 'a1' },
  { from: 'a3', to: 'a2' },
  { from: 'a1', to: 'c1' },
  { from: 'a2', to: 'c2' },
  { from: 'a2', to: 'c3' },
];

export default function EnterpriseCommandNetwork() {
  const dataPackets = useMemo(() => Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    connection: CONNECTIONS[Math.floor(Math.random() * CONNECTIONS.length)],
    delay: Math.random() * 5,
    duration: 1.5 + Math.random() * 2
  })), []);

  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center overflow-visible">
      {/* Container with 3D perspective */}
      <div 
        className="relative w-[300px] sm:w-[400px] h-[400px]"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'perspective(1200px) rotateX(60deg) rotateZ(-30deg)'
        }}
      >
        {/* Render Layers */}
        {LAYERS.map((layer, idx) => {
          const Icon = layer.icon;
          return (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, translateZ: 0 }}
              animate={{ opacity: 1, translateZ: layer.zIndex }}
              transition={{ duration: 1.5, delay: idx * 0.4, ease: "easeOut" }}
              className="absolute inset-0 border border-white/10 bg-[#050816]/40 backdrop-blur-sm rounded-2xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Layer Grid Background */}
              <div 
                className="absolute inset-0 rounded-2xl"
                style={{
                  backgroundImage: `linear-gradient(${layer.color}20 1px, transparent 1px), linear-gradient(90deg, ${layer.color}20 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                  backgroundPosition: 'center center'
                }}
              />
              
              {/* Layer Title Label (offset to not overlap perfectly) */}
              <div 
                className="absolute -left-6 bottom-4 flex items-center gap-2"
                style={{ transform: 'rotateX(-90deg) rotateY(30deg) translateZ(20px)' }}
              >
                <div className="w-6 h-6 rounded flex items-center justify-center bg-[#020617] border border-white/10" style={{ color: layer.color }}>
                  <Icon size={12} />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-widest whitespace-nowrap text-white/70">
                  {layer.name}
                </span>
              </div>
            </motion.div>
          );
        })}

        {/* Render Nodes within their layers */}
        {NODES.map(node => {
          const layerZ = LAYERS[node.layer].zIndex;
          const color = LAYERS[node.layer].color;
          return (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + (node.layer * 0.3) + Math.random() * 0.5 }}
              className="absolute w-8 h-8 -ml-4 -mt-4 bg-[#050816] border flex items-center justify-center rounded-lg shadow-2xl"
              style={{ 
                left: `${node.x}%`, 
                top: `${node.y}%`, 
                transform: `translateZ(${layerZ + 10}px)`,
                borderColor: color,
                boxShadow: `0 0 20px ${color}30`
              }}
            >
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: color }} />
              
              {/* Floating Node Label */}
              <div 
                className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
                style={{ transform: 'rotateX(-60deg) rotateY(30deg)' }}
              >
                <span className="text-[8px] font-mono whitespace-nowrap px-1.5 py-0.5 rounded bg-[#020617] border border-white/10 text-white/70">
                  {node.label}
                </span>
                <div className="w-px h-3 bg-white/20 mt-1" />
              </div>
            </motion.div>
          );
        })}

        {/* Connections and Packets (SVG Overlay) */}
        <div className="absolute inset-0 pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
          {dataPackets.map(packet => {
            const fromNode = NODES.find(n => n.id === packet.connection.from)!;
            const toNode = NODES.find(n => n.id === packet.connection.to)!;
            const fromZ = LAYERS[fromNode.layer].zIndex;
            const toZ = LAYERS[toNode.layer].zIndex;
            
            return (
              <motion.div
                key={`packet-${packet.id}`}
                initial={{ 
                  left: `${fromNode.x}%`, 
                  top: `${fromNode.y}%`, 
                  translateZ: fromZ + 10,
                  opacity: 0
                }}
                animate={{ 
                  left: [`${fromNode.x}%`, `${toNode.x}%`], 
                  top: [`${fromNode.y}%`, `${toNode.y}%`], 
                  translateZ: [fromZ + 10, toZ + 10],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{ 
                  duration: packet.duration, 
                  repeat: Infinity, 
                  delay: packet.delay,
                  ease: "easeInOut"
                }}
                className="absolute w-1.5 h-1.5 -ml-[3px] -mt-[3px] bg-white rounded-full shadow-[0_0_10px_#fff] z-50"
              />
            );
          })}

          {/* Static connection lines */}
          <svg className="absolute inset-0 w-full h-full overflow-visible" style={{ transform: 'translateZ(0)' }}>
            {CONNECTIONS.map((conn, i) => {
              const fromNode = NODES.find(n => n.id === conn.from)!;
              const toNode = NODES.find(n => n.id === conn.to)!;
              if(fromNode.layer === toNode.layer) {
                // Intra-layer lines can just be 2D SVG lines translated to that Z
                const layerZ = LAYERS[fromNode.layer].zIndex;
                return (
                  <motion.line
                    key={`line-${i}`}
                    x1={`${fromNode.x}%`}
                    y1={`${fromNode.y}%`}
                    x2={`${toNode.x}%`}
                    y2={`${toNode.y}%`}
                    stroke={LAYERS[fromNode.layer].color}
                    strokeWidth="1"
                    strokeOpacity="0.2"
                    initial={{ strokeDasharray: "0 100", opacity: 0 }}
                    animate={{ strokeDasharray: "100 100", opacity: 1 }}
                    transition={{ duration: 2 }}
                    style={{ transform: `translateZ(${layerZ}px)` }}
                  />
                );
              }
              return null; // Inter-layer lines are tricky in pure SVG + translateZ, relying on data packets to show inter-layer data flow
            })}
          </svg>
        </div>
      </div>

      {/* Floating UI Elements (Non-3D) */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 right-6 bg-[#050816]/90 border border-white/10 p-4 rounded backdrop-blur-md z-30"
      >
        <div className="text-[9px] font-mono text-[#00D4FF] uppercase tracking-widest flex items-center gap-2 mb-3">
          <Activity size={12} className="text-[#00D4FF]" />
          System Telemetry
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
          <div>
            <div className="text-[9px] uppercase font-mono text-[#A0A0B8]">Ingestion</div>
            <div className="text-white font-mono">1.4TB/s</div>
          </div>
          <div>
            <div className="text-[9px] uppercase font-mono text-[#A0A0B8]">Global Latency</div>
            <div className="text-white font-mono">12ms</div>
          </div>
          <div>
            <div className="text-[9px] uppercase font-mono text-[#A0A0B8]">Active Agents</div>
            <div className="text-white font-mono">4,092</div>
          </div>
          <div>
            <div className="text-[9px] uppercase font-mono text-[#A0A0B8]">Regions</div>
            <div className="text-white font-mono">14</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
