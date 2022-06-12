import { createPinia, defineStore } from 'pinia';

export const store = createPinia();

export const useWeatherAppStore = defineStore('weatherApp', {
  state: () => {
    let hoursWeatherData = [];

    for (let i = 0; i < 24; i++) {
      hoursWeatherData.push({
        time: `${i < 10 ? '0' + i : i}:00`,
        temperature: '21°',
        icon: '',
        windyPower: '2级',
        airQuality: '良',
      });
    }

    return {
      appScrollTop: 0,
      opacity: 0.8,
      rotateDeg: 0,
      currentCityIndex: 0,
      cityList: [
        {
          city: '深圳',
          distrist: '宝安区',
          temperature: 26,
          weatherText: '晴',
          recenterWeatherData: [
            {
              icon: '',
              time: '今天',
              weatherStatus: '晴转多云',
              quality: '良',
              maxTemperature: '23',
              minTemperature: '12',
            },
            {
              icon: '',
              time: '明天',
              weatherStatus: '多云',
              quality: '良',
              maxTemperature: '22',
              minTemperature: '14',
            },
            {
              icon: '',
              time: '周一',
              weatherStatus: '晴',
              quality: '良',
              maxTemperature: '23',
              minTemperature: '15',
            },
          ],
          hoursWeatherData,
          sunData: [
            {
              icon: 'src/assets/icon_cloudy.webp',
              desc: '日出',
              time: '07:04',
            },
            {
              icon: 'src/assets/icon_cloudy.webp',
              desc: '日落',
              time: '17:51',
            },
          ],
          summaryData: [
            {
              data: '1级',
              desc: '北风',
            },
            {
              data: '51%',
              desc: '湿度',
            },
            {
              data: '21°',
              desc: '体感',
            },
            {
              data: '1012hPa',
              desc: '气压',
            },
          ],
          tipBoxData: [
            {
              icon: '',
              text: '适宜薄外套',
            },
            {
              icon: '',
              text: '紫外线较弱',
            },
            {
              icon: '',
              text: '宜户外运动',
            },
            {
              icon: '',
              text: '适宜薄洗车',
            },
            {
              icon: '',
              text: '不用带伞',
            },
            {
              icon: '',
              text: '较易感冒',
            },
          ],
        },
        {
          city: '广州',
          distrist: '天河区',
          temperature: 28,
          weatherText: '多云',
          recenterWeatherData: [
            {
              icon: '',
              time: '今天',
              weatherStatus: '晴转多云',
              quality: '良',
              maxTemperature: '23',
              minTemperature: '12',
            },
            {
              icon: '',
              time: '明天',
              weatherStatus: '多云',
              quality: '良',
              maxTemperature: '22',
              minTemperature: '14',
            },
            {
              icon: '',
              time: '周一',
              weatherStatus: '晴',
              quality: '良',
              maxTemperature: '23',
              minTemperature: '15',
            },
          ],
          hoursWeatherData,
          sunData: [
            {
              icon: 'src/assets/icon_cloudy.webp',
              desc: '日出',
              time: '07:04',
            },
            {
              icon: 'src/assets/icon_cloudy.webp',
              desc: '日落',
              time: '17:51',
            },
          ],
          summaryData: [
            {
              data: '1级',
              desc: '北风',
            },
            {
              data: '51%',
              desc: '湿度',
            },
            {
              data: '21°',
              desc: '体感',
            },
            {
              data: '1012hPa',
              desc: '气压',
            },
          ],
          tipBoxData: [
            {
              icon: '',
              text: '适宜薄外套',
            },
            {
              icon: '',
              text: '紫外线较弱',
            },
            {
              icon: '',
              text: '宜户外运动',
            },
            {
              icon: '',
              text: '适宜薄洗车',
            },
            {
              icon: '',
              text: '不用带伞',
            },
            {
              icon: '',
              text: '较易感冒',
            },
          ],
        },
        {
          city: '上海',
          distrist: '黄浦区',
          temperature: 25,
          weatherText: '晴',
          recenterWeatherData: [
            {
              icon: '',
              time: '今天',
              weatherStatus: '晴转多云',
              quality: '良',
              maxTemperature: '23',
              minTemperature: '12',
            },
            {
              icon: '',
              time: '明天',
              weatherStatus: '多云',
              quality: '良',
              maxTemperature: '22',
              minTemperature: '14',
            },
            {
              icon: '',
              time: '周一',
              weatherStatus: '晴',
              quality: '良',
              maxTemperature: '23',
              minTemperature: '15',
            },
          ],
          hoursWeatherData,
          sunData: [
            {
              icon: 'src/assets/icon_cloudy.webp',
              desc: '日出',
              time: '07:04',
            },
            {
              icon: 'src/assets/icon_cloudy.webp',
              desc: '日落',
              time: '17:51',
            },
          ],
          summaryData: [
            {
              data: '1级',
              desc: '北风',
            },
            {
              data: '51%',
              desc: '湿度',
            },
            {
              data: '21°',
              desc: '体感',
            },
            {
              data: '1012hPa',
              desc: '气压',
            },
          ],
          tipBoxData: [
            {
              icon: '',
              text: '适宜薄外套',
            },
            {
              icon: '',
              text: '紫外线较弱',
            },
            {
              icon: '',
              text: '宜户外运动',
            },
            {
              icon: '',
              text: '适宜薄洗车',
            },
            {
              icon: '',
              text: '不用带伞',
            },
            {
              icon: '',
              text: '较易感冒',
            },
          ],
        },
        {
          city: '北京',
          distrist: '海淀区',
          temperature: 24,
          weatherText: '大雨',
          recenterWeatherData: [
            {
              icon: '',
              time: '今天',
              weatherStatus: '晴转多云',
              quality: '良',
              maxTemperature: '23',
              minTemperature: '12',
            },
            {
              icon: '',
              time: '明天',
              weatherStatus: '多云',
              quality: '良',
              maxTemperature: '22',
              minTemperature: '14',
            },
            {
              icon: '',
              time: '周一',
              weatherStatus: '晴',
              quality: '良',
              maxTemperature: '23',
              minTemperature: '15',
            },
          ],
          hoursWeatherData,
          sunData: [
            {
              icon: 'src/assets/icon_cloudy.webp',
              desc: '日出',
              time: '07:04',
            },
            {
              icon: 'src/assets/icon_cloudy.webp',
              desc: '日落',
              time: '17:51',
            },
          ],
          summaryData: [
            {
              data: '1级',
              desc: '北风',
            },
            {
              data: '51%',
              desc: '湿度',
            },
            {
              data: '21°',
              desc: '体感',
            },
            {
              data: '1012hPa',
              desc: '气压',
            },
          ],
          tipBoxData: [
            {
              icon: '',
              text: '适宜薄外套',
            },
            {
              icon: '',
              text: '紫外线较弱',
            },
            {
              icon: '',
              text: '宜户外运动',
            },
            {
              icon: '',
              text: '适宜薄洗车',
            },
            {
              icon: '',
              text: '不用带伞',
            },
            {
              icon: '',
              text: '较易感冒',
            },
          ],
        },
      ],
      currentWeatherInfo: {
        city: '深圳',
        distrist: '宝安区',
        temperature: 26,
        weatherText: '晴',
        recenterWeatherData: [
          {
            icon: '',
            time: '今天',
            weatherStatus: '晴转多云',
            quality: '良',
            maxTemperature: '23',
            minTemperature: '12',
          },
          {
            icon: '',
            time: '明天',
            weatherStatus: '多云',
            quality: '良',
            maxTemperature: '22',
            minTemperature: '14',
          },
          {
            icon: '',
            time: '周一',
            weatherStatus: '晴',
            quality: '良',
            maxTemperature: '23',
            minTemperature: '15',
          },
        ],
        hoursWeatherData,
        sunData: [
          {
            icon: 'src/assets/icon_cloudy.webp',
            desc: '日出',
            time: '07:04',
          },
          {
            icon: 'src/assets/icon_cloudy.webp',
            desc: '日落',
            time: '17:51',
          },
        ],
        summaryData: [
          {
            data: '1级',
            desc: '北风',
          },
          {
            data: '51%',
            desc: '湿度',
          },
          {
            data: '21°',
            desc: '体感',
          },
          {
            data: '1012hPa',
            desc: '气压',
          },
        ],
        tipBoxData: [
          {
            icon: '',
            text: '适宜薄外套',
          },
          {
            icon: '',
            text: '紫外线较弱',
          },
          {
            icon: '',
            text: '宜户外运动',
          },
          {
            icon: '',
            text: '适宜薄洗车',
          },
          {
            icon: '',
            text: '不用带伞',
          },
          {
            icon: '',
            text: '较易感冒',
          },
        ],
      },
    };
  },
  actions: {
    updateCurrentWeatherInfo() {
      this.currentWeatherInfo = this.cityList[this.currentCityIndex];
    },
  },
});
