mapData = new Map()
d3.json('finallinedata.json')
    .then(d=>{
       
        Object.entries(d).forEach(([key, e]) =>{
                mapData.set(key,[])
            Object.entries(e).forEach(([key2, e2]) =>{
                if (key2 == "id") return;
                if(!('co2' in e2)){
                    e2.co2 = 0
                }
                if(!('total' in e2)){
                    e2.total = 0
                }
                mapData.get(key).push({year: key2, co2: e2.co2, total: e2.total})
            

            })

    })
    console.log(mapData);

    var dataset = mapData.get('MYA')

    function printData(dataset){
        dataset.forEach(element => {
            console.log(element.year, element.co2, element.total)
        })
    }
    printData(dataset)

var svg = d3.select("svg")
        ,margin = 200
        ,width = svg.attr("width")-margin
        ,height = svg.attr("height") - margin
var xScale = d3.scaleLinear()
.domain([1960, 2020])
.range([0, width]),
disyScale = d3.scaleLinear()
.domain([0, 1000])
.range([height, 0]);
co2yScale = d3.scaleLinear()
.domain([0,3000])
.range([height, 0]);
var g = svg.append('g')
.attr("transform", "translate(" +100 + "," + 100 + ")");
//Title Text
svg.append('text')
.attr('x', width/2 + 100)
.attr('y', 100)
.attr('text-anchor', 'middle')
.style('font-family', 'sans-serif')
.style('font-size', 20)
.text('Tons of CO2 vs. Amount of Natural Disasters by Year')
//xAxis Label
svg.append('text')
.attr('x', width/2 +100)
.attr('y', height - 15 + 150)
.attr('text-anchor', 'middle')
.style('font-family', 'sans-serif')
.style('font-size', 14)
.text('Years')
//yAxis Label
svg.append('text')
.attr('text-anchor', 'middle')
.attr('transform','translate(60,'+height/1.5 + ')rotate(-90)')
.style('font-family', 'sans-serif')
.style('font-size', 14)
.text('Amount of Disasters')
//Adds 2nd yAxis label
svg.append('text')
.attr('text-anchor', 'middle')
.attr('transform','translate(950,'+height/1.5 + ')rotate(-270)')
.style('font-family', 'sans-serif')
.style('font-size', 14)
.text('Tons of CO2 Emitted')

//Adds Axis's
g.append('g')
.attr('transform', 'translate (0,'+height+ ')')
.call(d3.axisBottom(xScale));
g.append('g')
.call(d3.axisLeft(disyScale));
g.append('g')
.attr('transform','translate(800,'+0+ ')')
.call(d3.axisRight(co2yScale));

//adding circles for given data
svg.append('g').selectAll("dot")
.data(dataset)
.enter()
.append('circle')
.attr('cx', function (d){
    return xScale(d[0]);
})
.attr('cy', function(d){
    return disyScale(d[2]);
})
.attr('r', 3)
.attr('transform', "translate (" + 100 + "," + 100 + ")")
.style('fill', "red");
//Connects circles
var line = d3.line()
.x(function(d){
    return xScale(d[0]);
})
.y(function(d){
    return disyScale(d[1]);
})
.curve(d3.curveMonotoneX)
svg.append('path')
.datum(dataset)
.attr('class', 'line')
.attr('transform', 'translate(' + 100 +',' + 100 + ")")
.attr('d', line)
.style("fill", "none")
.style('stroke', 'red')
.style('stroke-width', '2');
})
