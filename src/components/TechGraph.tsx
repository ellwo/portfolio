/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

interface Node extends d3.SimulationNodeDatum {
  id: string;
  icon: string;
  tooltip_desc: string;
  priority_percent: number;
  link: string;
  x?: number;
  y?: number;
}

interface Link extends d3.SimulationLinkDatum<Node> {
  source: Node;
  target: Node;
}

interface TechGraphProps {
  badges: {
    name: string;
    icon: string;
    tooltip_desc: string;
    link: string;
    priority_percent: number;
  }[];
}

const TechGraph = ({ badges }: TechGraphProps) => {

  const isMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false;
  const isTablet = typeof window !== "undefined" ? window.innerWidth < 1024 : false;
  const minSize = isMobile ? 20 : 30;  // base size
  const maxSize = isMobile ? 30 : 60;  // max size
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 600 });
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current) {
        const container = svgRef.current.parentElement;
        if (container) {
          setDimensions({
            width: container.clientWidth,
            height: Math.max(500, container.clientHeight),
          });
        }
      }
    };

    updateDimensions();
    // window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!svgRef.current || dimensions.width === 0) return;

    // Clear previous graph
    d3.select(svgRef.current).selectAll('*').remove();

    // Create nodes from badges
    const nodes: Node[] = badges.map(badge => ({
      id: badge.name,
      ...badge,
    }));
// 2) Compute hex‐grid dimensions
const N    = nodes.length;
const cols = Math.ceil(Math.sqrt(N));     // # of columns
const rows = Math.ceil(N / cols);         // # of rows

const spacing = 80;
const hexH    = spacing * Math.sin(Math.PI / 3);
const cx      = dimensions.width  / 2;
const cy      = dimensions.height / 2;

const totalW = spacing * cols + spacing / 2;
const totalH = hexH    * rows + hexH     / 2;

// 3) Assign each node a row,col and x,y in the hex grid
nodes.forEach((node, i) => {
  const row  = Math.floor(i / cols);
  const col  = i % cols;
  const xOff = (row % 2) * (spacing / 2);

  node.x = cx + col * spacing + xOff - totalW / 2 + spacing / 2;
  node.y = cy + row * hexH     - totalH / 2 + hexH     / 2;

  // store for neighbor lookup
  (node as any).row = row;
  (node as any).col = col;
});

// 4) Build a map for quick neighbor lookup
const nodeMap = new Map<string, Node>();
nodes.forEach(n => {
  const { row, col } = n as any;
  nodeMap.set(`${row},${col}`, n);
});

// 5) Build edges by connecting each node to its up-to-6 hex neighbors
const edges: Link[] = [];
const seen  = new Set<string>();

