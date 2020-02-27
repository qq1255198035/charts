<template>
  <div class="hello">
    <div id="box2"></div>
   
  </div>
</template>

<script>
export default {
    data(){
        return{
            data:[
                
            ],
            num: 1
        }
    },
    methods:{
        auto(){
                this.num ++;
            
                this.data.push(
                    { type: `汽车${this.num}`, value: 34 },
                )
                this.chart.changeData(this.data)
                console.log(this.data)
                setInterval(()=>{
                    console.log(1)
                    this.auto()
                },5000)
        }
    },
	mounted(){
        const chart = new G2.Chart({
            container: 'box2',
            forceFit: true,
            height: 500,
            padding: [ 20, 40, 50, 124 ]
        });
        chart.source(this.data, {
            value: {
                min: 0,
                nice: false,
                alias: '各省确诊人数（例）'
            }
        });
        chart.axis('type', {
            label: {
                textStyle: {
                    fill: '#8d8d8d',
                    fontSize: 12
                }
            },
            tickLine: {
                alignWithLabel: false,
                length: 0
            },
            line: {
                lineWidth: 0
            }
        });
        chart.axis('value', {
            label: null,
            title: {
                offset: 30,
                textStyle: {
                    fontSize: 12,
                    fontWeight: 300
                }
            }
        });
        //chart.legend(false);
        chart.coord().transpose();
        chart.interval().position('type*value').size(26)
        .opacity(1)
        .label('value', {
            textStyle: {
            fill: '#fff'
            },
            offset: 10
        });
        chart.render();
        this.chart = chart;
        //this.auto()
	}
}


</script>

	<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h3 {
		margin: 40px 0 0;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
	a {
		color: #42b983;
	}
</style>
