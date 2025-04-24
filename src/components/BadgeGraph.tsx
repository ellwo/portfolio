/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useEffect } from 'react';
import ForceGraph2D, { GraphData, LinkObject, NodeObject } from 'react-force-graph-2d';

interface BadgeProps {
    name: string;
    icon: string;
    tooltip_desc: string;
    link: string;
    priority_percent: number;
  }
// Extend NodeObject to carry our badge
interface GraphNode extends NodeObject {
  badge: BadgeProps;
}

// Build a simple random‐link graph
function createGraph(badges: BadgeProps[]): GraphData {
  const nodes: GraphNode[] = badges.map((b, i) => ({ id: `${i}`, badge: b }));
  const links: LinkObject[] = [];
  const linkCount = Math.floor(badges.length * 1.2);
  for (let i = 0; i < linkCount; i++) {
    const srcIdx = Math.floor(Math.random() * badges.length);
    let dstIdx = Math.floor(Math.random() * badges.length);
    if (dstIdx === srcIdx) dstIdx = (srcIdx + 1) % badges.length;
    links.push({ source: `${srcIdx}`, target: `${dstIdx}` });
  }
  return { nodes, links };
}

const BadgeGraph: React.FC<{ badges: BadgeProps[] }> = ({ badges }) => {
  const fgRef = useRef<any>();
  const graphData = createGraph(badges);

  // After a short warm-up, freeze the layout so lines stay straight
  useEffect(() => {
    if (fgRef.current) {
      fgRef.current.d3Force('charge').strength(-30);
      setTimeout(() => fgRef.current.d3Force('charge').strength(0), 1000);
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '600px' }}>
      <ForceGraph2D
        ref={fgRef}
        graphData={graphData}
        cooldownTicks={20}
        linkWidth={1}
        linkColor={() => '#ffd700'}
        width={800}
        nodeCanvasObject={(node: GraphNode, ctx, _) => {
          const size = 6 + (node.badge.priority_percent * 12);
          ctx.beginPath();
          ctx.arc(node.x!, node.y!, size, 0, 2 * Math.PI, false);
          ctx.fill();
        }}
        nodePointerAreaPaint={(node: GraphNode, color, ctx) => {
          const size = 6 + (node.badge.priority_percent * 12);
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(node.x!, node.y!, size, 0, 2 * Math.PI, false);
          ctx.fill();
        }}
        nodeLabel={(node: GraphNode) => `${node.badge.name}\n${node.badge.tooltip_desc}`}
        onNodeClick={(node: GraphNode) => window.open(node.badge.link, '_blank')}
      />
    </div>
  );
};

export default BadgeGraph;
