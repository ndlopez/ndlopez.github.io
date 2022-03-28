const sample=[
    {lang:"C",
     val:78.9,
     color:"#000000"},
    {lang:"Python",
     val:75.1,
     color:"#fbcb39"},
    {lang: "Ruby",
     val: 65.1,
     color: '#ff6e52'
    },
    {lang: "JavaScript",
     val: 61.9,
     color: '#f9de3f'
    },
    {lang: "C++",
     val: 60.4,
     color: '#5d2f8e'
    },
    {lang:"Perl",
     val: 85,
     color:"tomato"
    }
    ];
const svg1 = d3.select("svg");
const svgCont= d3.select("#container");
const margin = 80;
const width = 400 - 2 * margin;
const height = 600 - 2 * margin;

const chart = svg1.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);
const xScale = d3.scaleBand()
    .range([0, width])
    .domain(sample.map((s) => s.lang))
    .padding(0.4);
    
const yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 100]);
const zScale=d3.scaleBand()
    .domain(sample.map((s)=>s.color));
//console.log(sample.map((s)=>s.color))
const makeYLines = () => d3.axisLeft()
    .scale(yScale);

    chart.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));

    chart.append('g')
    .call(d3.axisLeft(yScale));
    chart.append('g')
    .attr('class', 'grid')
    .call(makeYLines()
        .tickSize(-width, 0, 0)
        .tickFormat('')
    );
const barGroups = chart.selectAll()
    .data(sample)
    .enter()
    .append('g');
barGroups.append('rect')
    .attr('class', 'bar')
    .attr('x', (g) => xScale(g.lang))
    .attr('y', (g) => yScale(g.val))
    .attr('fill','tomato')//(g)=>zScale(g.color))
    .attr('height', (g) => height - yScale(g.val))
    .attr('width', xScale.bandwidth())
    
    svg1
    .append('text')
    .attr('class', "label")
    .attr('x', -(height / 2) - margin)
    .attr('y', margin / 2.4)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'middle')
    .text('Love meter (%)')

    svg1.append('text')
    .attr('class', 'label')
    .attr('x', width / 2 + margin)
    .attr('y', height + margin * 1.7)
    .attr('text-anchor', 'middle')
    .text('Languages')

    svg1.append('text')
    .attr('class', 'title')
    .attr('x', width / 2 + margin)
    .attr('y', 40)
    .attr('text-anchor', 'middle')
    .text('Most loved programming languages in 2018')

    svg1.append('text')
    .attr('class', 'source')
    .attr('x', width - margin / 2)
    .attr('y', height + margin * 1.7)
    .attr('text-anchor', 'start')
    .text('Source: Stack Overflow, 2018')
 