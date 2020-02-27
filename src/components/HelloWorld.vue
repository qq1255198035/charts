<template>
  <div class="hello">
    <div id="box"></div>
  </div>
</template>

<script>
	
	const data = [
		{ city: '中国（北京）', type: '确诊病例', value: 10 },
		{ city: '中国（北京）', type: '疑似病例', value: 20 },
		{ city: '中国（北京）', type: '死亡人数', value: 30 },
		
		{ city: '美国（华盛顿）', type: '确诊病例', value: 500 },
		{ city: '美国（华盛顿）', type: '疑似病例', value: 100 },
		{ city: '美国（华盛顿）', type: '死亡人数', value: 20 },
		
		{ city: '印度（德里）', type: '确诊病例', value: 2 },
		{ city: '印度（德里）', type: '疑似病例', value: 30 },
		{ city: '印度（德里）', type: '死亡人数', value: 68 },
		
		{ city: '俄罗斯（莫斯科）', type: '确诊病例', value: 40 },
		{ city: '俄罗斯（莫斯科）', type: '疑似病例', value: 20 },
		{ city: '俄罗斯（莫斯科）', type: '死亡人数', value: 50 },
		
		{ city: '法国（巴黎）', type: '确诊病例', value: 1000 },
		{ city: '法国（巴黎）', type: '疑似病例', value: 300 },
		{ city: '法国（巴黎）', type: '死亡人数', value: 2 },
		
		{ city: '韩国（首尔）', type: '确诊病例', value: 300 },
		{ city: '韩国（首尔）', type: '疑似病例', value: 20 },
		{ city: '韩国（首尔）', type: '死亡人数', value:10 },
		
		{ city: '丹麦（哥本哈根）', type: '确诊病例', value: 200 },
		{ city: '丹麦（哥本哈根）', type: '疑似病例', value: 10 },
		{ city: '丹麦（哥本哈根）', type: '死亡人数', value: 10 },
	];
	

export default {
	name: 'HelloWorld',
	props: {
		msg: String
	},
	mounted(){
		const chart = new G2.Chart({
			container: 'box',
			forceFit: true,
			height: 500,
			padding: [ 20, 20, 50, 140 ]
		});
		chart.source(data, {
			value: {
				min: 0,
				nice: false,
				alias: '各省感染人数（例）'
			}
		});
		chart.axis('city', {
			
			label: {
				textStyle: {
					fill: '#595959',
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
					fontSize: 14,
					fontWeight: 300
				}
			},
			grid: {
				lineStyle: {
					lineWidth: 0
				}
			}
		});
		// 条形图 指示器位置
		chart.legend({
			position: 'top-center'
		});
		chart.coord().transpose();
		// 条形图的样式
		chart.intervalStack().position('city*value').color('type*city', (type, city) => {
			let color;
			if (type === '确诊病例') color = '#1890ff';
			if (type === '疑似病例') color = '#ffff00';
			if (type === '死亡人数') color = '#f5222d';
			return color;
		})
		.size(26)
		.opacity(1)
		// 条形图里面的数字的样式
		.label('value*type', (val, t) => {
			const color = (t === '确诊病例') ? 'white' : '#47494b';
			if (val < 0.05) {
				return false;
			}
			return {
			position: 'middle',
			offset: 0,
			textStyle: {
				fontSize: 12,
				fill: color,
				shadowBlur: 2,
				shadowColor: 'rgba(0, 0, 0, .45)'
			}
			};
		});
		chart.render();
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
