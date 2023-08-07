// Information.js
import React from 'react';
import * as go from 'gojs';
import { ReactDiagram } from 'gojs-react';

function initDiagram() {
  const $ = go.GraphObject.make;

  var bluegrad = '#90CAF9';
  var pinkgrad = '#F48FB1';
  var femalesvg = "https://selleasep.shop/iyali/woman.jpg";
  var malesvg = "https://selleasep.shop/iyali/man.jpg";

  // Updated family data with links and relationships
  var nodeDataArray = [
    {
      key: 0,
      name: "M. Martin",
      gender: "M",
      birthYear: "1865",
      deathYear: "1936",
      reign: "1910-1936",
      marriages: [1], // Array of marriage relationships (refers to key: 1, which is Immaculle)
      siblings: [3, 4], // Array of sibling relationships (refers to keys: 3 and 4, which are Marie and Sylvain)
      father: null,
      mother: null,
    },
    {
      key: 1,
      name: "M. Immaculle",
      gender: "F",
      birthYear: "1865",
      deathYear: "1936",
      reign: "1910-1936",
      marriages: [0], // Array of marriage relationships (refers to key: 0, which is Martin)
      siblings: [],
      father: null,
      mother: null,
    },
    {
      key: 2,
      name: "Cyusa",
      gender: "F",
      birthYear: "1894",
      deathYear: "1972",
      reign: "1936",
      marriages: [], // Array of marriage relationships
      siblings: [],
      father: 0, // Reference to the father node (Martin)
      mother: 1, // Reference to the mother node (Immaculle)
    },
    {
      key: 3,
      name: "Marie",
      gender: "F",
      birthYear: "1896",
      deathYear: "1978",
      reign: "1936",
      marriages: [], // Array of marriage relationships
      siblings: [4], // Array of sibling relationships (refers to key: 4, which is Sylvain)
      father: 0, // Reference to the father node (Martin)
      mother: 1, // Reference to the mother node (Immaculle)
    },
    {
      key: 4,
      name: "Sylvain",
      gender: "M",
      birthYear: "1900",
      deathYear: "1980",
      reign: "1936",
      marriages: [5], // Array of marriage relationships (refers to key: 5, which is Diane)
      siblings: [3], // Array of sibling relationships (refers to key: 3, which is Marie)
      father: 0, // Reference to the father node (Martin)
      mother: 1, // Reference to the mother node (Immaculle)
    },
    {
      key: 5,
      name: "Diane",
      gender: "F",
      birthYear: "1902",
      deathYear: "1982",
      reign: "1936",
      marriages: [4], // Array of marriage relationships (refers to key: 4, which is Sylvain)
      siblings: [],
      father: null,
      mother: null,
    },
  ];

  const diagram = $(go.Diagram, {
    "toolManager.hoverDelay": 100,
    'undoManager.isEnabled': true,
    allowCopy: false,
    layout: $(go.TreeLayout, {
      angle: 90,
      nodeSpacing: 20,
      layerSpacing: 60,
      layerStyle: go.TreeLayout.LayerUniform,
    }),
    'clickCreatingTool.archetypeNodeData': { text: 'new node', color: 'lightblue' },
    model: new go.GraphLinksModel({
      linkKeyProperty: 'key',
      linkFromPortIdProperty: 'fromPort',
      linkToPortIdProperty: 'toPort',
      nodeDataArray: nodeDataArray,
      linkDataArray: addRelationshipLinks(nodeDataArray), // Add relationship links to the model
    }),
  });

  // Define Converters to be used for Bindings
  function genderBrushConverter(gender) {
    if (gender === "M") return bluegrad;
    if (gender === "F") return pinkgrad;
    return "orange";
  }

  function genderImageChoose(gender) {
    if (gender === "M") return malesvg;
    if (gender === "F") return femalesvg;
    return "orange";
  }

  // Define a simple Node template
  diagram.nodeTemplate = $(
    go.Node,
    'Auto',
    { deletable: false },
    new go.Binding('text', 'name'),
    $(
      go.Shape,
      'RoundedRectangle',
      {
        fill: 'white',
        stroke: null,
        strokeWidth: 1,
        stretch: go.GraphObject.Fill,
        alignment: go.Spot.Center,
        width: 100,
        height: 160,
      },
      new go.Binding('stroke', 'gender', genderBrushConverter)
    ),
    $(
      go.Picture,
      {
        source: "",
        width: 90,
        height: 80,
        alignment: go.Spot.Center,
        stretch: go.GraphObject.Fill,
        margin: new go.Margin(-70, 0, 0, 0),
      },
      new go.Binding('source', 'gender', genderImageChoose)
    ),
    $(
      go.TextBlock,
      {
        font: '700 11px Droid Serif, sans-serif',
        textAlign: 'center',
        margin: new go.Margin(60, 0, 0, 0),
        maxSize: new go.Size(90, NaN),
      },
      new go.Binding('text', 'name')
    ),
    $(
      go.Panel,
      'Vertical',
      { margin: new go.Margin(125, 0, 0, 0) },
      $(
        'Button',
        {
          margin: 2,
          click: (e, obj) => {
            const name = obj.part.data.name;
            alert('Hello ' + name);
          },
        },
        $(go.TextBlock, 'Click me!')
      )
    )
  );

  // Custom link template for spouse and other relationships
  diagram.linkTemplate = $(
    go.Link,
    {
      routing: go.Link.Orthogonal,
      corner: 15,
      selectable: false,
    },
    $(go.Shape, { strokeWidth: 2, stroke: 'gray' }), // Default link color
    new go.Binding('stroke', 'category', function(category) {
      if (category === 'Spouse') return 'red'; // Customize the color for Spouse links
      if (category === 'Siblings') return 'green'; // Customize the color for Siblings links
      return 'gray'; // Default color if no category is specified
    })
  );





  // ...
  // Custom function to add relationship links to the diagram model
  function addRelationshipLinks(nodeDataArray) {
    const linkDataArray = [];

    // Add spouse links
    nodeDataArray.forEach((nodeData) => {
      if (nodeData.marriages && nodeData.marriages.length > 0) {
        nodeData.marriages.forEach((spouseKey) => {

          linkDataArray.push({ from: nodeData.key, to: spouseKey, category: 'Spouse' });
        });
      }
    });

    // Add sibling links
    nodeDataArray.forEach((nodeData) => {
      if (nodeData.siblings && nodeData.siblings.length > 0) {
        nodeData.siblings.forEach((siblingKey) => {
          linkDataArray.push({ from: nodeData.key, to: siblingKey, category: 'Siblings' });
        });
      }
    });

    // Add parent links
    nodeDataArray.forEach((nodeData) => {
      if (nodeData.father !== null) {
        linkDataArray.push({ from: nodeData.father, to: nodeData.key });
      }
      if (nodeData.mother !== null) {
        linkDataArray.push({ from: nodeData.mother, to: nodeData.key });
      }
    });

    return linkDataArray;
  }

  return diagram;
}

// This function handles any changes to the GoJS model.
function handleModelChange(changes) {
  alert('GoJS model changed!');
}

const handleDiagramClick = (e) => {
  // e.subject will give you information about the clicked object
  // e.subject.part.data will give you data related to the clicked part (node/link) in the diagram
  console.log('Clicked:', e.subject.part.data);
};

// Render function...
export default function Information() {
  return (
    <div>
      <ReactDiagram
        initDiagram={initDiagram}
        divClassName='diagram-component'
        onModelChange={handleModelChange}
        onModelClick={handleModelChange}
        onObjectSingleClick={handleDiagramClick}
        style={{
          backgroundColor: '#2e2e2e',
          width: '100%',
          height: '91vh',
        }}
      />
    </div>
  );
}