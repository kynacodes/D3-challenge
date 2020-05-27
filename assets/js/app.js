d3.csv("/assets/data/data.csv").then(function (data) {
    console.log(data);


    //var scale = d3.scaleLinear()
    //.domain([0, 100]);
    //.range([10, 350])


    var margin = {
        top: 10,
        right: 30,
        bottom: 30,
        left: 60
    };

    var chart_width = 500 - margin.left - margin.right;
    var chart_height = 300 - margin.top - margin.bottom;


    // Create SVG element.
    var svg = d3.select('#scatter')
        .append('svg')
        .attr('width', chart_width + margin.left + margin.right)
        .attr('height', chart_height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    var x = d3.scaleLinear()
        .domain([6, 30])
        .range([0, chart_width]);

    svg.append('g')
        .attr('transform', 'translate(0, ' + chart_height + ')')
        .call(d3.axisBottom(x));

    var y = d3.scaleLinear()
        .domain([20, 40])
        .range([chart_height, 0]);

    svg.append('g')
        .call(d3.axisLeft(y));

    // Create scales?
    //var x_scale = de.scaleLinear()
    //.doman()

    // Create circles for each data point.
    svg.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', function (data) {
            return x(data.poverty);
        })
        .attr('cy', function (data) {
            return y(data.obesity);
        })
       
        .attr('r', 5)

        .attr('fill', '#48cde8')
        .text(data => {
            return data.abbr;
        })
        .style("color", "white");

    // Create data point labels.
    svg.selectAll('text')
        .data(data)
        .enter()
        .append('text', function(data){
            return data.abbr;
        })


    //This needs to be the state abbreviations.
    /* .text(function(data){
        return data.join('')
    }); */


});