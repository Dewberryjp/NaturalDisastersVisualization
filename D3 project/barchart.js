d3.json('barChartData.json').then(d=>{
    console.log(d);
})
var ctx = document.getElementById("BarChart").getContext('2d');
var stackedBarChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ["1960","1961","1962","1963","1964","1965","1966","1967","1968","1969", 
        "1970","1971","1972","1973","1974","1975","1976","1977","1978","1979",
        "1980","1981","1982","1983","1984","1985","1986","1987","1988","1989",
        "1990","1991","1992","1993","1994","1995","1996","1997","1998","1999",
        "2000","2001","2002","2003","2004","2005","2006","2007","2008","2009",
        "2010","2011","2012","2013","2014","2015","2016","2017","2018"],
		datasets: [{
			label: 'storm',
			backgroundColor: "#171717",
			data: [ ],
		}, {
			label: 'earthquake',
			backgroundColor: "#421d1d",
			data: [ ],
		}, {
			label: 'flood',
			backgroundColor: "#014991",
			data: [ ],
		}, {
			label: 'landslide',
			backgroundColor: "#065c26",
			data: [ ],
		},{
            label: 'exterme temp.',
			backgroundColor: "#e02f02",
			data: [ ],
    }],
	},
options: {
    tooltips: {
      displayColors: true,
      callbacks:{
        mode: 'x',
      },
    },
    scales: {
      xAxes: [{
        stacked: true,
        gridLines: {
          display: false,
        }
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
        type: 'linear',
      }]
    },
		responsive: true,
		maintainAspectRatio: false,
		legend: { position: 'bottom' },
	}
});



    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    