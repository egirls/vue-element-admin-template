<template>
  <div id="id" :style="{width: '300px', height: '300px'}" />
</template>

<script>
export default {
  name: 'TheECharts',
  watch: {
    options: {
      handler(options) {
        this.chart.setOption(this.options)
      },
      deep: true
    }
  },
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts() {
      this.chart = this.echarts.init(document.getElementById('id'))
      this.setOptions()
    },
    setOptions() {
      this.chart.setOption({
        title: {
          text: 'ECharts 示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  }
}
</script>
