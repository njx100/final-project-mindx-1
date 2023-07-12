let  categories = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
  ]
let dataCharts =
[
    [500, 603, 350, 720, 530, 428, 634, 721],
    [132, 127, 135, 117, 113, 128, 154, 141],
    [2445, 3105, 2600, 3574, 2517,3677,2001,3122,],
    [3132, 2127, 2635, 2117,1413, 1928, 2154, 1841]
] // end data
const[dataOrder,dataPending,dataEarning,dataExpense] =dataCharts


// chart right
Highcharts.chart('chart_earnings', {

    chart: {
        type: 'column',
        
    },
    title: {
        text: 'EARNINGS',
        align:'left'
    },
    xAxis: {
        categories: categories,
         crosshair: true,
         
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        },
         crosshair: true,
         labels: {
            formatter: function() {
                return this.value + '$';
            },
        },
        gridLineWidth: 0
    },
    tooltip: {
        shared: true,
        headerFormat: '<span style="font-size:14px"><b>{point.key}</b></span></br>',
        valueSuffix: '$',
    },
    plotOptions: {
        column: {
            stacking: 'normal', 
        }
    },
    credits: {
        enabled: false
    },
    legend: {
        enabled: false
    },
    series: [{
        name: 'Expense',
        data: dataExpense,
        color : '#E4E6E9'
    }, {
        name: 'Earning',
        data: dataEarning,
        color : '#F24A4A'
    }]
    
}); // end chart right

// chart left
// order

Highcharts.chart('chart_order', {
    chart: {
        type: 'area'
    },
    title: {
        text: null,
        
    },
    
    yAxis: {
        visible :false,
        title: {
            useHTML: false,
            text: null
        },
        
       
    },
    xAxis: {
        visible :false,
        categories: categories,  
    },
    tooltip: {
        shared: true,
        headerFormat: '<span style="font-size:14px"><b>{point.key}</b></span><br>',
        valueSuffix: '$'
    },
    plotOptions: {
       
        area: {
            stacking: 'normal',
            lineColor: '#EE0D0D',
            lineWidth: 2,
            fillOpacity: 0.5,           
        }, 
        
    },
    credits: {
        enabled: false
    },
    legend: {
        enabled: false
    },
    series: [{
        name: 'Order',
        data: dataOrder,
        color: '#EE0D0D',
        
    }]
});
// end order
// pending
Highcharts.chart('chart_pending', {
    chart: {
        type: 'area'
    },
    title: {
        text: null,
        align: 'left'
    },
    
    yAxis: {
        visible :false,
        title: {
            useHTML: true,
            text: null
        }
    },
    xAxis: {
        visible :false,
        categories: categories,
       
    },
    tooltip: {
        shared: true,
        headerFormat: '<span style="font-size:14px"><b>{point.key}</b></span><br>',
        valueSuffix: '$'
    },
    plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#95CC47',
            lineWidth: 2,
            fillOpacity: 0.5,
        }
    },
    credits: {
        enabled: false
    },
    legend: {
        enabled: false
    },
    series: [{
        name: 'Pending',
        data: dataPending,
        color: '#95CC47'
    }]
});
// end pending
// revenue
Highcharts.chart('chart_revenue', {
    chart: {
        type: 'area'
    },
    title: {
        text: null,
        align: 'left'
    },
    
    yAxis: {
        visible :false,
        title: {
            useHTML: true,
            text: ''
        }
    },
    xAxis: {
        visible :false,
        categories: categories,
       
    },
    tooltip: {
        shared: true,
        headerFormat: '<span style="font-size:14px"><b>{point.key}</b></span><br>',
        valueSuffix: '$'
    },
    plotOptions: {
        
        area: {
            stacking: 'normal',
            lineColor: '#40C4FF',
            lineWidth: 2,
            fillOpacity: 0.5,
        }
    },
    credits: {
        enabled: false
    },
    legend: {
        enabled: false
    },
    series: [{
        name: 'Revenue',
        data: dataEarning,
        color: '#40C4FF'
    }]
});
//end revenue
//expense
Highcharts.chart('chart_expense', {
    chart: {
        type: 'area'
    },
    title: {
        text: null,
        align: 'left'
    },
    
    yAxis: {
        visible :false,
        title: {
            useHTML: true,
            text: ''
        }
    },
    xAxis: {
        visible :false,
        categories: categories,
       
    },
    tooltip: {
        shared: true,
        headerFormat: '<span style="font-size:14px"><b>{point.key}</b></span><br>',
        valueSuffix: '$'
    },
    plotOptions: {
        
        area: {
            stacking: 'normal',
            lineColor: '#FCB322',
            lineWidth: 2,
            fillOpacity: 0.5,
        }
    },
    credits: {
        enabled: false
    },
    legend: {
        enabled: false
    },
    series: [{
        name: 'Expense',
        data: dataExpense,
        color: '#FCB322'
    }]
});
// end expense
const sumArr = [];
for (let i=0; i<dataCharts.length;i++) {
    const divIncDec = document.querySelector('div.percent_'+(i+1))
    const percent = dataCharts[i]
    const incDec = (percent[percent.length-1] -percent[percent.length-2])/percent[percent.length-2]*100
    let showIncDec =''
    if(incDec<0){
        showIncDec += `<span class="decrease"><i class="fa-solid fa-down-long"></i></i> ${Math.abs(incDec.toFixed(1))}%</span><p>Since last month</p>` 
        divIncDec.innerHTML =showIncDec   
    }
    else{
        showIncDec += `<span class="increase"><i class="fa-solid fa-up-long"></i> ${incDec.toFixed(1)}%</span><p>Since last month</p>`
        divIncDec.innerHTML =showIncDec 
    }
    const sum = dataCharts[i].reduce((acc, cur) => acc + cur, 0);
  sumArr.push(sum);
}
const divs = document.querySelectorAll('div.total');
for (let i = 0; i < divs.length; i++) {
  divs[i].innerHTML = `<h4>${sumArr[i].toLocaleString()}</h4>`;
}    