nodes.forEach(n => {
  const { row, col } = n as any;
  const parity       = row % 2;

  const neighborCoords: [number, number][] = [
    [row,     col + 1],                    // E
    [row,     col - 1],                    // W
    [row - 1, col    ],                    // N
    [row + 1, col    ],                    // S
    [row - 1, parity ? col + 1 : col - 1], // NE or NW
    [row + 1, parity ? col + 1 : col - 1], // SE or SW
  ];

  neighborCoords.forEach(([r, c]) => {
    const m = nodeMap.get(`${r},${c}`);
    if (m) {
      const key = [n.id, m.id].sort().join("::");
      if (!seen.has(key)) {
        seen.add(key);
        edges.push({ source: n, target: m });
      }
    }
  });
});
    // Create SVG
    const svg = d3.select(svgRef.current);

    // Custom force to add horizontal spacing
    const forceX = d3.forceX<Node>()
      .strength(0.1)
      .x((d, i) => {
        const section = Math.floor(i * 4 / nodes.length); // Divide into 4 sections
        return (dimensions.width * (section + 1)) / 5; // Distribute across width
      });

    // Create force simulation
    const simulation = d3.forceSimulation<Node>()
      .nodes(nodes)
      .force('charge', d3.forceManyBody<Node>().strength(isTablet ? -800 : -1500))
      .force('center', d3.forceCenter<Node>(dimensions.width / 2, dimensions.height / 2))
      .force('collision', d3.forceCollide<Node>().radius(45)) // Increased radius
      .force('link', d3.forceLink<Node, Link>(edges).id(d => d.id).distance(120)) // Increased distance
      .force('x', forceX) // Add horizontal force
      .force('y', d3.forceY<Node>(dimensions.height / 2).strength(isTablet ? 0.2 : 0.3)); // Gentle vertical centering

    // Draw edges
    const links = svg.append('g')
      .selectAll<SVGLineElement, Link>('line')
      .data(edges)
      .join('line')
      .style('stroke', '#ffffff30')
      .style('stroke-width', 1);

    // Draw nodes
    const nodeGroups = svg.append('g')
      .selectAll<SVGGElement, Node>('g')
      .data(nodes)
      .join('g')
      .attr('class', 'node')
      .style('cursor', 'pointer')
      .on('mouseover', (event, d) => setHoveredNode(d))
      .on('mouseout', () => setHoveredNode(null))
      .on('click', (event, d) => window.open(d.link, '_blank'))
      .call(d3.drag<SVGGElement, Node>()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));

    // Add circles (node backgrounds)
    nodeGroups.append('circle')
      .attr('r', d => {
        // calculate a “size” in pixels
        const size = Math.round(minSize + (maxSize - minSize) * (d.priority_percent ?? 0));
        // since <circle r="…"> takes radius, divide by 2
        return (size / 2)+10;
      })
      .attr('fill', '#0a192f')
      .attr('stroke', '#ffffff30')
      .attr('stroke-width', 1);

 
          // Add HTML icon via foreignObject
    nodeGroups.append('foreignObject')
    .attr('width', d => 2 * (30 + d.priority_percent * 12))
    .attr('height', d => 2 * (30 + d.priority_percent * 12))
    .attr('x', d => -(30 + d.priority_percent * 12))
    .attr('y', d => -(30 + d.priority_percent * 12))
    // tell D3 we’re embedding XHTML
    .append('xhtml:div')
      .style('width', d => `${2 * (30 + d.priority_percent * 12)}px`)
      .style('height', d => `${2 * (30 + d.priority_percent * 12)}px`)
      .style('display', 'flex')
      .style('align-items', 'center')
      .style('justify-content', 'center')
      .html((d)=>{
        const percent = (d.priority_percent ?? 0.6);
        const size = Math.round(minSize + (maxSize - minSize) * percent);
        return `
        <circle stroke="#ffffff30" stroke-width="1" r="${size}px" fill="#0a192f" />
        <i class="${d.icon}" 
           style="
             font-size: ${size}px;
             line-height: 1;
           ">
        </i>
      `
      });


    // Add text elements for icons (as a fallback and to ensure visibility)
    nodeGroups.append('text')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'central')
      .attr('class', d => d.icon)
      .style('font-family', 'Font Awesome 6 Brands, Font Awesome 6 Free')
      .style('font-size', '24px')
      .style('fill', '#fff')
      .style('font-weight', '400');

    // Update positions on each tick
    simulation.on('tick', () => {
      // Keep nodes within bounds with more horizontal padding
      nodes.forEach(node => {
        node.x = Math.max(60, Math.min(dimensions.width - 60, node.x ?? 0));
        node.y = Math.max(40, Math.min(dimensions.height - 40, node.y ?? 0));
      });

      links
        .attr('x1', d => (d.source as Node).x ?? 0)
        .attr('y1', d => (d.source as Node).y ?? 0)
        .attr('x2', d => (d.target as Node).x ?? 0)
        .attr('y2', d => (d.target as Node).y ?? 0);

      nodeGroups
        .attr('transform', d => `translate(${d.x ?? 0},${d.y ?? 0})`);
    });

    // Drag functions
    function dragstarted(event: d3.D3DragEvent<SVGGElement, Node, Node>) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: d3.D3DragEvent<SVGGElement, Node, Node>) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: d3.D3DragEvent<SVGGElement, Node, Node>) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return () => {
      simulation.stop();
    };
  }, [badges, dimensions, isMobile, isTablet, minSize, maxSize]);

  return (
    <div className="relative w-full h-[600px]">
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
        className="w-full h-full"
      />
      {hoveredNode && (
        <div
          className="absolute bg-space-light px-3 py-1.5 rounded-md text-sm text-white pointer-events-none z-100"
          style={{
            left: hoveredNode.x ?? 0,
            top: (hoveredNode.y ?? 0) - 40,
            transform: 'translateX(-50%)',
          }}
        >
          {hoveredNode.tooltip_desc}
        </div>
      )}
    </div>
  );
};

export default TechGraph; 