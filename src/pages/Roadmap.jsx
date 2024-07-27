import React from 'react';
import ReactFlow, { 
  Background, 
  Controls, 
  MiniMap,
  useNodesState,
  useEdgesState,
  BaseEdge,
  EdgeLabelRenderer,
  getSmoothStepPath,
} from 'reactflow';
import 'reactflow/dist/style.css';

const CustomEdge = ({ id, sourceX, sourceY, targetX, targetY, style = {} }) => {
  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <BaseEdge path={edgePath} style={style} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${targetX}px,${targetY}px)`,
            pointerEvents: 'all',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="5" fill="#ffffff" />
          </svg>
        </div>
      </EdgeLabelRenderer>
    </>
  );
};

const initialNodes = [
  { id: 'arrays', type: 'input', data: { label: 'Arrays & Hashing' }, position: { x: 250, y: 0 } },
  { id: 'twoPointers', data: { label: 'Two Pointers' }, position: { x: 100, y: 100 } },
  { id: 'stack', data: { label: 'Stack' }, position: { x: 400, y: 100 } },
  { id: 'binarySearch', data: { label: 'Binary Search' }, position: { x: 0, y: 200 } },
  { id: 'slidingWindow', data: { label: 'Sliding Window' }, position: { x: 200, y: 200 } },
  { id: 'linkedList', data: { label: 'Linked List' }, position: { x: 400, y: 200 } },
  { id: 'trees', data: { label: 'Trees' }, position: { x: 200, y: 300 } },
  { id: 'tries', data: { label: 'Tries' }, position: { x: 0, y: 400 } },
  { id: 'heap', data: { label: 'Heap / Priority Queue' }, position: { x: 200, y: 400 } },
  { id: 'backtracking', data: { label: 'Backtracking' }, position: { x: 400, y: 400 } },
  { id: 'graphs', data: { label: 'Graphs' }, position: { x: 200, y: 500 } },
  { id: '1dDp', data: { label: '1-D DP' }, position: { x: 400, y: 500 } },
  { id: 'intervals', data: { label: 'Intervals' }, position: { x: 0, y: 600 } },
  { id: 'greedy', data: { label: 'Greedy' }, position: { x: 200, y: 600 } },
  { id: 'advancedGraphs', data: { label: 'Advanced Graphs' }, position: { x: 400, y: 600 } },
  { id: '2dDp', data: { label: '2-D DP' }, position: { x: 400, y: 700 } },
  { id: 'bitManipulation', data: { label: 'Bit Manipulation' }, position: { x: 600, y: 700 } },
  { id: 'math', data: { label: 'Math & Geometry' }, position: { x: 400, y: 800 } },
];

const initialEdges = [
  { id: 'e1-2', source: 'arrays', target: 'twoPointers', type: 'custom' },
  { id: 'e1-3', source: 'arrays', target: 'stack', type: 'custom' },
  { id: 'e2-4', source: 'twoPointers', target: 'binarySearch', type: 'custom' },
  { id: 'e2-5', source: 'twoPointers', target: 'slidingWindow', type: 'custom' },
  { id: 'e2-6', source: 'twoPointers', target: 'linkedList', type: 'custom' },
  { id: 'e4-7', source: 'binarySearch', target: 'trees', type: 'custom' },
  { id: 'e6-7', source: 'linkedList', target: 'trees', type: 'custom' },
  { id: 'e7-8', source: 'trees', target: 'tries', type: 'custom' },
  { id: 'e7-9', source: 'trees', target: 'heap', type: 'custom' },
  { id: 'e7-10', source: 'trees', target: 'backtracking', type: 'custom' },
  { id: 'e9-13', source: 'heap', target: 'intervals', type: 'custom' },
  { id: 'e9-14', source: 'heap', target: 'greedy', type: 'custom' },
  { id: 'e9-15', source: 'heap', target: 'advancedGraphs', type: 'custom' },
  { id: 'e10-11', source: 'backtracking', target: 'graphs', type: 'custom' },
  { id: 'e10-12', source: 'backtracking', target: '1dDp', type: 'custom' },
  { id: 'e11-15', source: 'graphs', target: 'advancedGraphs', type: 'custom' },
  { id: 'e11-16', source: 'graphs', target: '2dDp', type: 'custom' },
  { id: 'e11-18', source: 'graphs', target: 'math', type: 'custom' },
  { id: 'e12-16', source: '1dDp', target: '2dDp', type: 'custom' },
  { id: 'e12-17', source: '1dDp', target: 'bitManipulation', type: 'custom' },
];

const nodeColor = (node) => {
  return '#4338ca';
};

const edgeOptions = {
  type: 'custom',
  style: { stroke: '#ffffff', strokeWidth: 4 },
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: '#ffffff',
    width: 20,
    height: 20,
  },
};

const edgeTypes = {
  custom: CustomEdge,
};

const Roadmap = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={{ width: '100%', height: '100vh', background: '#1e1e1e' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodesDraggable={false}
        nodesConnectable={false}
        nodeColor={nodeColor}
        defaultViewport={{ x: 0, y: 0, zoom: 0.75 }}
        edgeOptions={edgeOptions}
        edgeTypes={edgeTypes}
      >
        <Background color="#333" gap={16} />
        <Controls />
        <MiniMap />
      </ReactFlow>
      <div className="absolute top-4 right-4 bg-gray-800 text-white p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Select Roadmap</h2>
        <div className="flex gap-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Algorithms</button>
          <button className="bg-gray-600 text-white px-4 py-2 rounded">Courses</button>
        </div>
        <div className="mt-4">
          <p className="text-sm">0 / 150</p>
          <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '0%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
